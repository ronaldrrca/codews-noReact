<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CODEWS - Desarrollo web</title>
    <link rel="shortcut icon" href="#" type="image/x-icon">
</head>
<body>
    <header><?php include './components/header.php' ?></header>
    <main>
        <div id="homeBanner">
            <div id="h1HomeContainer">
                <div id="h1HomeContainer_largeGreenDiv"></div>
                <div id="h1HomeContainer_smallGreenDiv"></div>
                <h1><span>Desarrollo web</span><br>Páginas <br>Sitios <br>Landing pages <br>Aplicaciones web</h1>
            </div>
            <figure id="homeBannerImages">
                <img class="homeBanner_image" id="homeMainImage768x446" src="./assets/images/mainImage-768x446.webp" alt="desarrolladores trabajando en oficina">
                <img class="homeBanner_image" id="homeMainImage1300x867" src="./assets/images/mainImage-1300x867.webp" alt="desarrolladores trabajando en oficina">
                <img class="homeBanner_image" id="homeMainImage1500x870" src="./assets/images/mainImage-1500x870.webp" alt="desarrolladores trabajando en oficina">
            </figure>
            <p id="modernDevelopment">Desarrollo web moderno y adaptable a todos los dispositivos</p>
        </div>
        <p id="noCompite">"Sí su negocio no tiene presencia en la web, no compite"</p>
        <div id="responsive_proposal_container">
            <figure id="responsiveImgContainer">
                <img id="responsiveImg768" src="./assets/images/responsive-768p.webp" alt="imagen de diferentes dispositivos mostrando un sitio adaptable">
                <img id="responsiveImg900" src="./assets/images/responsive-900p.webp" alt="imagen de diferentes dispositivos mostrando un sitio adaptable">
                <div id="responsive_design"><p>Diseño adaptativo</p></div>
            </figure>
            <p id="proposal">Solicita una propuesta de desarrollo para tu negocio, sin costo y sin compromisos.</p>
        </div>
        <h2 class="home_sectionTitle">Proyectos recientes</h2>
        <section id="homeRecentProjects"></section>
        <h2 class="home_sectionTitle">Blog - entradas recientes</h2>
        <section id="homeBlogs"></section>
    </main>
    <footer><?php include './components/footer.php' ?></footer>
    <script src="./js/index.js"></script>
    <script src="./js/header.js"></script>
</body>
</html>