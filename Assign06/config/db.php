<?php
$host='localhost';
$pass='';
$user='root';
$db='electricity_bill';
$port=3307;


$conn = new mysqli($host,$user,$pass,$db,port: $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>