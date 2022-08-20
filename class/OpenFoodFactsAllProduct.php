<?php
class OpenFoodFactsAllProduct
{

    // private $api ;

    // public function __construct(string $api)
    // {
    //     $this->api = $api;
    // }

    public function getForecast(string $id): ?array
    {
        $x = 0;
        $curl = curl_init("https://world.openfoodfacts.org/?json=true");
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
        foreach ($data['products'] as $products) {
            while ($x <= $data["page_size"]) {

                $results  =
                    [
                        'Nom0'  => $data["products"]['0']['brands_tags']['0'],
                        'Nom1'  => $data["products"]['1']['brands_tags']['0'],
                        'Nom2'  => $data["products"]['2']['brands_tags']['0'],
                        'Nom3'  => $data["products"]['3']['brands_tags']['0'],
                        'Nom4'  => $data["products"]['4']['brands_tags']['0'],
                        'Nom5'  => $data["products"]['5']['brands_tags']['0'],
                        'Nom6'  => $data["products"]['6']['brands_tags']['0'],
                        'Nom7'  => $data["products"]['7']['brands_tags']['0'],
                        'Nom8'  => $data["products"]['8']['brands_tags']['0'],
                        'Nom9'  => $data["products"]['9']['brands_tags']['0'],
                        'Nom10' => $data["products"]['10']['brands_tags']['0'],
                        'Nom11' => $data["products"]['11']['_keywords']['1'],
                        'Nom12' => $data["products"]['12']['brands_tags']['0'],
                        'Nom13' => $data["products"]['13']['brands_tags']['0'],
                        'Nom14' => $data["products"]['14']['brands_tags']['0'],
                        'Nom15' => $data["products"]['15']['brands_tags']['0'],
                        'Nom16' => $data["products"]['16']['brands_tags']['0'],
                        'Nom17' => $data["products"]['17']['brands_tags']['0'],
                        'Nom18' => $data["products"]['18']['brands_tags']['0'],
                        'Nom19' => $data["products"]['19']['brands_tags']['0'],
                        'Nom20' => $data["products"]['20']['brands_tags']['0'],
                        'Nom21' => $data["products"]['21']['brands_tags']['0'],
                        'Nom22' => $data["products"]['22']['brands_tags']['0'],
                        'Nom23' => $data["products"]['23']['brands_tags']['0'],


                    ];
                $x++;
            }
        }
        return $results;
    }
}
