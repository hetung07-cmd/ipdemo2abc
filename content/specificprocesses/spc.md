# Hướng dẫn SPC cho kỹ sư mới | Biểu đồ kiểm soát, Quy tắc Nelson, Năng lực quá trình

## Kiểm soát quá trình bằng thống kê (Statistical Process Control — SPC)

> **Mục đích:** Hướng dẫn này trình bày những kiến thức SPC tối thiểu cần thiết để đọc biểu đồ kiểm soát, phát hiện các nguyên nhân đặc biệt (special cause) bằng 8 quy tắc Nelson, và tính toán các chỉ số năng lực/hiệu năng quá trình như Cp, Cpk, Pp, Ppk, cùng các ước lượng mức sigma.

### SPC trả lời cho những câu hỏi gì

- Quá trình có ổn định về mặt thống kê không, hay có bằng chứng về một nguyên nhân đặc biệt?
- Phân bố của quá trình có đủ hẹp để nằm gọn trong cửa sổ dung sai/quy cách của khách hàng không?
- Quá trình có được căn giữa (centered) không, hay đang trôi (drift) về phía giới hạn quy cách trên hoặc dưới?
- Khi có cảnh báo, kỹ sư cần thực hiện những hành động ngăn chặn (containment) và truy tìm nguyên nhân gốc rễ nào?

![Biểu đồ kiểm soát mẫu "Control Chart Anatomy" minh họa](spc/fig1-control-chart-anatomy.png)

_Hình 1. SPC tách nhiễu tự nhiên của quá trình ra khỏi các tín hiệu cần kỹ sư điều tra._

> **Phân biệt quan trọng:** Giới hạn kiểm soát (control limits) được tính ra từ dữ liệu của quá trình. Giới hạn quy cách (specification limits) là yêu cầu của khách hàng, của thiết kế hoặc của sản phẩm. Một quá trình có thể nằm trong tầm kiểm soát nhưng vẫn không đạt năng lực (in control nhưng not capable).

## 1. Các định nghĩa cốt lõi của SPC

SPC sử dụng dữ liệu theo trình tự thời gian để phân biệt biến thiên do nguyên nhân thông thường (common-cause) với biến thiên do nguyên nhân đặc biệt (special-cause). Mục tiêu không phải là phản ứng với mọi điểm dữ liệu; mục tiêu là chỉ phản ứng khi mẫu hình (pattern) trở nên khó xảy ra về mặt thống kê trong điều kiện quá trình hoạt động bình thường.

| Thuật ngữ | Ý nghĩa đối với kỹ sư |
| --- | --- |
| Quá trình (Process) | Một thao tác lặp lại, biến đổi vật liệu, thông tin hoặc trạng thái sản phẩm. Ví dụ: CD của bước etch, tốc độ gọt CMP, độ dày màng, overlay, mật độ lỗi. |
| Nguyên nhân thông thường (Common cause) | Biến thiên tự nhiên, đã được dự kiến của một quá trình ổn định. Nó luôn hiện diện trừ khi quá trình được cải tiến về căn bản. |
| Nguyên nhân đặc biệt (Special cause) | Biến thiên từ một nguồn có thể quy được, như lỗi thiết bị, thay đổi công thức (recipe), lệch hiệu chuẩn, vấn đề nguyên liệu, thao tác của người vận hành, tình trạng buồng (chamber), hoặc sai số đo. |
| Biểu đồ kiểm soát (Control chart) | Đồ thị theo trình tự thời gian, có một đường tâm và các giới hạn kiểm soát được tính theo thống kê. Dùng để phát hiện các mẫu hình không ngẫu nhiên. |
| Đường tâm (Center line — CL) | Giá trị trung bình kỳ vọng của quá trình hoặc trung bình của thống kê trong giai đoạn cơ sở (baseline) ổn định. |
| UCL / LCL | Giới hạn kiểm soát trên và dưới, thường đặt tại CL ± 3 sigma của thống kê được vẽ. |
| Giới hạn quy cách (Specification limits) | USL và LSL xác định các yêu cầu chấp nhận được của sản phẩm. Chúng không được tính từ biểu đồ kiểm soát. |
| Nhóm con hợp lý (Rational subgroup) | Một nhóm mẫu được chọn sao cho biến thiên bên trong nhóm con đại diện cho biến thiên thông thường ngắn hạn, còn khác biệt giữa các nhóm con phản ánh các dịch chuyển theo thời gian. |
| Trong tầm kiểm soát (In control) | Không có vi phạm quy tắc SPC nào; hành vi của quá trình ổn định về mặt thống kê. |
| Đạt năng lực (Capable) | Độ phân tán và mức căn giữa của quá trình nằm gọn trong giới hạn quy cách với biên dự phòng đầy đủ. |

