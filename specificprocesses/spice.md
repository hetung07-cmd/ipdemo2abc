# SPICE / BSIM4 Model role

**Category:** Process Workflow · **Lifecycle:** FW3

## SPICE / BSIM4 Model and its role in the PDK

SPICE-class compact transistor models, dominated by the BSIM family at 28 nm, are the contract between fab and design house. They take silicon measurements from PCM and TEG and deliver a parametric description of every transistor that designers use to simulate their circuits before tape-out <span class="cite">[1, 2]</span>.

### What a SPICE model contains

A BSIM4 model card for a single device flavour (e.g., 28 nm core NMOS) is a text file with several hundred parameters. They are organized into model sections covering:

- **I-V behaviour** — threshold voltage, channel-length modulation, mobility, velocity saturation, drain-induced barrier lowering.
- **Capacitances** — gate-source, gate-drain, junction capacitance, intrinsic and parasitic.
- **Geometry scaling** — Vth(W,L), pocket implant effects, narrow- and short-channel corrections.
- **Statistical variability** — Pelgrom mismatch coefficient, global process corners, local random Vth.
- **Reliability ageing** — increasingly integrated as ageing-aware models that predict HCI / BTI shifts as a function of stress time and use conditions <span class="cite">[1, 3]</span>.

![Figure 10](art-08_spice-model-role-in-the-pdk.svg){width=900}

> **Figure 10.**The SPICE model occupies a central role in the PDK ecosystem. Silicon measurements from PCM and TEG (top-left) feed parameter extraction; process-corner definitions (bottom-left) determine the SS/TT/FF set; the resulting model is packaged into the PDK (bottom-right) and consumed by designers in circuit simulators (top-right). A continuous feedback loop (red dashed) from customer-silicon data back to recalibration drives PDK revisions from v0.5 toward v1.0[1, 2].

### Why BSIM4 at 28 nm

BSIM4 (Berkeley Short-channel IGFET Model, version 4) became the industry-standard compact model in the early 2000s and remains the standard for bulk-CMOS nodes from 130 nm down to 28 nm. Its physics-based formulation handles short-channel and narrow-width effects, gate-tunneling leakage, and pocket-implant nonlinearities that dominate at deep-submicron <span class="cite">[2]</span>. For FinFET nodes (16/14 nm and below) BSIM-CMG (Common Multi-Gate) is the successor.

### Model accuracy & corner construction

The standard fab–customer contract is on model accuracy across the 6-corner set: SS (Slow-Slow), TT (Typical-Typical), FF (Fast-Fast), SF (Slow-Fast — NMOS slow, PMOS fast), FS (Fast-Slow), at three temperatures −40 / 27 / 125 °C. Corners are derived from the WAT distribution: TT = mean of WAT data; SS / FF = ±3σ on the limiting parameters (typically Vth and Idsat); SF / FS = uncorrelated NMOS-PMOS Pelgrom mismatch <span class="cite">[2]</span>.

> Designers run their digital-block STA (Static Timing Analysis) at all 6 corners simultaneously. If even one corner fails, the block does not pass sign-off. For this reason, even modest corner-spread inaccuracy at the model-extraction stage translates directly into design-margin loss and frequency limits — usually called "PDK pessimism" by designers.

**Cross-references** Articles in this wiki — <a href="#device-characterization">Device Characterization</a> (§2), <a href="#pcm-wat">PCM/WAT</a> (§8), <a href="#teg">TEG</a> (§9); future articles on <a href="#dft">DFT</a>, <a href="#dfm">DFM</a>, and <a href="#mfd">MfD</a> (next batch) will treat the model card as a fixed input.

## References

1.  JEDEC Solid State Technology Association, _JEDEC Publication No. 001-2A: Foundry Process Qualification Guidelines – Front End Transistor Level_, September 2018, §12 (PCM Characterization — the measurement basis for SPICE extraction).
2.  May, G. S. and Spanos, C. J., _Fundamentals of Semiconductor Manufacturing and Process Control_, Wiley-IEEE Press, 2006, Chapter 9 (Device Modeling), Chapter 10 (Statistical Modeling), corner construction conventions.
3.  JEDEC Solid State Technology Association, _JEDEC Publication No. 122H: Failure Mechanisms and Models for Semiconductor Devices_, Tables 6-1 / 6-2 (ageing models incorporated into ageing-aware SPICE).
