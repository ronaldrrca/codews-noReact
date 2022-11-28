<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="desarrollo web, landing pages, paginas web, sitios web, 
                                        aplicaciones web, diseño responsivo, web development, 
                                        web pages, web sites, web apps, responsive design.">
    <meta name="robots" content="index.follow">
    <title>CODEWS - Desarrollo web</title>
    <link rel="shortcut icon" href="#" type="image/x-icon">
</head>
<body>
    <header><?php include './components/header.php' ?></header>
    <main>
        <section id="hero_contenedor">
            <picture id="hero_imagen" class="">
                <source media="(max-width:600px)" srcset="./assets/images/mainImage-600x348.webp">
                <source media="(max-width:768px)" srcset="./assets/images/mainImage-768x446.webp">
                <img src="./assets/images/mainImage-1300x754.webp" alt="personas trabajando en desarrollo web">
            </picture>
                
            <div id="hero_info">
                <div id="hero_cuadrado_adorno1"></div>
                <div id="hero_cuadrado_adorno2"></div>
                <div id="hero_cuadrado_adorno3"></div>
                <div id="hero_cuadrado_adorno4"></div>
                <div id="desarrolloWeb_hero_info">
                    <span>CREAMOS Y DESARROLLAMOS<br><span class="hero_index_colorAzul">PÁGINAS PROFESIONALES</span> </span>
                    <div id="hero_text">
                        <span id="desarrollo_web">Desarrollo<br>Web</span>
                        <h1>
                            - Landing pages <br>
                            - Páginas web<br>
                            - sitios web
                        </h1>
                    </div>
                    <div id="precios_desde_tablet">
                        <span>Desde $ 120.000*</span><br>
                        <a href="https://wa.me/573003581311?text=¡Estoy+interesado+en+un+desarrollo+web!"target="_blank"><button>Solicite información</button></a>
                    </div>
                </div>
            </div>
        </section>
        <div id="precios_desde_movil">
            <span>Desde $ 120.000</span><br>
            <a href="https://wa.me/573003581311?text=¡Estoy+interesado+en+un+desarrollo+web!" target="_blank"><button>Solicite información</button></a>
        </div>
        <section id="que_ofrecemos">
            <div id="texto_que_ofrecemos">
                <h2>LO QUE HACEMOS</h2>
                <p>Apoyamos a los emprendedores y mipymes en el proceso de la implementación de su presencia en la web, mediante el desarrollo de landing pages, 
                    páginas, sitios y aplicaciones web. Realizamos desarrollos responsivos (adaptativos a dispositivos de diferentes tamaños, desktops, portátiles, 
                    tablets y móviles), utilizando las tecnologías modernas y las técnicas apropiadas para SEO. 
                </p>
                <p>Asesoramos en los procesos de adquisición de dominio y hosting, edición, mantenimiento y ajustes de páginas existentes.</p>
            </div>
            <picture id="que_ofrecemos_imagen" class="">
                <source media="(max-width:600px)" srcset="./assets/images/que-hacemos-movil.webp">
                <source media="(max-width:768px)" srcset="./assets/images/que-hacemos-tablet.webp">
                <img src="./assets/images/que-hacemos-grande.webp" alt="desarrollador trabajando">
            </picture>
        </section>
        <section id="proyectos">
            <h2>PROYECTOS</h2>
            <div id="contenedor_proyectos">
                <a href="https://gym-model-1.codews.co/"  target="_blank"><img src="./assets/images/proyecto-gym-400x600p.webp" alt="imagen pagina web de gimnasio"></a>
                <a href="https://lilitas.codews.co/index.php"  target="_blank"><img src="./assets/images/proyecto-lilitas-400x600p.webp" alt="imagen pagina web de tienda de ropa"></a>
                <a href="https://restaurant-model-1.codews.co/"  target="_blank"><img src="./assets/images/proyecto-restaurante-400x600.webp" alt="imagen pagina web de restaurante"></a>
            </div>
            
        </section>
    </main>
    <footer><?php include './components/footer.php' ?></footer>
    <script src="./js/index.js"></script>
    <script src="./js/header.js"></script>
</body>
</html>