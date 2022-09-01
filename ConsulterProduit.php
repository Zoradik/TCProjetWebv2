<?php

include 'Consulter_traitement.php';

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
                                    <h1> Ajouter le produit</h1>
                                    <form method='post'>
                                        <div class="form-group">
                                            <br>
                                            <input type="submit" class="form-control" name="Ajouter" method='post'>
                                            <br>
                                            <h2>
                                                Ajoutez a la liste de course :
                                            </h2>
                                            <br>
                                            </input>
                                            <thead>
                                                <select name="NomListe" method='post'>
                                                    <?php
                                                    for ($i = 0; $i < count($NomListesResult); $i++) {
                                                    ?>
                                                        <tr>
                                                            <td><?= $NomListesResult[$i]['NomListe'] ?></td>
                                                            <option value="<?= $NomListesResult[$i]['NomListe'] ?>"><?= $NomListesResult[$i]['NomListe'] ?></option>
                                                            <!-- <td><a href='/update.php?Utilisateurs_ID=<? //= $tab[$i]['ID_utilisateurs'] 
                                                                                                            ?>'>
                            <button class="btn btn-dark" type="button">Update</button> </td>
                    <td><a href='/delete.php?Utilisateurs_ID=<? //= $tab[$i]['ID_utilisateurs'] 
                                                                ?>'>
                            <button class="btn btn-dark" type="button">Supprimer</button> </td> -->
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