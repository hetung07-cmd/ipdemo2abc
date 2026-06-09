Hệ thống **defect inspection & review** là tuyến phòng thủ chủ động của fab: phát hiện, phân loại và truy nguồn gốc khuyết tật _trước_ khi chúng kịp ăn mòn yield trên diện rộng. Khác với Failure Analysis (hậu kỳ, phá hủy, chạy trên die đã fail), inspection chạy **in-line, không phá hủy**, trên wafer đang sản xuất — mục tiêu là bắt sớm, đếm đúng và phản hồi ngược về tool gây lỗi trong vòng vài giờ.

> Triết lý cốt lõi: _bạn không thể kiểm soát thứ bạn không đo được_. Một defect excursion không bị phát hiện trong 4 giờ ở lớp critical có thể quét hỏng hàng chục lot trước khi yield cuối line báo động.

## Hai bước: Inspection và Review

Quy trình luôn tách làm hai công đoạn riêng, dùng hai loại tool khác nhau:

| Bước | Câu hỏi trả lời | Tool điển hình | Đặc điểm |
|---|---|---|---|
| **Inspection** | _Có defect không? Ở đâu? Bao nhiêu?_ | Optical (BF/DF), E-beam | Throughput cao, quét toàn wafer, trả về tọa độ (defect map) |
| **Review** | _Defect này là cái gì?_ | SEM review (kèm EDX) | Throughput thấp, chỉ soi lại các điểm inspection đã đánh dấu |

Logic vận hành: inspection tool quét nhanh ra một danh sách tọa độ (KLARF/defect file), review tool nhận danh sách đó và **đến đúng từng điểm** chụp ảnh độ phân giải cao để phân loại. Không ai review toàn wafer — quá chậm.

## Optical Inspection: Brightfield vs Darkfield

Đây là chủ lực về throughput, dựa trên tương phản quang học.

### Brightfield (BF)
Thu ánh sáng **phản xạ trực tiếp** (specular). Defect hiện ra như điểm tối/sáng lệch so với nền pattern. Mạnh ở defect có tương phản vật liệu hoặc thay đổi chiều cao trên vùng có pattern (pattern defect: bridge, missing pattern, residue).

### Darkfield (DF)
Chặn tia phản xạ chính, chỉ thu **ánh sáng tán xạ** (scattered) từ defect. Nền tối, defect sáng rực. Cực nhạy với particle và defect nhỏ trên vùng phẳng (bề mặt film, vùng ít pattern). Đây là lý do DF rất hợp để giám sát các lớp blanket như sau bước deposition màng.

| Tiêu chí | Brightfield | Darkfield |
|---|---|---|
| Tín hiệu | Phản xạ specular | Tán xạ |
| Mạnh ở | Pattern defect, vùng nhiều cấu trúc | Particle, vùng phẳng/blanket |
| Độ nhạy particle nhỏ | Trung bình | Cao |
| Nhiễu nền pattern | Thấp | Cao (color noise trên pattern dày) |

> Trên thực tế nhiều recipe dùng cả hai chế độ kết hợp; lựa chọn phụ thuộc loại lớp (memory array đều đặn vs logic ngẫu nhiên) và loại defect cần bắt.

Về thiết bị thực tế, dòng optical chủ lực hiện nay là **broadband plasma (BBP)** của KLA — dùng nguồn sáng plasma kích bằng laser phủ dải rộng DUV/UV thay cho laser đơn sắc, cho tương phản vật liệu tốt và nhiễu nền thấp. Series 39xx (Gen 5) dùng dải bước sóng SR-DUV xuống tới 193nm và đã được công bố bắt được defect dưới 10nm <span class="cite">[1]</span>; bản tốt nhất KLA nêu là một protrusion cỡ 5nm <span class="cite">[2]</span>. Series 29xx bổ trợ ở dải bước sóng dài hơn để tối ưu tương phản cho từng lớp <span class="cite">[1]</span>. Cả hai dòng đều quét full-wafer trong khoảng một giờ, cho phép thu nhanh dữ liệu defect ở mức wafer/lot <span class="cite">[2]</span>. Dòng darkfield laser-scanning **Puma** (vd 9980) chạy throughput cao hơn nữa, hợp giám sát lớp film/etch/CMP <span class="cite">[1]</span>.

## E-beam Inspection (EBI)

