# Website copy checklist (client feedback, May 2026)

Tracker for copy and design changes from **Simera Trace website.docx** (Nicolas Lategan, track changes). Work through items in order; check `[x]` when implemented in code.

**Source doc:** `/Users/dan/Downloads/Simera Trace website.docx`

## How the doc was read

Word **Track Changes** (not visual red/strikethrough in this repo) maps to OOXML:

| What you see in Word | XML |
|----------------------|-----|
| Red strikethrough (deleted) | `<w:del>` + `<w:delText>` |
| New / revised text | `<w:ins>` + `<w:t>` |

Parsed `word/document.xml`: **44 paragraphs** with revisions. **OLD** = deleted + unchanged runs; **NEW** = inserted + unchanged runs. Parenthetical notes (logo size, navy blue, ESG add) are listed under **Design / notes**—they are not always track-change pairs.

**Canonical glossary (proposed):** [CONTEXT.md](../CONTEXT.md)  
**Assessment outputs vs marketing %:** [assessment-output-guide.md](./assessment-output-guide.md)

---

## Legend

| Column | Meaning |
|--------|---------|
| **Owner** | `you` = implement in TSX/CSS/assets; `docs` = glossary/guides only |
| **Conflict** | `Y` = conflicts with prior locked copy plan ([simera_trace_copy](.cursor/plans/simera_trace_copy_b89b4814.plan.md) baseline) |
| **Status** | Leave blank until done; optional: `done`, `skip`, `blocked` |

---

## Design / notes (not always OLD→NEW)

| # | Done | Item | Implement in | Owner | Conflict | Notes |
|---|------|------|--------------|-------|----------|-------|
| D1 | [x] | Logo slightly bigger; official **purple** logo | `apps/web/src/components/header.tsx`, `apps/web/public/Simera-Trace-Logo-Purple.png` | you | N | Header updated to purple asset 120×120. `page.tsx` logos still black—separate pass. |
| D2 | [ ] | Replace UI **purple with navy blue** (client note on Qualification Assessment) | `packages/ui/src/styles/globals.css`, badges in `page.tsx` | you | Y | Brand logo file stays purple; UI chrome goes navy. |
| D3 | [ ] | Remove top-banner CTA **Start your trial** | `apps/web/src/app/layout.tsx` | you | Y | Deleted in doc with no replacement. |
| D4 | [ ] | Remove header **Request a trial**; simplify assessment CTA label | `apps/web/src/components/header.tsx` | you | Y | Doc removes separate "Qualification" / "Assessment" words—confirm final button label. |
| D5 | [ ] | **New FAQ — ESG** (27% NOx, ~55 t CO₂/haul truck/year, PM/HC, oil waste) | `apps/web/src/app/page.tsx` FAQ | you | Y | New content; validate claims before publish. |

---

## Copy changes (track changes)

### Banner & header

| # | Done | Area | OLD → NEW | Implement in | Owner | Conflict |
|---|------|------|-----------|--------------|-------|----------|
| 1 | [ ] | Banner strip | `First in Africa — graphene fuel savings for mining · On-site trials, typically 5–8% diesel savings` → `Using graphene for improved asset performance and return on assets` | `apps/web/src/app/layout.tsx` ~L39–45 | you | Y |
| 2 | [ ] | Banner CTA | `Start your trial` → *(remove)* | `layout.tsx` ~L47–51 | you | Y |
| 3 | [ ] | Logo | *(note)* bigger + purple logo | `header.tsx` | you | N | See D1 |
| 4 | [ ] | Header CTA | `Request a trial` → *(remove)* | `header.tsx` ~L55–61 | you | Y |
| 5 | [ ] | Header button | `Qualification` (word) → *(remove?)* | `header.tsx` ~L65 | you | Y | Confirm with #6 |
| 6 | [ ] | Header button | `Assessment` (word) → *(remove?)* | `header.tsx` ~L65 | you | Y | Confirm final CTA text |

### Hero

