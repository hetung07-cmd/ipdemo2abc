Phân loại wafer **lot** theo mục đích sử dụng, quyết định priority, quyền thay đổi recipe, và việc có ship khách hàng hay không.

## Các loại lot

### R&D Lot
- Mục đích: thử nghiệm process/device hoàn toàn mới
- Priority: thấp nhất, recipe tự do thay đổi
- Không ship customer, chỉ phục vụ nghiên cứu (giai đoạn TD)

### Engineering Lot (E-lot)
- Mục đích: split-lot test biến thiên process, verify recipe change
- Priority: trung bình, recipe qua PCN approve
- Phase chính: P2 (yield learning, DOE)

### Qualification Lot
- Mục đích: chạy qualification chính thức (process/product)
- Recipe đã khóa, theo dõi chặt
- Phase: P2-P3

### Pilot Lot
- Bridge giữa E-lot và production, recipe khóa nhưng chưa qualify đầy đủ

### Production Lot
- Recipe khóa và qualified, priority cao, ship customer

## So sánh

| Loại | Priority | Recipe | Ship | Phase |
|---|---|---|---|---|
| R&D | Thấp nhất | Tự do | Không | TD |
| Engineering | Trung bình | Approve | Không | P2 |
| Qualification | Cao | Khóa | Không | P2-P3 |
| Production | Cao nhất | Khóa | Có | P3+ |

## Cross-references

PCN, Yield Learning, Test Vehicle, WIP & cycle time.
