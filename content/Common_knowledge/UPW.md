> Bài viết tổng hợp về vai trò, vòng tuần hoàn, tiêu chuẩn kỹ thuật và bài toán năng lượng của nước siêu tinh khiết (UPW) trong các nhà máy chế tạo chip (fab). Nội dung được biên soạn lại từ bộ slide kỹ thuật, có bổ sung diễn giải để đọc liền mạch như một bài chuyên đề.

## 1. Vì sao nước siêu tinh khiết lại quan trọng với một fab?

Trong chế tạo bán dẫn, nước không chỉ là một tiện ích phụ trợ mà là một loại "vật liệu sản xuất" theo đúng nghĩa. Mỗi tấm wafer phải trải qua hàng trăm bước rửa, ăn mòn (etching), đánh bóng và làm sạch bề mặt. Chỉ cần một ion kim loại, một hạt bụi siêu nhỏ hay một phân tử hữu cơ bám lại trên bề mặt wafer là đủ để làm hỏng cả một transistor có kích thước chỉ vài nanomét. Vì vậy, nước dùng cho các bước này phải được tinh chế tới mức gần như chỉ còn lại các phân tử H₂O — đó chính là nước siêu tinh khiết (Ultra Pure Water, viết tắt UPW).

Khi nhìn vào cơ cấu sử dụng nước bên trong một fab điển hình, có thể thấy phần lớn nước được dồn cho khâu "process" (các công đoạn xử lý wafer trực tiếp), trong khi các hạng mục phụ trợ chiếm tỷ trọng nhỏ hơn nhiều.

![Cơ cấu sử dụng nước bên trong một fab: Process ~76%, Scrubber 11%, Cooling Tower 9%, Kitchen/Toilets 2%, Other 2%](upw/02a-water-usage-within-fab.png)

_Cơ cấu sử dụng nước trong một fab: khâu xử lý (process) chiếm khoảng 76% tổng lượng nước, tiếp đến là scrubber (11%) và tháp giải nhiệt (9%); phần dùng cho sinh hoạt và mục đích khác chỉ chiếm vài phần trăm._

Lượng nước tiêu thụ cũng rất khác nhau giữa các quốc gia và công nghệ. Biểu đồ dưới đây so sánh lượng nước cấp hằng năm (annual feedwater withdrawal) của các fab tại nhiều nước, phân tách theo loại công nghệ (CMOS, flash, logic, RAM…). Các trung tâm sản xuất lớn như Đài Loan, Nhật Bản, Trung Quốc và Hàn Quốc nằm trong nhóm tiêu thụ nước nhiều nhất.

![Biểu đồ lượng nước cấp hằng năm của các fab theo từng quốc gia, phân loại theo công nghệ CMOS, flash, logic, other, RAM](upw/02b-water-used-by-fabs.png)

_Lượng nước cấp hằng năm (tỷ lít) của các fab theo quốc gia và loại công nghệ. Nguồn: <a href="https://www.semiconductor-digest.com/water-supply-challenges-for-the-semiconductor-industry/" target="_blank" rel="noopener">semiconductor-digest.com</a>._

## 2. Bán dẫn — ngành "khát nước" hơn cả trung tâm dữ liệu

Một góc nhìn thú vị khác là đặt ngành bán dẫn cạnh các trung tâm dữ liệu (data center) — vốn thường được nhắc tới như "kẻ ngốn nước" của ngành công nghệ. Trên thực tế, ở quy mô toàn ngành, sản xuất bán dẫn tiêu thụ lượng nước lớn hơn đáng kể so với các data center.

![So sánh lượng nước tiêu thụ hằng năm: data center khoảng 400 triệu m³ so với sản xuất bán dẫn khoảng 1000 triệu m³; và lượng nước rút của từng hãng lớn](upw/03-datacenter-vs-semiconductor-water.png)

_Bên trái: ước tính lượng nước tiêu thụ hằng năm của data center (~400 triệu m³) so với sản xuất bán dẫn (~1.000 triệu m³). Bên phải: lượng nước rút năm 2023 của các "hyperscaler" (Alphabet, Microsoft, Meta) so với các nhà sản xuất chip (TSMC, SK Hynix, Intel) — trong đó TSMC và SK Hynix nổi bật với 114 và 107 triệu m³._

