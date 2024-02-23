<!DOCTYPE html>
<html>
<head>
    <title>Database Connection Test</title>
</head>
<body>

<?php
// Database connection parameters
$servername = "85.10.192.25";
$username = "sunwayst_cert";
$password = "sunwayABCdef123@@"; 
$database = "sunwayst_spin_game"; // Database name updated

// Create connection using MySQLi
$conn = new mysqli($servername, $username, $password, $database);

// Check connection for errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully to the database!"; // Success message
}

// Always close the connection
$conn->close();
?>

</body>
</html>