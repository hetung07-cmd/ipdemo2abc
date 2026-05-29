// ============================================================
// Technology Transfer Handbook — application logic
// ============================================================
// All UI rendering, filtering, and modal handling. Reads data
// from window.CONFIG, window.ACTS, window.IPS_DATA,
// window.RELEVANCE, window.FLOW which are populated by
// data-loader.js (loaded before this script).
// ============================================================

var IP_TIERS={"Protocol compliance":"T1","SPICE":"T1","Statistic model":"T1","Corner model":"T1","Behavior model ( Verilog-A)":"T3","BEOL model (Back end of line model)":"T2","EDA process tech file":"T1","Netlist view":"T2","Pcell (parameterized cell)":"T1","DRC (Design rule check)":"T1","LVS (Layout vs. Schematic)":"T1","LPE (Layout Parameter Extraction)":"T2","ERC (Electrical rule check)":"T2","PEX (Parasitic Extraction)":"T1","ESD (Electrostatic Discharge)":"T1","Antenna":"T1","Latch-up":"T1","Reliability rules":"T1","DFM":"T2","IR drop rule":"T2","EM rule (Electromigration)":"T1","Thermal-aware rule":"T2","Mask data preparation interface":"T1","Test acceess I/O guidline":"T3","Timing and signal integerity":"T3","STA-Static Timing Analysis":"T1","Synthesis/CTS/P&R":"T2","Clocking":"T2","Low-power kits (retention/isolation)":"T2","Standard cell families":"T1","SRAM compilers":"T1","ESD clamps/pad rings":"T1","IO libraries":"T1","PCIe":"T3","USB":"T3","MIPI":"T3","Ethernet":"T3","Analog":"T2","Mixed signal":"T2","High speed":"T2","RF/mmwave":"T3","prioritized RF front-ends":"T3","DFT":"T2","ROM":"T2","eFuse":"T2","DDR/LPDDR":"T3","Device architecture":"T1","TCAD models":"T1","Reticle Shot Map":"T1","Process recipe":"T1","DOE methodology":"T2","Material selection table":"T1","Dense device array (variability, LDE)":"T2","Reliability stress structure":"T1","Lithography and parttern monitor":"T3","Statistic limit , conner chart":"T3","Reference structure":"T1","Measurement definitions":"T1","Model correlations":"T1","Integration guides":"T1","Process flow integration":"T1","Process window":"T1","Process sensitivity analysis":"T2","Process corner definition method":"T1","Yield  leaning":"T3","Inline monitoring strategy":"T1","Split lot design":"T2","Tool qualification and matching":"T1","Test structure design":"T1","Yield ramp-up methodology":"T1","Defect classification":"T1","SPC":"T1","FDC (Fault detection and classification)":"T1","Q-time controls":"T1","R2R APC":"T1","Lesson learn":"T2","FMEA (failure mode and effects analysis)":"T2","Equipment maintanence IP":"T3","Defect control strategy":"T2","Defect root cause library":"T1","Cost optimization":"T4","Capacity planning":"T4","Electrical test information":"T1","Metrology information":"T1","Defect-inspection information":"T1","Correlation data":"T1","Metrology involvement":"T2","Measurement system capability":"T2","Reliability of test infrastructure":"T2","TDDB lifetime models":"T1","BTI degradation models":"T1","HCI models":"T1","EM lifetime prediction":"T1","FA flow decision tree":"T2","Physical root-cause libs":"T2","Cross-layer defect interpretation":"T2","HTOL/ HAST/ TC test flows":"T1","Acceleration factor derivation":"T1","Sample size and confidence models":"T2","FIT (Failure in time) rate calculation methods":"T1","Mission profile translation":"T3","Automotive/aerospace qualification logic":"T3","Automotive Qualification Plan":"T3","Layer List and Polarity":"T1","Pellicle/Inspection Plan":"T1","Fracturing and Geometry Algorithms":"T2","ORC (Optical Rule Check)- Mask rule check":"T3","File format and data stuctures":"T3","Mask data translation":"T1","RET/OPC (Resolution Enhancement Tech / Optical Proximity Correction) kits":"T1","OPC test-keys":"T1","SMO strategies":"T2","SRAF (Sub-Resolution Assist Features) recipes":"T2","Phase Shift Masks design":"T3","mask set definition":"T3","alignment and overlay marks":"T3","hotspot library":"T3","hotspot detection method":"T3","Mask quality control":"T1","Multi-beam datapath":"T3","Product-specific yield learning":"T4","Design-process interaction":"T2","Customer ramp playbook":"T4","Electrical test":"T1","FDC rules":"T1","Dispatch Logic / Scheduling Rules":"T2","SECS/GEM Configuration":"T1","RMS Structure":"T2","AMHS/MCS Routing Algorithms":"T2","OPC-UA Namespace":"T3","Server Configuration":"T4","WIP Tracking":"T1","Lot Genealogy Schema":"T2","YMS Data Integration Schema":"T2","SEM/TEM Image Metadata Schema":"T3","Virtual Metrology Models":"T2","MLOps Pipeline Configuration":"T3","RBAC Configuration":"T4","IT/OT Segmentation Rules":"T3","IEC 62443 / Cybersecurity Layer":"T3","Data Retention & Archival Policy":"T4","Backup & Disaster Recovery Procedures":"T4"};
var GRP_BG={"N1":"#F2F2F2","N2":"#F2F2F2","N3":"#F2F2F2","N4":"#F2F2F2","N5":"#F2F2F2","N6":"#F2F2F2","N7":"#F2F2F2","N8":"#F2F2F2"};
var DOM_BG={"PDK":"#44494D","TD":"#44494D","PILOT":"#44494D","HVM":"#44494D","METRO":"#44494D","QR":"#44494D","MASK":"#44494D","PROD":"#44494D","IT":"#44494D"};
var DOM_CARD={"PDK":{"bg":"#FFFFFF","border":"#B5B4B4","hdr":"#44494D"},"MASK":{"bg":"#FFFFFF","border":"#B5B4B4","hdr":"#44494D"},"PROD":{"bg":"#FFFFFF","border":"#B5B4B4","hdr":"#44494D"},"TD":{"bg":"#FFFFFF","border":"#B5B4B4","hdr":"#44494D"},"PILOT":{"bg":"#FFFFFF","border":"#B5B4B4","hdr":"#44494D"},"HVM":{"bg":"#FFFFFF","border":"#B5B4B4","hdr":"#44494D"},"METRO":{"bg":"#FFFFFF","border":"#B5B4B4","hdr":"#44494D"},"QR":{"bg":"#FFFFFF","border":"#B5B4B4","hdr":"#44494D"},"IT":{"bg":"#FFFFFF","border":"#B5B4B4","hdr":"#44494D"}};
var PH_COL={"P0":{"bg":"#F2F2F2","border":"#B5B4B4","chip":"#000000","txt":"#000000"},"P1a":{"bg":"#F2F2F2","border":"#B5B4B4","chip":"#000000","txt":"#000000"},"P1b":{"bg":"#F2F2F2","border":"#B5B4B4","chip":"#000000","txt":"#000000"},"P1c":{"bg":"#F2F2F2","border":"#B5B4B4","chip":"#000000","txt":"#000000"},"P2":{"bg":"#FFF5F7","border":"#EE0033","chip":"#EE0033","txt":"#000000"},"P3":{"bg":"#FFF5F7","border":"#EE0033","chip":"#EE0033","txt":"#000000"}};

var PHASES={},GROUPS={},FLOW_MAP={};
CONFIG.phases.forEach(function(p){PHASES[p.id]=p;});
CONFIG.groups.forEach(function(g){GROUPS[g.id]=g;});
FLOW.forEach(function(p){FLOW_MAP[p.id]=p;});

var DOM_EMO={'PDK':'&#9881;','TD':'&#128300;','PILOT':'&#129514;','HVM':'&#127981;',
             'METRO':'&#128207;','QR':'&#9989;','MASK':'&#127917;','PROD':'&#128102;','IT':'&#128187;'};
var DOM_LABEL={'PDK':'PDK — Process Design Kit','TD':'Technology Development',
               'PILOT':'Pilot / Prototyping','HVM':'Volume Manufacturing',
               'METRO':'Metrology & Measurement','QR':'Quality & Reliability',
               'MASK':'Mask Fabrication','PROD':'Product Engineering','IT':'IT & Automation'};
var DOM_SUB={'PDK':'Models, rules, IP libraries — EDA office',
             'TD':'R&D lab — device architecture, TCAD, DOE',
             'PILOT':'Pilot line — process window, yield learning',
             'HVM':'HVM fab — APC/SPC, yield stabilization',
             'METRO':'Inline metrology (fab floor) + offline lab',
             'QR':'Reliability lab (HTOL/HAST/TC), FA lab',
             'MASK':'Mask shop — e-beam, OPC, reticle inspection',
             'PROD':'Design office + E-test floor — yield learning',
             'IT':'Horizontal layer — MES, FDC, APC, data models'};
var LAYERS=[
  {id:'design',label:'IP — DESIGN SUPPORT',sub:'PDK, Mask Data, Product Engineering',bg:'#F2F2F2',domains:['PDK','MASK','PROD']},
  {id:'manuf',label:'IP — MANUFACTURING',sub:'Technology Development, Pilot, HVM',bg:'#F2F2F2',domains:['TD','PILOT','HVM']},
  {id:'support',label:'IP — MFG SUPPORT',sub:'Metrology · Quality & Reliability · IT & Automation',bg:'#F2F2F2',domains:['METRO','QR','IT']}
];

