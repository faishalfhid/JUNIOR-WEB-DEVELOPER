## 📋 Persiapan

### File yang Dibutuhkan:
- `project.php` (file utama)
- `php/koneksi.php` (koneksi database)
- `php/delete.php` (untuk hapus data)

---

## 🚀 Step 1: Buka File project.php

Buka file `project.php` di text editor favorit Anda (VS Code, Sublime, dll).

---

## 🚀 Step 2: Tambahkan Koneksi Database di Bagian Atas

**Tambahkan kode ini di BARIS PALING ATAS** file `project.php`:

```php
<?php
include 'php/koneksi.php';

// Query untuk mengambil data history
$result = $conn->query("SELECT * FROM history ORDER BY waktu DESC LIMIT 5");
?>
```

**Pastikan kode PHP ini berada SEBELUM tag `<!DOCTYPE html>`**

---

## 🚀 Step 3: Tambahkan Kode History

**Tempel kode berikut** di posisi yang sudah ditentukan:

```php
    <div class="calculator-container">
    // Kalkulator
    </div>
    <div style="text-align: left; margin-top: 20px;">
        <h2>History Perhitungan</h2>

        <?php if ($result && $result->num_rows > 0): ?>
            <?php while ($row = $result->fetch_assoc()): ?>
                    <p><?=($row['hasil']) ?>
                    <a href="php/delete.php?id=<? echo $row['id'] ?>">Hapus</a></p>
            <?php endwhile; ?>
        <?php else: ?>
            <p><i>Data kosong</i></p>
        <?php endif; ?>
    </div>
```

---

## 🚀 Step 4: Verifikasi Struktur File Lengkap

**Pastikan file `project.php` Anda memiliki struktur seperti ini:**

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
    <title>Projects</title>
    <nav class="navbar">
        <div>
        <a href="index.html"><img src="Assets/Icon.png" alt="Logo" class="nav-logo" /></a>
        </div>
        <div class="nav-menu">
        <a href="index.html" class="nav-item">Home</a>
        <a href="" class="nav-item">About</a>
        <a href="project.html" class="nav-item">Projects</a>
        <a href="" class="nav-item">Contact</a>
        <button class="btn-signin">Sign in</button>
        <button class="btn-login">Register</button>
        </div>
    </nav>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="content">
    <h1>Kalkulator JS</h1>
    <p>Sebuah proyek sederhana berupa kalkulator yang dibuat menggunakan JavaScript.</p>
    <div class="project-section">
    <div class="calculator-container">
        <form action="php/save.php" method="POST" id="calcForm">
        <div class="buttons">
            <div id="display">0</div>
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
            <button type="button" class="btn-op">*</button>
            <button type="button" class="btn-op">-</button>
            <button type="button" class="btn-op">+</button>
            <button type="button" class="btn-op">/</button>
            <button type="button" class="btn-op">.</button>
            <button type="button" class="btn-clear">C</button>
            <button type="submit" class="btn-equals">=</button>

                  <!-- input tersembunyi untuk hasil -->
            <input type="hidden" name="result" id="resultInput">
        </div>
        </form>
    </div>
    <div style="text-align: left; margin-top: 20px;">
        <h2>History Perhitungan</h2>

        <?php if ($result && $result->num_rows > 0): ?>
            <?php while ($row = $result->fetch_assoc()): ?>
                    <p><?=($row['hasil']) ?>
                    <a href="php/delete.php?id=<? echo $row['id'] ?>">Hapus</a></p>
            <?php endwhile; ?>
        <?php else: ?>
            <p><i>Data kosong</i></p>
        <?php endif; ?>
    </div>
    </div>
    </div>
    
    <!-- Memanggil js -->
    <script src="script.js"></script>
</body>
<footer>
    <div class="footer-images">
    <img src="Assets/Icon.png" alt="" class="footer-logo">
    <div class="social-media-icons">
    <img src="Assets/X.png" alt="">
    <img src="Assets/IG.png" alt="">
    <img src="Assets/YT.png" alt="">
    <img src="Assets/IN.png" alt="">
    </div>
    </div>

    <div>
    <h3>Use cases</h3>
    <li>UI design</li>
    <li>UX design</li>
    <li>Wireframing</li>
    <li>Diagraming</li>
    <li>Brainstorming</li>
    <li>Online whiteboard</li>
    <li>Team collaboration</li>
    </div>

    <div>
    <h3>Explore</h3>
    <li>Design</li>
    <li>Prototyping</li>
    <li>Development features</li>
    <li>Design systems</li>
    <li>collaboration features</li>
    <li>Design process</li>
    <li>FigJam</li>
    </div>

    <div>
    <h3>Resources</h3>
    <li>Blog</li>
    <li>Best practices</li>
    <li>Colors</li>
    <li>Color wheel</li>
    <li>Support</li>
    <li>Developers</li>
    <li>Resource library</li>
    </div>
</footer>
</html>
```

---

## 🚀 Step 5: Testing

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