
![MSA schematic](msa/msa1.webp)
![MSA schematic](msa/msa1.webp){width=400}
![MSA schematic](msa/msa1.webp){width=60%}
![MSA schematic](msa/msa1.webp){width=400 height=300}

## Định nghĩa

**MSA (Measurement System Analysis)** đánh giá năng lực của hệ thống đo (tool + operator + method + reference) để đảm bảo data đo đủ tin cậy cho ra quyết định.

## Các thành phần MSA

### Gage R&R (Repeatability & Reproducibility)
- **Repeatability**: variation khi cùng operator + cùng tool đo cùng part nhiều lần
- **Reproducibility**: variation giữa các operator khác nhau
- Total Gage R&R % = √(R² + R²) / Tolerance

### Bias
- Sai lệch hệ thống so với reference standard truy nguyên NIST
- Phải re-calibrate nếu bias drift theo thời gian

### Linearity
- Bias có khác nhau theo dải đo không?
- Ví dụ: CD-SEM có thể accurate ở 100nm nhưng bias lớn ở 30nm

### Stability
- Bias có drift theo thời gian không?
- Yêu cầu calibration cycle định kỳ (daily/weekly)

## Tiêu chí pass

Theo **AIAG MSA Reference Manual (4th edition)**:

- Gage R&R % Tolerance < 10%: **Acceptable**
- 10% - 30%: Marginal, cần improvement
- \> 30%: **Unacceptable**, không dùng được

## Phương pháp đo

- **Crossed design**: thường dùng — 3 operator × 10 part × 3 trial
- **Nested design**: dùng khi part bị destroyed bởi đo (vd. cross-section)

## Phase

- **P1b**: chạy GR&R tại vendor trong FAT
- **P2**: re-validate GR&R trong môi trường fab
- **P3+**: re-qualification hàng năm
