# Photolithography — EUV, High-NA & thế độc quyền của ASML


**Photolithography** (quang khắc) chuyển hình mẫu mạch (circuit pattern) từ photomask lên wafer. Ánh sáng chiếu qua mask phơi sáng lớp màng photoresist trên wafer; quá trình develop bằng hóa chất sau đó làm hiện ra pattern, để các bước etch hoặc ion implantation kế tiếp chuyển pattern này vào lớp vật liệu bên dưới. Mọi lớp có pattern của mọi con chip đều bắt đầu từ một bước lithography. Một chip logic hàng đầu với khoảng 90 lớp mask phải đi qua 90 chu trình lithography. DRAM và 3D NAND dùng ít lớp mask hơn nhưng lithography vẫn là công đoạn đắt đỏ nhất và bị giới hạn năng lực nhất trong fab.

Photolithography là chuỗi cung ứng tập trung nhất trong sản xuất bán dẫn, trong đó ASML là nhà cung cấp duy nhất toàn cầu của scanner EUV. ASML sản xuất khoảng 50–60 máy EUV tiêu chuẩn mỗi năm — con số này đặt ra giới hạn vật lý cho tốc độ bổ sung năng lực cho fab leading-edge của thế giới. High-NA EUV giá 380 triệu USD mỗi máy còn được sản xuất với số lượng nhỏ hơn nữa. Thị trường DUV bớt tập trung hơn một chút (ASML dẫn đầu, Canon và Nikon cạnh tranh ở phân khúc tầm trung), nhưng các máy DUV immersion tiên tiến cần cho multi-patterning lớp 7nm chủ yếu vẫn đến từ ASML. Trong mảng scanner, Carl Zeiss SMT sản xuất hệ quang học — nhà cung cấp phụ nhạy cảm nhất trong chuỗi cung ứng EUV, với chu kỳ mở rộng năng lực kéo dài nhiều năm. Trumpf và Cymer (thuộc ASML) cung cấp laser CO₂ công suất cao tạo nguồn plasma EUV.

Sức nặng chiến lược của lithography cũng chính là sức nặng địa chính trị của nó. Xuất khẩu scanner EUV sang Trung Quốc chịu hạn chế giấy phép của chính phủ Hà Lan phối hợp với chính sách Mỹ — trên thực tế là cấm hẳn EUV vào Trung Quốc. Các máy DUV immersion tiên tiến cũng bị hạn chế tương tự. Điều này chia đôi cục diện sản xuất bán dẫn toàn cầu: các node leading-edge chỉ tiếp cận được với các foundry phương Tây và đồng minh; sản xuất nội địa Trung Quốc bị chặn trần về mặt cấu trúc ở mật độ mà DUV đạt được.

## Quy trình lithography (Lithography Workflow)

Một lượt lithography chạy thành chuỗi trên hai thiết bị: track coater-developer (nơi wafer được phủ photoresist, bake, develop và làm sạch) và scanner (nơi diễn ra phơi sáng pattern thực sự). Scanner và track thường được ghép thành cấu hình cluster; wafer di chuyển giữa chúng tự động qua hệ thống vận chuyển wafer của fab.

| Bước | Thiết bị | Mục đích |
| --- | --- | --- |
| Pre-clean | Thiết bị làm sạch (tách khỏi cluster lithography) | Loại bỏ hạt và nhiễm bẩn trước khi phủ resist |
| Resist coat | Track coater-developer | Quay phủ màng photoresist với bề dày chính xác (thường vài chục nm) |
| Soft bake | Hot plate trên track | Đuổi dung môi khỏi màng resist |
| Exposure | Scanner (ASML, Canon, Nikon) | Chiếu pattern của mask lên resist qua hệ quang học chính xác cao; thao tác lithography cốt lõi |
| Post-exposure bake (PEB) | Hot plate trên track | Kích hoạt resist khuếch đại hóa học; ổn định ảnh ẩn (latent image) |
| Development | Module develop trên track | Hòa tan resist vùng phơi sáng (positive) hoặc không phơi sáng (negative) bằng developer TMAH |
| Hard bake | Hot plate trên track | Làm cứng pattern resist còn lại cho bước etch hoặc implant |

