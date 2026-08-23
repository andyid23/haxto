# Dasbor Kuis — Panduan Deploy & Referensi

Dokumen ini merangkum setup backend Google Apps Script, struktur spreadsheet,
properti HAX editor, dan perilaku efek confetti untuk komponen `dasbor-kuis`
yang terpasang di situs HAXcms ini.

Sumber kebenaran kode: `elements/dasbor-kuis/lib/codev5.gs` (backend V5).

---

## 1. Setup Spreadsheet (Task 6.1)

Script `codev5.gs` dipasang sebagai **project terikat spreadsheet**
(`SpreadsheetApp.getActiveSpreadsheet()`). Buat sheet berikut pada spreadsheet
yang sama, atau biarkan script mengisi otomatis pada aksi pertama
(beberapa sheet auto-create header saat `logActivity`/`register` dipanggil).

| Sheet | Kolom header (urutan) | Ditulis oleh | Dibaca oleh |
|---|---|---|---|
| `Users` | StudentID, NIS, Nama, Email, Absen, Kelas, RegisteredAt, LastLogin | `register` | `getStudentRoster`, `login`, `verify` |
| `db_aktivitas` | Timestamp, Tanggal, Hari, Nama, Tipe Aktivitas, Deskripsi, Count, Student ID, NIS, Absen, Kelas, Kode Materi, ID Log | `logActivity` | `getActivityHistory`, `generateReport` |
| `db_nilai` | Timestamp, Date, Kode Materi, Nama, Skor (%), Total Soal, Status, Student ID, NIS, Absen, Kelas, Kategori Kuis, ID Log | `logActivity` (tipe `quiz`) | `getScores`, `generateReport` |
| `Rangkuman` | Student ID, NIS, Nama, Absen, Kelas, Total Kuis, Rata-rata Skor, … (21 kolom) | `generateReport` | `getLeaderboard` |
| `Akumulasi Nilai Rapor` | Student ID, NIS, Nama, Absen, Kelas, Jumlah Pertemuan, … (15 kolom) | `generateReport` | `getScores`, `getStudentRoster` |
| `Bank Soal` | ID, Kategori, Tipe, Detail (JSON: `{choices, correctIndex}`), Soal, Poin | Diisi guru | `getBankSoal` → `<kuis-ledakan>` |
| `Nilai Manual` | Student ID, Kategori, Skor | `setManualScore` | `getScores` |
| `db_kehadiran` | Timestamp, Tanggal, Nama, Student ID, NIS, Absen, Kelas, Kode Materi, Kehadiran (%), Status, Kriteria | `saveAttendanceComplete` | `generateReport` |

> Catatan: script juga mengenal sheet opsional `Forum Log` dan `Tugas Log`
> untuk fitur forum/tugas di komponen `ruang-diskusi` / `kirim-tugas`.

### Catatan anti double-entry (V5.1)

Semua penulisan `db_aktivitas` & `db_nilai` diserialkan dengan
`LockService.getScriptLock()` + `SpreadsheetApp.flush()` selagi lock dipegang.
`id_log`/baris identik ditolak diam-diam; baris rangkap dengan `id_log` sama
otomatis dipangkas saat `logActivity` dipanggil ulang atau lewat `dedupTransaksi`.

---

## 2. Langkah Deploy Web App (Task 6.2)

1. Buka Google Spreadsheet baru (sheet boleh kosong — akan dibuat otomatis).
2. **Extensions → Apps Script**.
3. Salin seluruh isi `elements/dasbor-kuis/lib/codev5.gs` ke editor Apps Script
   (hapus isi bawaan `function myFunction()`).
4. **Deploy → New deployment → Web app**:
   - **Execute as**: Me
   - **Who has access**: Anyone (agar bisa diakses dari halaman web siswa)
5. Salin URL **`/exec`** dan tempelkan ke atribut `apps-script-url` pada
   semua komponen di halaman:
   - `<dasbor-kuis>`, `<quiz-user-auth>`, `<kuis-ledakan>`, `<latihan-kuis>`.
6. **Init sheet sekali panggil** — buat semua sheet + header row sekaligus:
   ```
   GET <url-exec>?action=initSheets
   ```
   Response: `{"status":"ok","created":["Users","db_aktivitas",...],"message":"..."}`.
   Sheet yang dibuat: Users, db_aktivitas, db_nilai, Rangkuman,
   Akumulasi Nilai Rapor, Bank Soal, Nilai Manual, db_kehadiran, Forum Log,
   Tugas Log. Tanpa langkah ini, `logActivity`/`register` tidak menulis apa pun
   (sheet tidak ada → blok tulis dilewati tapi tetap mengembalikan `ok`).
7. Jalankan sekali `action=generateReport` (buka URL `/exec?action=generateReport`)
   untuk menginisialisasi sheet `Rangkuman` & `Akumulasi Nilai Rapor`.
8. Isi sheet `Bank Soal` dengan soal AKM. Format kolom:
   - `Kategori` (mis. `AKM`), `Tipe` (`mc`/`pgk`/`matching`/`shortAnswer`),
   - `Soal` (teks soal),
   - `Detail` berisi JSON, contoh PG:
     ```json
     {"choices": ["Jakarta", "Bandung", "Surabaya", "Medan"], "correctIndex": 0}
     ```
   - `Poin` (default 1).

Setelah edit script/sheet: **Deploy → Manage deployments → Edit → Version: New version**
agar perubahan diterapkan.

---

## 3. Referensi Properti UI (HAX Editor) (Task 7)

Setiap komponen mendaftarkan `haxProperties` sehingga muncul di panel editor
HAX (insert element + panel properti kanan).

### `kuis-ledakan` (halaman Ulangan Harian)

