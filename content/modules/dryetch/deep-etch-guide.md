# Deep Reactive Ion Etching (DRIE): Hướng dẫn quy trình Bosch cho MEMS & TSV

NineScrolls Engineering · 29/8/2025 · Nanotechnology · đọc trong 18 phút

![Deep Reactive Ion Etching (DRIE): Hướng dẫn quy trình Bosch cho MEMS & TSV](deep-etch-equipment/drie-cover-lg.png){width=700}

## 1. Giới thiệu về DRIE và quy trình Bosch

Deep Reactive Ion Etching (DRIE) mở rộng kỹ thuật reactive ion etching truyền thống để tạo ra các cấu trúc cực sâu, tỷ lệ cạnh cao (high aspect ratio — HAR) trên đế silicon. Khác với Reactive Ion Etching (RIE) thông thường — vốn thường bị giới hạn ở aspect ratio khoảng 5:1 — DRIE có thể đạt sidewall thẳng đứng với aspect ratio vượt quá 50:1. Năng lực này khiến DRIE trở thành công nghệ không thể thiếu cho MEMS tiên tiến, các kết nối xuyên silicon (through-silicon via — TSV), và linh kiện photonic.

Quy trình Bosch — đặt theo tên bằng sáng chế do Franz Laermer và Andrea Schilp nộp tại Robert Bosch GmbH năm 1994 (U.S. Patent 5,501,893) — đã trở thành phương pháp DRIE thống trị trên toàn thế giới. Nó dựa trên việc luân phiên nhanh, có chu kỳ giữa một bước passivation (thụ động hóa) và một bước etching (ăn mòn) để "điêu khắc" các cấu trúc silicon thẳng đứng với độ chính xác và độ lặp lại xuất sắc. Kỹ thuật này đã làm thay đổi vi chế tạo bằng cách biến các feature sâu hàng trăm micromet thành khả thi ở quy mô sản xuất.

Để nắm bối cảnh nền tảng về cách DRIE xây dựng trên các nguyên lý PE và RIE cơ bản, xem bài so sánh PE vs RIE vs ICP-RIE.

---

## 2. Nguyên lý hoạt động của quy trình Bosch

Quy trình Bosch đạt được profile sâu, thẳng đứng đặc trưng nhờ luân phiên hai hóa học plasma riêng biệt theo kiểu phân chia thời gian (time-multiplexed). Mỗi chu kỳ gồm một pha passivation theo sau là một pha etch, được lặp lại hàng trăm tới hàng nghìn lần để đạt độ sâu mục tiêu.

### 2.1 Bước Passivation (C₄F₈)

Một khí fluorocarbon — phổ biến nhất là octafluorocyclobutane (C₄F₈) — được đưa vào buồng. Trong plasma, C₄F₈ phân mảnh thành các gốc CF₂ và polymer hóa trên mọi bề mặt hở, lắng đọng một màng fluorocarbon mỏng (thường 10–50 nm) giống Teflon. Lớp phủ polymer conformal này bảo vệ sidewall khỏi bị tấn công theo phương ngang trong bước etch kế tiếp. Tốc độ và độ dày lắng đọng được kiểm soát bởi lưu lượng C₄F₈, công suất nguồn ICP, và thời lượng bước.

### 2.2 Bước Etching (SF₆)

Tiếp theo, plasma sulfur hexafluoride (SF₆) được kích hoạt. SF₆ phân ly thành các gốc fluorine hoạt tính cao (F*) ăn mòn silicon theo kiểu đẳng hướng. Tuy nhiên, một điện thế bias trên đế (công suất RF platen) gia tốc ion theo phương thẳng đứng về phía bề mặt wafer. Sự bắn phá ion định hướng này ưu tiên sputter lớp polymer passivation ở đáy trench trong khi để lại polymer trên sidewall gần như nguyên vẹn. Phần silicon hở ra ở đáy sau đó bị các gốc fluorine ăn mòn, đẩy trench tiến sâu xuống. Tốc độ etch điển hình nằm trong khoảng 2–20 μm/phút tùy hình học feature và điều kiện quy trình.

