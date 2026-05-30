**Tape-out** là thời điểm thiết kế hoàn tất và được gửi đi chế tạo mask. Trước tape-out, thiết kế phải qua **DRC/LVS sign-off**.

## Tape-out là gì

Thuật ngữ lịch sử (từ thời "tape" chứa data layout). Nay là việc nộp file GDSII/OASIS layout cuối cùng cho foundry để làm mask.

## DRC — Design Rule Check

Kiểm tra layout tuân thủ design rule của process:

- Min width, min spacing, enclosure, density
- Antenna rules
- Phải đạt **0 error** (hoặc chỉ waiver có phê duyệt)

## LVS — Layout Versus Schematic

So sánh layout đã extract với schematic gốc:

- Verify kết nối đúng (netlist match)
- Device đúng loại, đúng kích thước
- Phải đạt **0 mismatch**

## Các check khác trước tape-out

- **PEX** (Parasitic Extraction) — trích RC ký sinh cho timing
- **ERC** (Electrical Rule Check)
- **DFM check** — antenna, density, recommended rules

## Vai trò foundry

Foundry cung cấp DRC/LVS/PEX deck trong PDK; customer chạy sign-off; foundry verify lại khi nhận GDSII.

## Cross-references

PRR, DFT, DFM, SPICE model, PDK, MPW.