/* ── Utils ── */
/* ═══ FAB WORK FLOW DATA BLOBS ═══ */
var FABFLOW=[{"id":"FW1","code":"TD","label":"Technology Development","short":"TD — Core Process","subtitle":"Process module recipes · device architecture · process integration","icon":"🔬","color":"#44494D","light":"#F2F2F2","duration":"18–36 months (greenfield), 6–12 months (transferred)","description":"Develop the core process technology: define device architecture (e.g., FinFET vs planar), establish process module recipes (litho, etch, CVD, PVD, ALD, CMP, implant, RTA, clean), build the process integration flow (module sequencing, Q-time, interfaces), and qualify the technology with TCAD simulation and short-loop test wafers. This is the deepest IP a foundry owns — the recipes, the integration know-how, the device physics tuning. Without this, no PDK or pilot line is possible.","entry_criteria":"Target technology node and application defined; device architecture decision made; TCAD environment available; access to lithography roadmap.","exit_criteria":"Process recipes locked for each module; integration flow document complete with Q-time specs; TCAD-to-silicon correlation established; reliability stress structures designed; baseline process window defined for each module.","key_activities":["Define device architecture and target electrical specifications (Vdd, gate length, drive current, leakage budget)","Develop process module recipes for litho, etch, CVD, PVD, ALD, CMP, implant, RTA, and clean — establish parameter ranges and process windows","Build the process integration flow document: step sequence, Q-time constraints, cross-module interface rules, contamination zone definitions","Run TCAD simulation to predict device behavior; correlate TCAD with short-loop silicon data","Define material selection table: gas purity grades, dielectric materials (k values), metal stack, chemical specifications","Design reliability stress structures (TDDB capacitors, EM via chains, HCI transistor arrays) for use in FW2 measurement and FW4 qualification","Define reticle shot map and mask set definition (which mask layers, polarity, tone, OPC requirements)","Iterate DTCO with PDK team (FW3) on layout-process compatibility — feedback loop on density rules, restricted patterns, hotspot avoidance"],"engineer_groups":[["N1","Owns process module recipes — litho, etch, CVD, PVD, ALD, CMP, implant, RTA, clean. Drives recipe optimization."],["N2","Builds the integration flow document; defines Q-time and module interfaces; coordinates short-loop wafer experiments."],["N3","Provides DTCO feedback on layout-process compatibility, restricted patterns, density rules."],["N4","Defines equipment specifications for each process module; co-develops vendor recipes."],["N5","Provides metrology requirements (what to measure at each step) — couples to FW2."],["N6","Defines reliability stress structures and reliability physics models to be validated in FW2/FW4."]],"refs":["✅ May & Spanos, Chs. 1-2 (Manufacturing systems, Unit processes, CMOS integration) — uploaded","✅ JEP132A — Process Characterization — uploaded (image-PDF; content accepted)","✅ Balasinski Ch. 3 — DfM for Devices (SRAM cells, stitch cells, variability) — uploaded","🟢 JEP0012A — Foundry Process Qualification, Front End Transistor — uploaded (image-PDF)","🟡 BSIM4 v4.8.2 manual — UC Berkeley (training-derived; not uploaded)"],"output_ip_nos":[47,48,49,50,51,52,53,54,55,56,57,60,61,62,63,64,104,115]},{"id":"FW2","code":"METRO","label":"Metrology & Characterization","short":"Metro — Measurement","subtitle":"Tool qualification · MSA/GR&R · inline monitoring · model correlations","icon":"📏","color":"#44494D","light":"#F2F2F2","duration":"12–18 months (parallel with FW1)","description":"Build the measurement infrastructure. Without trustworthy measurement, no SPICE model can be calibrated, no SPC chart has meaning, and no yield root-cause can be confirmed. This phase establishes: which physical and electrical quantities to measure (CD, overlay, film thickness, defects, WAT parameters), with which tools and recipes, with what accuracy and reproducibility (MSA/Gauge R&R), and how those measurements correlate to downstream yield. Output IP-knowhow underwrites both PDK calibration (FW3) and yield learning (FW4-FW5).","entry_criteria":"FW1 process modules identified; metrology tool budget approved; measurement bay environmental specs defined; access to certified reference standards.","exit_criteria":"All critical measurement recipes defined and validated; GR&R < 10% of process tolerance for all critical parameters; inline-to-yield correlation models established; calibrated reference standards traceable to NIST/equivalent; data pipeline from tools to SPC/YMS operational.","key_activities":["Define the measurement plan: which parameters at which process steps, which tool type, recipe structure, sampling frequency","Execute Gauge R&R (per AIAG MSA methodology): 10 samples × 3 operators × 3 replicates; target GR&R < 10% of tolerance per parameter","Calibrate measurement tools using NIST-traceable reference standards (CD-SEM with CD-AFM cross-check, ellipsometry/XRF with multilayer standards)","Build inline monitoring strategy: measurement insertion points, sampling plan trade-off (yield protection vs cycle time impact)","Develop tool-to-tool matching protocol: same-type tools measured on common reference wafers; document and compensate inter-tool offsets","Build process-to-yield correlation models: which inline parameter movements predict final electrical yield","Initiate SPC: collect baseline data, set control limits, configure MES→SPC pipeline (latency target < 5 min)","Develop virtual metrology models from upstream sensor data for high-throughput / low-coverage parameters","Provide calibrated WAT/PCM data to PDK team (FW3) for SPICE parameter extraction"],"engineer_groups":[["N5","Owns all inline and offline metrology — CD-SEM, overlay, film thickness, defect inspection, electrical test. Runs MSA/GR&R."],["N1","Defines what to measure (process-side input); receives feedback for recipe tuning."],["N2","Defines integration-level measurement needs (Q-time monitoring, cross-module compatibility checks)."],["N3","Receives calibrated WAT/PCM data for SPICE model extraction (FW3)."],["N6","Defines measurement system reliability requirements; uses metrology data for reliability test setup."],["N7","Owns the data pipeline from tools to YMS/SPC; deploys virtual metrology models."]],"refs":["✅ May & Spanos, Ch. 3 (Process Monitoring) and Ch. 6 (SPC) — uploaded","✅ JEP119A — Procedure for SWEAT (wafer-level EM acceleration) — uploaded (image-PDF)","🟢 JEP132A — Process Characterization — uploaded","🟢 RN_JESD34 — Failure-mechanism-driven reliability qualification — uploaded","🟡 AIAG MSA methodology (training-derived; not uploaded — industry standard)"],"output_ip_nos":[58,59,66,68,83,84,85,86,87,88,89]},{"id":"FW3","code":"PDK","label":"PDK Development","short":"PDK — Design Kit","subtitle":"SPICE models · DRC/LVS/PEX · standard cells · hardened IP · OPC/RET","icon":"📐","color":"#000000","light":"#F2F2F2","duration":"12–18 months (PDK v0.1 → v0.5 → v0.9 → v1.0)","description":"Develop the Process Design Kit — the single most important customer-facing deliverable of a foundry. Calibrate SPICE compact models from FW2 silicon data, generate the corner model set (SS/TT/FF/SF/FS at multiple temperatures), build the DRC/LVS/PEX rule decks, characterize the standard cell library (timing in Liberty .lib, layout in GDSII, schematic in CDL), build the SRAM compiler and hardened IP library (ESD clamps, IO cells, PLLs), and develop computational lithography kits (OPC, RET, SRAF). PDK quality directly determines customer tape-out success and yield ramp.","entry_criteria":"FW1 baseline process available; FW2 measurement infrastructure operational; EDA infrastructure deployed (Cadence/Synopsys/Siemens, license servers, version control); customer roadmap and target device variants identified.","exit_criteria":"PDK v1.0 released with production-grade content: calibrated multi-corner SPICE models (Ids error <±5% across bias points); complete DRC/LVS/PEX decks validated on reference layouts (0 errors); standard cell library characterized in Liberty across all PVT corners; SRAM compiler operational; ESD/IO/clamp IPs verified; OPC/RET kits validated on test mask data.","key_activities":["Calibrate BSIM4 SPICE parameters from silicon WAT data — Vth0, k1, VSAT, mobility, capacitance, leakage; target Ids fit error < ±5% across all bias regions","Generate corner model set (SS/TT/FF/SF/FS at −40°C / 27°C / 125°C) using process corner definitions established in FW1+FW4","Build DRC rule deck — Categories I-VII (critical dimensions, spacing, overlap, density, layer-specific, power/ground, dummy fill)","Build LVS rule deck — circuit topology verification; validate on reference test chip (target 0 mismatches)","Build PEX rule deck — parasitic R/L/C extraction with 2D/3D models, target accuracy < ±10% for critical signal nets","Define ESD, latch-up, antenna, electromigration, IR-drop, and thermal-aware rules — encoded as verification decks","Characterize standard cell library: timing, power, noise across all PVT corners → Liberty .lib + LVF tables for statistical timing","Develop SRAM compiler: parameterized memory generation with characterized output (depth, width, performance variants HD/HC/HS)","Build hardened IP: ESD clamps, IO libraries (1.8V/2.5V/3.3V), PLL/DLL, analog primitives (bandgap, LDO, temperature sensor)","Develop OPC/RET kit: model-based optical proximity correction, SRAF recipes, phase-shift mask design rules","Mask data preparation interface: define data format (GDSII/OASIS), fracturing algorithms, MRC decks","Release PDK versions per industry cadence: v0.1 (early access) → v0.5 → v0.9 (significant tape-outs) → v1.0 (production)"],"engineer_groups":[["N3","Owns the entire PDK development lifecycle: SPICE calibration, rule deck authoring, library characterization, customer interface."],["N1","Provides process recipes and silicon — FW3 cannot run without FW1 outputs."],["N2","Defines process corners from integration silicon data; provides device target specs."],["N5","Provides calibrated WAT/PCM data — backbone of SPICE calibration."],["N6","Provides reliability rules (EM, TDDB lifetime, BTI, HCI) encoded into DRC rule deck."]],"refs":["✅ Balasinski Ch. 3 — DfM for Devices; Ch. 5 — DfM Metrics (Mask Ratio, hot spot analysis) — uploaded","✅ JEP122H — Failure Mechanisms and Models (TDDB/BTI/HCI/EM activation energies and model forms) — uploaded","🟢 JESD125 — Design for Testability Guidelines — uploaded (image-PDF)","🟡 BSIM4 v4.8.2 manual (training-derived; not uploaded — UC Berkeley)","🟡 SEMI P10 — PDK Documentation Specification (training-derived; not uploaded)","🟡 SkyWater 130nm PDK (training-derived; not uploaded — open-source reference)"],"output_ip_nos":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,105,106,107,108,109,110,111,112,113,114,116,117,118,119,120]},{"id":"FW4","code":"PILOT","label":"Pilot Line","short":"Pilot — Test Vehicle","subtitle":"Test vehicle · MPW · R&D vs engineering lots · yield learning · reliability qual init","icon":"🧪","color":"#EE0033","light":"#FFF5F7","duration":"9–18 months (yield ramp from initial process to ≥60% functional yield)","description":"Run pilot-line wafers to validate the integrated process and accelerate the yield learning curve. Distinguishes three lot types: R&D lots (recipe experiments, no yield expectation), engineering lots (process validation, partial yield expectation), and qualification lots (locked recipe, full yield expectation, used for reliability qual). Executes Multi-Project Wafer (MPW) runs for early customer test chips. Builds the defect playbook through systematic root-cause investigation. Closes DTCO loops: process recipes refined from silicon, SPICE models recalibrated from silicon, design rules updated based on observed hotspots. Initiates reliability qualification test lots from pilot silicon. Per May & Spanos Sec. 5.7: this is the 'rapid learning' period — its length determines time-to-market.","entry_criteria":"FW1 process recipes loaded on tools (recipes locked OR clearly identified as experimental); FW2 metrology infrastructure operational; FW3 PDK v0.5 (or later) available for layout; test vehicle design complete with DOE structures; reliability test infrastructure operational.","exit_criteria":"Functional yield ≥ 60% on test vehicle wafers across ≥3 consecutive full-flow lots; process recipes locked (no further experiments); SPICE models recalibrated from pilot silicon and PDK updated; defect playbook with ≥10 top defect modes classified; reliability qual lots loaded (HTOL/HAST/TC stress chambers running with verified setup); FMEA complete for all critical modules.","key_activities":["Distinguish lot types and apply correct policies: R&D lot (any recipe, expedite, no SPC, no yield commit), engineering lot (recipe within window, full inline monitoring, partial yield commit), qualification lot (locked recipe, full SPC, full yield commit, output usable for reliability qual)","Execute test vehicle full-flow runs: minimum 5 lots × 25 wafers from substrate to final passivation","Run Multi-Project Wafer (MPW) shuttles for early customer access — Pilot phase typically supports first MPW alongside test vehicle","Collect PCM/WAT electrical data on all device structures: NMOS/PMOS Vth, Ion, Ioff, Idsat, Rs, Rpoly, Rcont, BV, Cox, SRAM Vccmin","Drive yield learning via DOE / split-lot experiments — identify top-3 yield limiters per module per lot","Build defect playbook: classify top-10 observed defects by root cause (contamination / process / equipment), morphology, spatial signature","Execute DTCO loop to FW3: feed calibrated SPICE data, design-rule violations seen on silicon, hotspots requiring layout-process co-fix","Execute DTCO loop to FW1: feed process recipe adjustments needed based on integration-level effects","Process FMEA per JEDEC131A methodology for all critical modules — identify failure modes, severity / occurrence / detection (RPN), drive corrective actions for high-RPN items","Initiate reliability qualification test lots: HTOL chamber loaded with biased units at junction-temperature stress; HAST chamber loaded; TC cycling started. Stress conditions per JEDEC standards (specific conditions: training-derived, see verification notes)","Build statistical confidence: per JEP122H Sec 5.19 — use lognormal or Weibull statistics for time-to-fail data with sample size justified by confidence interval"],"engineer_groups":[["N1","Operates process modules at pilot line; drives recipe tuning from yield feedback."],["N2","Owns full-flow integration; runs split-lot DOE for yield learning."],["N3","Closes DTCO loop — recalibrates SPICE from silicon, updates DRC/LVS rules from hotspot analysis."],["N4","Tunes FDC, tool-to-tool matching from pilot data; resolves equipment-caused yield issues."],["N5","Provides high-frequency metrology during ramp; commissions VM models with pilot data."],["N6","Owns FMEA, reliability qualification lot initiation, FA flow on yield-fail units."],["N7","Commissions APC R2R, YMS, SPC with pilot data."]],"refs":["✅ May & Spanos Sec. 5.7 — Process Introduction and Time-to-Yield (the canonical yield learning curve reference) — uploaded","✅ JEDEC131A — Potential FMEA Publication — uploaded (image-PDF)","✅ JEP0013B — Foundry Process Qualification: Technology Qualification Vehicle Testing — uploaded (image-PDF)","✅ \"Influence of an R&D lot on productivity in semiconductor manufacturing\" — uploaded paper","✅ JEP122H — Failure Mechanisms (used to set qual stress test framework) — uploaded","🟢 RN_JESD34 — Failure-Mechanism-Driven Reliability Qualification — uploaded","🟡 JESD22-A108F (HTOL conditions), JESD22-A110E (HAST), JESD22-A104E (TC) — training-derived, NOT uploaded"],"output_ip_nos":[65,67,69,70,71,73,76,77,78,79,80,90,91,92,93,94,95,96,97,98,99]},{"id":"FW5","code":"HVM","label":"High-Volume Manufacturing","short":"HVM — Production","subtitle":"Locked recipes · 80%+ yield · SPC/APC/FDC at scale · customer ramp · ongoing reliability","icon":"🏭","color":"#EE0033","light":"#FFF5F7","duration":"Ongoing (continuous improvement; lifetime of technology node)","description":"Operate the qualified process at production scale. Drive yield from pilot-exit baseline (~60%) to commercially viable level (≥80% per Kamaly 2025; varies by node maturity). All recipes locked under formal Process Change Notification (PCN) procedure — no experiments on production lots. Run continuous SPC with OCAP (Out of Control Action Plan), Run-to-Run APC for litho/etch/CMP, FDC with multivariate models, Q-time controls, and predictive maintenance. Support multiple concurrent customer products with Product-Engineering IP (yield learning per customer layout). Sustain reliability via quarterly HTOL sampling from production lots. Capacity planning balances customer demand against tool capability.","entry_criteria":"FW4 exit met (≥60% yield); all production module recipes locked; reliability qual lots passed (HTOL 1000hr / HAST 96hr / TC 1000-cycle per JEDEC); customer PQE acceptance obtained; QMS operational (ISO 9001:2015 minimum, IATF 16949 if automotive).","exit_criteria":"(Technology end-of-life criteria) Customer demand falls below sustaining capacity; or next-node technology in HVM with adequate capacity to absorb demand transfer. Process knowledge archived for legacy support.","key_activities":["Lock all production recipes under formal PCN procedure: evaluate impact → approve change → qualification run → performance verification → customer notification","Drive yield from baseline to ≥80% across multiple consecutive production lots — focus split-lot analysis on customer layout-specific yield limiters","Operate SPC for all critical inline parameters with OCAP — automated lot hold on excursion, defined recovery actions per parameter","Operate Run-to-Run APC for litho CD, etch depth, CMP removal rate — feedback (previous lot) + feedforward (incoming material) — using May & Spanos Ch.9 EWMA/predictor-corrector methodology","Operate FDC with multivariate SPC / PCA — false alarm rate < 5%, fault detection > 95% for major faults","Q-time controls enforced by MES — hold/expedite/rework decision tree per pair-step constraints","Predictive maintenance: use FDC trend data to predict PM needs — minimize unplanned downtime; target SEMI E10 availability ≥ 85% on critical tools","Customer product-specific yield learning (PROD domain IPs): build per-customer ramp playbook, weak-pattern library, layout-dependent yield-loss patterns","Sustain reliability monitoring: quarterly HTOL sampling from production lots; trend FIT rate; report DPPM and Cpk to customer PQE","Capacity planning: model UPW/gas/chemical demand at full committed capacity; identify systems needing expansion; plan next-tool procurement 18 months ahead of need","Cost optimization: OEE improvement, consumable reduction, yield optimization, alternative supplier qualification, energy efficiency programs"],"engineer_groups":[["N1","Owns locked process recipes; drives yield optimization within process window."],["N2","Owns locked integration flow; coordinates customer product yield ramp."],["N4","Owns equipment availability target ≥ 85%; deploys predictive maintenance."],["N5","Operates production metrology with optimized sampling; deploys VM in closed-loop APC."],["N6","Owns ongoing reliability monitoring, customer PQE interface, FIT rate trending."],["N7","Operates MES/SPC/APC/FDC at scale; owns 99.9% IT system availability; deploys MLOps for model retraining."],["N8","Operates utilities at HVM capacity (99.9% availability); manages sustainability program."]],"refs":["✅ May & Spanos Ch. 6 (SPC) and Ch. 9 (APC) — uploaded","✅ JEP0013A — Foundry Process Qualification, Product Level — uploaded (image-PDF)","✅ JESD49B — Procurement Standard for Known Good Die — uploaded (image-PDF)","🟡 ISO 9001:2015 / IATF 16949 (training-derived; standards not uploaded)","🟡 SEMI E10-1117 Equipment RAM (training-derived)","🟡 JEDEC JESD85 FIT Rate Calculation (training-derived; not uploaded)"],"output_ip_nos":[72,74,75,81,82,100,101,102,103,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142]}];
var DTCO_LOOPS=[{"id":"DTCO_A","from":"FW3","to":"FW1","label":"DTCO-A: Design ↔ Process Co-Optimization","description":"PDK team feeds layout-process compatibility issues back to TD: density rules, restricted patterns, hotspots. TD team updates process or recommends layout rule. Loop runs continuously from PDK v0.1 onward.","trigger":"PDK rule violations on layout, lithography hotspots, manufacturability concerns","cycle_time":"Weeks to months"},{"id":"DTCO_B","from":"FW4","to":"FW3","label":"DTCO-B: Silicon ↔ Model Recalibration","description":"Pilot line silicon data feeds back to PDK team — SPICE parameters recalibrated, corner models updated, standard cell timing re-extracted from silicon-measured devices. Loop runs from first test-vehicle wafer onward.","trigger":"WAT mismatch with PDK prediction; corner model deviation; standard cell timing variance","cycle_time":"Days to weeks per refinement cycle"},{"id":"DTCO_C","from":"FW4","to":"FW1","label":"DTCO-C: Yield ↔ Process Recipe","description":"Pilot-line yield detractors identified via split-lot DOE drive recipe adjustments in TD/FW1. Major iteration if integration-level effects (LDE, stress, pattern density) require process module redesign.","trigger":"Top yield detractors trace to process module variation; integration-level effects identified","cycle_time":"Months per major iteration"},{"id":"DTCO_D","from":"FW2","to":"FW1","label":"DTCO-D: Measurement ↔ Process Tuning","description":"Metrology data reveals process drift not detected at recipe level. Inline measurements feed SPC and trigger recipe tune within process window.","trigger":"SPC alarms, drift trends, parameter excursions","cycle_time":"Continuous (hourly to daily)"}];
var EXTERNAL_IP_STREAMS=[{"id":"EXT_DESIGN","code":"DESIGN","label":"Design IP","subtitle":"Third-party hard / soft IP cores supplied to customers via PDK","enters_at":["FW3","FW4"],"description":"Design IP is sourced from external IP providers (ARM, Synopsys, Cadence, etc.) and integrated into the foundry PDK ecosystem. Examples: ARM standard cell libraries, Synopsys DesignWare, third-party SerDes, USB/PCIe controllers, ADCs/DACs. These IPs ship as RTL, GDSII, Liberty .lib + characterization data. Foundry's role: qualify the third-party IP on its process, integrate into PDK release.","ip_examples":["PCIe (no. 34)","USB (35)","MIPI (36)","Ethernet (37)","DDR/LPDDR (46)","High-speed SerDes (40)","RF/mmwave (41)"],"engineer_groups_involved":["N3 (PDK integration)","N6 (reliability qualification)"],"note":"Foundry does NOT develop these from scratch — they are licensed from third parties."},{"id":"EXT_PROD","code":"PROD","label":"Product Engineering IP","subtitle":"Customer-specific yield learning and ramp support","enters_at":["FW4","FW5"],"description":"Each customer product introduces design-process interaction effects unique to its layout. Product Engineering IP — owned and developed per customer — captures product-specific yield limiters, weak pattern libraries, design-process feedback loops, and customer ramp playbooks. This IP cannot be built in advance; it accumulates with each product tape-out.","ip_examples":["Product-specific yield learning (121)","Design-process interaction (122)","Customer ramp playbook (123)","Electrical test (124)"],"engineer_groups_involved":["N2 (PI – design-process interaction)","N6 (PQE liaison)"],"note":"Some customer-specific knowledge cannot be transferred between products — each customer ramp builds new PROD IP."},{"id":"EXT_MASK","code":"MASK","label":"Mask Work IP","subtitle":"Mask data preparation, fabrication, inspection — typically external mask shop","enters_at":["FW1","FW3"],"description":"Mask fabrication (e-beam or multi-beam writing on quartz substrate, chrome patterning, pellicle attachment) is typically performed by specialized mask shops (Photronics, DNP, Toppan). Foundry develops mask data preparation interface, OPC/RET kits, fracturing rules, and quality acceptance criteria — but the physical mask fabrication is outsourced. Mask Work IP includes: mask data translation, OPC test-keys, SRAF recipes, fracturing algorithms, mask quality control (CD uniformity, registration, pellicle inspection), mask set definition.","ip_examples":["Mask data translation (109)","OPC test-keys (111)","RET/OPC kits (110)","Fracturing & geometry algorithms (106)","Mask quality control (119)","Pellicle/Inspection Plan (105)","Multi-beam datapath (120)"],"engineer_groups_involved":["N3 (PDK→mask interface)","N1 (mask requirements from process side)"],"note":"Mask shop is external; foundry owns the data preparation and quality acceptance side."}];
var TT_MAPPING={"P0":{"label":"Preparation","touches":[],"compresses":[],"note":"Scoping phase — defines which Fab Work Flow phases the TTP will deliver outputs of (Schedule A). No FW work executed locally; the TT contract structure determines downstream coverage."},"P1a":{"label":"P1-TT (Technology Transfer Stream)","touches":["FW1","FW2","FW3"],"compresses":["FW1","FW2","FW3"],"note":"Acquires the outputs of FW1 (process recipes, integration), FW2 (measurement definitions, MSA), and FW3 (PDK v0.5+, SPICE models, rule decks). This is the biggest compression: 3+ years of internal development absorbed in 12-18 months of structured transfer."},"P1b":{"label":"P1-EM (Equipment & Material Stream)","touches":[],"compresses":[],"note":"Builds the physical capability — equipment and material to RUN FW1-FW5 locally. The IPs flow through FW1-FW5 once tools are SAT-accepted."},"P1c":{"label":"P1-CB (Construction Stream)","touches":[],"compresses":[],"note":"Builds the cleanroom and utilities to HOUSE FW1-FW5 operations. Parallel construction stream; no FW work yet."},"P2":{"label":"Test Vehicle · PDK v0.9 · Yield ≥60%","touches":["FW4"],"compresses":["FW4"],"note":"Local execution of FW4 (Pilot phase) using transferred FW1+FW2+FW3 outputs as starting point. Test vehicle yield ramp from 0 to ≥60%. DTCO loops to FW3 (model refinement) and FW1 (recipe tuning) run locally."},"P3":{"label":"Qualified Product · PDK v1.0 · HVM","touches":["FW5"],"compresses":["FW5"],"note":"Local execution of FW5 (HVM). Yield 60%→80%. Reliability qual completed. Customer ramp playbook (Product Engineering IP) accumulates per customer. PDK v1.0 release."}};
var IP_TO_FW={"1":["FW3"],"2":["FW3"],"3":["FW3"],"4":["FW3"],"5":["FW3"],"6":["FW3"],"7":["FW3"],"8":["FW3"],"9":["FW3"],"10":["FW3"],"11":["FW3"],"12":["FW3"],"13":["FW3"],"14":["FW3"],"15":["FW3"],"16":["FW3"],"17":["FW3"],"18":["FW3"],"19":["FW3"],"20":["FW3"],"21":["FW3"],"22":["FW3"],"23":["FW3"],"24":["FW3"],"25":["FW3"],"26":["FW3"],"27":["FW3"],"28":["FW3"],"29":["FW3"],"30":["FW3"],"31":["FW3"],"32":["FW3"],"33":["FW3"],"34":["FW3"],"35":["FW3"],"36":["FW3"],"37":["FW3"],"38":["FW3"],"39":["FW3"],"40":["FW3"],"41":["FW3"],"42":["FW3"],"43":["FW3"],"44":["FW3"],"45":["FW3"],"46":["FW3"],"47":["FW1"],"48":["FW1"],"49":["FW1"],"50":["FW1"],"51":["FW1"],"52":["FW1"],"53":["FW1"],"54":["FW1"],"55":["FW1"],"56":["FW1"],"57":["FW1"],"58":["FW2"],"59":["FW2"],"60":["FW1"],"61":["FW1"],"62":["FW1"],"63":["FW1"],"64":["FW1"],"65":["FW4"],"66":["FW2"],"67":["FW4"],"68":["FW2"],"69":["FW4"],"70":["FW4"],"71":["FW4"],"72":["FW5"],"73":["FW4"],"74":["FW5"],"75":["FW5"],"76":["FW4"],"77":["FW4"],"78":["FW4"],"79":["FW4"],"80":["FW4"],"81":["FW5"],"82":["FW5"],"83":["FW2"],"84":["FW2"],"85":["FW2"],"86":["FW2"],"87":["FW2"],"88":["FW2"],"89":["FW2"],"90":["FW4"],"91":["FW4"],"92":["FW4"],"93":["FW4"],"94":["FW4"],"95":["FW4"],"96":["FW4"],"97":["FW4"],"98":["FW4"],"99":["FW4"],"100":["FW5"],"101":["FW5"],"102":["FW5"],"103":["FW5"],"104":["FW1"],"105":["FW3"],"106":["FW3"],"107":["FW3"],"108":["FW3"],"109":["FW3"],"110":["FW3"],"111":["FW3"],"112":["FW3"],"113":["FW3"],"114":["FW3"],"115":["FW1"],"116":["FW3"],"117":["FW3"],"118":["FW3"],"119":["FW3"],"120":["FW3"],"121":["FW5"],"122":["FW5"],"123":["FW5"],"124":["FW5"],"125":["FW5"],"126":["FW5"],"127":["FW5"],"128":["FW5"],"129":["FW5"],"130":["FW5"],"131":["FW5"],"132":["FW5"],"133":["FW5"],"134":["FW5"],"135":["FW5"],"136":["FW5"],"137":["FW5"],"138":["FW5"],"139":["FW5"],"140":["FW5"],"141":["FW5"],"142":["FW5"]};

