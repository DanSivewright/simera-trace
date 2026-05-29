# Assessment Output Guide

This guide maps the client reference artifacts to Simera Trace assessment inputs
and product outputs.

## Source references

- `/Users/dan/Downloads/5pct_cost_per_tkm_financial_impact.html`
- `/Users/dan/Downloads/glubricant-benefits-summary.html`
- `docs/client-reference/5pct_cost_per_tkm_financial_impact.html`
- `docs/client-reference/glubricant-benefits-summary.html`

## Marketing copy vs assessment outputs (May 2026)

Public website copy is being revised per client feedback. Until code and model defaults are aligned:

| Topic | Marketing (proposed — see checklist) | Assessment / email / PDF (current) |
|-------|--------------------------------------|-------------------------------------|
| Diesel % bands | **8–13%** light vehicles; **3–5%** mining/heavy | **5–8%** typical; up to **8%** in several surfaces |
| Validation window | **4–6 weeks** | May still say ~30 days in places |
| Programme name | **Benefits trial** / **platform** in places | **Fuel savings trial** |

**Tracker:** [website-copy-checklist.md](./website-copy-checklist.md) — especially items **14**, **28**, **30–31**, and the “Downstream” section.

**Glossary (proposed terms):** [CONTEXT.md](../CONTEXT.md) — “Client feedback (May 2026)”.

Do not change assessment numeric outputs to match marketing until product explicitly schedules that pass (model, `assessment-report.tsx`, email templates, `pdf.ts`).

## Mapping

| Client section | Input source | Output location |
|---|---|---|
| Haulage cost, 5% saving, EBITDA cascade | `haulTruckCount`, `allInTruckCostM`, `ebitdaMarginPercent` | Assessment preview KPIs, API estimate snapshot, PDF executive summary |
| Fleet-size comparison bars | Derived from financial defaults | Assessment preview chart + PDF mini chart |
| Small/medium/large mine scenarios | Financial model + case assumptions | Assessment preview scenario cards + PDF scenario block |
| Mechanism matrix (A1-D1) | Static curated content | Assessment preview highlights + PDF appendix |
| Validation timeline | Static curated content | Assessment preview timeline + PDF appendix |
| Fuel litres and 5-8% range | `monthlyDieselBand`, `dieselPricePerLitre` | Existing operations row in preview + email body + PDF |

When marketing adopts **split vehicle-class bands**, add a row here for light vs heavy defaults and map to `packages/assessment-model` inputs.

## Brand and terminology rules

- Use `graphene lubricant`, not third-party brand names.
- Use `energy savings` in executive copy and `diesel/fuel savings` in numeric rows (or **asset performance** / **return on assets** where client May 2026 copy applies on the site).
- Keep all outputs marked as indicative until on-site validation protocol is complete.
- Prefer **4–6 weeks** for validation timeline in new copy; assessment static content may still reference the older window until updated.