### 2.3 Lặp chu kỳ

Hai bước luân phiên nhanh — thường 1–5 giây mỗi bước cho quy trình tiêu chuẩn, hoặc ngắn tới 0,5 giây mỗi bước cho các ứng dụng cần sidewall siêu mịn. Một trench sâu 100 μm có thể cần 200–500 chu kỳ. Vì mỗi bước etch chỉ loại bỏ một lớp silicon mỏng ở đáy trước khi tái passivation, quy trình cho ra profile gần như thẳng đứng với tính dị hướng (anisotropy) xuất sắc (góc sidewall > 89°).

![Sơ đồ chu kỳ quy trình Bosch gồm ba bước: lắng đọng polymer passivation C4F8, etch plasma SF6 với bắn phá ion, và lặp chu kỳ tạo trench sâu thẳng đứng với sidewall scalloping](deep-etch-equipment/drie-bosch-cycle.png)

> Hình 1: Chu kỳ quy trình Bosch — Bước 1 lắng đọng polymer C₄F₈ bảo vệ; Bước 2 dùng plasma SF₆ với bắn phá ion định hướng để etch đáy trench; lặp chu kỳ tạo ra feature sâu thẳng đứng với scalloping đặc trưng trên sidewall

---

## 3. Tham số quy trình và kiểm soát

Đạt kết quả DRIE tối ưu đòi hỏi tinh chỉnh cẩn thận nhiều tham số liên quan chặt chẽ với nhau. Bảng dưới đây tóm tắt các biến chính và dải vận hành điển hình:

| Tham số | Dải điển hình | Ảnh hưởng lên quy trình |
| --- | --- | --- |
| **Thời gian passivation** | 0,5–5 s mỗi chu kỳ | Dài hơn → polymer dày hơn → bảo vệ sidewall tốt hơn nhưng throughput thấp hơn |
| **Thời gian etch** | 1–10 s mỗi chu kỳ | Dài hơn → "cắn" sâu hơn mỗi chu kỳ → scallop lớn hơn, tốc độ etch cao hơn |
| **Lưu lượng SF₆** | 100–400 sccm | Cao hơn → nhiều gốc fluorine hơn → etch nhanh hơn, nguy cơ undercut |
| **Lưu lượng C₄F₈** | 50–200 sccm | Cao hơn → passivation dày hơn → cải thiện độ thẳng đứng |
| **Công suất nguồn ICP** | 600–3000 W | Kiểm soát mật độ plasma và hiệu suất sinh gốc tự do |
| **Công suất platen (bias)** | 5–50 W | Kiểm soát năng lượng và tính định hướng của ion; cao hơn → dị hướng hơn |
| **Áp suất buồng** | 15–40 mTorr | Áp suất thấp hơn → quãng đường tự do trung bình dài hơn → ion định hướng hơn |
| **Nhiệt độ đế** | 10–40 °C (He backside) | Làm mát ngăn polymer suy thoái; ảnh hưởng độ đồng đều etch |

### 3.1 Recipe dạng ramp và đa bước

Với các etch sâu (>100 μm), tham số quy trình thường cần thay đổi khi trench sâu dần. Nguyên nhân là việc vận chuyển chất phản ứng tới đáy trench ngày càng khó theo độ sâu. Các tool DRIE tiên tiến hỗ trợ **ramped recipe**, trong đó lưu lượng khí, áp suất và thời gian chu kỳ được điều chỉnh dần trong suốt quy trình để bù các hiệu ứng phụ thuộc độ sâu. Ví dụ, tăng lưu lượng SF₆ và áp suất buồng ở giai đoạn sau có thể duy trì độ đồng đều tốc độ etch trong các feature sâu.

---

## 4. Ứng dụng của DRIE

Khả năng etch các feature sâu, aspect ratio cao trên silicon với sidewall thẳng đứng đã khiến DRIE trở nên thiết yếu trong nhiều lĩnh vực công nghệ:

