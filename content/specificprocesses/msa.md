A statistical procedure that quantifies how much of the variation observed when measuring a population of parts is due to the measurement system itself, rather than to the parts. MSA is mandatory at JEP132A.01 §4.1.4 before any process data is collected — if the gauge is bad, no amount of data is good<span class="cite">[1]</span>.

## The variance decomposition

The total observed variance in a set of measurements decomposes into part variation and gauge variation, which itself decomposes into repeatability and reproducibility<span class="cite">[1]</span>:

![](msa-fig1.svg){width=100%}
> **Figure 7.** Variance decomposition that underpins MSA. The total observed variation in a measurement campaign is the sum of true part-to-part variation and gauge variation; the gauge term itself splits into repeatability (within-operator equipment variation) and reproducibility. The Precision-to-Tolerance ratio (P/T) compares 6σ_gauge to the spec window USL − LSL and is the canonical AIAG MSA acceptance criterion<span class="cite">[1, 2]</span>.

## The standard Gauge R&R study

The conventional study layout, recommended in JEP132A.01 Annex E<span class="cite">[1]</span> and reflected in the activities of the Green Fab project plan, is:

- **10 parts × 3 operators × 3 replicates = 90 measurements** for the full crossed-Gauge-R&R design.
- Compute R̄-bar (average range across operators) and X̄-bar-bar (grand mean per operator).
- Derive σ_repeatability = R̄-bar / d₂ and σ_reproducibility = Range(X̄-bar-bar) / d₂.
- Combine: σ²_gauge = σ²_repeatability + σ²_reproducibility.
- Compute P/T = 6 · σ_gauge / (USL − LSL).

JEP132A.01 Annex E gives a fully worked numerical example with σ_repeatability = 1.02, σ_reproducibility = 0.307, σ_gauge = 1.06, P/T = 0.12 — and the standard's verdict on this gauge is "too large" because P/T > 10 %, with repeatability dominating, so the recommended action is replacing the equipment rather than retraining operators<span class="cite">[1]</span>.

## Acceptance criteria

| P/T ratio | Verdict | Typical action |
|---|---|---|
| < 10 % | Excellent | Release for production use |
| 10 % – 30 % | Conditionally acceptable | Use if cost/benefit justifies; flag for improvement |
| > 30 % | Not acceptable | Improve or replace tool; do not release for production decisions |

## When MSA is required

MSA is required at three points in the equipment lifecycle [1, 2]:

- **At FAT** (vendor site, before delivery) — to confirm the tool meets specification on reference samples before shipment.
- **At SAT** (fab site, after installation) — to confirm the tool meets specification under actual fab environmental conditions.
- **Periodically thereafter** — re-MSA at scheduled intervals (typically annually) or after any tool repair, calibration, or software update that could affect measurement.

## Cross-references

<p>Articles in this wiki — <a href="#process-characterization">Process Characterization</a> (§1), <a href="#doe">DOE</a> (§4); future articles on <a href="#fat-sat">FAT/SAT</a> (Batch 5) and <a href="#spc">SPC</a> (Batch 4) will use <a href="#msa">MSA</a> as a prerequisite — SPC charts built on a bad gauge cannot detect real process shifts.</p>

## References

- JEDEC Solid State Technology Association, _JEDEC Publication No. 132A.01: Process Characterization Guideline_, December 2022, §4.1.4 (Gauge Studies), §4.2.10 (MSE/MSA), Annex E (worked example).
- May, G. S. and Spanos, C. J., _Fundamentals of Semiconductor Manufacturing and Process Control_, Wiley-IEEE Press, 2006, Chapter 4 (Statistical Process Control), measurement-system considerations.
- Automotive Industry Action Group (AIAG), _Measurement Systems Analysis Reference Manual_, 4th ed. — referenced industry standard for Gauge R&R study design and acceptance criteria.
