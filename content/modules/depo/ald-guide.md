# Atomic Layer Deposition (ALD) – Nguyên lý, Process Window, Vật liệu và Hướng dẫn Thiết bị


**Đối tượng:** Kỹ sư quy trình Semiconductor/MEMS, nhà nghiên cứu thin-film, kỹ sư thiết bị, PI/quản lý phòng lab, và các nhóm mua sắm R&D đang đánh giá hệ ALD. Người mới sẽ thấy phần kiến thức nền tảng và glossary hữu ích; kỹ sư có kinh nghiệm có thể nhảy thẳng tới các bảng precursor, phần tối ưu quy trình và lựa chọn thiết bị.

## Tóm tắt nhanh (TL;DR)

Atomic Layer Deposition (ALD) là kỹ thuật tạo thin-film pha hơi, lắng đọng vật liệu từng lớp nguyên tử một thông qua các phản ứng tự giới hạn bề mặt _(self-limiting reaction)_ theo trình tự. Bản chất self-limiting này mang lại khả năng kiểm soát độ dày vượt trội (độ chính xác <1 Å), conformality đặc biệt cao (step coverage >98% trên các cấu trúc có aspect ratio lớn), và độ đồng đều dưới một phần trăm trên wafer tới 300 mm. ALD là công nghệ lắng đọng cốt lõi cho gate dielectric sub-5 nm, passivation cho 3D NAND, encapsulation cho MEMS, và các thiết bị năng lượng thế hệ mới. Hướng dẫn này trình bày cơ chế phản ứng, so sánh thermal ALD với plasma-enhanced ALD, lập bản đồ ALD temperature window, lập bảng precursor và tốc độ tăng trưởng cho hơn 15 vật liệu, benchmark ALD với CVD/PVD/PECVD/MBE, và cung cấp một khung thực hành để tối ưu quy trình, troubleshooting, và lựa chọn thiết bị.

## 1) Atomic Layer Deposition là gì?

Atomic Layer Deposition (ALD) là một biến thể của chemical vapor deposition, trong đó hai hay nhiều precursor ở thể khí được đưa vào buồng phản ứng một cách _tuần tự_, ngăn cách bởi các bước purge. Mỗi precursor phản ứng với bề mặt substrate theo cơ chế _self-limiting_: một khi mọi surface site khả dụng đã phản ứng, sẽ không còn lắng đọng thêm bất kể có đưa thêm bao nhiêu precursor. Cơ chế hóa học self-limiting này chính là đặc trưng định nghĩa, phân biệt ALD với CVD truyền thống — nơi precursor phản ứng liên tục trong pha khí hoặc trên bề mặt mà không có cơ chế dừng nội tại.

### Chu trình ALD bốn bước

Một chu trình ALD đơn lẻ gồm bốn bước tuần tự, lặp lại hàng trăm tới hàng nghìn lần để dựng nên độ dày màng mong muốn:
- **Precursor A pulse:** Precursor thứ nhất (vd trimethylaluminum, TMA) được đưa vào buồng. Nó chemisorb lên các surface site hoạt tính (vd nhóm hydroxyl) qua cơ chế ligand-exchange hoặc dissociative adsorption. Khi mọi site khả dụng đã bị chiếm, phản ứng tự kết thúc.
- **Purge 1:** Một khí trơ (N₂ hoặc Ar) cuốn đi precursor chưa phản ứng và các by-product dễ bay hơi (vd CH₄ từ TMA). Thời gian purge đủ là yếu tố then chốt để ngăn phản ứng pha khí kiểu CVD.
- **Precursor B pulse (co-reactant):** Chất phản ứng thứ hai (vd H₂O, O₃, O₂ plasma, hoặc NH₃) phản ứng với các surface species đã chemisorb, hoàn tất việc hình thành một sub-monolayer của vật liệu đích (vd Al₂O₃) và tái tạo surface site cho chu trình kế tiếp.
- **Purge 2:** Một bước purge khí trơ thứ hai loại bỏ co-reactant dư và by-product, đưa bề mặt về trạng thái sẵn sàng cho Precursor A pulse tiếp theo.

Kết quả thực tế là lắng đọng một phần monolayer được kiểm soát chính xác trên mỗi chu trình, thường là 0,5–2 Å tùy hệ vật liệu và nhiệt độ quy trình.

> Hình: ALD Self-Limiting Growth Cycle — Mỗi chu trình ALD lắng đọng đúng một monolayer (~0,5–1,5 Å), cho phép kiểm soát độ dày ở cấp nguyên tử, conformality xuất sắc và độ đồng đều cao trên các cấu trúc 3D phức tạp.