| # | Done | Area | OLD → NEW | Implement in | Owner | Conflict |
|---|------|------|-----------|--------------|-------|----------|
| 7 | [ ] | Hero badge | `First in Africa` → `Pioneering the benefits of graphene in Africa` | `page.tsx` ~L182 | you | Y |
| 8 | [ ] | Hero badge subline | `Graphene experts for mining` → *(remove)* | `page.tsx` ~L185 | you | Y |
| 9 | [ ] | Hero H1 | `Cut energy costs. Extend machine life.` → `See how an atom thick graphene can increase your company value` | `page.tsx` ~L189–191 | you | Y |
| 10 | [ ] | Hero sub | `…on-site fuel savings trial you can measure in weeks, not years.` → `A proven graphene lubricant platform that will save diesel, extend oil life, increase vehicle availability, extend engine life and increase return on assets.` | `page.tsx` ~L192–195 | you | Y | Fix typo: *asset* → *assets* |
| 11 | [ ] | Hero primary CTA | `Qualification Assessment` (+ navy not purple) | `page.tsx` ~L199–202 | you | Y | See D2 |
| 12 | [ ] | Hero checklist | `Less wear on haul trucks, loaders, and gensets` → `Less engine wear across all equipment` | `page.tsx` checklist | you | N |
| 13 | [ ] | Hero checklist | `Validated on your mine in about 30 days` → `Impact validated within 4-6 weeks` | `page.tsx` checklist | you | Y |

### Audience tabs — For leadership

| # | Done | Area | OLD → NEW | Implement in | Owner | Conflict |
|---|------|------|-----------|--------------|-------|----------|
| 14 | [ ] | Leadership card body | `Up to 8% fuel reduction in trial conditions—typically 5–8% once validated on your mine.` → `Validated 8%-13% fuel savings in light vehicles—expected 3%-5% savings for mining vehicles.` | `page.tsx` `audienceTabs` ~L54–55 | you | Y | Also: assessment, email, PDF |
| 15 | [ ] | Card link (all tabs) | `Take assessment` → `Assess your savings` | `page.tsx` ~L156 | you | Y | Third card: #22 |
| 16 | [ ] | Card title | `Cut diesel spend` → *(remove?)* | `page.tsx` | you | Y | Verify UI—client deleted in one place |
| 17 | [ ] | Card body | `See how lubrication-led efficiency can shift cost per tonne-kilometre—using your fleet and operating inputs.` → `Graphene unlocks lubrication efficiency to improve cost per tonne-kilometre.` | `page.tsx` ~L61–62 | you | N |
| 18 | [ ] | Card link | `Take assessment` → `Assess your savings` | same as #15 | you | Y |
| 19 | [ ] | Card title | `Haulage economics` → *(removed in doc)* | `page.tsx` ~L60 | you | Y | Hide card or rename—confirm |
| 20 | [ ] | Card title | `Numbers before commitment` → `Impact on company value` | `page.tsx` ~L67 | you | Y |
| 21 | [ ] | Card body | `The free assessment models indicative fuel and financial impact—then book the on-site trial for validation.` → `Graphene based savings directly increase net profit and company value.` | `page.tsx` ~L68–69 | you | Y |
| 22 | [ ] | Card link (3rd card only) | `Take assessment` → `See the impact` | `page.tsx` leadership tab, third card | you | Y |

### Trust strip & how it works

| # | Done | Area | OLD → NEW | Implement in | Owner | Conflict |
|---|------|------|-----------|--------------|-------|----------|
| 23 | [ ] | Trust strip | `Built for mining operations in Africa and the Middle East` → `Using graphene for improved asset performance and return on assets` | `page.tsx` segmented control area | you | Y |
| 24 | [ ] | Section title | `From first call to proven savings` → `First we prove the savings` | `page.tsx` accordion | you | Y |
| 25 | [ ] | Side intro | Pioneer/trial paragraph → `We work with your team to design protocols to compare improvements against your base data.` | `page.tsx` | you | Y |
| 26 | [ ] | Graphene 1-min | `cuts friction…moves heat away…mixed into the oil you already use.` → `single atom thick…reduces friction…removes heat…without disruption to your operations` | `page.tsx` | you | N |

### Mining section

| # | Done | Area | OLD → NEW | Implement in | Owner | Conflict |
|---|------|------|-----------|--------------|-------|----------|
| 27 | [ ] | Body | `friction drops` → `friction reduces` | `page.tsx` mining narrative | you | N |
| 28 | [ ] | Body | `fuel savings trial` → `benefits trial` | `page.tsx`, `about`, `contact` | you | Y |
| 29 | [ ] | Body | `how you run today` → `based on your data` | `page.tsx` | you | N |