### 4.1 MEMS (Micro-Electro-Mechanical Systems)

DRIE là "ngựa thồ" của chế tạo MEMS. Cảm biến quán tính (gyroscope, accelerometer), cảm biến áp suất, micro-mirror và resonator đều dựa vào các cấu trúc silicon được etch chính xác. Feature thường sâu 10–500 μm với kích thước tới hạn (critical dimension) nhỏ tới 1–2 μm. Quy trình Bosch cho phép giải phóng (release) các cấu trúc cơ học tự do bằng cách etch xuyên toàn bộ chiều dày wafer (thường 525 μm với wafer 200 mm tiêu chuẩn).

### 4.2 Through-Silicon Via (TSV)

Tích hợp 3D IC và các công nghệ đóng gói tiên tiến như high bandwidth memory (HBM) và kiến trúc chiplet đòi hỏi kết nối điện xuyên thẳng đứng qua silicon. TSV thường có đường kính 5–10 μm và sâu 50–100 μm (via-middle), hoặc đường kính 25–50 μm và sâu trên 300 μm (via-last). DRIE cung cấp khả năng kiểm soát độ sâu và profile cần thiết, và chất lượng sidewall sau etch ảnh hưởng trực tiếp tới độ conformal của lớp barrier/seed lắng đọng kế tiếp — thường là lớp lót dielectric CVD hoặc HDP-CVD để cách điện via. Để so sánh trực tiếp DRIE với các phương pháp ion-beam khi hóa học vật liệu không cho phép reactive etching, xem bài RIE vs Ion Milling. Về cách etch TSV bằng DRIE phục vụ HBM4 16-Hi và hybrid bonding trong đóng gói tiên tiến, xem bài về HBM4 & Advanced Packaging.

### 4.3 Photonics và linh kiện quang

Các thành phần silicon photonic — gồm waveguide, Bragg grating và micro-mirror — đòi hỏi sidewall mịn, thẳng đứng để tổn hao quang thấp. Mặc dù scalloping của quy trình Bosch tiêu chuẩn có thể quá nhám với một số ứng dụng photonic, các recipe chu kỳ ngắn được tối ưu hoặc cryogenic DRIE có thể đạt chất lượng bề mặt cần thiết (Ra < 20 nm).

### 4.4 Microfluidics

Các thiết bị lab-on-chip, micro-reactor và bioMEMS dùng DRIE để tạo kênh, buồng và cấu trúc nozzle có aspect ratio cao. Độ sâu kênh 50–300 μm với bề rộng 10–50 μm là phổ biến. Khả năng etch feature với góc sidewall được kiểm soát tốt cho phép hành vi vi lưu chính xác và bonding tin cậy với wafer nắp.

### 4.5 Điện tử công suất

Các trench cách ly sâu (20–100 μm) trong linh kiện bán dẫn công suất cung cấp cách ly điện giữa vùng cao áp và hạ áp. Superjunction MOSFET và IGBT dùng trench etch bằng DRIE, sau đó được lấp đầy bằng oxide hoặc polysilicon để tạo các cấu trúc cân bằng điện tích cần thiết cho điện áp đánh thủng cao.

---

## 5. Kiểm soát scallop và các defect DRIE thường gặp

Dù rất linh hoạt, quy trình Bosch tạo ra một số artifact đặc trưng mà kỹ sư phải hiểu và xử lý. Sidewall scalloping là artifact chủ đạo và là trọng tâm của phần lớn nỗ lực tinh chỉnh quy trình.

### 5.1 Sidewall Scalloping & tinh chỉnh thời gian chu kỳ

