## Hai khái niệm tách biệt thường đi cùng

### Failure Analysis (FA)
Quy trình điều tra ROOT CAUSE của failure đã xảy ra:

- Electrical FA (curve trace, IDDQ, scan diagnosis)
- Physical FA (deprocessing, SEM/TEM cross-section)
- Chemical analysis (FIB, SIMS, Auger)
- Output: FA report với root cause + corrective action

### Failure Mode and Effects Analysis (FMEA)
Quy trình PROACTIVE đánh giá failure mode TIỀM ẨN trước khi xảy ra:

- Liệt kê failure mode khả thi của từng process step / design block
- Đánh giá: **S**everity (mức nghiêm trọng), **O**ccurrence (tần suất), **D**etection (khả năng phát hiện)
- **RPN = S × O × D** — ưu tiên fix các item RPN cao

## Loại FMEA dùng trong fab

- **Process FMEA (PFMEA)**: cho từng process module
- **Design FMEA (DFMEA)**: cho test vehicle hoặc product
- **System FMEA**: cho integration flow

## Phase

- **P0**: định nghĩa phạm vi FMEA
- **P2**: chạy PFMEA cho tất cả module critical
- **P3**: cập nhật thành HVM FMEA với data thực tế
- **Sustainment**: FA bất kỳ khi có excursion