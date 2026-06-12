# Ion Beam Etching (IBE) & RIBE: Nguyên lý, Ứng dụng và Hướng dẫn Thiết bị

NineScrolls Engineering · 22/3/2026 · Materials Science · đọc trong 16 phút

![Ion Beam Etching (IBE) & RIBE: Nguyên lý, Ứng dụng và Hướng dẫn Thiết bị](IBE/ibe-ribe-guide-cover-lg.png){width=700}

**Đối tượng đọc:** Kỹ sư quy trình làm việc với vật liệu từ tính, noble metal, hoặc các stack thin-film phức tạp; PI và quản lý phòng lab đang đánh giá giải pháp physical etching; các nhóm R&D trong spintronics, photonics, và MEMS cần patterning kiểm soát hư hại, không kén vật liệu (material-agnostic); và các nhóm mua sắm đang so sánh nền tảng IBE/RIBE với các phương án RIE và ICP-RIE.

### Tóm tắt nhanh (TL;DR)

- **Ion Beam Etching (IBE)** dùng một chùm ion trơ (thường là Ar⁺) năng lượng cao, được chuẩn trực (collimated), trích xuất từ một ion source riêng để sputter vật liệu khỏi substrate một cách vật lý. Vì chùm tia được tạo từ xa so với substrate, năng lượng ion và flux được _kiểm soát độc lập_ — lợi thế then chốt so với RIE truyền thống.
- **Reactive Ion Beam Etching (RIBE)** bổ sung khí phản ứng (O₂, CHF₃, Cl₂, v.v.) vào ion source, kết hợp sputtering vật lý với bay hơi hóa học (chemical volatilization) cho selectivity cao hơn và giảm redeposition trong khi vẫn giữ tính định hướng của chùm tia.
- IBE/RIBE vượt trội khi etch các vật liệu tạo sản phẩm etch _không bay hơi_ — noble metal (Pt, Au, Ir), hợp kim từ tính (NiFe, CoFe, CoFeB), và piezoelectric (PZT, LiNbO₃) — nơi RIE dựa trên plasma đơn giản là không thể tạo by-product thể khí.
- **Stage nghiêng/xoay (0–90°)** cho phép etch kiểm soát góc để tinh chỉnh sidewall profile và quản lý redeposition — yếu tố then chốt khi patterning magnetic tunnel junction (MTJ) dưới 100 nm.
- Hệ IBE/RIBE của NineScrolls cung cấp nguồn kiểu Kaufman (tới wafer 6″) và RF ion source (tới wafer 12″), base pressure <7×10⁻⁷ Torr, tilt 0–90°, xoay 1–10 rpm, và độ bất đồng đều màng <5%.

## 1. Ion Beam Etching là gì?

Ion Beam Etching (IBE), còn gọi là ion milling, là kỹ thuật dry-etching vật lý trong đó một chùm ion năng lượng cao, rộng và được chuẩn trực, được hướng vào substrate để loại bỏ vật liệu bằng sputtering truyền động lượng (momentum-transfer). Khác với reactive ion etching (RIE), nơi substrate nằm ngập trong plasma, IBE tạo ion trong một ion source riêng và gia tốc chúng qua các extraction grid về phía mục tiêu. Kiến trúc tách rời (decoupled) này mang lại một số lợi thế nền tảng:
- **Kiểm soát độc lập năng lượng ion và flux:** Beam voltage đặt năng lượng (thường 200–1200 eV), trong khi công suất nguồn và lưu lượng khí đặt mật độ dòng. Trong RIE, các tham số này bị ràng buộc với nhau qua công suất RF và áp suất.
- **Substrate không phơi trong plasma:** Substrate chỉ "nhìn thấy" chùm ion định hướng, loại bỏ etch đẳng hướng do radical, hư hại tích điện do UV, và hiệu ứng bất đồng đều plasma.
- **Kiểm soát góc tới (angle-of-incidence):** Stage nghiêng và xoay cho phép chùm tia đập vào substrate ở bất kỳ góc nào từ 0° (vuông góc) tới 90° (sượt qua), giúp kỹ thuật hóa chính xác sidewall profile và dọn dẹp redeposition.
- **Tính phổ quát về vật liệu:** Vì sputtering thuần túy là vật lý, IBE có thể etch _bất kỳ vật liệu rắn nào_ bất kể nó có tạo sản phẩm etch bay hơi hay không — vốn là hạn chế định nghĩa của RIE và ICP-RIE.