Khi wafer rời track, nó chuyển sang bước xử lý kế tiếp (etch hoặc ion implantation) để chuyển pattern vào vật liệu bên dưới. Sau bước đó, lớp photoresist còn lại được bóc (strip) — phần này thuộc về làm sạch wafer (resist strip) vì strip là làm sạch dựa trên hóa chất chứ không phải lithography.

## Các thế hệ hệ thống lithography

Ba thế hệ lithography quang học cộng hai hướng chuyên biệt phục vụ phổ node hiện tại và tương lai gần. Mỗi loại có bước sóng, độ phân giải đạt được, và phạm vi node áp dụng riêng.

| Hệ thống | Bước sóng | Phạm vi node áp dụng |
| --- | --- | --- |
| i-line / KrF DUV | 365 nm / 248 nm | Node cũ và trưởng thành (≥180 nm với i-line; ≥130 nm với KrF) |
| ArF DUV (dry) | 193 nm | Các node lớp 90 nm tới 65 nm |
| ArF Immersion DUV (193i) | 193 nm (immersion nước) | 45 nm xuống tới lớp 7 nm với multi-patterning; "ngựa thồ" của các node tiên tiến trước EUV; vẫn thiết yếu dưới 7 nm cho các lớp không tới hạn |
| EUV (tiêu chuẩn, NA 0,33) | 13,5 nm | 7 nm trở xuống tại các foundry leading-edge; bắt buộc cho N5, N3, N2, Intel 4/3/18A |
| High-NA EUV (NA 0,55) | 13,5 nm (quang học khẩu độ lớn hơn) | Node dưới 2 nm (Intel 14A, TSMC A14, Samsung SF2 trở xuống); pre-production tới 2027 |
| E-beam direct write | Chùm electron (không mask) | Viết photomask; R&D ASIC; patterning số lượng rất nhỏ; quá chậm cho sản xuất HVM |

## EUV chuyên sâu

EUV lithography hoạt động ở bước sóng 13,5 nm — thuộc vùng tia X mềm, nơi không vật liệu nào trong suốt và toàn bộ quang học phải là phản xạ. Riêng thực tế vật lý này đã quyết định độ phức tạp kỹ thuật phi thường của hệ EUV, và giải thích vì sao ASML là nhà cung cấp duy nhất. Scanner EUV tạo ánh sáng bằng cách bắn laser CO₂ công suất cao vào các giọt thiếc nóng chảy 50.000 lần mỗi giây, hóa hơi từng giọt thành plasma phát ra photon 13,5 nm. Các photon này được thu và hội tụ bởi chuỗi gương đa lớp molybdenum-silicon — khoảng một tá gương mỗi máy, mỗi chiếc được Carl Zeiss SMT gia công đạt độ nhẵn gần cấp nguyên tử, vì mọi khiếm khuyết bề mặt đều làm suy giảm ảnh. Toàn bộ đường truyền chùm tia được giữ trong chân không (EUV bị không khí hấp thụ). Wafer nằm trên stage chính xác di chuyển bên dưới ảnh chiếu với tốc độ khoảng 700 mm/s.

Một scanner EUV tiêu chuẩn (dòng ASML Twinscan NXE) giá khoảng 200 triệu USD với lead time 12–18 tháng từ lúc đặt hàng tới lắp đặt. ASML sản xuất khoảng 50–60 máy mỗi năm. Chính tốc độ sản xuất đó — chứ không phải độ phân giải hay giá của EUV — là ràng buộc trói buộc tốc độ thế giới bổ sung năng lực fab leading-edge. Mỗi fab mới của TSMC, Samsung hay Intel cần nhiều máy EUV, và việc phân bổ sản lượng hàng năm của ASML giữa các khách hàng thực chất là sự phân bổ năng lực bán dẫn của thập kỷ tới.