Điểm đáng chú ý là các nhà sản xuất chip riêng lẻ như TSMC hay SK Hynix có lượng nước rút lớn gấp nhiều lần so với các ông lớn vận hành data center. Điều này cho thấy bài toán quản lý nước trong fab không chỉ là vấn đề chi phí mà còn là vấn đề bền vững và an ninh nguồn nước.

## 3. Vòng đời của nước gắn liền với vòng đời thiết bị điện tử

Để hiểu nước "chảy" qua đâu trong quá trình sản xuất, có thể đặt nó trong bức tranh vòng đời tổng thể của thiết bị điện tử — từ xử lý vật liệu, chế tạo linh kiện, lắp ráp, sử dụng, cho tới tháo dỡ và tái chế.

![Sơ đồ vòng đời thiết bị điện tử và chu trình nước trong sản xuất bán dẫn, từ cấp nước siêu tinh khiết và nước đô thị tới trạm xử lý nước thải và đầu ra effluent](upw/04-electronics-lifecycle-water.png)

_Tổng quan vòng đời "end-of-life" của thiết bị điện tử và chu trình nước trong quá trình sản xuất bán dẫn — từ khâu cấp nước (ultra pure water và municipal water), qua dòng nước thải bán dẫn, tới trạm xử lý nước thải với bốn nhóm phương pháp (vật lý, hóa học, sinh học và tích hợp) rồi thải ra ngoài (effluent), kèm vòng tuần hoàn nước tái sử dụng._

Trong sơ đồ này, nước siêu tinh khiết và nước đô thị được đưa vào khâu chế tạo linh kiện, tạo ra dòng nước thải bán dẫn, sau đó được dẫn qua nhà máy xử lý nước thải. Mũi tên "recycled water" thể hiện ý tưởng then chốt: một phần nước được thu hồi và quay trở lại đầu vào thay vì thải bỏ hoàn toàn.

## 4. Các bước sản xuất và hóa chất gây ô nhiễm nước

Mỗi công đoạn trong fab sử dụng những nhóm hóa chất khác nhau, và phần lớn trong số đó là nguồn gây ô nhiễm cho dòng nước thải. Sơ đồ dưới đây liệt kê các bước chế tạo điển hình cùng những hóa chất thường dùng và mức độ nguy hại tương ứng.

![Sơ đồ các công đoạn sản xuất bán dẫn (Wafer Production, Oxidation, Lithography, Deposition, Wet Etching, Ion Implantation, CMP, Metallization, Testing) cùng danh sách hóa chất và ký hiệu mức độ nguy hại](upw/05-manufacturing-steps-chemicals.png)

_Các công đoạn sản xuất truyền thống trong ngành bán dẫn cùng hóa chất sử dụng và mức độ nguy hại: từ sản xuất wafer, oxy hóa, quang khắc (lithography), lắng đọng màng (deposition), ăn mòn ướt/khô (etching), cấy ion (ion implantation), đánh bóng cơ-hóa (CMP), tạo lớp kim loại (metallization) cho tới kiểm tra. Các ký hiệu cảnh báo gồm chất oxy hóa, khí nén, chất gây kích ứng, dễ cháy, ăn mòn, độc tính, độc cấp tính và nguy hại môi trường._

Có thể thấy danh sách hóa chất trải dài từ các acid mạnh (hydrofluoric, nitric, sulfuric), dung môi hữu cơ, đến các hợp chất kim loại nặng. Đây chính là lý do dòng nước thải của fab cần được xử lý qua nhiều tầng trước khi thải ra môi trường hoặc tái sử dụng.

## 5. Vòng tuần hoàn của nước siêu tinh khiết

UPW không được tạo ra trong một bước duy nhất, mà là kết quả của một chuỗi xử lý nhiều tầng. Sơ đồ dưới đây mô tả hành trình của nước từ nước cấp thô (make-up water) cho tới khi đạt độ tinh khiết cấp ppb (parts per billion) để đưa vào fab.

![Sơ đồ vòng tuần hoàn nước siêu tinh khiết: từ make-up water qua lọc đa tầng, lọc than hoạt tính, làm mềm, thẩm thấu ngược hai tầng, khử khoáng sơ cấp, EDI, đến vòng polishing và quay về fab](upw/06-upw-loop-diagram.png)

