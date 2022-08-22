<?php
// on va chercher les articles dans la base
// on se connecte a la base
require_once 'config.php';
?>
<?php
require_once 'class/OpenFoodFactsAllProduct.php';
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
                                <div class="separation1">
                                    <div class="col-12">
                                        <ul>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom0'] ?></a></li>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom1'] ?></a></li>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom2'] ?></a></li>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom3'] ?></a></li>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom4'] ?></a></li>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom5'] ?></a></li>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom6'] ?></a></li>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom7'] ?></a></li>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom8'] ?></a></li>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom9'] ?></a></li>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom10'] ?></a></li>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom11'] ?></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="separation1 2">
                                        <ul>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom12'] ?></a></li>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom13'] ?></a></li>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom14'] ?></a></li>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom15'] ?></a></li>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom16'] ?></a></li>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom17'] ?></a></li>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom18'] ?></a></li>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom19'] ?></a></li>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom20'] ?></a></li>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom21'] ?></a></li>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom22'] ?></a></li>
                                            <li> <a href="#!" style="color: #a2c4c9; " class="link"> <?= $forecast['Nom23'] ?></a></li>
                                        </ul>
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
    </div>

    <br>




    <?php include('footer.php'); ?>


</body>

</html>