Để so sánh trực tiếp ion milling với các phương pháp reactive, xem bài viết Reactive Ion Etching vs Ion Milling của chúng tôi.

## 2. Vật lý của Ion Source: Chùm tia được tạo ra thế nào

Ion source là trái tim của mọi hệ IBE. Vai trò của nó là ion hóa một khí làm việc (thường là argon) và trích xuất các ion thu được thành một chùm định hướng với năng lượng và mật độ dòng được kiểm soát. Hai kiến trúc thống trị thị trường:

![So sánh kiến trúc ion source Kaufman DC vs RF](IBE/ibe-ribe-ion-source-comparison.png)

> Hình 1: Kiến trúc ion source Kaufman (DC) vs RF — nguồn Kaufman dùng filament cathode nhiệt phát xạ (thermionic) và giam giữ bằng từ trường, trong khi nguồn RF loại bỏ filament tiêu hao bằng cách dùng ghép cảm ứng RF để tạo plasma.

### 2.1 Ion Source kiểu Kaufman (phóng điện DC)

Được Harold Kaufman phát minh tại NASA vào thập niên 1960 cho động cơ đẩy tàu vũ trụ, nguồn Kaufman dùng một thermionic cathode (thường là filament tungsten hoặc LaB₆) phát electron vào buồng phóng điện. Các electron này bị giam giữ bởi từ trường dọc trục, làm tăng quãng đường đi và hiệu suất ion hóa. Plasma thu được sau đó được trích xuất qua một bộ multi-aperture grid:
- **Screen grid:** Giữ ở thế dương cao (beam voltage, 200–1500 V), định nghĩa ranh giới plasma
- **Accelerator grid:** Giữ ở thế âm (−100 tới −300 V), trích xuất và hội tụ ion thành các beamlet
- **Decelerator grid (tùy chọn):** Ở thế đất hoặc hơi dương, giảm độ phân kỳ ion phía hạ nguồn

Các beamlet trích xuất hợp nhất thành một chùm rộng, gần như đồng đều. Một neutralizer filament hoặc hollow-cathode phía hạ nguồn phát electron vào chùm tia để ngăn tích điện trên substrate cách điện.

**Ưu điểm:** Được hiểu rõ, đáng tin cậy, độ đồng đều chùm tia xuất sắc trên diện tích nhỏ–trung bình, bảo trì đơn giản (thay filament). **Hạn chế:** Tuổi thọ filament (thường 50–200 giờ tùy loại khí), khả năng mở rộng đường kính lớn hạn chế, nguy cơ nhiễm bẩn từ filament với các quy trình nhạy cảm.

### 2.2 RF Ion Source (ghép cảm ứng)

RF ion source loại bỏ hoàn toàn thermionic filament. Thay vào đó, một cuộn RF (thường 13,56 MHz) quấn quanh buồng phóng điện dielectric (quartz hoặc alumina) ghép năng lượng vào khí theo kiểu cảm ứng. Plasma mật độ cao thu được được trích xuất qua cùng hệ quang học multi-grid như nguồn Kaufman.

**Ưu điểm:** Không có filament tiêu hao (chu kỳ bảo trì dài hơn đáng kể), tương thích với khí phản ứng (O₂, CHF₃, Cl₂) mà không bị suy thoái filament, mở rộng được tới đường kính chùm lớn (hỗ trợ xử lý wafer 8″–12″), và không nhiễm bẩn kim loại từ nguồn. **Hạn chế:** Chi phí bộ nguồn RF cao hơn, impedance matching phức tạp hơn một chút, độ phân kỳ chùm nhỉnh hơn so với nguồn Kaufman đã tối ưu.

### Bảng so sánh Kaufman vs RF Ion Source

