    <?php
    require_once 'config.php';
    
    $ID = $_COOKIE['id_user'];
$ID_produit = $_GET['Produit_ID'];
// var_dump($ID_produit);
    $NomListes = $bdd->prepare("SELECT NomListe FROM wishlist WHERE ID_utilisateurs='$ID'");
    $NomListes->execute();
    $NomListesResult = $NomListes->fetchAll();
    // var_dump($NomListesResult);

    if(isset($_POST['Ajouter'])){
        $NomListe = $_POST['NomListe'];
// var_dump($NomListe);
    $insert_user = $bdd->prepare("INSERT INTO listeproduit (ID_produit, NomListe) VALUES( '" . $ID_produit . "',  '" . $NomListe . "' ) ");
    // var_dump($ID);
    // var_dump($insert_user);
    // echo"Nom";
     $insert_user->execute();
    }
    ?>