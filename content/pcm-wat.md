**PCM (Process Control Monitor)** / **WAT (Wafer Acceptance Test)** là bộ đo điện thực hiện trên các test structure trong scribe line của mỗi wafer, để verify process đạt target trước khi wafer đi tiếp.

## Vai trò

- Gate kiểm soát chất lượng: lot không đạt PCM/WAT spec sẽ bị hold
- Cung cấp data cho SPC, yield correlation, SPICE model calibration
- Là cầu nối giữa process (N1/N2) và device characterization (N3)

## Test structures điển hình

- Transistor (nhiều W/L) — đo Vth, Idsat, Ioff
- Resistor — đo sheet resistance từng lớp
- Capacitor — đo Cox, capacitance matching
- Via/contact chain — đo điện trở tiếp xúc, phát hiện open
- Van der Pauw — đo resistivity

## Thời điểm đo

Thường đo ở cuối line (sau metal cuối) trên 100% lot, tại 5-9 site/wafer. Một số tham số đo inline giữa các module.

## Khác biệt PCM vs WAT

Thực tế 2 thuật ngữ thường dùng thay thế nhau. Một số fab phân biệt: PCM = monitoring trong quá trình, WAT = test chấp nhận cuối cùng trước khi ship wafer/đi assembly.

## Cross-references

Device Characterization, Test Element Group (TEG), SPC, Yield Learning.
