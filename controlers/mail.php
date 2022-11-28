<?php
$contactName = trim(htmlspecialchars($_GET['contactName']));
$email = trim(htmlspecialchars($_GET['email']));
$phone=""; if (isset($_GET['phone'])) {$phone = trim(htmlspecialchars($_GET['phone']));}
$textMessage =trim(htmlspecialchars($_GET['textMessage']));
$message = "";
$to = "ronaldrrca@gmail.com";
$header = "From: contacto@codews.co" . "\r\n";//El email remitente debe ser una cuenta del  dominio.
$subject = "Contacto Codews";

$message .= "Enviado por: " . $contactName . "\r\n";
$message .= "Teléfono: " . $phone . " \r\n";
$message .= "E-mail: " . $email . " \r\n";
date_default_timezone_set("America/Bogota");
$message .= "Enviado el: " . date('d/m/Y', time()) . ", a las " . date("h:i:sa") . " \r\n";
$message .= "Mensaje: " . $textMessage . " \r\n";

mail($to, $subject, $message, $header);
header ('location: ../contactanos.php');

?>