# WIP · Cycle Time · X-factor

**Category:** Process Workflow · **Lifecycle:** FW5


## WIP, Cycle Time, X-factor

The three fundamental flow metrics of a wafer fab. Little's law links them mathematically; healthy fab operations keep all three within target bands. The trade-off between high utilization and low cycle time is the central tension of semiconductor manufacturing economics <span class="cite">[1]</span>.

### Definitions

- **WIP (Work In Progress)** — wafers currently somewhere in the fab between fab-in and fab-out. Measured in wafer-equivalents.
- **Cycle Time (CT)** — time from fab-in to fab-out, averaged over recently completed lots. Measured in days.
- **Throughput (TH)** — wafers completed per unit time (typically wafers/week or move/day). Long-run average equals lot starts in steady state.
- **X-factor** — actual cycle time divided by theoretical raw processing time. X-factor = 1 is the unachievable floor; X = 2–3 is healthy; X \> 4 signals congestion.

### Little's Law

The relationship between the first three metrics is Little's Law, an exact result valid for any stable queueing system <span class="cite">[1]</span>:

![Figure 23](art-23_wip-and-cycle-time-relationship.svg)

> **Figure 23.** Little's Law (top) and the Hopp-Spearman cycle-time curve (bottom). At low utilization the cycle time hovers near the raw processing time (X-factor ≈ 1) and any wafer flows through quickly. As utilization approaches 1.0, cycle time grows non-linearly — at 90 % utilization a typical fab's X-factor exceeds 5. Mature fabs target 80–85 % utilization, accepting an X-factor of ~2.5 to keep cycle time stable and responsive[1].

### Why cycle time explodes

The non-linear cycle-time response to utilization comes from queueing theory. At a single station with arrival rate λ and service rate μ, average cycle time is approximately *CT = 1/μ · 1/(1 − ρ)*, where ρ = λ/μ is the utilization. The (1 − ρ) factor in the denominator means cycle time goes to infinity as ρ approaches 1. Fabs have hundreds of stations, but the cumulative effect is the same: pushing utilization toward 100 % buys little throughput at extreme cycle-time cost <span class="cite">[1, 2]</span>.

### X-factor as the operational dashboard

X-factor is monitored daily at the fab level and per route at the WIP-engineering level. A typical decomposition:

- **X-factor ≤ 2.0** — best-in-class, R&D-heavy lines or low-utilization HVM.
- **X-factor = 2.5–3.0** — healthy HVM target.
- **X-factor = 3.0–4.0** — capacity-strained, hot lots affecting flow.
- **X-factor \> 4.0** — production at risk; cycle time commitments to customers likely missed.

### The hot-lot tax

Chung & Jang quantify the cycle-time penalty of mixing R&D and hot lots with production: as the R&D-lot fraction grows above ~10–15 %, production X-factor grows non-linearly because of dispatch priority preemption <span class="cite">[2]</span>. The operational implication is that fabs running heavy NPI (many customer products in pilot stage) must either (a) build dedicated R&D lines, (b) accept the production X-factor penalty, or (c) tightly ration hot-lot privileges.



**WIP control:** The single most effective lever for cycle-time reduction is WIP reduction. Little's Law: at constant throughput, halving WIP halves cycle time. Capping starts (CONWIP control) is the standard tactic; the fab refuses to start a new lot until a lot finishes, holding WIP constant.

**Cross-references** Articles in this wiki — <a href="#lots">Lot Types</a> (§13), <a href="#oee">OEE</a> (§22), <a href="#mpw">MPW</a> (§11).

## References

1.  May, G. S. and Spanos, C. J., _Fundamentals of Semiconductor Manufacturing and Process Control_, Wiley-IEEE Press, 2006, Chapter 12 (Factory Productivity); Hopp, W. and Spearman, M., _Factory Physics_, McGraw-Hill — the foundation textbook on Little's Law and cycle-time vs utilization trade-offs.
2.  Chung, J. and Jang, J., "Influence of an R&D lot on productivity in semiconductor manufacturing", _Computers & Industrial Engineering_ 168 (2022) 108030 — empirical analysis of throughput and cycle-time impact of R&D lot mixing.
