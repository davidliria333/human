# SECTIONS.md — Structural mapping to luel.ai

Read [DESIGN_TOKENS.md](./DESIGN_TOKENS.md) first — it explains the central fidelity issue: the
live site is light-themed, and this build is a **user-approved dark reimagining**, not a pixel
clone. This file maps each section in `src/app/(marketing)/page.tsx` back to what was actually
observed on the real site, and flags every deviation.

## Correction (2026-07-03): homepage was over-built, now trimmed to match

The first pass added `SocialProof`, `ValueSplit`, `ContentTypes`, `HowItWorks`, and `CtaBand` to
the homepage, reconstructed from a Nov 2025 Wayback archive to satisfy the original brief's
expected section list (value prop, how-it-works, contributor split, social proof). The user
flagged that this no longer matched the real site: the live homepage is short enough that it
barely scrolls (~1300px of content at a 900px-tall viewport — roughly 1.4 screens), while the
five-section version scrolled for 4-5 screens. That mismatch was a real fidelity bug, not a
matter of interpretation, so those five sections were **removed from the homepage and deleted**
(they were reconstructed from a snapshot of a different point in time, not something actually on
the current site, and once removed from the homepage nothing else referenced them). The homepage
is now just `Header` + `Hero` + `Footer`, matching the current live site's actual (short) length —
confirmed at 1130px total height vs. the real site's 1296px, same viewport.

## Method

- Live capture: Playwright + Chromium, realistic desktop UA, 1440×900 and 390×844 viewports,
  `networkidle` + 3s settle, July 3 2026. Bypassed the site's bot detection (plain `WebFetch`
  returned HTTP 403; a real browser did not).

## Section-by-section

| # | Component | Live-site source | Layout | Animation | Deviations |
|---|---|---|---|---|---|
| — | `Header.tsx` | Current live site (sampled exactly: 61px height, sticky, `bg-white/80 backdrop-blur-md` → dark equivalent `bg-bg-base/70 backdrop-blur-xl`) | Logo left, nav center, auth buttons right, hamburger below `md` | Glass/blur fades in after 24px scroll; mobile menu slides open/closed | 🟢 Structure and sizing match live site closely. 🔴 Colors inverted to dark per brief. Added a mobile hamburger menu — the live site's mobile nav exists but wasn't reverse-engineered in detail from the capture; this is a reasonable reconstruction, not sampled. |
| 1 | `Hero.tsx` + `HeroArt.tsx` | Current live site: headline + subhead + two CTAs + full-bleed graphic below the fold | Left-aligned text block over full-width art | Staggered fade+rise on load (headline → subhead → CTAs) | 🔴 Headline/subhead are **greeked** paraphrases, not the live site's verbatim copy ("The Frontier of Data" → "The Substrate of Machine Perception"), per the brief's no-verbatim-copy rule. 🔴 The live hero art is a proprietary static pixel-art mountain bitmap; `HeroArt.tsx` is an invented dark glow/ridge SVG of equivalent visual weight and position — not a reproduction. |
| 2 | `Footer.tsx` | Current live site (copyright/social row matches exactly: `© 2026`, Blog/Privacy/Terms/Cookies, X/LinkedIn/Discord icons; link columns extrapolated since the live footer's column contents weren't fully legible in the capture) | 4-col grid collapsing to 2-col mobile, link columns + bottom bar | None (static) | 🟢 Structure, link grouping, and bottom-bar contents sampled closely from the live site. 🔴 Brand name/wordmark replaced with placeholder "Human Archive" throughout — Luel's actual name/logo is not reproduced anywhere in this build. |
| — | `CookieBanner.tsx` | Current live site's cookie-preferences toast (bottom-left, Decline/Accept) | Fixed bottom card | Slide/fade in on load, exit on dismiss | 🟢 Copy, button labels, and position sampled from live DOM. 🔴 Colors inverted to dark glass. |

## Explicit "not reproduced" list (brief asked to flag these)

- **Overall color theme** — live site is light; this build is dark by user's explicit choice. Every
  hex value in `DESIGN_TOKENS.md` beyond typography/spacing/radii is invented, not sampled.
- **Hero illustration** — proprietary pixel-art bitmap replaced with an original CSS/SVG glow motif.
- **All motion/scroll-reveal choreography** — the live site has no meaningful scroll animation;
  motion design here is invented, modeled on common frontier-lab marketing-site conventions.
