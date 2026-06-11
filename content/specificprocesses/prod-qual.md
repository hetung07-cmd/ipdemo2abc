# Product Qualification

**Category:** Process Workflow · **Lifecycle:** FW4→FW5


## Product Qualification

The final reliability demonstration before a customer product enters volume production: real silicon of the actual customer design is subjected to the JEDEC stress matrix and must demonstrate failure rates within specification. JEP013A is the governing standard <span class="cite">[1]</span>.

### Relationship to technology qualification

Three qualification levels apply in sequence and at different points in the lifecycle:

- **Process Qualification** (FW1 → FW3, Article 9) — qualifies the technology on TESTCHIP and TQV before any customer product exists.
- **Product Qualification** (FW4 → FW5, this article) — qualifies the specific customer design before HVM release.
- **Re-qualification** — triggered by major changes (PCN, Article 21) to a previously qualified product or process.

JEP013A reuses the stress tests defined for TQV in JEP013B but applies them to the real product, with sample size and acceleration-model rules adjusted for the use conditions the customer has specified <span class="cite">[1, 2]</span>.

### The stress matrix

![Figure 18](art-18_product-qualification-stress-matrix.svg){width=100%}

> **Figure 18.** Product Qualification stress matrix per JEP013A. Four test groups: operating-life (HTOL + early life + TC), environmental (HAST/THB + preconditioning), ESD/latch-up, and characterisation/construction. Each test references its own JESD22 sub-standard for methodology; JEP013A specifies the matrix-level requirements: sample size of 231 DUTs from 3 lots, merit-number criteria, and reporting format[1].

### Sample size and acceleration

The 231-DUT / 3-lot minimum at §8.3 ensures both statistical confidence and lot-to-lot independence <span class="cite">[1]</span>. Acceleration is computed by Arrhenius (temperature) and a defect-driven voltage acceleration model — JEP013A §8.1.1 gives the full formula and references JEP122 for activation energies <span class="cite">[1, 2]</span>. When the technology owner cannot justify a higher activation energy with data, the standard requires the conservative historical value of Ea = 0.7 eV.

### Reporting requirements

JEP013A §8.2.2 specifies the report contents: fab name and location, process name, lot/wafer/date codes, certification that material represents the current process, brief TQV description, test methodology, coverage, test speed, IDDQ limits, percent failures at each readout point, total failures in DPPM at a projected use-hour count, and interpretation per JESD74 for early-life failure rate <span class="cite">[1]</span>.



**Customer-specific extensions:** Automotive customers (AEC-Q100), aerospace, and medical applications add stress requirements beyond JEP013A — higher TC counts, additional vibration testing, broader temperature ranges. The fab's qualification program should be designed to be reusable across customer segments where possible.

**Cross-references** <a href="#process-qualification">Process Qualification</a> (§9), <a href="#tqv">Test Vehicle TQV</a> (§10), <a href="#construct">Construction Analysis</a> (§17), <a href="#pcn">PCN</a> (§21).


## References

1.  JEDEC Solid State Technology Association, _JEDEC Publication No. 001-3A: Foundry Process Qualification Guidelines – Product Level_, §7 (qualification test summary), §8 (test specifications), §9 (PCM), §10 (Construction Analysis).
2.  JEDEC Solid State Technology Association, _JEDEC Publication No. 122H: Failure Mechanisms and Models for Semiconductor Devices_, Tables 6-1, 6-2 (activation energies used in acceleration models).


