<?php
require_once 'config.php';
$Name_list = $_GET['Name_list'];

    $requete = $bdd->prepare("DELETE FROM wishlist WHERE NomListe='" . $Name_list . "'");
    $requete->execute();

    header("Location: /ListesdeCourses.php");