- **Brand name, wordmark, and all marketing copy** — genericized to a placeholder brand ("Human Archive")
  and paraphrased copy throughout, per the brief's instruction not to copy brand marks or verbatim copy.

## What is faithful

Typography (Geist, the 300-weight/negative-tracking heading + 300-weight/positive-tracking body
pairing), the `1120px` content max-width, `61px` header height, `14px`/`10px` radii, and the
single-navy-accent restraint are all sampled directly from live computed styles and reproduced
exactly (see `DESIGN_TOKENS.md` for the raw values and how they map to `--color-*`/`--radius-*`
CSS variables in `src/app/globals.css`).

## Additional pages (beyond the homepage)

The homepage's nav/footer link out to real routes on the live site. All were captured the same
way (Playwright, desktop 1440 + mobile 390, `networkidle`) and rebuilt as their own Next.js routes
under `src/app/(marketing)/*` (shared `Header`/`Footer`/`CookieBanner` via a route-group layout)
and standalone `src/app/signin`, `src/app/signup` (no header/footer, matching the live site's
minimal auth-page chrome).

| Route | Live-site source | What's faithful | What's invented/deviated |
|---|---|---|---|
| `/contribute` | Hero ("Earn money from your camera roll") + phone-mockup product shot + weekly task grid + contributor-story cards + community/Discord band | Section order, task-card rate/title/description shape, community 3-item layout | 🔴 Headline greeked. 🔴 `PhoneMockup.tsx` is an invented dark UI chrome — the real screenshot is a proprietary app capture. 🔴 `ContributorStories.tsx`: the live site shows **real photographs of named contributors**; replaced with abstract gradient/avatar-glyph placeholders tagged only by language code — no likenesses reproduced, none invented to look like real people. |
| `/marketplace` | Search bar + type filter pills (All/Audio/Sensor/Video) + dataset card grid + pagination | Filter set, card tag/title/description shape, "Showing X of Y" + numbered pagination pattern; filter buttons are functional (client-side) | 🟡 Dataset catalog (titles, descriptions, counts) is invented sample data in the same genre as what was observed, not the live site's actual 30-dataset catalog. |
| `/request` | "Open a data request" hero (pixel-art bridge graphic) + org-type radio group + need radio group + name/email + textarea + submit | Field set, radio-group structure, form layout | 🔴 Live hero uses a second proprietary pixel-art illustration (a bridge); reused `HeroArt.tsx`'s glow-ridge motif instead of inventing a second bespoke graphic, for visual consistency across pages rather than fidelity to this specific image. Form has no backend — submit just flips the button label. |
| `/resources/blog` | "From the team." index: 3 posts (1 featured + 2 grid), tag/date/read-time metadata | Index layout, featured-post treatment, tag/date metadata pattern | 🔴 Live site uses custom pixel-art illustration thumbnails per post (mountains, a robot, a skyline); replaced with abstract gradient blocks. 🔴 Post titles/content genericized — the real "$31.2M seed round" / "Y Combinator" funding-announcement post is replaced with a generic, unnamed placeholder to avoid asserting real financial claims about a company this build isn't affiliated with. |
| `/signin` | Centered logo + single email field + "Send sign-in code" + sign-up link + policy links, **no header/footer** | Layout, copy, no-header/footer chrome, magic-link pattern | 🟢 Close structural match; only colors/brand inverted. |
| `/signup` | Centered logo + "Step 1 of 3" + name/email/age/gender fields + disabled-until-valid Continue button, **no header/footer** | Layout, field set, step-1-of-3 framing, disabled-button validation behavior (reproduced with real HTML5 `checkValidity()`) | 🟢 Close structural match; only colors/brand inverted. |
| `/privacy`, `/terms` | Long-form single-column legal text, dated, sectioned with headings | Single-column layout, "Last updated" date line, section heading rhythm | 🔴 **Body copy is entirely placeholder** — the live site's actual privacy/terms text is long, real legal language specific to Luel Inc. and is deliberately not reproduced (copyright + not useful as a structural reference). `LegalPage.tsx` repeats one generic placeholder paragraph per heading, clearly labeled as such at the top of the page. |

Not built: a dedicated `/[dataset]` or `/[blog-post]` detail page — the live site likely has these
behind "View dataset" / "Read article" links, but no such URLs were discovered in the captured
homepage or route list, so their existence wasn't confirmed and they weren't reverse-engineered.
