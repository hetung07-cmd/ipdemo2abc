# Test Vehicle (TQV)

**Category:** Process Workflow · **Lifecycle:** FW4

Process Workflow FW4

## Test Vehicle and Technology Qualification Vehicle (TQV)

A test vehicle is any silicon designed to characterize the process rather than to be sold as a product. JEDEC distinguishes two main levels: the TESTCHIP, used for transistor-level wear-out qualification, and the TQV — typically a representative SRAM — used to demonstrate application-relevant reliability before any customer product exists <span class="cite">[1, 2]</span>.

### The three test-vehicle levels

| Vehicle          | Defined in | Purpose                                                    | Typical structure                                          |
|------------------|------------|------------------------------------------------------------|------------------------------------------------------------|
| TESTCHIP         | JEP012A    | Find technology wear-out weaknesses (HCI, TDDB, BTI, P²ID) | Discrete transistors, oxide capacitors, antenna structures |
| TQV              | JEP013B    | Demonstrate application-relevant reliability at scale      | SRAM array sized to the technology node                    |
| Customer product | JEP013A    | Product-level qualification before customer release        | Actual customer design                                     |

![Figure 11](art-10_test-vehicle-hierarchy-and-tqv-sram-sizing.svg){width=100%}
> **Figure 11**. The three-level test-vehicle hierarchy. The TESTCHIP (Level 1) finds wear-out weaknesses on dedicated structures; the TQV (Level 2) demonstrates reliability on a representative SRAM whose size scales with technology node per JEP013B; the customer product is qualified separately per JEP013A. The 28 nm node demands a 128 Mb TQV SRAM — large enough that defect-density-driven failures can be observed at qualification sample sizes <span class="cite">[1, 2]</span>.

### Why SRAM as the TQV

JEDEC chose SRAM as the canonical TQV for three reasons:

1.  **High transistor count per unit area** — at 28 nm, 128 Mb of SRAM exercises roughly 10⁹ transistors, providing very high sensitivity to low-rate defects.
2.  **Regular structure** — a single failed bit can be localized exactly, making FA tractable.
3.  **Defect-density dominated** — SRAM yield is a clean proxy for random defect density, separable from systematic design issues.

The standard explicitly notes that SRAM has "far too uniform a topology to be a good overall qualification vehicle in cases where divergent topologies may give rise to specific reliability concerns" <span class="cite">[2]</span>. For automotive or aerospace applications, an additional logic-rich TQV is typically required alongside the SRAM.

### TQV stress matrix

The TQV is subjected to the standard stress matrix from JEP013A §8 (the same stress list that later applies to product qualification) <span class="cite">[3]</span>:

- **HTOL** — High-Temperature Operating Life · 125 °C / VCCMAX / 1000 h
- **HAST** — Highly Accelerated Stress Test · 130 °C / 85 % RH / 96 h
- **TC** — Temperature Cycling · −65 °C to +150 °C / 1000 cycles, per JESD22-A104
- **ESD** — HBM / CDM / MM per JESD22-A114, -A115, -C101
- **Latch-up** — per JESD78

A successful TQV pass is a strong predictor of customer product success but not a guarantee. Product-specific topology, IO ring design, ESD strategy, and package thermals can introduce failure modes not exercised by the SRAM TQV — which is precisely why product-level qualification (Article in next batch) is also required.


**Cross-references:** <a href="#process-qualification">Process Qualification</a> (§3), <a href="#device-characterization">Device Characterization</a> (§2), <a href="#teg">TEG</a> (§9); with <a href="#prod-qual">Product Qualification</a> and <a href="#construct">Construction Analysis</a> close the qualification chain.


## References

1.  JEDEC Solid State Technology Association, _JEDEC Publication No. 001-2A: Foundry Process Qualification Guidelines – Front End Transistor Level_, September 2018, §3 (two-level framework), §7 (Level 1 test list).
2.  JEDEC Solid State Technology Association, _JEDEC Publication No. 001-3B: Foundry Process Qualification Guidelines – Technology Qualification Vehicle Testing_, September 2024, §8 (TQV test list and SRAM sizing).
3.  JEDEC Solid State Technology Association, _JEDEC Publication No. 001-3A: Foundry Process Qualification Guidelines – Product Level_, §7 (qualification test summary table), §8.3 (sample size).

