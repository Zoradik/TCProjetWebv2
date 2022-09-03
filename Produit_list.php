<?php

include 'Produit_list_traitement.php';

?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <title>MindShop</title>
    <link rel="stylesheet" href="./assets/vendors/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/vendors/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="./assets/nav&footer.css" class="css">
    <link rel="stylesheet" href="./assets/ConsulterProduit.css" class="css">
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
                        <div class="SousCourses">
                            <div class="Courses">
                                <div class="scrollertw">
                                    <br>
                                    <h1> Supprimer le produit de la liste de course :</h1>
                                    <form method='post'>
                                        <div class="form-group">
                                            <br>
                                            <input type="submit" class="form-control" name="Delete" value="Supprimer" method='post'>
                                            <br>
                                            <h2>
                                                Choisissez le produit que vous souhaitez supprimer  :
                                            </h2>
                                            <br>
                                            </input>
                                            <thead>
                                                <select name="NomProduit" method='post'>
                                                    <?php
                                                    // var_dump($NomListesResult);
                                                    for ($i = 0; $i < count($NomListesResult); $i++) {
                                                    ?>
                                                        <tr>
                                                            <td><?= $NomListesResult[$i]['ID_produit'] ?></td>
                                                            <option value="<?= $NomListesResult[$i]['ID_produit'] ?>"><?= $NomListesResult[$i]['ID_produit'] ?></option>

                                                        </tr>
                                                        </br>
                                                    <?php } ?>

                                                </select>
                                            </thead>
                                        </div>
                                    </form>
                                    <?php include('footer.php'); ?>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>