_Vòng tuần hoàn nước siêu tinh khiết. Dòng "make-up water" được xử lý qua lọc đa tầng (multimedia filtration), lọc than hoạt tính, lọc 10 micron, làm mềm kép (dual softeners), tiền lọc 5 micron và thẩm thấu ngược hai tầng (dual stage reverse osmosis). Tiếp đó là khử khoáng sơ cấp (primary demineralization, 500–10 ppb) gồm trữ RO, giảm TOC bằng UV và khử ion bằng điện (EDI). Cuối cùng là vòng đánh bóng (polishing loop, 10 → 1 ppb) với UV, khử khí, làm lạnh, khử ion giường trộn và siêu lọc trước khi cấp vào fab, kèm dòng "return from fab" thu hồi nước về._

Điểm cốt lõi của hệ thống là **vòng polishing loop**: nước sau khi qua khâu sơ cấp tiếp tục được "đánh bóng" để hạ tổng carbon hữu cơ và tạp chất xuống mức cực thấp (1 ppb). Đồng thời, dòng "return from fab" cho thấy nước không chỉ chảy một chiều — phần nước quay về được xử lý lại để tận dụng tối đa.

## 6. Lượng nước siêu tinh khiết cần dùng cho mỗi wafer

Để hình dung quy mô tiêu thụ, có thể nhìn vào những con số định lượng đã được công bố trong các nghiên cứu và báo cáo ngành:

- Chế tạo IC trên một wafer 300 mm có thể cần khoảng **2.200 gallon (≈ 8.327 lít) nước**, trong đó khoảng **1.500 gallon (≈ 5.678 lít) là UPW**.¹
- Theo một nguồn khác, sản xuất một IC trên wafer 300 mm cần khoảng **8.328 lít nước** tổng cộng, trong đó **5.678 lít là nước siêu tinh khiết**.²
- Tới cuối thập niên 2010 và đầu thập niên 2020, các fab công nghệ tiên tiến (leading-edge) dùng khoảng **2.000–3.000 lít UPW cho mỗi wafer 300 mm**.³
- Mức tiêu thụ UPW trung bình trên mỗi đơn vị diện tích wafer ước tính lần lượt là **8,27 — 7,96 — 8,22 — 7,16 L/cm²** trong các năm 2018 đến 2021.⁴

**Nguồn tham khảo:**

- [1] _Semiconductor manufacturing wastewater challenges and the potential solutions via printed electronics._
- [2] <a href="https://www.veoliawatertechnologies.com/en/core-markets/electronics-and-photovoltaics" target="_blank" rel="noopener">veoliawatertechnologies.com — Electronics and photovoltaics</a>
- [3] <a href="https://cleanroomtechnology.com/liquid-contamination-control-in-semiconductor-manufacturing-a-deep" target="_blank" rel="noopener">cleanroomtechnology.com — Liquid contamination control in semiconductor manufacturing</a>
- [4] <a href="https://www.sciencedirect.com/science/article/pii/S2666445323000041" target="_blank" rel="noopener">sciencedirect.com — S2666445323000041</a>

## 7. Hệ thẩm thấu ngược (Reverse Osmosis)

Một trong những công nghệ trụ cột để tạo ra UPW là thẩm thấu ngược (reverse osmosis, RO). Trong hiện tượng thẩm thấu tự nhiên, nước di chuyển từ dung dịch loãng sang dung dịch đặc qua màng bán thấm. Khi áp một áp suất đủ lớn lên phía dung dịch đặc, dòng chảy bị đảo ngược — đó chính là "thẩm thấu ngược", giúp tách nước sạch khỏi tạp chất.

![Sơ đồ nguyên lý thẩm thấu (osmosis) và thẩm thấu ngược (reverse osmosis), kèm bảng so sánh khả năng giữ lại tạp chất của microfiltration, ultrafiltration, nanofiltration và reverse osmosis](upw/08-reverse-osmosis-filtration.png)

_Phía trên: so sánh nguyên lý thẩm thấu thông thường và thẩm thấu ngược (cần áp suất). Phía dưới: phổ khả năng lọc của bốn công nghệ màng — microfiltration, ultrafiltration, nanofiltration và reverse osmosis — đối với nước, ion đơn hóa trị, ion đa hóa trị, virus, vi khuẩn và chất rắn lơ lửng. Reverse osmosis là cấp lọc khắt khe nhất, gần như chỉ cho nước đi qua. Nguồn: <a href="https://news.skhynix.com/water-management-is-essential-to-the-semiconductor-industry/" target="_blank" rel="noopener">SK Hynix Newsroom</a>._

