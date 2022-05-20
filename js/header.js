const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu")
const mobileMenu_closeIcon = document.getElementById("mobileMenu_closeIcon")
const mobileMenu_item =  document.querySelectorAll(".test")
const mobileMenu_inicio = document.getElementById("mobileMenu_inicio")
const mobileMenu_proyectos = document.getElementById("mobileMenu_proyectos")
const mobileMenu_blog = document.getElementById("mobileMenu_blog")
const mobileMenu_contactanos = document.getElementById("mobileMenu_contactanos")

menuIcon.addEventListener("click", ()=> {//Desplegamos el menú móvil con el ícono del menú
    mobileMenu.style.display = "flex"
})

mobileMenu_closeIcon.addEventListener("click", ()=> {//Cerramos el menú móvil con el ícono de cerrar
    mobileMenu.style.display = "none"
})

//Cerramos el menú móvil cuando presionamos un item para navegar hacia otra página
mobileMenu_inicio.addEventListener("click", ()=> {
    mobileMenu.style.display = "none"
})

mobileMenu_proyectos.addEventListener("click", ()=> {
    mobileMenu.style.display = "none"
})

mobileMenu_blog.addEventListener("click", ()=> {
    mobileMenu.style.display = "none"
})

mobileMenu_contactanos.addEventListener("click", ()=> {
    mobileMenu.style.display = "none"
})