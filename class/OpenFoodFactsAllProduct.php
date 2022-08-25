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
                        'Nom0'  => $data["products"]['0']['_id'],
                        'Nom1'  => $data["products"]['1']['_id'],
                        'Nom2'  => $data["products"]['2']['_id'],
                        'Nom3'  => $data["products"]['3']['_id'],
                        'Nom4'  => $data["products"]['4']['_id'],
                        'Nom5'  => $data["products"]['5']['_id'],
                        'Nom6'  => $data["products"]['6']['_id'],
                        'Nom7'  => $data["products"]['7']['_id'],
                        'Nom8'  => $data["products"]['8']['_id'],
                        'Nom9'  => $data["products"]['9']['_id'],
                        'Nom10' => $data["products"]['10']['_id'],
                        'Nom11' => $data["products"]['11']['_id'],
                        'Nom12' => $data["products"]['12']['_id'],
                        'Nom13' => $data["products"]['13']['_id'],
                        'Nom14' => $data["products"]['14']['_id'],
                        'Nom15' => $data["products"]['15']['_id'],
                        'Nom16' => $data["products"]['16']['_id'],
                        'Nom17' => $data["products"]['17']['_id'],
                        'Nom18' => $data["products"]['18']['_id'],
                        'Nom19' => $data["products"]['19']['_id'],
                        'Nom20' => $data["products"]['20']['_id'],
                        'Nom21' => $data["products"]['21']['_id'],
                        'Nom22' => $data["products"]['22']['_id'],
                        'Nom23' => $data["products"]['23']['_id'],


                    ];
                $x++;
            }
        }
        return $results;
    }
}
