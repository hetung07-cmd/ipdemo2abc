## Phân loại lot trong fab

### R&D Lot (Research & Development)
- Mục đích: thử nghiệm process/device hoàn toàn mới
- Priority: thấp nhất
- Recipe: có thể thay đổi giữa các bước
- Kết quả: data cho nghiên cứu, không bắt buộc làm ra die chạy được
- Phase chính: trong TD (Technology Development), không phải Tunghe context

### Engineering Lot (E-lot)
- Mục đích: split-lot để test biến thiên process / verify recipe change
- Priority: trung bình
- Recipe: được approve qua PCN process
- Kết quả: data cho yield improvement, không ship customer
- Phase chính: **P2 chủ yếu** (yield learning, DOE)

### Pilot Lot
- Bridge giữa E-lot và production
- Recipe đã lock nhưng chưa qualify đầy đủ
- Phase chính: **P3 đầu**

### Production Lot
- Recipe đã lock và qualified
- Priority cao, theo customer commit
- Ship customer sau yield/reliability accept
- Phase chính: **P3+**

## So sánh

| Loại | Priority | Recipe change | Ship customer | Phase |
|---|---|---|---|---|
| R&D | Lowest | Free | No | TD only |
| Engineering | Mid | Approved | No | P2 |
| Pilot | High | Locked | Sometimes | P3 early |
| Production | Highest | Locked | Yes | P3+ |