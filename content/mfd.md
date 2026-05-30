**Manufacturability for Design (MfD)** là tiếp cận ngược của DFM: thay vì bắt thiết kế tuân theo process, foundry điều chỉnh process để tối ưu cho pattern thiết kế thực tế của khách hàng.

## Ví dụ MfD action

- **OPC tuning per customer** — tinh chỉnh mask correction theo density của khách hàng
- **Recipe biasing per layout** — điều chỉnh etch/CMP rate cho layout cụ thể
- **Inline monitoring per critical pattern** — tăng đo ở weak spot của design
- **Mask data prep customization** — thêm SRAF, dummy fill theo density

## Khi nào dùng

- Tape-out đầu của customer mới (chạy MfD analysis trước mass production)
- Khách hàng strategic volume lớn — đáng đầu tư MfD

## DFM vs MfD

| | DFM | MfD |
|---|---|---|
| Đối tượng điều chỉnh | Design | Process |
| Generic? | Có (mọi customer) | Custom theo customer |
| Phase | P2-P3 | P3+ |

## Cross-references

DFM, DFT, Yield Learning, PCN.
