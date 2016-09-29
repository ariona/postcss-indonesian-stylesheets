var postcss = require('postcss');

module.exports = postcss.plugin('postcss-indonesian', function() {
    return function(css) {

        css.walkDecls(function transformDecl(decl) {
            
            //- Background
            decl.prop = decl.prop.replace('warna-latar', 'background-color');
            decl.prop = decl.prop.replace('gambar-latar', 'background-image');
            decl.prop = decl.prop.replace('posisi-gambar', 'background-position');
            decl.prop = decl.prop.replace('ulangi-gambar', 'background-repeat');
            decl.prop = decl.prop.replace('ukuran-gambar', 'background-size');
            
            //- Teks
            decl.prop = decl.prop.replace('warna-huruf', 'color');
            decl.prop = decl.prop.replace('ukuran-font', 'font-size');
            decl.prop = decl.prop.replace('ketebelan-font', 'font-weight');
            decl.prop = decl.prop.replace('gaya-font', 'font-style');
            decl.prop = decl.prop.replace('jenis-font', 'font-family');
            decl.prop = decl.prop.replace('jarak-antar-huruf', 'letter-spacing');
            decl.prop = decl.prop.replace('tinggi-baris', 'line-height');
            decl.prop = decl.prop.replace('ratakan-teks', 'text-align');
            decl.prop = decl.prop.replace('dekorasi-teks', 'text-align');
            decl.prop = decl.prop.replace('rubah-teks', 'text-align');

            //- Box-Model
            decl.prop = decl.prop.replace('rata', 'float');
            decl.prop = decl.prop.replace('lapisan', 'z-index');
            decl.prop = decl.prop.replace('mode-layout', 'display');
            decl.prop = decl.prop.replace('panjang', 'width');
            decl.prop = decl.prop.replace('tinggi', 'height');
            decl.prop = decl.prop.replace('posisi', 'positition');
            decl.prop = decl.prop.replace('garis-batas', 'border');
            decl.prop = decl.prop.replace('jarak-elemen', 'margin');
            decl.prop = decl.prop.replace('jarak-content', 'padding');
            decl.prop = decl.prop.replace('kiri', 'left');
            decl.prop = decl.prop.replace('kanan', 'right');
            decl.prop = decl.prop.replace('atas', 'top');
            decl.prop = decl.prop.replace('bawah', 'bottom');

            //- Decoration
            decl.prop = decl.prop.replace('bayangan-text', 'text-shadow');
            decl.prop = decl.prop.replace('bayangan', 'box-shadow');

            //- CSS Values Section
            
            //- text-decoration
            decl.value = decl.value.replace('miring', 'italic');
            decl.value = decl.value.replace('garis-bawah', 'underline');
            decl.value = decl.value.replace('garis-atas', 'overline');
            decl.value = decl.value.replace('coret', 'line-through');
            decl.value = decl.value.replace('kedip-kedip', 'blink');

            //- Text Transform
            decl.value = decl.value.replace('gede-semua', 'uppercase');
            decl.value = decl.value.replace('kecil-semua', 'lowercase');
            decl.value = decl.value.replace('gede-awal', 'capitalize');

            //-position value
            decl.value = decl.value.replace('relatif', 'relative');
            decl.value = decl.value.replace('absolut', 'absolute');
            decl.value = decl.value.replace('statik', 'static');

            decl.value = decl.value.replace('tengah', 'center');
            decl.value = decl.value.replace('kiri', 'left');
            decl.value = decl.value.replace('kanan', 'right');
            decl.value = decl.value.replace('atas', 'top');
            decl.value = decl.value.replace('bawah', 'bottom');

            //- Font-weight
            decl.value = decl.value.replace('tebel-banget', 'bolder');
            decl.value = decl.value.replace('tebel', 'bold');
            decl.value = decl.value.replace('tipis', 'lighter');

            decl.value = decl.value.replace('otomatis', 'auto');

            //- Border-style
            decl.value = decl.value.replace('penuh', 'solid');
            decl.value = decl.value.replace('putus-putus', 'dashed');
            decl.value = decl.value.replace('titik-titik', 'dotted');

            //- Warna
            decl.value = decl.value.replace('putih', 'white');
            decl.value = decl.value.replace('item', 'black');
            decl.value = decl.value.replace('abu', 'gray');
            decl.value = decl.value.replace('merah', 'red');
            decl.value = decl.value.replace('kuning', 'yellow');
            decl.value = decl.value.replace('hijau', 'green');
            decl.value = decl.value.replace('coklat', 'brown');

            //- important
            if (decl.value.indexOf('!paksain') >= 0) {
                decl.value = decl.value.replace(/\s*!paksain\s*/, '');
                decl.important = true;
            }
        });

    };
});
