## 1. Thông số kỹ thuật hệ IBE/RIBE của NineScrolls

Nền tảng IBE/RIBE của NineScrolls được thiết kế cho độ linh hoạt nghiên cứu và kiểm soát quy trình cấp sản xuất. Thông số chính:

| Thông số | Chi tiết |
| --- | --- |
| Tùy chọn ion source | Kiểu Kaufman (tới wafer 6″) hoặc RF ion source (tới wafer 12″) |
| Wafer stage | Tilt 0–90°, xoay 1–10 rpm lập trình được |
| Làm mát substrate | Làm mát nước 5–20 °C; tùy chọn làm mát He mặt sau cho thiết bị nhạy cảm |
| Base pressure | <7×10⁻⁷ Torr |
| Khí quy trình | Tiêu chuẩn 1–3 đường (Ar, O₂, CHF₃, v.v.); tùy biến được |
| Độ bất đồng đều màng | <5% |
| Nạp mẫu | Cấu hình open-load hoặc load-lock |
| Footprint | 1,0 m × 0,8 m |
| Vật liệu tương thích | Từ tính (NiFe, CoFe), quang (glass, quartz), semiconductor (Si, GaAs, InP), kim loại (Au, Pt, Cu), dielectric (SiO₂, Si₃N₄), vật liệu 2D/lượng tử |

Footprint nhỏ gọn (1,0 m × 0,8 m) khiến hệ IBE/RIBE NineScrolls phù hợp cho cả cleanroom đại học lẫn fab sản xuất, trong khi tùy chọn load-lock giảm thiểu thời gian hút chân không và ngăn nhiễm bẩn khí quyển cho các màng từ tính và quang nhạy cảm.

## 2. Hướng dẫn Troubleshooting

| Vấn đề | Nguyên nhân khả dĩ | Giải pháp |
| --- | --- | --- |
| Fence/veil dẫn điện trên sidewall đặc trưng | Redeposition từ vật liệu mục tiêu bị sputter | Thêm bước cleanup 45–70° kèm xoay; cân nhắc RIBE với trợ lực O₂ |
| Etch không đồng đều trên wafer | Trôi profile chùm, mòn grid, hoặc xoay không đủ | Kiểm tra/thay extraction grid; xác minh motor xoay; đo profile chùm bằng Faraday probe |
| Etch rate giảm dần theo thời gian | Suy thoái filament (Kaufman), lỗ grid rộng ra, tích tụ lớp phủ buồng | Thay filament hoặc grid; vệ sinh liner buồng; theo dõi beam current làm chỉ số giám sát quy trình |
| Photoresist cháy hoặc cứng lại | Substrate quá nóng do công suất chùm cao | Giảm beam voltage/current; bật làm mát He mặt sau; etch ngắt quãng (etch → làm nguội → etch) |
| Tính chất từ suy giảm (TMR thấp) | Hư hại do ion implantation vào các lớp từ mỏng | Giảm beam voltage xuống <400 eV cho 5–10 nm cuối; dùng phát hiện endpoint để dừng chính xác tại tunnel barrier |
| Profile đặc trưng bất đối xứng | Lỗi xoay stage hoặc chùm lệch trục | Xác minh cơ cấu xoay; kiểm tra căn chỉnh ion source; chạy etch thử trên màng phủ kín (blanket) để lập bản đồ profile chùm |
| Phóng hồ quang hoặc chùm bất ổn | Lớp phủ dẫn điện trên grid hoặc insulator; rò khí | Vệ sinh hoặc thay grid; kiểm tra insulator gốm xem có phủ kim loại; kiểm tra rò đường khí và seal buồng |
| Selectivity với mask kém | Sputter yield của vật liệu mask quá gần vật liệu mục tiêu | Đổi sang mask cứng hơn (SiO₂, Cr, Ta, hoặc diamond-like carbon); dùng chế độ RIBE cho selectivity có trợ lực hóa học |

