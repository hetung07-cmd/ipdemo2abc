# More Topics — Hướng dẫn cài đặt và cập nhật
Chỉnh sửa nội dung trong file md chỉ bắt đầu chỉnh sửa từ phần sau ảnh minh họa trở đi.
## Cập nhật nội dung có sẵn

Mở `data/more.json`
tìm `"file":content/*.md`, xác định tên file `*.md`
sửa nội dung cần thiết trong file `*.md`

```json
{
  "id": "tên-không-dấu-không-space",
  "title": "Tên hiển thị",
  "tagline": "Mô tả 1 dòng",
  "image": "duong-dan-anh.png",
  "file": "content/process-qualification.md"
}
```

### Cú pháp Markdown được hỗ trợ
**lưu ý đây là hướng dẫn cho ai viết bằng code mà chưa nhớ hết cú pháp**
viết bằng các trình soạn thảo có lưu định dạng .md dùng định dạng của trình soạn thảo đó luôn, file sẽ tự hiểu nội dung
- `## Tiêu đề lớn`
- `### Tiêu đề nhỏ`
- `**chữ đậm**`
- `- bullet list`
- `` `inline code` ``
- Bảng:
  ```
  | Cột 1 | Cột 2 |
  |---|---|
  | A | B |
  ```
- Ảnh: `![mô tả](Ten_folder/ten-anh.png)` — file ảnh phải đúng tên và ở trong thư mục `Ten_folder`.

### Thêm topic mới

Mở `more.json`, thêm 1 object vào array `topics`:

```json
{
  "id": "new-topic",
  "title": "Topic mới",
  "tagline": "Mô tả ngắn",
  "image": "",
  "file": "content/*.md"
}
```
trường `image` hiện không cần, có thể lược bỏ nếu khai báo mới
### Workflow gợi ý:
1. Soạn nội dung trong Notion/Word để dễ format;
2. Lưu lại thành file định dạng .md, ảnh để vào 1 folder cùng tên;
3. File .md copy vào `content/`; folder ảnh update vào mục `content/images/`; 
4. update topic trong `more.jsion`.
### resize ảnh
![Caption](msa1.webp){width=400}          ← 400 pixel
![Caption](msa1.webp){width=60%}          ← 60% chiều rộng container
![Caption](msa1.webp){width=400 height=300}  ← cả width và height
