# Các công cụ phân tích nguyên nhân gốc rễ — Hướng dẫn đầy đủ

*(Bản dịch tiếng Việt từ ebook "Root Cause Analysis Tools: A Complete Guide" của Infraspeak)*

## Mục lục

| Chương | Trang |
|--------|-------|
| Phân tích nguyên nhân gốc rễ là gì? | 2 |
| Phân tích 5 Whys (5 câu hỏi "Tại sao") | 3 |
| Phân tích cây lỗi (Fault Tree Analysis) | 8 |
| Sơ đồ Ishikawa | 13 |
| Phân tích kiểu lỗi và tác động (FMEA) | 15 |
| Phân tích dữ liệu | 20 |

---

## Phân tích nguyên nhân gốc rễ là gì?

Cụm từ "phân tích nguyên nhân gốc rễ" (root cause analysis) là một thuật ngữ bao trùm nhiều phương pháp khác nhau, cho phép chúng ta phân tích các sự cố và khắc phục chúng, hoặc ít nhất là xử lý sự cố tạm thời.

Điều này có nghĩa là phân tích nguyên nhân gốc rễ không phải là một phương pháp cụ thể nào, mà là một tập hợp các công cụ dùng để xem xét lỗi trong an ninh, sản xuất, quy trình nội bộ, tài sản hoặc hệ thống.

### Các công cụ phân tích nguyên nhân gốc rễ chính là gì?

Có hàng chục công cụ để thực hiện phân tích nguyên nhân gốc rễ. Mỗi công cụ đều có ưu điểm, nhược điểm và phạm vi ứng dụng riêng. Đây không phải lần đầu chúng ta bàn về tầm quan trọng của các công cụ phân tích đối với công tác bảo trì hiệu quả, nên trong ebook này chúng ta sẽ đi sâu vào năm công cụ đặc biệt giá trị trong lĩnh vực này:

- Phân tích 5 Whys
- Phân tích cây lỗi (Fault Tree Analysis)
- Sơ đồ Ishikawa
- FMEA
- Phân tích dữ liệu

Không cần phải nói, không công cụ nào trong số này loại trừ lẫn nhau. Bạn có thể sử dụng các công cụ khác nhau tùy theo mức độ nghiêm trọng, và đôi khi thậm chí dùng nhiều công cụ cùng một lúc.

---

## Phân tích 5 Whys

5 Whys (còn viết là "Five Whys") là một trong nhiều phương pháp để tìm nguyên nhân gốc rễ của một sự cố. Đây là kỹ thuật đặt câu hỏi, trong đó bạn khám phá quan hệ nhân — quả bằng cách liên tục hỏi "tại sao?" cho đến khi tìm ra nguyên nhân gốc rễ. Theo kinh nghiệm thực tế, hỏi 5 lần thường là đủ để tìm ra câu trả lời bạn cần — và đó là lý do có tên gọi "5 Whys".

Ưu điểm lớn của kỹ thuật "5 Whys" là việc nhận ra rằng có một chuỗi sự kiện diễn ra trước khi xảy ra sự cố. Thông thường, sự cố phát sinh từ một chuỗi phản ứng nhân — quả, hay hiệu ứng domino, chứ không phải từ một sự kiện đơn lẻ ngay trước nó.

Phân tích 5 Whys là một công cụ giải quyết vấn đề đơn giản và nhanh chóng để tìm ra nguyên nhân gốc rễ, và nó áp dụng được trong nhiều bối cảnh. Trong bảo trì, mục tiêu của bất kỳ phân tích nguyên nhân gốc rễ nào cũng là khắc phục lỗi ban đầu.

Thêm vào đó, nó giúp người quản lý triển khai các chiến lược mới để tránh các sự cố tương tự, và thiết lập các quy trình nội bộ nhằm giảm thiểu xác suất xảy ra sự cố tại bất kỳ thời điểm nào.

### Ai đã phát triển phương pháp 5 Whys?

Mỗi khi xem xét các công cụ phân tích nguyên nhân gốc rễ, việc tìm hiểu nguồn gốc ra đời của chúng luôn rất thú vị. Phương pháp 5 Whys được phát triển bởi Sakichi Toyoda, nhà sáng lập của Toyota. Theo các nguyên tắc của Toyoda, máy móc "dừng lại khi có vấn đề".

Hỏi "tại sao" 5 lần giúp tìm ra nguồn gốc của vấn đề đó — và nhờ vậy giải pháp trở nên rõ ràng. Khái niệm này được tích hợp vào quy trình sản xuất của Toyota trong giai đoạn công ty mở rộng, và đến nay nó vẫn là một phần trong phương pháp tinh gọn (lean) của hãng.

### Kỹ thuật 5 Whys hoạt động như thế nào?