Càng đi xuống thang lọc (từ microfiltration tới reverse osmosis), kích thước tạp chất bị giữ lại càng nhỏ. RO là cấp khắt khe nhất, có khả năng loại bỏ cả ion đơn hóa trị — điều kiện cần để tiến tới UPW.

## 8. Tái chế và tái sử dụng nước

Vì chi phí nước và áp lực bền vững ngày càng lớn, các hãng bán dẫn đầu tư mạnh vào việc thu hồi và tái sử dụng. Bảng dưới đây tổng hợp hiệu suất tiêu thụ, tái chế và thu hồi nước của các công ty bán dẫn lớn trên thế giới (số liệu năm 2015).

![Bảng 1 — Hiệu suất tiêu thụ, tái chế và thu hồi nước của các công ty bán dẫn lớn toàn cầu năm 2015 (Intel, Samsung, TSMC, Qualcomm, Micron, Infineon, Global Foundries, STM)](upw/09-water-recycling-table1.png)

_Bảng 1: Hiệu suất tiêu thụ, tái chế và thu hồi nước của các công ty bán dẫn lớn toàn cầu năm 2015. Bảng phân biệt rõ ba khái niệm: "recycled" (nước tái sử dụng sau xử lý), "reclaimed" (nước thu hồi từ chất thải để dùng cho mục đích hữu ích) và "reused" (dùng lại trong ứng dụng thứ cấp không qua xử lý). Đáng chú ý: Micron có tỷ lệ tái chế tới >70% ở Nhật Bản/Đài Loan; TSMC thu hồi/tái chế 65,3 Mm³ trên tổng tiêu thụ 37,5 Mm³. Nguồn: W. Den et al. / Water-Energy Nexus 1 (2018) 116–133._

Riêng với Đài Loan — nơi tập trung nhiều fab hàng đầu — số liệu chi tiết hơn cho thấy mức độ thu hồi rất cao ở từng công đoạn xử lý (process-level recovery).

![Bảng 2 — Hiệu suất tiêu thụ nước của các công ty bán dẫn lớn tại Đài Loan năm 2015 (TSMC, UMC, Powerchip, Winbond, VIS, Macronix)](upw/10-water-recycling-table2-taiwan.png)

_Bảng 2: Hiệu suất tiêu thụ nước của các công ty bán dẫn lớn tại Đài Loan (số liệu 2015). TSMC thu hồi 65,3 Mm³ với tỷ lệ thu hồi cấp process 87,3%; nhiều hãng khác như Powerchip, Winbond, VIS, Macronix đều đạt tỷ lệ thu hồi quá trình trên 80%. Cột "water use efficiency" thể hiện hiệu suất theo các đơn vị khác nhau (L/8″ wafer-layer, m³ UPW/m² wafer…). Nguồn: W. Den et al. / Water-Energy Nexus 1 (2018) 116–133._

## 9. Phân bổ năng lượng trong một fab

Nước và năng lượng trong fab gắn bó chặt chẽ (water-energy nexus). Để hiểu bức tranh năng lượng, sơ đồ Sankey dưới đây phân rã tổng ngân sách năng lượng của một fab thành các nhánh tiêu thụ.

![Sơ đồ Sankey phân bổ năng lượng của một fab: chia thành Tool (40,4%), Office (3,4%), Facility (56,2%), rồi tách tiếp thành air exchange, C/R environmental control và water-related operations](upw/11-fab-energy-sankey.png)

_Phân bổ năng lượng trong một fab. Tổng ngân sách năng lượng được chia thành Tool (40,4%), Office (3,4%) và Facility (56,2%). Nhánh Facility tiếp tục tách thành nhiều thành phần: chiller (27,2%), khí nén khô (2,8%), chiếu sáng (1,3%), nitơ (5%), và đặc biệt là các hoạt động liên quan đến nước (water-related operations) chiếm 9,3% — trong đó UPW chiếm 3%, xử lý nước 2,7%, nước ngưng tụ 1,8% và nước làm mát quá trình 1,8%. Air exchange chiếm 10,6%, C/R environmental control chiếm 36,2%. Nguồn: W. Den et al. / Water-Energy Nexus 1 (2018) 116–133._

