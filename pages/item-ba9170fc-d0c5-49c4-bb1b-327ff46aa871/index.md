soal latihan

📘 Cara Memasukkan Nilai ke Google Spreadsheet
----------------------------------------------

1.  Siapkan **Google Apps Script** (Web App) yang menerima `action=logActivity` dan menulis ke Spreadsheet. Salin URL-nya.
2.  Tempel URL tersebut ke atribut `apps-script-url` di bawah (atau atur lewat panel HAX: _URL Apps Script (kirim nilai)_).
3.  Siswa **login** dulu via `<quiz-user-auth>` agar nilai terikat ke Student ID (lihat kotak auth di bawah).
4.  Kartu hasil muncul di **dua jalur**: (a) siswa menjawab semua soal & submit manual, _atau_ (b) `timer-kuis` habis. Di kedua jalur, `<kuis-ledakan>` mengirim skor lalu `<latihan-kuis>` menampilkan kartu "Nilai terkirim" + skor.
5.  **Link sheet opt-in (default OFF):** tombol "Buka Spreadsheet Nilai" hanya muncul bila atribut `show-sheet-link="true"` DAN `spreadsheet-url` diisi. Aktifkan hanya untuk guru / view agregat aman, sebab siswa bisa lihat isi sheet. Di demo ini sudah diaktifkan.
6.  **Login diwajibkan (anti hilang nilai):** form login (`<quiz-user-auth>`) sudah _tertanam di dalam_ elemen ini. Tombol "Mulai" dikunci sampai siswa login (H1/H2). Bila kuis dipaksa tanpa login, kartu hasil menampilkan peringatan "Nilai belum tersimpan karena belum login" dan tidak ada baris baru di Spreadsheet (H3). Kode materi diteruskan ke `<kuis-ledakan>` lewat `kd-materi` (H4).
7.  **Edit / upload soal:** soal bisa diketik langsung lewat panel HAX (_Soal (JSON)_, inputMethod `code-editor`) atau diunggah dari file via _Upload File Soal (JSON)_ (`haxupload` → atribut `soal-file-url`). Bila `soal-file-url` berhasil di-parse, isinya _menimpa_ soal inline; bila file rusak/cosong, soal inline tetap dipakai dan pesan error tampil di atas kuis.
8.  Cek hasil di Spreadsheet lewat atribut `spreadsheet-url` (tombol "Buka Spreadsheet Nilai" di layar akhir, bila `show-sheet-link` aktif).

**URL Apps Script (contoh — ganti dengan milik Anda):**