Hãy tưởng tượng bạn bị sốt. Chắc chắn bạn sẽ uống thuốc hạ sốt để giảm triệu chứng, nhưng đó không phải là cách chữa khỏi. Để tự chữa, bạn cần hỏi tại sao mình bị sốt. "Tại sao tôi bị sốt?" ⇢ nhiễm virus ⇢ "Tại sao tôi bị nhiễm?" ⇢ tôi nhiễm virus cúm A ⇢ "Tại sao tôi nhiễm virus?" ⇢ tôi đã tiếp xúc gần với một người bị nhiễm.

Thấy chưa, chúng ta thậm chí không cần đến 5 câu hỏi để tìm ra chuyện gì đã xảy ra! Từ đó, dễ dàng nhận ra rằng không chỉ cần thuốc kháng virus, mà cách để tránh tái nhiễm là giữ khoảng cách xã hội. Tất nhiên, đây là một ví dụ khá đơn giản — ai cũng biết chúng ta bị bệnh vì đã ở gần người nhiễm — nhưng nó sẽ không hiển nhiên đến vậy nếu trước đó không có ai đặt câu hỏi "tại sao?".

Lưu ý rằng không phải lúc nào chúng ta cũng có thể đi theo một mạch suy luận tuyến tính để tìm ra nguyên nhân gốc rễ. Trong một số trường hợp, có nhiều nguyên nhân gốc rễ tiềm năng, buộc bạn phải khám phá các câu trả lời khác nhau cho mỗi câu "tại sao".

Đây là một ví dụ có nhiều câu trả lời tiềm năng: Xe không khởi động được. ➝ Tại sao? ➝ Ắc-quy xe đã hết. ➝ Tại sao ắc-quy hết? ➝ Đèn pha bật suốt đêm. ➝ Tại sao đèn vẫn bật? ➝ Không có âm thanh cảnh báo hay đèn báo trên bảng điều khiển.

Đây là lúc sơ đồ tách thành hai khả năng:

- ➝ Tại sao không có cảnh báo? ➝ Cảm biến bị hỏng. ➝ Tại sao? ➝ Cảm biến chưa bao giờ được thay.
- ➝ Tại sao không có đèn báo trên bảng điều khiển? ➝ Có sự cố điện. ➝ Tại sao? ➝ Cầu chì bị hỏng.

Khi phân tích 5 Whys tách thành nhiều khả năng khác nhau, đó gần như luôn là dấu hiệu của việc kiểm soát chất lượng và các phương pháp phát hiện lỗi chưa đầy đủ.

Đừng bao giờ quên rằng bạn đang phân tích quy trình, chứ không phải con người, vì vậy đừng bao giờ chấp nhận "lỗi do con người" là nguyên nhân gốc rễ. Chắc chắn có một quy trình kiểm soát chất lượng nào đó đã không được thực hiện, dù chỉ là một bảng kiểm tra đơn giản. Trong các phân tích phức tạp hơn, hãy sắp xếp tất cả câu trả lời vào sơ đồ Ishikawa (còn gọi là sơ đồ xương cá). Kết hợp cả hai phương pháp sẽ giúp bạn hình dung tốt hơn tất cả các giả thuyết.

### Cách thực hiện phân tích 5 Whys

**1. Tập hợp một nhóm.**
Phân tích nguyên nhân gốc rễ không nên do một người thực hiện. Hãy tập hợp một nhóm hiểu rõ về tài sản — nhưng sẵn sàng nhìn nhận mọi việc với con mắt mới mẻ và khám phá mọi câu trả lời.

**2. Xác định vấn đề.**
Tốt nhất là mọi thành viên trong nhóm đều có thể chứng kiến và tận mắt thấy sự cố. Từng thành viên phải thống nhất về một mô tả. Ví dụ, họ phải đồng ý rằng định nghĩa phù hợp nhất cho sự cố là "xe không khởi động được" (chứ không phải "bộ đánh lửa không hoạt động"), vì cách định nghĩa khác sẽ dẫn đến các câu hỏi khác nhau về sau.

**3. Bắt đầu hỏi "tại sao"?**
Bây giờ mọi người đã "cùng một quan điểm", đến lúc bắt đầu hỏi "tại sao?". Các câu trả lời phải khớp với thực tế, chứ không phải phỏng đoán về những gì đã xảy ra. Không phải thành viên nào cũng đưa ra cùng một câu trả lời, nên họ phải tranh luận cho đến khi cả nhóm đạt được sự đồng thuận.

**4. Học cách dừng lại.**
Hãy cẩn trọng đừng dừng quá sớm — cố gắng đi qua 5 vòng câu hỏi "tại sao?" — nhưng cũng cần biết khi nào nên dừng. Khi các câu trả lời không còn giúp hiểu được sự cố nữa, hoặc khi chúng không gợi mở các giải pháp khả thi, đó là lúc nên dừng. Nếu không tìm được nguyên nhân gốc rễ, hãy thử một công cụ phân tích khác, như phân tích cây lỗi (FTA) hoặc Phân tích kiểu lỗi và tác động (FMEA), mà bạn sẽ tìm hiểu ở phần sau của ebook này.

