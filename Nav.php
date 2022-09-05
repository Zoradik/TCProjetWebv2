<?php
$ID = null;
$role = null;

if (!empty($_COOKIE['id_user'])) {
    $ID = $_COOKIE['id_user'];
    $role = $_COOKIE['Role'];
}

if (!empty($_POST['id_user'])) {
    setcookie('id_user', $_POST['id_user']);
    $ID = $_POST['id_user'];
    $role = $_POST['Role'];
}
?>


<!-- Barre de navigation -->
<nav>
    <div class="container-fluid header">
        <div class="row" style="background-color: #000000;">
            <div class="col-lg-2 barnav">
                <img class="logo" src="Logo/LogoMindShop.png" alt="LOGO">
            </div>
            <div class="col-lg-3 barnav">
            </div>
            <div class="col-lg-4 barnav">
                <div align="right">
                    <?php if ($role == 'ADM') : ?>
                        <input class="style-button" type="button" value="Utilisateurs" onclick="window.location.href='Utilisateurs.php';">

                    <?php endif; ?>
                    <input class="style-button" type="button" value="Accueil" onclick="window.location.href='Accueil.php';">
                    <?php if ($ID !== null) : ?>
                        <input class="style-button" type="button" value="Listes de Produit" onclick="window.location.href='ListesdeProduit.php?p=1';">
                        <input class="style-button" type="button" value="Listes de Courses" onclick="window.location.href='ListesdeCourses.php';">
                    <?php endif; ?>
                </div>
            </div>

            <div class="col-lg-1 barnav">
                <div align="right">
                    <li>
                        <?php if ($ID) : ?>
                            <a href="profil.php" style="color: #a2c4c9; " class="link"><?= htmlentities($ID) ?></a>
                        <?php elseif ($ID == null) : ?>

                            <a href="Inscription.php" style="color: #a2c4c9; " class="link">S'inscrire</a>
                    </li>
                    <li>
                        <a href="Connexion.php" style="color: #a2c4c9; " class="link">Connexion</a>
                    </li>
                <?php endif; ?>

                </div>

            </div>
        </div>
    </div>
</nav>

<br />
<!-- Barre de navigation -->