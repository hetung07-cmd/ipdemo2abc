The systematic electrical measurement of transistors and other on-wafer test structures to extract device parameters, validate models, and demonstrate reliability margins. Device characterization is what turns a fabricated wafer into a quantified *technology* ready for PDK release<span class="cite">[1]</span>.

## Scope

Device characterization in a CMOS foundry covers two parameter classes<span class="cite">[1,2]</span>:

- **DC parametrics** — threshold voltage (Vth), saturation drain current (Idsat), off-state leakage (Ioff), sub-threshold slope, transconductance (gm), output conductance (gds), source/drain resistance, junction breakdown (BVDSS), gate leakage. These define the device's operating envelope and feed SPICE model extraction.
- **Reliability parameters** — Hot-Carrier Injection (HCI) lifetime, Bias-Temperature Instability (BTI, both NBTI and PBTI), Time-Dependent Dielectric Breakdown (TDDB), and Plasma-Process-Induced Damage (P²ID). These define the device's wear-out envelope<span class="cite">[1,3]</span>.

![](device-characterization-fig1.svg){width=90%}
> **Figure 2.** Device characterization flow showing the two parallel measurement branches: DC parametrics (top row) feed SPICE model extraction, while reliability stress tests (bottom row) feed lifetime models and FIT-rate projections. Test structures are typically located in the wafer scribe line as the Process Control Monitor (PCM)<span class="cite">[1]</span>. Activation energies cited from JEP122H Tables 6-1 and 6-2<span class="cite">[3]</span>.

## Process Control Monitor (PCM)

The physical realization of device characterization is the **PCM** — a suite of test structures placed in the scribe-line area between product die. PCM is sampled on every production wafer to give a continuous parametric record of the technology<span class="cite">[1]</span>. JEP012A §12.1.1 specifies the minimum parameter set, including long-and-wide MOSFET Vth at fixed current, shortest-channel Vth at VDS = 0.1 V and at VDDMAX, maximum substrate current ISUB, IDSAT, and IDOFF at multiple voltage corners.

## Reliability characterization

Reliability tests stress the device at accelerated conditions to project use-condition lifetime. The dominant wear-out mechanisms for advanced CMOS, with the activation energies and exponents that have been validated experimentally and published in JEP122H Tables 6-1 and 6-2 <span class="cite">[3]</span>, are:

| Mechanism | Stress | Acceleration model | Typical Ea / exponent |
|---|---|---|---|
| HCI (Hot Carrier Injection) | VDS, ID | Power law in (1/VD) | n ≈ 2–4 [3] |
| TDDB (gate-oxide breakdown) | VG, T | E-model or 1/E | Ea ≈ 0.7 eV, γ ≈ 2.3 cm/MV [3] |
| NBTI (p-channel) | negative VG, T | Power law in t | Ea ≈ 0.55 eV, time exp ≈ 1/6 [3] |
| EM (interconnect) | I, T | Black's equation | Ea ≈ 0.8 eV (Al), n = 2 [3] |

The extracted models become the inputs to _process qualification_ and ultimately to the FIT-rate calculation per JESD85<span class="cite">[1]</span>.

## Cross-references

<p>Articles in this wiki — <a href="#process-characterization">Process Characterization</a> (§1), <a href="#process-qualification">Process Qualification</a> (§3); upcoming articles on <a href="#pcm-wat">PCM/WAT</a>, <a href="#teg">TEG</a>, and <a href="#spice">SPICE model role</a> expand on the measurement structures and model-extraction steps shown in Figure 2.</p>

## References

[1] JEDEC Solid State Technology Association, _JEDEC Publication No. 001-2A: Foundry Process Qualification Guidelines – Front End Transistor Leve_, September 2018, §8 (HCI), §9 (GOI/TDDB), §10 (BTI), §12 (PCM Characterization).
[2] May, G. S. and Spanos, C. J., _Fundamentals of Semiconductor Manufacturing and Process Control_, Wiley-IEEE Press, 2006, Chapter 9 (Device Modeling and Parameter Extraction).
[3] JEDEC Solid State Technology Association, _JEDEC Publication No. 122H: Failure Mechanisms and Models for Semiconductor Devices_, Tables 6-1 and 6-2 (acceleration factors for HCI, TDDB, NBTI, electromigration).
