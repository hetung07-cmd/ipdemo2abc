A systematic methodology for identifying, defining, and measuring a manufacturing process so that its stability, repeatability, sensitivity, and robustness become quantified [1]. Process characterization is the foundation on which Statistical Process Control (SPC), Design of Experiments (DOE), and yield improvement all rest.

## Scope and definition

A *process* is defined as a combination of people, procedures, methods, machines, materials, measurement equipment, and environment that produces a given output. When properly defined and controlled, a process is a repeatable sequence of activities with measurable inputs and outputs [1]. Process characterization defines the distinguishing features of a process and its output on which variables or attributes data may be collected.

The output of process characterization is a quantified description of three properties: **stability** (how the process behaves over time), **repeatability** (how consistent successive runs are), and **capability** (how well the process holds its critical parameters inside specification limits — quantified by Cp and Cpk indices) [1, 2].

![](process-characterization-fig1.svg){width=700}
**Figure 1.** The six-step Process Characterization flow defined in JEDEC JEP132A.01 §4.1, with the recommended tool/methodology at each step (centre column) and the deliverable output (right). The dashed red arrow shows the continuous-improvement feedback loop that re-enters the flow whenever an unacceptable process performance level is detected [1]. 

## The six-step flow

- **Identify Process** — name and bound the process unit being characterized (e.g., "STI CMP module", "gate oxide growth"). Specify scope: a single step, a module, or an entire flow [1].
- **Define Process** — produce a flow diagram and assign RACI roles. Apply FMEA [3] to surface anticipated failure modes before data is collected.
- **Determine Characteristics & Measurables** — identify the critical inputs (process knobs) and critical outputs (electrical or physical responses). DOE is the formal tool used here to map input-output sensitivity [1, 2].
- **Perform Gauge Studies** — quantify measurement system error before collecting "real" data. If the measurement variance (σ²_gauge) is large relative to part variance (σ²_part), no amount of data collection will identify true process effects [1]. See Article 7 (MSA).
- **Collect Data** — execute the planned data collection under controlled conditions, both short-term (capability) and long-term (stability).
- **Characterize Repeatability** — compute statistical metrics (Cp, Cpk, Pp, Ppk) per JESD557 conventions [1]. Document the process control plan.

> 💡 **Engineering rule of thumb:** Skipping step 4 (gauge studies) is the most common process-characterization failure. If σ²_gauge ≥ 30 % of total observed variance, decisions based on the data are statistically untrustworthy regardless of sample size.

## Outputs & relation to other activities

The deliverable of a complete characterization is a **process control plan** — a document that lists the critical parameters, target values, control limits, measurement frequency, and reaction plan if a limit is exceeded. This plan becomes the input to *process qualification* (Article 3) and the daily-monitoring blueprint for *SPC* in HVM [2]. Process characterization is repeated whenever the process flow, process technique, equipment, or other pertinent factors change [1].

## Cross-references

Articles in this wiki — DOE (§4), FMEA (§5), MSA (§7); future articles on PCM/WAT, SPC, APC, and Yield Learning will build directly on the control plan defined here.

## References

- JEDEC Solid State Technology Association, *JEDEC Publication No. 132A.01: Process Characterization Guideline*, December 2022, §1, §4.1, Annex A.
- May, G. S. and Spanos, C. J., *Fundamentals of Semiconductor Manufacturing and Process Control*, Wiley-IEEE Press, 2006, Chapters 3–4 (Statistical Process Control) and Chapter 5 (Process Capability).
- JEDEC Solid State Technology Association, *JEDEC Publication No. 131A: Potential Failure Mode and Effects Analysis (FMEA)*, May 2005.