Artifact dễ nhận biết nhất của quy trình Bosch là sidewall scalloping — dạng gợn sóng tuần hoàn trên thành trench do các chu kỳ etch/passivation luân phiên gây ra. Mỗi bước etch loại bỏ đẳng hướng một lượng nhỏ silicon theo phương ngang trước khi bước passivation kế tiếp tái bảo vệ bề mặt. Biên độ scallop tỷ lệ gần như tuyến tính với thời lượng bước etch và tỷ lệ nghịch với hiệu quả passivation. Thời gian chu kỳ tiêu chuẩn (2–5 s) tạo scallop 50–200 nm; chu kỳ siêu ngắn (< 1 s) đẩy biên độ xuống dưới 30 nm nhưng đánh đổi tốc độ etch thực.

Vì sao điều này quan trọng: độ nhám scallop làm suy giảm độ conformal của thin-film trong metallization TSV, tăng tán xạ quang trong linh kiện photonic, và giảm tuổi thọ mỏi (fatigue life) của MEMS resonator. Bảng dưới tóm tắt các chế độ tinh chỉnh chu kỳ mà kỹ sư thực sự sử dụng:

| Chế độ | Bước etch | Bước passivation | Biên độ scallop | Tốc độ etch thực | Phù hợp nhất cho |
| --- | --- | --- | --- | --- | --- |
| **High-throughput** | 5–8 s, bias 30 W | 3–4 s | 150–300 nm | 10–20 µm/phút | Release bulk MEMS, cavity sâu |
| **Balanced** | 2–4 s, bias 20 W | 2–3 s | 50–150 nm | 5–10 µm/phút | MEMS tiêu chuẩn, TSV via-middle |
| **Smooth** | 0,8–1,5 s, bias 15 W | 1–1,5 s | 20–50 nm | 2–4 µm/phút | Waveguide Si photonic, MEMS quang |
| **Pulsed-bias smooth** | 1–2 s, bias xung 10–20% | 1–2 s | 10–30 nm | 1–3 µm/phút | MEMS aspect ratio cao, stack nhạy tích điện |
| **Cryogenic (không phải Bosch)** | SF₆/O₂ liên tục | — | < 10 nm | 1–3 µm/phút | Photonics cao cấp, AR > 50:1 |

Ngoài tinh chỉnh chu kỳ, bốn lựa chọn hậu xử lý để giảm thêm độ nhám scallop là:

- **Isotropic SF₆ smoothing** — Một xung SF₆ ngắn không bias sau etch chính giảm peak-to-valley 70–90% nhưng làm tròn kích thước tới hạn.
- **Oxy hóa nhiệt + bóc oxide** — Oxy hóa hy sinh ở 1000 °C rồi bóc bằng HF làm phẳng scallop nhờ tiêu thụ chênh lệch.
- **H₂ anneal** — Ủ 1000–1100 °C trong H₂ kích hoạt sự di trú silicon bề mặt, làm mịn scallop mà không mất kích thước; là chuẩn cho waveguide Si photonic cao cấp.
- **Chuyển sang cryogenic DRIE** — Loại bỏ hoàn toàn sự hình thành scallop bằng cách thay chu kỳ Bosch bằng SF₆/O₂ liên tục ở −100 tới −120 °C; cần hạ tầng LN₂.

![Sơ đồ sidewall scalloping: cận cảnh gợn sóng tuần hoàn từ chu kỳ Bosch, biểu đồ thời gian chu kỳ vs độ sâu scallop, các chiến lược giảm thiểu, và so sánh chất lượng sidewall Bosch vs cryogenic DRIE](deep-etch-equipment/drie-scalloping.png)

> Hình 2: Sidewall Scalloping — Cận cảnh độ nhám sidewall tuần hoàn từ chu kỳ Bosch, ảnh hưởng của thời gian chu kỳ lên độ sâu scallop, các chiến lược giảm thiểu, và so sánh Bosch (scalloped, Ra 50–200 nm) vs cryogenic DRIE (mịn, Ra < 10 nm)

### 5.2 Aspect Ratio Dependent Etching (ARDE)

