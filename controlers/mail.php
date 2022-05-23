<?php
$contactName = $_POST['contactName'];
$email = $_POST['email'];
$phone; if (isset($_POST['phone'])) {$phone = $_POST['phone'];}else{$phone = "";}
$textMessage = $_POST['textMessage'];
$message = "";
$to = "ronalrrca@gmail.com";
$header = "From: ronathbg@ronaldweb.com" . "\r\n";//El email remitente debe ser una cuenta del  dominio.
$mailResult;

$message .= "Este mensaje fue enviado por: " . $contactName . "\r\n";
$message .= "Teléfono: " . $phone . " \r\n";
$message .= "E-mail: " . $email . " \r\n";
date_default_timezone_set("America/Bogota");
$message .= "Enviado el: " . date('d/m/Y', time()) . ", a las " . date("h:i:sa") . " \r\n";
$message .= "Mensaje: " . $textMessage . " \r\n";

if (mail($to, $subject, $message, $header)) {
    echo '<script>alert("Mensaje enviado con éxito, de ser necesario pronto recibirá una respuesta.");</script>';
}else{
    echo '<script>alert("Ha ocurrido un error, por favor inténtelo nuevamente en algunos minutos o contáctame a través de otro medio.");</script>';
    }
    echo '<meta http-equiv="refresh" content="0; url=../contactanos.php">';
?>