**APC (Advanced Process Control)** là tập hợp kỹ thuật điều khiển process tự động dựa trên data, gồm Run-to-Run control, Fault Detection & Classification (FDC), và Virtual Metrology.

## Run-to-Run (R2R) Control

Điều chỉnh recipe tham số giữa các lot/wafer dựa trên kết quả đo của lot trước:

- **Feedback**: đo output lot N → điều chỉnh recipe lot N+1 để bù drift
- **Feedforward**: đo input (vd độ dày film vào CMP) → điều chỉnh recipe để bù biến động đầu vào
- Thuật toán phổ biến: **EWMA** (Exponentially Weighted Moving Average)

## FDC — Fault Detection & Classification

Giám sát hàng trăm sensor của tool theo thời gian thực (nhiệt độ, áp suất, RF power, flow, endpoint):

- **Detection**: phát hiện tool đi chệch khỏi fingerprint bình thường
- **Classification**: phân loại loại fault để chẩn đoán nhanh
- Mục tiêu: dừng tool trước khi sản xuất wafer lỗi

## Virtual Metrology (VM)

Dự đoán kết quả đo của wafer dựa trên data sensor FDC, không cần đo thực tế — giảm cycle time và tăng coverage.

## Liên quan trong fab

APC là tầng điều khiển nâng cao trên nền SPC, triển khai trong P2-P3, vận hành bởi đội IT/Automation (N7). Cần hạ tầng MES + data historian + model engine.

## Cross-references

SPC (nền tảng thống kê), Process Characterization (cung cấp model), Metrology.