> **Tư duy của kỹ sư:** Một tín hiệu nguyên nhân đặc biệt là lời nhắc đi điều tra quá trình, chứ không phải bằng chứng có lỗi. Trước hết hãy xác minh phép đo và bối cảnh dữ liệu, sau đó ngăn chặn vật liệu nếu cần.


## 2. Lựa chọn và đọc biểu đồ kiểm soát

Loại biểu đồ phụ thuộc vào cái gì được đo và mẫu được nhóm như thế nào. Luôn chọn biểu đồ *trước khi* đi tìm cảnh báo, và tránh đổi loại biểu đồ chỉ vì kết quả trông đẹp hơn.

| Biểu đồ | Khi nào dùng | Cách diễn giải chính |
| --- | --- | --- |
| I-MR | Một giá trị mỗi mốc thời gian: một trung bình lô, một thông số wafer, sản lượng theo ngày | Biểu đồ Individual theo dõi mức (level); Moving range theo dõi biến thiên ngắn hạn. |
| X̄-R | Nhóm con nhỏ, thường n = 2 đến 10 | X̄ theo dõi trung bình nhóm con; R theo dõi khoảng biến thiên trong nhóm con. |
| X̄-S | Nhóm con lớn hơn, thường n ≥ 10 | Dùng độ lệch chuẩn nhóm con thay cho khoảng biến thiên (range). |
| p / np | Đơn vị lỗi hoặc đạt/không đạt | Biểu đồ p cho tỷ lệ lỗi; biểu đồ np cho số lượng lỗi với cỡ mẫu cố định. |
| c / u | Số lỗi trên mỗi đơn vị hoặc diện tích | Biểu đồ c cho cỡ cơ hội cố định; biểu đồ u cho cỡ cơ hội thay đổi. |

### Công thức giới hạn kiểm soát cơ bản

| Trường hợp | Công thức |
| --- | --- |
| Tổng quát | Giới hạn kiểm soát = CL ± 3 × sai số chuẩn của thống kê được vẽ |
| Biểu đồ Individuals | CL = X̄,  UCL = X̄ + 3σ_within,  LCL = X̄ − 3σ_within |
| Sigma cho I-MR | σ_within = MR̄ / 1.128  khi độ dài moving range bằng 2 |
| Lối tắt cho biểu đồ I | UCL = X̄ + 2.66 × MR̄,  LCL = X̄ − 2.66 × MR̄ |
| Biểu đồ X̄-R | Giới hạn X̄: X̄̄ ± A2 × R̄;  giới hạn R: từ D3 × R̄ đến D4 × R̄ |
| Biểu đồ X̄-S | Giới hạn X̄: X̄̄ ± A3 × S̄;  giới hạn S: từ B3 × S̄ đến B4 × S̄ |

> **Đừng tự động tính lại giới hạn:** Hãy "đóng băng" (freeze) các giới hạn sau khi một giai đoạn cơ sở ổn định đã được phê duyệt. Chỉ tính lại sau một thay đổi quá trình có chủ đích, một cải tiến đã được ghi nhận, hoặc một lần thiết lập lại cơ sở (re-baseline) đã được phê duyệt chính thức.


## 3. Quy tắc Nelson cho nguyên nhân đặc biệt: Quy tắc 1–4