ARDE — còn gọi là RIE lag — là hiện tượng trench hẹp etch chậm hơn trench rộng dưới cùng điều kiện quy trình. Nguyên nhân gốc là vận chuyển Knudsen: khi aspect ratio tăng, các chất phản ứng trung hòa (gốc fluorine) có xác suất tới được đáy trench ngày càng giảm do va chạm với thành. Với aspect ratio trên 10:1, tốc độ etch có thể giảm còn 50% hoặc thấp hơn so với vùng mở, gây bất đồng đều độ sâu đáng kể giữa các feature có bề rộng khác nhau trên cùng wafer.

![Sơ đồ Aspect Ratio Dependent Etching: các trench bề rộng khác nhau bị etch tới độ sâu khác nhau dưới cùng điều kiện, đường cong tốc độ etch vs aspect ratio, và các hướng giảm thiểu ARDE](deep-etch-equipment/drie-arde.png)

> Hình 3: ARDE (RIE Lag) — Trench rộng etch sâu hơn đáng kể so với trench hẹp trong cùng thời gian quy trình. Đường cong tốc độ etch vs aspect ratio cho thấy sự suy giảm theo hàm mũ do giới hạn vận chuyển khuếch tán Knudsen của chất phản ứng

Các hướng giảm thiểu ARDE bao gồm:

- **Pressure ramping** — Tăng áp suất buồng trong giai đoạn etch sâu cung cấp nhiều phân tử chất phản ứng hơn để cải thiện vận chuyển vào feature hẹp.
- **Điều chỉnh lưu lượng khí động** — Biến điệu tỷ lệ SF₆/C₄F₈ khi độ sâu tăng.
- **Sơ đồ pulsed bias** — Bắn phá ion điều biến theo thời gian có thể cải thiện khả năng tiếp cận đáy ở feature aspect ratio cao.
- **Quy tắc thiết kế** — Giữ bề rộng feature đồng đều khi có thể, hoặc thêm dummy feature để cân bằng loading cục bộ.

### 5.3 Hiệu ứng Notching (Footing)

Khi etch silicon nằm trên một lớp cách điện (ví dụ buried oxide của SOI), điện tích dương tích tụ trên phần dielectric hở ở đáy trench. Điện tích này làm lệch các ion tới theo phương ngang, gây ra một "notch" (khía) hay "foot" (chân) undercut tại mặt phân cách silicon/oxide. Notching có thể được giảm thiểu bằng pulsed-LF bias — cho phép điện tích tiêu tán giữa các xung — hoặc bằng cách dùng bias đế tần số thấp (380 kHz).

### 5.4 Grass và Micromasking

Silicon "grass" (cỏ silicon) — các tàn dư hình kim ở đáy trench — xuất hiện khi vật liệu mask tái lắng đọng hoặc by-product etch không bay hơi tạo thành các etch mask vi mô. Các yếu tố góp phần gồm chất lượng mask kém, polymer tích tụ quá mức, và bắn phá ion không đủ. Phòng ngừa bằng cách tối ưu tỷ lệ passivation/etch, đảm bảo đủ công suất platen, và dùng vật liệu mask sạch với sputtering tối thiểu.

### 5.5 Profile Tilting và Bowing

Profile không thẳng đứng có thể do hiệu ứng phân bố góc của ion. **Bowing** (profile phình dạng thùng) xảy ra khi ion phản xạ từ phần trên sidewall làm tăng etch ngang ở giữa trench. **Tilting** (nghiêng) do thông lượng ion bất đối xứng, thường vì vị trí đặt wafer hoặc sự bất đối xứng của buồng. Cả hai được xử lý qua kiểm soát công suất platen cẩn thận, tối ưu áp suất, và bảo trì buồng.

---

## 6. Xu hướng tương lai của DRIE

### 6.1 Cryogenic DRIE

