# Kategori Kuis: Formatif vs Sumatif pada `<kuis-ledakan>`

Panduan guru memisahkan **kuis latihan (formatif)** dari **kuis rapor (sumatif)** agar skor latihan tidak mengotori rapor siswa. Komponen `<kuis-ledakan>` (dan wrapper-nya `<latihan-kuis>`) kini mendukung properti `kategori`.

<grid-plate layout="1-1" disable-responsive="">

<div slot="col-1">

## Mengapa Memisahkan?

Dalam Kurikulum Merdeka:

* **Formatif** = progres harian (latihan, evaluasi mandiri). Hanya pantauan, **tidak** masuk rumus rapor.
* **Sumatif** = hasil resmi (LM & SAS) yang dihitung menjadi `Nilai_Rapor`.

Dulu semua kuis dipaksa ke `db_asesmen` (rapor). Kini `kategori="formatif"` dirutekan ke `db_aktivitas` (heatmap), sehingga rapor tetap bersih.

</div>

<div slot="col-2">

## Properti `kategori`

| Nilai | Sheet | Ke Rapor? |
| --- | --- | --- |
| `sumatif_lm` (default) | `db_asesmen` | Ya → `LM1..LM5` |
| `formatif` | `db_aktivitas` | Tidak (progres) |

Atur dari panel HAX (mode Guru → configure) tanpa menyentuh kode.

</div>

</grid-plate>

## Contoh Tag

### Sumatif (masuk rapor)

```html
<kuis-ledakan
  judul="Ulangan Harian LM-1"
  mode="siswa"
  kd-materi="LM-1"
  kategori="sumatif_lm"
  apps-script-url="https://script.google.com/macros/s/AKfy.../exec"
></kuis-ledakan>
```

### Formatif (hanya progres)

```html
<kuis-ledakan
  judul="Latihan Literasi Membaca"
  mode="siswa"
  kd-materi="Latihan Literasi"
  kategori="formatif"
  apps-script-url="https://script.google.com/macros/s/AKfy.../exec"
></kuis-ledakan>
```

### Lewat `<latihan-kuis>`

`<latihan-kuis>` hanya membungkus `<kuis-ledakan>`, sehingga `kategori` dan `kd-materi` diteruskan ke backend yang sama:

```html
<latihan-kuis
  judul="Latihan Soal Harian"
  kd-materi="Latihan Harian"
  kategori="formatif"
  apps-script-url="https://script.google.com/macros/s/AKfy.../exec"
></latihan-kuis>
```

## Langkah Verifikasi Guru

1. Pastikan Web App `codev6.gs` sudah di-deploy ulang (akses **Anyone**).
2. Kerjakan kuis `kategori="formatif"` → cek baris muncul di sheet `db_aktivitas` (kolom `Tipe Aktivitas` = `kuis_formatif`).
3. Pastikan **tidak** ada baris di `db_asesmen` untuk kuis tersebut.
4. Jalankan `?action=generateReport` → nilai formatif tidak muncul di `Akumulasi_Nilai_Rapor`.
5. Kirim ulang (`id_log` sama) → tidak ada baris ganda (cek kolom `ID Log`).

> Tips: gunakan `kd-materi="LM-1".."LM-5"` agar urutan rapor LM bisa ditebak (pemetaan bersifat alfabetis).

Untuk penjelasan lengkap, baca `TUTOR-KUIS-LEDAPAN-V6.md` di repo.
