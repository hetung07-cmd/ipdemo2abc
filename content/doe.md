A statistical methodology that plans the minimum set of experiments needed to estimate how each process input affects each output of interest, including interaction effects between inputs. DOE is the formal tool used at JEP132A §4.1.3 to determine process characteristics and measurables [1, 2].

## Why DOE

A semiconductor process has dozens of tunable inputs (temperature, pressure, gas flow, RF power, time, recipe step order). The naive approach of varying one variable at a time (OFAT) misses interaction effects and consumes a large number of wafers. DOE designs trade off the number of experimental runs against the resolution of effects that can be detected [2].

![](doe-fig1.svg){width=100%}
> **Figure 4.** The principal DOE design families ranked from least to most informative. Run counts shown for k = 4 inputs at 2 levels. The standard fab workflow is *screening first* (fractional factorial or Taguchi to identify the few inputs that matter) followed by *optimization* (response surface methodology on those identified inputs) [2]. *(diagram gốc trong FabWiki — đại ca có thể thay bằng ảnh)*

## Typical fab DOE workflow

- **Define the response.** One or more measurable outputs (CD, film thickness, sheet resistance, particle count, yield).
- **List candidate inputs.** Typically 5–15 candidates from the process recipe plus environmental factors.
- **Screening design.** Fractional factorial or Taguchi to identify the 2–4 dominant inputs.
- **Optimization design.** Response Surface Methodology (RSM) on those 2–4 inputs to map the response surface and find the optimum.
- **Confirmation runs.** Two or three wafers at the proposed optimum to verify the predicted response.
- **Lock the recipe.** Document control limits around the optimum; integrate with SPC.

> 💡 **Cost guideline:** A single 300 mm wafer through a complex CMOS module costs the fab thousands of dollars in tool time alone. Spending 25 wafers on a well-designed RSM beats 100 wafers on OFAT both in time-to-answer and in answer quality [2].

## DOE inside Process Characterization

JEP132A.01 §4.1.3 explicitly lists DOE as the recommended method for "Determine Characteristics & Measurables" [1]. The output of a DOE is not just an optimum but also a quantified *process model* — a regression equation that relates inputs to outputs. That model is then the input to the subsequent gauge studies (Article 7) and SPC charts.

## Cross-references

Articles in this wiki — Process Characterization (§1), MSA (§7); future articles on SPC and APC will use the regression models from DOE as their feedforward/feedback inputs.

## References

- JEDEC Solid State Technology Association, *JEDEC Publication No. 132A.01: Process Characterization Guideline*, December 2022, §4.1.3 (Determine Characteristics & Measurables) and §4.2 (recommended tools).
- May, G. S. and Spanos, C. J., *Fundamentals of Semiconductor Manufacturing and Process Control*, Wiley-IEEE Press, 2006, Chapter 6 (Experimental Design), Chapter 7 (Response Surface Methodology).
