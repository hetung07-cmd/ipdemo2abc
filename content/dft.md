## Định nghĩa

**Design for Test (DFT)** là tập hợp kỹ thuật thiết kế nhúng vào chip để facilitate test sau khi sản xuất.

## Các kỹ thuật chính

- **Scan chain**: nối tất cả flip-flop thành chuỗi shift register → kiểm soát và quan sát internal state
- **BIST (Built-In Self-Test)**: logic test tự sinh pattern (LBIST cho logic, MBIST cho memory)
- **JTAG/IEEE 1149.1**: boundary scan, test pin interconnect cho board-level
- **ATPG (Automatic Test Pattern Generation)**: sinh test pattern tự động cho stuck-at, transition, IDDQ faults

## Metric

- **Fault coverage**: % faults phát hiện được — target > 99% với stuck-at
- **Test time**: số cycle để chạy hết test → ảnh hưởng test cost
- **Test data volume**: dung lượng pattern → giới hạn bởi ATE memory

## Liên quan Tunghe

- DFT là responsibility của **fabless customer**, không phải foundry
- Foundry cung cấp ATPG library files trong PDK (scan flop, BIST controller)