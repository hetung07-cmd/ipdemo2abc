**Design for Test (DFT)** là tập hợp kỹ thuật thiết kế nhúng vào chip để giúp test sau sản xuất hiệu quả hơn, tăng fault coverage và giảm test cost.

## Các kỹ thuật chính

- **Scan chain** — nối flip-flop thành shift register, kiểm soát/quan sát internal state
- **BIST** — Built-In Self-Test: LBIST (logic), MBIST (memory)
- **Boundary scan (JTAG / IEEE 1149.1)** — test interconnect board-level
- **ATPG** — Automatic Test Pattern Generation cho stuck-at, transition, IDDQ fault

## Metric

- **Fault coverage**: % fault phát hiện được (target >99% stuck-at)
- **Test time**: số cycle chạy hết pattern
- **Test data volume**: dung lượng pattern, giới hạn bởi ATE memory

## Ranh giới Design ↔ Fab

DFT là trách nhiệm của **fabless customer** (đội thiết kế), không phải foundry. Foundry cung cấp:

- Scan flop, BIST controller trong standard cell library (PDK)
- ATE test interface spec
- Hỗ trợ characterize test structure

## Cross-references

SPICE/BSIM model, DFM, PDK, Product Qualification.