**5. Điều chỉnh kế hoạch bảo trì.**
Sau khi hoàn tất phân tích, nhóm nên đề xuất các biện pháp để tránh các sự cố tương tự. Trong bước này, việc rà soát lại tất cả câu trả lời để thiết lập các quy trình kiểm soát chất lượng mới là rất hữu ích.

### Khi nào nên dùng phân tích 5 Whys?

Trong bảo trì, phân tích 5 Whys có thể được dùng cho phân tích nguyên nhân gốc rễ, xử lý sự cố hoặc giải quyết vấn đề. Nó thường rất hiệu quả và nhanh chóng trong việc tìm ra nguyên nhân gốc rễ của các sự cố có mức độ nghiêm trọng từ thấp đến trung bình. Ngoài ra, nó có tính ứng dụng cao như một công cụ cải tiến chất lượng, trong khuôn khổ phương pháp tinh gọn (lean).

Khác với các công cụ khác, phân tích 5 Whys không thể dùng ở giai đoạn ý tưởng (conceptual stage). Việc sử dụng nó giới hạn ở việc tìm nguyên nhân của các vấn đề đã xảy ra, hoặc phân tích các sự cố thực sự làm ảnh hưởng đến chức năng. Mặt tích cực là bạn sẽ không "lãng phí thời gian" vào các câu hỏi giả định.

### Hạn chế của phương pháp 5 Whys là gì?

Hạn chế chính của phương pháp 5 Whys là điều hiển nhiên: vì nó có xu hướng đi theo logic tuyến tính, nó chỉ có thể tìm ra một nguyên nhân gốc rễ duy nhất. Nó không thực tế khi có nhiều hướng điều tra hoặc khi có thể có nhiều hơn một nguyên nhân gốc rễ.

Bên cạnh đó, vì nó chỉ đánh giá các sự kiện đã xảy ra và chỉ mang tính định tính, nó không phù hợp cho việc đánh giá rủi ro theo xác suất. Nó phụ thuộc vào kiến thức chuyên môn của nhóm để tìm ra nguyên nhân gốc rễ. Nếu có một kiểu lỗi bất ngờ, bạn có thể không bao giờ nghĩ tới câu trả lời đó — và không bao giờ đi đến kết luận.

Nhóm của bạn có thể có cái nhìn thiên kiến, điều này có thể làm ảnh hưởng đến kết quả phân tích. Nhóm có thể đặt những câu hỏi thiên kiến hoặc đưa ra những câu trả lời thiên kiến nhằm xác nhận nghi ngờ hoặc giả thuyết của họ. Không phải lúc nào cũng dễ phân biệt "triệu chứng" và "nguyên nhân", hay biết khi nào nên dừng. Đôi khi, bạn có thể dừng lại trước khi kịp thực hiện một phân tích sâu và kỹ lưỡng.

---

## Phân tích cây lỗi (Fault Tree Analysis — FTA)

Phân tích cây lỗi (FTA) là một cách tiếp cận có hệ thống để giải quyết vấn đề, xử lý sự cố và xác định nguyên nhân gốc rễ của một lỗi bằng cách dùng sơ đồ. Một phân tích cây lỗi có thể được dùng để khám phá một sự cố đơn lẻ hoặc xem xét một cách hệ thống một nhóm các bộ phận, điều này khiến nó trở thành công cụ linh hoạt cho phân tích nguyên nhân gốc rễ.

### Mục đích của phân tích cây lỗi là gì?

- chẩn đoán nguyên nhân gốc rễ của một sự cố
- hiểu cách hệ thống có thể bị hỏng
- xác định các rủi ro vốn có
- nhận diện các biện pháp giảm thiểu rủi ro
- ước tính tần suất xảy ra các vi phạm an toàn

### Ưu điểm của việc thực hiện phân tích cây lỗi?

- cải thiện việc tuân thủ các quy định an toàn
- ánh xạ mối tương quan giữa các lỗi và các phân hệ (subsystem)
- thiết lập thứ tự ưu tiên cho toàn bộ hệ thống
- triển khai thay đổi trong thiết kế sản phẩm hoặc hệ thống để giảm thiểu rủi ro
- thực hiện đánh giá rủi ro theo xác suất (PRA)

### Cách tạo sơ đồ phân tích cây lỗi

Điểm khởi đầu cho một sơ đồ phân tích cây lỗi chính là bản thân sự cố. Từ sự kiện đỉnh (top event) đó trở đi, sơ đồ sẽ phát triển theo một trình tự logic — cho đến khi bạn xác định được nguyên nhân gốc rễ.

Sơ đồ phân tích cây lỗi áp dụng logic Boolean. Nó sử dụng các ký hiệu để biểu diễn từng sự kiện có thể đã gây ra hoặc góp phần gây ra sự cố, bao gồm cả các sự kiện bên ngoài và sự kiện điều kiện. Các ký hiệu cổng ("and", "or") nối chúng lại thiết lập mối quan hệ giữa các sự kiện đầu vào và đầu ra. Dưới đây là danh sách tất cả các ký hiệu trong một FTA:

