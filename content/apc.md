**Advanced Process Control and Fault Detection & Classification**
Two complementary control layers above SPC: APC actively adjusts recipe parameters wafer-to-wafer or lot-to-lot to keep outputs on target; FDC monitors equipment sensor data in real time to detect tool faults before they produce out-of-spec wafers<span class="cite">[1]</span>.

## SPC vs. APC vs. FDC — distinct roles
**SPC** — passive monitoring; detects out-of-control conditions and triggers human OCAP response. Action is human-mediated.
**APC** — active control; algorithms automatically adjust recipe parameters based on measurement feedback (e.g. increase polish time if last lot's thickness was high). Closes the loop without human intervention.
**FDC** — real-time equipment health monitor; sensors inside the tool (chamber pressure, RF power, gas flow, temperature) generate a fault signature. The tool is shut down before a bad wafer is produced.


![](art-20_apc-and-fdc-control-loops.svg){width=100%}
> Figure 20. APC and FDC loops. (A) APC closes the loop on process output: inline metrology data feeds a controller that computes the next-lot recipe offset, typically via an EWMA filter or a model-based regression. (B) FDC closes the loop on equipment health: hundreds of tool sensors stream to a multivariate model (often PCA-based with T² and SPE statistics) that detects abnormal sensor combinations and halts the tool before bad wafers are produced <span class="cite">[1,2]</span>.

## APC algorithms
The simplest and most common APC controller is the EWMA filter: recipe_new = recipe_old + λ · (target − measured), where λ is the gain. Larger λ responds faster to disturbances but amplifies measurement noise. More sophisticated approaches use model-based control with regression equations derived from DOE — feeding inline metrology and ex-situ measurements into a process model that predicts the optimal recipe for the next wafer<span class="cite">[1]</span>.

## FDC architecture
Modern fab tools stream 100–1000 sensor channels at 1–10 Hz during processing. A typical FDC implementation reduces this with Principal Component Analysis (PCA) to a small number of principal components and monitors two statistics:

**Hotelling's T²** — distance from the multivariate mean of the principal-component subspace. Detects shifts within the modelled subspace.
**SPE (Squared Prediction Error)** — residual variation orthogonal to the PCA subspace. Detects truly novel behavior the model has not seen. An alarm on either statistic triggers tool hold, automatic equipment shutdown, or engineer notification depending on severity classification<span class="cite">[2]</span>.

**Bottom-line distinction:** SPC catches process-output drift, APC corrects process-output drift before it crosses limits, FDC catches tool-side faults before they ever reach wafer output. A mature fab runs all three layers on every critical step.
## Cross-references

<p><a href="#spc">SPC</a> (nền tảng thống kê), <a href="#process-characterization">Process Characterization</a> (cung cấp model), Metrology.</p>

## References

1. May, G. S. and Spanos, C. J., Fundamentals of Semiconductor Manufacturing and Process Control, Wiley-IEEE Press, 2006, Chapter 14 (Run-to-Run Process Control), including EWMA controllers and model-based control.
2. May, G. S. and Spanos, C. J., op. cit., Chapter 13 (Multivariate Statistical Methods), including PCA-based fault detection and T²/SPE statistics for FDC.