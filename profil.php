<?php
$nom = null;
$prenom = null;
$ID = null;
$email = null;
$ville = null;

if (!empty($_GET['action']) && $_GET['action'] === 'deconnecter') {
    unset($_COOKIE['id_user']);
    setcookie('nom', '', time() - 10);
    setcookie('prenom', '', time() - 10);
    setcookie('id_user', '', time() - 10);
    setcookie('email', '', time() - 10);
    setcookie('ville', '', time() - 10);
    setcookie('role', '', time() - 10);
    setcookie('PHPSESSID', '', time() - 10);
}



if (!empty($_COOKIE['id_user'])) {
    $nom = $_COOKIE['nom'];
    $prenom = $_COOKIE['prenom'];
    $ID = $_COOKIE['id_user'];
    $email = $_COOKIE['email'];
    $ville = $_COOKIE['ville'];
}

if (!empty($_POST['id_user'])) {
    setcookie('id_user', $_POST['id_user']);
    $nom = $_POST['id_user'];
    $prenom = $_POST['id_user'];
    $ID = $_POST['id_user'];
    $email = $_POST['id_user'];
    $ville = $_POST['id_user'];
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
    <link rel="stylesheet" href="./assets/profil.css" class="css">


    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">




</head>

<body>

    <?php include('nav.php'); ?>

    <!-- Upper right form-->
    <div class="container-fluid">
        <!-- Account page navigation-->

        <hr class="pp">
        <div class="row justify-content-center">
            <div class="col-xl-3">
                <div class="card border-0 shadow-lg pt-4 my-5 ">

                    <!-- Profile picture card-->
                    <div class="card">
                        <div class="card-header">Photo de profil</div>
                        <div class="card-body text-center">
                            <!-- Profile picture image-->
                            <img class="img-account-profile rounded-circle mb-2" src="image/UF3cgUk4_400x400.png" width="auto" height="auto" alt="">
                            <!-- Profile picture help block-->
                            <div class="text-dark font-weight-bold mb-4">En vrai???</div>
                            <!-- Profile picture upload button-->
                            <button class="btn btn-danger" type="button">Changer ma photo de profil</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-8">
                <div class="card border-0 shadow-lg pt-4 my-5 ">

                    <!-- Account details card-->
                    <div class="card">
                        <div class="card-header">Details du compte</div>
                        <div class="card-body">
                            <form>
                                <!-- Form Group (username)-->

                                <!-- Form Row-->
                                <div class="row">
                                    <!-- Form Group (first name)-->
                                    <div class="col">
                                        <label class="text-dark font-weight-bold" for="inputFirstName">Nom</label>
                                        <section class="profil">
                                            <div class="card-text">
                                                <?php if ($nom) : ?>
                                                    <div class="text-center"><?= htmlentities($nom) ?></div>
                                                <?php endif; ?>
                                            </div>
                                        </section>
                                    </div>
                                    <!-- Form Group (last name)-->
                                    <div class="col">
                                        <label class="text-dark font-weight-bold" for="inputLastName">Pr??nom</label>
                                        <section class="profil">
                                            <div class="card-text">
                                                <?php if ($prenom) : ?>
                                                    <div class="text-center"><?= htmlentities($prenom) ?></div>
                                                <?php endif; ?>
                                            </div>
                                        </section>
                                    </div>
                                </div>


                                <!-- Form Row        -->
                                <div class="row">
                                    <div class="col">
                                        <label class="text-dark font-weight-bold" for="inputUsername">Adresse email</label>
                                        <section class="profil">
                                            <div class="card-text">
                                                <?php if ($email) : ?>
                                                    <div class="text-center"><?= htmlentities($email) ?></div>
                                                <?php endif; ?>
                                            </div>
                                        </section>
                                    </div>
                                </div>





                                <!-- Form Row        -->
                                <div class="row">
                                    <!-- Form Group (location)-->
                                    <div class="col">
                                        <label class="text-dark font-weight-bold" for="inputLocation">Ville</label>
                                        <section class="profil">
                                            <div class="card-text">
                                                <?php if ($ville) : ?>
                                                    <div class="text-center"><?= htmlentities($ville) ?></div>
                                                <?php endif; ?>
                                            </div>
                                        </section>
                                    </div>
                                    <div class="col">
                                        <label class="text-dark font-weight-bold" for="inputLocation">Identifiant</label>
                                        <section class="profil">
                                            <div class="card-text">
                                                <?php if ($ID) : ?>
                                                    <div class="text-center"><?= htmlentities($ID) ?></div>
                                                <?php endif; ?>
                                            </div>
                                        </section>
                                    </div>
                                </div>


                                <!-- Form Row       -->
                                <!-- Save changes button-->
                                <!--<button class="btn btn-danger" type="button">Sauvegarder???</button>-->
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    </div>
    <div class="row">
        <div class="col">
        </div>
        <div class="col">
            <a href="profil.php?action=deconnecter" class="btn-danger btn-lg"> D&eacuteconnexion </a>
            <a href="update.php?Utilisateurs_ID=<?= $ID ?>" class="btn-danger btn-lg"> Modifier le profil </a>
        </div>
        <div class="col">
        </div>
    </div>
    <br>


    <?php include('footer.php'); ?>

    <!-- Upper right form-->
</body>

</html>