| Tham số | Nguồn Kaufman | RF Ion Source |
| --- | --- | --- |
| Phương pháp ion hóa | Phóng điện DC với thermionic cathode | RF inductively coupled plasma |
| Filament | Bắt buộc (W hoặc LaB₆); tuổi thọ 50–200 giờ | Không có (filament-free) |
| Tương thích khí phản ứng | Hạn chế (suy thoái filament) | Xuất sắc (không có filament để bị ăn mòn) |
| Đường kính chùm mở rộng được | Tới ~6″ | Tới ~12″ |
| Rủi ro nhiễm bẩn | Rủi ro thấp từ sputter kim loại filament (W) | Không đáng kể (buồng dielectric) |
| Độ đồng đều chùm | Xuất sắc (<5% trên diện tích chùm) | Tốt tới xuất sắc (<5% khi tối ưu) |
| Bảo trì | Thay filament mỗi 50–200 giờ | Kiểm tra/thay grid; chu kỳ dài hơn |
| Chi phí | Chi phí ban đầu thấp hơn | Cao hơn (bộ RF + matching network) |
| Phù hợp nhất cho | R&D, IBE wafer nhỏ, milling chỉ dùng Ar | Sản xuất, RIBE, wafer lớn, khí phản ứng |

## 3. IBE vs RIBE: Các chế độ vận hành

Một hệ IBE/RIBE có thể vận hành ở nhiều chế độ khác nhau tùy cấu hình cấp khí:

![So sánh các chế độ etch IBE, RIBE và CAIBE](IBE/ibe-ribe-etch-modes.png)

> Hình 2: So sánh ba chế độ ion beam etch — IBE dùng sputtering vật lý thuần Ar⁺, RIBE đưa khí phản ứng vào ion source, còn CAIBE cấp khí phản ứng riêng gần bề mặt substrate.

### 3.1 IBE thuần (Ion Milling)

Chỉ khí trơ (Ar, Xe, hoặc Kr) được cấp vào ion source. Việc loại bỏ vật liệu hoàn toàn bằng sputtering vật lý. Đây là chế độ được chọn cho các vật liệu có sản phẩm etch không bay hơi:
- **Hợp kim từ tính:** NiFe (Permalloy), CoFe, CoFeB, MnIr, PtMn — hóa học chlorine và fluorine không tạo hợp chất bay hơi với các nguyên tố này
- **Noble metal:** Pt, Au, Ir, Ru — trơ về mặt hóa học theo đúng định nghĩa
- **Oxide phức hợp:** PZT (PbZrTiO₃), BaTiO₃, LiNbO₃ — vật liệu đa thành phần nơi bay hơi hóa học chọn lọc sẽ gây mất cân bằng stoichiometry

Cái giá phải trả: sputtering thuần không có selectivity hóa học, nên mask bị ăn mòn nhanh hơn và redeposition của vật liệu bị sputter lên sidewall và bề mặt buồng là đáng kể. Tối ưu góc cẩn thận và xoay stage là thiết yếu. Về hóa học theo từng kim loại, lựa chọn mask, và kiểm soát ăn mòn sau etch trên toàn danh mục kim loại quy trình, xem Metal Etching Complete Guide.

### 3.2 Reactive Ion Beam Etching (RIBE)

Khí phản ứng (O₂, CHF₃, CF₄, Cl₂, hoặc hỗn hợp) được đưa _vào chính ion source_, tạo ra các ion phản ứng (O⁺, CF₃⁺, Cl⁺) trong chùm tia. Các ion này vừa sputter vừa phản ứng hóa học với substrate, tạo sản phẩm bay hơi được bơm hút đi.

**Lợi ích so với IBE thuần:**
- **Etch rate cao hơn** cho vật liệu tạo sản phẩm etch bay hơi (vd Si + chùm chứa F → SiF₄↑)
- **Selectivity cải thiện** giữa các lớp màng khác nhau
- **Giảm redeposition** vì by-product rời đi ở dạng khí thay vì tái lắng đọng thành màng rắn
- **Có thể dùng năng lượng ion thấp hơn** vì trợ lực hóa học bổ sung cho sputtering vật lý, giảm hư hại substrate

### 3.3 Chemically Assisted Ion Beam Etching (CAIBE)

Một biến thể gần gũi, trong đó khí phản ứng được đưa vào _tại substrate_ thay vì qua ion source. Chùm ion trơ cung cấp năng lượng hoạt hóa trong khi các phân tử khí phản ứng hấp phụ trên bề mặt cung cấp phần hóa học. CAIBE cho kiểm soát độc lập hơn nữa giữa năng lượng ion và flux hóa học, dù nó tăng độ phức tạp và ít được dùng hơn RIBE.

### Tổng hợp các chế độ vận hành

