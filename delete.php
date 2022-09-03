<?php
require_once 'config.php';
$User_id = $_GET['Utilisateurs_ID'];

    $requete = $bdd->prepare("DELETE FROM utilisateurs WHERE ID_utilisateurs='" . $User_id . "'");
    $requete->execute();

    header("Location: /Utilisateurs.php");