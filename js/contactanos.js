const noRobotCheckbox = document.getElementById("noRobotCheckbox");
const noRobot = document.getElementById("noRobot")
const contactForm = document.getElementById("contactForm")
const contactSubmit = document.getElementById("contactSubmit")
const url = "../controlers/mail.php"

contactForm.addEventListener("submit", (e)=> {
    e.preventDefault()
})

//Función que ejecuta el envío de info al backend
function sendData() {
    let contactName = document.getElementById("contactName").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let textMessage = document.getElementById("textMessage").value
    
    //Confirmamos que los campos requeridos están enviando datos. Medida de respaldo al atributo ya establecido
    if (contactName && email && textMessage) {
        alert("Mensaje enviado con éxito, de ser necesario pronto recibirá una respuesta.")
        window.location.assign(url + "?contactName=" + contactName + "&email=" + email +"&phone=" + phone + "&textMessage=" + textMessage);
        }
}

//Evento que controla el div del checkbox
noRobotCheckbox.addEventListener("click", ()=> {
    if (noRobotCheckbox.value === "false" ) {
        noRobotCheckbox.setAttribute("value", "true")
        noRobot.style.border = "1px solid #31A64D"
        contactSubmit.addEventListener("click", sendData); //Sí está marcada la casilla de verificación, llamamos a la función sendData
    } else {
        noRobotCheckbox.setAttribute("value", "false")
        noRobot.style.border = "1px solid #ff0000"
        contactSubmit.removeEventListener("click", sendData); //Eliminamos el evento, sí ha sido marcada y desmarcada la casilla
    }
}) 