Điều đáng lưu ý là các "water-related operations" — bao gồm cả việc sản xuất và xử lý UPW — chiếm gần 1/10 tổng năng lượng của fab. Tức là tiết kiệm nước cũng đồng nghĩa với tiết kiệm năng lượng.

## 10. Phân bổ nước trong một fab

Tương tự, dòng nước trong fab cũng có thể được biểu diễn bằng sơ đồ Sankey, từ nguồn cấp đô thị (municipal water supply) cho tới điểm thải cuối cùng.

![Sơ đồ Sankey phân bổ nước của một fab: từ municipal water supply chia thành process use 97%, facility use 1%, office use 2%; sau đó thành reclaimed to process, reclaimed for facility, facility loss và các dòng thải tới WWT và Loss](upw/12-fab-water-sankey.png)

_Phân bổ nước trong một fab. Nước cấp từ municipal water supply được dùng chủ yếu cho process (97%), còn lại cho facility (1%) và office (2%). Một tỷ lệ lớn được tái sử dụng: 64% nước được "reclaimed to process" (thu hồi quay lại quá trình) và 33% "reclaimed for facility". Các dòng thải ra cuối gồm: thải gián tiếp qua facility 26%, thải trực tiếp 20%, facility discharge 21% và facility loss 31%, dẫn về trạm xử lý nước thải (WWT) hoặc thất thoát (Loss). Nguồn: W. Den et al. / Water-Energy Nexus 1 (2018) 116–133._

Sơ đồ này cho thấy rõ vì sao tái chế lại quan trọng: tỷ lệ nước được thu hồi quay lại quá trình (64%) là rất lớn, giúp giảm đáng kể lượng nước sạch cần bổ sung.

## 11. Hệ thống chu trình nước đề xuất trong sản xuất bán dẫn

Từ những phân tích trên, các nghiên cứu đề xuất một mô hình chu trình nước khép kín, chia thành ba khu vực chính: nguồn nước (water source), sử dụng nước (water use) và thải nước (water discharge).

![Sơ đồ hệ thống chu trình nước đề xuất, chia ba vùng: Water source, Water use (gồm UPW system và semiconductor production), Water discharge với các nhánh xử lý sinh học, lý-hóa và hệ thu hồi tài nguyên](upw/13-proposed-water-cycle.jpeg)

_Hệ thống chu trình nước đề xuất trong sản xuất bán dẫn, gồm ba khối: (1) Water source — nước mặt, nước tái sử dụng, nước máy/nước ngầm; (2) Water use — phân bổ nước cho hệ UPW và sản xuất bán dẫn, kèm các dòng nước làm mát, scrubber, nước mưa/ngưng tụ tái sử dụng cho tưới tiêu và nước sinh hoạt; (3) Water discharge — xử lý nước thải hữu cơ bằng phương pháp sinh học, xử lý lý-hóa, hệ thu hồi tài nguyên, rồi thải ra sông/biển. Nguồn: <a href="https://www.sciencedirect.com/science/article/pii/S2666445322000277" target="_blank" rel="noopener">sciencedirect.com — S2666445322000277</a>._

Một phiên bản đồ họa khác của cùng ý tưởng này, được trình bày trực quan hơn theo ba lớp Source – Utilization – Discharge:

![Sơ đồ Semiconductor Manufacturing Water Cycle theo phong cách IDTechEx, ba hàng Source / Utilization / Discharge với các biểu tượng tròn cho từng thành phần](upw/14-water-cycle-idtechex.png)

_Chu trình nước trong sản xuất bán dẫn (phiên bản đồ họa của IDTechEx Research), trình bày theo ba lớp: Source (nguồn nước), Utilization (sử dụng — gồm hệ UPW, làm mát, scrubber, water purification, sản xuất bán dẫn, nước sinh hoạt) và Discharge (thải — xử lý lý-hóa, xử lý sinh học, nước thải hữu cơ và nước đầu ra effluent), kèm dòng backwash wastewater và rejected water quay lại tái xử lý._

## 12. Cấu hình hệ UPW tiêu biểu (tiêu chuẩn draft-SEMI)