![Bảng các ký hiệu trong sơ đồ FTA: Basic Event (vòng tròn), External Event, Undeveloped Event (hình thoi), Conditioning Event, Intermediate Event (hình chữ nhật), Transfer In/Out (tam giác); và các cổng logic: Or Gate, And Gate, Exclusive Or Gate, Priority And Gate, Inhibit Gate](rca/fta-symbols.png)

*Nguồn: Caccoo.com*

Bạn cũng có thể cấu trúc sơ đồ bằng phần mềm độ tin cậy (reliability software), trong đó các ký hiệu cổng tương ứng với giá trị 1 hoặc 0. Hầu hết phần mềm sẽ tích hợp thông tin với xác suất thống kê, biến FTA thành một phương pháp định lượng.

Nhờ những đặc tính này, FTA là một phương pháp phổ biến cho các đánh giá an toàn và đánh giá rủi ro theo xác suất (PRA). PRA là một cách tiếp cận có hệ thống đối với phân tích rủi ro và độ tin cậy, nhằm ước tính rủi ro, khả năng xảy ra sự cố và mức độ của hậu quả.

### Khi nào dùng FTA trong bảo trì

Chúng ta đã xác định rằng FTA có thể được dùng cho PRA, điều này khiến nó phù hợp với các ngành nguy hiểm cao, bao gồm sản xuất hàng không vũ trụ, hạt nhân, hóa chất, hóa dầu và dược phẩm. Trong kỹ thuật phần mềm, FTA là một kỹ thuật loại trừ nguyên nhân để gỡ lỗi (debugging).

Một điều thú vị: NASA đã ưu tiên phân tích FMEA cho các sứ mệnh Apollo — những sứ mệnh đưa con người lên Mặt Trăng lần đầu tiên — vì xác suất trở về Trái Đất an toàn quá thấp theo phân tích FTA. Sau thảm họa tàu con thoi Challenger năm 1986 (vỡ tung chỉ 73 giây sau khi cất cánh), NASA bắt đầu sử dụng kết hợp cả phân tích FMEA và FTA.

Bây giờ, hãy lật trang và đi thẳng vào vấn đề…

### Cách sử dụng FTA trong bảo trì?

Khi có một sự cố hỏng hóc bất ngờ hoặc một lỗi suýt dẫn đến hỏng hóc, việc thực hiện phân tích cây lỗi để tìm ra nguyên nhân gốc rễ là một chính sách tốt. Nếu không, sự cố sẽ lại xảy ra.

Ví dụ, nếu hệ thống phòng cháy gặp lỗi, có hai kiểu lỗi tiềm năng: hoặc (giả thuyết A) lỗi xảy ra ở hệ thống phát hiện cháy, hoặc (giả thuyết B) hệ thống chữa cháy gặp lỗi.

![Sơ đồ cây lỗi cho "Lỗi của hệ thống phòng cháy": cổng OR tách thành hai nhánh — "Hệ thống phát hiện cháy lỗi" (cổng AND: cảm biến khói lỗi VÀ cảm biến nhiệt lỗi) và "Hệ thống chữa cháy lỗi" (cổng OR: không có nước tới hệ thống phun HOẶC vòi phun bị tắc); các base event: Smoke Fail, Heat Fail, Pump Fail, Nozzle Fail](rca/fta-fire-tree.png)

*Nguồn gốc (Original Source)*

Nếu hệ thống phát hiện cháy gặp lỗi, có nghĩa là cả đầu báo khói lẫn đầu báo nhiệt đều hỏng (cả hai cơ chế phải cùng hỏng). Mặt khác, nếu là hệ thống chữa cháy, có nghĩa là hoặc không đủ nước trong hệ thống, hoặc các vòi phun bị tắc (chỉ cần một trong hai là đủ gây lỗi).

Nếu chúng ta kết luận rằng vấn đề là không đủ nước, thì chúng ta đã tìm ra nguyên nhân gốc rễ. Phân tích cây lỗi của bạn có thể dừng ở đây vì bạn đã tìm thấy "sự kiện cơ sở" (base event, được đánh dấu bằng vòng tròn).

Tuy nhiên, với tư cách là người quản lý bảo trì, bạn có thể tự hỏi tại sao máy bơm nước lại hỏng. Ví dụ, liệu đó là do thiếu bảo trì, hao mòn hay công suất không đủ cho nhu cầu của tòa nhà. Bạn có thể tiếp tục với sơ đồ hoặc chuyển sang một phương pháp thay thế, như phân tích 5 Whys.

Việc điều tra nguyên nhân gốc rễ, suy cho cùng, là điều cho phép bạn thực hiện những thay đổi đúng đắn trong kế hoạch bảo trì, áp dụng các quy tắc an toàn mới và đánh giá rủi ro. Nhờ đó, cả tính sẵn sàng (availability) lẫn độ tin cậy (reliability) của tài sản đều tăng lên theo thời gian. Và đó là cách bạn có thể sử dụng phân tích cây lỗi trong bảo trì.

