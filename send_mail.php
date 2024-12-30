<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['process-name'];
    $email = $_POST['process-email'];
    $phone = $_POST['process-email'];
    $address = $_POST['process-address'];
    $information = $_POST['process-textarea']

    // Format the email body
    $subject = "New Message from Potential Seller";
    $body = "Name: " . $name . "\n\n" . "Email: " . $email . "\n\n" . "Phone:" . $phone . "\n\n" . "Address:" . $address . "\n\n" . "Info:" . $information;

    // Send the email
    $to = "bryan@qualityneighborhood.com";
    $headers = "From: " . $name . "\r\n";

    if(mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Error sending email. Please try again.";
    }
}
?>