**Design for Manufacturability (DFM)** là tập hợp guideline thiết kế giúp tăng yield bằng cách tránh các pattern khó in/khó chế tạo.

## Các loại DFM rule

- **Antenna ratio** — giới hạn diện tích metal nổi tránh plasma damage lên gate
- **Density rules** — min/max metal density per window cho CMP đồng đều
- **Litho-friendly** — tránh forbidden pitch, sharp corner
- **Via redundancy** — dùng 2+ via tránh open fail
- **Wide-metal slotting** — cắt rãnh metal rộng giảm dishing

## Cách triển khai

- DRC deck với warning rules (khác error rules bắt buộc)
- DFM scoring tool: tính điểm DFM cho layout, gợi ý cải thiện
- Recommended rules (khác required rules)

## DFM vs MfD

- **DFM**: thiết kế tuân theo guideline để dễ sản xuất (design thích nghi)
- **MfD**: process điều chỉnh cho design (fab thích nghi)

## Phase

Phát triển từ yield learning P2, release thành DFY guide trong PDK v1.0 ở P3.

## Cross-references

DFT, MfD (Manufacturability for Design), SPICE model, Yield Learning.
