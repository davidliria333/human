import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const staticRoot = path.join(projectRoot, "site-static");
const distRoot = path.join(projectRoot, "dist");
const clientRoot = path.join(distRoot, "client");

const CONTENT_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2",
};

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFiles(absolutePath)));
    } else if (entry.isFile()) {
      files.push(absolutePath);
    }
  }

  return files;
}

await rm(distRoot, { recursive: true, force: true });
await mkdir(path.join(distRoot, "server"), { recursive: true });
await mkdir(path.join(distRoot, ".openai"), { recursive: true });
await cp(staticRoot, clientRoot, { recursive: true });
await rm(path.join(clientRoot, "index.html"), { force: true });
for (const blockedRoute of ["contribute", "marketplace"]) {
  await rm(path.join(clientRoot, `${blockedRoute}.html`), { force: true });
  await rm(path.join(clientRoot, `${blockedRoute}.txt`), { force: true });
  await rm(path.join(clientRoot, blockedRoute), { recursive: true, force: true });
}
await cp(
  path.join(projectRoot, ".openai", "hosting.json"),
  path.join(distRoot, ".openai", "hosting.json"),
);

const assets = {};
for (const file of await listFiles(staticRoot)) {
  const route = `/${path.relative(staticRoot, file).split(path.sep).join("/")}`;
  const extension = path.extname(file).toLowerCase();
  assets[route] = [
    CONTENT_TYPES[extension] ?? "application/octet-stream",
    (await readFile(file)).toString("base64"),
  ];
}

const workerSource = `const ASSETS = ${JSON.stringify(assets)};

function assetForPath(pathname) {
  const decoded = decodeURIComponent(pathname);
  const withoutTrailingSlash = decoded.length > 1 ? decoded.replace(/\\/$/, "") : decoded;
  const candidates = [
    decoded,
    withoutTrailingSlash,
    withoutTrailingSlash === "/" ? "/index.html" : withoutTrailingSlash + ".html",
    withoutTrailingSlash === "/" ? "/index.html" : withoutTrailingSlash + "/index.html",
  ];

  for (const candidate of candidates) {
    if (ASSETS[candidate]) return ASSETS[candidate];
  }

  return ASSETS["/404.html"] ?? null;
}

function decodeBase64(value) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (["/landing-exploration1", "/landing-exploration1/", "/landing-exploration1.html"].includes(url.pathname)) {
      const landing = ASSETS["/landing-exploration1.html"] ?? ASSETS["/index.html"];
      return new Response(request.method === "HEAD" ? null : decodeBase64(landing[1]), {
        status: 200,
        headers: {
          "content-type": landing[0],
          "cache-control": "no-cache",
        },
      });
    }
    if (["/contribute", "/contribute.html", "/marketplace", "/marketplace.html"].includes(url.pathname)) {
      return Response.redirect(new URL("/", url), 302);
    }
    const asset = assetForPath(url.pathname);
    if (!asset) return new Response("Not found", { status: 404 });

    const [contentType, base64] = asset;
    const isNotFound = !ASSETS[url.pathname] && asset === ASSETS["/404.html"];
    return new Response(request.method === "HEAD" ? null : decodeBase64(base64), {
      status: isNotFound ? 404 : 200,
      headers: {
        "content-type": contentType,
        "cache-control": url.pathname.startsWith("/_next/static/")
          ? "public, max-age=31536000, immutable"
          : contentType.startsWith("text/html")
            ? "no-cache"
            : "public, max-age=300",
      },
    });
  },
};
`;

await writeFile(path.join(distRoot, "server", "index.js"), workerSource, "utf8");
console.log(`Built Sites package with ${Object.keys(assets).length} embedded assets.`);
