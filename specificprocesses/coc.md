# CoC — Certificate of Conformance

**Category:** Process Workflow · **Lifecycle:** FW5 High-Volume Manufacturing

## Summary

A Certificate of Conformance is a signed declaration issued with every shipping lot certifying that the product was manufactured per the qualified process and meets all customer specifications. The CoC is the legal artifact that allows the customer to accept the goods without re-testing each part; it is the operational currency of ISO 9001 quality systems and underpins the legal warranty between supplier and customer<span class="cite"> [1]</span>. In semiconductor foundries the CoC is signed by the Product Quality Engineer (Article 27) and travels with the lot through every downstream step until customer acceptance.

## Information content

A complete semiconductor-industry CoC contains seven information blocks:

**Lot identification** establishes the physical material the CoC certifies. It includes the lot number (the fab's internal tracking identifier), date code (year and week of production, used by customers for traceability and warranty calculations), fab site (with cleanroom classification and ISO 9001 certification reference), wafer count in the lot, and net good die count after probe sort. For lots split between multiple destinations, the CoC identifies which portion is covered.

**Product identification** establishes what the material is. It includes the customer's part number (the catalog number the customer uses internally), the foundry's internal product code, technology node and revision (e.g., "28 HPC v1.2"), and the mask revision used. The product identification ties the lot to a specific qualified configuration; any mismatch is a quality-system failure.

**Specification reference** establishes against what specification conformance is declared. Typically this is the customer's datasheet revision and any supplementary purchase-order specifications. The CoC also references the PRR document number (Article 26) and qualification report number, demonstrating that the product was formally released to HVM at the configuration shipped.

**Test results summary** is the data substantiating the conformance claim. It includes final-test yield (typically with a minimum threshold per the purchase order), parametric distributions for critical parameters with their Cpk values, IDDQ outlier counts using the 6σ rule, and any out-of-distribution units retained or scrapped. The summary is concise — the underlying test data is archived separately and available on customer request.

**Process traceability** points to the manufacturing recipe used. References include the qualified process recipe identifier, mask set revision, assembly site (if the fab outsources assembly), and any PCN-tracked changes that have been applied since the original qualification. This traceability is critical for field-failure root-cause investigation; when a failure occurs, the CoC is the entry point into the manufacturing record.

**Statement of conformance** is the legally binding declaration. The standard form is a single sentence: "The product described herein has been manufactured and tested per the qualified process and conforms to all customer specifications." Variations exist for customer-specific or regulatory requirements, but the substance is universal.

**Authorized signature** carries the legal weight. The signature must be by a named individual with documented release authority — in foundries, the PQE assigned to the product. The signature is accompanied by date and CoC number for archival reference. In modern operations the signature is electronic, with an audit trail in the Quality Management System.

## Legal and traceability function

Under ISO 9001:2015 §8.6 (Release of products and services), the supplier must retain documented evidence of conformity with acceptance criteria and the traceability of the persons authorizing release<span class="cite">[1]</span>. The CoC is the canonical record fulfilling this requirement. Without a properly executed CoC, the supplier cannot demonstrate that release authorization occurred per the QMS, which is a finding both in internal audits and in customer or third-party audits.

In the event of a field failure, the CoC is the document that establishes the chain of evidence from customer complaint back to the manufacturing lot. The investigation proceeds: customer reports a failed unit → unit serial number maps to a date code → date code maps to a CoC number → CoC identifies the manufacturing lot → manufacturing records (PCM data, SPC charts, FDC traces, lot history at every step) are pulled from archive → root cause is investigated. Without the CoC link, this investigation is impossible at scale.

## Customer-segment extensions

The base CoC structure is extended for stricter industries:

**Automotive (AEC-Q100, IATF 16949)** customers require PPAP (Production Part Approval Process) reference numbers, evidence of calibration for the test equipment that generated the test results, statistical evidence beyond Cpk (typically Ppk for short-term capability and confidence intervals), and explicit material-traceability declarations covering any change in suppliers. Automotive CoCs are noticeably longer and may include attached calibration certificates.

**Aerospace (AS9100)** customers require additional inspection certificates, special-process certifications for any process step that affects critical-to-quality characteristics, and counterfeit-mitigation declarations under AS6171.

**Medical (ISO 13485)** customers require bio-compatibility statements where applicable, sterilization-process declarations for products that interface with sterilized devices, and stricter traceability requirements aligned with FDA 21 CFR Part 820.

## Format and delivery

Modern foundries deliver CoCs electronically through customer portals or EDI (Electronic Data Interchange) systems, with the printed form generated on demand. The electronic format includes a digital signature that the customer's QMS can verify against the supplier's certificate. Lot-level barcodes on shipping containers link to the relevant CoC; customer receiving operations scan the barcode and download the CoC before accepting goods.

The CoC is typically a one-page document. Excessive length suggests the supplier is hiding behind boilerplate rather than substantiating conformance with focused data. The customer's right is to receive enough information to verify conformance; the supplier's right is to not over-disclose proprietary process information beyond what conformance demonstrates.

## What invalidates a CoC

Several conditions invalidate a CoC and constitute serious quality-system failures:

- Test results not flagged on the CoC that fall outside the customer specification, even if marginal.
- Manufacturing per an unqualified process recipe, mask revision, or assembly site.
- Signature by someone without documented release authority.
- Absence of a corresponding PRR release for the product / process combination.
- Reference to a PCN that has not yet completed its customer acceptance period.
- Reference to a qualification report that does not cover the actual operating conditions the customer has stated.

Customer audits look specifically for these failure modes. Discovery of any one triggers customer corrective-action requests and, in repeat cases, supplier disqualification.

## Cross-references

- **<a href="#prr">PRR</a>** (Article 26) — the gate that authorizes the configuration being certified.
- **<a href="#pqe">PQE</a>** (Article 27) — the signer.
- **<a href="#pcn">PCN</a>** (Article 21) — the change-management process whose status is referenced.
- **<a href="#prod-qual">Product Qualification</a>** (Article 18) — the basis for the conformance claim.

## References

[1] ISO 9001:2015, _Quality Management Systems — Requirements_. §8.6 (Release of products and services) requires documented release authorization. §8.5.2 (Identification and traceability) requires the traceability that the CoC enables. IATF 16949:2016 §8.6 adds automotive-specific PPAP submission requirements.

[2] JEDEC Solid State Technology Association, _JEDEC Publication No. 001-3A: Foundry Process Qualification Guidelines – Product Level_. §8.2.2 (Report requirements) defines the JEDEC content guidance that informs CoC structure for foundry shipments, including the data fields that substantiate conformance.