### Vì sao cơ chế self-limiting lại quan trọng

Bản chất self-limiting của các phản ứng ALD mang lại một số ưu thế nền tảng mà không kỹ thuật lắng đọng nào khác có thể đạt được đồng thời:
- **Kiểm soát độ dày dưới angstrom:** Độ dày màng được quyết định hoàn toàn bởi số chu trình ALD, không phụ thuộc vào precursor flux, thời gian phơi, hay vị trí substrate. Khả năng kiểm soát "digital" này cho độ chính xác độ dày tốt hơn ±1 Å.
- **Conformality đặc biệt:** Vì mỗi surface site phản ứng giống hệt nhau bất kể hình học, ALD phủ đỉnh, đáy và sidewall của các cấu trúc high-aspect-ratio với độ dày như nhau. Step coverage >98% đạt được thường xuyên trên aspect ratio 100:1 trở lên.
- **Độ đồng đều ở quy mô wafer:** Cơ chế self-limiting tự bù cho các bất đồng đều về flux. Độ đồng đều <1% (1σ) là chuẩn trên wafer 200–300 mm mà không cần kỹ thuật phân phối khí phức tạp.
- **Màng siêu mỏng không pinhole:** Chế độ tăng trưởng layer-by-layer lấp đầy các khuyết tật bề mặt và grain boundary, tạo ra màng liên tục, đặc kể cả ở độ dày dưới 5 nm.
- **Kiểm soát thành phần chính xác:** Các hợp kim ternary và quaternary (vd HfAlOₓ, TiAlN) được tổng hợp bằng cách xen kẽ các chu trình của những quy trình ALD binary khác nhau với tỷ lệ chu trình tùy ý.

### Lịch sử ngắn gọn của ALD

ALD được phát triển độc lập trong hai bối cảnh. Vào thập niên 1960–1970, Valentin Alekseevich Aleskovskii và Stanislav Koltsov tại Leningrad Technological Institute nghiên cứu "molecular layering" (ML) để lắng đọng các metal oxide. Song song, Tuomo Suntola ở Phần Lan phát minh Atomic Layer Epitaxy (ALE) năm 1974 để tăng trưởng màng mỏng ZnS và Al₂O₃ cho màn hình phẳng electroluminescent. Công trình của Suntola, được cấp bằng sáng chế năm 1974 (Finnish patent 52,359), được công nhận rộng rãi là khởi nguồn của ALD hiện đại. Kỹ thuật này vẫn là công nghệ ngách cho tới đầu thập niên 2000, khi Intel áp dụng HfO₂ tạo bằng ALD làm high-κ gate dielectric ở node 45 nm — một bước đột phá biến ALD thành công cụ không thể thiếu trong sản xuất semiconductor.

## 2) Thermal ALD vs Plasma-Enhanced ALD (PEALD)

Các quy trình ALD chia thành hai nhóm lớn dựa trên cách co-reactant cung cấp species hoạt tính: **thermal ALD** và **plasma-enhanced ALD (PEALD)**. Cả hai đều giữ được đặc tính self-limiting của ALD, nhưng khác nhau về độ phản ứng, yêu cầu nhiệt độ, và tính tương thích với substrate.

### Thermal ALD

Trong thermal ALD, co-reactant (vd H₂O, O₃, H₂O₂, NH₃) phản ứng với precursor species đã chemisorb hoàn toàn nhờ hóa học được kích hoạt bằng nhiệt. Nhiệt độ substrate cung cấp năng lượng hoạt hóa cho phản ứng bề mặt.
- **Ưu điểm:** Quy trình "nhẹ nhàng", không gây plasma damage; conformality xuất sắc kể cả trong cấu trúc ultra-high-aspect-ratio; thiết kế reactor đơn giản; phù hợp với substrate nhạy cảm (polymer, sinh học, OLED).
- **Hạn chế:** Đòi hỏi nhiệt độ substrate cao hơn với một số hệ vật liệu; độ phản ứng hạn chế khi lắng đọng kim loại và một số nitride; tốc độ tăng trưởng chậm với một số quy trình; các quy trình dựa trên H₂O bị purge time dài do bề mặt giữ lại hydroxyl.

### Plasma-Enhanced ALD (PEALD)

