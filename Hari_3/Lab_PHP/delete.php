<?php
include 'koneksi.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "DELETE FROM history WHERE id = $id";

    if ($conn->query($sql) === TRUE) {
        header("Location: /tes/project.php"); // ganti sesuai dengan directory file kalian
        exit;
    } else {
        echo "Gagal menghapus data: " . $conn->error;
    }
}
$conn->close();
?>