Mặc dù không được sử dụng một cách hệ thống ngoài các ngành đã đề cập, phân tích cây lỗi là một công cụ rất hữu ích để xác định nguyên nhân gốc rễ và cải thiện chiến lược bảo trì của bất kỳ công ty nào. Bạn có thể dùng nó trong hầu hết mọi bối cảnh, từ các sự cố đơn giản đến những hệ thống phức tạp hơn. Hơn nữa, nó cho thấy nhiều sự kiện có thể cùng góp phần dẫn đến kết quả như thế nào.

### Hạn chế của phân tích cây lỗi là gì?

Không có phương pháp phân tích nguyên nhân gốc rễ nào là hoàn hảo tuyệt đối. FTA cũng có những hạn chế của nó:

- **Đây là một mô hình một chiều.** FTA không tính đến yếu tố thời gian hay tuổi thọ hữu dụng của tài sản, điều này có thể là vấn đề khi bạn đang ở giai đoạn phát triển sản phẩm.

- **FTA là một hệ thống nhị phân.** Mỗi giả thuyết hoặc được xác nhận hoặc không, khiến nó quá cứng nhắc đối với các tài sản có lỗi điều kiện (failures chỉ xảy ra trong một số điều kiện nhất định, ví dụ nhiệt độ thấp) hoặc lỗi cục bộ (partial failures).

- **Không phải lúc nào cũng có thể xác định được xác suất xảy ra lỗi**, điều này làm vô hiệu hóa FTA như một phương pháp định lượng.

---

## Sơ đồ Ishikawa

Sơ đồ Ishikawa (còn gọi là "sơ đồ xương cá" vì hình dạng của nó) bao gồm việc sắp xếp các nguyên nhân và tác động vào một sơ đồ, chia thành 6 nhóm, cho đến khi chúng ta tìm ra nguyên nhân gốc rễ. Các nhóm gồm:

- Đo lường (Measurements)
- Vật liệu (Materials)
- Nhân sự (Personnel)
- Môi trường (Environment)
- Phương pháp (Methods)
- Máy móc (Machines)

![Sơ đồ xương cá Ishikawa "Các yếu tố góp phần gây ra lỗi XXX": trục chính chỉ tới "Defect XXX", với sáu nhánh xương — Measurements (Calibration, Microscopes, Inspectors), Materials (Alloys, Lubricants, Suppliers), Personnel (Shifts, Training, Operators), Environment (Humidity, Temperature), Methods (Angle, Engager, Brake), Machines (Blade wear, Speed)](rca/ishikawa-fishbone.png)

*Nguồn gốc (Original Source)*

Công cụ phân tích nguyên nhân gốc rễ này làm nổi bật mối quan hệ giữa các bộ phận khác nhau của công ty. Nhờ đó, nó phù hợp để giải quyết các sự cố không có một nguyên nhân gốc rễ duy nhất. Giả sử một nhà máy sản xuất ra một lô hàng lỗi sau khi đã sản xuất hàng nghìn sản phẩm đạt chất lượng. Chuyện gì có thể đã xảy ra? Có vấn đề với nguyên liệu thô không? Lỗi do con người trong quá trình sản xuất? Tại sao nó không bị loại bỏ sau khâu kiểm soát chất lượng? Liệu có nhiều hơn một nguyên nhân gốc rễ để giải thích không?

Sơ đồ Ishikawa có ứng dụng trong bảo trì nhưng cũng cả trong marketing và quản lý, khiến nó cực kỳ linh hoạt. "Xương cá" sẽ cải thiện các quy trình nội bộ, thúc đẩy tinh thần đồng đội và phơi bày các điểm không phù hợp. Mặt khác, nó có thể "làm phân tán" sự chú ý của bạn hoặc làm phức tạp hóa phân tích nguyên nhân gốc rễ một cách không cần thiết.

Tiếp theo là Phân tích kiểu lỗi và tác động. Hãy đọc tiếp!

---

## Phân tích kiểu lỗi và tác động (FMEA)

Với FMEA (viết tắt của Failure Modes and Effects Analysis — Phân tích kiểu lỗi và tác động), chúng ta sẽ định nghĩa "lỗi" (failure) là sự mất chức năng, còn "kiểu lỗi" (failure mode) là cách thức mà lỗi đó xảy ra. Đây là một trong những công cụ phổ biến nhất cho phân tích nguyên nhân gốc rễ nhờ tính linh hoạt của nó.

FMEA đôi khi còn được gọi là DFMEA (Design Failure Mode and Effects Analysis — phân tích kiểu lỗi và tác động trong thiết kế) hoặc PFMEA (Processes Failure Mode and Effects Analysis — phân tích kiểu lỗi và tác động trong quy trình). Chúng được dùng để phân tích các lỗi tiềm năng trong thiết kế sản phẩm hoặc trong các quy trình của một bộ phận kinh doanh, tương ứng.

