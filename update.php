<?php
require_once 'config.php';
include 'update_traitement.php';
?>

<!doctype html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <title>Mindshop</title>
    <link rel="stylesheet" href="./assets/vendors/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/vendors/fontawesome/css/all.min.css">

    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="./assets/nav&footer.css" class="css">
    <link rel="stylesheet" href="./assets/inscription.css" class="css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://vicopo.selfbuild.fr/vicopo-jquery.js"></script>

</head>

<body>
    <?php include('nav.php'); ?>
    <div class="login-form">

        <?php
        if (isset($_GET['reg_err'])) {
            $err = htmlspecialchars($_GET['reg_err']);

            switch ($err) {
                case 'success':
        ?>
                    <div class="alert alert-success">
                        <strong>Succés</strong> inscription réussie !
                    </div>
                <?php
                    break;

                case 'password':
                ?>
                    <div class="alert alert-danger">
                        <strong>Erreur</strong> mot de passe différent
                    </div>
                <?php
                    break;

                case 'email':
                ?>
                    <div class="alert alert-danger">
                        <strong>Erreur</strong> email non valide
                    </div>
                <?php
                    break;

                case 'email_length':
                ?>
                    <div class="alert alert-danger">
                        <strong>Erreur</strong> email trop long
                    </div>
                <?php
                    break;

                case 'already':
                ?>
                    <div class="alert alert-danger">
                        <strong>Erreur</strong> compte deja existant
                    </div>
        <?php

            }
        }
        ?>

        <div class="container-fluid ">

            <div class="section">
                <div class="row text">

                    <div class="col-6 slogan">
                        <fieldset class="form1">
                            <legend><b>Modification du profil choisi</b></legend>
                            <form class="needs-validation" method="post">

                                <div class="row">

                                    <div class="col-md-4 mb-3">
                                        <label for="validationCustom01" class="label">Nom </label>
                                        <input type="text" value=<?= $nom ?> name="nom" class="form-control" id="validationCustom01" placeholder="NOM" required>
                                        <div class="invalid-feedback">
                                            Merci d'indiquer votre NOM.
                                        </div>

                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label for="validationCustom02">Pr&eacutenom</label>
                                        <input type="text" value=<?= $prenom ?> name="prenom" class="form-control" id="validationCustom02" placeholder="Prénom" required>
                                        <div class="invalid-feedback">
                                            Merci d'indiquer votre prenom.
                                        </div>
                                    </div>

                                </div>

                                <div class="row">
                                    <div class="col-md-4 mb-3">
                                        <label for="validationCustom04">Identifiant</label>
                                        <input type="text" value="<?= $User_id ?>" name="ID_user" class="form-control" id="validationCustom04" placeholder="Identifiant" required>
                                        <div class="invalid-feedback">
                                            Merci d'indiquer votre Identifiant.
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-4 mb-3">
                                        <label for="validationCustom04">Adresse mail</label>
                                        <input type="text" value="<?= $email ?>" name="email" class="form-control" id="validationCustom04" placeholder="Adresse mail" required>
                                        <div class="invalid-feedback">
                                            Merci d'indiquer votre Adresse mail.
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">

                                        <div>
                                            <label for="validationCustom04">Adresse</label>
                                            <input class="form-control" id="code" placeholder="Code postal">
                                            <input class="form-control" value=<?= $ville ?> id="ville" placeholder="Ville" name="ville">
                                        </div>
                                        <li data-vicopo="#ville, #code" data-vicopo-click='{"#code": "code","#ville": "ville"}'>
                                            <span data-vicopo-ville></span>
                                            <strong data-vicopo-code-postal></strong>
                                        </li>

                                        <?php if ($role == 'ADM') : ?>

                                            <div class="form-group col-md-8">
                                                <label for="validationCustom11">Quel est votre rôle?</label>
                                                <select id="choixCategorie" name="role" class="form-select" id="validationCustom11" required>
                                                    <option selected disabled value="">....</option>
                                                    <option value="STD">STD</option>
                                                    <option value="ADM">ADM</option>
                                                </select>
                                                <div class="invalid-feedback">
                                                    Merci d'indiquer votre Rôle.
                                                </div>
                                            <?php endif; ?>
                                            </div>

                                    </div>

                                    <button class="btn btn-primary" type="submit">Modifier le profil</button>
                            </form>
                        </fieldset>
                    </div>

                    <div class="col-4 slogan"></div>
                </div>
            </div>
        </div>
    </div>

    </div>


    <?php include('footer.php'); ?>

</body>

</html>