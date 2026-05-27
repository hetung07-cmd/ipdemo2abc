# IP & Engineer Responsibility — Technology Transfer Handbook

Sổ tay tương tác trực quan hóa quy trình chuyển giao công nghệ 28nm: ma trận IP × Engineer Group × Phase, key tasks chi tiết, và 30 references chuẩn (JEDEC/SEMI/AIAG/ITRS).

## Cấu trúc dự án

```
.
├── index.html             # Skeleton HTML, link tới CSS/JS
├── css/
│   └── style.css          # Toàn bộ style
├── js/
│   ├── data-loader.js     # Load JSON data trước khi app chạy
│   └── app.js             # Logic render, filter, modal, interaction
└── data/
    ├── config.json        # Meta, zones, domains, groups (N1–N8), phases (P0–P3)
    ├── acts.json          # Activity matrix: 8 groups × 7 phases × key_tasks
    ├── ips.json           # 142 IP items với definition / purpose / chars / delivery
    ├── relevance.json     # IP relevance map: nhóm nào cần IP gì ở phase nào (T1–T4)
    └── flow.json          # Phase flow chi tiết: activities, deliverables, refs
```

## Chạy local

Vì dùng `fetch()` để load JSON, không thể mở trực tiếp bằng `file://` — phải qua một web server (bất kỳ HTTP server đơn giản nào).

**Cách 1 — Python (có sẵn trên hầu hết máy):**
```bash
python3 -m http.server 8000
```
Sau đó mở `http://localhost:8000` trên trình duyệt.

**Cách 2 — Node.js:**
```bash
npx serve .
```

**Cách 3 — VS Code:** cài extension *Live Server*, click chuột phải `index.html` → *Open with Live Server*.

## Deploy lên GitHub Pages

1. Push repo này lên GitHub (Settings → Pages → Source = `main` branch, `/ (root)`)
2. Đợi 1–3 phút, GitHub Pages tự build và publish
3. URL truy cập: `https://<username>.github.io/<repo-name>/`

Vì là static site thuần (HTML + CSS + JS + JSON), không cần build step, không cần backend.

## Cập nhật nội dung

- Sửa **data** (thêm IP, đổi key task, cập nhật phase definition): chỉ sửa file JSON trong `data/`, không cần động vào HTML/CSS/JS.
- Sửa **style**: chỉ sửa `css/style.css`.
- Sửa **logic UI** (filter, modal behavior, layout): chỉ sửa `js/app.js`.

Mỗi commit lên `main` branch sẽ tự deploy lại trong vài phút.

## Phiên bản

- **v3** — Phase 1 tách thành 3 parallel streams (P1-TT / P1-EM / P1-CB)
- Project: Green Fab 28nm — Activity & IP Matrix
- Language: English (UI) + Vietnamese (documentation)
