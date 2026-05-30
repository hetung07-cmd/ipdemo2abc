A structured, **a priori** risk analysis that identifies potential failure modes of a process or design, ranks them by Risk Priority Number (RPN = Severity × Occurrence × Detection), and drives corrective action toward the highest-risk items [1]. FMEA is performed *before* failures occur — it is distinct from Failure Analysis (Article 6), which is performed *after*.

## Two flavours: DFMEA vs. PFMEA

JEP131A §5.3 defines exactly two FMEA types [1]:

- **Design FMEA (DFMEA)** — starts from a block diagram of the product; analyses how design choices could fail. The effects identified on an associated PFMEA can be used as input.
- **Process FMEA (PFMEA)** — starts from a flow diagram of the manufacturing process; analyses how each operation could fail and what the downstream effect would be.

The two are complementary: a PFMEA looks at how the fab's recipe might produce out-of-spec wafers; a DFMEA looks at how the resulting design might still fail in the customer's application. Both are required by JEP131A for a complete risk picture.

![](fmea-fig1.svg){width=100%}
> **Figure 5.** FMEA scoring system and workflow per JEP131A. Each potential failure mode is scored on three independent 1–10 scales — Severity (impact), Occurrence (frequency), Detection (chance of being caught) — and the three are multiplied to produce the Risk Priority Number (RPN). The workflow then drives corrective action against the highest-RPN items first, with priority also given to high-Severity items even when their RPN is moderate [1].

## Scoring and prioritization

JEP131A Annexes D, F, G give the reference rubrics for S, O, and D respectively [1]. After computing RPN for each failure mode, the team produces a Pareto-ordered action list. JEP131A §3.12 contains a crucial nuance: *"If a concern has a high severity number but low RPN, it may be given a higher priority ranking than a concern with a higher RPN but low severity number"* [1]. In other words, RPN ordering is a starting point, but anything with Severity = 9–10 (safety or non-recoverable customer impact) must be addressed even if its RPN is low because of rare occurrence.

## FMEA inside Process Characterization

JEP132A.01 §4.2.8 references JEP131A and lists the 12 typical FMEA steps inside the broader process characterization workflow [2]. The FMEA is not a one-shot artifact: it is updated whenever new failure modes are discovered (typically from FA reports — see Article 6), whenever new process controls are added, or whenever the severity ranking changes (for example when a fab moves a product from consumer to automotive market).

## Cross-references

Articles in this wiki — Process Characterization (§1), FA (§6); upcoming articles on Yield Learning and PCN will show how FMEA feeds the production-side risk management.

## References

- JEDEC Solid State Technology Association, *JEDEC Publication No. 131A: Potential Failure Mode and Effects Analysis (FMEA)*, May 2005, §3 (creation process), §5 (requirements), §3.12 (RPN), Annexes D/F/G (S/O/D rubrics).
- JEDEC Solid State Technology Association, *JEDEC Publication No. 132A.01: Process Characterization Guideline*, December 2022, §4.2.8 (FMEA inside process characterization).
