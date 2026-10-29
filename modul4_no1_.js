// =========================================================
// 1. Pesan Selamat Datang saat Halaman Pertama Kali Dimuat
// =========================================================
// Menambahkan event listener 'load' pada window yang akan berjalan setelah seluruh elemen halaman siap
window.addEventListener("load", function () {
    // Menampilkan popup peringatan selamat datang
    alert("Selamat datang di Blog Teknologi!");
});

// =========================================================
// 2. Animasi Memperbesar Ukuran Teks pada Hover Menu Navigasi
// =========================================================
// Mengambil semua elemen <a> di dalam <nav>
document.querySelectorAll("nav a").forEach(function (link) {
    // Event ketika kursor mouse diarahkan ke dalam elemen menu
    link.addEventListener("mouseover", function () {
        // Memperbesar ukuran font menjadi 1.2em
        link.style.fontSize = "1.2em";
    });

    // Event ketika kursor mouse meninggalkan elemen menu
    link.addEventListener("mouseout", function () {
        // Mengembalikan ukuran font ke semula (1em)
        link.style.fontSize = "1em";
    });
});

// =========================================================
// 3. Validasi Form Kontak & Navigasi ke Halaman Baru
// =========================================================
// Mengambil elemen form berdasarkan ID "formKontak" dan mendengarkan event 'submit'
document.getElementById("formKontak").addEventListener("submit", function (e) {
    // Mencegah tindakan default form (mencegah halaman memuat ulang/refresh saat submit)
    e.preventDefault();

    // Penanda status validasi (true jika semua input terisi)
    let valid = true;

    // Array memuat ID dari tiap field input yang perlu diperiksa
    ["nama", "email", "pesan"].forEach(function (id) {
        // Mengambil nilai input dan menghapus spasi di awal/akhir menggunakan trim()
        const isi = document.getElementById(id).value.trim();
        
        // Mengambil elemen tempat menampilkan pesan kesalahan (errNama, errEmail, errPesan)
        const err = document.getElementById("err" + id.charAt(0).toUpperCase() + id.slice(1));

        // Pengecekan apakah nilai input kosong
        if (isi === "") {
            // Tampilkan pesan kesalahan jika input belum diisi
            err.textContent = id.charAt(0).toUpperCase() + id.slice(1) + " tidak boleh kosong.";
            valid = false; // Ubah penanda validasi menjadi false
        } else {
            // Kosongkan pesan kesalahan jika input sudah terisi
            err.textContent = "";
        }
    });

    // Jika seluruh field input valid (tidak ada yang kosong)
    if (valid) {
        // Ambil nilai input dari kolom form
        const valNama = document.getElementById("nama").value;
        const valEmail = document.getElementById("email").value;
        const valPesan = document.getElementById("pesan").value;

        // Simpan data sementara ke dalam browser (localStorage)
        localStorage.setItem("nama", valNama);
        localStorage.setItem("email", valEmail);
        localStorage.setItem("pesan", valPesan);

        // Arahkan (redirect) pengguna secara otomatis ke halaman baru (hasil.html)
        window.location.href = "modul4_no1_hasil_.html";
    }
});