Trong PEALD, một phóng điện plasma tạo ra các radical species có độ phản ứng cao (O*, N*, H*, NHₓ*) từ khí co-reactant. Các radical này cung cấp năng lượng hóa học lớn hơn nhiều so với phân tử ở chế độ nhiệt, cho phép thực hiện những phản ứng vốn không khả thi về mặt nhiệt động hoặc động học trong thermal ALD.
- **Ưu điểm:** Nhiệt độ lắng đọng thấp hơn (cho phép phủ substrate nhạy nhiệt); tiếp cận dải vật liệu rộng hơn (đặc biệt là kim loại như Pt, Pd, W, Ru và nitride như TiN, TaN, SiNₓ, AlN, GaN); màng đặc hơn và ít tạp chất hơn ở nhiệt độ thấp; thời gian chu trình ngắn hơn nhờ phản ứng bề mặt hiệu quả hơn.
- **Hạn chế:** Khả năng gây plasma damage cho substrate hoặc interface nhạy cảm; conformality giảm ở các cấu trúc high-aspect-ratio rất sâu (radical tái hợp trên sidewall); thiết kế reactor phức tạp hơn; thành phần line-of-sight của radical flux có thể làm giảm step coverage trong các hình học cực đoan.

### Remote Plasma vs Direct Plasma

Hệ PEALD dùng hai cấu hình plasma:
- **Direct plasma:** Plasma được tạo giữa các điện cực trong buồng lắng đọng, ngay phía trên substrate. Radical flux cao hơn, nhưng năng lượng ion bombardment lên bề mặt substrate cũng cao hơn.
- **Remote plasma:** Plasma được tạo trong một nguồn riêng phía thượng nguồn (thường là inductively coupled), và chỉ các neutral radical species đi xuôi dòng tới substrate. Điều này loại bỏ ion bombardment năng lượng cao, giảm hư hại substrate trong khi vẫn giữ được lợi ích về độ phản ứng của hóa học plasma. Remote plasma được ưu tiên mạnh cho lắng đọng gate dielectric và các ứng dụng nhạy với hư hại khác.

### Bảng so sánh Thermal ALD vs PEALD

| Tham số | Thermal ALD | PEALD |
| --- | --- | --- |
| Co-reactant | H₂O, O₃, H₂O₂, NH₃ | O₂ plasma, N₂ plasma, H₂ plasma, NH₃ plasma |
| Nhiệt độ điển hình | 150–400 °C | 25–300 °C |
| Step coverage (100:1 AR) | >98% | 85–98% (remote plasma); 70–90% (direct plasma) |
| Mật độ màng | Tốt ở nhiệt độ tối ưu | Cao hơn ở nhiệt độ thấp |
| Tạp chất carbon | Thấp ở nhiệt độ tối ưu; tăng khi T thấp | Rất thấp kể cả khi T thấp |
| Hư hại substrate | Không | Thấp (remote) đến trung bình (direct) |
| Lắng đọng kim loại | Hạn chế (ít quy trình thermal metal ALD) | Xuất sắc (Pt, Pd, Ru, W, TiN, TaN) |
| Phù hợp nhất cho | Cấu trúc high-AR, substrate nhạy cảm, oxide | Kim loại, nitride, lắng đọng nhiệt độ thấp, màng mật độ cao |

## 3) ALD Process Window & Nhiệt độ

Mỗi quy trình ALD đều có một **ALD temperature window** đặc trưng — dải nhiệt độ substrate mà trong đó growth per cycle (GPC) là hằng số và các phản ứng thực sự self-limiting. Hiểu rõ window này là điều thiết yếu cho phát triển và tối ưu quy trình.

### Giải thích ALD Temperature Window

ALD window bị giới hạn bởi bốn chế độ hỏng (failure mode):
- **Dưới window (T thấp, chế độ condensation):** Phân tử precursor physisorb và ngưng tụ trên bề mặt thay vì chemisorb. GPC tăng không kiểm soát, và màng chứa precursor chưa phản ứng dư cùng tạp chất.
- **Dưới window (T thấp, chế độ kinetic):** Phản ứng bề mặt quá chậm để hoàn tất trong thời gian pulse. GPC giảm, màng không hoàn chỉnh và không đồng đều.
- **Trên window (T cao, chế độ decomposition):** Precursor phân hủy nhiệt trước khi kịp trải qua phản ứng bề mặt self-limiting như dự định. GPC tăng và quy trình thoái biến về hành vi kiểu CVD với độ đồng đều và conformality suy giảm.
- **Trên window (T cao, chế độ desorption):** Precursor species đã chemisorb hoặc các nhóm chức bề mặt desorb trước khi co-reactant tới. GPC giảm, và màng có thể không hoàn chỉnh.

Trong ALD window, GPC về cơ bản là hằng số và độc lập với thời gian pulse (vượt quá liều saturation), vị trí substrate, và các dao động nhiệt độ nhỏ. Đây là vùng vận hành mang lại những lợi ích đặc trưng của ALD: kiểm soát độ dày digital, độ đồng đều, và conformality.

