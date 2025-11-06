const mahasiswa = {
    nama: "Faishal",
    jurusan: "Informatika",
    angkatan: 2025
};

for (const key in mahasiswa) {
    console.log(key + ": " + mahasiswa[key]);
}