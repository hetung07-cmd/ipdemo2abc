# SWEAT — Standard Wafer-level Electromigration Acceleration Test

**Category:** Process Workflow · **Lifecycle:** FW3 PDK · FW5 HVM monitoring

## Summary

SWEAT is a wafer-level, highly accelerated test that measures the electromigration lifetime of metal interconnect within minutes to hours, rather than the months required by conventional package-level life tests. It is the foundry's standard tool for fast turn-around electromigration characterization during process development and high-volume manufacturing reliability monitoring. JEDEC JEP119A is the governing standard and defines the procedure for executing SWEAT<span class="cite">[1]</span>.

## The electromigration problem

Electromigration is the gradual displacement of metal atoms in an interconnect line caused by momentum transfer from conducting electrons to the metal lattice. Over time the displaced atoms create voids upstream and hillocks downstream; once a void grows large enough to span the line cross-section, the wire opens and the circuit fails. The mechanism dominates the wear-out lifetime of metallization at high current densities and elevated temperatures.

The classical lifetime model is Black's equation: `t₅₀ = A · J⁻ⁿ · exp(Eₐ/kT)`, where t₅₀ is the median time to failure, J is the current density, T is absolute temperature, n is the current-density exponent (typically 2 for aluminum, often 1 for copper), and Eₐ is the activation energy (≈ 0.8 eV for Al, somewhat lower for Cu). The acceleration factor across temperature is given by the Arrhenius factor exp((Eₐ/k)(1/T_use − 1/T_stress)); the acceleration factor across current density is (J_stress/J_use)ⁿ<span class="cite">[1]</span>.

Conventional package-level electromigration tests stress packaged devices at use-condition current density (J_use, typically 10⁵-10⁶ A/cm²) and moderately elevated temperature (typically 150-200 °C). Even with this acceleration, package-level tests require months to obtain a single failure-time distribution. For process development, this turn-around is incompatible with the pace of decisions; for HVM monitoring, it cannot detect a process excursion in time to contain product.

## The SWEAT response

SWEAT solves the turn-around problem by driving the test structure to failure in minutes using two stacked accelerations:

**High current density** is applied directly to a wafer-level test structure that does not yet have a package and so can dissipate much more power per unit area than a packaged device. Current densities of 10⁷-10⁸ A/cm² are routine — one to two orders of magnitude above J_use.

**Self-heating** of the line provides the temperature acceleration. The test structure is designed so that Joule heating from the test current heats the line itself; the line temperature is not set by an external furnace but is computed from the test conditions and verified by the resistance change of the line itself. JEP119A specifies the procedure for calculating the line temperature from measured resistance using the temperature coefficient of resistance (TCR) of the metal<span class="cite">[1]</span>.

The combination produces failures in 10 seconds to 10 minutes per structure for typical aluminum and copper interconnect, allowing dozens to hundreds of structures to be tested per wafer per day.

## The SWEAT test structure

The standard SWEAT vehicle is a serpentine metal line with a narrow "neck" region where failure preferentially occurs. The serpentine routing maximizes the line length within a small wafer area, increasing the probability that a void will form within the test region. The narrow neck increases the local current density relative to the wide tap lines, ensuring failure occurs in the controlled-geometry region rather than at the pads or current-injection points.

Typical structure dimensions at 28 nm: neck width 50-100 nm, neck length 10-100 µm, with wider tap lines (≥ 1 µm) leading to pads at the standard probe pitch. The exact dimensions depend on the metal layer being characterized — narrower for lower-level local interconnect, wider for upper-level power routing.

## The current-ramp procedure

JEP119A specifies a current-ramping test methodology rather than a fixed-current life test<span class="cite">[1]</span>:

