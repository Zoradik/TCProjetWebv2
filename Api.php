<?php
$curl = curl_init('https://world.openfoodfacts.org/api/v2/product/{3017620422003}');
curl_setopt_array($curl, [
    CURLOPT_CAINFO         => __DIR__ . DIRECTORY_SEPARATOR . 'cert.cer',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 10
]);
$data = curl_exec($curl);
if ($data === false) {
    var_dump(curl_error($curl));
} else {
    if (curl_getinfo($curl, CURLINFO_HTTP_CODE)) {
        $data = json_decode($data, true);

        echo 'Produit disponibles : ' . $data["product"]['brands_imported'];
    }
}
curl_close($curl);
