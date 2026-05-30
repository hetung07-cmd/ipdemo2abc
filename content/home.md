## What happens in a fab — from technology development to customer ramp

Tài liệu tham khảo dành cho kỹ sư fab. Mỗi bài viết bao quát một khái niệm, một phương pháp, hoặc một bước trong quy trình. Nội dung được xây dựng dựa trên các chuẩn JEDEC, SEMI, AIAG và thực tiễn vận hành fab bán dẫn.

## Cách sử dụng wiki

- **Duyệt sidebar** theo 5 nhóm: Method Articles, Process / Workflow, Design ↔ Fab Interface, Production / HVM, Customer NPI & Standards.
- **Click vào bài viết** để mở. URL cập nhật thành `#article-id` để có thể bookmark hoặc chia sẻ link trực tiếp.
- **Citation** trong mỗi bài dùng định dạng khoa học — đánh số `[n]` inline, danh sách reference đầy đủ ở cuối bài.
- Mỗi bài cung cấp định nghĩa, phương pháp thực hiện, và tham chiếu chuẩn liên quan.

## Reading paths — lộ trình đọc gợi ý

### Người mới vào fab

Bắt đầu với **Process Characterization** (phương pháp nền tảng), rồi **Device Characterization**, sau đó **Process Qualification**. Ba bài này theo thứ tự cho bạn xương sống của technology development.

### Kỹ sư Reliability / FA

Đọc **Failure Analysis (FA)** trước để hiểu quy trình điều tra, rồi **FMEA** để thấy mặt chủ động (proactive), sau đó **Device Characterization** cho nền tảng cấu trúc test.

### Process control / thống kê

**Process Characterization → DOE → MSA → SPC → APC**. Đây là chuỗi phương pháp thống kê cốt lõi mà mọi bài khác trong wiki tham chiếu đến.

### Customer NPI

**Tape-out → PRR → Product Qualification → PQE → CoC**. Lộ trình từ nhận thiết kế khách hàng đến chứng nhận sản phẩm.

## Cấu trúc nội dung

Wiki gồm **31 bài viết** chia thành 5 nhóm:

- **Method Articles** (8) — phương pháp đo đạc, phân tích, kiểm soát: Process/Device Characterization, DOE, FMEA, MSA, FA, SPC, APC
- **Process / Workflow** (7) — quy trình và workflow: Process/Product Qualification, PCM/WAT, TEG, TQV, MPW, Construction Analysis
- **Design ↔ Fab Interface** (4) — giao diện thiết kế-sản xuất: DFT, DFM, MfD, SPICE model
- **Production / HVM** (5) — vận hành sản xuất: Lot types, PCN, OEE, WIP/cycle time, Yield Learning
- **Customer NPI & Standards** (7) — onboarding khách hàng & chuẩn: Tape-out, PRR, PQE, CoC, FAT/SAT, SWEAT, Standards Index

## Nguồn tham khảo chính

- JEDEC JEP001 — Foundry Process Qualification Guidelines
- JEDEC JEP012A — Wafer-level reliability
- JEDEC JEP131A — Failure Mode and Effects Analysis
- JEDEC JEP132A.01 — Process Characterization Guideline (Dec 2022)
- JEDEC JESD22 series — Reliability test methods
- May, G. S. & Spanos, C. J. — Fundamentals of Semiconductor Manufacturing and Process Control, Wiley-IEEE Press, 2006
- AIAG — Measurement Systems Analysis Reference Manual, 4th ed.
- SEMI E10, E30 (GEM), E37 (HSMS) — Equipment standards