Các quy tắc Nelson là những phép kiểm tra mẫu hình áp dụng cho biểu đồ kiểm soát. Chúng làm tăng độ nhạy vượt ra ngoài việc chỉ kiểm tra vi phạm UCL/LCL đơn thuần. Một nhà máy có thể chọn một tập hợp con các quy tắc để cân bằng giữa khả năng phát hiện và tỷ lệ báo động giả.

![Bốn biểu đồ con minh họa Quy tắc Nelson 1-4: Rule 1 — một điểm vượt 3σ; Rule 2 — 9 điểm cùng phía đường tâm; Rule 3 — 6 điểm tăng/giảm liên tục (xu hướng); Rule 4 — 14 điểm luân phiên lên xuống. Các dải vùng dựa trên các mức sigma từ đường tâm](spc/fig2-nelson-rules-1-4.png)

_Hình 2. Ví dụ trực quan về Quy tắc Nelson 1–4. Các vùng dựa trên các dải sigma tính từ đường tâm._

| Quy tắc | Mẫu hình cần phát hiện | Ý nghĩa thường gặp và phản ứng đầu tiên |
| --- | --- | --- |
| 1 | Một điểm cách đường tâm hơn 3σ. | Dịch chuyển lớn đơn lẻ hoặc điểm ngoại lai (outlier). Kiểm tra ngay tính hợp lệ của phép đo, các sự kiện thiết bị, công thức, trạng thái buồng và vật liệu bị ảnh hưởng. |
| 2 | Chín điểm liên tiếp nằm cùng một phía của đường tâm. | Dịch chuyển trung bình kéo dài. Tìm thay đổi setpoint, lệch hiệu chuẩn, đổi lô nguyên liệu, bảo trì, hoặc khác biệt giữa các buồng. |
| 3 | Sáu điểm liên tiếp tăng hoặc giảm liên tục. | Xu hướng hoặc trôi (trend/drift). Nguyên nhân thường gặp: hao mòn thiết bị, trôi nhiệt độ, seasoning, trôi endpoint, hóa chất lão hóa, hoặc trôi cảm biến. |
| 4 | Mười bốn điểm liên tiếp luân phiên lên và xuống. | Dao động có hệ thống. Có thể do điều khiển quá mức (over-control), vòng phản hồi mất ổn định, luân phiên giữa các thiết bị, vấn đề trình tự lấy mẫu, hoặc người vận hành điều chỉnh. |

---

## 4. Quy tắc Nelson cho nguyên nhân đặc biệt: Quy tắc 5–8

Các quy tắc 5–8 sử dụng các vùng sigma. Vùng C nằm trong ±1σ. Vùng B nằm giữa 1σ và 2σ. Vùng A nằm giữa 2σ và 3σ. Các điểm vượt quá 3σ nằm ngoài giới hạn kiểm soát.

![Bốn biểu đồ con minh họa Quy tắc Nelson 5-8](spc/fig3-nelson-rules-5-8.png)

_Hình 3. Ví dụ trực quan về Quy tắc Nelson 5–8. Các quy tắc này phát hiện dịch chuyển vừa phải, sự phân tầng (stratification) và hỗn hợp (mixtures)._

| Quy tắc | Mẫu hình cần phát hiện | Ý nghĩa thường gặp và phản ứng đầu tiên |
| --- | --- | --- |
| 5 | Hai trong ba điểm liên tiếp vượt 2σ về cùng một phía của đường tâm. | Dịch chuyển vừa phải trước khi có vi phạm 3σ. Xác nhận các sự kiện gần đây và rà soát các lô hoặc wafer lân cận. |
| 6 | Bốn trong năm điểm liên tiếp vượt 1σ về cùng một phía của đường tâm. | Dịch chuyển nhỏ nhưng dai dẳng. Kiểm tra tình trạng thiết bị, vật liệu đầu vào, công thức quá trình, sai lệch đo lường (metrology bias), và thay đổi môi trường. |
| 7 | Mười lăm điểm liên tiếp nằm trong ±1σ của đường tâm. | Quá ít biến thiên. Có thể do phân tầng, làm trơn dữ liệu, làm tròn, nhóm con sai, hoặc vấn đề độ phân giải của phép đo. |
| 8 | Tám điểm liên tiếp nằm ngoài ±1σ, không có điểm nào trong Vùng C. | Quá trình hỗn hợp hoặc hai trạng thái. Kiểm tra buồng/sản phẩm/công thức/người vận hành/chế độ đo bị trộn lẫn, hoặc các hiệu ứng nhóm ẩn. |

