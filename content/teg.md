**TEG (Test Element Group)** là tập hợp các test structure được thiết kế chuyên biệt để đo đạc và đánh giá đặc tính process/device, đặt trong scribe line hoặc trên drop-in test chip.

## Phân loại TEG

- **Process TEG** — đánh giá process: CD, overlay, độ dày, defect density
- **Device TEG** — đặc trưng device: transistor, capacitor, resistor arrays
- **Reliability TEG** — cấu trúc cho test độ tin cậy: EM, TDDB, HCI, BTI
- **Yield TEG** — SRAM array, via chain để phát hiện yield detractor

## Vị trí đặt

- **Scribe line** (kerf): không tốn diện tích die, đo được 100% wafer nhưng kích thước hạn chế
- **Drop-in chip**: thay 1 die sản phẩm, đủ chỗ cho structure lớn (SRAM array), nhưng tốn diện tích

## Vai trò trong technology transfer

TEG do đội PDK (N3) cùng TTP co-design ở P0-P1a. Là công cụ chính để qualify process và calibrate model ở P2.

## Cross-references

PCM/WAT, Test Vehicle (TQV), Device Characterization, Reliability qualification.
