// Ambil elemen input pencarian dari HTML
const inputCari = document.getElementById('cari-produk');

// 2. Deteksi ketikan tombol di dalam kotak pencarian
inputCari.addEventListener('keydown', function(event) {
    
    // 3. Jika tombol yang ditekan adalah 'Enter'
    if (event.key === 'Enter') {
        event.preventDefault(); // Mencegah form refresh otomatis
        
        // 4.masuk kehalaman koleksi
        window.location.href = 'koleksi.html';
    }
});