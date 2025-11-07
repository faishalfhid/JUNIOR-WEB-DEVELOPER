## 📋 Persiapan

### File yang Dibutuhkan:
- `index.php` (file utama)
- `php/koneksi.php` (koneksi database)
- `php/delete.php` (untuk hapus data)

---

## 🚀 Step 1: Buka File index.php

Buka file `index.php` di text editor favorit Anda (VS Code, Sublime, dll).

---

## 🚀 Step 2: Tambahkan Koneksi Database di Bagian Atas

**Tambahkan kode ini di BARIS PALING ATAS** file `index.php`:

```php
<?php
include 'php/koneksi.php';

// Query untuk mengambil data history
$result = $conn->query("SELECT * FROM history ORDER BY waktu DESC LIMIT 5");
?>
```

**Pastikan kode PHP ini berada SEBELUM tag `<!DOCTYPE html>`**

---

## 🚀 Step 3: Cari Posisi untuk Menampilkan History

Cari bagian dalam `index.php` di mana Anda ingin menampilkan history. Biasanya setelah kalkulator:

```html
    </div> <!-- Tutup calculator-container -->
    
    <!-- TEMPAT UNTUK MENAMBAHKAN HISTORY -->
</div>
```

---

## 🚀 Step 4: Tambahkan Kode History

**Tempel kode berikut** di posisi yang sudah ditentukan:

```php
<div style="text-align: left; margin-top: 20px; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h2>📊 History Perhitungan</h2>

    <?php if ($result && $result->num_rows > 0): ?>
        <div style="max-height: 200px; overflow-y: auto;">
            <?php while ($row = $result->fetch_assoc()): ?>
                <div style="padding: 8px; margin: 5px 0; background: white; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
                    <span><?= htmlspecialchars($row['hasil']) ?></span>
                    <a href="php/delete.php?id=<?= $row['id'] ?>" 
                       style="color: red; text-decoration: none; padding: 4px 8px; background: #ffe6e6; border-radius: 4px;"
                       onclick="return confirm('Yakin hapus data ini?')">🗑️ Hapus</a>
                </div>
            <?php endwhile; ?>
        </div>
    <?php else: ?>
        <p style="color: #666; font-style: italic;">📝 Belum ada data perhitungan</p>
    <?php endif; ?>
</div>
```

---

## 🚀 Step 5: Verifikasi Struktur File Lengkap

**Pastikan file `index.php` Anda memiliki struktur seperti ini:**

```php
<?php
include 'php/koneksi.php';
$result = $conn->query("SELECT * FROM history ORDER BY waktu DESC LIMIT 5");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator dengan History</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="navbar">
        <!-- Navigation content -->
    </nav>

    <div class="content">
        <h1>Kalkulator JS</h1>
        
        <!-- Kalkulator Container -->
        <div class="calculator-container">
            <form action="php/save.php" method="POST" id="calcForm">
                <div class="buttons">
                    <div id="display">0</div>
                    <!-- Tombol-tombol kalkulator -->
                    <input type="hidden" name="result" id="resultInput">
                </div>
            </form>
        </div>

        <!-- HISTORY SECTION YANG BARU DITAMBAHKAN -->
        <div style="text-align: left; margin-top: 20px; padding: 20px; background: #f9f9f9; border-radius: 8px;">
            <h2>📊 History Perhitungan</h2>
            <?php if ($result && $result->num_rows > 0): ?>
                <!-- Data history akan ditampilkan di sini -->
            <?php else: ?>
                <p style="color: #666; font-style: italic;">📝 Belum ada data perhitungan</p>
            <?php endif; ?>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

---

## 🚀 Step 6: Testing

### Test 1: Simpan Data
1. **Buka browser** → `http://localhost/project_anda`
2. **Gunakan kalkulator** → Contoh: `5 + 3 =`
3. **Klik tombol =** → Data otomatis tersimpan

### Test 2: Lihat History
1. **Refresh halaman** → History akan muncul
2. **Data terbaru** akan tampil di paling atas

### Test 3: Hapus Data
1. **Klik tombol "Hapus"** di samping data
2. **Konfirmasi** → Klik "OK"
3. **Data hilang** → Halaman otomatis refresh

---