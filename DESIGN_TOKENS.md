# Design Tokens — Luel Dark Reimagining

Extracted from a live Playwright capture of https://www.luel.ai/ (desktop 1440px + mobile 390px,
July 3 2026) plus a Wayback Machine snapshot from Nov 30 2025 for section structure. Full method in
`capture/` script output (screenshots, computed styles, HTML) kept outside this repo in the
session scratchpad.

## ⚠️ Important finding — read before trusting "faithful" claims

**The live site is light-themed**, not dark: white background (`#ffffff`), near-black text,
a single navy accent (`rgb(5, 59, 132)` / `#053B84`), and a pixel-art blue mountain illustration in
the hero. Confirmed with a `prefers-color-scheme: dark` emulation (no response) and no toggle in
the DOM. A Nov 2025 Wayback snapshot is also light.

Per user decision, this build is a **dark reimagining**: same content structure, section order,
and information architecture as the real site, restyled with the dark "frontier lab" aesthetic
described in the brief. Colors below are therefore invented (not sampled from a dark live site,
because none exists) but derived from the real accent hue so the reimagining still reads as "the
same brand, in the dark." Every invented value is marked **(invented)**.

## Color

| Token | Value | Source |
|---|---|---|
| `--bg-base` | `#0a0a0a` | invented — brief's near-black floor |
| `--bg-raised` | `#111113` | invented — card/panel surface |
| `--bg-glass` | `rgba(255,255,255,0.04)` + blur | invented — glass panel fill |
| `--border-hairline` | `rgba(255,255,255,0.08)` | invented |
| `--text-primary` | `#F5F5F2` | invented — near-white, not pure #fff (softer) |
| `--text-secondary` | `rgba(245,245,242,0.62)` | invented |
| `--text-tertiary` | `rgba(245,245,242,0.38)` | invented |
| `--accent` | `#4C82E8` | derived — live site's `rgb(5,59,132)` lightened/saturated to glow on black |
| `--accent-dim` | `rgba(76,130,232,0.16)` | invented — accent wash for chips/badges |
| `--accent-glow` | `rgba(76,130,232,0.45)` | invented — radial glow behind hero art |

Rule: **one accent only** (the blue). No secondary color anywhere else in the UI.

## Typography

Sampled directly from computed styles on the live site.

| Level | Font | Size | Weight | Letter-spacing | Line-height |
|---|---|---|---|---|---|
| Font family | Geist, "Geist Fallback", sans-serif | — | — | — | — |
| H1 (hero) | Geist | 60px (desktop) / 36px (mobile, invented scale) | 300 | -3px | 1.05 |
| H2 (section) | Geist | 40px / 28px | 300 | -1.5px | 1.1 |
| H3 (card title) | Geist | 20px | 400 | -0.3px | 1.3 |
| Body | Geist | 16px | 300 | 0.4px | 1.6 |
| Small / label | Geist | 14px | 400 | -0.14px | 1.4 |
| Button label | Geist | 14px | 500 | -0.14px | 1 |

Note the real site's odd but deliberate pairing: **light (300) weight with *negative* tracking on
headings** (tight, expensive), but **light (300) weight with *positive* tracking on body text**
(airy, readable). Reproduced exactly — this detail is a big part of the "premium" feel.

## Spacing / Grid

| Token | Value | Source |
|---|---|---|
| `--content-max-width` | `1120px` | sampled (`--content-max-width` CSS var on live site) |
| Outer page gutter | `32px` (`px-8`) desktop, `16px` mobile | sampled |
| Section vertical rhythm | `80px` between major sections (`mt-20`) | sampled (footer margin) |
| Header height | `61px` | sampled |
| Card padding | `24–32px` | sampled |

## Radii / Shadows / Glass

| Token | Value | Source |
|---|---|---|
| `--radius-lg` (primary buttons, cards) | `14px` | sampled |
| `--radius-md` (small icon buttons) | `10px` | sampled |
| `--radius-full` (pills/badges) | `9999px` | inferred from nav pill buttons |
| Card border | `1px solid rgba(255,255,255,0.08)` | invented (dark equivalent of live site's flat card borders) |
| Glass panel | `background: rgba(255,255,255,0.04)`, `backdrop-filter: blur(20px)` | invented — live site uses `bg-white/80 backdrop-blur-md` on header; translated to dark glass |
| Film grain | SVG turbulence noise overlay, `opacity: 0.035`, `mix-blend-mode: overlay` | invented — not present on live site; added per brief's "premium, never flat" requirement |
| Glow | `radial-gradient` from `--accent-glow`, large blur radius, positioned behind hero art and section CTAs | invented |

## Motion

The live site itself is close to static (no scroll reveals detected in captured DOM/console).
Motion design below is **invented** per the brief's "capture the feel, not just static layout" and
"motion-heavy" framing — modeled on common frontier-lab-site conventions (Vercel, Linear, OpenAI
marketing pages) rather than sampled.

| Interaction | Spec |
|---|---|
| Scroll reveal | Fade + 16px translate-Y, `duration: 0.6s`, `ease: [0.16, 1, 0.3, 1]` (expo-out), staggered 80ms per child, trigger at 20% viewport intersection, `once: true` |
| Header | Transparent → glass (blur + border) after 24px scroll |
| Hero background | Slow (40s loop) drifting gradient/particle field behind mountain silhouette, `ease: linear` |
| Button hover | Scale `1.0 → 1.02`, glow opacity `0 → 1`, `duration: 0.2s` |
| Card hover | Border brightens `rgba(255,255,255,0.08) → 0.16`, subtle lift `translateY(-2px)` |
| Nav link underline | Width `0 → 100%` on hover, `duration: 0.25s` |

## Fidelity flags summary

- 🔴 **Theme**: entire dark palette is invented; live site is light. Explicitly approved by user as a "dark reimagining."
- 🟡 **Sections beyond hero**: current live homepage (July 2026) renders only Hero + Footer. Richer
  sections (value prop split, content-type grid, how-it-works) are reconstructed from a Nov 2025
  Wayback snapshot of the same site, with copy greeked per the brief's no-verbatim-copy rule.
- 🟢 **Typography, spacing, radii, accent hue, header behavior**: sampled directly from live computed styles.
- 🔴 **Motion**: invented; live site has no meaningful scroll motion today.
- 🔴 **Hero art**: live site uses a static pixel-art mountain bitmap. Reimagined as a dark glow/gradient
  "frontier" motif (CSS/SVG, no proprietary asset reproduced).
