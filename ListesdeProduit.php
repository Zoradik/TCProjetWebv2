<?php

require_once 'config.php';
require 'vendor/autoload.php';
require 'class/OpenFoodFactsAllProduct.php';
// $GET = new OpenFoodFactsAllProduct('3017620422003');
// $forecast = $GET->getForecast('3017620422003');

?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <title>MindShop</title>
    <link rel="stylesheet" href="./assets/vendors/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/vendors/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="./assets/nav&footer.css" class="css">
    <link rel="stylesheet" href="./assets/ListesProduits.css" class="css">
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
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <div class="row">
                    <div class=".col-xl-">
                        <div class="SousUtilisateurs">
                            <div class="Utilisateurs">
                                <div class="scrollertw">
                                    <h1> Tous les produits</h1>
                                    <form action="">
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="q" placeholder="Rechercher par email" value="Rechercher un produit">
                                        </div>
                                        <button class="btn btn-dark">Rechercher</button>
                                    </form>
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
                                            <?php for ($i = 0; $i < 24; $i++) { ?>
                                                <tr>
                                                    <td><?= $data["products"][$i]['product_name'] ?> </td>
                                                    <td><?= $data["products"][$i]['brands'] ?></td>
                                                    <td><?= $data["products"][$i]['categories'] ?></td>
                                                    <td><a href='/ConsulterProduit.php?Produit_ID=<?= $i ?>'>
                                                            <button class="btn btn-dark" type="button">Consulter</button> </a></td>
                                                </tr>
                                              
                                            <?php } ?>
                                </div>
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