Canon và Nikon — hai nhà cung cấp lithography lâu đời — đã bỏ nhiều năm phát triển EUV trước khi từ bỏ. Các rào cản kỹ thuật — công suất nguồn plasma, độ chính xác gương, độ bền pellicle, độ chính xác overlay — khiến ASML mất hơn hai mươi năm cùng các quan hệ đối tác trị giá nhiều tỷ USD với Intel, Samsung và TSMC (với tư cách nhà đầu tư cổ phần) mới giải quyết được. Một nhà cung cấp EUV mới xuất phát từ con số không sẽ đối mặt cùng chu kỳ phát triển hai mươi năm; không có nhà cung cấp EUV thương mại thứ hai nào khả tín trước cuối thập niên 2030.

## High-NA EUV

High-NA EUV là thế hệ scanner EUV kế tiếp, dùng hệ quang học khẩu độ lớn hơn (numerical aperture 0,55 so với 0,33 của EUV tiêu chuẩn) để đạt độ phân giải mịn hơn mà không đổi bước sóng. Twinscan EXE:5000 của ASML là nền tảng High-NA. Giá khoảng 380 triệu USD mỗi máy. Intel là khách hàng đầu tiên, với nhiều hệ High-NA lắp tại fab phát triển ở Oregon; TSMC và Samsung cũng đã đặt High-NA EUV cho phát triển node dưới 2 nm. High-NA EUV nhắm tới các node sản xuất dưới 2 nm (Intel 14A, TSMC A14, Samsung SF2 trở đi), với sản xuất số lượng lớn dự kiến từ khoảng 2027.

Tốc độ sản xuất High-NA EUV còn hạn chế hơn cả EUV tiêu chuẩn — ASML nhắm khoảng 20 máy năm 2025, tăng dần lên 30+ mỗi năm vào 2027. Quang học Carl Zeiss SMT cho High-NA (các gương anamorphic, to và phức tạp hơn quang học EUV tiêu chuẩn) là nhà cung cấp phụ giới hạn năng lực. Cũng như EUV tiêu chuẩn, việc phân bổ High-NA giữa Intel, TSMC và Samsung thực chất quyết định ai có thể phát triển và ramp thế hệ node leading-edge tiếp theo.

## Multi-Patterning: Lối đi vòng của DUV

Dưới 28 nm, một lần phơi sáng DUV đơn lẻ không thể in feature ở mật độ yêu cầu. Multi-patterning là lời giải: pattern của một lớp logic được tách ra thành hai, ba hoặc bốn lần phơi mask riêng biệt, mỗi lần in ở pitch nới lỏng mà DUV xử lý được, rồi được hợp nhất trong khâu etch. Double patterning (LELE, LFLE), self-aligned double patterning (SADP), triple và quadruple patterning — mỗi loại đều cộng thêm bước quy trình, mask và chi phí cho mọi lớp tiên tiến. Giá trị cốt lõi của EUV là một lần phơi EUV thay thế nhiều lần phơi DUV, giảm số bước, số mask và cycle time.

Quy trình N+1 (~lớp 7 nm) của SMIC dùng cho Huawei Kirin 9010 cho thấy multi-patterning DUV cực hạn có thể đạt được gì khi không có EUV: mật độ tương đương khoảng 7 nm, nhưng throughput thấp hơn đáng kể, chi phí cao hơn và yield thấp hơn so với N7 dựa trên EUV của TSMC. Đây là mức trần thực tế của sản xuất bán dẫn nội địa Trung Quốc dưới các lệnh kiểm soát xuất khẩu hiện hành. Nghiên cứu multi-patterning DUV sâu hơn vẫn tiếp diễn, nhưng các hình phạt về mật độ, yield và kinh tế của multi-patterning cực hạn tạo ra một "sàn cạnh tranh" cứng mà các foundry có EUV không phải đối mặt.

## Chuỗi cung ứng Photomask & Reticle

