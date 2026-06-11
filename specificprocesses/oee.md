# OEE · SEMI E10 · MTTR/MTBF

**Category:** Process Workflow · **Lifecycle:** FW5

## OEE · SEMI E10 · MTTR / MTBF

The standard equipment-effectiveness vocabulary for semiconductor fabs. SEMI E10 defines the equipment state taxonomy; OEE (Overall Equipment Effectiveness) is the headline KPI computed from those states; MTTR and MTBF are the reliability sub-metrics. Together they are the operational currency of HVM <span class="cite">[1]</span>.

### SEMI E10 equipment states

The SEMI E10 standard partitions every moment of every tool's life into one of six mutually exclusive states. Every E10-compliant fab MES tracks tool time in these categories continuously:

- **Productive (PRD)** — running production wafers (the only revenue-generating state).
- **Standby (SBY)** — idle, available for production but no wafers waiting.
- **Engineering (ENG)** — running engineering / R&D / qualification lots.
- **Scheduled Downtime (SDT)** — planned maintenance per the PM calendar.
- **Unscheduled Downtime (UDT)** — unexpected failure, repair in progress.
- **Non-Scheduled (NST)** — out of service (qualification pending, mothballed, shift not staffed).

![Figure 22](art-22_oee-components-and-semi-e10-states.svg){width=100%}

> **Figure 22**. SEMI E10 time stack and the OEE decomposition. The horizontal bar partitions a calendar week (168 hours) of one tool into the six E10 states; "Operations Time" includes productive + standby + engineering; "Manufacturing Time" adds scheduled downtime. OEE multiplies availability (uptime fraction), performance (speed at which the tool runs versus theoretical), and quality (good-wafer fraction). MTBF and MTTR are the underlying reliability metrics that drive availability [1, 2].

### How OEE is used

- **Capacity planning** — the fab's total capacity at any node is the product of tool count, theoretical throughput per tool, and OEE. Forecasting OEE 6–12 months out is the input to capital-expansion decisions.
- **Tool-set benchmarking** — comparing OEE of nominally identical tools (e.g. all 28 nm scanners) surfaces which units are losing time and to what cause (PM, breakdowns, recipe optimization gap).
- **Improvement targeting** — OEE's multiplicative structure highlights the worst factor; an 80 % availability × 90 % performance × 99 % quality = 71 % OEE means availability is the limiting factor, not throughput or quality.

### Targets at 28 nm

For a mature 28 nm fab, healthy benchmark OEE is 70–85 %. Critical bottleneck tools (lithography scanners) are pushed harder — often 80–90 % — at the cost of higher PM frequency. Non-bottleneck tools run at lower utilization by design to provide queueing buffer <span class="cite">[2]</span>.


> **Common pitfall:** Optimizing one tool's OEE in isolation can hurt fab-level throughput. A bottleneck-aware OEE strategy keeps the bottleneck pegged at maximum OEE and accepts lower OEE on upstream / downstream tools to feed the bottleneck without starvation.

**Cross-references** Articles in this wiki — <a href="#lots">Lot Types</a> (§13), <a href="#wip">WIP & cycle time</a> (§23), <a href="#fat-sat">FAT/SAT</a> (§29).

## References

1.  SEMI E10, _Specification for Definition and Measurement of Equipment Reliability, Availability, and Maintainability (RAM)_, SEMI International Standards — defines the six equipment states and the underlying time accounting used by all fab MES systems.
2.  May, G. S. and Spanos, C. J., _Fundamentals of Semiconductor Manufacturing and Process Control_, Wiley-IEEE Press, 2006, Chapter 12 (Factory Productivity), including OEE decomposition and capacity planning.
