# FabWiki — Sơ đồ SVG trích xuất

Mỗi sơ đồ là 1 file .svg độc lập (mở được bằng trình duyệt, hoặc Inkscape/Illustrator để sửa).

Bảng dưới ghi rõ: SVG nào thuộc bài nào, và placeholder tương ứng trong file .md.


## Cách thay vào wiki

1. Mở file .svg để xem/sửa (hoặc export sang PNG/WebP)

2. Lưu ảnh vào `content/images/`

3. Trong file .md tương ứng, tìm dòng placeholder `> 📊 **[Sơ đồ 1]** ...`

4. Thay bằng: `![Mô tả](ten-anh.svg){width=700}` (SVG cũng dùng được trực tiếp làm ảnh)


---


| File SVG | Thuộc bài (.md) | Placeholder trong md | Caption gốc |
|---|---|---|---|
| `process-characterization-fig1.svg` | `content/process-characterization.md` | `> 📊 **[Sơ đồ 1]**` | Figure 1. The six-step Process Characterization flow defined in JEDEC JEP132A.01 §4.1, wit |
| `doe-fig1.svg` | `content/doe.md` | `> 📊 **[Sơ đồ 1]**` | Figure 4. The principal DOE design families ranked from least to most informative. Run cou |
| `fmea-fig1.svg` | `content/fmea.md` | `> 📊 **[Sơ đồ 1]**` | Figure 5. FMEA scoring system and workflow per JEP131A. Each potential failure mode is sco |
| `msa-fig1.svg` | `content/msa.md` | `> 📊 **[Sơ đồ 1]**` | Figure 7. Variance decomposition that underpins MSA. The total observed variation in a mea |
| `device-characterization-fig1.svg` | `content/device-characterization.md` | `> 📊 **[Sơ đồ 1]**` | Figure 2. Device characterization flow showing the two parallel measurement branches: DC p |
| `process-qualification-fig1.svg` | `content/process-qualification.md` | `> 📊 **[Sơ đồ 1]**` | Figure 3. Process qualification two-level framework. Level 1 (red panel) uses dedicated te |
| `fa-fig1.svg` | `content/fa.md` | `> 📊 **[Sơ đồ 1]**` | Figure 6. The six-stage Failure Analysis flow. Stages 1 and 2 use electrical and optical m |