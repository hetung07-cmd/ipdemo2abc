## Định nghĩa

**Device Characterization** là quá trình đo đạc đặc tính điện (I-V, C-V, RF, noise) và vật lý (CD, profile, độ dày film) của các linh kiện (transistor, capacitor, resistor, diode) trên wafer test vehicle.

## Mục tiêu

- Trích xuất tham số cho SPICE/BSIM model (Vth0, μ, Cox, Rsd...)
- Validate process đạt target electrical spec của TTP
- Cung cấp data cho đội PDK calibrate corner model (SS/TT/FF/SF/FS)
- Phát hiện sớm process drift hoặc systematic shift

## Test structures điển hình

- **MOSFET array**: nhiều W/L combination để fit Vth roll-off
- **CV structures**: tách Cgs/Cgd/Cdb cho RF model
- **Resistor strings**: trích xuất Rsh các lớp poly, diff, metal
- **Capacitor arrays**: MIM, MOS-cap cho characterization
- **Ring oscillator**: đo delay/stage cho timing model

## Liên quan đến phase
- **P1a**: tiếp nhận methodology characterization từ TTP
- **P2**: chạy chiến dịch đo full trên test vehicle → giao N3 (PDK) calibrate model
- **P3**: re-characterize trên silicon production để verify model accuracy
![Ảnh đẹp](/content/images/device-characterization/dc1.webp)
<div style="text-align:center">

**Hình 1.** minh họa
</div>
![](/content/images/device-characterization/dc1.webp)
<div style="text-align:center; bold"> **Hình 1.** minh họa
</div>
## References

- JEDEC JESD223 — Test methodology for device parameters
- ITRS roadmap section on characterization metrology