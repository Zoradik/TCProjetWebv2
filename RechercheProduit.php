<?php
require_once 'class/ProduitsOpenFoodFacts.php';
$weather = new OpenFoodFacts('3017620422003');
$forecast = $weather->getForecast('3017620422003');
require 'Nav.php'
?>
<link rel="stylesheet" href="./assets/vendors/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/vendors/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="./assets/nav&footer.css" class="css">
    <link rel="stylesheet" href="./assets/Acceuil.css" class="css">

<div class="container">
    <ul>

        <li> <?= $forecast['Nom'] ?> </li>
        <li><?= $forecast['Description'] ?></li>
        <li> <?= $forecast['image'] ?> </li>

    </ul>
</div>

<?php
require 'Footer.php'
?>