> Hình: ALD Temperature Window — Growth per cycle (GPC) theo nhiệt độ substrate, cho thấy ALD window lý tưởng (~150–300 °C) nơi các phản ứng self-limiting tạo ra màng bão hòa, conformal với độ đồng đều cao.

### Các ALD Temperature Window điển hình

| Vật liệu | Precursor | Co-reactant | ALD Window (°C) | GPC (Å/cycle) |
| --- | --- | --- | --- | --- |
| Al₂O₃ | TMA | H₂O | 100–350 | 1,0–1,2 |
| HfO₂ | TDMAH / TEMAH / HfCl₄ | H₂O / O₃ | 200–350 | 0,9–1,1 |
| SiO₂ | BDEAS / 3DMAS / BTBAS | O₂ plasma | 50–300 (PEALD) | 0,8–1,4 |
| TiO₂ | TDMAT / TiCl₄ | H₂O / O₂ plasma | 100–300 | 0,4–0,6 |
| Ga₂O₃ | TMGa / TEGa | H₂O / O₂ plasma | 150–350 | 0,5–1,0 |
| ZnO | DEZ | H₂O | 100–250 | 1,5–2,0 |
| TiN | TDMAT / TiCl₄ | NH₃ / N₂/H₂ plasma | 200–400 | 0,4–0,6 |
| TaN | TBTDET / PDMAT | NH₃ / H₂ plasma | 200–350 | 0,3–0,5 |
| SiNₓ | BDEAS / DTDN2-H2 | N₂/Ar plasma | 200–400 (PEALD) | 0,3–1,0 |
| AlN | TMA | N₂/H₂ plasma / NH₃ | 200–400 | 0,8–1,1 |
| GaN | TMGa / TEGa | N₂/H₂ plasma / NH₃ plasma | 200–400 (PEALD) | 0,5–1,2 |
| Pt | MeCpPtMe₃ | O₂ plasma / O₃ | 200–350 | 0,4–0,5 |
| Pd | Pd(hfac)₂ | H₂ plasma / formalin | 150–300 | 0,2–0,5 |
| W | WF₆ / W(CO)₆ | Si₂H₆ / H₂ plasma | 200–350 | 0,5–1,5 |
| Ru | RuCp₂ / (EtCp)₂Ru | O₂ / O₂ plasma | 250–350 | 0,4–0,6 |

### Mở rộng vượt ra ngoài Thermal Window bằng PEALD

Khi một quy trình thermal ALD đòi hỏi nhiệt độ không tương thích với device stack (vd substrate polymer không chịu được >100 °C, hoặc back-end-of-line interconnect giới hạn ở <200 °C), PEALD cung cấp một lối đi thay thế. Các radical do plasma tạo ra có đủ độ phản ứng để thúc đẩy phản ứng bề mặt ở nhiệt độ thấp hơn thermal ALD window 100–200 °C, trong khi vẫn giữ tốc độ tăng trưởng trong dải 0,5–2 Å/cycle. Ví dụ, SiO₂ chất lượng cao có thể được lắng đọng bằng PEALD ở 50 °C dùng BDEAS + O₂ plasma, so với mức >150 °C cần thiết cho phương pháp nhiệt.

## 4) Các Precursor & Vật liệu ALD thông dụng

Lựa chọn precursor là một trong những quyết định then chốt nhất khi phát triển quy trình ALD. Một precursor ALD lý tưởng phải thỏa mãn nhiều yêu cầu khắt khe:
- **Áp suất hơi đủ:** Phải đủ dễ bay hơi ở nhiệt độ nguồn thực tế (20–200 °C) để cấp đủ liều cho reactor.
- **Ổn định nhiệt:** Không được phân hủy ở nhiệt độ substrate. Phân hủy sớm phá hỏng cơ chế self-limiting.
- **Độ phản ứng cao với bề mặt:** Phải chemisorb mạnh và bất thuận nghịch lên các surface site đích.
- **Loại bỏ ligand "sạch":** By-product phản ứng phải dễ bay hơi và không gây nhiễm bẩn. Sự lẫn carbon, chlorine, hay nitrogen từ ligand bị loại bỏ không hết sẽ làm suy giảm tính chất màng.
- **Không etch màng đang tăng trưởng:** Một số precursor hoặc by-product (đáng chú ý là HCl từ precursor gốc chloride) có thể etch vật liệu đã lắng đọng, làm giảm GPC và gây bất đồng đều.

### Phân loại Precursor

