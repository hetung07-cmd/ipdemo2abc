The post-failure investigation discipline that determines the physical and electrical root cause of an observed failure. FA is the **a posteriori** counterpart to FMEA: where FMEA anticipates failures, FA dissects them once they occur, then feeds the findings back to update the FMEA and the process <span class="cite">[1,2]</span>.

## FA vs. FMEA — the distinction

The two methodologies are routinely confused but serve opposite roles:

| Discipline | Timing | Input | Output |
|---|---|---|---|
| FMEA (Article 5) | Before failure | Block diagram or flow diagram | RPN-ranked corrective actions |
| FA (this article) | After failure | Failed die / wafer / module | Physical root cause + corrective action |

An effective fab runs both in a closed loop: FMEA tells you what to prevent; FA tells you what slipped through and how to update the FMEA so it slips through less often next time.
![](fa-fig1.svg){width=700}
> **Figure 6.** The six-stage Failure Analysis flow. Stages 1 and 2 use electrical and optical methods to find the failure non-destructively; stages 3 and 4 destructively expose and image the defect; stages 5 and 6 close the loop with the FMEA, the process, and the customer. Tool selection at each stage depends on technology node, package type, and failure signature <span class="cite">[1,2]</span>. 

## FA technique selection

The choice of FA techniques depends on what the electrical test signature suggests:

- **Hard short / open** — start with curve trace and EMMI (defects emit IR photons under bias).
- **Resistive failure** — use OBIRCH or thermal laser stimulation; resistive sites locally heat under laser.
- **Soft failure / parametric drift** — start with Vth or Idsat measurement on neighbour devices, then TEM on the gate stack if hot-carrier or BTI-like signature.
- **Latent / package-level** — X-ray for wirebond/solder defects, C-SAM for delamination, then decap.

Once the defect is exposed, mechanism identification is done by mapping the observed morphology to the failure-mechanism catalogue in JEP122H — Tables 6-1 and 6-2 list the established mechanisms (HCI, TDDB, NBTI, EM, SM, ESD-induced damage, latch-up, etc.) and the physical signatures expected for each <span class="cite">[3]</span>.

## FA report and the corrective-action loop

The FA output is a written report containing: failure signature, FA flow used, physical findings (with SEM/TEM images), root-cause hypothesis, supporting evidence, and recommended corrective actions. For customer-facing failures the report is wrapped in an **8D format** (Eight Disciplines problem-solving) per ISO 9001 and IATF 16949 conventions, providing containment, corrective action, and prevention. The FA report becomes the input that updates the relevant FMEA <span class="cite">[2]</span>.

> 💡 **Why FA was separated from FMEA in this wiki:** JEP131A defines FMEA strictly as a forward-looking risk analysis — there is no such thing as an "FA-FMEA" type in the standard. FA is a downstream investigative discipline that _updates_ the FMEA, but is methodologically distinct. Treating them as separate articles makes the workflow clearer for engineers learning both <span class="cite">[2,3]</span>.

## Cross-references

<p>Articles in this wiki — <a href="#fmea">FMEA</a> (§5); future articles on <a href="#yield">Yield Learning</a>, <a href="#pcn">PCN</a>, and Customer 8D will continue the corrective-action chain from FA findings to process change.</p>

## References

[1] JEDEC Solid State Technology Association, _JEDEC Publication No. 122H: Failure Mechanisms and Models for Semiconductor Devices_, Section 6 and Tables 6-1, 6-2 (failure-mechanism catalogue used in FA root-cause mapping).
[2] JEDEC Solid State Technology Association, _JEDEC Publication No. 131A: Potential Failure Mode and Effects Analysis (FMEA)_, May 2005, §3 (links between FA findings and FMEA updates).
[3] JEDEC Solid State Technology Association, _JEDEC Reliability Notice JESD34: Failure-Mechanism-Driven Reliability Qualification of Silicon Devices_ — failure-mechanism-driven qualification approach that integrates FA results into the reliability programme.
