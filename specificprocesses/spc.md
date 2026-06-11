

SPC is a method of monitoring an ongoing manufacturing process via control charts so that out-of-control variation is detected and corrected before scrap accumulates. SPC is the operational backbone of HVM — every monitored parameter generates an Xbar-R chart, and every chart has an Out-Of-Control Action Plan (OCAP) <span class ="cite">[1]</span>.

## Foundations
SPC distinguishes common cause variation (inherent random noise of a stable process, characterised during Process Characterization — Article 1) from special cause variation (an external assignable signal: tool drift, wrong recipe, contamination). Control limits at ±3σ around the centerline give roughly 0.27 % false-alarm rate when the process is in control; any sample outside the limits is treated as a special cause signal requiring investigation<span class ="cite">[1]</span>.

![Xbar control chart with Western Electric rules](art-19_spc-control-chart.svg){width=100%}
> Figure 19. Anatomy of an Xbar control chart. The center line is the long-term process mean; UCL/LCL are ±3σ around it. Common-cause variation produces random fluctuation inside the limits; the red point illustrates Rule 1 (one sample beyond the limit), an unambiguous signal of special-cause variation. The Western Electric rules listed at bottom add sensitivity to slow shifts and runs that would not violate ±3σ alone <span class ="cite">[1]</span>.

## Chart families used in fabs

**SXbar-R** — variable data (CD, sheet resistance, Vth); pairs central tendency (Xbar) with range (R) for spread.
**Xbar-S** — same as Xbar-R but uses sample standard deviation; preferred for n ≥ 10.
**I-MR (Individuals)** — n = 1 per subgroup, common for slow-changing parameters or low-volume tools.
**EWMA — Exponentially Weighted Moving Average**: sensitive to small persistent shifts that Xbar misses.
**p, np, c, u charts** — attribute data (defective fraction, defect count); used for defect-density monitoring.

## Out-Of-Control Action Plan (OCAP)

Every chart has a written OCAP that lists, in priority order, the actions to take when a rule fires: who is notified, which tool is held, what investigation steps run, when production may resume. OCAP execution is logged and audited; it is the documented evidence that fab response to OOC signals is consistent and timely<span class ="cite">[1,2]</span>.

## SPC and capability
SPC monitors stability over time; Cpk monitors capability (how the stable distribution sits relative to the spec window). Both are required: a process can be in statistical control (stable) but incapable (Cpk < 1.0); equally, a process can be highly capable but slowly drifting. The pair of charts and capability indices together give the complete picture<span class ="cite">[2]</span>.

## Cross-references

<p>Articles in this wiki — <a href="#process-characterization">Process Characterization</a> (§1), <a href="#msa">MSA</a> (§4), <a href="#pcm-wat">PCM/WAT</a> (§5), <a href="#apc">APC</a> (§20).</p>

## References

1. May, G. S. and Spanos, C. J., Fundamentals of Semiconductor Manufacturing and Process Control, Wiley-IEEE Press, 2006, Chapters 3–4 (Statistical Process Control, control charts, Western Electric rules).
2. JEDEC Solid State Technology Association, JEDEC Publication No. 132A.01: Process Characterization Guideline, December 2022, §4.1.6 (process repeatability and SPC linkage), Annex E.