> **Kích hoạt OCAP:** Khi bất kỳ quy tắc Nelson nào đã được phê duyệt bị kích hoạt, hãy tuân theo Kế hoạch hành động khi mất kiểm soát (Out-of-Control Action Plan) tại chỗ: xác minh dữ liệu, ngăn chặn rủi ro, xác định nguyên nhân, khắc phục, ghi nhận, và theo dõi quá trình phục hồi.


## 5. Các chỉ số năng lực và hiệu năng

Biểu đồ kiểm soát trả lời câu hỏi về *sự ổn định*. Các chỉ số năng lực (capability) và hiệu năng (performance) trả lời câu hỏi về *mức phù hợp với quy cách*. Chỉ dùng các chỉ số năng lực sau khi đã xác nhận quá trình ổn định hợp lý và hệ thống đo lường chấp nhận được.

![Đồ thị "Capability Links Process Spread and Centering to Specifications"](spc/fig4-capability-distribution.png)

_Hình 4. Cp/Pp đo độ phân tán so với bề rộng quy cách; Cpk/Ppk còn "phạt" thêm khi quá trình lệch tâm._

| Chỉ số | Công thức | Ý nghĩa |
| --- | --- | --- |
| Cp | (USL − LSL) / (6σ_within) | Năng lực tiềm năng dùng biến thiên ngắn hạn trong quá trình. Giả định đã căn giữa vì nó bỏ qua vị trí của trung bình. |
| Cpu | (USL − X̄) / (3σ_within) | Năng lực phía trên, dùng sigma within. |
| Cpl | (X̄ − LSL) / (3σ_within) | Năng lực phía dưới, dùng sigma within. |
| Cpk | min(Cpu, Cpl) | Năng lực ngắn hạn thực tế, bao gồm mức căn giữa (Cpk ≤ Cp). |
| Pp | (USL − LSL) / (6σ_overall) | Hiệu năng quá trình tổng thể, bao gồm cả trôi và dịch chuyển dài hạn. |
| Ppu | (USL − X̄) / (3σ_overall) | Hiệu năng phía trên, dùng sigma overall. |
| Ppl | (X̄ − LSL) / (3σ_overall) | Hiệu năng phía dưới, dùng sigma overall. |
| Ppk | min(Ppu, Ppl) | Hiệu năng dài hạn thực tế, bao gồm mức căn giữa và biến thiên tổng thể (Ppk ≤ Pp). |

**Ghi chú về ký hiệu và cách dùng:**
- X̄ = trung bình quá trình, USL = giới hạn quy cách trên, LSL = giới hạn quy cách dưới.
- σ_within = độ lệch chuẩn ngắn hạn / trong nhóm con.
- σ_overall = độ lệch chuẩn tính từ toàn bộ dữ liệu cá thể trong suốt giai đoạn nghiên cứu.
- Các chỉ số năng lực chỉ nên được diễn giải sau khi biểu đồ kiểm soát cho thấy quá trình ổn định về mặt thống kê.
- Với quy cách một phía, Cp và Pp thường không có ý nghĩa. Hãy dùng Cpu/Cpl hoặc Ppu/Ppl cho phía liên quan.

Một số dấu hiệu cần lưu ý:

- **Cp lớn hơn Cpk nhiều:** độ phân tán của quá trình có thể chấp nhận được, nhưng trung bình chưa được căn giữa.
- **Cpk lớn hơn Ppk:** kiểm soát ngắn hạn tốt hơn hiệu năng dài hạn; hãy điều tra trôi, dịch chuyển, hoặc quần thể bị trộn lẫn.
- **Ppk dưới mức yêu cầu:** khách hàng nhìn thấy rủi ro dài hạn quá lớn, ngay cả khi năng lực ngắn hạn trông có vẻ chấp nhận được.

