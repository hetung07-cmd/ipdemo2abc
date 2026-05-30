**SPICE model** (với **BSIM4** là chuẩn cho CMOS bulk) là mô hình toán học mô tả hành vi điện của transistor, dùng cho mô phỏng mạch trong thiết kế.

## Vai trò trong PDK

SPICE model là trái tim của PDK — cho phép designer mô phỏng mạch trước khi tape-out:

- **BSIM4**: chuẩn industry cho planar bulk CMOS (28nm)
- Bao gồm: I-V, C-V, noise, RF behavior
- **Corner models**: SS/TT/FF/SF/FS để cover process variation
- **Statistical models**: Monte Carlo, mismatch

## Quá trình tạo model

1. Đo silicon (Device Characterization) trên TQV
2. Trích xuất tham số BSIM4 (fitting) — đội PDK (N3)
3. Validate model vs silicon (target sai số Ids < ±5%)
4. Sinh corner models từ phân phối WAT
5. Release trong PDK v0.9 (P2), v1.0 (P3)

## Ranh giới Design ↔ Fab

Foundry tạo và validate model (từ silicon của mình); customer dùng model để thiết kế. Model là deliverable IP quan trọng nhất trong technology transfer.

## Cross-references

Device Characterization, PCM/WAT, DFT, DFM, PDK.
