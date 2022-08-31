<?php
// on va chercher les articles dans la base
// on se connecte a la base
require_once 'config.php';


require 'class/OpenFoodFactsAllProduct.php';
$GET = new OpenFoodFactsAllProduct('3017620422003');
$forecast = $GET->getForecast('3017620422003');
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
    <!-- <meta name="viewport"
           content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge"> -->

    <link rel="stylesheet" href="C:/Users/jerem/source/repos/TCProjetWebv2/Acceuil.css" class="css">

    <link Rel="Stylesheet" href="Https://Stackpath.Bootstrapcdn.Com/Bootstrap/4.3.1/Css/Bootstrap.Min.Css">
    <link Rel="Stylesheet" href="Https://Cdnjs.Cloudflare.Com/Ajax/Libs/Font-Awesome/5.9.0/Css/All.Css">

    <script src="./assets/vendors/jquery/jquery-3.6.0.min.js"></script>




</head>

<?php include('nav.php'); ?>

<body>







    <!-- Listes des produits en vogue -->

    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <br>
                <div class="row">
                    <div class=".col-xl-">
                        <div class="onestlabis">
                            <div class="twitter">
                                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                    <!-- Indicators -->
                                    <ol class="carousel-indicators">
                                        <li data-target="Carousel3" data-slide-to="0" class="active"></li>
                                        <li data-target="Carousel2" data-slide-to="1"></li>
                                        <li data-target="Carousel1" data-slide-to="2"></li>
                                    </ol>

                                    <!-- Wrapper for slides -->
                                    <div class="carousel-inner">
                                        <div class="item active">
                                            <img src="Logo/Carousel3.png" alt="...">
                                        </div>

                                        <div class="item">
                                            <img src="Logo/Carousel2.jpg" alt="...">
                                        </div>

                                        <div class="item">
                                            <img src="Logo/Carousel1.png" alt="...">
                                        </div>
                                    </div>

                                    <!-- Left and right controls -->
                                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
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