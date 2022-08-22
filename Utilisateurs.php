<?php
//class

use App\TableHelper;
use App\URLHelper;

//constante



define("PER_PAGE", 8);


// on va chercher les articles dans la base
// on se connecte a la base
require_once 'config.php';
require 'vendor/autoload.php';
$pdo = new PDO("mysql:host=MindShop.com;dbname=tcweb;charset=utf8", "root", "", [
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);

//toutes les variables
//recuperer les utilisateurs :

// SELECT
$select = $bdd->prepare("SELECT * FROM utilisateurs");
// $select=$bdd->prepare
$select->setFetchMode(PDO::FETCH_ASSOC);
$select->execute();
$tab = $select->fetchAll();
// var_dump($tab);
// var_dump($tab[0]['ID_utilisateurs']);

$query = "SELECT * FROM utilisateurs";
$queryCount = "SELECT COUNT(ID_utilisateurs) as count FROM utilisateurs";
$params = [];
$sortable = ["ID_utilisateurs", "Nom", "Prenom", "email", "Ville", "Role"];

// Recherche par email pour protéger des injections SQL --> requete preparée
if (!empty($_GET['q'])) {
    $query .= " WHERE email LIKE :email";
    $queryCount .= " WHERE email LIKE :email";
    $params['email'] = '%' . $_GET['q'] . '%';
}

//Organisation
if (!empty($_GET['sort']) && in_array($_GET['sort'], $sortable)) {
    $direction = $_GET['dir'] ?? 'asc';
    if (!in_array($direction, ['asc', 'desc'])) {
        $direction = 'asc';
    }
    $query .= " ORDER BY "  . $_GET['sort'] . "$direction";
}



//Pagination 
$page = (int)($_GET['p'] ?? 1);
$offset =  ($page - 1) * PER_PAGE;
$query .= " LIMIT " . PER_PAGE . " OFFSET $offset";

$statement = $pdo->prepare($query);
$statement->execute($params);
$tab = $statement->fetchAll();

//Requete preparée pour la pagination
$statement = $pdo->prepare($queryCount);
$statement->execute($params);
$count = (int)$statement->fetch()['count'];
$pages = ceil($count / PER_PAGE); //ceil toujours valeur supérieur a la virgule , floar = inverse



// dd($count) pour afficher le nombre de page
// dd($utilisateurs); pour afficher le nombre d'utilisateurs
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <title>MindShop</title>
    <link rel="stylesheet" href="./assets/vendors/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/vendors/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="./assets/nav&footer.css" class="css">
    <link rel="stylesheet" href="./assets/utilisateurs.css" class="css">
    <!-- <meta name="viewport"
           content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge"> -->

    <link rel="stylesheet" href="C:/Users/jerem/source/repos/TCProjetWebv2/Acceuil.css" class="css">

    <link Rel="Stylesheet" href="Https://Stackpath.Bootstrapcdn.Com/Bootstrap/4.3.1/Css/Bootstrap.Min.Css">
    <link Rel="Stylesheet" href="Https://Cdnjs.Cloudflare.Com/Ajax/Libs/Font-Awesome/5.9.0/Css/All.Css">

    <script src="./assets/vendors/jquery/jquery-3.6.0.min.js"></script>




</head>

<?php include('nav.php'); ?>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <div class="row">
                    <div class=".col-xl-">
                        <div class="SousUtilisateurs">
                            <div class="Utilisateurs">
                                <h1> Tous les utilisateurs</h1>
                                <form action="">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="q" placeholder="Rechercher par email" value="<?= htmlentities($_GET['q'] ?? null) //htmlentities pour echapper aux injections
                                                                                                                                    ?>">
                                    </div>
                                    <button class="btn btn-primary">Rechercher</button>
                                </form>
                                <table class="table table-strip">
                                    <thead>
                                        <tr>
                                            <th><?= TableHelper::sort('ID_utilisateurs', 'ID_utilisateurs', $_GET) ?></th>
                                            <th>><?= TableHelper::sort('Nom', 'Nom', $_GET) ?></th>
                                            <th>><?= TableHelper::sort('Prenom', 'Prenom', $_GET) ?></th>
                                            <th>><?= TableHelper::sort('email', 'email', $_GET) ?></th>
                                            <th>><?= TableHelper::sort('ville', 'ville', $_GET) ?></th>
                                            <th>><?= TableHelper::sort('Role', 'Role', $_GET) ?></th>
                                            <th>>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        for ($i = 0; $i < count($tab); $i++) {
                                        ?>
                                            <tr>
                                                <td><?= $tab[$i]['ID_utilisateurs'] ?></td>
                                                <td><?= $tab[$i]['Nom'] ?> </td>
                                                <td><?= $tab[$i]['Prenom'] ?></td>
                                                <td><?= $tab[$i]['email'] ?></td>
                                                <td><?= $tab[$i]['Ville'] ?></td>
                                                <td><?= $tab[$i]['Role'] ?> </td>
                                                <td>action </td>
                                            </tr>
                                        <?php } ?>
                                    </tbody>
                                </table>
                                <?php if ($pages > 1 && $page > 1) : ?>
                                    <a href="?<?= URLHelper::withParam($_GET, "p", $page - 1) ?>" class="btn btn-primary"> Page précedente </a>
                                <?php endif ?>
                                <?php if ($pages > 1 && $page < $pages) : ?>
                                    <a href="?<?= URLHelper::withParam($_GET, "p", $page + 1) ?>" class="btn btn-primary"> Page Suivante </a>
                                <?php endif ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php include('footer.php'); ?>


</body>

</html>