| Lớp precursor | Ví dụ | Ưu điểm | Hạn chế |
| --- | --- | --- | --- |
| Metal alkyls | TMA, DEZ, TMGa, TEGa | Độ phản ứng cao, phản ứng sạch, áp suất hơi cao | Pyrophoric (TMA, DEZ); giới hạn ở một số kim loại |
| Metal halides | TiCl₄, HfCl₄, WF₆, AlCl₃ | Ổn định nhiệt cao, đã được nghiên cứu kỹ | By-product ăn mòn (HCl, HF); có thể etch màng; sinh hạt particle |
| Metal amides | TDMAT, TDMAH, TEMAH, TBTDET | Áp suất hơi vừa phải; không có by-product halide | Ổn định nhiệt thấp hơn (phân hủy ở ~350 °C); nguy cơ lẫn carbon |
| Metal cyclopentadienyls | RuCp₂, (EtCp)₂Ru, MeCpPtMe₃ | Ổn định tốt; phù hợp cho noble metal | Độ bay hơi thấp hơn; cần pulse time dài hơn; nhiệt độ nguồn cao hơn |
| Metal β-diketonates | Pd(hfac)₂, Cu(hfac)₂ | Bền trong không khí; xử lý dễ hơn | Độ phản ứng thấp; lẫn fluorine từ ligand hfac |
| Aminosilanes | BDEAS, 3DMAS, BTBAS | Thiết kế cho ALD SiO₂ / SiNₓ; không pyrophoric | Cần co-reactant plasma cho SiO₂; GPC chậm hơn metal oxide |

### Hướng dẫn lựa chọn Co-Reactant

- **H₂O:** Chất oxy hóa phổ biến nhất cho thermal ALD. Tuyệt vời cho Al₂O₃, HfO₂, ZnO. Cần purge time dài do ái lực bề mặt mạnh.
- **O₃ (ozone):** Chất oxy hóa mạnh hơn H₂O. Purge time ngắn hơn, nucleation tốt hơn trên bề mặt kỵ nước (vd Si terminated bằng H, noble metal). Được ưu tiên cho hệ batch và spatial ALD.
- **O₂ plasma:** Tạo radical oxygen nguyên tử (O*). Thiết yếu cho PEALD-SiO₂, PEALD kim loại, và các quy trình nhiệt độ thấp. Purge time ngắn.
- **NH₃:** Nguồn nitrogen dạng nhiệt cho nitride. Độ phản ứng hạn chế, thường cần nhiệt độ >300 °C.
- **N₂/H₂ plasma:** Tạo radical NHₓ*. Được ưu tiên cho PEALD nitride (TiN, TaN, SiNₓ, AlN, GaN) ở nhiệt độ thấp hơn với mức nhiễm carbon và oxygen thấp hơn.
- **H₂ plasma:** Tác nhân khử cho ALD kim loại (W, Cu). Cũng dùng cho ALD các màng nguyên tố tinh khiết.

## 5) Các ứng dụng chính của ALD

Những năng lực độc đáo của ALD — kiểm soát độ dày cấp angstrom, conformality đặc biệt, và phủ không pinhole — biến nó thành phương pháp lắng đọng được lựa chọn cho một dải ứng dụng ngày càng mở rộng.

### 5.1 Gate Dielectric Semiconductor & màng High-κ

Tác động mang tính chuyển đổi lớn nhất của ALD là trong kỹ thuật gate stack của semiconductor. Khi kích thước transistor co xuống dưới 45 nm, gate dielectric SiO₂ trở nên quá mỏng (<2 nm) để ngăn dòng rò tunneling không chấp nhận được. HfO₂ tạo bằng ALD (cùng các biến thể HfSiOₓ, HfAlOₓ) thay thế SiO₂ làm gate dielectric, cho phép tiếp tục scaling với dòng rò thấp hơn. ALD là kỹ thuật duy nhất có khả năng lắng đọng các màng 1–3 nm này với độ đồng đều độ dày yêu cầu (<1%), conformality trong kiến trúc FinFET và gate-all-around (GAA), cùng chất lượng interface. Ngày nay, HfO₂ ALD cũng được dùng cho HfZrOₓ ferroelectric trong các bộ nhớ FeRAM và FeFET mới nổi.

### 5.2 Passivation & Encapsulation cho MEMS

Thiết bị MEMS cần các lớp passivation siêu mỏng, conformal để bảo vệ cấu trúc cơ học tinh vi khỏi ẩm, oxy hóa, và stiction. Al₂O₃ ALD (10–50 nm) tạo rào cản ẩm tuyệt vời với độ phủ không pinhole trên các cấu trúc MEMS đã release. Nhiệt độ lắng đọng thấp của PEALD (<150 °C) tương thích với quy trình MEMS sau release, và conformality của ALD đảm bảo các undercut, đặc trưng re-entrant, và khe hẹp đều được phủ đồng đều.

