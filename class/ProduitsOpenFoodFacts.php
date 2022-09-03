<?php
class OpenFoodFacts
{

    // private $api ;

    // public function __construct(string $api)
    // {
    //     $this->api = $api;
    // }

    public function getForecast(string $id): ?array
    {
        $curl = curl_init("https://world.openfoodfacts.org/api/v2/product/3017620422003");
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
        foreach ($data['product'] as $products) {
            $results =
                [
                    'Nom' => $data["product"]['brands_imported'],
                    'Description' =>  $data["product"]['categories'],
                    'image' => $data["product"]['image_front_small_url']
                ];
        }
        return $results;
    }
}
