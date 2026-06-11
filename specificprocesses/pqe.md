# PQE — Product Quality Engineer

**Category:** Process Workflow · **Lifecycle:** FW5 High-Volume Manufacturing

## Summary

The Product Quality Engineer is the fab-side engineer who owns the end-to-end quality of a specific customer product across its lifecycle. The PQE is the single technical interface between the foundry and the customer's quality organization: they chair the Product Release Review (Article 26), sign the Certificate of Conformance (Article 28), lead customer 8D responses to field failures, own all Process Change Notifications (Article 21) that affect the product, and maintain the product's FMEA. The role corresponds to the "Manufacturer" responsibilities described in JEDEC JEP013A §3<span class="cite">[1]</span>.

## Role definition

The PQE role is found in every modern foundry under various titles — Customer Quality Engineer, Customer Engineer, Product Engineer, CQE — but the responsibility is the same: be the customer's technical advocate inside the fab and be the fab's technical voice outside it. Unlike Process Engineers who own a process module (etch, litho, CMP) or Test Engineers who own a test step (probe, final test), the PQE owns one product or a small portfolio of products across the entire flow from incoming wafer to outgoing CoC.

This horizontal scope means the PQE does not personally execute most of the work — they orchestrate. They request data from Process, Test, Reliability, and Package functions; they synthesize that data into customer-facing reports; they translate customer concerns into actionable internal tasks; and they negotiate technical compromises when fab capability and customer requirement diverge.

## The seven core duties

The PQE workload across a typical month consists of seven categories of activity:

**Chairing PRR.** When a new product approaches release, the PQE convenes the cross-functional review described in Article 26. They assemble the evidence package, schedule the meeting, drive the discussion, and own the release / hold / return decision. PRR chairing is typically the highest-stakes PQE activity, since a release commitment to the customer is essentially irreversible without invoking PCN.

**Signing Certificates of Conformance.** Per ISO 9001 §8.6, every shipping lot requires an authorized signature on a Certificate of Conformance attesting that the material was manufactured per the qualified process and meets specification <span class="cite">[2]</span>. The PQE's signature carries legal weight; signing a CoC for an out-of-spec or under-qualified lot is a serious quality-system violation.

**Owning the PCN process.** Per JEP012A §3.4 <span class="cite">[3]</span>, any process or material change that may affect form, fit, function, reliability, or appearance must be classified as Major / Minor / Administrative and customer-notified accordingly. The PQE is the single accountable owner of this classification and notification for the products they manage.

**Leading customer 8D responses.** When a field failure or shipping escape occurs, the customer typically opens an 8D (Eight Disciplines) corrective-action request. The PQE coordinates the internal response: containment of suspect material, root-cause investigation including Failure Analysis (Article 12), corrective action implementation, prevention assessment, and the formal customer-facing response document. The 8D format is standard across automotive (IATF 16949), aerospace (AS9100), and most industrial customer-quality systems.

**Yield and Cpk reporting.** Typically monthly customer reports summarizing parametric trends (Cpk for each critical parameter), final-test yield, defect Pareto, and any deviations from target. These reports are the operational currency of customer-supplier relationships and feed customer demand planning.

**Maintaining the FMEA.** Both the Design FMEA (DFMEA) and the Process FMEA (PFMEA) for the product are maintained by the PQE per JEP131A <span class="cite">4]</span>. The Failure Analysis loop closes through the PQE: a field failure investigated under Article 12 leads to PQE updating the FMEA with the new failure mode, re-scoring Occurrence and Detection, and re-ranking the RPN to drive subsequent improvement effort.

**Customer-quality audit interface.** External audits — ISO 9001 surveillance, IATF 16949, AS9100, customer-specific audits — are coordinated at the fab by the PQE. The PQE prepares evidence packages, escorts auditors, and responds to findings.

## PQE versus Process Engineer

The Process Engineer is responsible for _a process_; the PQE is responsible for _a product_. A typical fab has 30-100 process engineers and 10-30 PQEs. Process engineers report through Engineering; PQEs typically report through Quality Assurance, giving them organizational independence from the production line they oversee. This independence is structurally important — the PQE must be able to hold a lot or escalate a release-decision concern without facing line-pressure conflicts of interest.

The product-engineering scope means a single PQE may own multiple products from one large customer, or one strategic product may have a dedicated PQE if its volume and revenue justify it. Automotive flagship products (microcontrollers for safety-critical applications, power management ICs for electric vehicles) almost always have dedicated senior PQEs.

## Customer-segment specialization

PQE skill profile varies by customer segment:

- **Consumer / mobile** — high volume, fast time-to-market, lower per-part reliability margins. PQE focus on yield, cycle time, and rapid 8D turnaround.
- **Automotive** — IATF 16949 compliance, PPAP submission, PFMEA discipline, zero-defect targets. PQE typically certified in automotive QMS.
- **Industrial / aerospace** — long product lifecycles (10-30 years), strict configuration control, extensive documentation. PQE focus on PCN discipline and traceability.
- **Medical** — ISO 13485 compliance, biocompatibility, risk management per ISO 14971. Adds regulatory affairs interface to standard PQE duties.

## Career path

PQE roles are commonly filled by engineers with 3-5 years of prior experience in process engineering, test engineering, or reliability. The role rewards cross-functional knowledge over depth in any single domain, plus strong written communication for customer-facing reports. Senior PQEs frequently move into customer-facing technical sales, quality management, or general management positions; the role builds both internal cross-functional credibility and external customer relationships.

## Cross-references

- **<a href="#prr">PRR</a>** (Article 26) — the gate the PQE chairs.
- **<a href="#coc">CoC</a>** (Article 28) — the document the PQE signs.
- **<a href="#pcn">PCN</a>** (Article 21) — the change-management process the PQE owns.
- **<a href="#yield">Yield Learning</a>** (Article 24) — the data the PQE reports to customers.
- **<a href="#fmea">FMEA</a>** (Article 3) — the risk artifact the PQE maintains.
- **<a href="#fa">Failure Analysis</a>** (Article 12) — the technical investigation that feeds 8D.

## References

[1] JEDEC Solid State Technology Association, _JEDEC Publication No. 001-3A: Foundry Process Qualification Guidelines – Product Level_, §3 (Responsibilities). Defines the foundry-side responsibilities that the PQE personifies.

[2] ISO 9001:2015, _Quality Management Systems — Requirements_, §7 (Resources and Competence) and §8.6 (Release of products and services). The standard requires named, authorized release signatories — the PQE fills this role for product release in semiconductor foundries.

[3] JEDEC Solid State Technology Association, _JEDEC Publication No. 001-2A: Foundry Process Qualification Guidelines – Front End Transistor Level_, September 2018, §3.4 (Change classification and PCN requirements). Defines the change-control framework the PQE administers.

[4] JEDEC Solid State Technology Association, _JEDEC Publication No. 131A: Potential Failure Mode and Effects Analysis (FMEA)_, May 2005. Defines the DFMEA and PFMEA framework the PQE maintains.
