//Iteración del array de tarjetas de blogs y creación de las mismas por cada elemento
blogCardArray.forEach(element => {
    const blogCard = document.createElement("article")
    blogCard.className = "blogCard_home"
    const link = document.createElement("a")
    link.setAttribute("href", "#")
    const figure = document.createElement("figure")
    const image = document.createElement("img")
    image.setAttribute("src", element.src)
    image.setAttribute("alt", element.alt)
    const blogCardAuthor = document.createElement("p")
    blogCardAuthor.className = "blogCardAuthor_home"
    blogCardAuthor.innerHTML = element.author
    const span = document.createElement("span")
    span.className = "blogCardDate"
    span.innerHTML = " - " + element.date
    blogCardAuthor.append(span)
    const blogCardTitle = document.createElement("h2")
    blogCardTitle.className = "blogCardTitle_home"
    blogCardTitle.innerHTML = element.title
    const blogCardText = document.createElement("p")
    blogCardText.className = "blogCardText"
    blogCardText.innerHTML = element.text
    figure.appendChild(image)
    blogCard.appendChild(figure)
    blogCard.appendChild(blogCardAuthor)
    blogCard.appendChild(blogCardTitle)
    blogCard.appendChild(blogCardText)
    document.getElementById("homeBlogs").appendChild(blogCard)
});