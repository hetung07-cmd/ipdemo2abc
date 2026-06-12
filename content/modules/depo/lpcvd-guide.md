# Low Pressure Chemical Vapor Deposition – Nguyên lý, Process Window, Vật liệu

## Tổng quan

Low Pressure Chemical Vapor Deposition (PLCVD) là kỹ thuật lắng đọng màng mỏng bằng phản ứng hóa học pha hơi ở áp suất thấp, thường trong buồng phản ứng dạng furnace/tube. Khác với PVD, nơi vật liệu được bốc bay hoặc sputter từ target rắn, LPCVD sử dụng **precursor dạng khí hoặc hơi** đi vào buồng, phân hủy hoặc phản ứng trên bề mặt wafer để tạo màng rắn. Do vận hành ở áp suất thấp, đường đi tự do trung bình của phân tử khí tăng lên, giúp dòng khí khuếch tán tốt hơn vào các cấu trúc địa hình phức tạp, từ đó tạo màng có độ đồng đều và độ phủ bước tốt. LPCVD thường được mô tả là quá trình nhiệt, trong đó tốc độ lắng đọng chịu ảnh hưởng mạnh bởi nhiệt độ và phản ứng bề mặt.

## 1. Precursor thông dụng trong LPCVD

Trong LPCVD, lựa chọn precursor quyết định trực tiếp đến loại màng, nhiệt độ xử lý, tạp chất còn lại trong màng, stress, độ đồng đều và tốc độ lắng đọng. Với màng **silicon hoặc polysilicon**, precursor phổ biến nhất là silane, SiH₄ ngoài ra có thể dùng disilane, Si₂H₆, dichlorosilane, SiH₂Cl₂, hoặc trichlorosilane, SiHCl₃** tùy yêu cầu về nhiệt độ, tốc độ và chất lượng màng. **Polysilicon LPCVD** dùng silane là một trong các process kinh điển cho gate electrode, resistor, emitter trong BJT, cell plate DRAM và vật liệu cấu trúc trong MEMS.

Với silicon nitride,** Si₃N₄,** hệ precursor rất phổ biến là dichlorosilane, DCS, SiH₂Cl₂ kết hợp với ammonia, NH₃. Đây là hệ phản ứng quan trọng để tạo nitride có mật độ cao, khả năng chặn khuếch tán tốt và độ bền hóa học cao. Với silicon dioxide, SiO₂, precursor có thể là TEOS, tetraethyl orthosilicate, hoặc hệ DCS + N₂O cho high-temperature oxide. TEOS đặc biệt quan trọng vì cho màng oxide có độ phủ tốt, thường dùng cho dielectric, isolation, hard mask và optical waveguide.

Ngoài các màng nền Si-based, LPCVD còn có thể dùng cho **SiGe, SiC, silicon oxynitride, doped polysilicon, PSG/BPSG/BSG,** tùy hệ thiết bị và yêu cầu công nghệ. Với màng pha tạp in-situ, có thể thêm PH₃ để pha tạp phosphorus hoặc BCl₃/B₂H₆ để pha tạp boron, giúp điều chỉnh điện trở suất, stress và tính chất điện của màng.

## 2. Vật liệu LPCVD thông dụng và ứng dụng

Các vật liệu LPCVD quan trọng nhất trong fab bán dẫn gồm polysilicon, amorphous silicon, silicon nitride, silicon dioxide, silicon oxynitride và các oxide pha tạp. Polysilicon từng là vật liệu gate chủ đạo trong MOSFET truyền thống và vẫn có vai trò trong resistor, MEMS, TFT, emitter của BJT và một số cấu trúc capacitor. Amorphous silicon thường dùng khi cần màng silicon ở nhiệt độ thấp hơn hoặc khi muốn kiểm soát stress và kích thước hạt.

Silicon nitride LPCVD là một vật liệu rất quan trọng vì có mật độ cao, ít hydrogen hơn so với nhiều màng PECVD, bền hóa học và có khả năng làm barrier layer, etch-stop layer, mask chống oxy hóa, passivation, hoặc lớp ứng suất. Trong MEMS, nitride còn được dùng cho membrane, cantilever hoặc lớp cơ học có stress được kiểm soát. Trong photonics, Si₃N₄ LPCVD được ưa chuộng vì có tổn hao quang thấp, tuy nhiên màng nitride dày thường gặp vấn đề tensile stress và cracking.

Silicon dioxide LPCVD, đặc biệt là TEOS oxide, được dùng làm dielectric, isolation layer, hard mask, sacrificial layer, inter-poly dielectric hoặc optical waveguide. So với thermal oxide, LPCVD oxide có ưu điểm là không cần tiêu thụ nền silicon để tạo oxide, vì màng được lắng đọng từ pha hơi. Điều này hữu ích khi cần phủ oxide trên nhiều loại bề mặt khác nhau, không chỉ trên silicon.

## 3. So sánh LPCVD với các kỹ thuật lắng đọng khác

So với APCVD, LPCVD hoạt động ở áp suất thấp hơn, nên khả năng kiểm soát phản ứng và độ đồng đều trên nhiều wafer thường tốt hơn. APCVD có ưu điểm là thiết bị đơn giản và tốc độ cao hơn, nhưng dễ gặp vấn đề particle, phản ứng pha khí và độ đồng đều kém hơn trong cấu trúc phức tạp.

