<?php
require_once 'config.php';
// include 'class/OpenFoodFactsAllProduct.php';
include 'ListesdeCourses_traitement.php';
//toutes les variables
$pdo = new PDO("mysql:host=MindShop.com;dbname=tcweb;charset=utf8", "root", "", [
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);
$ID = null;

if (!empty($_COOKIE['id_user'])) {
    $ID = $_COOKIE['id_user'];
}

if (!empty($_POST['id_user'])) {
    setcookie('id_user', $_POST['id_user']);
    $ID = $_POST['id_user'];
}
// var_dump($ID);
$params = [];
$query = "SELECT * FROM listeproduit RIGHT JOIN wishlist w ON w.NomListe = listeproduit.NomListe WHERE w.ID_utilisateurs = :ID";

if (!empty($_GET['q'])) {
    $query .= " AND listeproduit.ID_produit LIKE :ID_produit ";
    $params['ID_produit'] = '%' . $_GET['q'] . '%';
}

$statement = $pdo->prepare($query);
// var_dump($pdo->errorInfo());
if (!empty($_GET['q'])) {
    $statement->bindParam(":ID_produit", $params['ID_produit']);
    }
$statement->bindParam(":ID", $ID);
$statement->execute();
// var_dump($query);
// var_dump($params);
// var_dump($statement);
$NomListesResult = $statement->fetchAll();
// var_dump($result);
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
    <div class="container-fluid">
        <div class="row">
            <div class="row">
                <div class=".col-xl-">
                    <div class="SousCourses">
                        <div class="Courses">
                            <div class="scrollertw">
                                <div id="contenu">
                                    <h1> Ajoutez une liste de course au compte <?= htmlentities($ID) ?></h1>
                                    <div class="container">
                                        <form method="post" action="">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Nom de la liste de course " name="ID_Liste">
                                            </div>
                                            <button class="btn btn-dark" type="submit" name="save" value="submit">Ajouter la nouvelle liste</button>
                                        </form>
                                    </div>
                                    <br>
                                    <form action="">
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="q" placeholder="Rechercher le produit a partir d'une liste de course" value="<?= htmlentities($_GET['q'] ?? null) //htmlentities pour echapper aux injections
                                                                                                                                                                        ?>">
                                        </div>
                                        <button class="btn btn-dark">Rechercher</button>
                                    </form>
                                    </form>
                                    <table class="table table-strip">
                                        <thead>
                                            <tr>
                                                <th>Nom de la liste</th>
                                                <th>Nom des produits associés </th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                            for ($i = 0; $i < count($NomListesResult); $i++) {
                                            ?>
                                                <div table class="table table-strip">
                                                    <thead>
                                                        <tr>
                                                            <?php
                                                            // var_dump($NomListesResult[$i]['NomListe']);
                                                            $wishlistname = $NomListesResult[$i]['NomListe'];
                                                            $ProduitListe = $bdd->prepare("SELECT ID_produit FROM listeproduit WHERE NomListe ='$wishlistname'");
                                                            $ProduitListe->execute();
                                                            $ProduitListeResult = $ProduitListe->fetchAll();
                                                            // var_dump($ProduitListeResult);

                                                            ?>

                                                            <td><?= $NomListesResult[$i]['NomListe'] ?></td>
                                                            <td><a href='/delete_Courses.php?Name_list=<?= $wishlistname ?>'>
                                                                    <button class="btn btn-dark" type="button">Supprimer la liste de course</button> </a></td>


                                                        </tr>
                                                    </thead>

                                                    <td></td>
                                                    <td>
                                                        <?php for ($j = 0; $j < count($ProduitListeResult); $j++) {
                                                            $IDproduit = $ProduitListeResult[$j]['ID_produit'];
                                                            echo $IDproduit;
                                                            // var_dump($IDproduit);
                                                            echo '</br>';
                                                        }
                                                        ?>
                                                    </td>
                                                    <td><a href='/Produit_list.php?Liste_ID=<?= $wishlistname ?>'>
                                                            <button class="btn btn-dark" type="button">Supprimer 1/+ produits</button> </a> </td>
                                                    <?php
                                                    ?>
                                                    </tr>
                                                    </br>
                                                <?php } ?>
                                                </div>
                                        </tbody>
                                    </table>





                                    <footer>
                                        <?php include('footer.php'); ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </footer>
</body>

</html>