Theo bản dự thảo tiêu chuẩn SEMI, một hệ thống UPW tiêu biểu được chia làm hai phân hệ lớn: **Make-up Plant** (tạo nước) và **Polish Plant** (đánh bóng nước).

![Sơ đồ cấu hình hệ UPW tiêu biểu theo tiêu chuẩn draft-SEMI: phần Make-up Plant với pretreatment và primary, phần Polish Plant với UPW tank, UV, HEX, degas, polish MB, final filters, POU filters trước khi vào FAB](upw/15-upw-system-config-semi.png)

_Cấu hình hệ UPW tiêu biểu (Figure 1 — Typical UPW System Configuration). **Make-up Plant** gồm phần tiền xử lý (pretreatment): bồn nước thô → media-filter (MMF, ACF) → deionization (tùy chọn) → RO hai tầng; và phần sơ cấp (primary): permeate tank → degasifier (tùy chọn) → UV 185 nm → ion exchange (AB/EDI/MB). **Polish Plant** gồm: UPW tank (có thể ozone hóa) → UV 185 nm → HEX → degas (tháp hoặc màng) → polish MB → final filters → POU filters, rồi cấp vào FAB. Nguồn: <a href="https://downloads.semi.org/web/wstdsbal.nsf/0/61a812c7e75a26fd882580c7001ee39b/$FILE/6129.pdf" target="_blank" rel="noopener">downloads.semi.org — tài liệu 6129</a>._

Bản dự thảo cũng quy định vị trí lấy mẫu giám sát chất lượng nước tại các điểm khác nhau trong hệ thống — từ tiền xử lý, đầu cấp UPW tank, điểm cấp UPW tại POD, cho tới điểm phân phối POC.

![Bảng A2-1 — Vị trí lấy mẫu tiêu biểu cho các phương pháp giám sát chất lượng nước trong hệ UPW, theo từng chỉ tiêu (SDI, ORP, conductivity, TOC, metals, anions...)](upw/16-upw-monitoring-locations-table.png)

_Bảng A2-1: Vị trí lấy mẫu tiêu biểu cho các phương pháp giám sát chất lượng nước trong hệ UPW. Mỗi chỉ tiêu phân tích (SDI, ORP, THM, độ dẫn/điện trở suất, oxy hòa tan, nitơ hòa tan, hạt online, TOC, kim loại bằng ICPMS, anion bằng IC, vi khuẩn, silica, urê, organic speciation…) được chỉ định nên đo online, đo bằng mẫu lấy (GRAB) hay không áp dụng, tại từng vị trí: tiền xử lý, đầu cấp UPW tank, cấp UPW tại POD và phân phối tại POC._

## 13. Tiêu chuẩn chất lượng cho UPW (tiêu chuẩn draft-SEMI)

Tiêu chuẩn draft-SEMI quy định rất chi tiết ngưỡng cho phép của từng chỉ tiêu chất lượng UPW — từ số hạt online, silica, TOC, oxy/nitơ hòa tan, vi khuẩn, ion, cho đến hàm lượng từng kim loại riêng lẻ.

![Hai bảng tiêu chuẩn chất lượng UPW theo draft-SEMI: bảng trái liệt kê hạt online, silica, TOC, oxy/nitơ hòa tan; bảng phải liệt kê chi tiết các ion, kim loại và điện trở suất với điểm đo POD/POC/POU và giới hạn](upw/17-upw-spec-table-left.png)

_Bảng tiêu chuẩn UPW (phần 1): các chỉ tiêu như số hạt online, silica (tổng và dạng hòa tan/phản ứng), TOC online, oxy hòa tan và nitơ hòa tan, kèm điểm đo (POU/POD/POP) và giới hạn phát hiện._

![Bảng tiêu chuẩn UPW phần 2 — chi tiết các chỉ tiêu ion (ammonium, bromide, chloride, fluoride, nitrate...), kim loại và bo, điện trở suất online, độ ổn định nhiệt độ](upw/17-upw-spec-table-right.png)

_Bảng tiêu chuẩn UPW (phần 2): độ ổn định nitơ hòa tan, residue sau bay hơi, hydrogen peroxide, vi khuẩn (CFU/L), các ion (ammonium, bromide, chloride, fluoride, nitrate, nitrite, phosphate, sulfate — đơn vị ppt), nhóm kim loại và bo (nhôm, antimon, asen, bari, bo, cadmi, canxi, crom, đồng, sắt, chì, liti, magie, mangan, niken, kali, natri, thiếc, titan, vanadi, kẽm), điện trở suất online ≥18,18 MΩ·cm ở 25°C, cùng độ ổn định và gradient nhiệt độ. Nguồn: tiêu chuẩn draft-SEMI._

