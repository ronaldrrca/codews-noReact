//Datos para las tarjetas de los proyectos
const projectCardArray = [
    {
        src: "./assets/images/home-restaurante.webp",
        alt: "pagina web de restaurante",
        title: "RESTAURANTE",
        link: "https://restaurant-model-1.codews.co/"
    },
    {
        src: "./assets/images/home-gym.webp",
        alt: "pagina web de gimnasio",
        title: "GIMNASIO",
        link: "https://gym-model-1.codews.co/"
    },
    {
        src: "./assets/images/home-construction.webp",
        alt: "pagina web de construccion",
        title: "EVENTO DE CONSTRUCCIÓN",
        link: "#"
    },
    // {
    //     src: "./assets/images/home-hairdressing-makeup.webp",
    //     alt: "pagina web de cuidado para el cabello",
    //     title: "CUIDADO PARA EL CABELLO",
    //     link: ""
    // },
    // {
    //     src: "./assets/images/home-lawyers-attorneys.webp",
    //     alt: "pagina web de abogados",
    //     title: "ABOGADOS",
    //     link: ""
    // },
    // {
    //     src: "./assets/images/home-photography-studio.webp",
    //     alt: "pagina web de estudio fotografico",
    //     title: "ESTUDIO FOTOGRÁFICO",
    //     link: ""
    // }
    
]
//Iteración del array de tarjetas de proyectos y creación de las mismas por cada elemento
projectCardArray.forEach(element => {
    const projectCard = document.createElement("div")
    projectCard.className = "projectCard"
    const img = document.createElement("img")
    img.className = "projectCard_img"
    img.setAttribute("src", element.src)
    img.setAttribute("alt", element.alt)
    img.setAttribute("loading", "lazy")
    const link = document.createElement("a")
    link.setAttribute("href", element.link)
    link.setAttribute("target", "_blank")
    const title = document.createElement("h3")
    title.innerHTML = element.title
    const lineDecoration = document.createElement("div")
    lineDecoration.className = "projectCard_lineDecoration"
    link.appendChild(img)
    link.append(title)
    link.append(lineDecoration)
    projectCard.appendChild(link)
    document.getElementById("homeRecentProjects").appendChild(projectCard)
});
//________________________________________________________________________________


