<?php

namespace App;

class ObjectHelper {

    public static function hydrate($object, array $data, array $fields) : void {
        foreach ($fields as $fields) {

            $method = 'set' . str_replace(' ', '', ucwords(str_replace('_', ' ', $fields)));
            $object->$method($data[$fields]);
        }
        
    }
}