Cryogenic DRIE vận hành ở nhiệt độ đế −80 °C tới −120 °C dùng hóa học SF₆/O₂ liên tục (không chu kỳ). Ở nhiệt độ cryogenic, lớp passivation oxygen-silicon hình thành trên sidewall đủ bền để ngăn etch ngang, trong khi đáy trench liên tục được dọn sạch bởi bắn phá ion. Ưu điểm then chốt là sidewall không scallop (Ra < 5 nm), hấp dẫn cho các ứng dụng photonic và MEMS cần bề mặt chất lượng quang học. Tuy nhiên, hệ cryogenic đòi hỏi làm lạnh chuck chuyên dụng và cửa sổ quy trình nhìn chung hẹp hơn Bosch. Để so sánh chuyên sâu, xem bài Cryogenic Etching vs. Bosch Process.

### 6.2 Atomic Layer Etching (ALE)

ALE áp dụng khái niệm phản ứng bề mặt tự giới hạn (self-limiting) vào etching, cho phép kiểm soát độ sâu dưới nanomet mỗi chu kỳ. Dù ALE quá chậm cho etch sâu, các phương pháp lai kết hợp độ chính xác ALE cho bề mặt tới hạn với DRIE thông thường cho việc loại bỏ khối lượng lớn đang được phát triển cho các ứng dụng như etch gate FinFET và cấu trúc 3D NAND tiên tiến.

### 6.3 Kiểm soát quy trình bằng AI và Machine Learning

Các tool DRIE hiện đại ngày càng tích hợp giám sát quy trình thời gian thực (optical emission spectroscopy, laser interferometry) kết hợp với thuật toán ML cho phát hiện endpoint, đồng bộ buồng-với-buồng (chamber matching), và tự tối ưu recipe. Các hướng tiếp cận này có thể rút ngắn thời gian phát triển quy trình và cải thiện độ lặp lại run-to-run, đặc biệt cho các fab MEMS đa chủng loại (high-mix).

### 6.4 Tích hợp dị thể và đóng gói tiên tiến

Sự chuyển dịch của ngành bán dẫn sang kiến trúc chiplet và xếp chồng 3D đang thúc đẩy nhu cầu TSV mật độ cao hơn, via sâu hơn, và feature pitch chặt hơn. Phát triển quy trình DRIE đang tiến hóa để đáp ứng các nhu cầu này với độ đồng đều, throughput và khả năng tương thích tốt hơn với các flow đóng gói cấp wafer tiên tiến.

---

## 7. Kết luận

Quy trình Bosch đã mở rộng căn bản năng lực của vi chế tạo silicon, cho phép thu nhỏ và tích hợp MEMS, photonics, linh kiện công suất và 3D IC. Hiểu được sự tương tác giữa tham số quy trình, chất lượng sidewall và độ đồng đều etch là điều thiết yếu với kỹ sư làm việc với etch silicon sâu. Khi ngành công nghiệp tiến tới các aspect ratio khắt khe hơn và dung sai kích thước chặt hơn nữa, các đổi mới về quy trình cryogenic, ALE và kiểm soát quy trình thông minh sẽ tiếp tục nâng cao những gì DRIE có thể đạt được.

## FAQ

**Câu 1: Quy trình Bosch trong DRIE là gì?**
Đáp: Quy trình Bosch là một phương pháp deep reactive ion etch phân chia thời gian (time-multiplexed), luân phiên các bước etch SF₆ ngắn với các bước passivation C₄F₈. Màng fluorocarbon lắng đọng trong pha passivation bảo vệ sidewall khỏi bị tấn công ngang, để các chu kỳ etch kế tiếp tiến thẳng đứng vào silicon, cho phép aspect ratio vượt xa những gì RIE chế độ liên tục có thể đạt.

**Câu 2: Kiểm soát scalloping trong DRIE bằng cách nào?**
Đáp: Biên độ scallop được quyết định chủ yếu bởi thời lượng bước etch và năng lượng ion. Chu kỳ etch ngắn hơn (1–3 s thay vì 5–8 s), giảm platen bias trong bước etch, và tăng lưu lượng khí passivation thu nhỏ scallop xuống dưới 50 nm. Với độ nhám sidewall dưới 20 nm, pulsed-bias Bosch hoặc cryogenic DRIE thường phù hợp hơn so với việc tinh chỉnh thời gian chu kỳ quá mức.

