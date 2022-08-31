<?php
require_once 'config.php';
include 'class/OpenFoodFactsAllProduct.php';
include 'ListesdeCourses_traitement.php';
$ID = null;

if (!empty($_COOKIE['id_user'])) {
    $ID = $_COOKIE['id_user'];
}

if (!empty($_POST['id_user'])) {
    setcookie('id_user', $_POST['id_user']);
    $ID = $_POST['id_user'];
}

?>

<!doctype html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <title>MindShop</title>
    <link rel="stylesheet" href="./assets/vendors/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/vendors/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="./assets/nav&footer.css" class="css">
    <link rel="stylesheet" href="./assets/ListesdeCourses.css" class="css">

    <!-- <meta name="viewport"
           content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge"> -->

    <link rel="stylesheet" href="C:/Users/jerem/source/repos/TCProjetWebv2/ListesdeCourses.css" class="css">

    <link Rel="Stylesheet" href="Https://Stackpath.Bootstrapcdn.Com/Bootstrap/4.3.1/Css/Bootstrap.Min.Css">
    <link Rel="Stylesheet" href="Https://Cdnjs.Cloudflare.Com/Ajax/Libs/Font-Awesome/5.9.0/Css/All.Css">



    <script src="./assets/vendors/jquery/jquery-3.6.0.min.js"></script>


</head>
<?php include('nav.php'); ?>

<body>

    <div id="contenu">

        <h1>Ajoutez une liste de course au compte <?= htmlentities($ID) ?> </h1>

        <div class="container">
            <form method="post" action="">
                <label>Nom de la nouvelle liste de course</label>
                <br>
                <input type="text" name="ID_Liste" />
                <br><br>

                <input type="submit" name="save" value="submit" />
            </form>
        </div>
        <tbody>

            <?php
            for ($i = 0; $i < count($NomListesResult); $i++) {
            ?>
                <tr>

                    <td><?= $NomListesResult[$i]['NomListe'] ?></td>
                    <?php
                    // var_dump($NomListesResult[$i]['NomListe']);
                    $wishlistname = $NomListesResult[$i]['NomListe'];
                    $ProduitListe = $bdd->prepare("SELECT ID_produit FROM listeproduit WHERE NomListe ='$wishlistname'");
                    $ProduitListe->execute();
                    $ProduitListeResult = $ProduitListe->fetchAll();
                    // var_dump($ProduitListeResult);
                    ?>
                    <?php for ($j = 0; $j < count($ProduitListeResult); $j++) {
                        $IDproduit = $ProduitListeResult[$j]['ID_produit'];
                        echo $data["products"][(int)$j]['product_name'];
                        // var_dump($IDproduit);
                        echo'</br>';
                        
                    }
                    ?>
                        <td><a href='/delete.php?NomListe=<?= $wishlistname ?>'>
                                                        <button class="btn btn-dark" type="button">Supprimer</button> </a></td>
                                                        <?php
                    ?>

                    
                    <!-- <td><a href='/update.php?Utilisateurs_ID=<? //= $tab[$i]['ID_utilisateurs'] 
                                                                    ?>'>
                            <button class="btn btn-dark" type="button">Update</button> </td>
                    <td><a href='/delete.php?Utilisateurs_ID=<? //= $tab[$i]['ID_utilisateurs'] 
                                                                ?>'>
                            <button class="btn btn-dark" type="button">Supprimer</button> </td> -->
                </tr>
                </br>
            <?php } ?>

        </tbody>






        <footer>
            <?php include('footer.php'); ?>

    </div>
    </footer>
</body>

</html>