| Chế độ | Cấp khí | Cơ chế | Selectivity | Redeposition | Phù hợp nhất cho |
| --- | --- | --- | --- | --- | --- |
| IBE | Ar vào source | Sputtering vật lý | Kém (chỉ theo tỷ lệ sputter yield) | Cao | Kim loại từ tính, noble metal, oxide phức hợp |
| RIBE | Khí phản ứng vào source | Vật lý + hóa học (ion phản ứng) | Trung bình tới tốt | Trung bình | Dielectric, semiconductor, stack hỗn hợp |
| CAIBE | Ar vào source, khí phản ứng tại substrate | Vật lý + hóa học bề mặt | Tốt | Thấp tới trung bình | Etch facet III-V, endpoint chính xác |

## 4. IBE/RIBE vs RIE và ICP-RIE: Khi nào dùng cái gì

Lựa chọn giữa ion beam etching và etching dựa trên plasma phụ thuộc vào vật liệu, profile yêu cầu, mức chịu hư hại, và nhu cầu throughput. Dưới đây là so sánh thực dụng:

| Tiêu chí | IBE/RIBE | RIE | ICP-RIE |
| --- | --- | --- | --- |
| Ghép ion/plasma | Tách rời hoàn toàn (source tách khỏi substrate) | Ràng buộc (một RF duy nhất) | Tách rời một phần (ICP + bias RF) |
| Dải năng lượng ion | 200–1500 eV (định bởi grid) | 50–500 eV (self-bias) | 10–500 eV (kiểm soát bằng bias) |
| Kiểm soát góc | Tilt 0–90° đầy đủ + xoay | Chỉ vuông góc | Chỉ vuông góc |
| Vật liệu không bay hơi | Xuất sắc (thế mạnh chính) | Rất hạn chế | Hạn chế |
| Etch rate (Si, SiO₂) | Thấp (điển hình 10–50 nm/phút) | Trung bình (50–300 nm/phút) | Cao (100–1000+ nm/phút) |
| Selectivity | Thấp ở chế độ IBE; trung bình ở RIBE | Trung bình tới cao | Cao (nhờ hóa học) |
| Hư hại plasma/tích điện | Tối thiểu (chùm được trung hòa) | Trung bình | Thấp tới trung bình |
| Throughput | Thấp hơn (single-wafer, tốc độ chậm hơn) | Trung bình | Cao |
| Ứng dụng điển hình | MTJ/MRAM, cảm biến từ, điện cực noble metal, thiết bị photonic, trimming | Patterning Si/dielectric tổng quát | Etch Si HAR, MEMS, III-V, CMOS tiên tiến |

_Quy tắc kinh nghiệm: Nếu vật liệu của đại ca tạo halide hoặc fluoride bay hơi, hãy bắt đầu với RIE hoặc ICP-RIE. Nếu không — hoặc nếu cần kiểm soát góc chính xác, hư hại plasma tối thiểu, hay trimming stack đa lớp — IBE/RIBE là công cụ đúng._

## 5. Tương thích vật liệu và Etch Rate

Một trong những thế mạnh lớn nhất của IBE là tính tương thích vật liệu gần như phổ quát. Vì sputtering phụ thuộc vào truyền động lượng thay vì phản ứng hóa học, tham số then chốt là **sputter yield** — số nguyên tử bị loại bỏ trên mỗi ion tới — thay đổi theo vật liệu, loại ion, năng lượng ion, và góc tới.

### Sputter Yield và Etch Rate đại diện (Ar⁺, 500 eV, góc tới vuông góc)

| Vật liệu | Phân loại | Sputter Yield (nguyên tử/ion) | Etch Rate xấp xỉ (nm/phút) |
| --- | --- | --- | --- |
| Au | Noble metal | 2,4–3,0 | 40–60 |
| Pt | Noble metal | 1,4–1,8 | 20–35 |
| Cu | Kim loại | 2,0–2,5 | 35–50 |
| NiFe (Permalloy) | Hợp kim từ tính | 1,5–2,0 | 25–40 |
| CoFeB | Hợp kim từ tính | 1,2–1,6 | 20–30 |
| SiO₂ | Dielectric | 0,8–1,2 | 15–25 |
| Si₃N₄ | Dielectric | 0,6–1,0 | 12–20 |
| Si | Semiconductor | 0,5–0,8 | 10–20 |
| GaAs | Semiconductor III-V | 1,0–1,5 | 18–30 |
| LiNbO₃ | Piezoelectric | 0,6–0,9 | 10–18 |

