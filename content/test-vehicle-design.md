## Định nghĩa

**Test Vehicle (TV)** là wafer chứa các test structure được thiết kế chuyên biệt để:

- Đo đặc tính process (CD, overlay, defect)
- Đo đặc tính device (I-V, C-V, ring osc)
- Test integration (functional chain, SRAM array)
- Calibrate OPC model (litho test patterns)

## Thành phần điển hình

- **PCM (Process Control Monitor)**: nằm trong scribe line, đo inline mỗi lot
- **Drop-in test chip**: thay vị trí 1 die khách hàng, đo full electrical
- **SRAM bit-cell arrays**: 64Mb/128Mb để đo yield và bitmap defect
- **Ring oscillators**: timing characterization
- **OPC test patterns**: dense/iso lines, contacts, 2D pattern

## Phase

- **P0**: co-design TV scope với TTP
- **P1a**: tiếp nhận GDSII layout + verify với rule deck Green Fab
- **P2**: tape-out TV, chạy lot, qualify silicon