<?php
$host = "localhost";
$userName = "httpsynergynatur_usercontact";
$password = "NkP~u-NT3kUz";
$dbName = "httpsynergynatur_contactform";
// Create database connection
$conn = new mysqli($host, $userName, $password, $dbName);
// Check connection

if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
?>