Một lần phơi lithography cần photomask — tấm quartz mang pattern thiết kế mạch cho lớp cụ thể đó. Mỗi thiết kế chip cần trọn bộ mask, thường 60 tới 90+ mask ở các node leading-edge. Sản xuất mask tự thân là một hoạt động chế tạo chuyên biệt với mức độ tập trung chuỗi cung ứng riêng.

| Thành phần | Chức năng | Nhà cung cấp chính |
| --- | --- | --- |
| Photomask / Reticle | Tấm quartz phủ chrome (DUV) hoặc đa lớp phản xạ (EUV) định nghĩa một lớp mạch | Photronics, Toppan Photomask, Dai Nippon Printing (DNP), Hoya; TSMC tự sản xuất (captive) mask EUV leading-edge |
| Pellicle | Màng mỏng bảo vệ phía trên bề mặt mask; ngăn hạt rơi in thành defect | Mitsui Chemicals (pellicle DUV); pellicle EUV vẫn đang phát triển — độ bền và tổn hao truyền qua còn là bài toán kỹ thuật mở |
| Mask writer | Thiết bị e-beam viết pattern lên quartz trắng; "lithography của sản xuất mask" | NuFlare Technology (thống trị), IMS Nanofabrication (công ty con ASML, mask writer đa chùm), Vistec |
| Mask inspection | Phát hiện defect trên mask thành phẩm trước khi vào fab | KLA, Lasertec (nhà cung cấp duy nhất của actinic EUV mask inspection) |

Mask EUV khác về cấu trúc so với mask DUV — chúng phản xạ thay vì truyền qua, được xây từ các stack đa lớp molybdenum/silicon xen kẽ trên đế giãn nở nhiệt thấp. Một mask EUV đơn lẻ giá vài trăm nghìn USD; trọn bộ mask EUV cho một thiết kế chip leading-edge lên tới hàng triệu. Chi phí mask cộng dồn qua các lần sửa mask trong giai đoạn bring-up, khiến kinh tế mask EUV chiếm phần đáng kể trong tổng chi phí kỹ thuật không lặp lại (NRE) của một thiết kế chip mới.

## Thiết bị & hệ sinh thái

Hệ sinh thái lithography gồm bản thân scanner, track coater-developer, hệ quang học và nguồn sáng bên trong scanner, hạ tầng mask và resist, cùng alignment và metrology. Sự tập trung ở từng tầng cộng dồn làm chuỗi cung ứng tổng thể càng thắt chặt.

| Tầng | Chức năng | Nhà cung cấp chính |
| --- | --- | --- |
| Scanner (EUV) | Bản thân thiết bị lithography — nguồn sáng, quang học, stage, tự động hóa | ASML (nguồn duy nhất toàn cầu) |
| Scanner (DUV immersion tiên tiến) | Scanner DUV 193i cao cấp cho các lớp trước EUV và lớp không tới hạn của node tiên tiến | ASML (dẫn đầu thị trường), Nikon, Canon |
| Scanner (DUV trưởng thành) | Scanner KrF và i-line cho node trưởng thành và legacy | Canon, Nikon, ASML; SMEE (Trung Quốc) cho năng lực node trưởng thành nội địa |
| Track coater-developer | Phủ resist, bake, develop; tích hợp với scanner | Tokyo Electron (thống trị), Screen Semiconductor Solutions |
| Quang học EUV | Gương phản xạ đa lớp bên trong scanner EUV | Carl Zeiss SMT (nhà cung cấp độc quyền cho ASML) |
| Nguồn laser EUV | Laser CO₂ công suất cao hóa hơi giọt thiếc để tạo plasma EUV | Cymer (thuộc ASML), Trumpf (laser CO₂ cho nguồn sáng của Cymer), Gigaphoton (DUV) |

## Vật liệu

