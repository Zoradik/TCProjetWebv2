<?php
$curl = curl_init('https://world.openfoodfacts.org?json=true');
curl_setopt($curl, CURLOPT_CAINFO, __DIR__ . DIRECTORY_SEPARATOR . 'cert.cer');
$data = curl_exec($curl) ;
if ($data === false){
    var_dump(curl_error($curl));
} else {

}
curl_close($curl);