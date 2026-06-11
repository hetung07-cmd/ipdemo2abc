# FAT / SAT — Equipment Acceptance Tests

**Category:** Process Workflow · **Lifecycle:** FW1 TD · FW2 Metrology · FW4 Pilot

## Summary

FAT and SAT are the two-stage test protocol that bridges equipment vendor and end user. Factory Acceptance Test is performed at the vendor's site before shipment; Site Acceptance Test is performed at the fab after installation. Together they form the contractual basis on which the buyer accepts a multi-million-dollar tool and authorizes payment milestones. The protocol is industry-standard practice referenced in equipment purchase contracts; the equipment-states accounting framework that follows tool release is codified in SEMI E10 <span class="cite">[1]</span>.

## FAT — at the vendor's factory

FAT is the buyer's verification that the tool meets specification under controlled vendor-site conditions, before it is disassembled for shipment. The buyer's engineers travel to the vendor site — typically Japan, Korea, the United States, or Germany for major OEMs — witness the test in person, and sign off if results pass. FAT execution time ranges from a few days for simple tools (wet stations, anneal furnaces) to several weeks for complex tools (lithography scanners, advanced etchers).

A typical FAT scope includes:

**Functional verification** confirms that every subsystem operates per specification. For a CVD chamber this means the gas delivery system reaches setpoint with the required tolerance, the RF generator delivers the rated power into a load, the temperature control reaches and holds setpoint with the required uniformity across the wafer surface, and the wafer handling robot picks, places, and centers wafers within specified accuracy.

**Process demonstration** runs vendor-supplied test wafers through a representative recipe. Output is measured against the vendor's published acceptance specification: film thickness uniformity (typically ≤ 2 % 1σ within wafer at advanced nodes), composition (verified by XPS or FTIR), and any process-specific metric such as refractive index, stress, or crystalline phase.

**Particle baseline** measures added particles per wafer on monitor wafers run through the tool. A typical limit at 28 nm is ≤ 10 added particles larger than 100 nm per 300 mm wafer; advanced nodes (7 nm and below) tighten this further to single-digit adders at 30 nm and smaller. Particle performance is the strongest predictor of tool yield impact in production.

**Productivity demonstration** verifies wafer-per-hour throughput on a defined recipe against the tool's rated capacity. For a lithography scanner this means wafers per hour at a specified field count and exposure dose. Productivity directly enters the buyer's capacity planning and affects the tool's effective cost per wafer.

**Software and recipe verification** confirms that all qualified recipes load and execute as documented, that the user interface behaves per the operations manual, that the SECS/GEM interface communicates with the buyer's MES correctly, and that data logging captures the expected channels at the expected rates.

**Documentation review** confirms that operation manuals, calibration certificates, spare parts lists, recommended PM schedules, and training records are complete and current.

## Between FAT and SAT — shipping

After FAT pass, the vendor disassembles the tool into shippable subassemblies, crates them, and ships by air (faster, more expensive) or sea (slower, cheaper, with higher vibration / humidity / temperature exposure risk). Major OEMs maintain dedicated logistics teams that monitor shock and humidity in transit using data loggers attached to each crate; out-of-spec transit events can void the FAT and require re-FAT after arrival.

Shipping time ranges from one week (air freight Japan-to-Vietnam) to two months (sea freight US-to-Asia). The buyer's pre-installation work — utility hookups, cleanroom modifications, scheduling installation contractors — proceeds in parallel.

## Installation

Tool installation at the fab is performed by vendor service engineers (typically resident or fly-in) working with the fab's facilities team. The work includes mechanical placement (cranes are common for heavy lithography scanners), connection to facility utilities (electrical power at 380 V or 480 V, deionized water at semiconductor grade, ultra-high-purity gases, exhaust, drain), vibration isolation, EMC isolation if required, and initial system bring-up. Installation typically takes one to three weeks; for complex tools it can extend to two months.

## SAT — at the fab

SAT is in principle a repeat of FAT, performed at the fab after installation. In practice it has two important extensions beyond FAT:

**Environmental match.** The fab's cleanroom class, utility purity, vibration environment, EMC environment, and temperature stability all differ from the vendor's factory. SAT verifies the tool still meets specification in the buyer's actual environment. This is non-trivial: a tool that passes FAT can fail SAT because the fab's utilities are out of spec (water resistivity too low, gas purity insufficient, ambient particles in the loadlock area). Resolving these issues at SAT exposes facility deficiencies that would otherwise contaminate production.

**Integration check.** The tool must communicate with the fab's MES (Manufacturing Execution System), AMHS (Automated Material Handling System), recipe management system, and data collection servers. SAT validates the SECS/GEM interface end-to-end: recipe download from MES, lot start command, data upload, alarm propagation. Integration issues are often unique to the specific MES configuration and can require vendor-side software patches.

A failed SAT triggers a "delta-FAT" — vendor service engineers must restore specification compliance before the tool can be released. The buyer typically withholds the SAT-tied payment milestone until pass is achieved.

## After SAT — additional release gates

Passing SAT does not immediately release the tool to production. Three additional gates must close:

**Marathon run.** The tool runs continuously 24 hours per day for two to four weeks on monitor wafers, with no production workload. The marathon establishes a baseline Mean Time Between Failures (MTBF, see Article 22) and surfaces any infant-mortality issues that didn't appear in the shorter SAT. A marathon-run failure typically indicates a manufacturing defect in a specific subassembly; vendor warranty covers replacement.

**Process qualification.** Qualified production recipes are loaded and run on monitor wafers. Critical parameters (CD, film thickness, sheet resistance) are measured at production sampling rates. Cpk is computed; the tool is released only when Cpk meets the process control plan target (typically Cpk ≥ 1.33 for non-critical parameters, Cpk ≥ 1.67 for critical).

**Measurement System Analysis** is required for any metrology tool before release (Article 4). The standard Gauge R&R study — ten parts measured by three operators with three replicates each — must demonstrate gauge variance below 10 % of the spec tolerance window (or 30 % under provisional criteria). SPC charts on a tool that hasn't passed MSA are scientifically meaningless and may waste production effort chasing measurement noise.

After all three gates close, the tool enters SEMI E10 "Productive" state and can run production wafers.

## Payment milestone structure

Equipment purchase orders typically tie payments to acceptance gates. A standard structure: 30 % deposit at order placement, 40 % at FAT pass, 20 % at SAT pass, 10 % at production release after marathon. This structure aligns vendor incentives with delivery of a working tool, not just shipment of hardware. Variations exist (some vendors require 50 % at order) but the principle is universal.

## Cross-references

- **<a href="#msa">MSA</a>** — mandatory release gate for metrology tools.
- **<a href="#pcm-wat">PCM/WAT</a>** — uses metrology tools that must complete MSA before SPC is meaningful.
- **<a href="#oee">OEE / SEMI E10</a>** — the equipment-states accounting framework the tool enters after release.
- **<a href="#spc">SPC</a>** — built on top of measurements from MSA-qualified gauges.

## References

[1] SEMI E10, _Specification for Definition and Measurement of Equipment Reliability, Availability, and Maintainability (RAM)_, SEMI International Standards.

[2] May, G. S. and Spanos, C. J., _Fundamentals of Semiconductor Manufacturing and Process Control_, Wiley-IEEE Press, 2006. Chapter 12 (Factory Productivity).
