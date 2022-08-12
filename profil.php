

<!doctype html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<title>MindShop</title>
	<link rel="stylesheet" href="./assets/vendors/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="./assets/vendors/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="./assets/nav&footer.css" class="css">
    <link rel="stylesheet" href="./assets/profil.css" class="css">


    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
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
                                <label class="text-dark font-weight-bold" for="inputFirstName">Pr&eacutenom</label>
                                <section class="profil">
                                <div class="card-text">
						            <div class="text-center">yes</div>
                                </div>  
                                </section>
                            </div>
                            <!-- Form Group (last name)-->
                            <div class="col">
                                <label class="text-dark font-weight-bold" for="inputLastName">Nom</label>
                                <section class="profil">
                                <div class="card-text">
						            <div class="text-center">yes</div>
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
						            <div class="text-center">yes</div>
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
						            <div class="text-center">yes</div>
                                </div>  
                                </section>
                            </div>
                            <div class="col">
                                <label class="text-dark font-weight-bold" for="inputLocation">Identifiant</label>
                                <section class="profil">
                                <div class="card-text">
						            <div class="text-center">yes</div>
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
        <a href="deconnexion.php" class="btn-danger btn-lg"> D&eacuteconnexion </a>
        <a href="ModifierProfil.php" class="btn-danger btn-lg"> Modifier le profil </a>
    </div>
    <div class="col">
    </div>
</div>
<br>


<?php include('footer.php'); ?>

<!-- Upper right form-->
</body>
</html>
