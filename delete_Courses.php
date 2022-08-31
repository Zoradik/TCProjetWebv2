<?php
require_once 'config.php';
$NomListe = $_GET['NomListe'];

    $requete = $bdd->prepare("DELETE FROM wishlist WHERE NomListe='" . $NomListe . "'");
    $requete->execute();

    header("Location: /ListesdeCourses.php");