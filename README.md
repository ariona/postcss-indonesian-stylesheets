# PostCSS Indonesian Stylesheets

Plugin [PostCSS] buat nulis CSS pake bahasa Indonesia

[PostCSS]: https://github.com/postcss/postcss

## Kode CSS dalam Bahasa Indonesia
```css
.box-title{
    jenis-font: Karla, arial, sans-serif;
    ketebelan-font: tebel-banget;
    jarak-antar-huruf: 2px;
    rubah-huruf: gede-semua;
    tinggi-baris: 27px;
    bayangan-text: 0 1px 1px rgba(0,0,0,.3);
    gambar-latar: url(mukidi.jpg);
    posisi-gambar: bawah kanan;
}
```

## Hasilnya
```css
.box-title{
    font-family: Karla, arial, sans-serif;
    font-weight: bolder;
    letter-spacing: 2px;
    rubah-huruf: uppercase;
    line-height: 27px;
    text-shadow: 0 1px 1px rgba(0,0,0,.3);
    background-image: url(mukidi.jpg);
    background-position: bottom right;
}
```

## Cara Pake

Clone atau Download, simpan di folder `node_modules` dalam **project** kamu. Lalu masukkan ke plugin postCSS nya.
```js
postcss([ require('postcss-australian-stylesheets') ])
```

## Property yang sudah diterjemahin
`Ctrl+F` / `Cmd+F` aja ya buat nyari padanan katanya:

Property | Indonesia
--- | ---
background-color | warna-latar
background-image | gambar-latar
background-position | posisi-gambar
background-repeat | ulangi-gambar
background-size | ukuran-gambar
color | warna-huruf
font-size | ukuran-font
font-weight | ketebelan-font
font-style | gaya-font
font-family | jenis-font
letter-spacing | jarak-antar-huruf
line-height | tinggi-baris
text-align | ratakan-teks
text-align | dekorasi-teks
text-align | rubah-teks
float | rata
z-index | lapisan
display | mode-layout
width | panjang
height | tinggi
positition | posisi
border | garis-batas
margin | jarak-elemen
padding | jarak-content
left | kiri
right | kanan
top | atas
bottom | bawah
text-shadow | bayangan-text
box-shadow | bayangan

Value | Indonesia
--- | ---
italic | miring
underline | garis-bawah
overline | garis-atas
line-through | coret
blink | kedip-kedip
uppercase | gede-semua
lowercase | kecil-semua
capitalize | gede-awal
relative | relatif
absolute | absolut
static | statik
center | tengah
left | kiri
right | kanan
top | atas
bottom | bawah
bolder | tebel-banget
bold | tebel
lighter | tipis
auto | otomatis
solid | penuh
dashed | putus-putus
dotted | titik-titik
white | putih
black | item
gray | abu
red | merah
yellow | kuning
green | hijau
brown | coklat
