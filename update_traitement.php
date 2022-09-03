<?php 
    require_once 'config.php'; // On inclu la connexion à la bdd
    // Si les variables existent et qu'elles ne sont pas vides
    $User_id = $_GET['Utilisateurs_ID'];

    $check = $bdd->prepare("SELECT * FROM utilisateurs WHERE ID_utilisateurs='" . $User_id . "'");
    $check->execute();
    $data = $check->fetchAll();
    // var_dump($data);

    $nom = $data[0]['Nom'];
    $prenom = $data[0]['Prenom'];
    $ville = $data[0]['Ville'];
    $ID = $data[0]['ID_utilisateurs'];
    $email = $data[0]['email'];
    $role = $data[0]['Role'];

    if(isset($_POST['email']) && isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['ville']) && isset($_POST['ID_user']) )
    {

        $email = htmlspecialchars($_POST['email']);
        $nom = htmlspecialchars($_POST['nom']);
        $prenom = htmlspecialchars($_POST['prenom']); 
        $ville = htmlspecialchars($_POST['ville']); 
        $ID = htmlspecialchars($_POST['ID_user']);
        // if ($role == 'ADM') : 
        //     $role = htmlspecialchars($_POST['role']);
        // endif; 
var_dump($role);

                    // if ($role == 'ADM') : 
                    //     $result = $bdd->prepare("UPDATE `utilisateurs` SET `Nom` = '$nom', `prenom` = '$prenom', `ville` = '$ville',`email` = '$email', `ID_utilisateurs` = '$ID', `Role` = '$role' WHERE `utilisateurs`.`ID_utilisateurs` = '$User_id'");

                    // endif; 
                              $result = $bdd->prepare("UPDATE `utilisateurs` SET `Nom` = '$nom', `prenom` = '$prenom', `ville` = '$ville',`email` = '$email', `ID_utilisateurs` = '$ID'   WHERE `utilisateurs`.`ID_utilisateurs` = '$User_id'");

                            // $result = $bdd->prepare("UPDATE utilisateurs SET ID_utilisateurs = $ID_user, Nom =$nom, Prenom =$prenom,email= $email Ville=$ville WHERE $User_id ");
                            $result->execute();

                            


                            // On redirige avec le message de succès
                            
                            header('Location:update.php?Utilisateurs_ID='.$ID.'');

        //     }else header('Location: update.php?reg_err=note');
        // }else header('Location: update.php?reg_err=already');
                        // }}
    }