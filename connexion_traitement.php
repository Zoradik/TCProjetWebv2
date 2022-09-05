<?php
session_start(); // Démarrage de la session
$_SESSION['role'] = 'ADM';
require_once 'config.php'; // On inclut la connexion à la base de données

if (isset($_POST['email'])  && isset($_POST['password'])) // Si il existe les champs email, password et qu'il sont pas vident
{
    // Patch XSS
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);


    $email = strtolower($email); // email transformé en minuscule




    // On regarde si l'utilisateur est inscrit dans la table utilisateurs
    $check = $bdd->prepare('SELECT * FROM utilisateurs WHERE email = ?');
    $check->execute(array($email));
    $data = $check->fetch();
    $row = $check->rowCount();

    // Si > � 0 alors l'utilisateur existe
    if ($row == 1) {
        // Si le mail est bon niveau format
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

            // $password = hash('sha512', $password);

            // if($data['Mot_de_passe'] === $password)
            // {
            //     $_SESSION['user'] = $data['email'];
            //     header('Location:landing.php');

            // }else echo $password;
            //         echo $data['mot_de_passe'];


            // Si le mot de passe est le bon


            $id_user = $data['ID_utilisateurs'];
            // $profil_user = $data['ID_utilisateurs'];
            $prenom = $data['Prenom'];
            $nom = $data['Nom'];
            $email = $data['email'];
            $ville = $data['Ville'];
            $role = $data['Role'];

            $hash = $data['Mot_de_passe'];

            if (password_verify($password, $hash)) {
                //$_SESSION['user'] = $profil_user;
                $cookieFin = time() + 60 * 60 * 24;
                setcookie("id_user", $id_user, $cookieFin);
                //setcookie("user", $profil_user, $cookieFin);
                setcookie("prenom", $prenom, $cookieFin);
                setcookie("nom", $nom, $cookieFin);
                setcookie("email", $email, $cookieFin);
                setcookie("ville", $ville, $cookieFin);
                setcookie("Role", $role, $cookieFin);


                header('Location:Accueil.php');
            } else header('Location: Connexion.php?login_err=password');
        } else header('Location: Connexion.php?login_err=email');
    } else header('Location: Connexion.php?login_err=already');
} else header('Location: Connexion.php');