### 5.3 Thiết bị năng lượng

- **Pin lithium-ion:** Lớp phủ Al₂O₃ ALD (1–5 nm) trên hạt cathode ức chế phản ứng ký sinh với electrolyte, cải thiện mạnh khả năng giữ dung lượng và tuổi thọ chu kỳ. Lớp phủ TiO₂ và ZnO ALD trên anode giảm tăng trưởng solid-electrolyte interphase (SEI).
- **Pin solid-state:** ALD cho phép lắng đọng các lớp solid electrolyte siêu mỏng (Li₃PO₄, LiAlO₂) với độ phủ không pinhole cần thiết cho dẫn ion không rò rỉ.
- **Pin mặt trời:** Al₂O₃ ALD cung cấp surface passivation xuất sắc cho pin silicon PERC và TOPCon, giảm surface recombination velocity xuống <5 cm/s. TiO₂ ALD được dùng làm electron transport layer trong pin mặt trời perovskite.
- **Fuel cell & electrolysis:** Pt và Pd ALD cho phép lớp catalytic tải cực thấp với hiệu suất sử dụng cao trên các cấu trúc điện cực 3D.

### 5.4 Optical Coating & Photonics

Màng ALD có độ nhám bề mặt cực thấp (<0,5 nm RMS) và kiểm soát độ dày chính xác, khiến chúng lý tưởng cho optical interference coating. Ứng dụng bao gồm:
- **Anti-reflection coating:** Đa lớp Al₂O₃/TiO₂ ALD trên thấu kính và photodetector
- **Optical filter:** Distributed Bragg reflector (DBR) từ các cặp high-/low-index lắng đọng bằng ALD với kiểm soát chu kỳ cấp angstrom
- **Photonic crystal:** Phủ conformal bằng ALD lên template photonic crystal 3D để tinh chỉnh chính xác photonic bandgap
- **Waveguide cladding:** Lớp cladding Al₂O₃ và HfO₂ ALD tổn hao thấp cho integrated photonics

### 5.5 Lớp phủ bảo vệ & chức năng

- **Chống ăn mòn:** Al₂O₃ ALD tạo lớp phủ rào cản không pinhole trên kim loại, polymer, và chi tiết in 3D
- **Cấy ghép y sinh:** Lớp phủ TiO₂ và ZnO ALD tăng tính tương thích sinh học và mang lại đặc tính kháng khuẩn
- **Diffusion barrier:** TiN và TaN ALD đóng vai trò Cu diffusion barrier trong BEOL interconnect với conformality mà PVD không thể đạt được trong via high-AR — về việc patterning hạ nguồn cho các lớp barrier và gate-metal này, xem Metal Etching Complete Guide
- **Xúc tác (catalysis):** ALD cho phép tinh chỉnh thành phần xúc tác ở cấp nguyên tử và overcoating để ngăn sintering trong khi vẫn duy trì hoạt tính
- **Rào cản trong advanced packaging:** Màng TaN/TiN/Ru ALD niêm phong Cu bên trong through-silicon via và hybrid-bond pad cho xếp chồng 16-Hi HBM4 và HBM5 — xem hướng dẫn HBM4 & Advanced Packaging của chúng tôi để có bức tranh đầy đủ về nhiệt và vật liệu

## 6) ALD so với các kỹ thuật lắng đọng khác

Hiểu được ALD so sánh thế nào với các phương pháp lắng đọng thin-film thay thế là điều thiết yếu để chọn đúng kỹ thuật cho từng ứng dụng. Bảng dưới đây cung cấp một so sánh định lượng trên các chỉ số hiệu năng quan trọng nhất:

> Hình: ALD vs CVD vs PVD — Những khác biệt chính về cơ chế, conformality, kiểm soát độ dày, tốc độ lắng đọng, nhiệt độ, và ứng dụng phù hợp nhất.