Một con số quan trọng cần ghi nhớ: điện trở suất của UPW phải đạt **không nhỏ hơn 18,18 MΩ·cm ở 25°C** — đây là chỉ dấu kinh điển cho biết nước đã gần như loại bỏ hoàn toàn ion.

## 14. Yêu cầu kỹ thuật về cơ sở hạ tầng (ITRS 2015)

Lộ trình công nghệ ITRS (International Technology Roadmap for Semiconductors) đặt ra các mục tiêu định lượng cho tiêu thụ nước, năng lượng và phát thải theo từng năm, giúp ngành định hướng cải thiện.

![Bảng ESH5 của ITRS 2015 — Facilities Technology Requirements, liệt kê theo từng năm sản xuất 2013–2028 các chỉ tiêu về tiêu thụ nước fab, tiêu thụ UPW, tỷ lệ tái chế nước, năng lượng và phát thải, tô màu vàng/đỏ theo mức độ khả thi](upw/18-itrs-facilities-requirements.png)

_Bảng ESH5 — Facilities Technology Requirements (ITRS 2015). Bảng trải dài theo từng năm sản xuất từ 2013 đến 2028, với các chỉ tiêu: tổng tiêu thụ nước của fab (liters/cm²) cho fab 300/450 mm và 200 mm; tổng tiêu thụ UPW (giảm dần từ 6,5 xuống 4,5 L/cm²); tỷ lệ nước tái chế/thu hồi tại chỗ (tăng từ 50% lên 90%); tổng năng lượng fab; chất thải nguy hại; phát thải VOC và khí nhà kính fluor hóa. Màu vàng = đã có giải pháp khả thi; màu đỏ = chưa có giải pháp sản xuất được biết đến._

Xu hướng rõ ràng từ bảng này: lượng nước và UPW cần dùng trên mỗi cm² wafer được kỳ vọng **giảm dần theo thời gian**, trong khi **tỷ lệ tái chế nước tăng lên tới 90%** vào cuối lộ trình — phản ánh áp lực bền vững ngày càng tăng.

ITRS cũng tóm tắt ngắn gọn vai trò của UPW trong tổng dòng nước của fab:

![Đoạn trích ITRS 2015 mô tả khoảng 50% lượng nước vào fab trở thành UPW dùng cho process tools, phần còn lại bị loại trong quá trình tạo UPW hoặc dùng cho cooling tower và scrubber](upw/19-upw-share-text-itrs.png)

_Theo ITRS 2015: khoảng 50% lượng nước cấp vào một fab cuối cùng trở thành UPW phục vụ các process tool; phần còn lại bị loại bỏ trong quá trình tạo UPW hoặc được dùng cho các hệ phụ trợ như tháp giải nhiệt và scrubber. Vì sản xuất UPW cần lượng hóa chất lớn, mọi sự gia tăng về lượng và chất lượng UPW đều kéo theo tiêu thụ hóa chất nhiều hơn (và chi phí sản xuất UPW cao hơn)._

## 15. Yêu cầu kỹ thuật và tiêu chuẩn UPW theo từng nút công nghệ

Ngoài SEMI và ITRS, còn nhiều tổ chức khác cùng ban hành tiêu chuẩn liên quan đến nước siêu tinh khiết. Bảng dưới đây tổng hợp các tổ chức tiêu chuẩn chính và phạm vi áp dụng của họ.

![Bảng các tổ chức tiêu chuẩn cho UPW: SEMI (F63-0918), ASTM (D5127), ITRS (Technology Roadmap), ISO (14644), USP (Purified Water) với phạm vi áp dụng tương ứng](upw/20-upw-standards-orgs.png)

