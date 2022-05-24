<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CODEWS - Contáctanos</title>
    <link rel="shortcut icon" href="#" type="image/x-icon">
</head>
<body>
    <header><?php include './components/header.php' ?></header>
    <main>
        <div id="contactWraper">
            <div id="contactInfo">
                <p>Solicita una propuesta</p>
                <ul>
                    <li>Págibas web</li>
                    <li>Sitios web</li>
                    <li>Landing pages</li>
                    <li>Aplicaciones web</li>
                </ul>
                    <p id="noCost">Sin costos ni compromisos</p>
                    <p id="conditions">(Aplican condiciones)</p>
                    <a href="https://wa.me/573003581311?text=Hola,%20te%20escribo%20desde%20la%20página%20de%20Codews" target="_blank">
                        <div id="contactWhatsApp">
                            <img src="./assets/icons/whatsapp_icon.svg" alt="icono de whatsapp">
                            <p>+57 3003581311</p>
                        </div>
                    </a>
            </div>
            <form id="contactForm">
                <label>Nombre</label>
                <input type='text' id='contactName' required autoFocus placeholder="Requerido" ></input>
                <label>Email*</label>
                <input type='email' id="email" required placeholder="Requerido"></input>
                <label>Teléfono</label>
                <input type='text'id="phone" placeholder="Opcional"></input>
                <label>Mensaje*</label>
                <textarea type='text' id="textMessage" required placeholder="Escriba aquí su mensaje"></textarea>
                <!-- <p id="required">* Campo requerido</p> -->
                <div id="noRobot"><input id="noRobotCheckbox" type="checkbox" value="false"><label id="noRobotLabel">No soy un robot</label></div>
                <input id="contactSubmit" type='submit' value='Enviar mensaje'></input>
            </form>
        </div>
    </main>
    <footer><?php include './components/footer.php' ?></footer>
    <script src="./js/header.js"></script>
    <script src="./js/contactanos.js"></script>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</body>
</html>