## 📋 Persiapan Sebelum Memulai

### File yang Harus Sudah Ada:
- `php/koneksi.php` (koneksi database)
- `php/save.php` (proses penyimpanan)
- Database `kalkulator_db` dengan tabel `history`

---

## 🚀 STEP 1: Setup Struktur Dasar PHP + HTML

### Buka file `project.php` dan tambahkan di BARIS PALING ATAS:

```php
<?php
include 'php/koneksi.php';  // ← HARUS DITAMBAHKAN DI BARIS PERTAMA
?>
```

**Pastikan struktur file seperti ini:**
```php
<?php
include 'php/koneksi.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator dengan Database</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Konten kita akan ditambahkan di sini -->
</body>
</html>
```

---

## 🚀 STEP 2: Buat Form Kalkulator

### Di dalam tag `<body>`, tambahkan kode form berikut:

```php
<div class="calculator-container">
    <form action="php/save.php" method="POST" id="calcForm">
        <div class="buttons">
            <!-- Display Kalkulator -->
            <div id="display">0</div>
            
            <!-- Tombol-tombol Angka -->
            <button type="button" class="btn-num">9</button>
            <button type="button" class="btn-num">8</button>
            <button type="button" class="btn-num">7</button>
            <button type="button" class="btn-num">6</button>
            <button type="button" class="btn-num">5</button>
            <button type="button" class="btn-num">4</button>
            <button type="button" class="btn-num">3</button>
            <button type="button" class="btn-num">2</button>
            <button type="button" class="btn-num">1</button>
            <button type="button" class="btn-num">0</button>
            
            <!-- Tombol Operator -->
            <button type="button" class="btn-op">*</button>
            <button type="button" class="btn-op">-</button>
            <button type="button" class="btn-op">+</button>
            <button type="button" class="btn-op">/</button>
            <button type="button" class="btn-op">.</button>
            
            <!-- Tombol Fungsi -->
            <button type="button" class="btn-clear">C</button>
            <button type="submit" class="btn-equals">=</button>
            
            <!-- INPUT TERSEMBUNYI UNTUK HASIL -->
            <input type="hidden" name="result" id="resultInput">
        </div>
    </form>
</div>
```

---

## 🚀 STEP 3: Penjelasan Setting Form

### Atribut Form yang PENTING:
```php
<form action="php/save.php" method="POST" id="calcForm">
```

- **`action="php/save.php"`** = Data akan dikirim ke file ini
- **`method="POST"`** = Data dikirim secara tersembunyi (aman)
- **`id="calcForm"`** = ID untuk diakses JavaScript

### Input Tersembunyi:
```php
<input type="hidden" name="result" id="resultInput">
```

- **`type="hidden"`** = Tidak terlihat user
- **`name="result"`** = Nama variabel untuk PHP (`$_POST['result']`)
- **`id="resultInput"`** = ID untuk JavaScript

---

## 🚀 STEP 4: Implementasi JavaScript

### Buat file `script.js` atau tambahkan di bagian bawah `project.php`:

```javascript
// Ambil element yang dibutuhkan
const resultInput = document.getElementById("resultInput");
const form = document.getElementById("calcForm");


// Tambahkan event listener untuk semua tombol
document.querySelectorAll('.btn-num, .btn-op, .btn-clear, .btn-equals').forEach(button => {
    button.addEventListener('click', function() {
        const value = this.textContent;
        
        if (value === "C") {
            // Default
        } else if (value === "=") {
            try {
                currentInput = eval(currentInput);
                display.textContent = currentInput;
                resultInput.value = currentInput;
                console.log("Mengirim hasil:", resultInput.value); // DEBUG
                form.submit();
                
            } catch (error) {
                display.textContent = "Error";
            }
            
        } else {
            // Default
        }
    });
});
```

---


## 🚀 STEP 5: Testing Lengkap

### Test 1: Kalkulator Normal
1. **Buka** `http://localhost/project_anda`
2. **Klik** `5 + 3`
3. **Display menunjukkan** `5+3`

### Test 2: Simpan ke Database
1. **Klik tombol** `=`
2. **Display berubah** menjadi `8`
3. **Form otomatis submit** ke `save.php`
4. **Data tersimpan** di database

### Test 3: Cek Database
1. **Buka phpMyAdmin**
2. **Buka tabel** `history`
3. **Lihat data** baru dengan hasil `8`

---