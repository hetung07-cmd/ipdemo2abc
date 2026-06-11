# Test Element Group (TEG)

**Category:** Process Workflow · **Lifecycle:** FW2·FW4

## Test Element Group (TEG)

A dedicated wafer area populated with engineering test structures used for process characterization, model extraction, and physical analysis. The TEG is larger than the production PCM and is normally run on engineering or qualification lots rather than on every production wafer <span class="cite">[1]</span>.

### PCM versus TEG

| Property             | PCM (Article 8)                  | TEG                                    |
|----------------------|----------------------------------|----------------------------------------|
| Location             | Scribe line, every wafer         | Drop-in chip area or whole wafer       |
| Area                 | Small (60-80 µm wide strip)      | Large (one die area or more)           |
| Sample frequency     | 9-point per wafer, every wafer   | Engineering lots, qualification lots   |
| Primary use          | SPC + lot disposition            | Model extraction, FA, qualification    |
| Structure complexity | Small, simple, parameter-focused | Large arrays, mismatch banks, antennas |

![Figure 9.](art-06_teg-structure-types-and-their-use.svg){width=100%}

> **Figure 9**. The five structure families that populate a CMOS Test Element Group, with examples and their use in characterization. Real TEGs add capacitor arrays (MIM/MOS), kelvin resistors, photodiodes, and SRAM bit-cell arrays as needed for the particular technology being characterized <span class="cite">[1, 2]</span> .*

### When the TEG is used

The TEG is run at three points in the technology lifecycle:

1.  **Pilot line characterization (FW4)** — TEG wafers are the primary vehicle for extracting SPICE parameters, mismatch coefficients, and reliability acceleration models. The output feeds PDK release.
2.  **Process qualification (FW4 boundary)** — TEG forms the Level 1 TESTCHIP in the JEP012A framework, providing wear-out data on HCI, TDDB, BTI, and P²ID <span class="cite">[1]</span>. See Article 3 (Process Qualification).
3.  **Engineering lots in production (FW5)** — periodic TEG runs ensure that drift in process or equipment has not changed the model parameters or reliability margins.

<div class="info">

A common pattern is to embed a small "drop-in" TEG inside production reticles so that one die per shot is a TEG. This sacrifices a few percent of wafer area but provides a continuous data stream for trend analysis without dedicating whole wafers.

</div>

<div class="xref">

## Cross-references
rticles in this wiki — Process Qualification (§3), PCM/WAT (§8), SPICE Model role (§10), Test Vehicle TQV (§11).

</div>



## References

1.  JEDEC Solid State Technology Association, _JEDEC Publication No. 001-2A: Foundry Process Qualification Guidelines – Front End Transistor Level_, September 2018, §7 (test summary), §8–§11 (test structures by mechanism), §13 (Construction Analysis).
2.  May, G. S. and Spanos, C. J., _Fundamentals of Semiconductor Manufacturing and Process Control_, Wiley-IEEE Press, 2006, Chapter 9 (Device Modeling and Parameter Extraction).


