<?php 
    require_once 'config.php'; // On inclu la connexion à la bdd
    
    // Si les variables existent et qu'elles ne sont pas vides
    if(isset($_POST['email']) && isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['ville']) && isset($_POST['ID_user'])  && isset($_POST['password']) && isset($_POST['password_retype']))
    //&& isset($_POST['role'])
    {
        
        // Patch XSS
        
        $nom = htmlspecialchars($_POST['nom']); 
        $prenom = htmlspecialchars($_POST['prenom']);
        $ID_user = htmlspecialchars($_POST['ID_user']);
        $email = htmlspecialchars($_POST['email']);
        $ville = htmlspecialchars($_POST['ville']);
        //$role = htmlspecialchars($_POST['role']);
        $role = htmlspecialchars('STD');
        $password = htmlspecialchars($_POST['password']);
        $password_retype = htmlspecialchars($_POST['password_retype']);


      //   $ID_user =  $identifiant;
        
      //   $code_role = $role[0];

      //   if ($role == Etudiant){
      //       $permission = "NON";
      //   }
      //   else
      //   {
      //       $permission = "OUI";
      //   }
     
         

      // On vérifie si l'utilisateur existe
       $check = $bdd->prepare('SELECT Nom, Prenom, ID_utilisateurs, email, Ville, Mot_de_passe, Role FROM utilisateurs WHERE ID_utilisateurs =  ?');
       $check->execute(array($ID_user));
       $data = $check->fetch();
       $row = $check->rowCount();

       $email = strtolower($email); // on transforme toute les lettres majuscule en minuscule pour éviter que Foo@gmail.com et foo@gmail.com soient deux compte différents ..
        
       // Si la requete renvoie un 0 alors l'utilisateur n'existe pas 
       if($row == 0){ 
            
               if(strlen($email) <= 100){ // On verifie que la longueur du mail <= 100
                   if(filter_var($email, FILTER_VALIDATE_EMAIL)){ // Si l'email est de la bonne forme
                       if($password === $password_retype){ // si les deux mdp saisis sont bon

                           $password = password_hash($password, PASSWORD_DEFAULT);

                          //  On insère dans la base de données



                            $insert_user = $bdd->prepare('INSERT INTO utilisateurs (Nom, Prenom, ID_utilisateurs, email, Ville, Mot_de_passe, Role) VALUES (:nom, :prenom, :ID_user, :email, :ville,  :passwords, :ADM)');
                           // var_dump($insert_user);
                           // echo"Nom";
                            $insert_user->execute(array(
                                'nom' => $nom,
                                'prenom' => $prenom,   
                                'ID_user' => $ID_user,
                                'email' => $email,
                                'ville' => $ville,
                                'passwords' => $password,
                                'ADM' => $role,
                            ));
                            


                           // On redirige avec le message de succées
                            
                           header('Location:inscription.php?reg_err=success');

                       }else header('Location: inscription.php?reg_err=password');
                   }else header('Location: inscription.php?reg_err=email');
               }else header('Location: inscription.php?reg_err=email_length');
       }else header('Location: inscription.php?reg_err=already');
 }
 ?>
