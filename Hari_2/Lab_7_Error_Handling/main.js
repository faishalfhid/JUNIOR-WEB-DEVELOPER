let currentInput = 2*2;
// let currentInput = "Teks";


try {
    currentInput = eval (currentInput);
    console.log("Hasil evaluasi:", currentInput);
} catch (error) {
    console.error("Terjadi kesalahan saat evaluasi:", error.message);
}

