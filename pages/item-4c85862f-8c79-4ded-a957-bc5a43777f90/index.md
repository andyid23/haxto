# Kategori Kuis: Formatif vs Sumatif

Panduan guru untuk memisahkan **kuis latihan (formatif)** dari **kuis rapor (sumatif)** pada `<kuis-ledakan>` agar skor latihan tidak lagi "mengotori" rapor siswa.

---

<grid-plate layout="1-1" disable-responsive>
  <div slot="col-1">
    <h2 id="h2-formatif">📊 Formatif — Progres Belajar</h2>
    <p>Kuis latihan / evaluasi mandiri yang digunakan untuk <strong>memantau perkembangan</strong> siswa selama proses belajar. Skor ini <strong>tidak masuk rapor</strong>, hanya tercatat di sheet <code>db_aktivitas</code> (heatmap/progres).</p>
    <ul>
      <li>Contoh: latihan harian, evaluasi mandiri, remedial</li>
      <li>Tujuan: diagnostik — membantu guru & siswa melihat kebutuhan remedial/pengayaan</li>
      <li>Sheet: <code>db_aktivitas</code></li>
      <li>Masuk rapor? <strong>Tidak</strong></li>
    </ul>
  </div>
  <div slot="col-2">
    <h2 id="h2-sumatif">🎯 Sumatif — Rapor</h2>
    <p>Penilaian akhir yang <strong>resmi tercatat di rapor</strong>. Hanya asesmen sumatif (Lingkup Materi / LM dan Sumatif Akhir Semester / SAS) yang dipakai untuk menghitung <code>Nilai_Rapor</code>.</p>
    <ul>
      <li>Contoh: ulangan harian resmi, PAS, UTS</li>
      <li>Tujuan: pencapaian akhir yang tercatat di rapor</li>
      <li>Sheet: <code>db_asesmen</code></li>
      <li>Masuk rapor? <strong>Ya</strong> → kolom <code>LM1..LM5</code></li>
    </ul>
  </div>
</grid-plate>

---

## 1. Masalah Sebelumnya

Dulu `<kuis-ledakan>` selalu mengirim hasil ke sheet `db_asesmen` (rapor), apapun tujuannya. Backend `codev6.gs` mengabaikan properti `jenisKuis` dan memaksa kategori default `sumatif_lm`. Akibatnya kuis latihan / evaluasi mandiri ikut masuk kolom **LM rapor** (`generateReport` mengelompokkan `sumatif_lm` → `LM1..LM5`).

Model Kurikulum Merdeka mewajibkan: **formatif = progres** (tidak masuk rapor), **sumatif = rapor**. Sheet `db_aktivitas` (heatmap/progres) sudah disiapkan tetapi belum pernah ditulis oleh jalur kuis.

---

## 2. Solusi: Properti `kategori`

Kini `<kuis-ledakan>` memiliki properti `kategori` yang mengontrol destinasi sheet:

| Nilai `kategori` | Tujuan | Sheet tujuan | Masuk Rapor? |
| --- | --- | --- | --- |
| `sumatif_lm` (default) | Penilaian sumatif per Lingkup Materi | `db_asesmen` | **Ya** → kolom `LM1..LM5` |
| `formatif` | Latihan / evaluasi mandiri (progres) | `db_aktivitas` | **Tidak** (hanya heatmap/progres) |

- **Backward compatible:** bila atribut `kategori` tidak diisi, perilaku tetap lama (`sumatif_lm`).
- Properti diekspos di panel HAX sebagai `select` (Guru mode → bagian configure), sehingga bisa diubah tanpa menyentuh kode.

---

## 3. Prasyarat

1. Atribut `apps-script-url` menunjuk ke Web App `codev6.gs` yang sudah di-deploy ulang (versi berisi rute `formatif`).
2. Siswa sudah login (`student-id` terisi, biasanya otomatis dari `<quiz-user-auth>`).
3. `kd-materi` **stabil** (tidak berubah antar sesi) — dipakai sebagai kunci attempt & kunci duplikat.
4. Jalankan `?action=generateReport` (atau tombol Generate Report di dasbor) untuk membangun ulang rapor.

> Catatan: jalur utama penulisan adalah **jalur mandiri** di dalam `<kuis-ledakan>` (`_kirimHasilLangsung`). Host `<dasbor-kuis>` hanya menangkap event bila kuis berada di dalam shadow DOM-nya.

---

## 4. Contoh Penggunaan

### 4.1 Sumatif (masuk rapor)

```html
<kuis-ledakan
  judul="Ulangan Harian LM-1"
  mode="siswa"
  kd-materi="LM-1"
  kategori="sumatif_lm"
  apps-script-url="https://script.google.com/macros/s/AKfy.../exec"
></kuis-ledakan>
```

Skor akan muncul di `db_asesmen` dan masuk kolom `LM1..LM5` pada rapor.

### 4.2 Formatif (hanya progres)

```html
<kuis-ledakan
  judul="Latihan Literasi Membaca"
  mode="siswa"
  kd-materi="Latihan Literasi"
  kategori="formatif"
  apps-script-url="https://script.google.com/macros/s/AKfy.../exec"
></kuis-ledakan>
```

Skor akan muncul di `db_aktivitas` (heatmap), **tidak** mengubah rapor.

### 4.3 Melalui `<latihan-kuis>`

`<latihan-kuis>` hanya membungkus `<kuis-ledakan>`, sehingga properti `kategori` dan `kd-materi` diteruskan ke backend yang sama:

```html
<latihan-kuis
  judul="Latihan Soal Harian"
  kd-materi="Latihan Harian"
  kategori="formatif"
  apps-script-url="https://script.google.com/macros/s/AKfy.../exec"
></latihan-kuis>
```

---

## 5. Verifikasi

1. **Chip status kuis:** setelah submit, kartu kuis menampilkan "✅ Skor & status kuis terkirim…" (atau "duplikat dilewati" bila dikirim ulang).
2. **Cek sheet:**
   - `kategori="sumatif_lm"` → baris baru di `db_asesmen` (kolom `Kode LM` = `kd-materi`).
   - `kategori="formatif"` → baris baru di `db_aktivitas` (kolom `Tipe Aktivitas` = `kuis_formatif`), **tidak** ada di `db_asesmen`.
3. **Rapor:** jalankan `?action=generateReport`. Nilai `formatif` **tidak** muncul di `Akumulasi_Nilai_Rapor`.
4. **Idempotensi:** kirim ulang dengan `id_log` sama → tidak ada baris ganda (cek kolom `ID Log`).
5. **Deployment:** pastikan Web App di-deploy dengan akses **"Anyone"** (Execute as: Me).

---

## 6. Catatan Tambahan

- Pemetaan `kd-materi` → `LM1..LM5` di rapor bersifat **alfabetis**; untuk urutan rapor yang bisa ditebak, gunakan `LM-1`, `LM-2`, … `LM-5`.
- `db_aktivitas` baru terisi setelah minimal satu kuis `formatif` dijalankan (belum ada data historis sebelumnya).
- `latihan-kuis` tidak memiliki backend sendiri — ia murni wrapper `<kuis-ledakan>`.
