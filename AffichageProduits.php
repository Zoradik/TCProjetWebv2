<?php
require_once 'class/OpenFoodFactsAllProduct.php';
$GET = new OpenFoodFactsAllProduct('3017620422003');
$forecast = $GET->getForecast('3017620422003');
require 'Nav.php'
?>
<link rel="stylesheet" href="./assets/vendors/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="./assets/vendors/fontawesome/css/all.min.css">
<link rel="stylesheet" href="./assets/nav&footer.css" class="css">
<link rel="stylesheet" href="./assets/Acceuil.css" class="css">

<div class="container">
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

<?php
require 'Footer.php'
?>