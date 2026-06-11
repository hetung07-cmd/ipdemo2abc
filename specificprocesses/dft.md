# Design for Test (DFT)

**Category:** Process Workflow · **Lifecycle:** FW3

## Design for Test (DFT)

A set of design-side techniques that add controllability and observability to a circuit so that manufacturing defects can be efficiently detected by Automatic Test Equipment (ATE). DFT is the contract between the design house and the test floor — its quality determines test coverage, test time, and ultimately the field defect rate of shipped product <span class="cite">[1]</span>.

### Why DFT

An untestable circuit forces the test engineer to apply functional vectors that may exercise only a small fraction of internal nodes. JESD125 formalizes DFT as "the process of designing a product with testability in mind from the earliest stages of design" <span class="cite">[1]</span>. The four classic motivations are: improving fault coverage, reducing test pattern generation time, reducing test application time on ATE, and enabling diagnosis once a part fails.

### Core DFT techniques

- **Scan design** — All flip-flops are stitched into one or more shift registers (scan chains) so internal states can be loaded and unloaded serially through dedicated scan pins. Level-Sensitive Scan Design (LSSD) and Mux-D scan are the two dominant variants <span class="cite">[1]</span>.
- **ATPG (Automatic Test Pattern Generation)** — Algorithms (D-algorithm, PODEM, FAN) compute the input vectors needed to sensitize a fault to an observable output. Coverage of 95–99 % of stuck-at faults is the modern target <span class="cite">[1]</span>.
- **BIST (Built-In Self Test)** — On-chip pattern generators (LFSR) and signature analyzers compress test results without external ATE, enabling at-speed and in-system testing.
- **Test compression** — Adaptive scan, EDT, X-Compact: reduce test data volume and application time by 10×–50× by sharing scan input data across chains.
- **Boundary scan / JTAG (IEEE 1149.1)** — A dedicated scan chain on the periphery of the chip for board-level interconnect testing.

![Figure 14](art-14_dft-architecture-overview.svg){width=100%}

> **Figure 14**. Mux-D scan-chain architecture. All flip-flops in the design are stitched into a serial shift register controlled by a Scan Enable (SE) signal. In normal mode the FFs hold logic state; in test mode they form one long shift register, allowing every internal node to be loaded and observed through two dedicated pins. BIST adds on-chip pattern generation and response compression, dramatically reducing ATE pin count and test data volume[1].

### DFT metrics

- **Fault coverage** — Percent of modelled faults (stuck-at, transition, bridging) detected by the test set. Industry target: ≥ 98 % stuck-at, ≥ 90 % transition <span class="cite">[1, 2]</span>.
- **Test time** — Seconds per device on ATE. Dominated by scan-shift time; compression reduces this by 10×–50×.
- **DFT overhead** — Area and timing cost. Modern scan + BIST adds 5–15 % silicon area and 1–3 % timing slack consumption <span class="cite">[1]</span>.


**Fab interface:** The fab does not write DFT — that's the designer's responsibility. But the fab specifies what test patterns it can apply, what ATE platforms are supported, what failure signatures it can localize, and what scan compression schemes are in its standard flow. Mismatches here cause silicon to ship with low effective coverage even when the design's ATPG report claims 99 %.


**Cross-references**Articles in this wiki — DFM (§15), MfD (§16), Tape-out (§25), PRR (§26).

## References

1.  JEDEC Solid State Technology Association, _JEDEC Standard JESD125: Design for Testability Guidelines_, including LSSD scan path methodology, ATPG algorithm survey, and BIST architectures.
2.  Balasinski, A., _Semiconductors: Integrated Circuit Design for Manufacturability_, CRC Press, Chapter 2 (Design for Test methodology), including scan compression, ATPG, and BIST.