_Lưu ý: Etch rate tỷ lệ gần như tuyến tính với mật độ dòng chùm. Các giá trị trên giả định ~0,5 mA/cm². Tốc độ tăng 50–100% ở các góc sputter yield đỉnh (thường 40–60° so với pháp tuyến)._

## 6. Vai trò then chốt của góc: Tilt và Rotation

Khác với mọi kỹ thuật etch dựa trên plasma, IBE cho kiểm soát đầy đủ góc tới của chùm ion. Đây được xem là _núm điều chỉnh quy trình quan trọng nhất_ trong ion beam etching, và nó phục vụ nhiều chức năng:

![Tối ưu góc nghiêng substrate cho ion beam etching](IBE/ibe-tilt-angle-optimization.png)

> Hình 3: Ảnh hưởng của góc nghiêng substrate lên etch profile — góc vuông góc (0°) gây trenching và redeposition, góc tối ưu (30–45°) tạo sidewall sạch, còn góc sượt (70–80°) tăng cường milling bề mặt nhưng giảm độ sâu.

### 6.1 Sputter Yield theo góc

Với hầu hết vật liệu, sputter yield đạt đỉnh ở 40–60° so với pháp tuyến (nơi động lượng của ion được phân chia tối ưu giữa độ xuyên sâu và cascade ngang). Ở góc vuông góc (0°), ion xuyên sâu nhưng đánh bật ít nguyên tử bề mặt hơn. Ở góc sượt (>75°), ion tán xạ khỏi bề mặt với truyền năng lượng tối thiểu. Sự phụ thuộc góc này là nền tảng cho kỹ thuật hóa profile:
- **Vuông góc (0°):** Etch rate dọc tối đa, tạo sidewall dốc nhưng để lại vật liệu redeposit trên sườn đặc trưng
- **Nghiêng vừa (30–45°):** Tiếp cận sidewall trực tiếp, dọn redeposition, tạo profile vát hữu ích cho step coverage của các lần lắng đọng kế tiếp
- **Nghiêng cao (60–80°):** Làm sạch sidewall mạnh, vát cực đại, hữu ích cho các lượt loại bỏ redeposition

### 6.2 Recipe đa bước theo góc

Các quy trình IBE sản xuất thường dùng chuỗi góc đa bước:
- **Bulk etch ở 0–10°:** Loại bỏ phần lớn độ dày màng ở tốc độ dọc tối đa
- **Profile trim ở 30–45°:** Tạo hình góc sidewall và loại bỏ một phần các "hàng rào" (fence) redeposit
- **Cleanup ở 60–70°:** Loại bỏ redeposition sidewall còn lại ("ears" hoặc "veils") mà không ảnh hưởng đáng kể tới độ sâu đặc trưng

Xuyên suốt mọi bước, việc xoay substrate liên tục (1–10 rpm trên hệ NineScrolls) đảm bảo độ đồng đều theo phương vị (azimuthal) — không có xoay, hiệu ứng che bóng (shadowing) từ chùm nghiêng sẽ tạo profile bất đối xứng.

## 7. Tham số quy trình và Tối ưu hóa

Tối ưu một quy trình IBE/RIBE là việc cân bằng giữa etch rate, kiểm soát profile, selectivity, độ đồng đều, và hư hại substrate. Các tham số chính và tác động của chúng:

| Tham số | Dải điển hình | Tác động khi tăng | Đánh đổi |
| --- | --- | --- | --- |
| Beam voltage | 200–1200 V | Etch rate cao hơn, ion xuyên sâu hơn | Nhiều hư hại dưới bề mặt hơn, mask mòn nhanh hơn |
| Beam current | 10–200 mA | Etch rate cao hơn (tỷ lệ tuyến tính) | Substrate nóng hơn, nguy cơ mòn grid |
| Góc tilt | 0–90° | Tiếp cận sidewall tốt hơn, giảm redeposition | Etch rate dọc thấp hơn, cần footprint rộng hơn |
| Tốc độ xoay | 1–10 rpm | Độ đồng đều phương vị tốt hơn | Đánh đổi tối thiểu; điển hình 3–5 rpm |
| Lưu lượng khí (Ar) | 5–30 sccm | Beam current cao hơn ở cùng công suất phóng điện | Áp suất buồng cao hơn, tán xạ nhiều hơn |
| Tỷ lệ khí phản ứng (RIBE) | 0–80% tổng lưu lượng | Thành phần etch hóa học nhiều hơn, selectivity cao hơn | Mòn grid (với halide), giảm tính định hướng |
| Nhiệt độ substrate | 5–20 °C (làm mát bằng nước) | Nhiệt độ cao hơn tăng tốc độ etch hóa học trong RIBE | Có thể gây suy thoái photoresist, khuếch tán trong các lớp nhạy cảm |

