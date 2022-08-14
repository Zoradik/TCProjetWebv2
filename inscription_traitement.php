<?php 
    require_once 'config.php'; // On inclu la connexion à la bdd
    
    // Si les variables existent et qu'elles ne sont pas vides
    if(isset($_POST['email']) && isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['ville']) && isset($_POST['identifiant']) && isset($_POST['role']) && isset($_POST['password']) && isset($_POST['password_retype']))
    {
        
        // Patch XSS
        $email = htmlspecialchars($_POST['email']);

        $nom = htmlspecialchars($_POST['nom']); 
        $ville = htmlspecialchars($_POST['ville']);
        $code_postal = htmlspecialchars($_POST['identifiant']); 
        $role = htmlspecialchars($_POST['role']);

        $password = htmlspecialchars($_POST['password']);
        $password_retype = htmlspecialchars($_POST['password_retype']);


        $id_user =  $identifiant;
        
        $code_role = $role[0];

        if ($role == Etudiant){
            $permission = "NON";
        }
        else
        {
            $permission = "OUI";
        }
     
         

        // On vérifie si l'utilisateur existe
        $check = $bdd->prepare('SELECT `Nom`, `Prenom`, `ID_utilisateurs`, `email`, `Ville`, `Mot de passe`, `Role` FROM `utilisateurs` = ?');
        $check->execute(array($email));
        $data = $check->fetch();
        $row = $check->rowCount();

        $email = strtolower($email); // on transforme toute les lettres majuscule en minuscule pour éviter que Foo@gmail.com et foo@gmail.com soient deux compte différents ..
        
        // Si la requete renvoie un 0 alors l'utilisateur n'existe pas 
        if($row == 0){ 
            
                if(strlen($email) <= 100){ // On verifie que la longueur du mail <= 100
                    if(filter_var($email, FILTER_VALIDATE_EMAIL)){ // Si l'email est de la bonne forme
                        if($password === $password_retype){ // si les deux mdp saisis sont bon

                            $password = password_hash($password, PASSWORD_DEFAULT);

                            // On insère dans la base de données



                            $insert_user = $bdd->prepare('INSERT INTO utilisateurs(Nom, Prenom, ID_utilisateurs, email, Ville, Mot de passe, Role,) VALUES(:name, :prenom, :prenom, :id_user, :email, :ville, :password, :role) ');
                            $insert_user->execute(array(
                                'nom' => $nom,
                                'prenom' => $prenom,
                                'id_user' => $id_user,
                                'email' => $email,
                                'ville' => $ville,
                                'password' => $password,
                                'role' => $role,
                            ));
                            


                            // On redirige avec le message de succès
                            
                            header('Location:inscription.php?reg_err=success');

                        }else header('Location: inscription.php?reg_err=password');
                    }else header('Location: inscription.php?reg_err=email');
                }else header('Location: inscription.php?reg_err=email_length');
        }else header('Location: inscription.php?reg_err=already');
    }