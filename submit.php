<?php
// Database credentials
$servername = "85.10.192.25";
$username = "sunwayst_cert";
$password = "sunwayABCdef123@@";
$initial_dbname = "sunwayst_spin_game";
$date = date("Y_m_d");
$table_name = "participants_" . $date;

// Establish connection to the initial database
$conn = new mysqli($servername, $username, $password, $initial_dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the table for today's date exists, if not, create it
$sql = "CREATE TABLE IF NOT EXISTS $table_name (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    number VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
)";
if ($conn->query($sql) !== TRUE) {
    die("Error creating table: " . $conn->error);
}

// Check if form data is set
if(isset($_POST['name'], $_POST['number'], $_POST['email'])) {
    // Get form data
    $name = $_POST['name'];
    $number = $_POST['number'];
    $email = $_POST['email'];

    // Prepare and bind SQL statement
    $stmt = $conn->prepare("INSERT INTO $table_name (name, number, email) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $number, $email);

    // Execute SQL statement
    if ($stmt->execute()) {
        // Redirect to success page
        header("Location: main.html");
        exit();
    } else {
        echo "Error: " . $conn->error;
    }

    // Close statement
    $stmt->close();
} else {
    echo "Form data is missing.";
}

// Close connection
$conn->close();
?>