function E(s){if(!s)return '';return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function tCC(t){return t==='T1'?'tchip-t1':t==='T2'?'tchip-t2':t==='T3'?'tchip-t3':'tchip-t4';}
function tBg(t){return {T1:'#EE0033',T2:'#44494D',T3:'#B5B4B4',T4:'#F2F2F2'}[t]||'#B5B4B4';}
function tFg(t){return {T1:'#fff',T2:'#fff',T3:'#000',T4:'#44494D'}[t]||'#44494D';}
function tLbl(t){return {T1:'Must Transfer',T2:'Should Transfer',T3:'Optional',T4:'Develop Locally'}[t]||t;}

/* ── IP by Domain ── */
function buildIPsByDomain(items){
  if(!items||!items.length) return '<p style="color:#44494D;font-size:12px;font-style:italic">No IPs assigned.</p>';
  var byDom={};
  items.forEach(function(ip){(byDom[ip.domain]=byDom[ip.domain]||[]).push(ip);});
  var html='';
  Object.keys(byDom).sort().forEach(function(dom){
    var dIPs=byDom[dom],bg=DOM_BG[dom]||'#44494D',emo=DOM_EMO[dom]||'';
    var bySub={};
    dIPs.forEach(function(ip){var sg=ip.sub||'General';(bySub[sg]=bySub[sg]||[]).push(ip);});
    /* PATCH v5 #3: start collapsed; click header toggles open */
    html+='<div class="dom-sec collapsed"><div class="dom-sec-hdr" style="background:'+bg+'" onclick="this.parentNode.classList.toggle(\'collapsed\')">';
    html+=emo+' <span class="dom-sec-name">'+E(DOM_LABEL[dom]||dom)+'</span>';
    html+='<span class="dom-sec-count">'+dIPs.length+' IPs</span></div>';
    Object.keys(bySub).sort().forEach(function(sg){
      var sgIPs=bySub[sg];
      html+='<div class="sg-block">';
      if(Object.keys(bySub).length>1) html+='<div class="sg-hdr">'+E(sg)+'</div>';
      html+='<div class="ip-card-grid">';
      sgIPs.forEach(function(ip){
        var full=IPS_DATA.find(function(x){return x.no===ip.no;});
        var def=full?(full.definition||'').substring(0,85):'';
        var tier=IP_TIERS[ip.name]||ip.tier||'T3';
        html+='<div class="ipc" data-no="'+ip.no+'" onclick="event.stopPropagation();openIPDetail(+this.dataset.no)">';
        html+='<div class="ipc-name">'+E(ip.name)+'</div>';
        if(def) html+='<div class="ipc-def">'+E(def)+(def.length>=85?'…':'')+'</div>';
        html+='<div class="ipc-foot"><span class="tchip '+tCC(tier)+'">'+tier+'</span></div>';
        html+='</div>';
      });
      html+='</div></div>';
    });
    html+='</div>';
  });
  return html;
}

/* ── Flow ── */
function buildFlow(){
  var d=document.getElementById('flow-diagram');
  var h=phNode('P0')+arr();
  h+='<div style="display:flex;align-items:center;gap:0">';
  h+='<div style="display:flex;flex-direction:column;align-items:flex-end;justify-content:center;height:168px;margin-right:4px">';
  h+='<div style="font-size:8px;font-weight:700;color:#44494D;letter-spacing:.06em;text-transform:uppercase;writing-mode:vertical-rl;transform:rotate(180deg)">PARALLEL</div></div>';
  h+='<div class="par-col"><div class="par-lbl">3 simultaneous streams</div>';
  ['P1a','P1b','P1c'].forEach(function(id){h+=parNode(id);});
  h+='</div></div>';
  h+=arr()+phNode('P2')+arr()+phNode('P3');
  d.innerHTML=h;
}
function phNode(id){
  var f=FLOW_MAP[id];if(!f)return '';
  var dur=id==='P2'?'&#127919; Yield &ge;60%':id==='P3'?'&#127942; Yield &ge;80%':'&#9201; '+f.duration;
  return '<div style="display:flex;flex-direction:column;align-items:center">'
    +'<button class="ph-btn" data-id="'+id+'" onclick="openPhaseModal(this.dataset.id)">'
    +'<div class="pi">'+f.icon+'</div>'
    +'<div class="pid">'+f.label+'</div>'
    +'<div class="plbl">'+E(f.title.split('·')[0].split('–')[0].trim().substring(0,22))+'</div>'
    +'<div class="pdur">'+dur+'</div>'
    +'<div class="phint">Click &rarr;</div>'
    +'</button></div>';
}
function parNode(id){
  var f=FLOW_MAP[id];if(!f)return '';
  return '<button class="par-btn" data-id="'+id+'" onclick="openPhaseModal(this.dataset.id)">'
    +'<div class="ph-row"><span class="pi">'+f.icon+'</span>'
    +'<div><div class="pid">'+f.label+'</div>'
    +'<div class="plbl">'+E((f.subtitle||f.title.split('–')[0].trim()).substring(0,22))+'</div>'
    +'</div></div>'
    +'<div class="pdur">&#9201; '+f.duration+'</div>'
    +'<div class="phint">Click for details &rarr;</div>'
    +'</button>';
}
function arr(){return '<div class="flow-arrow">&rarr;</div>';}

/* ── Phase Popup: 4-col with description + numbered refs (CHANGE 3) ── */


/* PATCH v5 #2 — convert [n] / [n,m] markers in text to citation chips */
function citeMarkup(text){
  if(!text) return '';
  /* Escape HTML first */
  var safe = E(text);
  /* Replace [digits or digits,digits] with markup */
  return safe.replace(/\[(\d+(?:\s*,\s*\d+)*)\]/g, function(_, nums){
    return '<span class="cite">['+nums.replace(/\s+/g,'')+']</span>';
  });
}

/* ── Split criteria text into list items ── */
function criteriaList(text){
  if(!text||!text.trim()) return '';
  /* Split on semicolons or newlines; clean up empty items */
  var raw=text.split(/;|\n/).map(function(s){return s.trim().replace(/\.+$/,'');})
                              .filter(function(s){return s.length>2;});
  if(raw.length<2){
    /* Try splitting on '. ' followed by capital letter */
    raw=text.split(/\.\s+(?=[A-Z])/).map(function(s){return s.trim();})
                                       .filter(function(s){return s.length>2;});
  }
  if(raw.length<2) return '<p>'+E(text)+'</p>';
  return '<ul>'+raw.map(function(item){return '<li>'+E(item)+'</li>';}).join('')+'</ul>';
}

function openPhaseModal(id){
  var f=FLOW_MAP[id];if(!f)return;
  var hdrBg='#F2F2F2';
  document.getElementById('phase-mhdr').style.background=hdrBg;
  document.getElementById('phase-mhdr').style.color='#000000';
  document.getElementById('phase-mtitle').style.color='#000';
  document.getElementById('phase-sup').style.color='rgba(0,0,0,.55)';
  document.getElementById('phase-mdesc').style.color='rgba(0,0,0,.65)';
  document.getElementById('phase-meta').style.color='rgba(0,0,0,.45)';
  document.getElementById('phase-mhdr').querySelector('.mhdr-close').style.color='#44494D';
  document.getElementById('phase-mhdr').querySelector('.mhdr-close').style.background='rgba(0,0,0,.10)';
  document.getElementById('phase-sup').textContent=f.label+(f.parallel?' · Parallel Stream':'');
  document.getElementById('phase-mtitle').textContent=f.title;
  /* CHANGE 3: show description in header */
  document.getElementById('phase-mdesc').innerHTML=citeMarkup(f.description||'');
  document.getElementById('phase-meta').textContent='⏱ '+f.duration;

  /* COL 0 — ACTION LIST */
  var c0='<div class="pp-col-hdr">&#128203; Action List</div><ul>';
  if(f.activities&&f.activities.length)f.activities.forEach(function(a){c0+='<li>'+E(a)+'</li>';});
  c0+='</ul>';

  /* COL 1 — DELIVERABLES & MATERIALS */
  var c1='<div class="pp-col-hdr">&#128230; Deliverables &amp; Materials</div><ul>';
  if(f.deliverables&&f.deliverables.length){
    f.deliverables.forEach(function(d){c1+='<li class="del">'+E(d)+'</li>';});
  } else {
    c1+='<li><em style="color:#44494D">No deliverables specified</em></li>';
  }
  c1+='</ul>';

  /* COL 2 — ENTRY & EXIT CRITERIA */
  var c2='<div class="pp-col-hdr">&#127919; Entry &amp; Exit Criteria</div>';
  if(id==='P2') c2+='<div class="pp-yield">&#127919; Functional Yield &ge; 60%</div>';
  if(id==='P3') c2+='<div class="pp-yield">&#127942; Production Yield &ge; 80%</div>';
  if(f.parallel) c2+='<div style="background:#FFF5F7;border-left:3px solid #EE0033;border-radius:0 5px 5px 0;padding:6px 10px;font-size:10.5px;color:#44494D;margin-bottom:8px">&#9889; Runs in parallel with the other two P1 streams</div>';
  if(f.entry_criteria){
    c2+='<div class="pp-crit pp-entry">';
    c2+='<div class="pp-crit-title" style="color:#44494D">&#128682; Entry Criteria</div>';
    c2+=criteriaList(f.entry_criteria);
    c2+='</div>';
  }
  if(f.exit_criteria){
    c2+='<div class="pp-crit pp-exit">';
    c2+='<div class="pp-crit-title" style="color:#44494D">&#9989; Exit / Acceptance</div>';
    c2+=criteriaList(f.exit_criteria);
    c2+='</div>';
  }

  /* COL 3 — IP KNOW-HOW by domain */
  var phIPMap={};
  Object.values(RELEVANCE).forEach(function(gd){(gd[id]||[]).forEach(function(ip){if(!phIPMap[ip.no])phIPMap[ip.no]=ip;});});
  var allIPs=Object.values(phIPMap).sort(function(a,b){return a.domain.localeCompare(b.domain)||a.name.localeCompare(b.name);});
  var t1=0,t2=0,t3=0;
  allIPs.forEach(function(ip){var t=IP_TIERS[ip.name]||ip.tier;if(t==='T1')t1++;else if(t==='T2')t2++;else t3++;});
  var c3='<div class="pp-col-hdr">&#11042; IP Know-how</div>';
  c3+='<div class="ip-tier-bar">';
  if(t1)c3+='<span class="tchip tchip-t1" style="font-size:9px;padding:2px 8px">Must Transfer: '+t1+'</span>';
  if(t2)c3+='<span class="tchip tchip-t2" style="font-size:9px;padding:2px 8px">Should: '+t2+'</span>';
  if(t3)c3+='<span class="tchip tchip-t3" style="font-size:9px;padding:2px 8px">Optional: '+t3+'</span>';
  c3+='<span style="font-size:8.5px;color:#44494D;font-style:italic">(tiers fixed at P0)</span></div>';
  c3+=buildIPsByDomain(allIPs);

  document.getElementById('ptab-0').innerHTML=c0;
  document.getElementById('ptab-1').innerHTML=c1;
  document.getElementById('ptab-2').innerHTML=c2;
  document.getElementById('ptab-3').innerHTML=c3;

  /* CHANGE 3: numbered references at bottom */
  var refsHtml='';
  if(f.refs&&f.refs.length){
    refsHtml='<div class="pp-refs-bar"><div class="refs-title">References</div><div class="refs-grid">';
    f.refs.forEach(function(r,i){
      refsHtml+='<div class="pp-ref-item"><span class="pp-ref-num">['+(i+1)+']</span><span>'+E(r)+'</span></div>';
    });
    refsHtml+='</div></div>';
  }
  document.getElementById('phase-refs').innerHTML=refsHtml;
  document.getElementById('phase-modal').style.display='flex';
}
function closePhaseModal(){document.getElementById('phase-modal').style.display='none';}

/* ── Toolbar & Matrix ── */
function buildToolbar(){
  var gf=document.getElementById('grp-filter');
  CONFIG.groups.forEach(function(g){var o=document.createElement('option');o.value=g.id;o.textContent=g.id+' — '+g.short;gf.appendChild(o);});
  var pf=document.getElementById('ph-filter');
  CONFIG.phases.forEach(function(p){var o=document.createElement('option');o.value=p.id;o.textContent=p.id+' — '+p.short.substring(0,26);pf.appendChild(o);});
  gf.addEventListener('change',renderMatrix);
  pf.addEventListener('change',renderMatrix);
}

/* CHANGE 4: Phase column colors + group row colors */
function renderMatrix(){
  var gfv=document.getElementById('grp-filter').value;
  var pfv=document.getElementById('ph-filter').value;
  var vG=gfv==='all'?CONFIG.groups:CONFIG.groups.filter(function(g){return g.id===gfv;});
  var vP=pfv==='all'?CONFIG.phases:CONFIG.phases.filter(function(p){return p.id===pfv;});
  /* Phase headers: #EE0033, white bold text, no chip background */
  var html='<thead><tr><th class="corner-th">Engineer Group &times; Phase</th>';
  vP.forEach(function(ph){
    html+='<th class="phase-th">'
      +'<div class="ph-th-inner">'
      +'<div class="ph-id-chip">'+ph.id+'</div>'
      +'<span class="ph-th-short">'+E(ph.short.length>26?ph.short.substring(0,24)+'…':ph.short)+'</span>'
      +'</div></th>';
  });
  html+='</tr></thead><tbody>';
  /* Group rows: #000000, white text, no badge background */
  vG.forEach(function(gr){
    html+='<tr>'
      +'<td class="group-td">'
      +'<div class="grp-badge">'+gr.id+'</div>'
      +'<div class="grp-short">'+E(gr.short)+'</div>'
      +'<div class="grp-name">'+E(gr.name)+'</div>'
      +'</td>';
    /* Data cells: white #FFFFFF, no color tinting */
    vP.forEach(function(ph){
      var items=(RELEVANCE[gr.id]?RELEVANCE[gr.id][ph.id]:[])||[];
      var act=(ACTS[gr.id]&&ACTS[gr.id][ph.id])||{};
      if(!items.length){
        html+='<td class="act-td no-data-td"><div class="no-data-lbl">—</div></td>';
        return;
      }
      var cnt={T1:0,T2:0,T3:0};
      items.forEach(function(ip){var t=IP_TIERS[ip.name]||ip.tier||'T3';if(cnt[t]!==undefined)cnt[t]++;});
      var pills=(cnt.T1?'<span class="pill pill-t1">T1:'+cnt.T1+'</span>':'')
               +(cnt.T2?'<span class="pill pill-t2">T2:'+cnt.T2+'</span>':'')
               +(cnt.T3?'<span class="pill pill-t3">T3:'+cnt.T3+'</span>':'');
      html+='<td class="act-td" data-ph="'+ph.id+'" data-gr="'+gr.id+'" onclick="openCell(this.dataset.ph,this.dataset.gr)">'
        +'<div class="act-title">'+E((act&&act.title)||'—')+'</div>'
        +'<div class="pills">'+pills+'</div>'
        +'</td>';
    });
    html+='</tr>';
  });
  html+='</tbody>';
  document.getElementById('matrix-tbl').innerHTML=html;
}

function openCell(phId,grId){
  var ph=PHASES[phId],gr=GROUPS[grId];
  var act=(ACTS[gr.id]&&ACTS[gr.id][ph.id])||{};
  var items=(RELEVANCE[grId]&&RELEVANCE[grId][phId])||[];
  document.getElementById('cell-sup').textContent=gr.id+' — '+gr.name+' · '+ph.id+': '+ph.short;
  document.getElementById('cell-title').textContent=act.title||'—';
  var srcMap={};
  if(CONFIG.meta&&CONFIG.meta.sources)CONFIG.meta.sources.forEach(function(s){srcMap[s.id]=s.cite;});
  var srcRefs=(act.src||'').split(',').map(function(s){return s.trim();}).filter(Boolean)
    .map(function(sid,i){return '<li><b>['+(i+1)+'] '+E(sid)+'</b> '+E(srcMap[sid]||sid)+'</li>';}).join('');
  var cnt={T1:0,T2:0,T3:0};
  items.forEach(function(ip){var t=IP_TIERS[ip.name]||ip.tier||'T3';if(cnt[t]!==undefined)cnt[t]++;});
  var ipB=(cnt.T1?'<span class="pill pill-t1" style="font-size:10px;padding:2px 8px">Must: '+cnt.T1+'</span>':'')
         +(cnt.T2?'<span class="pill pill-t2" style="font-size:10px;padding:2px 8px">Should: '+cnt.T2+'</span>':'')
         +(cnt.T3?'<span class="pill pill-t3" style="font-size:10px;padding:2px 8px">Optional: '+cnt.T3+'</span>':'');
  var sorted=items.slice().sort(function(a,b){return a.domain.localeCompare(b.domain)||a.name.localeCompare(b.name);});
  var desc='<p>'+E(act.description||'')+'</p>';
  if(act.key_tasks&&act.key_tasks.length)desc+='<ul>'+act.key_tasks.map(function(t){return '<li>'+E(t)+'</li>';}).join('')+'</ul>';
  if(srcRefs)desc+='<div class="src-box"><div class="src-box-title">References</div><ul class="ref-list">'+srcRefs+'</ul></div>';
  var secs=[
    {id:'s1',icon:'&#128203;',label:'Description & Key Tasks',cnt:'',open:true,body:desc},
    {id:'s2',icon:'&#11042;',label:'IP Know-how by Domain',cnt:ipB,open:false,body:buildIPsByDomain(sorted)}
  ];
  document.getElementById('cell-body').innerHTML=secs.map(function(s){
    return '<div class="acc-sec'+(s.open?' open':'')+'" id="'+s.id+'">'
      +'<div class="acc-hdr" data-sec="'+s.id+'" onclick="toggleAcc(this.dataset.sec)">'
      +'<span class="acc-icon">'+s.icon+'</span><span class="acc-label">'+s.label+'</span>'
      +(s.cnt?'<div class="acc-count">'+s.cnt+'</div>':'')
      +'<span class="acc-chev">&#9660;</span></div>'
      +'<div class="acc-body">'+s.body+'</div></div>';
  }).join('');
  document.getElementById('cell-modal').style.display='flex';
}
function closeCell(){document.getElementById('cell-modal').style.display='none';}
function toggleAcc(id){document.getElementById(id).classList.toggle('open');}

/* ── IP Detail ── */
function openIPDetail(no){
  var ip=IPS_DATA.find(function(x){return x.no===no;});if(!ip)return;
  var dom=ip.domain.split(' — ')[0]||ip.domain.split(' ')[0];
  var bg=(DOM_CARD[dom]&&DOM_CARD[dom].hdr)||DOM_BG[dom]||'#44494D';
  var tier=IP_TIERS[ip.name]||'T3';
  document.getElementById('ip-mhdr').style.background=bg;
  document.getElementById('ip-dom').textContent=ip.domain+' · '+ip.sub;
  document.getElementById('ip-name').textContent=ip.name;
  document.getElementById('ip-tier-badge').innerHTML=
    '<span style="background:'+tBg(tier)+';color:'+tFg(tier)+';border-radius:4px;padding:2px 9px;font-size:10px;font-weight:700">'+tier+' — '+tLbl(tier)+'</span>'
    +'<span style="font-size:10px;color:#44494D;margin-left:8px;font-style:italic">(Tier fixed at P0 contract)</span>';
  var fields=[{label:'Definition',val:ip.definition},{label:'Purpose',val:ip.purpose},
    {label:'Components & Characteristics',val:ip.chars},{label:'Deliverable / Transfer Form',val:ip.delivery},
    {label:'Comment & Notes',val:ip.comment}];
  document.getElementById('ip-body').innerHTML=fields.map(function(f){
    return '<div class="ip-field"><div class="ip-field-lbl" style="background:'+bg+'">'+E(f.label)+'</div>'
      +'<div class="ip-field-val'+(f.val?'':' empty')+'">'+E(f.val||'No content available')+'</div></div>';
  }).join('');
  document.getElementById('ip-modal').style.display='flex';
}
function closeIP(){document.getElementById('ip-modal').style.display='none';}

/* ── IP Distribution Map ── */
function buildIPMap(){
  var byDom={};
  IPS_DATA.forEach(function(ip){(byDom[ip.domain]=byDom[ip.domain]||[]).push(ip);});
  /* PATCH v5 #9: sidebar removed */
  var mainHtml='';
  LAYERS.forEach(function(layer){
    mainHtml+='<div class="ipm-layer"><div class="ipm-layer-hdr" style="background:'+layer.bg+'">';
    mainHtml+='<span class="ipm-layer-label">'+E(layer.label)+'</span>';
    mainHtml+='<span class="ipm-layer-sub">'+E(layer.sub)+'</span></div>';
    mainHtml+='<div class="ipm-cards-row">';
    layer.domains.forEach(function(dom){
      var dIPs=byDom[dom]||[];
      var card=DOM_CARD[dom]||{bg:'#F2F2F2',border:'#B5B4B4',hdr:'#44494D'};
      var samples=dIPs.slice(0,4);
      var rest=dIPs.length-4;
      var subs={};
      dIPs.forEach(function(ip){subs[ip.sub]=1;});
      mainHtml+='<div class="ipm-card" style="background:'+card.bg+';border-color:'+card.border+'" data-dom="'+dom+'" onclick="showDomainDetail(this.dataset.dom)">';
      mainHtml+='<div class="ipm-card-hdr" style="color:'+card.hdr+'"><span class="ipm-card-icon">'+DOM_EMO[dom]+'</span>';
      mainHtml+='<div class="ipm-card-info"><div class="ipm-card-name">'+E(DOM_LABEL[dom]||dom)+'</div>';
      mainHtml+='<div class="ipm-card-sub">'+E(DOM_SUB[dom]||'')+'</div></div></div>';
      mainHtml+='<div class="ipm-card-body"><div class="ipm-card-cnt">'+dIPs.length+' IP items &middot; '+Object.keys(subs).length+' sub-groups</div>';
      mainHtml+='<div class="ipm-chip-row">';
      samples.forEach(function(ip){mainHtml+='<span class="ipm-chip" title="'+E(ip.name)+'">'+E(ip.name.substring(0,20)+(ip.name.length>20?'…':''))+'</span>';});
      if(rest>0) mainHtml+='<span class="ipm-chip-more">+'+rest+'</span>';
      mainHtml+='</div></div></div>';
    });
    mainHtml+='</div></div>';
  });
  document.getElementById('ipm-main').innerHTML=mainHtml+'<div id="ipm-detail" class="ipm-detail"></div>';
}

function filterIPMap(dom){
  document.querySelectorAll('.ipm-dom-item').forEach(function(el){el.classList.remove('active');});
  var ai=document.querySelector('.ipm-dom-item[data-dom="'+dom+'"]');
  if(ai) ai.classList.add('active');
  showDomainDetail(dom);
  setTimeout(function(){var d=document.getElementById('ipm-detail');if(d)d.scrollIntoView({behavior:'smooth',block:'nearest'});},100);
}

function showDomainDetail(dom){
  var dIPs=IPS_DATA.filter(function(ip){return ip.domain===dom;});
  var card=DOM_CARD[dom]||{bg:'#F2F2F2',border:'#B5B4B4',hdr:'#44494D'};
  var det=document.getElementById('ipm-detail');if(!det)return;
  /* Header background = domain card hdr color, white text */
  var html='<div class="ipm-detail-hdr" style="background:'+card.hdr+';color:#fff">';
  html+='<div class="ipm-detail-title" style="color:#fff">'+DOM_EMO[dom]+' '+E(DOM_LABEL[dom]||dom);
  html+='<span style="font-size:10px;color:rgba(255,255,255,.7);font-weight:400;margin-left:8px">'+dIPs.length+' IP items</span></div>';
  html+='<button class="ipm-detail-close" style="color:#fff;opacity:.8" onclick="closeIPMapDetail()">&#x2715;</button></div>';
  html+='<div class="ipm-detail-grid">';
  dIPs.forEach(function(ip){
    var tier=IP_TIERS[ip.name]||'T3';
    html+='<div class="ipm-detail-card" data-no="'+ip.no+'" onclick="openIPDetail(+this.dataset.no)">';
    html+='<div class="ipm-detail-name">'+E(ip.name)+'</div>';
    html+='<div class="ipm-detail-def">'+E((ip.definition||'').substring(0,90))+'</div>';
    html+='<span class="ipm-detail-tier" style="background:'+tBg(tier)+';color:'+tFg(tier)+'">'+tier+' — '+tLbl(tier)+'</span>';
    html+='</div>';
  });
  html+='</div>';
  det.innerHTML=html; det.classList.add('open');
  document.querySelectorAll('.ipm-card').forEach(function(c){c.style.outline='none';});
  var ac=document.querySelector('.ipm-card[data-dom="'+dom+'"]');
  if(ac) ac.style.outline='2px solid #EE0033';
}

function closeIPMapDetail(){
  var d=document.getElementById('ipm-detail');
  if(d){d.classList.remove('open');d.innerHTML='';}
  document.querySelectorAll('.ipm-card').forEach(function(c){c.style.outline='none';});
  document.querySelectorAll('.ipm-dom-item').forEach(function(el){el.classList.remove('active');});
}

/* ── Init ── */

/* ═══════════════ FAB WORK FLOW FUNCTIONS ═══════════════ */
var FW_MAP={};FABFLOW.forEach(function(p){FW_MAP[p.id]=p;});
var IPS_BY_NO={};IPS_DATA.forEach(function(ip){IPS_BY_NO[ip.no]=ip;});

function buildFabFlow(){
  /* Render the 5 phase boxes */
  var d=document.getElementById('fw-phases');var h='';
  FABFLOW.forEach(function(p,i){
    h+='<div class="fw-phase" data-id="'+p.id+'" style="border-color:'+p.color+';background:linear-gradient(180deg,'+p.light+' 0%,#fff 35%)" onclick="openFWModal(this.dataset.id)">';
    /* PATCH v5 #5: icon removed */
    h+='<div class="fw-phase-code" style="background:'+p.color+'">'+E(p.code)+'</div>';
    h+='<div class="fw-phase-title">'+E(p.label)+'</div>';
    h+='<div class="fw-phase-sub">'+E(p.subtitle)+'</div>';
    h+='<div class="fw-phase-dur">&#9201; '+E(p.duration)+'</div>';
    h+='<div class="fw-phase-meta">';
    h+='<span class="fw-meta-chip">'+p.output_ip_nos.length+' IPs</span>';
    h+='<span class="fw-meta-chip">'+p.engineer_groups.length+' groups</span>';
    h+='<span class="fw-meta-chip">'+p.key_activities.length+' actions</span>';
    h+='</div></div>';
    if(i<FABFLOW.length-1) h+='<div class="fw-arrow">&rarr;</div>';
  });
  d.innerHTML=h;

  /* External IP streams */
  var ed=document.getElementById('fw-ext-row');var eh='';
  EXTERNAL_IP_STREAMS.forEach(function(e){
    eh+='<div class="fw-ext-stream" data-id="'+e.id+'" onclick="openExtModal(this.dataset.id)">';
    eh+='<div class="fw-ext-lbl">External IP &middot; '+E(e.code)+'</div>';
    eh+='<div class="fw-ext-name">'+E(e.label)+'</div>';
    eh+='<div class="fw-ext-sub">'+E(e.subtitle)+'</div>';
    eh+='<div class="fw-ext-enter">enters at: '+e.enters_at.join(', ')+'</div>';
    eh+='</div>';
  });
  ed.innerHTML=eh;

  /* DTCO grid */
  var dd=document.getElementById('fw-dtco-grid');var dh='';
  DTCO_LOOPS.forEach(function(loop){
    var fromP=FW_MAP[loop.from],toP=FW_MAP[loop.to];
    dh+='<div class="fw-dtco-card" data-id="'+loop.id+'" onclick="openDTCOModal(this.dataset.id)">';
    dh+='<div class="fw-dtco-card-id">'+E(loop.id.replace('_',' '))+'</div>';
    dh+='<div class="fw-dtco-card-lbl">'+E(loop.label)+'</div>';
    dh+='<div class="fw-dtco-card-route">'+E(fromP?fromP.short:loop.from)+'<span class="arrow">&rarr;</span>'+E(toP?toP.short:loop.to)+'</div>';
    dh+='</div>';
  });
  dd.innerHTML=dh;

}

function openFWModal(id){
  var p=FW_MAP[id];if(!p)return;

  document.getElementById('fw-pp-hdr').style.background='linear-gradient(135deg,'+p.color+' 0%,#000000 100%)';
  document.getElementById('fw-pp-sup').textContent='Fab Work Flow &middot; '+p.code;
  document.getElementById('fw-pp-sup').innerHTML='Fab Work Flow &middot; '+E(p.code);
  document.getElementById('fw-pp-title').textContent=p.label;
  document.getElementById('fw-pp-subtitle').textContent=p.subtitle;
  document.getElementById('fw-pp-desc').textContent=p.description;
  document.getElementById('fw-pp-meta').textContent='\u23F1 '+p.duration;

  /* COL 1: Activities */
  var a='<div class="fw-pp-col-hdr">&#128203; Key Activities</div><ul>';
  p.key_activities.forEach(function(k){a+='<li>'+E(k)+'</li>';});
  a+='</ul>';
  document.getElementById('fw-col-acts').innerHTML=a;

  /* COL 2: Entry/Exit Criteria */
  var c='<div class="fw-pp-col-hdr">&#127919; Entry &amp; Exit Criteria</div>';
  c+='<div class="fw-pp-crit" style="border-left-color:#44494D">';
  c+='<div class="fw-pp-crit-title" style="color:#44494D">&#128682; Entry</div>';
  c+=criteriaList(p.entry_criteria)+'</div>';
  c+='<div class="fw-pp-crit" style="border-left-color:#44494D">';
  c+='<div class="fw-pp-crit-title" style="color:#44494D">&#9989; Exit</div>';
  c+=criteriaList(p.exit_criteria)+'</div>';

  /* References inline */
  c+='<div class="fw-pp-refs"><div class="fw-pp-refs-title">&#128218; References</div><ol>';
  p.refs.forEach(function(r){c+='<li>'+E(r)+'</li>';});
  c+='</ol></div>';
  document.getElementById('fw-col-criteria').innerHTML=c;

  /* COL 3: Output IPs grouped by domain */
  var byDomain={};
  p.output_ip_nos.forEach(function(no){
    var ip=IPS_BY_NO[no];if(!ip)return;
    if(!byDomain[ip.domain])byDomain[ip.domain]=[];
    byDomain[ip.domain].push(ip);
  });
  var ips='<div class="fw-pp-col-hdr">&#128230; Output IP-Know-how ('+p.output_ip_nos.length+')</div>';
  Object.keys(byDomain).sort().forEach(function(dom){
    var card=DOM_CARD[dom]||{hdr:'#44494D'};
    ips+='<div class="fw-pp-ip-grp">';
    ips+='<div class="fw-pp-ip-grp-hdr" style="background:'+card.hdr+'">'+E(dom)+' &middot; '+byDomain[dom].length+'</div>';
    ips+='<div>';
    byDomain[dom].sort(function(a,b){return a.no-b.no;}).forEach(function(ip){
      ips+='<span class="fw-pp-ip-chip" data-no="'+ip.no+'" onclick="openIPDetail(+this.dataset.no)"><span class="no">#'+ip.no+'</span>'+E(ip.name.substring(0,28))+'</span>';
    });
    ips+='</div></div>';
  });
  document.getElementById('fw-col-ips').innerHTML=ips;

  /* COL 4: Engineer groups + their roles */
  var eg='<div class="fw-pp-col-hdr">&#128104;&#127995;&#8205;&#128300; Engineer Groups ('+p.engineer_groups.length+')</div>';
  p.engineer_groups.forEach(function(grp){
    var grpColor=GRP_BG[grp[0]]||'#44494D';
    eg+='<div class="fw-pp-eg-card" style="border-left-color:'+grpColor+'">';
    eg+='<div><span class="fw-pp-eg-id" style="color:'+grpColor+'">'+E(grp[0])+'</span>';
    eg+='<span class="fw-pp-eg-role">'+E(grp[1])+'</span></div>';
    eg+='</div>';
  });
  document.getElementById('fw-col-engineers').innerHTML=eg;

  document.getElementById('fw-modal').style.display='flex';
}

function closeFW(){document.getElementById('fw-modal').style.display='none';}

function openDTCOModal(id){
  var loop=null;DTCO_LOOPS.forEach(function(l){if(l.id===id)loop=l;});if(!loop)return;
  var fromP=FW_MAP[loop.from],toP=FW_MAP[loop.to];
  document.getElementById('dtco-sup').textContent='DTCO Loop &middot; '+(fromP?fromP.code:loop.from)+' \u2192 '+(toP?toP.code:loop.to);
  document.getElementById('dtco-title').textContent=loop.label;
  var body='<p style="margin-bottom:10px">'+E(loop.description)+'</p>';
  body+='<div style="display:grid;grid-template-columns:80px 1fr;gap:8px;font-size:10.5px">';
  body+='<div style="font-weight:700;color:#EE0033">Trigger:</div><div>'+E(loop.trigger)+'</div>';
  body+='<div style="font-weight:700;color:#EE0033">Cycle:</div><div>'+E(loop.cycle_time)+'</div>';
  body+='<div style="font-weight:700;color:#EE0033">From:</div><div>'+E(fromP?fromP.label:loop.from)+' ('+loop.from+')</div>';
  body+='<div style="font-weight:700;color:#EE0033">To:</div><div>'+E(toP?toP.label:loop.to)+' ('+loop.to+')</div>';
  body+='</div>';
  document.getElementById('dtco-body').innerHTML=body;
  document.getElementById('dtco-modal').style.display='flex';
}

function openExtModal(id){
  var s=null;EXTERNAL_IP_STREAMS.forEach(function(x){if(x.id===id)s=x;});if(!s)return;
  document.getElementById('ext-sup').textContent='External IP Stream &middot; '+s.code;
  document.getElementById('ext-title').textContent=s.label;
  var b='<p style="margin-bottom:10px">'+E(s.description)+'</p>';
  b+='<div style="background:#FFFFFF;border-radius:6px;padding:10px;margin-bottom:10px">';
  b+='<div style="font-weight:700;color:#44494D;margin-bottom:4px;font-size:10px;text-transform:uppercase;letter-spacing:.04em">Enters Fab Work Flow at:</div>';
  s.enters_at.forEach(function(fwId){
    var fw=FW_MAP[fwId];
    b+='<span class="fw-tt-fw-chip" style="background:'+(fw?fw.color:'#44494D')+';margin-right:4px">'+E(fwId)+' '+E(fw?fw.code:'')+'</span>';
  });
  b+='</div>';
  b+='<div style="background:#FFFFFF;border-radius:6px;padding:10px;margin-bottom:10px">';
  b+='<div style="font-weight:700;color:#44494D;margin-bottom:4px;font-size:10px;text-transform:uppercase;letter-spacing:.04em">Example IPs in this stream:</div>';
  /* PATCH v5 #7: clickable IP cards */
  b+='<div class="ext-ip-grid">';
  s.ip_examples.forEach(function(ex){
    /* Parse "Name (no. NN)" — extract the number */
    var m=ex.match(/\((?:no\.\s*)?(\d+)\)/);
    var no=m?parseInt(m[1]):null;
    var label=ex.replace(/\s*\((?:no\.\s*)?\d+\)/,'').trim();
    var ip=no?IPS_BY_NO[no]:null;
    if(ip){
      b+='<div class="ext-ip-card" data-no="'+no+'" onclick="document.getElementById(\'ext-modal\').style.display=\'none\';openIPDetail(+this.dataset.no)">';
      b+='<span class="no">#'+no+'</span>';
      b+='<div><div class="lbl">'+E(ip.name)+'</div>';
      b+='<div class="dom">'+E(ip.domain)+(ip.sub?' &middot; '+E(ip.sub):'')+'</div></div>';
      b+='</div>';
    } else {
      b+='<div class="ext-ip-card" style="cursor:default"><span class="no">—</span><div class="lbl">'+E(label)+'</div></div>';
    }
  });
  b+='</div>';
  b+='</div>';
  b+='<div style="background:#FFFFFF;border-radius:6px;padding:10px;margin-bottom:10px">';
  b+='<div style="font-weight:700;color:#44494D;margin-bottom:4px;font-size:10px;text-transform:uppercase;letter-spacing:.04em">Engineer groups involved:</div>';
  b+='<div style="font-size:10.5px">'+E(s.engineer_groups_involved.join(' &middot; '))+'</div>';
  b+='</div>';
  b+='<div style="font-size:10px;color:#44494D;font-style:italic;border-top:1px dashed #B5B4B4;padding-top:8px">&#9432; '+E(s.note)+'</div>';
  document.getElementById('ext-body').innerHTML=b;
  document.getElementById('ext-modal').style.display='flex';
}


/* Cross-link: add "Produced in FW phase" callout inside IP detail modal */
(function(){
  var origOpenIPDetail=openIPDetail;
  openIPDetail=function(no){
    origOpenIPDetail(no);
    /* Inject FW link after #ip-tier-row */
    var fwIds=IP_TO_FW[String(no)]||IP_TO_FW[no]||[];
    var tierRow=document.querySelector('#ip-modal .ip-tier-row');
    if(!tierRow)return;
    /* Remove previous fw-link if any */
    var prev=document.getElementById('ip-fw-link-row');if(prev)prev.remove();
    if(fwIds.length===0)return;
    var div=document.createElement('div');
    div.id='ip-fw-link-row';
    div.className='ip-fw-link';
    var html='<span class="ip-fw-link-lbl">&#127981; Produced in Fab Work Flow:</span>';
    fwIds.forEach(function(fwId){
      var fw=FW_MAP[fwId];
      if(!fw)return;
      html+='<span class="ip-fw-link-chip" style="background:'+fw.color+'" data-id="'+fwId+'" onclick="closeIP();openFWModal(this.dataset.id)">'+E(fwId)+' &middot; '+E(fw.short)+'</span>';
    });
    div.innerHTML=html;
    tierRow.parentNode.insertBefore(div,tierRow.nextSibling);
  };
})();

document.addEventListener('DOMContentLoaded',function(){
  buildFlow(); buildToolbar(); renderMatrix(); buildIPMap(); buildFabFlow();
/* PATCH v5 #10 — outline navigation: smooth-scroll + active highlight */
(function(){
  var links=document.querySelectorAll('.toc a[data-target]');
  var sections=Array.from(links).map(function(a){
    return {id:a.dataset.target,link:a,el:document.getElementById(a.dataset.target)};
  }).filter(function(s){return s.el;});
  links.forEach(function(a){
    a.addEventListener('click',function(e){
      e.preventDefault();
      var t=document.getElementById(a.dataset.target);
      if(t){
        var off=t.getBoundingClientRect().top+window.pageYOffset-10;
        window.scrollTo({top:off,behavior:'smooth'});
        if(window.innerWidth<=1200) document.querySelector('.toc').classList.remove('open');
      }
    });
  });
  function update(){
    var y=window.pageYOffset+80;
    var current=sections[0];
    sections.forEach(function(s){
      if(s.el.offsetTop<=y) current=s;
    });
    links.forEach(function(a){a.classList.remove('active');});
    if(current) current.link.classList.add('active');
  }
  window.addEventListener('scroll',update);
  setTimeout(update,200);
})();

  ['phase-modal','cell-modal','ip-modal','fw-modal','dtco-modal','ext-modal'].forEach(function(id){
    document.getElementById(id).addEventListener('click',function(e){
      if(e.target.id===id)document.getElementById(id).style.display='none';
    });
  });
});
