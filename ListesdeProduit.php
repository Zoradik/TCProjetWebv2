<?php
use App\URLHelper;


require_once 'class/OpenFoodFactsAllProduct.php';
$GET = new OpenFoodFactsAllProduct('3017620422003');
$forecast = $GET->getForecast('3017620422003');
require 'Nav.php'


?>


<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>MindShop</title>
    <link rel="stylesheet" href="./assets/vendors/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/vendors/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="./assets/nav&footer.css" class="css">
    <link rel="stylesheet" href="./assets/AllProducts.css" class="css">
    <!-- <meta name="viewport"
           content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge"> -->

    <link rel="stylesheet" href="C:/Users/jerem/source/repos/TCProjetWebv2/ListesdeProduit.css" class="css">

    <link Rel="Stylesheet" href="Https://Stackpath.Bootstrapcdn.Com/Bootstrap/4.3.1/Css/Bootstrap.Min.Css">
    <link Rel="Stylesheet" href="Https://Cdnjs.Cloudflare.Com/Ajax/Libs/Font-Awesome/5.9.0/Css/All.Css">

    <script src="./assets/vendors/jquery/jquery-3.6.0.min.js"></script>
    <script src="TestApi.js"></script>


</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <div class="row">
                    <div class=".col-xl-">
                        <div class="Back">
                            <div class="Top">
                                <h1> Tous les produit</h1>
                                <table class="table table-strip">
                                    <thead>
                                        <tr>
                                            <th>Nom du produit</th>
                                            <th>Marque du produit</th>
                                            <th>ID du produit</th>
                                            <th>>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        ?>
                                            <tr>
                                                <td> <?= $forecast['Nom0'] ?></td>
                                                <td>aze</td>
                                                <td>aze</td>
                                                <td>aze</td>
                                                <!-- <td><a href='/delete.php?Utilisateurs_ID=<?= $tab[$i]['ID_utilisateurs'] ?>'> -->
                                                        <button class="btn btn-dark" type="button">Supprimer</button> </td>
                                            </tr>   
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php include('footer.php'); ?>


</body>
</html>