### Phát hiện Endpoint

Phát hiện endpoint trong IBE thường được thực hiện bằng giám sát Secondary Ion Mass Spectrometry (SIMS) hoặc optical emission spectroscopy của các species bị sputter. Nhiều hệ còn tích hợp quartz crystal microbalance hoặc reflectometry để giám sát độ sâu etch thời gian thực. Với stack đa lớp (vd trụ MTJ với 10+ lớp), endpoint bằng SIMS đặc biệt giá trị vì mỗi chuyển tiếp lớp tạo một chữ ký khối lượng (mass signature) riêng biệt.

## 8. Ứng dụng

### 8.1 Thiết bị từ tính và MRAM

Đây là ứng dụng định danh của IBE. Magnetic tunnel junction (MTJ) — phần tử lõi của MRAM, cảm biến từ, và spin-torque oscillator — gồm các stack đa lớp CoFeB/MgO/CoFeB kẹp giữa các lớp ghim phản sắt từ (antiferromagnetic pinning: PtMn, IrMn) và điện cực kim loại (Ta, Ru, Pt). Không hóa học plasma nào có thể tạo sản phẩm etch bay hơi từ các vật liệu này, khiến IBE trở thành kỹ thuật patterning khả thi duy nhất.

Các thách thức IBE then chốt khi chế tạo MTJ:
- **Redeposition trên sidewall:** Vật liệu dẫn điện bị sputter tái lắng đọng lên sidewall của tunnel barrier tạo đoản mạch điện. Recipe đa góc (etch + cleanup) là thiết yếu.
- **Lớp chết từ tính (magnetic dead layer):** Năng lượng ion quá cao làm hư lớp free CoFeB siêu mỏng (~1 nm), suy giảm tunnel magnetoresistance (TMR). Các bước hoàn thiện năng lượng thấp (<400 eV) bảo toàn tính chất từ.
- **Profile trụ (pillar):** Trụ MTJ dưới 50 nm cần sidewall dốc với độ vát tối thiểu để duy trì diện tích junction nhất quán trên toàn wafer. Tối ưu góc tilt là then chốt.

### 8.2 Photonics và thiết bị quang

IBE được dùng rộng rãi để patterning các stack thin-film quang — gương dielectric đa lớp, facet waveguide, và phần tử quang nhiễu xạ — nơi độ mịn bề mặt và độ chính xác góc là tối quan trọng. Các ứng dụng cụ thể gồm:
- **Trimming thin-film filter:** Hiệu chỉnh độ dày chính xác cho optical interference filter bằng ion milling có kiểm soát
- **Chế tạo waveguide LiNbO₃:** Lithium niobate đã domain-engineering cho electro-optic modulator, nơi RIE tạo độ nhám bề mặt không chấp nhận được
- **Patterning metasurface:** Cấu trúc nano kim loại và dielectric dưới bước sóng cho flat optics
- **Đánh bóng facet laser:** IBE nghiêng góc để làm mịn các facet đã cleave hoặc etch của laser diode bán dẫn

### 8.3 MEMS và Cảm biến

- **Piezoelectric MEMS:** Patterning transducer PZT và AlN cho cảm biến siêu âm, energy harvester, và RF filter
- **Cảm biến từ:** Phần tử cảm biến GMR/TMR cho ứng dụng ô tô, công nghiệp, và y sinh
- **Thiết bị SAW/BAW:** Định nghĩa điện cực resonator sóng âm bề mặt và khối trên substrate quartz và LiTaO₃

### 8.4 Thiết bị lượng tử và vật liệu 2D

