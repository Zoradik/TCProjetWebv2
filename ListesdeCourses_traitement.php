<?php 
    require_once 'config.php'; // On inclu la connexion à la bdd
    // Si les variables existent et qu'elles ne sont pas vides
    
    $ID = $_COOKIE['id_user'];

//Vérifie si il y a une wishliste pour le USER connecté
$hasWish = $bdd->prepare("SELECT EXISTS(SELECT NomListe FROM wishlist WHERE ID_utilisateurs='$ID') AS OUTPUT");
   $hasWish->execute();
   $hasWishResult = $hasWish->fetch();

// var_dump($hasWishResult);
// Vérifie que l'offre n'est pas déjà dans la wishlist de l'étudiant

   if ($hasWishResult['OUTPUT'] == 1) {
    $queryCount = $bdd->prepare("SELECT COUNT(NomListe) as count FROM wishlist WHERE ID_utilisateurs='$ID'");
    $queryCount->execute();
    $queryCountResult = (int)$queryCount->fetch()['count'];
var_dump($queryCountResult);

    $NomListes = $bdd->prepare("SELECT NomListe FROM wishlist WHERE ID_utilisateurs='$ID'");
    $NomListes->execute();
    $NomListesResult = $NomListes->fetchAll();
    var_dump($NomListesResult);

   }




    if(isset($_POST['save'])){
        $NomListe = $_POST['ID_Liste'];
// var_dump($NomListe);
    $insert_user = $bdd->prepare("INSERT INTO wishlist (ID_utilisateurs, NomListe) VALUES( '" . $ID . "',  '" . $NomListe . "' )");
    // var_dump($ID);
    // var_dump($insert_user);
    // echo"Nom";
     $insert_user->execute();
    }