| Tham số | ALD | CVD | PVD (Sputtering) | PECVD | MBE |
| --- | --- | --- | --- | --- | --- |
| Kiểm soát độ dày | <1 Å (digital, mỗi cycle) | ~5–10 nm (tốc độ × thời gian) | ~5–10 nm (tốc độ × thời gian) | ~5–10 nm (tốc độ × thời gian) | ~1 monolayer (kiểm soát RHEED) |
| Step coverage (10:1 AR) | >98% | 50–80% | 10–30% (line-of-sight) | 40–70% | <10% (line-of-sight) |
| Độ đồng đều (300 mm) | <1% 1σ | 2–5% | 2–5% | 2–5% | 1–3% (chỉ wafer nhỏ) |
| Tốc độ lắng đọng | 0,5–2 Å/cycle (1–10 nm/phút) | 10–100 nm/phút | 10–100 nm/phút | 10–200 nm/phút | 0,1–1 nm/phút (epitaxial) |
| Dải nhiệt độ | 25–400 °C | 300–900 °C | RT–500 °C | 100–400 °C | 200–800 °C |
| Mật độ màng | Gần bulk | Tốt | Tốt đến xuất sắc | Trung bình (columnar void) | Xuất sắc (epitaxial) |
| Mật độ pinhole | Cực thấp | Thấp đến trung bình | Trung bình (tăng trưởng columnar) | Thấp đến trung bình | Rất thấp |
| Kiểm soát thành phần | Xuất sắc (tinh chỉnh cycle ratio) | Tốt (kiểm soát tỷ lệ flow) | Hạn chế (co-sputtering) | Tốt (kiểm soát tỷ lệ flow) | Xuất sắc (beam flux) |
| Throughput | Thấp (batch ALD cải thiện điều này) | Cao | Cao | Cao | Rất thấp |
| Phù hợp nhất cho | Màng siêu mỏng, lớp phủ conformal, cấu trúc high-AR | Màng dày, throughput cao, tăng trưởng epitaxial | Kim loại, hard coating, optical film trên substrate phẳng | Màng dielectric, passivation, conformality vừa phải | Màng đơn tinh thể epitaxial, cấu trúc lượng tử |

**Khi nào nên chọn ALD thay vì các phương án khác:** ALD là kỹ thuật được ưu tiên khi xuất hiện bất kỳ yêu cầu nào sau đây: (1) độ dày màng <20 nm với dung sai <5%, (2) phủ conformal cho cấu trúc có aspect ratio >5:1, (3) encapsulation không pinhole ở bất kỳ độ dày nào, (4) thành phần chính xác trong hợp kim ternary/quaternary, hoặc (5) lắng đọng trên substrate nhạy nhiệt (với PEALD). Với màng dày hơn ~100 nm trên substrate phẳng, CVD hoặc PVD thường cho throughput tốt hơn với chi phí trên mỗi wafer thấp hơn.

## 7) Tối ưu quy trình & Troubleshooting

Ngay cả với hóa học self-limiting vốn có của ALD, để đạt tính chất màng tối ưu vẫn cần phát triển quy trình cẩn thận. Phần này cung cấp một cách tiếp cận hệ thống cho các thách thức ALD thường gặp.

### 7.1 Đặc trưng hóa Saturation Curve

Bước đầu tiên trong mọi quá trình phát triển quy trình ALD là thiết lập **saturation curve**: GPC như một hàm của thời gian precursor pulse. Tăng dần thời gian pulse trong khi giữ nguyên mọi tham số khác. GPC sẽ phẳng ra (plateau) khi bề mặt đã bão hòa hoàn toàn. Vận hành tại plateau bão hòa (cộng thêm 20–30% biên) đảm bảo tăng trưởng self-limiting thực sự.
- **Chế độ undersaturated:** GPC tăng theo thời gian pulse. Màng sẽ không đồng đều (nặng ở tâm hoặc nặng ở rìa tùy phân phối khí).
- **Chế độ saturated:** GPC không đổi theo thời gian pulse. Đây là vùng vận hành đích.
- **Chế độ oversaturated / CVD:** GPC tăng trở lại do precursor phân hủy hoặc ngưng tụ. Tính chất màng suy giảm.

### 7.2 Tối ưu Purge Time

Purge time không đủ là nguyên nhân phổ biến nhất gây suy giảm chất lượng màng ALD. Nếu các bước purge quá ngắn, precursor hoặc co-reactant dư còn lại trong buồng, dẫn tới phản ứng CVD ký sinh phá hỏng conformality và kiểm soát độ dày.
- **Purge H₂O:** H₂O nổi tiếng khó purge do ái lực liên kết hydrogen mạnh với bề mặt oxide. Thermal ALD Al₂O₃ ở 150 °C có thể cần purge time H₂O 15–30 s. Ở 300 °C, thường 3–5 s là đủ.
- **Purge precursor kim loại:** Hầu hết precursor metal-organic cần purge time 3–10 s. Precursor có áp suất hơi thấp (vd MeCpPtMe₃) có thể cần purge dài hơn kèm khí hỗ trợ.
- **Chẩn đoán:** Nếu GPC vượt giá trị bão hòa kỳ vọng và tăng theo thời gian pulse vượt quá điểm bão hòa, hãy nghi ngờ purge không đủ. Tăng gấp đôi purge time và đo lại.

