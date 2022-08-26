<?php 
    require_once 'config.php'; // On inclu la connexion à la bdd
    
    // Si les variables existent et qu'elles ne sont pas vides
    if(isset($_POST['email']) && isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['ville']) && isset($_POST['ID_user'])  && isset($_POST['password']) && isset($_POST['password_retype']))
    {
        $User_id = $_GET['Utilisateurs_ID'];
        $email = htmlspecialchars($_POST['email2']);
        $nom = htmlspecialchars($_POST['nom2']);

        /*$logo_entreprise = htmlspecialchars($_POST['logo_entreprise']);*/
        $prenom = htmlspecialchars($_POST['prenom2']); 
        $ville = htmlspecialchars($_POST['ville2']); 
        $ID_user = htmlspecialchars($_POST['ID_user2']);
        $password = htmlspecialchars($_POST['password2']); 
        $password_retype = htmlspecialchars($_POST['password_retype2']); 


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


                            $insert_utilisateur = $bdd->prepare('UPDATE utilisateurs SET Code_postal = :code_postal, Rue = :rue, Ville = :ville, Numero_de_voie = :voie WHERE ID_localites = :insert_utilisateur ');
                            $insert_utilisateur->execute(array(
                                'code_postal' => $code_postal,
                                'rue' => $rue,
                                'ville' => $ville,
                                'voie' => $voie,
                                'id_localites' => $id_localites,
                            ));


                            $insert_entreprise = $bdd->prepare('UPDATE entreprises SET Nom_entreprises = :nom_entreprise, Description_de_l_entreprise = :description_entreprise, Secteur_D_avctivite = :secteur_activite, Nombres_de_stagiaires_CESI_deja_acceptes_en_stage = :nb_stagiaire_accepte, Confiance_Pilotes_de_promotion = :confiance_pilote WHERE 	ID_entreprises = :id_entreprise ');
                            $insert_entreprise->execute(array(
                                'nom_entreprise' => $nom_entreprise,
                                'description_entreprise'=> $description_entreprise,
                                'secteur_activite' => $secteur_activite,
                                'nb_stagiaire_accepte' => $nb_stagiaire_accepte,               
                                'confiance_pilote' => $confiance_pilote,            
                                'id_entreprise' => $id_entreprise,
                            ));

                            


                            // On redirige avec le message de succès
                            
                            header('Location:modification_entreprise.php?id='.$id_entreprise.'');

            }else header('Location: creation_entreprise.php?reg_err=note');
        }else header('Location: creation_entreprise.php?reg_err=already');
    