# Standards Index — JEDEC · AEC-Q · SEMI · IPC · ISO

**Category:** Process Workflow · **Lifecycle:** reference (all phases)

## Summary

This article catalogs the principal standards bodies and the specific documents most relevant to a semiconductor foundry's process workflow. Every other article in this wiki cites one or more of these documents. The catalog is organized by issuing body and by lifecycle relevance, with brief notes on what each standard governs.

## JEDEC — semiconductor reliability and characterization

JEDEC (originally Joint Electron Device Engineering Council, now JEDEC Solid State Technology Association) publishes the largest body of semiconductor-specific reliability and characterization standards. JEDEC documents are freely downloadable at jedec.org after registration, and they form the technical foundation of foundry qualification.

The publications most relevant to this wiki are organized by lifecycle phase:

**Process and product qualification family (Foundry Process Qualification Guidelines):**

- **JEP001-2A / JEP012A** _Foundry Process Qualification Guidelines – Front End Transistor Level_, September 2018. Defines the two-level qualification framework, the test summary at the transistor level (HCI, GOI/TDDB, BTI, P²ID), PCM characterization requirements at §12, and Construction Analysis requirements at §13. The foundational document for foundry-customer qualification interfaces.
- **JEP001-3A / JEP013A** _Foundry Process Qualification Guidelines – Product Level_. The product-level stress matrix (HTOL, HAST, TC, ESD, latch-up) with sample-size and reporting requirements at §7-§9. The basis for Article 18 (Product Qualification).
- **JEP001-3B / JEP013B** _Foundry Process Qualification Guidelines – Technology Qualification Vehicle Testing_, September 2024. The TQV testing standard including the SRAM-size-by-node table. The basis for Article 10 (Test Vehicle TQV).

**Failure mechanisms and analysis:**

- **JEP122H** _Failure Mechanisms and Models for Semiconductor Devices_. The catalog of established failure mechanisms with their acceleration models (Tables 6-1 and 6-2), including HCI, TDDB, NBTI/PBTI, electromigration, stress migration, ESD damage, and latch-up. Cited throughout Articles 7, 9, 12, 30.
- **JEP131A** _Potential Failure Mode and Effects Analysis (FMEA)_, May 2005. Defines the DFMEA and PFMEA framework, the S × O × D = RPN scoring system, and the relationship between FMEA and other risk analyses. The basis for Article 3.
- **JESD34** _Failure-Mechanism-Driven Reliability Qualification of Silicon Devices_. An alternative qualification framework based on physics-of-failure rather than fixed stress matrices.
- **JESD85** _Methods for Calculating Failure Rates in Units of FITs_. The standard FIT-rate computation methodology referenced by JEP013A and JESD34 for reliability projection.

**Process characterization and control:**

- **JEP132A.01** _Process Characterization Guideline_, December 2022. The six-step characterization flow, the recommended tool set at each step (DOE, FMEA, MSA, SPC), the gauge-study example in Annex E. The basis for Articles 1, 2, 4.
- **JESD557** _Process Average Testing for Acceptance of Limited Hours/Cycles Life Test Reliability Distributions_. Referenced from JEP132A for capability calculation conventions.

**Stress test methods (the JESD22 family):**

- **JESD22-A104** Temperature Cycling — the methodology cited in JEP013A §8.3.
- **JESD22-A108** High-Temperature Operating Life (HTOL) — cited in JEP013A §8.1.
- **JESD22-A110** Highly Accelerated Stress Test (HAST).
- **JESD22-A113** Preconditioning of Surface Mount Devices Prior to Reliability Testing.
- **JESD22-A114** ESD Sensitivity Testing Human Body Model (HBM).
- **JESD22-A115** ESD Sensitivity Testing Machine Model (MM).
- **JESD22-C101** ESD Sensitivity Testing Charged Device Model (CDM).
- **JESD78** Latch-up Test.

**Test methodology:**

- **JESD125** _Design for Testability Guidelines_. The DFT standard covering scan path, ATPG, BIST, and test compression. The basis for Article 14.
- **JESD49B** _Procurement Standard for Known Good Die (KGD)_. Defines the qualification and test regime for die-level shipments. Relevant to advanced packaging and multi-chip modules.
- **JEP119A** _A Procedure for Executing SWEAT_. The standard wafer-level electromigration acceleration test, basis for Article 30.

**Change management:**

- **J-STD-046** _Customer Notification Standard for Product/Process Changes by Electronic Product Suppliers_. The cross-industry PCN standard referenced by JEP012A §3.4 and used as the basis for Article 21.

## AEC — automotive electronics qualification

The Automotive Electronics Council publishes additional qualification requirements for automotive integrated circuits beyond the JEDEC baseline. AEC documents are freely available at aecouncil.com.