Khi defect nhỏ hơn giới hạn nhiễu xạ quang học (xuống vài chục nm và nhỏ hơn), optical "mù". E-beam inspection dùng chùm điện tử quét, độ phân giải cao hơn nhiều nhưng throughput thấp hơn hẳn — nên dùng có chọn lọc.

Giá trị riêng của EBI là bắt được **voltage contrast (VC) defect** — loại defect _điện_ mà optical không thấy: ví dụ một via hở mạch (open) hay rò (leakage) sẽ tích điện khác với cấu trúc bình thường, hiện lên sáng/tối bất thường dưới chùm e-beam dù bề mặt vật lý trông hoàn hảo. Đây là công cụ quý cho các lớp contact/via ở node tiên tiến.

> Lưu ý xu hướng: ở các node tiên tiến, optical tạo defect map dày đặc với tỉ lệ nuisance (báo động giả) cao — số lượng defect candidate đẩy sang e-beam review có thể tăng tới ~100 lần, khiến khâu phân loại trở thành nút thắt <span class="cite">[3]</span>.

## SEM Review & Auto Defect Classification (ADC)

Sau inspection, SEM review tool định vị lại từng defect và chụp ảnh phân giải cao. Việc phân loại defect (particle, scratch, residue, bridge, void, crystal...) nếu làm tay sẽ không kịp với hàng nghìn defect/ngày, nên fab dùng **ADC — Auto Defect Classification**: thuật toán (ngày nay phần nhiều là ML/deep learning) tự gán defect vào các bin đã định nghĩa.

Nhiều tool review tích hợp **EDX** để phân tích thành phần nguyên tố của particle — biết particle là Si, kim loại hay polymer giúp truy ngược tới đúng nguồn (tool, chemical, vật liệu buồng).

## Defect Sampling: Random vs Pattern

Không bao giờ inspect 100% wafer của 100% lot — quá tốn thời gian và tool. Fab dùng chiến lược lấy mẫu:

- **Random sampling**: chọn ngẫu nhiên wafer/lot để giám sát baseline.
- **Skip-lot / adaptive**: tăng tần suất inspect khi tool vừa qua PM hoặc khi có cảnh báo, giảm khi quá trình ổn định.
- **Hot-lot 100%**: lot R&D, lot điều tra excursion thì inspect dày.

Cân bằng ở đây là **cost-of-inspection vs cost-of-escape**: inspect quá nhiều thì nghẽn throughput, quá ít thì excursion lọt lưới.

## Defect Source Analysis (DSA) và vòng phản hồi

Giá trị thật của inspection nằm ở khâu **truy nguồn**. Vài kỹ thuật chủ chốt:

- **Defect map overlay**: chồng defect map qua nhiều lớp để phân biệt defect _mới phát sinh_ (adder) ở lớp này với defect đã có từ lớp trước (prior-layer).
- **Signature analysis**: hình thái phân bố defect trên wafer kể câu chuyện về nguồn — vành đai mép wafer gợi ý vấn đề edge/handling; vệt tròn đồng tâm gợi ý spin coat; cụm theo hướng gợi ý scratch do robot/CMP.
- **Commonality analysis**: đối chiếu lot bị defect với lịch sử tool đã chạy qua, khoanh vùng tool nghi vấn.

> Vòng lặp lý tưởng: inspection bắt adder → SEM review + EDX phân loại → DSA khoanh tool → kỹ thuật can thiệp (PM, đổi chemical) → inspection xác nhận đã sạch. Đây chính là cơ chế nuôi **Yield Learning**.

## Thiết bị thực tế trong fab

Hai nhà cung cấp thống trị mảng này là **KLA** (mạnh nhất ở optical inspection) và **Applied Materials** (mạnh ở e-beam review/inspection).

| Hạng mục | Tool điển hình | Đặc điểm chính |
|---|---|---|
| Optical inspection (BF/DF) | KLA 39xx / 29xx (broadband plasma) | Quét full-wafer ~1h, bắt defect sub-10nm <span class="cite">[1][2]</span> |
| Darkfield laser-scan | KLA Puma 99xx | Throughput cao, giám sát film/etch/CMP <span class="cite">[1]</span> |
| Unpatterned (blanket) | KLA Surfscan SP series | Giám sát particle trên wafer trống/màng blanket <span class="cite">[4]</span> |
| E-beam review + ADC | KLA eDRX1 / eDR7380 | Liên kết trực tiếp với inspector quang để truy nguồn defect <span class="cite">[4]</span> |
| E-beam review (CFE) | AMAT SEMVision G7 / H20 | Cold field emission, phân giải sub-nm, AI classification <span class="cite">[5][6]</span> |
| E-beam inspection | AMAT PROVision | Phát hiện defect chôn sâu bằng backscattered electron <span class="cite">[7]</span> |

