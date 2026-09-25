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

<latihan-kuis apps-script-url="https://script.google.com/macros/s/AKfycbwDq12BtYxeokfbeCuDnDo-50z0ZL-XAMlXu4fMyZbbV_el4-B-lMbMWznocusKk63D/exec" duration="700" timerautostart="" mode="siswa" allowretake="" soal-file-url="./files/2026-stimulus2b-faseE.json" kategori="formatif" kd-materi="Latihan LM2" hide-answers="" allow-backward-nav="" show-question-nav="" judul-materi="Materi Pembelajaran" teks-materi="Baca materi di bawah ini dengan saksama sebelum mengerjakan kuis. Waktu pengerjaan kuis dibatasi oleh timer; saat waktu habis, kuis akan dikunci dan nilai otomatis terkirim." materi-file="" cover-image="" judul-kuis="Evaluasi Kuis Interaktif" student-id="STD-65108010" student-name="Abi Andy" student-nis="123" student-absen="" student-kelas="XI-1" pesan-waktu-habis="⏰ Waktu habis! Kuis dikunci &amp; dinilai otomatis." pesan-nilai-terkirim="🎉 Selamat! Nilai Anda sudah terkirim ke spreadsheet." label-mulai="▶️ Mulai" allow-retake="" max-retake="0" hide-pause-restart="" question-delay="1800" review-answers="" timer-autostart="" kkm="75" tab-switch-threshold="3" questions="[{&quot;type&quot;:&quot;mc&quot;,&quot;question&quot;:&quot;Apa fungsi utama dari pustaka requests dalam proses web scraping menggunakan Python?&quot;,&quot;hint&quot;:&quot;Fokus pada peran pustaka ini dalam berinteraksi dengan server web untuk mengambil halaman.&quot;,&quot;choices&quot;:[&quot;Menguraikan kode HTML menjadi struktur pohon dokumen&quot;,&quot;Mengirimkan permintaan HTTP untuk mengunduh halaman web&quot;,&quot;Menyimpan data hasil scraping ke dalam database relasional&quot;,&quot;Membuat visualisasi grafik dari data hasil scraping&quot;,&quot;Memblokir akses dari situs web yang tidak diinginkan&quot;],&quot;correctIndex&quot;:1},{&quot;type&quot;:&quot;mc&quot;,&quot;question&quot;:&quot;Dalam struktur HTML, atribut apa yang paling tepat digunakan untuk mengidentifikasi satu elemen unik di seluruh halaman?&quot;,&quot;hint&quot;:&quot;Atribut ini dirancang secara khusus untuk menjadi pengenal tunggal dan unik bagi sebuah elemen.&quot;,&quot;choices&quot;:[&quot;Tag&quot;,&quot;Class&quot;,&quot;ID&quot;,&quot;Style&quot;,&quot;Href&quot;],&quot;correctIndex&quot;:2},{&quot;type&quot;:&quot;mc&quot;,&quot;question&quot;:&quot;Metode BeautifulSoup manakah yang digunakan untuk menemukan semua instance dari sebuah tag tertentu di halaman web dan mengembalikannya sebagai daftar (list)?&quot;,&quot;hint&quot;:&quot;Metode ini mencari seluruh kriteria yang cocok, bukan hanya hasil pertama.&quot;,&quot;choices&quot;:[&quot;find()&quot;,&quot;get_text()&quot;,&quot;select_one()&quot;,&quot;find_all()&quot;,&quot;prettify()&quot;],&quot;correctIndex&quot;:3},{&quot;type&quot;:&quot;mc&quot;,&quot;question&quot;:&quot;Seorang siswa ingin mengambil data harga barang dari sebuah situs e-commerce untuk tugas sekolah. Tindakan berikut yang merupakan praktik web scraping yang baik dan etis adalah...\n(1) Memeriksa file robots.txt situs tersebut sebelum melakukan scraping.\n(2) Mengirimkan ribuan permintaan per detik untuk mempercepat pengambilan data.\n(3) Memberikan jeda waktu (delay) antar permintaan agar tidak membebani server.\n(4) Mengambil data pribadi pengguna seperti nomor telepon dan alamat rumah.&quot;,&quot;hint&quot;:&quot;Praktik etis selalu menghormati aturan pemilik situs dan menjaga agar server tidak terbebankan.&quot;,&quot;choices&quot;:[&quot;(1) dan (2)&quot;,&quot;(1) dan (3)&quot;,&quot;(2) dan (4)&quot;,&quot;(1), (2), dan (3)&quot;,&quot;(2), (3), dan (4)&quot;],&quot;correctIndex&quot;:1},{&quot;type&quot;:&quot;mc&quot;,&quot;question&quot;:&quot;Perhatikan kode HTML berikut:\n<div class=\&quot;produk\&quot;><h2 class=\&quot;nama\&quot;>Laptop</h2><p class=\&quot;harga\&quot;>Rp5.000.000</p></div>\n\nPernyataan yang benar mengenai cara mengambil data \&quot;Rp5.000.000\&quot; menggunakan CSS Selector di BeautifulSoup adalah...\n(1) Dapat menggunakan selector .produk .harga\n(2) Dapat menggunakan selector div p\n(3) Harus menggunakan selector #harga karena ini adalah data penting\n(4) Tidak bisa diambil karena data berada di dalam tag <p>&quot;,&quot;hint&quot;:&quot;Cermati hierarki kelas dan tag tempat teks harga tersebut berada.&quot;,&quot;choices&quot;:[&quot;(1) dan (2)&quot;,&quot;(1) dan (3)&quot;,&quot;(2) dan (4)&quot;,&quot;(1), (2), dan (3)&quot;,&quot;(3) dan (4)&quot;],&quot;correctIndex&quot;:0},{&quot;type&quot;:&quot;pgk&quot;,&quot;question&quot;:&quot;Tentukan keabsahan dari pernyataan mengenai keterbukaan format data untuk web scraping berikut!&quot;,&quot;hint&quot;:&quot;Web scraping paling berguna saat data TIDAK tersedia secara terstruktur.&quot;,&quot;statements&quot;:[{&quot;text&quot;:&quot;Web scraping hanya bisa dan berguna dilakukan pada situs web yang sudah menyediakan data dalam format CSV atau API.&quot;,&quot;answer&quot;:false}]},{&quot;type&quot;:&quot;pgk&quot;,&quot;question&quot;:&quot;Tentukan keabsahan dari pernyataan mengenai penggunaan metode pengambil teks pada BeautifulSoup berikut!&quot;,&quot;hint&quot;:&quot;Pahami fungsi metode get_text() terhadap tag HTML pendukung di sekitarnya.&quot;,&quot;statements&quot;:[{&quot;text&quot;:&quot;Metode get_text() pada BeautifulSoup digunakan untuk mengambil teks murni yang berada di dalam tag HTML, tanpa menyertakan kode tag HTML itu sendiri.&quot;,&quot;answer&quot;:true}]},{&quot;type&quot;:&quot;matching&quot;,&quot;question&quot;:&quot;Pasangkan istilah dasar seputar web scraping di lajur kiri dengan deskripsinya yang tepat di lajur kanan!&quot;,&quot;hint&quot;:&quot;Cermati bahasa penyusun web, pustaka parser Python, serta metode pemilih gaya.&quot;,&quot;leftItems&quot;:[&quot;HTML&quot;,&quot;BeautifulSoup&quot;,&quot;CSS Selector&quot;],&quot;rightItems&quot;:[&quot;Bahasa markup standar untuk membuat halaman web.&quot;,&quot;Pustaka Python untuk mengurai dan menavigasi dokumen HTML.&quot;,&quot;Permintaan standar untuk mengambil data dari server.&quot;,&quot;Metode untuk mencari elemen menggunakan pola gaya CSS.&quot;],&quot;correctPairs&quot;:{&quot;0&quot;:0,&quot;1&quot;:1,&quot;2&quot;:3}}]" _attempt-ke="0" _soal-file-url-cache="./files/2026-stimulus2b-faseE.json" _remidi-soal="[]" _tab-switch-count="0" _visibility-change-count="0" _window-blur-count="0" _window-focus-count="0" _warning-count="0"><button id="btn-mulai" class="btn-mulai">▶️ Mulai Kuis</button></latihan-kuis>