Các ứng dụng mới nổi ngày càng tận dụng khả năng etch ít hư hại, không kén vật liệu của IBE cho:
- **Chế tạo qubit siêu dẫn:** Patterning Nb và Josephson junction Al/AlOx/Al nơi hư hại plasma sẽ suy giảm thời gian coherence
- **Cách ly thiết bị vật liệu 2D:** Định nghĩa ranh giới trong các heterostructure graphene, MoS₂, và hBN mà không gây hư hại hóa học cho các lớp lân cận
- **Patterning topological insulator:** Cấu trúc nano Bi₂Se₃ và Bi₂Te₃ nơi việc bảo toàn surface state là then chốt

## 9. Quản lý Redeposition: Thách thức trung tâm của IBE

Redeposition là nhược điểm chính của sputtering vật lý và là thách thức quy trình lớn nhất trong IBE. Khi ion đánh bật nguyên tử khỏi bề mặt mục tiêu, các nguyên tử đó bay theo phân bố gần dạng cosine và có thể đáp xuống sidewall của mask, sidewall của đặc trưng, và bề mặt buồng. Tệ nhất, vật liệu redeposit hình thành các "fence" hoặc "veil" dẫn điện dọc mép đặc trưng gây đoản mạch điện.

### Các chiến lược giảm thiểu Redeposition

- **Etch đa góc:** Kỹ thuật hiệu quả nhất. Sau bulk etch, thực hiện lượt cleanup 45–70° để sputter sạch các lớp bám trên sidewall. Xoay stage đảm bảo cleanup đồng đều quanh toàn bộ chu vi đặc trưng.
- **Dùng chế độ RIBE:** Thêm O₂ vào chùm khi etch kim loại chuyển vật liệu redeposit thành oxide, thường dễ loại bỏ hơn. Với một số vật liệu, oxide đủ bay hơi để tự làm sạch trong khi etch.
- **Hạ năng lượng chùm khi cleanup:** Bước cleanup 200–300 eV ở góc tilt cao loại bỏ redeposition mà không làm hư các lớp bên dưới mạnh tay như etch chính.
- **Tối ưu hardmask:** Mask dày hơn, chịu sputter tốt hơn (SiO₂, diamond-like carbon, Ta) sống sót qua recipe đa bước và che bóng chân đặc trưng ít hơn.
- **Thiết kế buồng:** Liner buồng được làm mát và các shield bố trí chiến lược chặn vật liệu redeposit, ngăn nó phản xạ ngược lên substrate. Vệ sinh buồng định kỳ duy trì tính nhất quán quy trình.

## 10. Câu hỏi thường gặp (FAQ)

### Khác biệt giữa IBE và RIBE là gì, khi nào nên dùng từng cái?

IBE (Ion Beam Etching) dùng chùm ion khí trơ thuần (thường Ar⁺) chỉ cho sputtering vật lý. RIBE (Reactive Ion Beam Etching) đưa khí phản ứng vào ion source để tạo ion hoạt tính hóa học vừa sputter vừa phản ứng với substrate. Dùng **IBE** khi etch vật liệu có sản phẩm etch không bay hơi (hợp kim từ tính, noble metal, oxide phức hợp) nơi không hóa học phản ứng nào giúp được. Dùng **RIBE** khi etch semiconductor hoặc dielectric, nơi việc thêm tính phản ứng hóa học cải thiện selectivity và giảm redeposition — ví dụ, dùng RIBE trợ lực O₂ để etch xuyên một stack đa lớp và dừng gọn trên lớp oxide.

### IBE/RIBE có thể thay thế ICP-RIE cho etch semiconductor không?

Không thể thay thế tổng quát. ICP-RIE đạt etch rate cao hơn nhiều (10–50×) cho silicon và dielectric, selectivity tốt hơn nhờ tinh chỉnh hóa học, và throughput cao hơn. IBE/RIBE _bổ trợ_ cho ICP-RIE bằng cách xử lý các vật liệu mà hóa học plasma không etch được — noble metal, hợp kim từ tính, và oxide đa nguyên tố. Nhiều fab thiết bị tiên tiến vận hành cả hệ ICP-RIE lẫn IBE: ICP-RIE cho các lớp semiconductor và dielectric chính, còn IBE cho các lớp kim loại và stack từ tính. Để so sánh chi tiết năng lực ICP-RIE, xem ICP-RIE Technology Guide của chúng tôi.

### Làm sao giảm thiểu hư hại ion lên các màng mỏng nhạy cảm như tunnel barrier của MTJ?

