<?php 
        /*
           Attention ! le host => l'adresse de la base de donn�es et non du site !!
        
           Pour ceux qui doivent sp�cifier le port ex : 
           $bdd = new PDO("mysql:host=CHANGER_HOST_ICI;dbname=CHANGER_DB_NAME;charset=utf8;port=3306", "CHANGER_LOGIN", "CHANGER_PASS");
           
         */


    try 
    {
        $bdd = new PDO("mysql:host=MindShop.com;dbname=tcweb;charset=utf8", "root", "");

   
    }
    catch(PDOException $e)
    {
        die('Erreur : '.$e->getMessage());
    }
