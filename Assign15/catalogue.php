<?php
session_start();
include('db.php');

if (!isset($_SESSION['user'])) {
    echo json_encode(['status' => 'error', 'message' => 'Not logged in']);
    exit();
}

$result = $conn->query("SELECT * FROM Items");
$items = [];
while ($row = $result->fetch_assoc()) {
    $items[] = $row;
}

echo json_encode(['status' => 'success', 'items' => $items]);
?>