_Các tổ chức và tiêu chuẩn liên quan đến nước siêu tinh khiết: SEMI (F63-0918 — đặc tả UPW cho sản xuất bán dẫn), ASTM (D5127 — phân loại và đặc tả UPW), ITRS (Technology Roadmap — yêu cầu chất lượng nước cho các nút công nghệ), ISO (14644 — tiêu chuẩn phòng sạch) và USP (Purified Water — tiêu chuẩn dược điển). Nguồn: <a href="https://shop.hocom.tw/Uploads/userfiles/files/52599_uxg28pburb7m3cb.pdf" target="_blank" rel="noopener">shop.hocom.tw — tài liệu 52599</a>._

Đặc biệt, yêu cầu về độ tinh khiết của UPW ngày càng khắt khe khi nút công nghệ thu nhỏ. Bảng dưới đây minh họa điều này: từ nút 90 nm xuống tới 3 nm trở xuống, các ngưỡng về TOC và số hạt đều siết chặt đáng kể.

![Bảng Ultra-Pure Water Requirements for Each Process Node: từ 90nm tới 3nm trở xuống, với điện trở suất 18.2 MΩ·cm, ngưỡng TOC giảm dần (<5 → <0.2 ppb) và số hạt siết chặt theo kích thước](upw/20-upw-requirements-by-node.png)

_Yêu cầu nước siêu tinh khiết theo từng nút công nghệ. Điện trở suất luôn duy trì ở mức 18,2 MΩ·cm, nhưng ngưỡng TOC giảm dần từ <5 ppb (90 nm) xuống <0,2 ppb (3 nm trở xuống), và yêu cầu về số hạt cũng siết chặt theo kích thước ngày càng nhỏ (từ hạt >0,1 μm xuống >0,01 μm). Nút công nghệ càng nhỏ, nước càng phải sạch hơn._

## 16. Tiêu thụ năng lượng của hệ thống UPW

Cuối cùng, quay lại bài toán năng lượng. Hệ thống UPW không chỉ tốn nước và hóa chất mà còn là một trong những hạng mục tiêu thụ điện năng đáng kể nhất của fab.

![Đồ họa Ultrapure Water System Energy Optimization với ba số liệu: 30% tỷ lệ tiêu thụ năng lượng, 45% tiềm năng tiết kiệm, 2.5 năm hoàn vốn](upw/21-upw-energy-optimization.png)

_Tối ưu năng lượng hệ thống nước siêu tinh khiết, với ba chỉ số then chốt:_

- **30% — Tỷ lệ tiêu thụ năng lượng:** trong một fab điển hình, hệ UPW chiếm khoảng 30% tổng năng lượng, là một trong những thiết bị ngốn điện nhất. Năng lượng chủ yếu dùng cho bơm cao áp của RO, nguồn DC cho EDI, hệ UV và bơm tuần hoàn của hệ phân phối.
- **45% — Tiềm năng tiết kiệm:** nhờ công nghệ tiên tiến và vận hành tối ưu, hệ UPW có tiềm năng tiết kiệm tới 45% năng lượng. Các biện pháp chính gồm chọn bơm hiệu suất cao, điều khiển biến tần, thu hồi năng lượng áp suất, thu hồi nhiệt và hệ điều khiển thông minh.
- **~2,5 năm — Thời gian hoàn vốn:** thời gian hoàn vốn trung bình cho các cải tiến tiết kiệm năng lượng vào khoảng 2,5 năm. Do hệ UPW của fab vận hành liên tục 24/7, chỉ cần tăng nhẹ hiệu suất cũng mang lại lợi ích kinh tế đáng kể và giảm phát thải carbon.

_Nguồn: <a href="https://shop.hocom.tw/Uploads/userfiles/files/52599_uxg28pburb7m3cb.pdf" target="_blank" rel="noopener">shop.hocom.tw — tài liệu 52599</a>._

## Kết luận

Nước siêu tinh khiết là "huyết mạch" thầm lặng của ngành bán dẫn: vô hình trong sản phẩm cuối nhưng quyết định trực tiếp tới chất lượng và năng suất của fab. Khi các nút công nghệ ngày càng thu nhỏ, yêu cầu về độ tinh khiết của nước ngày càng khắt khe, kéo theo chi phí nước, hóa chất và năng lượng tăng lên. Đây cũng là lý do bài toán **tái chế — tái sử dụng nước** và **tối ưu năng lượng cho hệ UPW** trở thành ưu tiên chiến lược, vừa để tiết kiệm chi phí, vừa để đáp ứng các mục tiêu bền vững mà ngành đang theo đuổi.
