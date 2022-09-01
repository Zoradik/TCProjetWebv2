<?php
require_once 'config.php';
$ID_produit = $_GET['ID_produit'];

    $requete = $bdd->prepare("DELETE FROM listeproduit WHERE ID_produit='" . $ID_produit . "'");
    $requete->execute();

    header("Location: /ListesdeCourses.php");