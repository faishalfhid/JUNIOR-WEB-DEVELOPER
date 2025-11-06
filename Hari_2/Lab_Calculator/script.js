// Ambil elemen tampilan dari HTML
const display = document.getElementById("_____"); // TODO: isi id-nya

// Ambil semua tombol dari container
const buttons = document.querySelectorAll("____"); // TODO: isi selector-nya

let currentInput = ""; // Menyimpan input dari pengguna

// Loop setiap tombol
buttons.forEach(button => {
  button.addEventListener("____", () => { // TODO: isi jenis event
    const value = button.____; // TODO: ambil teks dari tombol

    if (value === "C") {
      currentInput = "";
      display.textContent = "____"; // TODO: tampilkan nilai awal
    } else if (value === "=") {
      try {
        currentInput = ____ (currentInput); // TODO: fungsi untuk evaluasi ekspresi
        display.textContent = currentInput;
      } catch {
        display.textContent = "____"; // TODO: pesan jika error
      }
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});