| Giá trị / khoảng Cpk | Mức sigma tương đương | Xếp loại quá trình | Diễn giải kỹ thuật và hành động điển hình |
| --- | --- | --- | --- |
| < 0.67 | < 2σ | Rất kém / không đạt năng lực | Xác suất cao cho ra sản phẩm ngoài quy cách. Áp dụng ngăn chặn, xác minh hệ thống đo, dừng tự động xuất hàng nếu là CTQ, và truy tìm nguyên nhân gốc rễ khẩn cấp. |
| 0.67 đến 0.99 | 2 đến < 3σ | Kém | Biến thiên hoặc mức căn giữa không chấp nhận được cho sản xuất. Cải thiện độ ổn định thiết bị, công thức, kiểm soát vật liệu và đo lường trước khi dựa vào SPC để xuất hàng. |
| 1.00 đến 1.32 | 3 đến < 4σ | Cận biên / tối thiểu | Tại Cpk = 1.0, trung bình cách giới hạn quy cách gần nhất khoảng 3σ. Có thể đạt quy cách khi ổn định, nhưng biên dự phòng cho trôi rất hạn chế. Theo dõi sát và cải thiện năng lực. |
| 1.33 đến 1.49 | 4 đến < 4.5σ | Tốt / đạt năng lực | Mục tiêu tối thiểu thông dụng cho nhiều quá trình sản xuất ổn định. Tiếp tục SPC và OCAP; điều tra mọi xu hướng hoặc dịch chuyển trước khi nó "ăn mòn" biên năng lực. |
| 1.50 đến 1.67 | 4.5 đến < 5σ | Rất tốt | Năng lực mạnh với biên dự phòng tốt hơn cho nhiễu quá trình bình thường và các trôi nhỏ. Ưu tiên cho các thông số quan trọng và sản xuất lượng lớn đã trưởng thành. |
| 1.67 đến 1.99 | 5 đến < 6σ | Xuất sắc | Quá trình rất đạt năng lực. Thường dùng làm mục tiêu cho các thông số quan trọng-với-chất-lượng (CTQ), các chỉ số nhạy cảm với khách hàng, và phòng ngừa sự cố tốn kém. |
| ≥ 2.00 | ≥ 6 sigma | Đẳng cấp thế giới / đạt Six Sigma | Năng lực rất vững nếu dữ liệu chuẩn, đại diện và quá trình ổn định. Duy trì giới hạn kiểm soát, định kỳ tái xác nhận năng lực, và tránh điều chỉnh quá mức. |


## 6. Quy trình triển khai SPC trong thực tế

![Sơ đồ "SPC Deployment Loop" gồm 6 khối nối tiếp bằng mũi tên: 1. Define CTQ & sampling plan → 2. Confirm MSA & data integrity → 3. Baseline stable control limits → 4. Monitor chart + Nelson rules → 5. OCAP: contain, correct, document → 6. Review capability Cp/Cpk/Pp/Ppk](spc/fig6-spc-deployment-loop.png)

_Hình 6. SPC là một hệ thống vòng kín, không chỉ là một biểu đồ trên dashboard._

