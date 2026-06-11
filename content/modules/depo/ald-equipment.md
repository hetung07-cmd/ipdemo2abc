# ALD — Equipment

## 1) Hướng dẫn lựa chọn thiết bị

Chọn đúng hệ ALD đòi hỏi khớp năng lực thiết bị với yêu cầu quy trình của bạn. Nên tham khảo Các tiêu chí sau trong quá trình đánh giá:

### 1.1 Kích thước wafer & Throughput

Hệ ALD phải được thiết kế cho các kích thước substrate dùng trong ứng dụng của bạn. Phòng lab R&D có thể làm việc với coupon nhỏ hoặc wafer 4″, trong khi fab sản xuất cần tương thích 200 mm (8″) hoặc 300 mm (12″). Với substrate phi tiêu chuẩn (panel lớn, vật thể 3D, hoặc batch dạng bột), có các cấu hình buồng "supersize" chuyên dụng. Throughput có thể được nâng lên thông qua xử lý batch (nhiều wafer mỗi lần chạy) hoặc kiến trúc spatial ALD.

### 1.2 Dải nhiệt độ & Vùng nhiệt

Heater substrate phải bao phủ toàn bộ ALD temperature window cho vật liệu đích của bạn. Một hệ hỗ trợ 20–400 °C bao phủ phần lớn các quy trình ALD. Quan trọng không kém là **nhiệt độ nguồn precursor** (thường 20–150 °C, với khả năng tới 200 °C cho precursor độ bay hơi thấp) và **gia nhiệt đường cấp (delivery line)** để ngăn ngưng tụ giữa nguồn và buồng. Kiểm soát nhiệt độ đa vùng (multi-zone) đảm bảo gia nhiệt đồng đều trên toàn substrate.

### 1.3 Chân không & Cấp khí

- **Base pressure:** Base pressure <5×10⁻⁵ Torr đảm bảo nhiễm nền thấp và là điều thiết yếu để tăng trưởng màng độ tinh khiết cao. Điều này cần một turbomolecular pump được hậu thuẫn bởi dry pump.
- **Đường precursor:** Số đường cấp precursor độc lập quyết định độ linh hoạt quy trình. Hai đường đủ cho một quy trình ALD binary đơn lẻ; 4–6 đường cho phép lắng đọng đa vật liệu, đa lớp in-situ, và tinh chỉnh thành phần hợp kim mà không phá vỡ chân không.
- **Phân phối khí:** Cấp khí kiểu showerhead cho phân phối precursor đồng đều nhất trên bề mặt wafer, thiết yếu để đạt độ đồng đều độ dày <1%.

### 1.4 Năng lực Plasma

Nếu ứng dụng của bạn cần màng kim loại, nitride, hoặc lắng đọng nhiệt độ thấp, một hệ có năng lực PEALD với remote plasma là thiết yếu. Nguồn RF remote plasma trong dải 300–1000 W cung cấp radical flux đủ cho hầu hết quy trình PEALD trong khi giảm thiểu hư hại substrate. Hãy đảm bảo nguồn plasma có thể vận hành với O₂, N₂, H₂, NH₃, và hỗn hợp Ar/N₂.

### 1.5 Thiết kế buồng (Chamber)

Các đặc trưng thiết kế buồng then chốt cần đánh giá:
- **Kiến trúc box-in-box:** Một buồng phản ứng trong lồng bên trong vỏ chân không ngoài giúp giảm thể tích buồng tiếp xúc với precursor, giảm purge time và tiêu hao precursor đồng thời ngăn lắng đọng ký sinh trên thành buồng.
- **Thiết kế uni-body nhỏ gọn:** Một khung tích hợp đơn giản hóa lắp đặt, giảm footprint hệ thống, và giảm số lượng vacuum seal cùng điểm rò tiềm tàng.
- **Kiểm soát nhiệt độ thành buồng:** Thành buồng được gia nhiệt (khớp với nhiệt độ substrate hoặc cao hơn chút) ngăn precursor ngưng tụ trên thành, giảm sinh particle và cải thiện hiệu quả purge.
- **Cổng giám sát in-situ:** Cổng quang cho spectroscopic ellipsometry, QCM (quartz crystal microbalance), hoặc residual gas analysis (RGA) cho phép giám sát quy trình thời gian thực và phát hiện endpoint.

### 1.6 Thông số kỹ thuật hệ ALD NineScrolls

| Thông số | Giá trị |
| --- | --- |
| Kích thước wafer | 4″, 6″, 8″, 12″, hoặc supersize |
| Nhiệt độ substrate | 20–400 °C |
| Nhiệt độ nguồn | 20–150 °C (tùy chọn lên tới 200 °C) |
| Base pressure | <5×10⁻⁵ Torr |
| Tốc độ tăng trưởng | 0,5–2 Å mỗi cycle |
| Độ đồng đều màng | <1% (Al₂O₃) |
| Step coverage | >98% |
| Đường precursor | 2–6 |
| Remote plasma RF (tùy chọn) | 300–1000 W |
| Phân phối khí | Cấp khí showerhead |
| Thiết kế buồng | Uni-body nhỏ gọn, buồng box-in-box |
| Vật liệu lắng đọng được | Al₂O₃, HfO₂, SiO₂, TiO₂, Ga₂O₃, ZnO, TiN, TaN, SiNₓ, AlN, GaN, Pt, Pd, W, Ru |

## 2) Một số hãng nổi tiếng


## 3) Nguồn tham khảo
- [1] Atomic Layer Deposition (ALD) – Principles, Process Windows, Materials, and Equipment Guide, ninescroll [online resource]: https://ninescrolls.com/insights/atomic-layer-deposition-ald-comprehensive-guide
- [2] 