console.log("=== Lab Variabel JavaScript ===");

// --- VAR ---
var nama = "Faishal";
console.log("var nama =", nama);

// var bisa dideklarasi ulang dan nilainya bisa diubah
var nama = "Fariz";
console.log("Setelah diubah:", nama);

// --- LET ---
let umur = 24;
console.log("\nlet umur =", umur);

// let tidak bisa dideklarasi ulang di scope yang sama
umur = 25; // ✅ boleh diubah nilainya
console.log("Setelah diubah:", umur);

// --- CONST ---
const jurusan = "Teknik Informatika";
console.log("\nconst jurusan =", jurusan);

// jurusan = "Sistem Informasi"; // ❌ akan error: Assignment to constant variable

// --- Tipe data variabel ---
let angka = 10;
let teks = "Halo Dunia";
let status = true;
let kosong = null;
let tidakDidefinisikan;

console.log("\n=== Tipe Data ===");
console.log("angka:", angka, "→", typeof angka);
console.log("teks:", teks, "→", typeof teks);
console.log("status:", status, "→", typeof status);
console.log("kosong:", kosong, "→", typeof kosong);
console.log("tidakDidefinisikan:", tidakDidefinisikan, "→", typeof tidakDidefinisikan);