Photolithography tiêu thụ ba nhóm vật liệu. **Photoresist** là màng nhạy sáng phủ trên wafer — hóa học được khớp với bước sóng lithography, và resist EUV là nguồn cung chuyên biệt riêng với chỉ ba nhà cung cấp số lượng lớn đã được qualify. **Developer** (thường là tetramethylammonium hydroxide — TMAH ở nồng độ xác định) hòa tan resist vùng phơi sáng hoặc không phơi sáng để hiện pattern. **Lớp chống phản xạ** (BARC ở đáy, TARC ở đỉnh) ngăn hiệu ứng sóng đứng và phản xạ trong lúc phơi sáng — những hiệu ứng sẽ làm méo pattern nếu không có chúng.

## Các hướng lithography thay thế

Nhiều phương án thay thế lithography quang học tồn tại trong nghiên cứu và sản xuất ngách. Không phương án nào có vị thế thay EUV cho sản xuất số lượng lớn leading-edge trong tầm quy hoạch hiện tại, nhưng mỗi hướng đều có tiềm năng trong ứng dụng cụ thể.

| Hướng tiếp cận | Cách hoạt động | Trạng thái |
| --- | --- | --- |
| Nanoimprint Lithography (NIL) | Khuôn vật lý dập pattern trực tiếp vào resist; không chiếu quang học | Canon đang sản xuất số lượng lớn cho một số ứng dụng memory chuyên biệt; độ bền khuôn và defectivity vẫn là vấn đề |
| Directed Self-Assembly (DSA) | Block copolymer tự tổ chức thành pattern nano trên khuôn dẫn hướng | Nghiên cứu; tiềm năng feature dưới 10 nm; mật độ defect vẫn cao hơn nhiều ngưỡng HVM |
| Multi-beam e-beam direct write | Hàng nghìn chùm electron tạo pattern trên wafer không cần mask | Dùng chuyên biệt cho IC custom không mask; throughput quá thấp cho HVM |
| Computational lithography | Mô phỏng AI/ML hiệu chỉnh pattern mask bù méo quang học trước khi in | Đã triển khai tại các foundry leading-edge trong workflow OPC (optical proximity correction) tiêu chuẩn; bổ trợ cho EUV, không thay thế |
| Resist EUV tiên tiến (metal-oxide, molecular) | Hóa học resist thế hệ mới khắc phục biến thiên ngẫu nhiên (stochastic) ở dưới 2 nm | Đang phát triển tích cực tại các nhà cung cấp resist EUV; tối quan trọng cho High-NA EUV |

## Kiểm soát xuất khẩu & khung địa chính trị

Photolithography là công cụ chủ lực của chính sách kiểm soát xuất khẩu bán dẫn. Chính phủ Hà Lan, phối hợp với chính sách Mỹ, hạn chế xuất khẩu scanner EUV sang Trung Quốc; chưa từng có máy EUV nào của ASML được giao cho khách hàng Trung Quốc. Scanner DUV immersion tiên tiến (ASML NXT:2000i trở lên) cũng cần giấy phép xuất khẩu và ngày càng bị từ chối. Các hạn chế này, cùng với hạn chế của Mỹ về thiết bị deposition và etch tiên tiến, tạo trần cứng cho năng lực sản xuất bán dẫn nội địa Trung Quốc ở khoảng mức 7 nm bằng DUV multi-patterning.

Hệ quả cấu trúc là sản xuất bán dẫn toàn cầu bị chia đôi: năng lực leading-edge ở TSMC, Samsung và Intel; năng lực trưởng thành-tới-tiên-tiến ở các foundry nội địa Trung Quốc không có con đường thực tế nào để thu hẹp khoảng cách trong ngắn hạn. Khoảng cách này nới rộng theo mỗi thế hệ EUV và High-NA EUV mới, vì mật độ leading-edge tiến lên theo cách mà quy trình chỉ-DUV không thể bắt kịp bằng bất kỳ mức multi-patterning nào.

_Nguồn: SemiconductorX — "Photolithography: EUV, High-NA & the ASML Monopoly" (semiconductorx.com/mfg-front-end-photolithography.html)._