### Stats strip

| # | Done | Area | OLD → NEW | Implement in | Owner | Conflict |
|---|------|------|-----------|--------------|-------|----------|
| 30 | [ ] | Big stat | `Up to 8%` → `Validate 8%-13%` | `page.tsx` stats | you | Y |
| 31 | [ ] | Stat sub | `trial conditions…5–8% once validated on site` → `light vehicles…expected 3–5% savings on heavy equipment` | `page.tsx` stats | you | Y |
| 32 | [ ] | Wear stat | `Smoother metal surfaces and` → `The tribochemical action of graphene reconditions the engine from the inside and provides` | `page.tsx` | you | Y |
| 33 | [ ] | Timeline | `~30 days` → `4-6 weeks` | `page.tsx` | you | Y |
| 34 | [ ] | Timeline sub | `Typical window to validate results on your operation` → `The typical validation period on your operation` | `page.tsx` | you | N | Grammar fix vs client *validate period* |

### Why graphene / innovation

| # | Done | Area | OLD → NEW | Implement in | Owner | Conflict |
|---|------|------|-----------|--------------|-------|----------|
| 35 | [ ] | Science blurb | Add **inert**, **ultralubrication**, **50% friction**, **20–70% wear**, **Point of Seizure 30%** | `page.tsx` innovation | you | Y | Validate % with client |
| 36 | [ ] | Feature | `oil film is thin` → `oil film disintegrates` | `page.tsx` | you | N |
| 37 | [ ] | New block | **Tribochemical action** paragraph (fix *scraes* → *scars*) | `page.tsx` | you | Y | New content |

### Trial programme & FAQ

| # | Done | Area | OLD → NEW | Implement in | Owner | Conflict |
|---|------|------|-----------|--------------|-------|----------|
| 38 | [ ] | Trial card | `Up to 8%` → *(remove)* | `page.tsx` trial card | you | Y |
| 39 | [ ] | Trial card | `diesel` → *(remove)* | `page.tsx` trial card | you | Y |
| 40 | [ ] | Trial card | `typical range 5–8% after validation` → `Discover the savings you will achieve` | `page.tsx` trial card | you | Y |
| 41 | [ ] | FAQ | `No capital outlay to start` → `No capital outlay or disruption to operations` | `page.tsx` FAQ | you | N |
| 42 | [ ] | FAQ | *(add)* ESG Q&A | `page.tsx` FAQ | you | Y | See D5 |

### Footer

| # | Done | Area | OLD → NEW | Implement in | Owner | Conflict |
|---|------|------|-----------|--------------|-------|----------|
| 43 | [ ] | Footer CTA | `Ready to cut energy costs at your mine?` → `ESG benefits, download the complete estimate?` | `page.tsx` ~L1131 | you | Y | Needs link target |

---

## Downstream (after homepage stats/CTAs)

Apply when items **14**, **28**, **30–31** are stable:

| File | Why |
|------|-----|
| `apps/web/src/app/about/page.tsx` | Still uses 5–8%, fuel savings trial |
| `apps/web/src/app/assessment/page.tsx` | Intro copy, CTA |
| `apps/web/src/components/forms/assessment-report.tsx` | 5–8% display |
| `packages/email/src/templates/assessment-results.tsx` | Email copy |
| `packages/email/src/pdf.ts` | PDF disclaimer / ranges |
| `packages/assessment-model/` | Model defaults if bands change |

---

## Conflicts to resolve

- **5–8% / up to 8%** (site + assessment) vs **8–13% light / 3–5% mining** (client doc).
- **First in Africa** vs **Pioneering the benefits of graphene in Africa**.
- **Fuel savings trial** vs **benefits trial** / **platform**.
- **Footer ESG CTA** — no download URL in doc.
- Typos when implementing: *return on asset*, *validate period*, *scraes*, *doesn't'*.

---

## Progress summary

| Section | Total | Done |
|---------|-------|------|
| Design / notes | 5 | 1 |
| Copy (#1–43) | 43 | 0 |
| **Total** | **48** | **1** |
