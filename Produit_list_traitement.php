<?php
    require_once 'config.php';
    
    $ID = $_COOKIE['id_user'];
$ID_Liste = $_GET['Liste_ID'];
// var_dump($ID_produit);
    $NomListes = $bdd->prepare("SELECT ID_produit FROM listeproduit WHERE NomListe='$ID_Liste'");
    $NomListes->execute();
    $NomListesResult = $NomListes->fetchAll();
    // var_dump($NomListesResult);
    
    // header("Location: /ListesdeCourses.php");

    if(isset($_POST['Delete'])){
    $NomProduit = $_POST['NomProduit'];

    $requete = $bdd->prepare("DELETE FROM listeproduit WHERE ID_produit='" . $NomProduit . "'");
    $requete->execute();
    }
