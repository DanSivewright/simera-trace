# Assessment Output Guide

This guide maps the client reference artifacts to Simera Trace assessment inputs
and product outputs.

## Source references

- `/Users/dan/Downloads/5pct_cost_per_tkm_financial_impact.html`
- `/Users/dan/Downloads/glubricant-benefits-summary.html`
- `docs/client-reference/5pct_cost_per_tkm_financial_impact.html`
- `docs/client-reference/glubricant-benefits-summary.html`

## Mapping

| Client section | Input source | Output location |
|---|---|---|
| Haulage cost, 5% saving, EBITDA cascade | `haulTruckCount`, `allInTruckCostM`, `ebitdaMarginPercent` | Assessment preview KPIs, API estimate snapshot, PDF executive summary |
| Fleet-size comparison bars | Derived from financial defaults | Assessment preview chart + PDF mini chart |
| Small/medium/large mine scenarios | Financial model + case assumptions | Assessment preview scenario cards + PDF scenario block |
| Mechanism matrix (A1-D1) | Static curated content | Assessment preview highlights + PDF appendix |
| Validation timeline | Static curated content | Assessment preview timeline + PDF appendix |
| Fuel litres and 5-8% range | `monthlyDieselBand`, `dieselPricePerLitre` | Existing operations row in preview + email body + PDF |

## Brand and terminology rules

- Use `graphene lubricant`, not third-party brand names.
- Use `energy savings` in executive copy and `diesel/fuel savings` in numeric rows.
- Keep all outputs marked as indicative until on-site validation protocol is complete.

