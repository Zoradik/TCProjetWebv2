<?php

require_once 'config.php';
require 'vendor/autoload.php';
require 'class/OpenFoodFactsAllProduct.php';
$GET = new OpenFoodFactsAllProduct('3017620422003');
$forecast = $GET->getForecast('3017620422003');

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

                                            <tr>
                                                <td><?= $forecast['Nom0'] ?> 400g</td>
                                                <td><?= $forecast['Marque0'] ?></td>
                                                <td><?= $forecast['ID0'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID0'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td><?= $forecast['Nom1'] ?> 75cl</td>
                                                <td><?= $forecast['Marque1'] ?></td>
                                                <td><?= $forecast['ID1'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID1'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td><?= $forecast['Nom2'] ?></td>
                                                <td><?= $forecast['Marque2'] ?></td>
                                                <td><?= $forecast['ID2'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID2'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td><?= $forecast['Nom3'] ?> 1L</td>
                                                <td><?= $forecast['Marque3'] ?></td>
                                                <td><?= $forecast['ID3'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID3'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td><?= $forecast['Nom4']?> 1000g</td>
                                                <td><?= $forecast['Marque4'] ?></td>
                                                <td><?= $forecast['ID4'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID4'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td><?= $forecast['Nom5'] ?></td>
                                                <td><?= $forecast['Marque5'] ?></td>
                                                <td><?= $forecast['ID5'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID5'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td><?= $forecast['Nom6'] ?> 1L</td>
                                                <td><?= $forecast['Marque6'] ?></td>
                                                <td><?= $forecast['ID6'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID6'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td><?= $forecast['Nom7'] ?></td>
                                                <td><?= $forecast['Marque7'] ?></td>
                                                <td><?= $forecast['ID7'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID7'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td><?= $forecast['Nom8'] ?></td>
                                                <td><?= $forecast['Marque8'] ?></td>
                                                <td><?= $forecast['ID8'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID8'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td><?= $forecast['Nom9'] ?></td>
                                                <td><?= $forecast['Marque9'] ?></td>
                                                <td><?= $forecast['ID9'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID9'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td><?= $forecast['Nom10'] ?></td>
                                                <td><?= $forecast['Marque10'] ?></td>
                                                <td><?= $forecast['ID10'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID10'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td><?= $forecast['Nom11'] ?></td>
                                                <td><?= $forecast['Marque11'] ?></td>
                                                <td><?= $forecast['ID11'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID11'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td><?= $forecast['Nom12'] ?></td>
                                                <td><?= $forecast['Marque12'] ?></td>
                                                <td><?= $forecast['ID12'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID12'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td><?= $forecast['Nom13'] ?></td>
                                                <td><?= $forecast['Marque13'] ?></td>
                                                <td><?= $forecast['ID13'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID13'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td><?= $forecast['Nom14'] ?></td>
                                                <td><?= $forecast['Marque14'] ?></td>
                                                <td><?= $forecast['ID14'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID14'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td>Pâte-tartiner-noisettes</td>
                                                <td><?= $forecast['Marque15'] ?></td>
                                                <td><?= $forecast['ID15'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID15'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td>Buerre-de-cacahuete</td>
                                                <td><?= $forecast['Marque16'] ?></td>
                                                <td><?= $forecast['ID16'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID16'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td><?= $forecast['Nom17'] ?></td>
                                                <td><?= $forecast['Marque17'] ?></td>
                                                <td><?= $forecast['ID17'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID17'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td><?= $forecast['Nom181'] ?> <?= $forecast['Nom182'] ?> <?= $forecast['Nom183'] ?></td>
                                                <td><?= $forecast['Marque18'] ?></td>
                                                <td><?= $forecast['ID18'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID18'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td><?= $forecast['Nom19'] ?></td>
                                                <td><?= $forecast['Marque19'] ?></td>
                                                <td><?= $forecast['ID19'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID19'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td><?= $forecast['Nom20'] ?> 1L</td>
                                                <td><?= $forecast['Marque20'] ?></td>
                                                <td><?= $forecast['ID20'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID20'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td><?= $forecast['Nom211'] ?> <?= $forecast['Nom212'] ?> <?= $forecast['Nom213'] ?></td>
                                                <td><?= $forecast['Marque21'] ?></td>
                                                <td><?= $forecast['ID21'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID21'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td><?= $forecast['Nom221'] ?> <?= $forecast['Nom222'] ?> <?= $forecast['Nom223'] ?></td>
                                                <td><?= $forecast['Marque22'] ?></td>
                                                <td><?= $forecast['ID22'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID22'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>
                                            <tr>
                                                <td><?= $forecast['Nom231'] ?> <?= $forecast['Nom232'] ?> d'avoine</td>
                                                <td><?= $forecast['Marque23'] ?></td>
                                                <td><?= $forecast['ID23'] ?></td>
                                                <td><a href='/delete.php?Produit_ID=<?= $forecast['ID23'] ?>'>
                                                        <button class="btn btn-dark" type="button">Consulter</button> </td>
                                            </tr>

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