So với PECVD, LPCVD thường cho màng đặc hơn, ít hydrogen hơn, chất lượng điện – cơ – hóa tốt hơn, nhưng cần nhiệt độ cao hơn. PECVD dùng plasma để kích hoạt phản ứng nên có thể lắng đọng ở nhiệt độ thấp, phù hợp với backend hoặc wafer đã có kim loại nhạy nhiệt. Đổi lại, màng PECVD thường có mật độ thấp hơn, nhiều hydrogen hơn, stress và composition phụ thuộc mạnh vào plasma condition.

So với ALD, LPCVD có tốc độ lắng đọng và throughput cao hơn, đặc biệt trong batch furnace xử lý nhiều wafer cùng lúc. Tuy nhiên, ALD có ưu thế vượt trội về kiểm soát chiều dày cấp angstrom, độ phủ conformal trong cấu trúc high aspect ratio, và khả năng tạo màng siêu mỏng chính xác. Vì vậy, LPCVD phù hợp với màng tương đối dày, yêu cầu uniformity tốt và throughput cao; còn ALD phù hợp với high-k, barrier, spacer hoặc các lớp siêu mỏng cần kiểm soát bề mặt cực tốt.

So với PVD, LPCVD có độ phủ bước tốt hơn nhiều vì phản ứng xảy ra từ pha khí trên bề mặt wafer, không bị giới hạn mạnh bởi hướng bay vật lý như sputtering/evaporation. PVD lại phù hợp cho kim loại, seed layer hoặc lớp cần nhiệt độ thấp, nhưng thường yếu hơn trong việc phủ đều các rãnh sâu hoặc địa hình phức tạp.

## 4. Tối ưu quy trình LPCVD

Tối ưu LPCVD nên nhìn theo bốn nhóm mục tiêu chính: **chất lượng màng, độ đồng đều, năng suất** và **độ ổn định dài hạn** của thiết bị. Các thông số quan trọng nhất gồm **nhiệt độ, áp suất, lưu lượng precursor, tỉ lệ khí phản ứng, thời gian lắng đọng**, tải wafer, spacing giữa wafer, điều kiện ramp up/ramp down và lịch clean tube.

Về mặt động học, cần xác định process đang nằm trong vùng surface-reaction-limited hay mass-transport-limited. Trong vùng surface-reaction-limited, tốc độ lắng đọng phụ thuộc mạnh vào nhiệt độ, nhưng độ đồng đều thường tốt hơn vì precursor có đủ thời gian phân bố đến bề mặt wafer. Trong vùng mass-transport-limited, tốc độ có thể cao hơn nhưng dễ phát sinh gradient theo chiều dài tube, center-edge non-uniformity hoặc wafer-to-wafer variation. Vì vậy, với LPCVD sản xuất hàng loạt, người ta thường ưu tiên cửa sổ process ổn định hơn là chỉ tối đa hóa deposition rate.

Với polysilicon, tối ưu cần quan tâm đến kích thước hạt, stress, điện trở suất sau pha tạp, độ nhám bề mặt và độ đồng đều chiều dày. Nhiệt độ cao thường làm tăng tính kết tinh và thay đổi hướng tinh thể, nhưng cũng có thể làm tăng thermal budget. Với silicon nitride, cần cân bằng giữa stoichiometry, wet etch rate, refractive index, hydrogen content và film stress. Nitride giàu silicon có thể giảm tensile stress nhưng thay đổi tính chất điện/quang. Với TEOS oxide, cần kiểm soát độ ẩm trong đường cấp precursor vì TEOS có thể phản ứng với hơi nước, gây drift precursor partial pressure và làm thay đổi đặc tính màng theo thời gian.

Trong thực tế fab, tối ưu LPCVD không chỉ là chọn recipe tốt nhất, mà còn phải xây dựng process window đủ rộng. Các chỉ tiêu thường theo dõi gồm deposition rate, thickness uniformity, refractive index, stress, wet etch rate, particle count, defect density, sheet resistance nếu là màng dẫn, và độ ổn định run-to-run. Một hướng tối ưu hợp lý là dùng DOE để quét nhiệt độ – áp suất – gas ratio, sau đó cố định vùng process cho độ đồng đều tốt, rồi tinh chỉnh bằng wafer loading, dummy wafer, boat design và gas injection profile. Cuối cùng, cần đưa process vào SPC/FDC để giám sát drift của tube, tình trạng wall deposition, precursor delivery và chu kỳ preventive maintenance.

## Kết luận

LPCVD là một kỹ thuật lắng đọng nền tảng trong công nghệ bán dẫn, đặc biệt mạnh ở các màng polysilicon, silicon nitride, silicon dioxide và oxide/nitride pha tạp. Ưu điểm chính của LPCVD là màng chất lượng cao, độ đồng đều tốt, độ phủ bước khá tốt và phù hợp xử lý batch nhiều wafer. Hạn chế lớn nhất là nhiệt độ xử lý cao, khiến nó phù hợp hơn với FEOL/MOL hoặc các bước trước metallization hơn là backend. Khi so với PECVD, ALD và PVD, LPCVD nằm ở vị trí cân bằng giữa chất lượng màng, throughput và khả năng phủ địa hình; còn tối ưu quy trình LPCVD cần tập trung vào kiểm soát precursor, nhiệt độ, áp suất, uniformity, stress, defect và độ ổn định dài hạn của furnace.