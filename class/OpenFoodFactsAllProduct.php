<?php
// class OpenFoodFactsAllProduct
// {

    // private $api ;

    // public function __construct(string $api)
    // {
    //     $this->api = $api;
    // }

   // public function getForecast(string $id): ?array
    //{
        if ($x = $_GET['p'] == NULL){
            $x = 1;
        }
        else {
            $x = $_GET['p'];
        }
        $lien = "https://world.openfoodfacts.org/?json=true&page=$x&page_size=10";
        // var_dump($lien);
        $curl = curl_init($lien);
        curl_setopt_array($curl, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CAINFO         => dirname(__DIR__) . DIRECTORY_SEPARATOR . 'cert.cer',
            CURLOPT_TIMEOUT        => 10
        ]);
        $data = curl_exec($curl);
        if ($data === false || curl_getinfo($curl, CURLINFO_HTTP_CODE) !== 200) {
            return null;
        }
        $results = [];
        $data = json_decode($data, true);
        // var_dump($data );
        // foreach ($data['products'] as $products) {
            
    //             $results  =
    //                 [
    //                     'ID0'  => $data["products"]['0']['product_name'],
    //                     'Nom0'  => $data["products"]['0']['brands_imported'],
    //                     'Marque0'  => $data["products"]['0']['brands'],
    //                     'ID1'  => $data["products"]['1']['product_name'],
    //                     'Nom1'  => $data["products"]['1']['brands_tags']['0'],
    //                     'Marque1'  => $data["products"]['1']['brands'],
    //                     'ID2'  => $data["products"]['2']['_id'],
    //                     'Nom2'  => $data["products"]['2']['brands_tags']['0'],
    //                     'Marque2'  => $data["products"]['2']['brands'],
    //                     'ID3'  => $data["products"]['3']['_id'],
    //                     'Nom3'  =>$data["products"]['3']['brands_tags']['0'],
    //                     'Marque3'  => $data["products"]['3']['brands'],
    //                     'ID4'  => $data["products"]['4']['_id'],
    //                     'Nom4'  => $data["products"]['4']['brands_imported'],
    //                     'Marque4'  => $data["products"]['4']['brands'],
    //                     'ID5'  => $data["products"]['5']['_id'],
    //                     'Nom5'  => $data["products"]['5']['brands_tags']['0'],
    //                     'Marque5'  => $data["products"]['5']['brands'],
    //                     'ID6'  => $data["products"]['6']['_id'],
    //                     'Nom6'  => $data["products"]['6']['brands_tags']['0'],
    //                     'Marque6'  => $data["products"]['6']['brands'],
    //                     'ID7'  => $data["products"]['7']['_id'],
    //                     'Nom7'  => $data["products"]['7']['brands_tags']['0'],
    //                     'Marque7'  => $data["products"]['7']['brands'],
    //                     'ID8'  => $data["products"]['8']['_id'],
    //                     'Nom8'  => $data["products"]['8']['brands_imported'],
    //                     'Marque8'  => $data["products"]['8']['brands'],
    //                     'ID9'  => $data["products"]['9']['_id'],
    //                     'Nom9'  => $data["products"]['9']['brands'],
    //                     'Marque9'  => $data["products"]['9']['brands_imported'],
    //                     'ID10' => $data["products"]['10']['_id'],
    //                     'Nom10'  => $data["products"]['10']['brands_tags']['0'],
    //                     'Marque10'  => $data["products"]['10']['brands'],
    //                     'ID11' => $data["products"]['11']['_id'],
    //                     'Nom11'  => $data["products"]['11']['_keywords']['1'],
    //                     'Marque11'  => $data["products"]['11']['brands'],
    //                     'ID12' => $data["products"]['12']['_id'],
    //                     'Nom12'  => $data["products"]['12']['categories'],
    //                     'Marque12'  => $data["products"]['12']['brands'],
    //                     'ID13' => $data["products"]['13']['_id'],
    //                     'Nom13'  => $data["products"]['13']['categories'],
    //                     'Marque13'  => $data["products"]['13']['brands'],
    //                     'ID14' => $data["products"]['14']['_id'],
    //                     'Nom14'  => $data["products"]['14']['_keywords']['32'],
    //                     'Marque14'  => $data["products"]['14']['brands'],
    //                     'ID15' => $data["products"]['15']['_id'],
    //                     'Nom15'  => $data["products"]['15']['brands_tags']['0'],
    //                     'Marque15'  => $data["products"]['15']['brands'], 
    //                     'ID16' => $data["products"]['16']['_id'],
    //                     'Nom16'  => $data["products"]['16']['brands_tags']['0'],
    //                     'Marque16'  => $data["products"]['16']['brands'],
    //                     'ID17' => $data["products"]['17']['_id'],
    //                     'Nom17'  => $data["products"]['17']['_keywords']['10'],
    //                     'Marque17'  => $data["products"]['17']['brands'],
    //                     'ID18' => $data["products"]['18']['_id'],
    //                     'Nom181'  => $data["products"]['18']['_keywords']['14'],
    //                     'Nom182'  => $data["products"]['18']['_keywords']['24'],
    //                     'Nom183'  => $data["products"]['18']['_keywords']['21'],
    //                     'Marque18'  => $data["products"]['18']['brands'],
    //                     'ID19' => $data["products"]['19']['_id'],
    //                     'Nom19'  => $data["products"]['19']['_keywords']['29'],
    //                     'Marque19'  => $data["products"]['19']['brands'],
    //                     'ID20' => $data["products"]['20']['_id'],
    //                     'Nom20'  => $data["products"]['20']['brands'],
    //                     'Marque20'  => $data["products"]['20']['brands'],
    //                     'ID21' => $data["products"]['21']['_id'],
    //                     'Nom211'  => $data["products"]['21']['_keywords']['3'],
    //                     'Nom212'  => $data["products"]['21']['_keywords']['0'],
    //                     'Nom213'  => $data["products"]['21']['_keywords']['17'],
    //                     'Marque21'  => $data["products"]['21']['brands'],
    //                     'ID22' => $data["products"]['22']['_id'],
    //                     'Nom221'  => $data["products"]['22']['_keywords']['64'],
    //                     'Nom222'  => $data["products"]['22']['_keywords']['17'],
    //                     'Nom223'  => $data["products"]['22']['_keywords']['68'],
    //                     'Marque22'  => $data["products"]['22']['brands'],
    //                     'ID23' => $data["products"]['23']['_id'],
    //                     'Nom231'  => $data["products"]['23']['_keywords']['5'],
    //                     'Nom232'  => $data["products"]['23']['_keywords']['2'],
    //                     'Marque23'  => $data["products"]['23']['brands'],



    //                 ];
    //         }
        
    //     return $results;
    // }
// }
