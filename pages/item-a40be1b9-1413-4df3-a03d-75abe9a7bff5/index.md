Panduan Lengkap & Kode Web Scraping Python
------------------------------------------

(Berdasarkan Tutorial[Dataquest](https://www.dataquest.io/blog/web-scraping-tutorial-python/))

Berikut adalah materi teknis lengkap berisi kode, langkah-langkah, dan rekomendasi praktik terbaik untuk melakukan web scraping menggunakan Python, yang diadaptasi dari tutorial resmi Dataquest untuk tingkat SMA Kelas X.

Persiapan Lingkungan (Langkah 0)
--------------------------------

Sebelum menjalankan kode, pastikan Python sudah terinstal. Buka terminal atau Command Prompt, lalu instal pustaka (library) yang diperlukan menggunakan perintah berikut:

*   **requests**: Untuk mengunduh halaman web.
*   **beautifulsoup4**: Untuk mengurai (parse) dan mengekstrak data dari HTML.
*   **pandas**: Untuk menyusun data hasil scraping ke dalam bentuk tabel yang rapi.

* * *

Langkah 1: Mengunduh Halaman Web
--------------------------------

Langkah pertama adalah mengirimkan permintaan (request) ke server untuk mendapatkan kode sumber HTML dari halaman target.

* * *

Langkah 2: Mengurai HTML dengan BeautifulSoup
---------------------------------------------

Setelah HTML diunduh, kita perlu mengubahnya menjadi struktur yang bisa dibaca dan dicari oleh Python.

* * *

Langkah 3: Mengekstrak Data Spesifik
------------------------------------

Kita dapat mencari elemen berdasarkan tag, kelas (class), ID, atau menggunakan CSS Selector.

* * *

Langkah 4: Studi Kasus Lengkap (Mengumpulkan Data Cuaca)
--------------------------------------------------------

Berikut adalah kode lengkap untuk mengekstrak data prakiraan cuaca dari situs National Weather Service (NWS), menggabungkan teknik `find`, `select`, dan list comprehension.

* * *

Langkah 5: Menyusun Data ke dalam Tabel (Pandas DataFrame)
----------------------------------------------------------

Data yang sudah diekstrak dalam bentuk list (daftar) akan jauh lebih berguna jika diubah menjadi tabel.

* * *

Rekomendasi & Etika Web Scraping (Wajib Dibaca)
-----------------------------------------------

Sebagai pelajar informatika, melakukan web scraping harus disertai dengan tanggung jawab dan etika digital yang baik. Ikuti rekomendasi berikut:

1.  **Periksa file `robots.txt`** : Selalu cek `https://namadomain.com/robots.txt` sebelum melakukan scraping. File ini memberi tahu bagian situs mana yang boleh atau tidak boleh diakses oleh bot.
2.  **Gunakan Jeda Waktu (Delay)**: Jangan mengirimkan ratusan permintaan per detik. Gunakan `import time` dan `time.sleep(2)` di antara permintaan untuk menghindari pembebanan berlebih pada server target.
3.  **Sertakan User-Agent yang Jelas**: Server sering memblokir permintaan yang tidak memiliki identitas browser. Menggunakan header `User-Agent` yang standar adalah praktik baik, dan lebih baik lagi jika Anda menyertakan informasi kontak di header jika melakukan scraping skala besar.
4.  **Hormati Data Pribadi**: Jangan pernah melakukan scraping untuk mengambil data pribadi (Nama, NIK, Nomor Telepon, Alamat) tanpa izin eksplisit. Ini melanggar privasi dan hukum (seperti UU PDP di Indonesia).
5.  **Siapkan Penanganan Error**: Situs web bisa berubah struktur HTML-nya atau sedang down. Gunakan blok `try...except` dalam kode Python Anda agar program tidak langsung crash saat terjadi kesalahan.
6.  **Gunakan untuk Tujuan Edukasi atau Riset**: Pastikan penggunaan data hasil scraping sesuai dengan ketentuan layanan (Terms of Service) situs web tersebut dan tidak untuk dikomersialkan secara ilegal.

* * *

Tips Troubleshooting untuk Pemula
---------------------------------

*   **Error `403 Forbidden`** : Server memblokir Anda. Solusi: Tambahkan header `User-Agent` seperti pada Langkah 4.
*   **Error `404 Not Found`** : URL yang Anda masukkan salah atau halaman telah dipindahkan. Periksa kembali URL di browser.
*   **Hasil scraping kosong (`[]`)** : Struktur HTML situs target mungkin telah berubah, atau data dimuat secara dinamis menggunakan JavaScript (untuk kasus ini, BeautifulSoup saja tidak cukup, Anda mungkin perlu mempelajari `Selenium` atau `Playwright`).
*   **Masalah Encoding**: Jika muncul karakter aneh, tambahkan `encoding="utf-8"` saat menyimpan ke CSV atau dekode response dengan `response.encoding = 'utf-8'`.

<latihan-kuis apps-script-url="https://script.google.com/macros/s/XXXXXX/exec" duration="60" timerautostart="" mode="siswa" allowretake="false" questions="[{&quot;question&quot;:&quot;2+2=?&quot;,&quot;choices&quot;:[&quot;3&quot;,&quot;4&quot;,&quot;5&quot;],&quot;correctIndex&quot;:1,&quot;type&quot;:&quot;mc&quot;},{&quot;question&quot;:&quot;Bukti matahari adalah?&quot;,&quot;choices&quot;:[&quot;Bulan&quot;,&quot;Matahari&quot;,&quot;Bintang&quot;],&quot;correctIndex&quot;:1,&quot;type&quot;:&quot;mc&quot;}]" judul-materi="Materi Pembelajaran" teks-materi="Baca materi di bawah ini dengan saksama sebelum mengerjakan kuis. Waktu pengerjaan kuis dibatasi oleh timer; saat waktu habis, kuis akan dikunci dan nilai otomatis terkirim." materi-file="" cover-image="" judul-kuis="Evaluasi Kuis Interaktif" student-id="STD-65108010" student-name="Abi Andy" student-nis="123" student-absen="" student-kelas="XI-1" kd-materi="" pesan-waktu-habis="⏰ Waktu habis! Kuis dikunci &amp; dinilai otomatis." pesan-nilai-terkirim="🎉 Selamat! Nilai Anda sudah terkirim ke spreadsheet." label-mulai="▶️ Mulai" allow-retake="" max-retake="0" hide-pause-restart="" kategori="sumatif_lm" show-question-nav="" question-delay="1800" review-answers="" timer-autostart="" kkm="75" tab-switch-threshold="3" _attempt-ke="0" _remidi-soal="[]" _tab-switch-count="0" _visibility-change-count="2" _window-blur-count="0" _window-focus-count="0" _warning-count="0"><button id="btn-mulai" class="btn-mulai">▶️ Mulai Kuis</button></latihan-kuis>