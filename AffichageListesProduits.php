<?php
require_once 'config.php';
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

   




    <footer>
       <?php include('footer.php'); ?>
    </footer>
</body>

</html>