<?php 
    require_once 'config.php'; // On inclu la connexion à la bdd
    
    // Si les variables existent et qu'elles ne sont pas vides
    if(isset($_POST['email']) && isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['ville']) && isset($_POST['ID_user'])  && isset($_POST['password']) && isset($_POST['password_retype']))
    {
        $User_id = $_GET['Utilisateurs_ID'];
        $email = htmlspecialchars($_POST['email2']);
        $nom = htmlspecialchars($_POST['nom2']);
        $prenom = htmlspecialchars($_POST['prenom2']); 
        $ville = htmlspecialchars($_POST['ville2']); 
        $ID_user = htmlspecialchars($_POST['ID_user2']);
        $password = htmlspecialchars($_POST['password2']); 
        $password_retype = htmlspecialchars($_POST['password_retype2']); 
        $Role = htmlspecialchars($_POST['Role2']); 


             // On vérifie si l'utilisateur existe
        $check = $bdd->prepare('SELECT Nom, Prenom, ID_utilisateurs, email, Ville, Mot_de_passe, Role FROM utilisateurs WHERE ID_utilisateur =  ?');
        $check->execute(array($ID_user));
        $data = $check->fetch();
        $row = $check->rowCount();

        
        
        // Si la requete renvoie un 0 alors l'utilisateur n'existe pas 
        if($row == 1){ 
           


            $select = $bdd->query("UPDATE FROM utilisateurs WHERE F='" . $User_id . "'");
            $donnees = $select->fetch();

            $User_id = $donnees['0'];


                            $insert_localites = $bdd->prepare('UPDATE utilisateurs SET (Nom, Prenom, ID_utilisateurs, email, Ville, Mot_de_passe, Role) VALUES (:nom, :prenom, :ID_user, :email, :ville,  :passwords, :ADM)');
                            $insert_localites->execute(array(
                                'nom' => $nom,
                                'prenom' => $prenom,   
                                'ID_user' => $ID_user,
                                'email' => $email,
                                'ville' => $ville,
                                'passwords' => $password,
                                'ADM' => $role,
                            ));


                            


                            // On redirige avec le message de succès
                            
                            header('Location:update.php?id='.$ID_user.'');

            }else header('Location: update.php?reg_err=note');
        }else header('Location: update.php?reg_err=already');
    