| Bước | Hành động của kỹ sư |
| --- | --- |
| 1. Định nghĩa CTQ | Chọn các thông số quan trọng-với-chất-lượng hoặc quan trọng-với-quá-trình (CTQ). Ví dụ: CD mean, overlay X/Y, độ dày màng, Rs, mật độ lỗi, tốc độ gọt CMP. |
| 2. Xác nhận MSA | Trước khi làm SPC, hãy xác minh phân tích hệ thống đo lường (MSA): độ lặp lại, độ tái lập, hiệu chuẩn, độ phân giải, và khớp giữa các thiết bị. |
| 3. Chọn biểu đồ | Dùng I-MR, X̄-R, X̄-S, p/np, c/u dựa trên loại dữ liệu và thiết kế lấy mẫu. |
| 4. Thiết lập cơ sở | Dùng một giai đoạn được biết là ổn định. Chỉ loại bỏ dữ liệu nguyên nhân đặc biệt đã được ghi nhận khi có lý do chính đáng. |
| 5. Đóng băng giới hạn | Phê duyệt các giới hạn và dùng chúng một cách nhất quán. Không tính lại sau mỗi lần chạy. |
| 6. Áp dụng quy tắc Nelson | Giám sát các quy tắc đã được phê duyệt; định tuyến cảnh báo tới đúng người phụ trách kèm mức độ nghiêm trọng rõ ràng. |
| 7. Thực thi OCAP | Kế hoạch hành động khi mất kiểm soát (OCAP): xác minh dữ liệu, dừng hoặc giữ vật liệu nếu cần, xác định nguyên nhân gốc rễ, khắc phục, xuất hàng, và ghi nhận. |
| 8. Rà soát năng lực | Tính Cp/Cpk/Pp/Ppk sau khi đã chứng minh được độ ổn định. Theo dõi năng lực sau các dự án cải tiến. |

> **Thực hành SPC sai cách:** Đừng bao giờ "vá" SPC bằng cách nới rộng giới hạn, ém các quy tắc gây bất tiện, trộn các sản phẩm khác loại, hoặc xóa điểm dữ liệu mà không có lý do nguyên nhân đặc biệt được ghi nhận.

## 7. Ví dụ thực hành: SPC cho độ dày màng

**Tình huống:** Một màng PECVD có giá trị mục tiêu khoảng 100 nm với LSL = 97 nm và USL = 103 nm. Một biểu đồ kiểm soát theo tuần cho thấy một giai đoạn cơ sở ổn định, sau đó xuất hiện chín trung bình lô liên tiếp nằm trên đường tâm sau khi bảo trì buồng.

![Biểu đồ "Semiconductor Example: Film Thickness Mean Shift"](spc/fig7-film-thickness-example.png)

_Hình 7. Ví dụ tín hiệu: chín điểm nằm trên đường tâm sau một sự kiện bảo trì_

| Hạng mục | Kết quả / diễn giải |
| --- | --- |
| Tín hiệu quan sát trên biểu đồ | Quy tắc Nelson 2: chín điểm liên tiếp trên CL. Nhiều khả năng có dịch chuyển trung bình dù không điểm nào vượt UCL. |
| Kiểm tra ngay | Xác nhận công thức đo, trình tự lấy mẫu, hỗn hợp lô/sản phẩm, ID buồng, hồ sơ bảo trì, các lô seasoning, hiệu chuẩn lưu lượng khí, và phiên bản công thức. |
| Ngăn chặn | Giữ hoặc gắn cờ các lô kể từ điểm đầu tiên của chuỗi nếu thông số là CTQ hoặc gần ngưỡng rủi ro quy cách. |
| Dữ liệu đầu vào tính năng lực | USL = 103, LSL = 97, X̄ = 101.1, σ_within = 0.55, σ_overall = 0.75 |
| Cp | Cp = (103 − 97) / (6 × 0.55) = **1.82** |
| Cpk | Cpk = min((103 − 101.1)/(3 × 0.55), (101.1 − 97)/(3 × 0.55)) = min(1.15, 2.48) = **1.15** |
| Pp | Pp = (103 − 97) / (6 × 0.75) = **1.33** |
| Ppk | Ppk = min((103 − 101.1)/(3 × 0.75), (101.1 − 97)/(3 × 0.75)) = min(0.84, 1.82) = **0.84** |

> **Kết luận:** Quá trình có độ phân tán ngắn hạn hợp lý, nhưng bị lệch về phía USL và hiệu năng dài hạn yếu. Hành động khắc phục nên tập trung vào việc căn giữa lại (recentering) và loại bỏ dịch chuyển sau bảo trì.


## 8. Bảng tra nhanh cho kỹ sư (Cheat Sheet)