Ba chiến lược chính: (1) **Giảm beam voltage** xuống 200–400 eV cho bước etch cuối gần lớp nhạy cảm — điều này giảm mạnh độ xuyên sâu của ion và xô lệch mạng tinh thể. (2) **Dùng phát hiện endpoint chính xác** (SIMS hoặc reflectometry) để dừng etch đúng tại interface lớp mong muốn. (3) **Cân nhắc xử lý nhẹ sau etch** ở năng lượng rất thấp (<100 eV) và góc tilt cao để loại bỏ các nguyên tử bề mặt bị hư mà không xuyên sâu hơn. Trên hệ NineScrolls, beam voltage lập trình được cho phép recipe đa bước chuyển tự động từ bulk etch năng lượng cao sang hoàn thiện năng lượng thấp.

### Tôi nên chọn nguồn Kaufman hay RF ion source?

Với phòng lab R&D xử lý wafer tới 6″ chủ yếu bằng IBE dùng Ar, nguồn Kaufman cho hiệu năng xuất sắc với chi phí thấp hơn. Với môi trường sản xuất, wafer lớn hơn (tới 12″), hoặc quy trình cần khí phản ứng (chế độ RIBE với O₂, CHF₃, Cl₂), RF ion source là lựa chọn tốt hơn. Nguồn RF loại bỏ việc thay filament, xử lý khí phản ứng không suy thoái, và mở rộng được tới đường kính chùm lớn hơn. NineScrolls cung cấp cả hai tùy chọn trên cùng một nền tảng, nên nguồn có thể nâng cấp nếu yêu cầu quy trình của đại ca thay đổi.

### Hệ IBE cần bảo trì những gì?

Bảo trì định kỳ bao gồm: (1) **Thay filament** (chỉ nguồn Kaufman) mỗi 50–200 giờ vận hành tùy loại khí và beam current. (2) **Kiểm tra và vệ sinh grid** mỗi 100–500 giờ — kiểm tra mòn lỗ, tích tụ lớp phủ sputter, và căn chỉnh. Grid nên được thay khi đường kính lỗ tăng >20% so với danh định. (3) **Vệ sinh liner buồng** định kỳ để loại bỏ vật liệu redeposit có thể bong tróc gây particle. (4) **Thay neutralizer filament** với chu kỳ tương tự filament nguồn. (5) **Bảo trì hệ chân không** — kiểm tra bearing turbo pump, kiểm tra seal gate valve, và leak test theo thông lệ UHV tiêu chuẩn.

## 11. Kết luận

Ion beam etching chiếm một ngách độc đáo và ngày càng quan trọng trong vi chế tạo (microfabrication). Trong khi RIE và ICP-RIE xử lý phần lớn việc etch semiconductor và MEMS thông qua các quy trình dựa trên hóa học, IBE/RIBE là không thể thiếu mỗi khi vật liệu mục tiêu kháng lại bay hơi hóa học, mỗi khi cần kiểm soát góc chính xác, hoặc mỗi khi hư hại tích điện do plasma là không chấp nhận được.

Tầm quan trọng ngày càng tăng của spintronics (MRAM, cảm biến từ), integrated photonics (modulator LiNbO₃, metasurface), và thiết bị lượng tử (qubit siêu dẫn, vật liệu topological) đồng nghĩa nhu cầu ion beam etching chất lượng cao tiếp tục mở rộng. Một hệ IBE/RIBE được cấu hình tốt — với cả tùy chọn nguồn Kaufman lẫn RF, năng lực tilt/rotation đầy đủ, và phát hiện endpoint chính xác — là bổ sung đa năng cho bất kỳ cleanroom nào làm việc vượt ra ngoài các vật liệu CMOS truyền thống.


### Tags

ion beam etching · IBE · RIBE · ion milling · reactive ion beam etching · magnetic etching · MRAM · MTJ · noble metals · spintronics · photonics · Kaufman ion source · RF ion source · physical sputtering · redeposition · equipment guide

## Nguồn tham khảo

- Bài viết gốc: "Ion Beam Etching (IBE) & RIBE: Principles, Applications, and Equipment Guide" — NineScrolls Engineering, NineScrolls LLC, đăng ngày 22/3/2026. URL: https://ninescrolls.com/insights/ion-beam-etching-ribe-guide (bản lưu offline ngày 10/6/2026).
