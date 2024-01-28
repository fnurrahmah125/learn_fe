# Next.js

## Hal yang perlu diperhatikan saat membangun aplikasi:

- User interface
- Routing
- Data fetching
- Rendering
- Integrations
- Infrastructure
- Performance
- Scalability
- Developer Experience

## Apa itu Next.js?

Next.js adalah sebuah React framework yang flexible dan menyediakan fitur-fitur untuk membuat aplikasi web dengan cepat.

React menyediakan fungsi-fungsi untuk membangun UI dan dia bersifat unopinionated yang membuat ekosistemnya sangat berkembang pesat.

Sehingga untuk membangun aplikasi React secara utuh membutuhkan effort untuk mengkonfigurasi alat dan solusi yang dibutuhkan untuk membangun aplikasi.

Next.js menyediakan tools dan configuration yang diperluka untuk React serta menyediakan struktur, fitur, dan optimasi tambahan untuk aplikasi kita.

## Bagaimana Next.js bekerja?

- Development, Next.js mengoptimalkan pengalaman developer dengan menyediakan fitur seperti TypeScript, ESLint, Fast Refresh, dan lain-lain
- Production, Next.js mengoptimalkan pengalaman end-users dengan mengubah kode agar memiliki performance yang baik
- Next.js menggunakan SWC sebagai compiler yang ditulis dengan bahasa Rust yang dapat digunakan untuk melakukan compiling, bundling, minifying, dan code splitting

**Compiling:** Proses mentransformasi kode dari satu bahasa ke dalam bahasa lain atau versi lain dari bahasa tersebut

**Minifying:** Proses menghapus formatting dan komentar yang tidak digunakan tanpa mengubah fungsionalitas kode dengan tujuan untuk meningkatkan kinerja aplikasi dengan mengurangi ukuran file

**Bundling:** Proses menggabungkan file ke dalam bundle yang dioptimalkan untuk browser, dengan tujuan mengurangi jumlah permintaan file saat pengguna mengunjungi halaman web

**Code Splitting:** Proses pemisahan bundle menjadi bagian-bagian kecil yang dibutuhkan oleh setiap entry point dengan tujuan untuk meningkatkan initial load time aplikasi dengan hanya memuat kode yang diperlukan untuk menjalankan halaman tersebut

## Beauty of Next.js?

**Build Time & Runtime**

- Build Time mengacu pada waktu dimana saat aplikasi dibuild hingga akhirnya aplikasi siap digunakan
- Runtime mengacu pada waktu saat aplikasi sudah selesai dibuild dan deploy

**Client & Server**

- Client merujuk ke browser pada perangkat pengguna yang mengirimkan request ke server yang kemudian diterjemahkan menjadi UI
- Server mengacu pada perangkat yang menyimpan kode aplikasi yang menerima permintaan dari client, melakukan komputasi, dan mengirimkan kembali respons yang sesuai

**Rendering**

Proses mengkonversi kode menjadi representasi HTML dari sebuah UI yang dapat dilakukan di client maupun di server dan dapat terjadi pada saat build time maupun runtime.

Metode Rendering:

- Server-Side Rendering & Static Site Generation (Pre-Rendering)
  - Pengambilan data eksternal dan transformasi kode menjadi representsi HTML dari sebuah UI terjadi sebelum hasilnya dikirim ke client.
- Client-Side Rendering
  - Pengembalian data eksternal dan transformasi kode menjadi representasi HTML dari sebuah UI terjadi di client (client-side)
