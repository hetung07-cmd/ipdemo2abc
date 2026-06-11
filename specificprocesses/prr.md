# PRR — Product Release Review

**Category:** Process Workflow · **Lifecycle:** FW5 High-Volume Manufacturing

## Summary

The Product Release Review is the formal gate at which a customer product transitions from qualification to high-volume production. At PRR, a cross-functional team reviews the complete qualification evidence package and either releases the product to HVM, holds for additional data, or returns the product to qualification. PRR is the last gate the fab controls before customer shipping starts; everything after PRR is execution against a locked configuration<span class="cite"> [1]</span>.

## What PRR reviews

The PRR package consolidates the outputs of every prior phase into a single decision-ready document. The standard contents reflect the JEDEC JEP013A §3 responsibilities for the foundry-customer interface and the §8.2.2 report requirements<span class="cite"> [1]</span>:

- **Product Qualification report** — the JEP013A stress-matrix results covered in Article 18, including High-Temperature Operating Life (HTOL) at 125 °C / VCCMAX / 1000 hours, Highly Accelerated Stress Test (HAST) at 130 °C / 85 % RH / 96 hours, Temperature Cycling from −65 °C to +150 °C / 1000 cycles, ESD per JESD22-A114 / -A115 / -C101, and latch-up per JESD78. The report must include sample size (minimum 231 DUTs from 3 lots), percent failures at each readout point, and projected failure rate in DPPM at a stated number of use hours<span class="cite"> [1]</span>.

- **Construction Analysis report** — the JEP012A §13 deliverable described in Article 17, with cross-sectional SEM/TEM images of all critical structures, layer-thickness measurements, and confirmation that the as-built device matches the technology description.

- **PCM characterization summary** — parametric distributions versus specification for every monitored parameter, with Cpk values for the critical few. JEP132A capability conventions apply: Cpk ≥ 1.33 is the standard target for critical parameters, Cpk ≥ 1.67 for safety-critical or automotive products.

- **Yield data** — pilot lot yield, projected mature yield, defect Pareto. Yield projections drive customer demand planning and pricing.

- **FMEA update** — both PFMEA and DFMEA (Article 3) updated with any new failure modes discovered during pilot and any RPN revisions arising from corrective actions taken.

- **Test program qualification** — DFT coverage (Article 14), ATPG fault grade by fault type, IDDQ test methodology, final-test time per die, and tester-platform qualification.

- **Package qualification** — assembly-site qualification, package material qualification, and any package-specific reliability data (drop test, vibration, board-mount reliability).

- **Customer-specific waivers** — any departures from standard process or test, each with a documented risk assessment and customer sign-off.

## The decision

The PRR has three possible outcomes:

- **RELEASE to HVM.** All evidence supports the product meeting customer specifications and reliability requirements at expected volumes. Customer purchase orders can be accepted; the first production lots ship with Certificates of Conformance (Article 28) issued by the PQE (Article 27). The product is locked at the configuration as of the PRR date; subsequent changes require a Process Change Notification (Article 21) and possibly partial re-qualification.

- **HOLD for additional data.** A specific gap is identified in the evidence — perhaps an early-life test that did not complete the full readout schedule, or a yield data point that needs more lots for confidence. A written gap-closure plan with a target date is published, and the PRR is reconvened when the gap is closed. Hold periods typically run 4-12 weeks.

- **RETURN to qualification.** Rare and serious; indicates that qualification execution was deficient. The product re-enters the qualification flow from the affected stage. A RETURN outcome triggers a fab-side audit to determine what went wrong with the qualification process itself, not just this specific product.

## Attendees and roles

The PRR is chaired by the Product Quality Engineer (PQE, Article 27) and attended by representatives of every function that produced evidence:

- **Process Engineering (N1)** presents process readiness — recipe lock status, recent SPC trends, any open process issues.
- **Reliability / Qual (N5)** presents the JEP013A qualification stress-test results and the FIT-rate projection per JESD85.
- **Test / PE (N4)** presents the test program coverage report and the pilot-lot yield trend.
- **Package Engineering** presents assembly-site readiness and package qualification data.
- **Customer Quality** attends when contractually entitled (typical for automotive and aerospace customers) and may have explicit consent rights on the release decision.

The chair owns the agenda, drives the discussion, and is accountable for the final decision. The chair's authority to release is delegated from the fab quality management system per ISO 9001 §8.6<span class="cite"> [2]</span>.

## The post-PRR contract

Once PRR releases a product, the fab is contractually obligated to manufacture that product per the configuration locked at PRR. Any deviation requires PCN. The customer is obligated to provide demand forecasts and purchase orders against the released specification. The configuration baseline includes: process recipe of record, mask set revision, test program version, package material, assembly site, and the JEP013A qualification report number. Customer requests for any of these to change are routed through the PCN process and may require partial re-qualification depending on the change classification.

## Relationship to automotive PPAP

For automotive customers, the IATF 16949 standard requires Production Part Approval Process (PPAP) submission. PPAP is the automotive analog of PRR and includes most of the same evidence plus additional items: capability studies on key characteristics, measurement system analysis (MSA, Article 4), control plans, and submission warrants signed by the supplier's quality manage<span class="cite"> [2]</span>. A foundry serving automotive customers structures its PRR to produce a PPAP-ready package directly.

## Cross-references

- **<a href="#prod-qual">Product Qualification</a>** (Article 18) — produces the central piece of PRR evidence.
- **<a href="#construct">Construction Analysis</a>** (Article 17) — required deliverable per JEP012A §13.
- **<a href="#pqe">PQE</a>** (Article 27) — chairs the PRR.
- **<a href="#coc">CoC</a>** (Article 28) — issued for the first production lots after release.
- **<a href="#pcn">PCN</a>** (Article 21) — the only mechanism for changing a product configuration after PRR.

## References

[1] JEDEC Solid State Technology Association, _JEDEC Publication No. 001-3A: Foundry Process Qualification Guidelines – Product Level_. §3 (Responsibilities) defines the foundry-customer interface that PRR implements; §7 (Qualification test summary) and §8.2.2 (Report requirements) define the evidence content.

[2] ISO 9001:2015, _Quality Management Systems — Requirements_, §8.6 (Release of products and services). IATF 16949:2016 Annex A adds automotive-specific PPAP submission requirements that map onto the PRR evidence package.