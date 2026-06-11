# Multi-Project Wafer (MPW)

**Category:** Process Workflow · **Lifecycle:** FW4

## Multi-Project Wafer (MPW)

A foundry-organized service that combines several unrelated customer designs onto a single set of masks and a shared run of wafers, splitting the non-recurring engineering (NRE) cost of mask making and pilot fabrication. MPW is the standard cost-reduction mechanism for prototype, academic, and low-volume tape-outs.

### The MPW concept

A full mask set at 28 nm costs roughly USD 1–3 million and requires several months of mask-shop work. For a small design — a student thesis project, a start-up prototype, an in-house IP demonstrator — paying that NRE for a few dozen chips is uneconomic. The MPW service aggregates customers: many small designs share one reticle, one mask set is made, one pilot wafer run produces a few wafers, the wafers are diced, and each customer receives the die from their own design.

![Figure 12.](art-11_mpw-reticle-composition-and-workflow.svg){width=100%}

> **Figure 12.** MPW reticle composition (left) and service workflow (right). The reticle hosts several independent customer designs plus foundry-owned PCM/TEG structures. The flow runs from GDSII submission through composed mask making, pilot wafer fabrication, probe and dicing, with each customer receiving their own die. Major commercial services include TSMC University Shuttle, Europractice, MOSIS, and CMP.*

### When MPW is the right choice

- **Prototype validation** — first silicon of a new circuit before committing to a dedicated tape-out.
- **Academic / research** — university courses, PhD theses, demonstrator chips.
- **Start-up de-risking** — bring up the first chip on minimal capital.
- **IP qualification** — characterize a single IP block (PLL, SerDes, memory) without paying for a full SoC tape-out.

### When MPW is the wrong choice

- **Production ramp** — die count is too small (typically \< 100) for any volume product.
- **Time-critical projects** — shuttle scheduling can delay tape-out by months waiting for the next window.
- **Sensitive IP** — sharing a reticle with unknown third parties is a confidentiality risk for some customers; some services offer encryption or quarantined shuttles to mitigate this.
- **Designs requiring custom mask layers** — MPW reticles use a fixed set of layers; designs that need exotic options (deep-well, dual gate oxide variants outside the standard offering) cannot share the shuttle.


From a fab-operations perspective, MPW lots are scheduled as a special category of *R&D / Pilot* lot (see Article 13). They consume capacity at the photo bottleneck and need priority handling to meet the shuttle commitment. Productive fabs typically reserve a small fixed fraction of weekly capacity (1–3 %) for MPW shuttles.


**Cross-references:** <a href="#tqv">Test Vehicle</a> (§11), <a href="#lots">Lot Types</a> (§13); upcoming articles on <a href="#tapeout">Tape-out checklist</a> and Customer NPI flow will cover the customer side of the MPW interaction.


## References

1.  This article describes industry practice not codified in a single JEDEC standard. MPW services are documented in foundry-specific design rule manuals and shuttle programs; commercial examples include TSMC University Shuttle, Europractice IC Service, MOSIS (USA), and CMP (France).
2.  Chung, J. and Jang, J., "Influence of an R&D lot on productivity in semiconductor manufacturing", _Computers & Industrial Engineering_ 168 (2022) 108030 — MPW and R&D lots share the same throughput-vs-capacity dynamics.

