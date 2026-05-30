Các chỉ số quản lý dòng chảy sản xuất (manufacturing flow) trong fab.

## WIP (Work In Progress)

Lượng wafer đang trong quá trình sản xuất (chưa hoàn thành). WIP cao → cycle time dài, vốn ứ đọng; WIP thấp → tool đói, throughput thấp.

## Cycle Time

Tổng thời gian từ lúc wafer start đến hoàn thành. Gồm:

- **Process time** — thời gian chạy thực tế trên tool
- **Queue time** — thời gian chờ trước tool (thường chiếm phần lớn)
- **Transport time** — di chuyển giữa các bay

## X-Factor

X-Factor = Cycle Time / Raw Process Time

- X = 1: lý tưởng (không chờ)
- X = 2-3: tốt cho fab logic
- X cao: nhiều queue, cần cải thiện flow

## Little's Law

**WIP = Throughput × Cycle Time** — quan hệ nền tảng giữa 3 đại lượng.

## Quản lý trong fab

Đội IT/Automation (N7) + Industrial Engineering dùng MES dispatch rule, capacity model để tối ưu. Quan trọng cho HVM ramp (P3).

## Cross-references

OEE, Lot types, Yield Learning, MES.
