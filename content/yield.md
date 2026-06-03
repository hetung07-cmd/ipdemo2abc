# Yield Learning

**Category:** Process Workflow · **Lifecycle:** FW4 Pilot → FW5 HVM

## Summary

Yield learning is the systematic activity of raising production yield from first-silicon levels (often 10-30% at advanced nodes) to mature high-volume manufacturing levels (>80% at 28 nm). It bridges qualification and economic production, and it is the dominant FW4 Pilot-phase activity, continuing throughout FW5 [1].

## Yield decomposition

Total wafer yield is the product of three independent factors, each driven by different physical mechanisms and addressed by different engineering tools [1]:

- **Functional yield (Y_func)** is the fraction of die that pass basic functional probe test. It is dominated by random defects — particles, shorts, opens — and is the easiest factor to model with the Poisson defect-limited yield equation `Y = exp(-A·D)`, where A is the critical chip area and D is the defect density per unit area. The Stapper-Murphy extension uses a negative-binomial distribution to handle clustered defects, which dominates at advanced nodes [1].
- **Parametric yield (Y_param)** is the fraction of functional die meeting electrical spec limits — speed, leakage, IDDQ, Vth distribution. It is dominated by systematic process variation across the wafer and across lots. Improvements come from tightening Cpk on critical PCM parameters and from reducing within-wafer non-uniformity.
- **Reliability yield (Y_rel)** is the fraction expected to survive the warranty period without wear-out failure. It is established by the JEP013A stress-matrix qualification (see Article 18) and is typically not the binding constraint once qualification passes.

Total yield Y = Y_func × Y_param × Y_rel. A 28 nm SoC at 100 mm² die size with D = 0.2 def/cm² yields Y_func ≈ 82%; tighter parametric distributions push the product yield higher.

## The yield-learning loop

The standard yield-learning loop has six steps, executed in iterative cycles on every pilot lot:

1. **Sort data analysis** — wafer probe yields a bin map per die. Failing bins are grouped by location (edge, center, random) and electrical signature (functional, parametric, IDDQ).
2. **Defect inspection** — inline defect inspectors (KLA, Applied Materials) generate physical defect maps per layer. The correlation between defect maps and bin maps localizes which process step is responsible for which failure type.
3. **Failure analysis** on representative failing die (see Article 12) — physical root cause through deprocessing, FIB cross-section, and SEM/TEM imaging.
4. **Process attribution** — links the failure signature to a specific process step, tool, time window, or recipe parameter using SPC and FDC history.
5. **Corrective action** — process tuning, equipment cleanup, recipe change, or in extreme cases a process module redesign. Changes that fall outside the qualified window trigger PCN (Article 21).
6. **Verification** — confirm yield improvement on subsequent lots; update SPC limits and the FMEA RPN scores.

The cycle time of one yield-learning loop at 28 nm is typically 8-16 weeks, dominated by fab cycle time itself. This sets a fundamental limit on how quickly first-silicon yield can climb.

## Defect Pareto and signature analysis

Yield engineers attack the largest defect-density contributor first, by Pareto ranking. A typical 28 nm first-silicon Pareto shows particulate defects as the top contributor at 30-40% of total defect density, followed by lithography defects (poor focus margin, mask defects), etch residue, CMP scratches, and implant non-uniformity. Each category has its own characteristic wafer-level signature [1, 2]:

- **Random scatter** across the wafer indicates particulate contamination from airborne, tool-internal, or human-handling sources.
- **Cluster patterns** indicate a systematic process upset — a chamber-conditioning issue, a recipe excursion, or a specific tool failure event.
- **Edge rings** indicate wafer-handling damage, edge-bead removal issues, or non-uniform processing at the wafer perimeter.
- **Radial signatures** (center-edge or edge-center) indicate process non-uniformity from CVD, etch, or implant tools.
- **Mirror-image signatures** between two adjacent process steps point to defects being introduced and partially repaired by a subsequent step.

## The TQV as a yield-learning vehicle

The TQV SRAM (see Article 10) is the highest-volume yield-learning vehicle in early production. At 28 nm a 128 Mb SRAM array exercises approximately 10⁹ transistors, providing the statistical power to detect defect densities below 0.01 def/cm². Because every SRAM bit either passes or fails, bit-fail map analysis isolates defect physics with sensitivity unavailable on logic [2]. SRAM bit-fail maps are categorized into single-bit fails (random defects, single transistor faults), column fails (bitline issues, sense-amp defects), row fails (wordline issues), and block fails (decoder defects); the relative proportions diagnose the dominant failure mechanism.

## Mature yield ceiling

At any technology node, there is an irreducible defect-density floor set by atmospheric particulates, intrinsic process variation, and stochastic lithography fluctuations. At 28 nm, the mature D floor is approximately 0.1-0.15 def/cm² in a class-1 cleanroom with mature operations. Designs with chip area larger than 100 mm² hit a yield ceiling regardless of fab effort; yield ramp for very large die (GPUs, server CPUs) is a multi-year process, and may require known-good-die (KGD) screening per JESD49B before the die is packaged [3].

## Cross-references

- **<a href="#tqv">Test Vehicle TQV</a>** (Article 10) — the SRAM that hosts most of the early yield learning.
- **<a href="#fa">Failure Analysis</a>** (Article 12) — physical root-cause flow that feeds yield learning.
- **<a href="#spc">SPC</a>** (Article 19) — the monitoring layer that detects yield excursions in real time.
- **<a href="#mfd">MfD</a>** (Article 16) — the fab capability investments that raise the yield ceiling.

## References

[1] May, G. S. and Spanos, C. J., _Fundamentals of Semiconductor Manufacturing and Process Control_, Wiley-IEEE Press, 2006. Chapter 10 (Yield Modeling and Yield Improvement) — Poisson and negative-binomial yield models, defect clustering, Stapper-Murphy extension, and yield ramp dynamics.

[2] JEDEC Solid State Technology Association, _JEDEC Publication No. 001-3B: Foundry Process Qualification Guidelines – Technology Qualification Vehicle Testing_, September 2024. SRAM TQV sizing table and use as a defect-density learning vehicle.

[3] JEDEC Solid State Technology Association, _JEDEC Standard JESD49B: Procurement Standard for Known Good Die (KGD)_. Defines the test and qualification regime for die-level shipments where assembly yield cannot recover from die-level defects.
