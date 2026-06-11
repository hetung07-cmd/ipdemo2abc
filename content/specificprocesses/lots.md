# Lot Types

**Category:** Process Workflow · **Lifecycle:** FW4·FW5

## Lot Types — R&D, Engineering, Qualification, Production

A semiconductor fab runs four to five distinct lot types simultaneously on the same line. They share the same equipment but have different purposes, different priority rules, and different impact on throughput. Understanding the taxonomy is critical to planning fab capacity and to interpreting cycle-time anomalies <span class="cite">[1]</span>.

### The taxonomy

| Lot type          | Purpose                                   | Recipe lock                      | Priority                   | Sample size                    |
|-------------------|-------------------------------------------|----------------------------------|----------------------------|--------------------------------|
| R&D lot           | New _product_ validation, time-to-market  | Loose — recipe may be tweaked    | High                       | 1–3 wafers typical             |
| Engineering lot   | New _process_ technology development      | Variable — split lots, DOE arms  | Medium-high                | 3–8 wafers typical             |
| Qualification lot | Reliability qualification, customer audit | Locked — zero experiments        | Medium                     | 3 lots × specified sample size |
| Production lot    | Regular high-volume manufacturing         | Locked — production recipes only | Standard                   | 25 wafers (1 cassette)         |
| Hot / super-hot   | Production with escalated priority        | Locked                           | Highest (super-hot \> hot) | Production cassette            |

![Figure 13](art-13_lot-types-flowing-through-a-fab-and-their-priority-interacti.svg){width=100%}

> **Figure 13**. Five lot types flowing simultaneously through the fab. Each stage (litho, etch, implant, metal) is a contention point where high-priority lots cut in front of production lots, lengthening production cycle time. The photolithography bottleneck (red callout) absorbs 35-45 % of all wafer waiting time and is where the productivity penalty of high-priority R&D lots is most visible[1].

### The productivity trade-off

Chung & Jang <span class="cite">[1]</span> developed a stochastic model showing that mixing R&D lots with production lots on the same line creates a measurable throughput penalty. The key results from that study apply directly to fab capacity planning:

- Throughput decreases linearly with R&D-lot fraction; cycle time increases exponentially.
- The bottleneck stage (typically photolithography) sees 35–45 % of all waiting time; only 4.5–7.5 % of processing steps occur there. Priority decisions at this stage dominate fab-level cycle time.
- For high-mix fabs, dedicated R&D capacity (parallel mini-lines) can outperform mixed lines once the R&D-lot fraction exceeds roughly 10–15 % of capacity.

### Per-lot rules

### - R&D lot

Created when a customer brings a new product to characterize on a mature process, or when an internal new product is taped out. Often runs at "express priority" so that learning cycles are fast. Lot size is small (1–3 wafers) because the goal is first silicon, not volume. Recipe parameters may be tweaked mid-lot between modules.

### - Engineering lot

The mechanism for process-technology development: split lots run with deliberately varied recipe arms (DOE), with cassette splits or per-wafer splits. Typical sizes range from 3 to 8 wafers. Engineering lots are how new process modules graduate from the R&D line to the production line; they are the operational manifestation of the Process Characterization workflow (Article 1).

### - Qualification lot

Run with recipes locked exactly per the production recipe of record. No experiments, no splits. JEDEC qualification programs (JEP012A, JEP013A) require samples from *three* qualification lots to demonstrate independence from lot-to-lot variation <span class="cite">\[2, 3\]</span>.

### - Production lot

The default. Full 25-wafer cassette, locked recipes, standard dispatching rules.

### - Hot / super-hot lot

Production lots with elevated priority, typically for customer commitments that have slipped. Hot lots cut to the front of every queue except super-hot. Super-hot lots cut to the front of everything including each other (by escalation date). Excessive hot-lot use causes severe production cycle-time damage and is normally rationed by the fab planning function.

> A common fab metric is "X-factor" — the ratio of actual cycle time to theoretical raw-processing time. Healthy production lots run at X-factor 2–3; pure R&D-only lines can run at 1.5; mixed lines under stress can exceed X-factor 5. R&D-lot fraction and hot-lot fraction are the two strongest drivers of X-factor at constant equipment utilization.


**Cross-references** Articles in this wiki — <a href="#process-characterization">Process Characterization</a> (§1), <a href="#tqv">Test Vehicle TQV</a> (§11), <a href="#mpw">MPW</a> (§12); upcoming articles on <a href="#wip">WIP & cycle time</a> and <a href="#oee">OEE</a> will quantify the throughput dynamics introduced here.

## References

1.  Chung, J. and Jang, J., "Influence of an R&D lot on productivity in semiconductor manufacturing", _Computers & Industrial Engineering_ 168 (2022) 108030.
2.  JEDEC Solid State Technology Association, _JEDEC Publication No. 001-2A: Foundry Process Qualification Guidelines – Front End Transistor Level_, September 2018, §6 (lot requirements).
3.  JEDEC Solid State Technology Association, _JEDEC Publication No. 001-3A: Foundry Process Qualification Guidelines – Product Level_, §8 (sample-size and lot requirements).