<?php
// on va chercher les articles dans la base
// on se connecte a la base
require_once 'config.php';


?>


<!doctype html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <title>MindShop</title>
    <link rel="stylesheet" href="./assets/vendors/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/vendors/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="./assets/nav&footer.css" class="css">
    <link rel="stylesheet" href="./assets/Acceuil.css" class="css">

    <link rel="manifest" href="/manifest.json" />
    <link rel="serviceworker" href="/service-worker.js" />



    <link rel="stylesheet" href="C:/Users/jerem/source/repos/TCProjetWebv2/Acceuil.css" class="css">

    <link Rel="Stylesheet" href="Https://Stackpath.Bootstrapcdn.Com/Bootstrap/4.3.1/Css/Bootstrap.Min.Css">
    <link Rel="Stylesheet" href="Https://Cdnjs.Cloudflare.Com/Ajax/Libs/Font-Awesome/5.9.0/Css/All.Css">


    <script src="./assets/vendors/jquery/jquery-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

    <script>
        if ('serviceWorker' in navigator) {
            window;addEventListener('load' , () =>{
                navigator.serviceWorker.register('/service-worker.js')
                .then(reg=>{
                    console.log('Service worker registred');
                })
                .catch(err=>{
                    console.log('Le Service Worker est introuvable', err);
                }); 
            });
        }
    </script>
</head>

<?php include('nav.php'); ?>

<body>







    <!-- Listes des produits en vogue -->

    <div class="container-fluid">
        <div class="middle">
            <div class="row">
                <!-- <div class="col-6"> -->
                    <br>
                    <div class="row">
                        <div class=".col-xl-12">

                            <div class="onestlabis">
                                <div class="oui">
                                        <div class="container">
                                            <h1>BIENVENUE DANS MINDSHOP</h1>
                                            <h5>Have you forgot your shopping list with us ?</h5>
                                            <div id="demo" class="carousel slide" data-ride="carousel">
                                                <!-- Indicateurs -->
                                                <ul class="carousel-indicators">
                                                    <li data-target="#Logo/Carousel2.jpg" data-slide-to="0" class="active"></li>
                                                    <li data-target="#Logo/Carousel3.png" data-slide-to="1"></li>
                                                    <li data-target="#Logo/Carousel1.jpg" data-slide-to="2"></li>
                                                </ul>

                                                <!-- Carrousel -->
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                        <img src="Logo/Carousel1.jpg" alt="Carrousel slide 1" class="d-block w-100 h-100">
                                                        <div class="carousel-caption d-none d-md-block">
                                                            <br>
                                                        </div>
                                                        <br>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="Logo/Carousel2.jpg" alt="Carrousel slide 2" class="d-block w-100 h-100">
                                                        <div class="carousel-caption d-none d-md-block text-dark">
                                                        </div>
                                                        <br>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="Logo/Carousel3.png" alt="Carrousel slide 3" class="d-block w-100 h-100">
                                                        <div class="carousel-caption d-none d-md-block">
                                                        </div>
                                                        <br>
                                                    </div>
                                                </div>

                                                <!-- Contrôles -->
                                                <a class="carousel-control-prev" href="#demo" role="button" data-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Précédent</span>
                                                </a>
                                                <a class="carousel-control-next" href="#demo" role="button" data-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Suivant</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                        <!-- </div> -->
                    </div>



                </div>
            </div>
        </div>
    </div>
    </div>

    <br>




    <?php include('footer.php'); ?>


</body>

</html>