A two-stage demonstration that a fabrication process is sufficiently reliable to release: **Level 1** finds technology wear-out weaknesses on dedicated test structures; **Level 2** demonstrates application-relevant reliability on a functional Technology Qualification Vehicle (TQV) [1].

## The two-level framework (JEP012A)

JEP012A §1 defines two levels of process qualification with explicitly different intents [1]:

- **Level 1 — Pure process qualification.** Intended to find reliability weaknesses. Primarily addresses technology wear-out mechanisms through package-level or wafer-level reliability tests on specially designed test structures (TESTCHIP). The foundry is responsible for design and implementation of the Level 1 test vehicle.
- **Level 2 — Application-relevant qualification.** Demonstrates the reliability of the process for projected or known applications via testing of a functional Technology Qualification Vehicle (TQV), including life test. Level 2 tests are specified separately in JEP013B [2].

![](proc-qual-fig1.svg){width=100%} 
> **Figure 3.** Process qualification two-level framework. Level 1 (red panel) uses dedicated test structures to find technology wear-out weaknesses on the four core CMOS reliability mechanisms (HCI, TDDB, BTI, P²ID). Level 2 (blue panel) uses a representative functional Technology Qualification Vehicle (TQV) — typically an SRAM whose size is keyed to the lithographic node per JEP013B Table 8 — to demonstrate application-relevant reliability through HTOL, HAST, TC, ESD, and latch-up testing [1, 2].

## Level 1 test structures and conditions

Level 1 testing uses dedicated structures (transistors, capacitors, antenna structures, mismatch arrays) placed either on the production wafer or on a separate TESTCHIP [1]. The four mandatory test categories per JEP012A §7 are HCI, GOI/TDDB, BTI (formerly threshold-voltage stability), and P²ID. Each test specifies stress conditions, sample size, failure criteria, and the acceleration model to be used.

## Level 2 TQV sizing

JEP013B specifies SRAM sizes scaled to the lithographic node so that the qualification vehicle exercises a representative defect density. For example, 32/28 nm requires a 128 Mb SRAM and 22/20 nm requires 256 Mb [2]. Other qualification vehicles (ASIC, microcontroller) are acceptable provided they offer equivalent transistor density. The TQV is then stressed through HTOL, HAST, TC, ESD, and latch-up — these tests overlap with *product qualification* (covered in Article in Batch 3) but apply at the *technology* level, before any specific customer product exists [1, 2].

> 💡 **Foundry vs. derivative process:** JEP012A §3.1 allows reduced qualification requirements for a derivative process where the parent process has already been fully qualified at the same location [1]. The exact subset is negotiated case-by-case; the typical reductions affect TQV stress hours and sample size rather than the test list itself.

## Where qualification fits in the fab lifecycle

Process qualification is the gate between technology development (FW1) and PDK release (FW3). It is normally executed in parallel with the late-stage pilot line activities (FW4) so that the TQV silicon comes from the same line that will run high-volume manufacturing. Re-qualification is triggered by any of: process change beyond the locked window, new equipment, new fab site, or extension to a new application class (consumer → automotive, for example) [1].

## Cross-references

Articles in this wiki — Device Characterization (§2), FA (§6); upcoming articles on Test Vehicle (TQV) and Product Qualification will continue the qualification chain from technology level to product level.

## References

- JEDEC Solid State Technology Association, *JEDEC Publication No. 001-2A: Foundry Process Qualification Guidelines – Front End Transistor Level*, September 2018, §1 (scope, two-level framework), §3 (responsibilities), §7 (test summary), §8–§11 (test specifications).
- JEDEC Solid State Technology Association, *JEDEC Publication No. 001-3B: Foundry Process Qualification Guidelines – Technology Qualification Vehicle Testing*, September 2024, Table of TQV vehicle sizes by lithographic node.
- JEDEC Solid State Technology Association, *JEDEC Publication No. 122H: Failure Mechanisms and Models for Semiconductor Devices*, Tables 6-1 and 6-2.
