<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $desc = $_POST['description'];
    $price = $_POST['price'];

    $stmt = $conn->prepare("INSERT INTO Items (name, description, price) VALUES (?, ?, ?)");
    $stmt->bind_param("ssd", $name, $desc, $price);
    $stmt->execute();

    echo "<p>Item added successfully! <a href='catalogue.php'>View Catalogue</a></p>";
}
?>

<form method="POST">
    <h2>Add New Item</h2>
    Name: <input type="text" name="name" required><br>
    Description: <textarea name="description" required></textarea><br>
    Price: <input type="number" name="price" step="0.01" required><br>
    <input type="submit" value="Add Item">
</form>
