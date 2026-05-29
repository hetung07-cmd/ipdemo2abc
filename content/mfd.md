## Định nghĩa

**MFD** là tiếp cận ngược của DFM: thay vì bắt thiết kế tuân theo process, foundry adjust process để optimize cho design pattern thực tế của khách hàng.

## Ví dụ MFD action

- **OPC tuning per customer**: tinh chỉnh mask correction theo pattern density của customer
- **Recipe biasing per layout**: điều chỉnh etch time/CMP rate cho layout-specific
- **Inline monitoring per critical pattern**: tăng đo lường ở các weak spot của design cụ thể
- **Mask data preparation customization**: thêm SRAF, dummy fill theo design density

## Khi nào dùng

- **Tape-out đầu của customer mới**: chạy MFD analysis trước khi mass production
- **Khách hàng strategic** với volume lớn — đáng đầu tư MFD

## Khác biệt với DFM

| | DFM | MFD |
|---|---|---|
| Adjust | Design | Process |
| Generic? | Có, áp dụng mọi customer | Custom theo từng customer |
| Phase | P2-P3 (rule release) | P3+ (ramp customer cụ thể) |