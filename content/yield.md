**Yield Learning** là quá trình có hệ thống để tăng yield (tỷ lệ die tốt/wafer) theo thời gian, từ baseline thấp lúc mới chạy đến target HVM.

## Các loại yield

- **Line yield** — % wafer qua được hết line (không vỡ, không scrap)
- **Die yield / Functional yield** — % die hoạt động đúng
- **Parametric yield** — % die đạt spec điện

## Yield learning curve

Yield tăng theo dạng learning curve: nhanh lúc đầu (low-hanging fruit), chậm dần về sau. Target dự án: P2 ≥ 60%, P3 ≥ 80%.

## Phương pháp

- **Defect Pareto** — xếp hạng defect mode theo tần suất
- **Bitmap analysis** — phân tích SRAM fail pattern → loại defect
- **Spatial signature** — vị trí fail trên wafer → nguyên nhân (edge, center, ring)
- **Inline-to-yield correlation** — tham số inline nào dự báo yield
- **Split-lot DOE** — thử nghiệm có kiểm soát để tìm yield limiter

## Yield model

- **Poisson, Murphy, negative binomial** — model dự đoán yield từ defect density (D0) và diện tích die

## Cross-references

PCM/WAT, FA, FMEA, Defect inspection, SPC.