| Chủ đề | Hướng dẫn thực tế |
| --- | --- |
| Trước khi dùng SPC | Xác nhận định nghĩa CTQ, kế hoạch lấy mẫu, tính toàn vẹn dữ liệu, năng lực đo lường, loại biểu đồ, và cách nhóm sản phẩm/thiết bị. |
| Khi một biểu đồ báo động | Đừng điều chỉnh một cách mù quáng. Xác minh điểm dữ liệu, kiểm tra bối cảnh, ngăn chặn rủi ro, tìm nguyên nhân quy được, khắc phục và ghi nhận. |
| Khi nào tính lại giới hạn | Chỉ sau khi phê duyệt cơ sở ổn định, thiết kế lại quá trình, cải tiến có chủ đích, hoặc thay đổi đã được ghi nhận trong hành vi quá trình. |
| Khi nào năng lực có giá trị | Sau khi quá trình ổn định, dữ liệu đại diện, giới hạn quy cách đúng, và sai số hệ thống đo chấp nhận được. |
| Lỗi thường gặp 1 | Coi giới hạn quy cách như giới hạn kiểm soát, hoặc coi giới hạn kiểm soát như giới hạn chấp nhận sản phẩm. |
| Lỗi thường gặp 2 | Trộn sản phẩm, thiết bị, buồng, công thức hoặc thiết bị đo vào cùng một biểu đồ mà không có logic nhóm con hợp lý. |
| Lỗi thường gặp 3 | Chỉ báo cáo Cp. Cp bỏ qua mức căn giữa; luôn xem thêm Cpk hoặc Cpu/Cpl theo từng phía. |
| Lỗi thường gặp 4 | So sánh Cpk và Ppk mà không hiểu nguồn sigma. Sigma within và sigma overall trả lời những câu hỏi khác nhau. |

### Mẫu báo cáo SPC tối thiểu

| Trường báo cáo | Nội dung cần đưa vào |
| --- | --- |
| Thông số / sản phẩm / thiết bị | Xác định chính xác biểu đồ đại diện cho quần thể nào. |
| Loại biểu đồ và cách nhóm con | Giải thích vì sao biểu đồ phù hợp với dữ liệu. |
| Giai đoạn cơ sở và giới hạn | Liệt kê ngày cơ sở, CL, UCL, LCL, và lý do loại trừ (nếu có). |
| Tập quy tắc Nelson | Nêu rõ quy tắc nào đang được kích hoạt và vì sao. |
| Tín hiệu mới nhất và hành động | Liệt kê ngày/giờ cảnh báo, quy tắc, vật liệu bị ảnh hưởng, nguyên nhân gốc rễ, ngăn chặn, hướng xử lý, và người phụ trách. |
| Tóm tắt năng lực | Báo cáo X̄, σ_within, σ_overall, Cp, Cpk, Pp, Ppk, và phần diễn giải. |

> **Nhắc nhở cuối cùng:** SPC hiệu quả nhất khi kỹ sư tôn trọng trình tự thời gian, logic nhóm con, các giới hạn đã đóng băng, kỷ luật về quy tắc Nelson, và phản ứng OCAP đã được ghi nhận.


*Toàn bộ hình ảnh được lưu trong thư mục `spc/`, cùng cấp với file markdown này. Chữ trong các hình giữ nguyên tiếng Anh theo bản gốc; phần chú thích bên dưới mỗi hình đã được dịch và diễn giải đầy đủ bằng tiếng Việt. Tài liệu gốc đánh số Hình 1, 2, 3, 4, 6, 7 (không có Hình 5).*

## Cross-references

<p>Articles in this wiki — <a href="#process-characterization">Process Characterization</a> (§1), <a href="#msa">MSA</a> (§4), <a href="#pcm-wat">PCM/WAT</a> (§5), <a href="#apc">APC</a> (§20).</p>

## References

1. May, G. S. and Spanos, C. J., Fundamentals of Semiconductor Manufacturing and Process Control, Wiley-IEEE Press, 2006, Chapters 3–4 (Statistical Process Control, control charts, Western Electric rules).
2. JEDEC Solid State Technology Association, JEDEC Publication No. 132A.01: Process Characterization Guideline, December 2022, §4.1.6 (process repeatability and SPC linkage), Annex E.