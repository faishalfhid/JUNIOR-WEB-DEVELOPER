<?php
include 'koneksi.php';


if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $hasil = $_POST['result'] ?? '';

    if (!empty($hasil) || $hasil === '0') {
        $sql = "INSERT INTO history (hasil) VALUES ('$hasil')";
        if ($conn->query($sql) === TRUE) {
            // echo "Hasil berhasil disimpan.";
            header("Location: /tes/project.php"); // ganti sesuai dengan directory file kalian
        } else {
            echo "Error: ";
        }
    } else {
        echo "Hasil kosong, tidak disimpan.";
    }
}
$conn->close();
?>