**Statistical Process Control (SPC)** là phương pháp dùng công cụ thống kê để giám sát và kiểm soát process theo thời gian thực, phát hiện biến động bất thường trước khi chúng gây ra sản phẩm lỗi.

## Nguyên lý cốt lõi

SPC phân biệt 2 loại biến động:

- **Common cause** (biến động tự nhiên) — luôn hiện diện, là "tiếng ồn" nền của process ổn định
- **Special cause** (biến động bất thường) — do nguyên nhân xác định được (tool drift, vật liệu lỗi, lỗi vận hành), cần can thiệp

Mục tiêu: phát hiện special cause để xử lý, đồng thời không can thiệp vào common cause (over-control làm process tệ hơn).

## Control chart

Công cụ trung tâm của SPC. Các loại phổ biến trong fab:

- **X̄-R chart** — cho dữ liệu liên tục theo nhóm mẫu (CD, độ dày film)
- **I-MR chart** — individual + moving range, khi mỗi lần đo là 1 điểm
- **EWMA / CUSUM** — nhạy với drift nhỏ, dùng cho APC

Control limit thường đặt ở **±3σ** quanh đường trung tâm (UCL/LCL).

## Western Electric Rules

Bộ quy tắc phát hiện special cause:

- 1 điểm ngoài 3σ
- 2/3 điểm liên tiếp ngoài 2σ
- 4/5 điểm liên tiếp ngoài 1σ
- 8 điểm liên tiếp cùng phía đường trung tâm

## Liên quan trong fab

SPC được triển khai trên hệ MES/SPC, lấy data từ inline metrology và WAT. Mỗi tham số trọng yếu có control chart riêng, vi phạm rule sẽ trigger OCAP (Out-of-Control Action Plan).

## Cross-references

Process Characterization, MSA (SPC chart dựa trên gauge tốt mới có ý nghĩa), APC/FDC.
