<?php


$motcle = $_GET['q'];
$nombrepage = (int)(1);

 $curl = curl_init(" https://fr.openfoodfacts.org/categorie/'$motcle'?json?page='$nombrepage'");
 curl_setopt_array($curl, [
     CURLOPT_RETURNTRANSFER => true,
     CURLOPT_CAINFO         => dirname(__DIR__) . DIRECTORY_SEPARATOR . 'cert.cer',
     CURLOPT_TIMEOUT        => 10
 ]);
 $dataRE = curl_exec($curl);
 if ($dataRE === false || curl_getinfo($curl, CURLINFO_HTTP_CODE) !== 200) {
     return null;
 }
 $results = [];
 $dataRE = json_decode($dataRE, true);