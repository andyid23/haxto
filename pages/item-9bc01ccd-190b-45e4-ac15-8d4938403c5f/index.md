🎯 Elemen Latihan Kuis (Mode Latihan)
-------------------------------------

Konfigurasi: `duration="0"` + `hide-pause-restart` + `remidi-mode` + `remidi-soal-url` + `kkm="75"`

🔍 Cek di Spreadsheet
---------------------

Di sheet `[SHEET_KUIS_SESSION]`, cek kolom:

*   **Catatan**: `"selesai"`, `"selesai (remidi)"`, `"selesai (sudah-remidi)"`
*   **Session Token**: UUID unik per attempt
*   **Percobaan Ke**: 1 (awal), 2 (setelah remidi)
*   **Skor**: nilai terbaru (replace, bukan nambah)

Di sheet `logActivity`, cek tipe log:

*   **selesai**: ada field `remidi: true/false` + `percobaanKe`
*   **curang\_tab\_switch**: muncul setelah 3x tab switch
*   **force\_choice\_dialog**: log saat dialog 3x muncul

⚠️ Catatan untuk Backend (codev6.gs)
------------------------------------

Frontend mengirim kolom baru di `logQuizSession`:

*   `catatan` — string info (selesai/curang/remidi/dll)
*   `sessionToken` — UUID identifikasi attempt
*   `percobaanKe` — attempt number (1, 2, 3, ...)
*   `id_log` — UUID untuk idempotensi

Backend perlu:

1.  Tambah kolom **Catatan** di sheet (sudah ada di schema)
2.  Tambah action `updateQuizSession` yang UPDATE row by sessionToken (bukan insert)
3.  Update schema sheet untuk support semua kolom baru

Mohon kerjakan Tes Latihan