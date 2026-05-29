## Định nghĩa

**Process Characterization** xác định mối quan hệ giữa tham số process (nhiệt độ, áp suất, RF power, thời gian, dose...) với kết quả vật lý/điện trên wafer.

## Phương pháp

- **DOE (Design of Experiments)**: split-lot với các giá trị tham số khác nhau
- **Response Surface Methodology**: fit mặt đáp ứng để tìm optimum
- **Process window mapping**: vùng tham số cho output trong spec

## Output

- Process recipe đã tối ưu cho từng module (litho, etch, CVD, CMP, implant)
- Process window đã document để vận hành HVM
- Sensitivity matrix: tham số nào ảnh hưởng tham số đầu ra nào

## Khác với Device Characterization

| | Process Char. | Device Char. |
|---|---|---|
| Đối tượng | Step process | Linh kiện hoàn chỉnh |
| Output | Recipe, window | SPICE model param |
| Phase chính | P1a, P2 | P2, P3 |