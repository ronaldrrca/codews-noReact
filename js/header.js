//Código para mostrar u ocultar los menús___________________________________________
const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu")
const mobileMenu_closeIcon = document.getElementById("mobileMenu_closeIcon")
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


//Código para identificar el item activo en el menú desplegable
let url = window.location.href
const from = url.lastIndexOf("/") + 1
const to = url.indexOf(".php")
let pageName = url.slice(from, to)

switch (pageName) {
    case "index":
        document.getElementById("item_index").style.borderBottom = "2px solid #33B1FF"
        break;

    case "proyectos":
        document.getElementById("item_proyectos").style.borderBottom = "2px solid #33B1FF"
        break;

    case "contactanos":
        document.getElementById("item_contactanos").style.borderBottom = "2px solid #33B1FF"
        break;

    case "blog":
        document.getElementById("item_blog").style.borderBottom = "2px solid #33B1FF"
        break;
}