<?php
// on va chercher les articles dans la base
// on se connecte a la base
require_once 'config.php';
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <title>MindShop</title>
    <link rel="stylesheet" href="./assets/vendors/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/vendors/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="./assets/nav&footer.css" class="css">
    <link rel="stylesheet" href="./assets/Acceuil.css" class="css">
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
                <br>
                <div class="row">
                    <div class=".col-xl-">
                        <div class="onestlabis">
                            <div class="twitter">
                                <table class="table table-strip">
                                    <thead>
                                        <tr>
                                            <th>ID_utilisateurs</th>
                                            <th>Nom</th>
                                            <th>Prenom</th>
                                            <th>email</th>
                                            <th>Ville</th>
                                            <th>Role</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>ID_utilisateurs 1</td>
                                            <td>Nom 1</td>
                                            <td>Prenom 1</td>
                                            <td>email 1</td>
                                            <td>ville 1</td>
                                            <td>role </td>
                                            <td>action </td>
                                        </tr>
                                    </tbody>
                                </table>
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