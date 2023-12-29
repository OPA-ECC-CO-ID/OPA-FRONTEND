# Online Personal Assessment (OPA) (https://opaecc.ecc.co.id)
![Frame 7](https://github.com/IzzaWildanRidhoni/OPA-FRONTEND/assets/49296863/c7753544-7e4f-491c-90ce-b70af79913e6)

## Tentang OPA

Desain UI UX : 
https://www.figma.com/file/AOb0LJbLZtSPPzrznKsWAp/ECC-UIX-DESIGN?type=design&node-id=0-1&mode=design&t=Uh8CVmidfcD3tm6y-0

Online Personal Assessment dapat membantu menemukan potensi terpendam yang ada padamu!. OPA terdiri dari 4 test yaitu

-   Gaya Kepribadian
-   Minta Karir
-   Pemetaan Potensi
-   Kesiapan Karir

## Kebutuhan

-   PHP >= 8.2
-   Nginx webserver
-   Postgresql >= 15.0
-   OS Linux

## Konfigurasi

Untuk setingan aplikasi ada di file `.env`, salin file `.env.example` lalu ganti nama menjadi `.env` dan sesuaikan setingan aplikasi, database dll agar sesuai dengan komputermu.

## Kode format

Kode format berguna agar kode yang dikembangkan oleh setiap developer sama dan konsisten sesuai dengan PSR (PHP Style Recommendation). Untuk memulai memformat kodemu

pastikan update composer terlebih dahulu untuk memastikan bahwa aplikasi `pint` sudah terinstall di vendor. Salin file `pint.example.json` menjadi `pint.json`,

lalu ketikan perintah ini di terminal pada folder root project

Contoh:

`./vendor/bin/pint app/Console/Commands`

## Testing

Untuk menjalankan testing ketikan perintah ini

`php artisan test`

## Vite

Aplikasi opa menggunakan vite untuk bundling asset, pada mode pengembangan developer wajib menjalankan command ini agar file assets(js,css) bisa dikenali.

`npm run dev`

## Kontak Kami

Jika mengalami kendala silakan menghubungi kami di email `smartgdi@gmail.com`