Hai điểm đáng chú ý về thế hệ tool mới:

- KLA tích hợp **design-aware** (đưa thông tin layout chip vào recipe) để lọc nhiễu nền pattern và tăng tính liên quan tới yield <span class="cite">[1]</span>. Các tool e-beam review đời mới như eDRX1 còn dựng được defect pareto đầy đủ trong một lần đo (Simul-6), tăng tốc truy nguồn excursion <span class="cite">[4]</span>.
- AMAT SEMVision H20 dùng **cold field emission (CFE) thế hệ 2** đạt phân giải dưới nm, kết hợp AI nhận dạng ảnh để tách defect thật khỏi nuisance — hướng tới các kiến trúc 3D như GAA ở node 2nm trở xuống <span class="cite">[5][6]</span>. Công nghệ Elluminator (backscattered electron) cho phép soi defect/void chôn sâu mà trước đây phải dùng TEM (chậm, phá hủy) <span class="cite">[7]</span>.

> Bối cảnh 28nm của Green Fab: node 28nm là mature node, defect critical đa phần vẫn nằm trong tầm bắt của optical BBP đời 29xx/39xx, e-beam review chủ yếu phục vụ truy nguồn và các lớp contact/via. Không nhất thiết cần tool e-beam đời H20 (vốn nhắm sub-2nm) — đây là điểm cần cân nhắc khi lập kế hoạch capex inspection.

## Quan hệ với các bài khác

- Defect data là đầu vào trực tiếp cho **Yield Learning** (mô hình defect density → yield).
- Defect bất thường vượt ngưỡng kích hoạt cảnh báo kiểu **SPC** trên chỉ số defect count.
- Khi cần mổ xẻ vật lý một defect đã xác định, chuyển sang **Failure Analysis (FA)** (cross-section, TEM).
- Particle nguồn từ buồng tool liên quan trực tiếp tới kiểm soát contamination trong cleanroom.

---

## References

1. KLA-Tencor, _Introduces Comprehensive Wafer Inspection and Review Portfolio_ (39xx/29xx broadband plasma, Puma 9980), 2016. <a href="https://ir.kla.com/news-events/press-releases/detail/121/kla-tencor-introduces-comprehensive-wafer-inspection-and" target="_blank">link</a>
2. Semiconductor Engineering, _E-beam Vs. Optical Inspection_ (3900 Series, sub-10nm / 5nm). <a href="https://semiengineering.com/e-beam-vs-optical-inspection/" target="_blank">link</a>
3. Applied Materials, _SEMVision H20 Defect Analysis_ (nuisance rate, ~100X defect candidate). <a href="https://www.appliedmaterials.com/us/en/product-library/semvision-h20-defect-analysis.html" target="_blank">link</a>
4. KLA, _Defect Inspection & Review_ (eDRX1, eDR7380, Surfscan, Simul-6, DualSENS). <a href="https://www.kla.com/products/chip-manufacturing/defect-inspection-review" target="_blank">link</a>
5. Applied Materials, _Accelerates Chip Defect Review with Next-Gen eBeam System_ (SEMVision H20, CFE gen-2). <a href="https://ir.appliedmaterials.com/news-releases/news-release-details/applied-materials-accelerates-chip-defect-review-next-gen-ebeam" target="_blank">link</a>
6. Applied Materials, _SEMVision H20 Defect Analysis_ (CFE, sub-nm resolution). <a href="https://www.appliedmaterials.com/us/en/product-library/semvision-h20-defect-analysis.html" target="_blank">link</a>
7. Applied Materials, _New Imaging Technology Speeds Process Development_ (SEMVision G7, PROVision 2E, Elluminator). <a href="https://www.appliedmaterials.com/us/en/blog/blog-posts/new-imaging-technology-speeds-process-development.html" target="_blank">link</a>