| Properti | Tipe | Default | Keterangan |
|---|---|---|---|
| `judul` | textfield | "Evaluasi Kuis Interaktif" | Judul kartu |
| `appsScriptUrl` | textfield | "" | URL `/exec` GAS |
| `kdMateri` | textfield | "Pertemuan 1" | Kode pertemuan |
| `mode` | select (guru/dosen/siswa) | "siswa" | Guru: tombol ulang tampil |
| `questions` | code-editor | (kosong → Bank Soal) | Array soal AKM JSON |
| `shuffleChoices` | boolean | false | Acak urutan pilihan |
| `hideAnswers` | boolean | false | Sembunyikan benar/salah |
| `hideScore` | boolean | false | Sembunyikan skor |
| `hideConfetti` | boolean | false | Nonaktifkan konfeti |
| `timerDuration` | number | 0 | Durasi detik (0 = tanpa timer) |
| `timerAutostart` | boolean | true | Timer langsung jalan saat mulai |

### `latihan-kuis` (halaman Materi & Latihan)

| Properti | Tipe | Default | Keterangan |
|---|---|---|---|
| `appsScriptUrl` | textfield | "" | URL GAS |
| `spreadsheetUrl` | textfield | "" | Link spreadsheet nilai |
| `duration` | number | 300 | Durasi kuis (detik) |
| `judulMateri` | textfield | "Materi Pembelajaran" | Judul kartu materi |
| `teksMateri` | textarea | "…" | Paragraf pemanasan |
| `materiUrl` | textfield | "" | Link URL materi |
| `materiFile` | haxupload | "" | File materi |
| `coverImage` | image | "" | Gambar sampul |
| `judulKuis` | textfield | "Evaluasi Kuis Interaktif" | Judul kartu kuis |
| `pesanWaktuHabis` | textfield | "⏰ Waktu habis! …" | Pesan saat habis |
| `pesanNilaiTerkirim` | textarea | "🎉 Selamat! …" | Pesan saat selesai |
| `labelMulai` | textfield | "▶️ Mulai Latihan" | Teks tombol mulai |

### `dasbor-kuis` (halaman Welcome / pantauan guru)

| Properti | Tipe | Default | Keterangan |
|---|---|---|---|
| `appsScriptUrl` | textfield | "" | URL `/exec` GAS |
| `kdMateri` | textfield | "Pertemuan 1" | Kode topik/pertemuan |
| `mode` | select (guru/siswa) | "guru" | Mode tampilan |
| `kelas` | textfield | "XI-1" | Filter kelas |
| `allowModeSwitch` | boolean | false | Tampilkan tombol pindah mode |
| `studentId` / `namaSiswa` / `nis` / `absen` | textfield | … | Identitas siswa (mode siswa) |

### `quiz-user-auth` (login/registrasi siswa)

| Properti | Tipe | Default | Keterangan |
|---|---|---|---|
| `appsScriptUrl` | textfield | "" | URL GAS (wajib) |
| `autoLogin` | boolean | true | Verifikasi sesi tersimpan otomatis |

---

## 4. Dokumentasi Efek Confetti (Task 8)

Perilaku confetti saat ini di `elements/dasbor-kuis/lib/kuis-ledakan.js`
(perilaku bawaan, **bukan** fitur baru):

- **Library**: `canvas-confetti` — `import confetti from "canvas-confetti"`
  (`lib/kuis-ledakan.js:4`).
- **Satu jawaban benar** → `_fireConfetti()`: 3 burst (tengah + kiri + kanan)
  dengan total ±160 partikel:
  - tengah: `particleCount: 70, spread: 85`
  - kiri: `particleCount: 45, angle: 58, spread: 65`
  - kanan: `particleCount: 45, angle: 122, spread: 65`
  - `ticks: 220`, `gravity: 0.85`, `decay: 0.92`, `startVelocity: 42`,
    `zIndex: 9999`.
- **Skor akhir ≥ 80%** → `_fireMegaConfetti()`: burst RGB berulang selama
  900 ms via `requestAnimationFrame` (partikel 3/kiri + 3/kanan per frame,
  warna `#ff0000 #00ff00 #0000ff #ffff00`).
- **Kontrol**: atribut boolean `hide-confetti` menonaktifkan SEMUA efek
  (baik per-jawaban maupun mega). Tidak ada konfigurasi runtime lain.
- **Di HAXcms**: `canvas-confetti` di-bundle ke `build/custom.es6.js`
  (rollup config `external` mengembalikan `false` untuk package ini) karena
  import map situs hanya memetakan `@haxtheweb/`. Begitu pula `lit` dan
  keluarga `lit-*` ikut di-bundle.
- Tidak perlu/tersedia penyesuaian level partikel, warna, atau durasi dari
  atribut — hanya on/off.

---

## 5. Halaman Situs

| Slug | Judul | Komponen utama |
|---|---|---|
| `welcome` | Welcome to haxto | `<quiz-user-auth>`, `<dasbor-kuis mode="guru">` |
| `ulangan-harian` | Ulangan Harian | `<quiz-user-auth>`, `<kuis-ledakan>` (hide-answers, hide-confetti, timer 1800 s) |
| `materi-latihan` | Materi & Latihan Soal | `<quiz-user-auth>`, `<latihan-kuis>` (materi + kuis 600 s) |

Semua `apps-script-url` di halaman memakai URL demo deployment.
**Ganti dengan URL `/exec` hasil deploy sendiri** sebelum dipublikasikan.

---

## 6. Alur Kerja Update Komponen

Edit di `elements/dasbor-kuis/` → jalankan sync → build:

```bash
# dari elements/dasbor-kuis/  (atau haxto/custom/)
npm run sync
# lalu di haxto/custom/
npm run analyze && npm run build
```
