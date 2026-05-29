## Định nghĩa

**DFM** là tập hợp guideline thiết kế giúp tăng manufacturing yield bằng cách tránh các pattern khó in/khó etch.

## Các loại DFM rules

- **Antenna ratio**: giới hạn diện tích metal nổi để tránh plasma damage trên gate
- **Density rules**: min/max metal density per window để CMP đồng đều
- **Litho-friendly patterns**: tránh forbidden pitch, sharp corner
- **Via redundancy**: dùng 2+ via thay vì single via để giảm open fail
- **Wide-metal slotting**: cắt rãnh metal rộng để giảm stress dishing

## Format delivery

- DRC deck (Calibre/ICV) với warning rules thay vì error
- DFM scoring tool: tính DFM score cho layout, gợi ý fix

## Phase

- **P2**: phát triển DFM guideline từ yield learning P2
- **P3**: release thành DFY guide trong PDK v1.0