1. The structure is mounted on a wafer prober at controlled ambient temperature (typically 25 °C).
2. A small "monitor" current is applied periodically to measure structure resistance without significantly heating the line. This establishes the baseline resistance at ambient temperature.
3. A "stress" current is applied in steps. At each step, the structure is held at stress current for a defined time interval, and the resistance is measured at the stress current.
4. The line temperature at each stress step is computed from the resistance rise and the metal's TCR. The procedure ensures that the line temperature does not exceed a predefined maximum (typically chosen to keep the failure mechanism in the electromigration regime rather than transitioning to thermal-stress-induced failures).
5. Failure is declared when the structure resistance has increased by a specified fraction of the baseline (commonly 20 %). The test current and elapsed time at failure are recorded.

The current and temperature at failure for each structure are inputs to a statistical lifetime analysis. By testing many structures across a range of stress conditions and applying Black's equation, the foundry extracts the activation energy Eₐ and current-density exponent n that characterize the technology's electromigration robustness.

## What SWEAT delivers

The extracted parameters feed two distinct uses:

**Process development.** During FW1 / FW2 / FW3, the foundry characterizes the electromigration lifetime of each metal layer in the technology under development. The model parameters (Eₐ, n, prefactor A) become inputs to the design rule manual: maximum allowed current densities per metal width and length, EM-aware power-routing rules, and electromigration-life-budget reservations for analog circuits. These rules are part of the PDK that customers consume.

**HVM monitoring.** During FW5, periodic SWEAT measurements on production wafers (typically as a reliability monitor on a small fraction of lots) verify that the electromigration lifetime continues to meet the qualified envelope. A measurable degradation in SWEAT lifetime — even within design rule margin — is an early warning signal of a process drift that may eventually impact field reliability. JEDEC JEP122H lists electromigration as one of the wear-out mechanisms catalogued for reliability projection per JESD85<span class="cite">[3]</span>.

## Limitations and complementary tests

SWEAT is fast but it has limitations that prevent it from being the sole electromigration qualification:

- The high current density operates the line in a regime that may activate different physical mechanisms than use-condition operation. Extrapolation from SWEAT to use-condition lifetime relies on Black's equation being valid at intermediate current densities; deviations exist at very high J<span class="cite">[2]</span>.
- The wafer-level test does not capture package-level mechanisms — solder-joint electromigration, package thermal-mechanical stress, and intermetallic-compound formation at die-package interfaces. Package-level life tests remain mandatory for these.
- The test structure isolates a single metal layer at a time; integrated current-flow effects (vias acting as flux divergence points) require separate test structures and characterization.

The complete electromigration qualification stack for a 28 nm technology therefore includes SWEAT for fast process development, isothermal package-level life tests for use-condition validation, and via-chain stress tests for current-flow effects.

## Cross-references

- **<a href="#device-characterization">Device Characterization</a>** (Article 7) — broader reliability characterization context including HCI, TDDB, BTI alongside EM.
- **<a href="#process-qualification">Process Qualification</a>** (Article 9) — the two-level framework that SWEAT data feeds at Level 1.
- **<a href="#fa">Failure Analysis</a>** (Article 12) — physical root-cause investigation of EM-failed structures using FIB cross-section and SEM.
- **<a href="#mfd">MfD</a>** (Article 16) — the metallization process levers (Cu electroplating, barrier engineering) that improve SWEAT lifetime.

## References

[1] JEDEC Solid State Technology Association, _JEDEC Publication No. 119A: A Procedure for Executing SWEAT_. Defines the test structure geometry, current-ramp algorithm, temperature calculation from in-situ resistance measurement, and failure-criterion conventions for wafer-level electromigration acceleration testing.

[2] JEDEC Solid State Technology Association, _JEDEC Publication No. 122H: Failure Mechanisms and Models for Semiconductor Devices_. Tables 6-1 and 6-2 catalog activation energies and current-density exponents for electromigration in aluminum and copper interconnect; the Black's equation formulation is the foundation for SWEAT lifetime extrapolation.

[3] JEDEC Solid State Technology Association, _JEDEC Standard JESD85: Methods for Calculating Failure Rates in Units of FITs_. Referenced for the FIT-rate computation that the SWEAT data feeds into for technology-level reliability projection.