- **AEC-Q100** _Failure Mechanism Based Stress Test Qualification for Integrated Circuits_. The dominant automotive IC qualification standard. Tightens JEDEC stress conditions (typically 1000 hours HTOL at 150 °C rather than 125 °C) and adds Grade 0/1/2/3 temperature classifications corresponding to under-hood, under-hood-passenger, passenger-compartment, and accessory operating environments. Required by every major automotive OEM.
- **AEC-Q101** _Discrete Components_ — companion standard for discretes.
- **AEC-Q104** _Multi-Chip Modules_ — for multi-chip module assemblies.
- **AEC-Q200** _Passive Components_ — for passive components used on automotive PCBs.

## SEMI — equipment and operations

SEMI (Semiconductor Equipment and Materials International) publishes standards focused on the equipment and operational side of fabs rather than the device side. SEMI standards are paywalled and purchased from semi.org.

- **SEMI E10** _Specification for Definition and Measurement of Equipment Reliability, Availability, and Maintainability (RAM)_. Defines the six equipment states (productive, standby, engineering, scheduled downtime, unscheduled downtime, non-scheduled), the time-accounting framework, and the OEE / MTBF / MTTR computation conventions. The basis for Article 22.
- **SEMI E5** _SEMI Equipment Communications Standard / Generic Equipment Model (SECS/GEM)_. The communication protocol between fab MES and individual tools. Foundational for FDC, APC, and MES integration; referenced in Article 29.
- **SEMI E30** _Generic Model for Communications and Control of SEMI Equipment (GEM)_. Companion to SECS, defines the higher-level state and control model.
- **SEMI F47** _Specification for Semiconductor Processing Equipment Voltage Sag Immunity_. Defines tolerance to power-line voltage sags; critical for fab utility infrastructure design.
- **SEMI S2** _Environmental, Health, and Safety Guideline for Semiconductor Manufacturing Equipment_. The safety standard for equipment commissioning and operation.

## IPC — interconnect and assembly

IPC (Institute for Printed Circuits, now Association Connecting Electronics Industries) publishes standards for printed circuits, electronic assembly, and component handling. Most relevant to the foundry-to-assembly handoff.

- **IPC-A-610** _Acceptability of Electronic Assemblies_. The dominant assembly acceptance standard; defines visual criteria for solder joints, conformal coating, and cleanliness.
- **IPC J-STD-020** _Moisture/Reflow Sensitivity Classification for Nonhermetic Surface Mount Devices_. The MSL classification standard referenced by JEDEC JESD22-A113.
- **IPC J-STD-033** _Handling, Packing, Shipping and Use of Moisture/Reflow Sensitive Surface Mount Devices_. The handling standard that follows MSL classification.

## ISO — quality management

ISO (International Organization for Standardization) publishes management-system standards rather than technical specifications, but they govern how foundries demonstrate quality.

- **ISO 9001:2015** _Quality Management Systems — Requirements_. The baseline QMS standard. §8.6 requires documented release authorization (the basis for Article 28 / CoC) and §8.5.2 requires traceability. Every modern foundry holds ISO 9001 certification.
- **ISO 14001:2015** _Environmental Management Systems_. The environmental-management equivalent of ISO 9001.
- **ISO 13485:2016** _Medical Devices — Quality Management Systems_. The QMS standard for medical-device suppliers; applies to foundries serving medical customers.
- **ISO 14971** _Application of Risk Management to Medical Devices. The risk-management standard for medical applications, complementing JEP131A FMEA.

## IATF — automotive quality

The International Automotive Task Force publishes the automotive-industry QMS standard that builds on ISO 9001.

- **IATF 16949:2016** _Quality Management Systems for Automotive Production and Service Parts_. The automotive QMS standard, required by all major OEMs. Annex A defines the PPAP (Production Part Approval Process) submission categories that map onto the PRR evidence package (Article 26).

## AS — aerospace

SAE International publishes the aerospace QMS standards under the AS prefix.

- **AS9100D** _Quality Management Systems — Aerospace_. The aerospace QMS standard built on ISO 9001.
- **AS6171** _Test Methods Standard; General Requirements, Suspect/Counterfeit Electrical, Electronic, and Electromechanical Parts_. The counterfeit-mitigation standard required for aerospace and military electronics supply chains.

## AIAG — industrial quality references

The Automotive Industry Action Group publishes reference manuals that support IATF 16949 implementation. AIAG manuals are paywalled.

- **AIAG MSA Reference Manual** (4th edition). The standard reference for Gauge R&R study design and acceptance criteria. The basis for Article 4 (MSA).
- **AIAG SPC Reference Manual** (2nd edition). Companion reference for control-chart methodology.
- **AIAG FMEA Reference Manual** (4th edition, with AIAG-VDA harmonized 5th edition for automotive). Reference for DFMEA / PFMEA implementation.
- **AIAG PPAP Reference Manual** (4th edition). The Production Part Approval Process implementation reference.

