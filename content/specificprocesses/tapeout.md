# Tape-out · DRC / LVS Sign-off

**Category:** Process Workflow · **Lifecycle:** design ↔ FW3 PDK

## Summary

Tape-out is the hand-off gate between the design house and the fab. The customer freezes their layout database (GDSII or OASIS format), runs the final compliance checks against the foundry's rule decks, obtains internal sign-off across timing, power, and quality dimensions, and submits the complete package for mask making. After tape-out, the layout cannot change without a new tape-out cycle — which means new masks, new pilot lots, and weeks of additional time. The fab's DRC, LVS, PEX, and DFM rule decks are the contractual basis for what passes sign-off [1].

## The three primary checks

Three classes of automated check must complete with zero unwaived violations before tape-out is authorized:

- **DRC (Design Rule Check)** verifies that every geometric feature in the layout meets the foundry's rules. The rule deck enumerates several hundred to several thousand individual rules at 28 nm: minimum widths, minimum spacings, enclosure requirements, density windows, antenna ratios, and pattern-specific restrictions arising from lithography simulations. The output is a list of violations with coordinates; the design cannot tape out with any DRC violations except those covered by explicit, fab-countersigned waivers.

- **LVS (Layout Versus Schematic)** compares the netlist extracted from the layout against the schematic or synthesized netlist. Every transistor, contact, and wire must match in connectivity and device sizing. LVS catches errors such as missing connections, swapped device terminals, or incorrect device parameters. At advanced nodes, LVS also verifies that every device matches the PDK model name and that all pin connections to the package match the IO ring specification.

- **PEX (Parasitic Extraction)** extracts the parasitic resistances and capacitances of every wire and via in the layout. The extracted parasitics feed back into Static Timing Analysis (STA), which must re-converge with realistic parasitic values rather than the schematic ideal. Modern PEX tools also extract inductance for high-frequency signals and substrate coupling for analog blocks.

## DFM checks

In addition to the three primary checks, the modern tape-out flow includes DFM checks (see Article 15) that simulate the manufacturing outcome of the layout:

- **Litho hotspot detection** runs an optical lithography simulator on the layout to find locations where process variation might cause shorts, opens, or excessive resistance. Modern decks include thousands of hotspot patterns derived from silicon experience. Target: zero litho hotspots.

- **CMP density compliance** checks that metal density falls within the windowed range specified by the rule deck — typically 20-80% density within any 100 µm × 100 µm window. Out-of-window areas cause dishing (low density) or erosion (high density) during chemical-mechanical polishing.

- **Antenna ratio check** verifies that the ratio of metal area to connected gate area does not exceed the rule deck limit at any intermediate metal layer; excessive antenna ratio causes plasma-induced damage to the gate oxide during etch.

## Waivers

A DRC waiver is a documented agreement between the fab and customer that a specific rule violation will not affect manufacturability or reliability. Waivers are case-by-case and require named sign-off from a fab engineer. Common waiver scenarios: a rule violation in a non-critical structure (dummy fill, decap cells, alignment marks); a violation in IP that has been silicon-proven through a previous tape-out at the same fab; a violation where additional process control compensates (for example, a tight-pitch metal pattern that fails the standard DRC rule but is covered by a specific lithography process recipe).

Unwaived violations are absolute blocks on tape-out. The waiver list itself is part of the tape-out package and is reviewed at the Product Release Review (Article 26).

## The tape-out package

The customer delivers a tape-out package to the fab containing:

- **GDSII or OASIS file** — the layout database, with a cryptographic checksum to confirm transmission integrity.
- **Layer mapping table** — translates the customer's GDS layer numbers to the foundry's mask layer convention.
- **Clean DRC and LVS reports** — generated from the final layout against the released rule deck version, with all waivers documented and fab-countersigned.
- **STA sign-off report** — confirms timing convergence across all PVT corners using post-PEX parasitics; required to confirm the design will work at the customer's stated operating conditions.
- **DFT coverage report** — ATPG fault grade across stuck-at, transition, and path-delay faults (see Article 14). Target coverage at 28 nm is typically ≥ 98% stuck-at and ≥ 90% transition.
- **Reticle floorplan** — agreed with the mask shop, specifies how the design tiles on the reticle along with PCM and TEG structures from the foundry.
- **Package ball-out / pad-ring specification** — IO ring layout matching the package design.

## What the fab does after tape-out

After tape-out, the layout never changes, but the fab's Mask Data Prep (MDP) team modifies a derived dataset for mask making. MDP applies Optical Proximity Correction (OPC), Sub-Resolution Assist Features (SRAF), and where applicable Phase-Shift Masking (PSM) modifications — these are the fab's MfD response (Article 16) — then converts the modified layout to mask-writer formats (MEBES, OASIS-MV). The customer's GDSII itself is never modified; the MDP output is a derived dataset specific to this fab process and mask shop combination [1].

## Iteration reality

A modern complex SoC rarely passes tape-out on the first try. Typical first-pass DRC runs find dozens to hundreds of violations that send the designer back to the layout for fixes. A typical 28 nm SoC tape-out involves 3-6 weeks of iterative DRC cleanup, with the final week being the critical-path between schedule pressure and design quality. Time to clean tape-out is a major design-house metric.

## Cross-references

- **<a href="#dfm">DFM</a>** — designer-side techniques that produce a manufacturable layout.
- **<a href="#mfd">MfD</a>** (Article 16) — the fab response that begins after tape-out.
- **<a href="#spice">SPICE Model role</a>** (Article 8) — the model that STA uses during sign-off.
- **<a href="#prr">PRR</a>** (Article 26) — the gate that consumes the post-tape-out qualification evidence.

## References

1. Balasinski, A., _Semiconductors: Integrated Circuit Design for Manufacturability_, CRC Press. Comprehensive treatment of the DFM tool flow, DRC / LVS / PEX checks, and the tape-out / mask data prep handshake including OPC and SRAF application.

2. JEDEC Solid State Technology Association, _JEDEC Publication No. 001-3A: Foundry Process Qualification Guidelines – Product Level_. The design-rule and density compliance requirements that the rule decks encode are derived from the qualified-process envelope defined in §7 and §8.
