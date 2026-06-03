# Construction Analysis

**Category:** Process Workflow · **Lifecycle:** FW3·FW4


## Construction Analysis

A non-destructive and destructive physical analysis of a representative die that confirms the technology has been built as specified: layer thicknesses, doping profiles, structural integrity, and absence of unexpected anomalies. JEP012A §13 mandates Construction Analysis as part of the foundry qualification deliverable <span class="cite">[1]</span>.

### Scope and purpose

Construction Analysis serves three distinct functions:

- **Qualification evidence** — proves to the customer that the as-built process matches the technology description; required deliverable per JEP012A §13.
- **Baseline reference** — captures the layer-thickness, doping, and structural fingerprint at qualification, used later to detect drift during HVM.
- **Failure-analysis backstop** — when a failure occurs in the field, the construction-analysis baseline is the reference image that defines "what good looks like".

### The four-step flow
![Figure 17.](art-17_construction-analysis-flow.svg){width=100%}

> Figure 17. Construction Analysis four-step flow and the parameters captured in the final report. The first step selects representative samples from the qualification lots; the second prepares the cross-section; the third generates topographical and cross-sectional images; the fourth compiles all measurements into a baseline report. The bottom panels show typical FEOL, MOL, and BEOL parameters measured and recorded[1].

### Sample requirements

JEP012A §13.1 specifies that Construction Analysis samples come from the three qualification lots — the same lots that supply the wear-out and TQV testing. Multiple dies per wafer (center, mid-radius, edge) are required to capture cross-wafer variation. Both completed and partially processed wafers may be included; partial wafers reveal intermediate features (e.g., poly profile before silicide formation) that are buried in the completed wafer<span class="cite">[1]</span>.

### Imaging techniques

- **SEM (Scanning Electron Microscopy)** — topographical and low-magnification cross-section imaging. Resolution ~2 nm.
- **TEM (Transmission Electron Microscopy)** — atomic-resolution imaging of thin lamellae (~50–100 nm thickness). Required for gate stack, high-k, and ultra-thin barrier characterisation.
- **STEM with EDX/EELS** — element-resolved composition mapping at sub-nm resolution; used to confirm gate-stack composition and diffusion barriers.
- **FIB (Focused Ion Beam)** — site-specific cross-section preparation, used to image specific structures of interest rather than blanket areas.

**When Construction Analysis is repeated:** at the original qualification, and again after any process change classified as Major in the PCN system. Minor changes (recipe parameter within window, equipment swap to same model) do not normally trigger re-analysis.

**Cross-references:**Articles in this wiki — <a href="#process-qualification">Process Qualification</a> (§9), <a href="#fa">Failure Analysis</a> (§12), <a href="#pcn">PCN</a> (§21).

## References

1.  JEDEC Solid State Technology Association, _JEDEC Publication No. 001-2A: Foundry Process Qualification Guidelines – Front End Transistor Level_, September 2018, §13 (Construction Analysis).
2.  JEDEC Solid State Technology Association, _JEDEC Publication No. 122H: Failure Mechanisms and Models for Semiconductor Devices_ — physical mechanism catalog used to interpret cross-sectional findings.

