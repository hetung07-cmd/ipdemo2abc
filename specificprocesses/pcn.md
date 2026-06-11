# Process Change Notification (PCN)

**Category:** Process Workflow · **Lifecycle:** FW5


## PCN — Process Change Notification

The formal customer-facing protocol for notifying that a qualified process or product is being changed: classification of the change, impact assessment, re-qualification requirements, customer acceptance timeline, and implementation gating. PCN is the contract that protects the customer's qualified product through the fab's evolving operations <span class="cite">[1]</span>.

### Why PCN exists

Once a process is qualified and a customer's product is in production, any change — recipe parameter shift, equipment swap, raw-material change, package supplier change, mask shop change — risks introducing new failure modes that the original qualification did not exercise. The PCN process formalizes the discipline of disclosing changes, demonstrating that they do not degrade product quality, and obtaining customer acceptance before implementation <span class="cite">[1, 2]</span>.

![Figure 21](art-21_pcn-workflow.svg){width=100%}

> **Figure 21.** Six-step PCN workflow and the three-tier classification system. Major changes require advance customer notification (typically 90 days), full re-qualification per JEP013A, and explicit customer acceptance before implementation. Minor and administrative changes have progressively reduced obligations. Misclassification — calling a Major change Minor — is the most common audit failure in PCN systems[1].

### Classification criteria

JEP012A §3.4 and JEDEC's J-STD-046 give the classification criteria <span class="cite">[1, 2]</span>. The decisive question is whether the change can affect form, fit, function, reliability, or appearance of the qualified product. Examples:

- **Major:** new fab site, new technology revision (e.g. 28 HP → 28 HPC), new package supplier, new mask shop, change in PDK model, change of qualification lot procedure.
- **Minor:** same-model tool swap (within process window), consumable supplier change (qualified second source), recipe parameter adjustment within control limits.
- **Administrative:** document renumbering, organizational changes that do not affect technical specifications.

### Re-qualification scope

Major PCNs typically trigger a re-qualification lot run through the JEP013A stress matrix (Article 18). Minor PCNs trigger a reduced re-qualification — typically delta-characterization of the affected parameter rather than the full stress matrix. The exact scope is negotiated case-by-case based on the change's risk envelope and prior fab history with similar changes <span class="cite">[1]</span>.


> **Customer protection:** The customer's right under PCN is to receive timely notification, see the data justifying the change, perform their own qualification if they choose, and withhold acceptance for cause. The fab's right is to schedule the implementation once the contractual notification period has elapsed.

**Cross-references** Articles in this wiki — <a href="#process-qualification">Process Qualification</a> (§9), <a href="#prod-qual">Product Qualification</a> (§18), <a href="#construct">Construction Analysis</a> (§17).

## References

1.  JEDEC Solid State Technology Association, _JEDEC Publication No. 001-2A: Foundry Process Qualification Guidelines – Front End Transistor Level_, September 2018, §3.4 (change classification and PCN requirements).
2.  JEDEC Standard J-STD-046, _Customer Notification Standard for Product/Process Changes by Electronic Product Suppliers_ — the cross-industry PCN reference standard. Referenced industry-wide and aligned with IATF 16949 PPAP submission categories.
