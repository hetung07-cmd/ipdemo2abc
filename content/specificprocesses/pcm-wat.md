**PCM (Process Control Monitor)** / **WAT (Wafer Acceptance Test)** The PCM is a set of test structures placed in the scribe-line area between product die; WAT is the test program that measures those structures on every wafer leaving fab. Together they form the continuous parametric-monitoring layer that underpins SPC, yield analysis, and product-grade screening<span class="cite">[1]</span>.

## PCM versus WAT — vocabulary
Fab vocabulary uses the two terms with a precise distinction:
- **PCM** refers to the physical test structures (transistors, resistors, capacitors, ring oscillators, contact and via chains) laid out in the scribe line. Each wafer carries dozens of identical PCM cells.
- **WAT** refers to the test program run on those structures at end-of-line: pad probing, voltage stimulus, parameter extraction, pass/fail decision against control limits.
Some companies use the terms interchangeably; the underlying activity is the same — measure electrical parameters on every wafer, post the results to SPC, and reject wafers that fall outside control limits <span class="cite">[1,2]</span>.
![](art-05_pcm-scribe-line-layout-and-wat-flow.svg){width=900}
> **Figure 8**. PCM scribe-line layout and the WAT end-of-line flow. The left panel shows PCM cells (red highlighted strips) placed at every intersection in the scribe-line grid, giving 9-point sampling typical of 300 mm production wafers. The right panel lists the parameter classes per JEP012A §12. The bottom flow shows what happens to every wafer after fabrication: probe → extract → compare against SPC limits → grade pass/hold → ship<span class="cite">[1]</span>.

## What WAT data is used for
- **Lot disposition**. Wafers that fall outside WAT control limits are quarantined, investigated, and either released, downgraded, or scrapped. This is the gate between fab-out and sort.
- **SPC trend monitoring**: Every parameter measured at WAT is charted as an Xbar-R or EWMA chart with control limits derived during process characterization (Article 1). A trend or step in any chart triggers Out-Of-Control Action Plan (OCAP) execution.
- **Yield modelling**. WAT parameter distributions feed Monte-Carlo yield models used to predict product yield before sort, and to attribute yield loss to specific modules <span class="cite">[2]</span>.
- **Reliability monitor**. A subset of PCM structures (oxide capacitors for TDDB, EM lines, antenna structures) is stressed at WAT or in a separate reliability monitor program; results feed JESD85 FIT-rate tracking<span class="cite">[3]</span>.
PCM design is constrained by scribe-line width — typically 60–80 µm at 28 nm. The cell layout must fit in this width while presenting probe pads at standard pitch (60 µm). This forces a balance between probe-pad area and active test-structure area.


## References

- 1. JEDEC Solid State Technology Association, _JEDEC Publication No. 001-2A: Foundry Process Qualification Guidelines_ – Front End Transistor Level, September 2018, §12 (PCM Characterization).
- 2. May, G. S. and Spanos, C. J., _Fundamentals of Semiconductor Manufacturing and Process Control_, Wiley-IEEE Press, 2006, Chapter 10 (Yield Modeling).
- 3. JEDEC Solid State Technology Association, _JEDEC Standard JESD85: Methods for Calculating Failure Rates in Units of FITs_, referenced from JEP001-3A §8 for reliability-monitor FIT computation.
## Cross-references

<p>Articles in this wiki — <a href="#device-characterization">Device Characterization</a> (§2), <a href="#teg">TEG</a> (§9), <a href="#spice">SPICE Model role</a> (§10); future articles on <a href="#spc">SPC</a> and <a href="#yield">Yield Learning</a> will treat WAT data as the primary input stream.</p>

