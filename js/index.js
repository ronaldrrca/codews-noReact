//Datos para las tarjetas de los proyectos
const projectCardArray = [
    {
        src: "./assets/images/home-business-it-event.webp",
        alt: "pagina web de evento",
        title: "EVENTO DE NEGOCIOS"
    },
    {
        src: "./assets/images/home-construction.webp",
        alt: "pagina web de construccion",
        title: "EVENTO DE CONSTRUCCIÓN"
    },
    {
        src: "./assets/images/home-hairdressing-makeup.webp",
        alt: "pagina web de cuidado para el cabello",
        title: "CUIDADO PARA EL CABELLO"
    },
    {
        src: "./assets/images/home-lawyers-attorneys.webp",
        alt: "pagina web de abogados",
        title: "ABOGADOS"
    },
    {
        src: "./assets/images/home-photography-studio.webp",
        alt: "pagina web de estudio fotografico",
        title: "ESTUDIO FOTOGRÁFICO"
    },
    {
        src: "./assets/images/home-ristorante.webp",
        alt: "pagina web de restaurante",
        title: "RESTAURANTE"
    },
]
//Iteración del array de tarjetas de proyectos y creación de las mismas por cada elemento
projectCardArray.forEach(element => {
    const projectCard = document.createElement("div")
    projectCard.className = "projectCard"
    const img = document.createElement("img")
    img.className = "projectCard_img"
    img.setAttribute("src", element.src)
    img.setAttribute("alt", element.alt)
    const link = document.createElement("a")
    link.setAttribute("href", "#")
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

//Datos para las tarjetas de los blogs
const blogCardArray = [
    {
        src: "../assets/images/blog-338x225p.webp",
        alt: "Texto alternativo",
        author: "RONALD RODRÍGUEZ CAMPILLO",
        date: "13 de mayo de 2022",
        title: "Título 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam sit nesciunt exercitationem sed culpa ullam, eos facilis eum ad atque laborum accusantium fugit facere. Est, doloremque? Reprehenderit, incidunt dolor"
    },
    {
        src: "../assets/images/blog-338x225p.webp",
        alt: "Texto alternativo",
        author: "RONALD RODRÍGUEZ CAMPILLO",
        date: "13 de mayo de 2022",
        title: "Título 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam sit nesciunt exercitationem sed culpa ullam, eos facilis eum ad atque laborum accusantium fugit facere. Est, doloremque? Reprehenderit, incidunt dolor"
    },
    {
        src: "../assets/images/blog-338x225p.webp",
        alt: "Texto alternativo",
        author: "RONALD RODRÍGUEZ CAMPILLO",
        date: "13 de mayo de 2022",
        title: "Título 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam sit nesciunt exercitationem sed culpa ullam, eos facilis eum ad atque laborum accusantium fugit facere. Est, doloremque? Reprehenderit, incidunt dolor"
    },
    {
        src: "../assets/images/blog-338x225p.webp",
        alt: "Texto alternativo",
        author: "RONALD RODRÍGUEZ CAMPILLO",
        date: "13 de mayo de 2022",
        title: "Título 4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam sit nesciunt exercitationem sed culpa ullam, eos facilis eum ad atque laborum accusantium fugit facere. Est, doloremque? Reprehenderit, incidunt dolor"
    }
]

//Iteración del array de tarjetas de blogs y creación de las mismas por cada elemento
blogCardArray.forEach(element => {
    const blogCard = document.createElement("article")
    blogCard.className = "blogCard"
    const link = document.createElement("a")
    link.setAttribute("href", "#")
    const image = document.createElement("img")
    image.setAttribute("src", element.src)
    image.setAttribute("alt", element.alt)
    const blogCardAuthor = document.createElement("p")
    blogCardAuthor.className = "blogCardAuthor"
    blogCardAuthor.innerHTML = element.author
    const span = document.createElement("span")
    span.className = "blogCardDate"
    span.innerHTML = " - " + element.date
    blogCardAuthor.append(span)
    const blogCardTitle = document.createElement("h2")
    blogCardTitle.className = "blogCardTitle"
    blogCardTitle.innerHTML = element.title
    const blogCardText = document.createElement("p")
    blogCardText.className = "blogCardText"
    blogCardText.innerHTML = element.text
    blogCard.appendChild(image)
    blogCard.appendChild(blogCardAuthor)
    blogCard.appendChild(blogCardTitle)
    blogCard.appendChild(blogCardText)
    document.getElementById("homeBlogs").appendChild(blogCard)
});