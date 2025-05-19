<?php

require_once "../config/db.php";


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$data = json_decode(file_get_contents("php://input"), true);


if (!isset($data['name']) || !isset($data['email']) || !isset($data['units'])) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid input"]);
    exit;
}

$name = $data['name'];
$email = $data['email'];
$units = (int)$data['units'];


function calculateBill($units) {
    if ($units <= 50) return $units * 3.50;
    elseif ($units <= 150) return (50 * 3.5) + (($units - 50) * 4.00);
    elseif ($units <= 250) return (50 * 3.5) + (100 * 4.0) + (($units - 150) * 5.20);
    else return (50 * 3.5) + (100 * 4.0) + (100 * 5.2) + (($units - 250) * 6.50);
}

$amount = calculateBill($units);


$insertConsumer = $conn->prepare("INSERT INTO consumer (name, email) VALUES (?, ?)");
$insertConsumer->bind_param("ss", $name, $email);

if ($insertConsumer->execute()) {
    $consumer_id = $insertConsumer->insert_id;


    $insertBilling = $conn->prepare("INSERT INTO billing (consumer_id, units, amount) VALUES (?, ?, ?)");
    $insertBilling->bind_param("iid", $consumer_id, $units, $amount);

    if ($insertBilling->execute()) {
        echo json_encode(["message" => "Bill calculated successfully", "amount" => $amount]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to insert billing data"]);
    }

    $insertBilling->close();
} else {
    http_response_code(500);
    echo json_encode(["error" => "Failed to insert consumer"]);
}

$insertConsumer->close();
$conn->close();
?>