### 7.3 Các vấn đề ALD thường gặp & Giải pháp

| Vấn đề | Nguyên nhân khả dĩ | Chẩn đoán | Giải pháp |
| --- | --- | --- | --- |
| GPC cao hơn kỳ vọng | Thành phần CVD do purge không đủ; precursor phân hủy; precursor ngưng tụ | Chạy saturation curve; kiểm tra xem GPC có biến thiên theo thời gian pulse vượt quá bão hòa không | Tăng purge time; giảm nhiệt độ substrate (nếu phân hủy); tăng nhiệt độ (nếu ngưng tụ) |
| GPC thấp hơn kỳ vọng | Liều precursor không đủ; nhiệt độ nguồn quá thấp; đường cấp bị tắc; substrate trên ALD window | Kiểm tra nhiệt độ nguồn và mức cylinder; chạy saturation curve | Tăng thời gian pulse hoặc nhiệt độ nguồn; xác minh gia nhiệt đường cấp; kiểm tra cạn precursor |
| Độ đồng đều độ dày kém | Undersaturation; gia nhiệt không đồng đều; cạn precursor trên wafer | Lập bản đồ độ dày (ellipsometry 49 điểm); so sánh GPC tâm vs rìa | Tăng thời gian pulse để đảm bảo bão hòa hoàn toàn; xác minh độ đồng đều nhiệt; tối ưu phân phối khí showerhead |
| Hàm lượng carbon cao trong màng | Loại bỏ ligand không hoàn toàn; nhiệt độ quá thấp; phơi co-reactant không đủ | XPS depth profile; so sánh màng ở các nhiệt độ khác nhau | Tăng nhiệt độ substrate; tăng thời gian pulse co-reactant; chuyển sang co-reactant O₃ hoặc plasma |
| Nhiễm bẩn particle | Bong tróc thành buồng; nucleation pha khí; ngưng tụ đường precursor | Đếm particle (biểu đồ SPC); kiểm tra thành buồng; kiểm tra nhiệt độ đường ống | Vệ sinh buồng (NF₃ plasma hoặc wet clean); tăng gia nhiệt đường ống; thêm particle trap; xác minh purge đủ |
| Nucleation delay | Bề mặt substrate thiếu surface site hoạt tính (vd Si terminated bằng H, bề mặt noble metal) | Vẽ độ dày theo số cycle; kiểm tra khởi đầu phi tuyến | Áp dụng tiền xử lý bề mặt (phơi O₃, O₂ plasma, hoặc UV-ozone); dùng O₃ thay vì H₂O làm co-reactant; dùng seed layer |
| Step coverage kém | Liều precursor không đủ cho đặc trưng high-AR; radical plasma tái hợp trên sidewall (PEALD) | Cross-section TEM/SEM; so sánh độ dày đỉnh vs đáy | Tăng thời gian pulse (có thể cần lâu hơn 10× cho AR cực đoan); chuyển từ PEALD sang thermal ALD; dùng nhiều pulse ngắn xen kẽ purge |

### 7.4 Checklist đặc trưng hóa màng

Một quá trình qualification quy trình ALD toàn diện nên bao gồm các phép đo sau:
- **Độ dày & độ đồng đều:** Spectroscopic ellipsometry (SE) với bản đồ wafer 49 điểm hoặc 81 điểm
- **Chiết suất (refractive index):** SE ở 633 nm; so với giá trị bulk tham chiếu
- **Thành phần & tạp chất:** XPS, RBS, hoặc SIMS depth profiling cho hàm lượng C, N, Cl, H
- **Mật độ:** XRR (X-ray reflectometry) cho mật độ và độ nhám màng
- **Tinh thể (crystallinity):** XRD hoặc GIXRD để nhận diện pha (amorphous, anatase, rutile, monoclinic, v.v.)
- **Tính chất điện:** Đo CV và IV cho hằng số điện môi, breakdown field, mật độ dòng rò
- **Step coverage:** Cross-section SEM hoặc TEM trên cấu trúc test đã patterning
- **Độ nhám bề mặt:** AFM (mục tiêu <0,5 nm RMS cho ứng dụng quang)
- **Ứng suất (stress):** Đo độ cong wafer (phương trình Stoney) cho ứng suất màng nén/kéo



##

<a href="content/modules/depo/ald_FAQ.md" target="_blank" rel="noopener">→ FAQ: ALD</a>