Đây là một ví dụ đơn giản để hiểu sự khác biệt giữa lỗi và kiểu lỗi — nếu một máy thanh toán tự động ngừng in hóa đơn giấy (lỗi), có thể là do cuộn giấy chưa được lắp đúng (kiểu lỗi #1) hoặc do ngăn chứa giấy chưa đóng (kiểu lỗi #2).

Các kiểu lỗi là con đường dẫn chúng ta đến nguyên nhân gốc rễ. Tuy nhiên, FMEA còn đi xa hơn. Sau khi chỉ ra các kiểu lỗi (và qua đó là các nguyên nhân gốc rễ tiềm năng), nó tiếp tục đánh giá tác động và mức ảnh hưởng của từng lỗi.

Để hiểu điều này nghĩa là gì, chúng ta sẽ dùng một ví dụ phức tạp hơn. Hãy tưởng tượng có một lỗi vì quạt hoạt động với độ rung quá lớn (kiểu lỗi). Hậu quả là gì? Thiết bị ngừng hoạt động tạm thời (tác động của lỗi), dẫn đến tổn thất sản xuất.

Các kiểu lỗi khác nhau có thể dẫn đến các tác động khác nhau, với những hệ quả khác nhau cho công ty. Đó là lý do FMEA thường được kết hợp với phân tích mức độ nghiêm trọng (criticality analysis). Khi cả hai được thực hiện cùng lúc, nó được gọi là FMECA (Failure Modes, Effects and Criticality Analysis — Phân tích kiểu lỗi, tác động và mức độ nghiêm trọng).

### Các mục đích chính của FMEA là gì?

Và bây giờ, một chút lịch sử. Quân đội Hoa Kỳ đã phát triển FMEA vào những năm 1950. Ngay sau đó, ngành hàng không và NASA đã áp dụng nó, và NASA tiếp tục dùng nó cho các sứ mệnh Apollo, chương trình Viking và các sứ mệnh liên sao Voyager. FMEA cũng phổ biến trong ngành ô tô và dầu khí.

Như đã đề cập, FMEA phù hợp với nhiều bối cảnh. Nó có thể phân tích chức năng, quy trình (PFMEA, tập trung vào các quy trình sản xuất và lắp ráp) hoặc thiết kế dự án (DFMEA). Nên thực hiện FMEA mỗi khi ra mắt sản phẩm mới hoặc khi có bất kỳ thay đổi đáng kể nào — ví dụ quy trình sản xuất mới hoặc quy định mới — và khi phản hồi của khách hàng cho thấy có một vấn đề lặp đi lặp lại.

### Ưu điểm và lợi ích của FMEA là gì?

Mục tiêu chính của FMEA là cải thiện hiệu suất đầu ra, độ tin cậy và độ an toàn của tài sản. Tuy nhiên, còn nhiều lợi ích khác khi thực hiện quy trình này, chẳng hạn:

- Xây dựng một phương pháp làm việc mà nhiều khả năng sẽ thành công, an toàn và đáng tin cậy.
- Đánh giá các kiểu lỗi và tác động của chúng, để bạn có thể ưu tiên chúng theo mức độ nghiêm trọng và khả năng xảy ra (đặc biệt nếu bạn thực hiện FMECA). Việc thiết lập thứ tự ưu tiên cải thiện kế hoạch bảo trì của bạn.
- Xác định các điểm dễ lỗi và kiểm tra tính toàn vẹn của hệ thống — vốn không được phép bị xâm phạm về mặt an toàn — kể cả khi bạn cần đưa thêm các biện pháp an toàn mới.
- Thử nghiệm các thay đổi và điều chỉnh trong thiết kế sản phẩm (ví dụ, kiểm tra xem xác suất xảy ra lỗi đã giảm chưa).
- Xử lý sự cố nhanh hơn, vì các kiểu lỗi và nguyên nhân tương ứng đều đã được mô tả rõ ràng.
- Dựa trên các kiểu lỗi, xác định tiêu chí cho các lần chạy thử và kiểm tra cần đưa vào kế hoạch bảo trì phòng ngừa.

### Nhược điểm và hạn chế của FMEA là gì?

Mặt khác, FMEA cũng có một số điểm yếu:

- FMEA không phù hợp với các hệ thống mà nhiều lỗi có thể xảy ra cùng lúc, vì nó không tính đến mối tương quan giữa các lỗi.
- Như chúng ta sẽ thấy dưới đây, mức độ nghiêm trọng (severity), xác suất (probability) và khả năng phát hiện (detection) có cùng trọng số trong đánh giá rủi ro, đây là một cách tiếp cận đơn giản hóa.
- FMEA phụ thuộc vào chuyên môn của nhóm để liệt kê các kiểu lỗi, khiến nó trở thành một quy trình tốn thời gian và đòi hỏi nhiều nhân lực.
- FMEA cần được cập nhật liên tục, vì hiểu biết của bạn về một tài sản tăng lên theo kinh nghiệm, thời gian và quá trình sử dụng; bạn nhiều khả năng sẽ phát hiện những kiểu lỗi mới mà nhóm chưa nghĩ tới ngay từ đầu.
- Nếu bạn không xét đến một kiểu lỗi nào đó, bạn sẽ đánh giá thấp rủi ro liên quan đến tài sản. Mặt khác, đi vào chi tiết quá mức sẽ làm bạn xao nhãng khỏi các vấn đề quan trọng và là sự lãng phí nguồn lực.

### Cách thực hiện Phân tích kiểu lỗi và tác động

Thách thức lớn nhất trong một Phân tích kiểu lỗi và tác động là sự kỹ lưỡng về các kiểu lỗi, nguyên nhân và tác động của chúng. Thông thường, bạn sẽ sắp xếp thông tin vào một bảng chia thành 7 cột, mỗi cột tương ứng với một bước dưới đây.

FMEA và FMECA thường được sử dụng trong các ngành rủi ro cao, nơi an toàn là ưu tiên hàng đầu. Tuy nhiên, để phục vụ cho bài viết này, chúng ta sẽ dùng một ví dụ đời thường hơn nhiều: một món ăn được chế biến kém tại nhà hàng.

**1. Xác định các kiểu lỗi**
Bước đầu tiên của phân tích FMEA là xác định tất cả các kiểu lỗi có thể xảy ra cho từng bộ phận. Để làm được điều này, hãy xem xét các kinh nghiệm trước đó với những tài sản tương tự.

Chúng ta đang đối mặt với một kiểu lỗi tiếc thay khá phổ biến: tìm thấy một sợi tóc trên đĩa. "Thanh tra Michelin" trong mỗi chúng ta cũng có thể nghĩ tới ít nhất 3 kiểu lỗi khác — tìm thấy côn trùng trong thức ăn, không đủ muối, và ngộ độc thực phẩm. Hiển nhiên, một chủ nhà hàng thực thụ sẽ nghĩ ra nhiều hơn nữa. Đây chính là thách thức lớn nhất trong FMEA: nếu bạn bỏ sót các kiểu lỗi, bạn đã làm ảnh hưởng đến việc đánh giá rủi ro ngay từ đầu.

**2. Tác động của lỗi (Failure effect)**
Bước thứ hai để thực hiện FMEA là mô tả rõ ràng tác động của lỗi, vì điều này sẽ quyết định mức độ nghiêm trọng của nó. Hãy cố gắng mô tả càng cụ thể càng tốt để xác định thứ hạng nghiêm trọng ở bước 3. Tác động của kiểu lỗi của chúng ta là gì? Trong ngắn hạn, là việc trả món ăn lại cho nhà bếp. Trong dài hạn, là khách không quay lại nữa.

**3. Mức độ nghiêm trọng (Severity)**
Thang đánh giá mức độ nghiêm trọng là thang từ 1 đến 10, tùy theo mức ảnh hưởng của từng lỗi:

- **1** — rủi ro nhỏ: gần như không thể nhận thấy
- **2–3** — rủi ro thấp: lỗi có thể nhận thấy, nhưng chỉ gây phiền toái nhỏ
- **4–6** — rủi ro trung bình: hậu quả của lỗi có thể nhận thấy rõ (kể cả với khách hàng) và ảnh hưởng đến hiệu suất tài sản
- **7–8** — rủi ro cao: hoạt động bị ảnh hưởng hoàn toàn, làm gián đoạn lịch trình
- **9–10** — rủi ro rất cao/nghiêm trọng: tài sản bị tê liệt hoàn toàn và có rủi ro an toàn cao

Chúng tôi không biết bạn nghĩ sao, nhưng với chúng tôi, "món ăn dính tóc người" là tài sản bị ảnh hưởng hoàn toàn, với rủi ro lớn về an toàn và vệ sinh. Chúng tôi chấm nó **9 điểm** (để dành điểm 10 cho khuẩn salmonella).

**4. Nguyên nhân gốc rễ tiềm năng (Potential root cause)**
Cùng một kiểu lỗi có thể có nhiều nguyên nhân gốc rễ. Ví dụ, nếu một thang máy dừng giữa các tầng, có thể là do cấu hình sai hoặc do sự cố điện. Nếu bạn liệt kê trước tất cả các nguyên nhân gốc rễ tiềm năng, sẽ dễ dàng hơn khi kiểm tra, xử lý sự cố và khắc phục lỗi khi chúng xảy ra.

Trong ví dụ của chúng ta, nguyên nhân gốc rễ là rõ ràng: nhân viên bếp không đội mũ trùm tóc. Nếu chúng ta tìm thấy côn trùng trong món salad, chẳng hạn, sẽ có nhiều "thủ phạm" tiềm năng hơn: bảo quản không đúng cách; không rửa kỹ; côn trùng xâm nhập, v.v.

**5. Tần suất xảy ra (Occurrence)**
Tần suất xảy ra biểu thị mức độ thường xuyên dự kiến của lỗi, cũng dựa trên lịch sử tài sản hoặc của một thiết bị tương tự. Thông thường, tần suất là một thang điểm từ 1 đến 10, trong đó 1 là "cực kỳ khó xảy ra" và 10 là "cực kỳ dễ xảy ra" hoặc "không thể tránh khỏi".

Dựa trên kinh nghiệm cá nhân, chúng tôi ước tính tần suất của kiểu lỗi này là **2**.

**6. Khả năng phát hiện (Detection)**
Ở cột này, bạn nên đề xuất các biện pháp để phát hiện các lỗi tiềm năng. Thứ hạng phát hiện — hay khả năng phát hiện lỗi — là một thang từ 1 đến 10, trong đó 1 nghĩa là "cực kỳ dễ phát hiện" và 10 là "cực kỳ khó phát hiện".

Trong trường hợp của chúng ta, biện pháp đề xuất để tránh kiểu lỗi cụ thể này là kiểm tra món ăn bằng mắt thường trước khi phục vụ khách. Nhưng kiểm tra bằng mắt thường khá thiếu tin cậy — đó là lý do chúng ta chỉ phát hiện ra quá muộn. Vì vậy, không muốn đào sâu thêm vào những trải nghiệm tồi tệ này trước bữa trưa, chúng tôi ước tính thứ hạng phát hiện là **4**, "khá dễ phát hiện".

**7. Tính chỉ số ưu tiên rủi ro (RPN)**
Cuối cùng, chúng ta có thể tính chỉ số ưu tiên rủi ro. RPN bằng mức độ nghiêm trọng (tính ở bước 3) × tần suất xảy ra (bước 5) × khả năng phát hiện (bước 6). Mức rủi ro càng lớn, nhu cầu tìm kiếm cải tiến càng cao.

Mức rủi ro của món ăn của chúng ta, theo các điểm số đã chấm, sẽ là **9 × 2 × 4 = 72**. Nếu chúng ta đã chấm 10 cho khuẩn salmonella, với cùng tần suất và khả năng phát hiện, mức rủi ro của nó sẽ là **80** — nghĩa là nó sẽ có mức ưu tiên cao hơn, điều này nghe có vẻ hợp lý!

---

## Phân tích dữ liệu

Cuối cùng, nhưng không kém phần quan trọng hay hiệu quả, là phân tích dữ liệu. Đúng như tên gọi, nó bao gồm việc thu thập, mô hình hóa và xử lý thông tin theo cách cho phép người quản lý thu được những thông tin chi tiết có giá trị về những gì đang hoạt động kém hiệu quả. Công việc này trở nên đơn giản hơn nếu bạn đang dùng CMMS hoặc một Nền tảng quản lý bảo trì thông minh (Intelligent Maintenance Management Platform — IMMP) để hợp lý hóa và quản lý toàn bộ dữ liệu: tài sản, kế hoạch bảo trì và việc thực thi.

Việc nhập dữ liệu một cách "kỷ luật" vào phần mềm giúp tính toán các chỉ số như tỷ lệ tuân thủ, tỷ lệ bảo trì theo kế hoạch và bảo trì theo lịch trong nháy mắt. Nó cũng cho bạn một góc nhìn toàn cục về lịch sử của từng tài sản, và sau một sự cố, nó có thể giúp xác định chính xác thời điểm công tác bảo trì đã thất bại.

![Biểu đồ phân tích dữ liệu dạng đường: trục thời gian từ 14/11/2018 đến 22/08/2019, trục nhiệt độ (°C) với đường biểu diễn dao động quanh mức trung bình 24.6 °C, chạm đáy ~24 vào đầu 2019 rồi tăng dần lên 26 °C; phía sau có biểu đồ công suất (kW)](rca/data-analysis-chart.png)

*Nguồn: Infraspeak*

Theo một cách nào đó, tất cả các phương pháp chúng ta đã liệt kê đều phụ thuộc vào phân tích dữ liệu. Vì vậy, nó có thể (và nên) là một phần của bất kỳ công cụ phân tích nguyên nhân gốc rễ nào bạn chọn.

---

## Lời kêu gọi (trang quảng bá)

Bạn muốn biết các tính năng phân tích dữ liệu của Infraspeak có thể giúp bạn phân tích nguyên nhân gốc rễ như thế nào không?

Hãy tìm hiểu tất cả về Nền tảng quản lý bảo trì thông minh của chúng tôi ngay hôm nay.

**→ Đặt lịch demo ngay (Schedule a Demo Now)**

---

*Toàn bộ hình ảnh trong bài được lưu trong thư mục `rca/`, cùng cấp với file markdown này. Các sơ đồ được cắt từ bản PDF gốc. Những vị trí ảnh không trích được đã được ghi chú bằng `![mô tả]` để Đại ca tự bổ sung nếu cần.*
