## FAT — Factory Acceptance Test

Test tool tại **site của vendor** trước khi ship đến fab.

### Mục tiêu
- Verify cấu hình phần cứng đúng PO
- Test các interlock an toàn
- Đo hiệu năng cơ bản trên wafer reference của vendor
- Verify giao diện software (SECS/GEM, recipe management)

### Thực hiện
- Engineer Green Fab travel đến site vendor (2-5 ngày)
- Theo protocol FAT đã định nghĩa trong P0
- Ký FAT certificate → trigger payment milestone

## SAT — Site Acceptance Test

Lặp lại FAT trong môi trường thực tế tại fab sau lắp đặt.

### Mục tiêu
- Verify tool hoạt động đúng với utility của Green Fab (UPW, gas, điện)
- Re-test các test FAT trong điều kiện vibration, temperature thực tế
- Verify integration với MES/FDC

### Khi pass
- Ký SAT certificate → bắt đầu warranty period
- Tool chuyển sang phase qualification (chạy process recipe trên test wafer)

## Phase

- **P0**: định nghĩa protocol FAT/SAT cho từng loại tool
- **P1b**: thực hiện FAT tại vendor, SAT tại fab
- **P2**: tool qualification chạy song song với test vehicle