**Câu 3: Tốc độ etch điển hình của Bosch DRIE với silicon là bao nhiêu?**
Đáp: Recipe Bosch tiêu chuẩn đạt 3–10 µm/phút với silicon; recipe high-throughput có thể đạt 15–20 µm/phút nhưng đánh đổi scallop lớn hơn một chút và selectivity giảm. Tốc độ etch tăng theo công suất ICP, lưu lượng SF₆ và áp suất buồng, nhưng feature aspect ratio cao chạy chậm hơn do ARDE (aspect-ratio-dependent etching).

**Câu 4: Bosch DRIE vs cryogenic DRIE — nên chọn cái nào?**
Đáp: Chọn Bosch khi cần vận hành ở nhiệt độ phòng thân thiện với sản xuất loạt, throughput cao, và recipe đã được hiểu rõ cho MEMS / TSV. Chọn cryogenic DRIE (đế ở −100 tới −120 °C) khi độ mịn sidewall là tối quan trọng (photonics, MEMS quang) hoặc khi aspect ratio vượt 50:1 — cryo loại bỏ scallop bằng cách ức chế etch ngang theo con đường hóa học thay vì bằng chu kỳ passivation. Hệ cryo đòi hỏi hạ tầng LN₂ và kiểm soát nhiệt độ chặt hơn.

**Câu 5: Các defect DRIE phổ biến nhất và cách khắc phục?**
Đáp: Bốn defect thường gặp là (1) _grass / black silicon_ do micromasking — khắc phục bằng over-etch dài hơn và vệ sinh buồng; (2) _notching_ tại buried oxide của wafer SOI — chuyển sang chế độ pulsed-bias; (3) _ARDE_ khiến feature hẹp etch chậm hơn — bù bằng CD bias trên mask hoặc tăng dần bias giữa recipe; và (4) _sidewall quá nhám_ — giảm thời gian chu kỳ etch và tăng bước passivation.

## Tài liệu tham khảo

1. Laermer, F. & Schilp, A. "Method of Anisotropically Etching Silicon." U.S. Patent 5,501,893 (1996). Robert Bosch GmbH.
2. Wu, B., Kumar, A. & Pamarthy, S. "High aspect ratio silicon etch: A review." _Journal of Applied Physics_, 108(5), 051101 (2010). doi:10.1063/1.3474652
3. Blauw, M. A., et al. "Advanced time-multiplexed plasma etching of high aspect ratio silicon structures." _Journal of Vacuum Science & Technology B_, 20(6), 3106–3110 (2002). doi:10.1116/1.1523403
4. Rangelow, I. W. "Critical tasks in high aspect ratio silicon dry etching for microelectromechanical systems." _Journal of Vacuum Science & Technology A_, 21(4), 1550–1562 (2003). doi:10.1116/1.1580488
5. Marty, F., et al. "Advanced etching of silicon based on deep reactive ion etching for silicon high aspect ratio microstructures and three-dimensional micro- and nanostructures." _Microelectronics Journal_, 36(7), 673–677 (2005). doi:10.1016/j.mejo.2005.04.039
6. Henry, M. D., et al. "Alumina etch masks for fabrication of high-aspect-ratio silicon micropillars and nanopillars." _Nanotechnology_, 20(25), 255305 (2009). doi:10.1088/0957-4484/20/25/255305
7. Sammak, A., et al. "Deep reactive ion etching of silicon for microsystem fabrication." _Journal of Micromechanics and Microengineering_, 16(4), 912–916 (2006).
8. Gerlt, M. S., et al. "Reduced etch lag and high aspect ratios by deep reactive ion etching (DRIE)." _Micromachines_, 12(5), 542 (2021). doi:10.3390/mi12050542

_Nguồn: NineScrolls LLC — "Deep Reactive Ion Etching (DRIE): Bosch Process Guide for MEMS & TSV" (ninescrolls.com/insights/deep-reactive-ion-etching-bosch-process)._
