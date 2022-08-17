var callBackGetSuccess = function (data) {
    console.log("donnees api" , data)
}


function buttonClickGet() {
  var url = "https://world.openfoodfacts.org/";
  $("button").click(function () {
    $.post("demo_test_post.asp",
      {
        name: "Donald Duck",
        city: "Duckburg"
      },
      function (data, status) {
        alert("Data: " + data + "\nStatus: " + status);
      });
  });
}


{
  "count": 118,
  "page": 1,
  "page_count": 20,
  "page_size": 20,
  "products": [
    {
      "_id": "3946920047602",
      "_keywords": [
        "croquandine",
        "nougat",
        "le",
        "stanisla",
        "noisette"
      ],
      "added_countries_tags": [],
      "additives_debug_tags": [],
      "additives_n": 0,
      "additives_old_n": 0,
      "additives_old_tags": [],
      "additives_original_tags": [],
      "additives_prev_n": 0,
      "additives_prev_original_tags": [],
      "additives_prev_tags": [],
      "additives_tags": [],
      "allergens": "",
      "allergens_from_ingredients": "",
      "allergens_hierarchy": [],
      "allergens_tags": [],
      "amino_acids_prev_tags": [],
      "amino_acids_tags": [],
      "brands": "Les Nougats Stanislas",
      "brands_debug_tags": [],
      "brands_tags": [
        "les-nougats-stanislas"
      ],
      "categories": "",
      "categories_debug_tags": [],
      "categories_hierarchy": [],
      "categories_prev_hierarchy": [],
      "categories_prev_tags": [],
      "categories_tags": [],
      "checkers_tags": [],
      "code": "3946920047602",
      "codes_tags": [
        "code-13",
        "3946920047xxx",
        "394692004xxxx",
        "39469200xxxxx",
        "3946920xxxxxx",
        "394692xxxxxxx",
        "39469xxxxxxxx",
        "3946xxxxxxxxx",
        "394xxxxxxxxxx",
        "39xxxxxxxxxxx",
        "3xxxxxxxxxxxx"
      ],
      "complete": 0,
      "completeness": "0.4625",
      "correctors_tags": [
        "openfoodfacts-contributors"
      ],
      "countries": "France",
      "countries_debug_tags": [],
      "countries_hierarchy": [
        "en:france"
      ],
      "countries_tags": [
        "en:france"
      ],
      "created_t": 1515264315,
      "creator": "kiliweb",
      "data_sources": "App - yuka, Apps",
      "data_sources_tags": [
        "app-yuka",
        "apps"
      ],
      "editors_tags": [
        "kiliweb",
        "yuka.V1lVQkRLSXZ1ZFU3c3ZNaDBBTFlwOHRIOXE2N1cyT0pLTWtmSVE9PQ",
        "olivier-cervello",
        "openfoodfacts-contributors"
      ],
      "entry_dates_tags": [
        "2018-01-06",
        "2018-01",
        "2018"
      ],
      "id": "3946920047602",
      "image_ingredients_small_url": "http://images.productopener.localhost/images/products/394/692/004/7602/ingredients_fr.7.200.jpg",
      "image_ingredients_thumb_url": "http://images.productopener.localhost/images/products/394/692/004/7602/ingredients_fr.7.100.jpg",
      "image_ingredients_url": "http://images.productopener.localhost/images/products/394/692/004/7602/ingredients_fr.7.400.jpg",
      "images": {
        "1": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 53
            },
            "400": {
              "h": 400,
              "w": 211
            },
            "full": {
              "h": 1360,
              "w": 718
            }
          },
          "uploaded_t": "1515264316",
          "uploader": "kiliweb"
        },
        "2": {
          "sizes": {
            "100": {
              "h": 23,
              "w": 100
            },
            "400": {
              "h": 91,
              "w": 400
            },
            "full": {
              "h": 745,
              "w": 3264
            }
          },
          "uploaded_t": "1515264317",
          "uploader": "kiliweb"
        },
        "5": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "400": {
              "h": 400,
              "w": 299
            },
            "full": {
              "h": 4640,
              "w": 3472
            }
          },
          "uploaded_t": 1630064692,
          "uploader": "olivier-cervello"
        },
        "ingredients_fr": {
          "angle": null,
          "geometry": "0x0-0-0",
          "imgid": "2",
          "normalize": "0",
          "rev": "7",
          "sizes": {
            "100": {
              "h": 23,
              "w": 100
            },
            "200": {
              "h": 46,
              "w": 200
            },
            "400": {
              "h": 91,
              "w": 400
            },
            "full": {
              "h": 745,
              "w": 3264
            }
          },
          "white_magic": "0",
          "x1": null,
          "x2": null,
          "y1": null,
          "y2": null
        }
      },
      "informers_tags": [
        "yuka.V1lVQkRLSXZ1ZFU3c3ZNaDBBTFlwOHRIOXE2N1cyT0pLTWtmSVE9PQ",
        "kiliweb",
        "olivier-cervello"
      ],
      "ingredients": [
        {
          "id": "fr:des 'traces Gautres fruits à coque",
          "rank": 1,
          "text": "des 'traces Gautres fruits à coque"
        },
        {
          "id": "fr:arachides e",
          "rank": 2,
          "text": "arachides e"
        },
        {
          "id": "fr:moyennes pour 100 g",
          "rank": 3,
          "text": "moyennes pour 100 g"
        },
        {
          "id": "fr:2111 kJ",
          "rank": 4,
          "text": "2111 kJ"
        },
        {
          "id": "fr:279 g",
          "rank": 5,
          "text": "279 g"
        },
        {
          "id": "fr:32‚2 g",
          "rank": 6,
          "text": "32‚2 g"
        },
        {
          "id": "fr:dont",
          "rank": 7,
          "text": "dont"
        },
        {
          "id": "fr:sucres 47‚2 g",
          "rank": 8,
          "text": "sucres 47‚2 g"
        },
        {
          "id": "fr:ü consommer",
          "rank": 9,
          "text": "ü consommer"
        },
        {
          "id": "fr:Energie",
          "text": "Energie"
        },
        {
          "id": "fr:506 Kcal",
          "text": "506 Kcal"
        }
      ],
      "ingredients_debug": [
        "des 'traces Gautres fruits à coque",
        ",",
        null,
        null,
        null,
        " arachides e",
        ",",
        null,
        null,
        null,
        " moyennes pour 100 g ",
        ":",
        ":",
        null,
        null,
        " Energie ",
        ":",
        ":",
        null,
        null,
        " 506 Kcal",
        " - ",
        " - ",
        " - ",
        null,
        "2111 kJ",
        ",",
        null,
        null,
        null,
        " 279 g",
        ",",
        null,
        null,
        null,
        " 32",
        ",",
        null,
        null,
        null,
        "2 g",
        ",",
        null,
        null,
        null,
        " dont",
        ". ",
        null,
        null,
        null,
        "sucres 47",
        ",",
        null,
        null,
        null,
        "2 g",
        ",",
        null,
        null,
        null,
        " ü consommer"
      ],
      "ingredients_from_or_that_may_be_from_palm_oil_n": 0,
      "ingredients_from_palm_oil_n": 0,
      "ingredients_from_palm_oil_tags": [],
      "ingredients_hierarchy": [
        "fr:des 'traces Gautres fruits à coque",
        "fr:arachides e",
        "fr:moyennes pour 100 g",
        "fr:2111 kJ",
        "fr:279 g",
        "fr:32‚2 g",
        "fr:dont",
        "fr:sucres 47‚2 g",
        "fr:ü consommer",
        "fr:Energie",
        "fr:506 Kcal"
      ],
      "ingredients_ids_debug": [
        "des-traces-gautres-fruits-a-coque",
        "arachides-e",
        "moyennes-pour-100-g",
        "energie",
        "506-kcal",
        "2111-kj",
        "279-g",
        "32",
        "2-g",
        "dont",
        "sucres-47",
        "2-g",
        "u-consommer"
      ],
      "ingredients_n": "11",
      "ingredients_n_tags": [
        "11",
        "11-20"
      ],
      "ingredients_original_tags": [
        "fr:des 'traces Gautres fruits à coque",
        "fr:arachides e",
        "fr:moyennes pour 100 g",
        "fr:2111 kJ",
        "fr:279 g",
        "fr:32‚2 g",
        "fr:dont",
        "fr:sucres 47‚2 g",
        "fr:ü consommer",
        "fr:Energie",
        "fr:506 Kcal"
      ],
      "ingredients_tags": [
        "fr:des-traces-gautres-fruits-a-coque",
        "fr:arachides-e",
        "fr:moyennes-pour-100-g",
        "fr:2111-kj",
        "fr:279-g",
        "fr:32-2-g",
        "fr:dont",
        "fr:sucres-47-2-g",
        "fr:u-consommer",
        "fr:energie",
        "fr:506-kcal"
      ],
      "ingredients_text": "des 'traces Gautres fruits à coque, arachides e, moyennes pour 100 g : Energie : 506 Kcal -2111 kJ, 279 g, 32,2 g, dont. sucres 47,2 g, ü consommer",
      "ingredients_text_debug": "des 'traces Gautres fruits à coque, arachides e, moyennes pour 100 g : Energie : 506 Kcal - 2111 kJ, 279 g, 32,2 g, dont. sucres 47,2 g, ü consommer",
      "ingredients_text_debug_tags": [],
      "ingredients_text_fr": "des 'traces Gautres fruits à coque, arachides e, moyennes pour 100 g : Energie : 506 Kcal -2111 kJ, 279 g, 32,2 g, dont. sucres 47,2 g, ü consommer",
      "ingredients_text_with_allergens": "des 'traces Gautres fruits à coque, arachides e, moyennes pour 100 g : Energie : 506 Kcal -2111 kJ, 279 g, 32,2 g, dont. sucres 47,2 g, ü consommer",
      "ingredients_text_with_allergens_fr": "des 'traces Gautres fruits à coque, arachides e, moyennes pour 100 g : Energie : 506 Kcal -2111 kJ, 279 g, 32,2 g, dont. sucres 47,2 g, ü consommer",
      "ingredients_that_may_be_from_palm_oil_n": 0,
      "ingredients_that_may_be_from_palm_oil_tags": [],
      "interface_version_created": "20150316.jqm2",
      "interface_version_modified": "20150316.jqm2",
      "labels": "",
      "labels_debug_tags": [],
      "labels_hierarchy": [],
      "labels_prev_hierarchy": [],
      "labels_prev_tags": [],
      "labels_tags": [],
      "lang": "fr",
      "languages": {
        "en:french": 3
      },
      "languages_codes": {
        "fr": 3
      },
      "languages_hierarchy": [
        "en:french"
      ],
      "languages_tags": [
        "en:french",
        "en:1"
      ],
      "last_edit_dates_tags": [
        "2021-08-27",
        "2021-08",
        "2021"
      ],
      "last_editor": "olivier-cervello",
      "last_image_dates_tags": [
        "2021-08-27",
        "2021-08",
        "2021"
      ],
      "last_image_t": 1630064694,
      "last_modified_by": "olivier-cervello",
      "last_modified_t": 1630064793,
      "lc": "fr",
      "main_countries_tags": [],
      "max_imgid": "5",
      "minerals_prev_tags": [],
      "minerals_tags": [],
      "misc_tags": [
        "en:nutriscore-not-computed",
        "en:main-countries-no-scans"
      ],
      "no_nutrition_data": "",
      "nova_group_debug": "no nova group when the product does not have a category",
      "nova_group_tags": [
        "not-applicable"
      ],
      "nucleotides_prev_tags": [],
      "nucleotides_tags": [],
      "nutrient_levels": {},
      "nutrient_levels_tags": [],
      "nutriments": {
        "carbohydrates": "52.2",
        "carbohydrates_100g": "52.2",
        "carbohydrates_serving": 0,
        "carbohydrates_unit": "",
        "carbohydrates_value": "52.2",
        "energy": 2117,
        "energy_100g": 2117,
        "energy_serving": 0,
        "energy_unit": "kcal",
        "energy_value": 506,
        "fat": "27.9",
        "fat_100g": "27.9",
        "fat_serving": 0,
        "fat_unit": "",
        "fat_value": "27.9",
        "proteins": "6.3",
        "proteins_100g": "6.3",
        "proteins_serving": 0,
        "proteins_unit": "",
        "proteins_value": "6.3",
        "salt": "0.15",
        "salt_100g": "0.15",
        "salt_serving": 0,
        "salt_unit": "",
        "salt_value": "0.15",
        "saturated-fat": "11.6",
        "saturated-fat_100g": "11.6",
        "saturated-fat_serving": 0,
        "saturated-fat_unit": "",
        "saturated-fat_value": "11.6",
        "sodium": "0.0590551181102362",
        "sodium_100g": "0.0590551181102362",
        "sodium_serving": 0,
        "sugars": "47.2",
        "sugars_100g": "47.2",
        "sugars_serving": 0,
        "sugars_unit": "",
        "sugars_value": "47.2"
      },
      "nutrition_data_per": "100g",
      "nutrition_data_per_debug_tags": [],
      "nutrition_grades": "e",
      "nutrition_grades_tags": [
        "not-applicable"
      ],
      "nutrition_score_debug": "no score when the product does not have a category",
      "photographers_tags": [
        "kiliweb",
        "olivier-cervello"
      ],
      "pnns_groups_1": "unknown",
      "pnns_groups_1_tags": [
        "unknown"
      ],
      "pnns_groups_2": "unknown",
      "pnns_groups_2_tags": [
        "unknown"
      ],
      "popularity_key": 12,
      "product_name": "Croquandines noisettes",
      "product_name_debug_tags": [],
      "product_name_fr": "Croquandines noisettes",
      "quality_tags": [
        "ingredients-unknown-score-above-5",
        "ingredients-90-percent-unknown",
        "ingredients-fr-includes-fr-nutrition-facts"
      ],
      "removed_countries_tags": [],
      "rev": 9,
      "selected_images": {
        "ingredients": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/394/692/004/7602/ingredients_fr.7.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/394/692/004/7602/ingredients_fr.7.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/394/692/004/7602/ingredients_fr.7.100.jpg"
          }
        }
      },
      "serving_quantity": 0,
      "sortkey": 515264318,
      "states": "en:to-be-completed, en:nutrition-facts-completed, en:ingredients-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:origins-to-be-completed, en:categories-to-be-completed, en:brands-completed, en:packaging-to-be-completed, en:quantity-to-be-completed, en:product-name-completed, en:photos-to-be-validated, en:packaging-photo-to-be-selected, en:nutrition-photo-to-be-selected, en:ingredients-photo-selected, en:front-photo-to-be-selected, en:photos-uploaded",
      "states_hierarchy": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:origins-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:packaging-photo-to-be-selected",
        "en:nutrition-photo-to-be-selected",
        "en:ingredients-photo-selected",
        "en:front-photo-to-be-selected",
        "en:photos-uploaded"
      ],
      "states_tags": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:origins-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:packaging-photo-to-be-selected",
        "en:nutrition-photo-to-be-selected",
        "en:ingredients-photo-selected",
        "en:front-photo-to-be-selected",
        "en:photos-uploaded"
      ],
      "traces_from_ingredients": "",
      "traces_hierarchy": [],
      "traces_tags": [],
      "unknown_ingredients_n": 11,
      "unknown_nutrients_tags": [],
      "update_key": "novacat",
      "url": "http://world.productopener.localhost/product/3946920047602/croquandines-noisettes-les-nougats-stanislas",
      "vitamins_prev_tags": [],
      "vitamins_tags": []
    },
    {
      "_id": "5053990155354",
      "_keywords": [],
      "added_countries_tags": [],
      "checkers_tags": [],
      "code": "5053990155354",
      "codes_tags": [
        "code-13",
        "5053990155xxx",
        "505399015xxxx",
        "50539901xxxxx",
        "5053990xxxxxx",
        "505399xxxxxxx",
        "50539xxxxxxxx",
        "5053xxxxxxxxx",
        "505xxxxxxxxxx",
        "50xxxxxxxxxxx",
        "5xxxxxxxxxxxx"
      ],
      "complete": 0,
      "completeness": "0.05",
      "correctors_tags": [],
      "created_t": 1630057786,
      "creator": "olivier-cervello",
      "editors_tags": [
        "olivier-cervello"
      ],
      "entry_dates_tags": [
        "2021-08-27",
        "2021-08",
        "2021"
      ],
      "id": "5053990155354",
      "images": {
        "3": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "400": {
              "h": 400,
              "w": 299
            },
            "full": {
              "h": 4640,
              "w": 3472
            }
          },
          "uploaded_t": 1630057788,
          "uploader": "olivier-cervello"
        }
      },
      "informers_tags": [
        "olivier-cervello"
      ],
      "interface_version_created": "20190830",
      "lang": "en",
      "languages": {},
      "languages_codes": {},
      "languages_hierarchy": [],
      "languages_tags": [
        "en:0"
      ],
      "last_edit_dates_tags": [
        "2021-08-27",
        "2021-08",
        "2021"
      ],
      "last_editor": "olivier-cervello",
      "last_image_dates_tags": [
        "2021-08-27",
        "2021-08",
        "2021"
      ],
      "last_image_t": 1630057793,
      "last_modified_by": "olivier-cervello",
      "last_modified_t": 1630057793,
      "lc": "en",
      "main_countries_tags": [],
      "max_imgid": "3",
      "misc_tags": [
        "en:main-countries-new-product"
      ],
      "photographers_tags": [
        "olivier-cervello"
      ],
      "popularity_key": 12,
      "removed_countries_tags": [],
      "rev": 2,
      "states": "en:to-be-completed, en:nutrition-facts-to-be-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:origins-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-to-be-completed, en:quantity-to-be-completed, en:product-name-to-be-completed, en:photos-to-be-validated, en:packaging-photo-to-be-selected, en:nutrition-photo-to-be-selected, en:ingredients-photo-to-be-selected, en:front-photo-to-be-selected, en:photos-uploaded",
      "states_hierarchy": [
        "en:to-be-completed",
        "en:nutrition-facts-to-be-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:origins-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-to-be-completed",
        "en:photos-to-be-validated",
        "en:packaging-photo-to-be-selected",
        "en:nutrition-photo-to-be-selected",
        "en:ingredients-photo-to-be-selected",
        "en:front-photo-to-be-selected",
        "en:photos-uploaded"
      ],
      "states_tags": [
        "en:to-be-completed",
        "en:nutrition-facts-to-be-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:origins-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-to-be-completed",
        "en:photos-to-be-validated",
        "en:packaging-photo-to-be-selected",
        "en:nutrition-photo-to-be-selected",
        "en:ingredients-photo-to-be-selected",
        "en:front-photo-to-be-selected",
        "en:photos-uploaded"
      ],
      "url": "http://world.productopener.localhost/product/5053990155354"
    },
    {
      "_id": "3915479511056",
      "_keywords": [
        "cane",
        "candy",
        "arnaud"
      ],
      "additives_debug_tags": [],
      "additives_old_tags": [],
      "additives_original_tags": [],
      "additives_prev_original_tags": [],
      "additives_prev_tags": [],
      "additives_tags": [],
      "allergens": "",
      "allergens_from_ingredients": "",
      "allergens_hierarchy": [],
      "allergens_tags": [],
      "amino_acids_prev_tags": [],
      "amino_acids_tags": [],
      "brands": "Candy Cane",
      "brands_debug_tags": [],
      "brands_tags": [
        "candy-cane"
      ],
      "categories": "",
      "categories_debug_tags": [],
      "categories_hierarchy": [],
      "categories_prev_hierarchy": [],
      "categories_prev_tags": [],
      "categories_tags": [],
      "checkers_tags": [],
      "code": "3915479511056",
      "codes_tags": [
        "code-13",
        "3915479511056",
        "391547951105x",
        "39154795110xx",
        "3915479511xxx",
        "391547951xxxx",
        "39154795xxxxx",
        "3915479xxxxxx",
        "391547xxxxxxx",
        "39154xxxxxxxx",
        "3915xxxxxxxxx",
        "391xxxxxxxxxx",
        "39xxxxxxxxxxx",
        "3xxxxxxxxxxxx"
      ],
      "complete": 0,
      "correctors_tags": [
        "openfoodfacts-contributors"
      ],
      "countries": "France",
      "countries_debug_tags": [],
      "countries_hierarchy": [
        "en:france"
      ],
      "countries_tags": [
        "en:france"
      ],
      "created_t": 1514879739,
      "creator": "kiliweb",
      "editors_tags": [
        "teolemon",
        "kiliweb",
        "openfoodfacts-contributors"
      ],
      "entry_dates_tags": [
        "2018-01-02",
        "2018-01",
        "2018"
      ],
      "id": "3915479511056",
      "image_front_small_url": "http://images.productopener.localhost/images/products/391/547/951/1056/front_fr.4.200.jpg",
      "image_front_thumb_url": "http://images.productopener.localhost/images/products/391/547/951/1056/front_fr.4.100.jpg",
      "image_front_url": "http://images.productopener.localhost/images/products/391/547/951/1056/front_fr.4.400.jpg",
      "image_ingredients_small_url": "http://images.productopener.localhost/images/products/391/547/951/1056/ingredients_fr.10.200.jpg",
      "image_ingredients_thumb_url": "http://images.productopener.localhost/images/products/391/547/951/1056/ingredients_fr.10.100.jpg",
      "image_ingredients_url": "http://images.productopener.localhost/images/products/391/547/951/1056/ingredients_fr.10.400.jpg",
      "image_nutrition_small_url": "http://images.productopener.localhost/images/products/391/547/951/1056/nutrition_fr.7.200.jpg",
      "image_nutrition_thumb_url": "http://images.productopener.localhost/images/products/391/547/951/1056/nutrition_fr.7.100.jpg",
      "image_nutrition_url": "http://images.productopener.localhost/images/products/391/547/951/1056/nutrition_fr.7.400.jpg",
      "image_small_url": "http://images.productopener.localhost/images/products/391/547/951/1056/front_fr.4.200.jpg",
      "image_thumb_url": "http://images.productopener.localhost/images/products/391/547/951/1056/front_fr.4.100.jpg",
      "image_url": "http://images.productopener.localhost/images/products/391/547/951/1056/front_fr.4.400.jpg",
      "images": {
        "1": {
          "sizes": {
            "100": {
              "h": 86,
              "w": 100
            },
            "400": {
              "h": 343,
              "w": 400
            },
            "full": {
              "h": 1360,
              "w": 1586
            }
          },
          "uploaded_t": "1514879742",
          "uploader": "kiliweb"
        },
        "2": {
          "sizes": {
            "100": {
              "h": 80,
              "w": 100
            },
            "400": {
              "h": 320,
              "w": 400
            },
            "full": {
              "h": 1360,
              "w": 1700
            }
          },
          "uploaded_t": "1514879744",
          "uploader": "kiliweb"
        },
        "3": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 89
            },
            "400": {
              "h": 400,
              "w": 357
            },
            "full": {
              "h": 3113,
              "w": 2777
            }
          },
          "uploaded_t": "1514879748",
          "uploader": "kiliweb"
        },
        "front_fr": {
          "angle": null,
          "geometry": "0x0-0-0",
          "imgid": "1",
          "normalize": "0",
          "rev": "4",
          "sizes": {
            "100": {
              "h": 86,
              "w": 100
            },
            "200": {
              "h": 172,
              "w": 200
            },
            "400": {
              "h": 343,
              "w": 400
            },
            "full": {
              "h": 1360,
              "w": 1586
            }
          },
          "white_magic": "0",
          "x1": null,
          "x2": null,
          "y1": null,
          "y2": null
        },
        "ingredients_fr": {
          "angle": null,
          "geometry": "0x0-0-0",
          "imgid": "3",
          "normalize": "0",
          "rev": "10",
          "sizes": {
            "100": {
              "h": 100,
              "w": 89
            },
            "200": {
              "h": 200,
              "w": 178
            },
            "400": {
              "h": 400,
              "w": 357
            },
            "full": {
              "h": 3113,
              "w": 2777
            }
          },
          "white_magic": "0",
          "x1": null,
          "x2": null,
          "y1": null,
          "y2": null
        },
        "nutrition_fr": {
          "angle": null,
          "geometry": "0x0-0-0",
          "imgid": "2",
          "normalize": "0",
          "rev": "7",
          "sizes": {
            "100": {
              "h": 80,
              "w": 100
            },
            "200": {
              "h": 160,
              "w": 200
            },
            "400": {
              "h": 320,
              "w": 400
            },
            "full": {
              "h": 1360,
              "w": 1700
            }
          },
          "white_magic": "0",
          "x1": null,
          "x2": null,
          "y1": null,
          "y2": null
        }
      },
      "informers_tags": [
        "kiliweb"
      ],
      "ingredients": [],
      "ingredients_debug": [],
      "ingredients_from_or_that_may_be_from_palm_oil_n": 0,
      "ingredients_from_palm_oil_tags": [],
      "ingredients_hierarchy": [],
      "ingredients_ids_debug": [],
      "ingredients_original_tags": [],
      "ingredients_tags": [],
      "ingredients_text": "",
      "ingredients_text_debug": "",
      "ingredients_text_debug_tags": [],
      "ingredients_text_fr": "",
      "ingredients_text_fr_debug_tags": [],
      "ingredients_text_with_allergens": "",
      "ingredients_text_with_allergens_fr": "",
      "ingredients_that_may_be_from_palm_oil_tags": [],
      "interface_version_created": "20150316.jqm2",
      "interface_version_modified": "20150316.jqm2",
      "labels": "",
      "labels_debug_tags": [],
      "labels_hierarchy": [],
      "labels_prev_hierarchy": [],
      "labels_prev_tags": [],
      "labels_tags": [],
      "lang": "fr",
      "languages": {
        "en:french": 4
      },
      "languages_codes": {
        "fr": 4
      },
      "languages_hierarchy": [
        "en:french"
      ],
      "languages_tags": [
        "en:french",
        "en:1"
      ],
      "last_edit_dates_tags": [
        "2018-01-21",
        "2018-01",
        "2018"
      ],
      "last_editor": "teolemon",
      "last_image_dates_tags": [
        "2018-01-02",
        "2018-01",
        "2018"
      ],
      "last_image_t": 1514879748,
      "last_modified_by": "teolemon",
      "last_modified_t": 1516540251,
      "lc": "fr",
      "max_imgid": "3",
      "minerals_prev_tags": [],
      "minerals_tags": [],
      "misc_tags": [
        "en:nutriscore-not-computed"
      ],
      "no_nutrition_data": "",
      "nova_group_debug": "no nova group when the product does not have ingredients",
      "nova_group_tags": [
        "not-applicable"
      ],
      "nucleotides_prev_tags": [],
      "nucleotides_tags": [],
      "nutrient_levels": {},
      "nutrient_levels_tags": [],
      "nutriments": {
        "carbohydrates": "96",
        "carbohydrates_100g": "96",
        "carbohydrates_serving": "",
        "carbohydrates_unit": "",
        "carbohydrates_value": "96",
        "energy": "1607",
        "energy_100g": "1607",
        "energy_serving": "",
        "energy_unit": "kcal",
        "energy_value": "384",
        "fat": "1",
        "fat_100g": "1",
        "fat_serving": "",
        "fat_unit": "",
        "fat_value": "1",
        "proteins": "1",
        "proteins_100g": "1",
        "proteins_serving": "",
        "proteins_unit": "",
        "proteins_value": "1",
        "salt": 0,
        "salt_100g": "0",
        "salt_serving": "",
        "salt_unit": "",
        "salt_value": "0",
        "saturated-fat": "1",
        "saturated-fat_100g": "1",
        "saturated-fat_serving": "",
        "saturated-fat_unit": "",
        "saturated-fat_value": "1",
        "sodium": "0",
        "sodium_100g": "0",
        "sodium_serving": "",
        "sugars": "79",
        "sugars_100g": "79",
        "sugars_serving": "",
        "sugars_unit": "",
        "sugars_value": "79"
      },
      "nutrition_data_per": "100g",
      "nutrition_data_per_debug_tags": [],
      "nutrition_grades": "d",
      "nutrition_grades_tags": [
        "not-applicable"
      ],
      "nutrition_score_debug": "no score when the product does not have a category",
      "photographers_tags": [
        "kiliweb"
      ],
      "pnns_groups_1": "unknown",
      "pnns_groups_1_tags": [
        "unknown"
      ],
      "pnns_groups_2": "unknown",
      "pnns_groups_2_tags": [
        "unknown"
      ],
      "product_name": "Arnaud",
      "product_name_debug_tags": [],
      "product_name_fr": "Arnaud",
      "quality_tags": [],
      "rev": 13,
      "selected_images": {
        "front": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/391/547/951/1056/front_fr.4.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/391/547/951/1056/front_fr.4.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/391/547/951/1056/front_fr.4.100.jpg"
          }
        },
        "ingredients": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/391/547/951/1056/ingredients_fr.10.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/391/547/951/1056/ingredients_fr.10.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/391/547/951/1056/ingredients_fr.10.100.jpg"
          }
        },
        "nutrition": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/391/547/951/1056/nutrition_fr.7.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/391/547/951/1056/nutrition_fr.7.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/391/547/951/1056/nutrition_fr.7.100.jpg"
          }
        }
      },
      "serving_quantity": 0,
      "sortkey": 516540251,
      "states": "en:to-be-completed, en:nutrition-facts-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-completed, en:packaging-to-be-completed, en:quantity-to-be-completed, en:product-name-completed, en:photos-validated, en:photos-uploaded",
      "states_hierarchy": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-completed",
        "en:photos-validated",
        "en:photos-uploaded"
      ],
      "states_tags": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-completed",
        "en:photos-validated",
        "en:photos-uploaded"
      ],
      "traces_from_ingredients": "",
      "traces_hierarchy": [],
      "traces_tags": [],
      "unknown_ingredients_n": 0,
      "unknown_nutrients_tags": [],
      "update_key": "novacat",
      "url": "http://world.productopener.localhost/product/3915479511056/arnaud-candy-cane",
      "vitamins_prev_tags": [],
      "vitamins_tags": []
    },
    {
      "_id": "3902057160768",
      "_keywords": [
        "boronice",
        "vitamina"
      ],
      "additives_debug_tags": [],
      "additives_old_tags": [],
      "additives_original_tags": [],
      "additives_prev_original_tags": [],
      "additives_prev_tags": [],
      "additives_tags": [],
      "allergens": "",
      "allergens_from_ingredients": "",
      "allergens_hierarchy": [],
      "allergens_tags": [],
      "amino_acids_prev_tags": [],
      "amino_acids_tags": [],
      "checkers_tags": [],
      "code": "3902057160768",
      "codes_tags": [
        "code-13",
        "3902057160768",
        "390205716076x",
        "39020571607xx",
        "3902057160xxx",
        "390205716xxxx",
        "39020571xxxxx",
        "3902057xxxxxx",
        "390205xxxxxxx",
        "39020xxxxxxxx",
        "3902xxxxxxxxx",
        "390xxxxxxxxxx",
        "39xxxxxxxxxxx",
        "3xxxxxxxxxxxx"
      ],
      "complete": 0,
      "correctors_tags": [
        "openfoodfacts-contributors"
      ],
      "countries": "en:france",
      "countries_debug_tags": [],
      "countries_hierarchy": [
        "en:france"
      ],
      "countries_tags": [
        "en:france"
      ],
      "created_t": 1526892909,
      "creator": "kiliweb",
      "editors_tags": [
        "kiliweb",
        "openfoodfacts-contributors"
      ],
      "entry_dates_tags": [
        "2018-05-21",
        "2018-05",
        "2018"
      ],
      "id": "3902057160768",
      "image_front_small_url": "http://images.productopener.localhost/images/products/390/205/716/0768/front_fr.4.200.jpg",
      "image_front_thumb_url": "http://images.productopener.localhost/images/products/390/205/716/0768/front_fr.4.100.jpg",
      "image_front_url": "http://images.productopener.localhost/images/products/390/205/716/0768/front_fr.4.400.jpg",
      "image_ingredients_small_url": "http://images.productopener.localhost/images/products/390/205/716/0768/ingredients_fr.7.200.jpg",
      "image_ingredients_thumb_url": "http://images.productopener.localhost/images/products/390/205/716/0768/ingredients_fr.7.100.jpg",
      "image_ingredients_url": "http://images.productopener.localhost/images/products/390/205/716/0768/ingredients_fr.7.400.jpg",
      "image_small_url": "http://images.productopener.localhost/images/products/390/205/716/0768/front_fr.4.200.jpg",
      "image_thumb_url": "http://images.productopener.localhost/images/products/390/205/716/0768/front_fr.4.100.jpg",
      "image_url": "http://images.productopener.localhost/images/products/390/205/716/0768/front_fr.4.400.jpg",
      "images": {
        "1": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "400": {
              "h": 400,
              "w": 300
            },
            "full": {
              "h": 1200,
              "w": 900
            }
          },
          "uploaded_t": "1526892913",
          "uploader": "kiliweb"
        },
        "2": {
          "sizes": {
            "100": {
              "h": 75,
              "w": 100
            },
            "400": {
              "h": 300,
              "w": 400
            },
            "full": {
              "h": 1200,
              "w": 1600
            }
          },
          "uploaded_t": "1526892918",
          "uploader": "kiliweb"
        },
        "front_fr": {
          "angle": null,
          "geometry": "0x0-0-0",
          "imgid": "1",
          "normalize": "0",
          "rev": "4",
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "200": {
              "h": 200,
              "w": 150
            },
            "400": {
              "h": 400,
              "w": 300
            },
            "full": {
              "h": 1200,
              "w": 900
            }
          },
          "white_magic": "0",
          "x1": null,
          "x2": null,
          "y1": null,
          "y2": null
        },
        "ingredients_fr": {
          "angle": null,
          "geometry": "0x0-0-0",
          "imgid": "2",
          "normalize": "0",
          "rev": "7",
          "sizes": {
            "100": {
              "h": 75,
              "w": 100
            },
            "200": {
              "h": 150,
              "w": 200
            },
            "400": {
              "h": 300,
              "w": 400
            },
            "full": {
              "h": 1200,
              "w": 1600
            }
          },
          "white_magic": "0",
          "x1": null,
          "x2": null,
          "y1": null,
          "y2": null
        }
      },
      "informers_tags": [
        "kiliweb"
      ],
      "ingredients": [],
      "ingredients_debug": [],
      "ingredients_from_palm_oil_tags": [],
      "ingredients_hierarchy": [],
      "ingredients_ids_debug": [],
      "ingredients_original_tags": [],
      "ingredients_tags": [],
      "ingredients_text_debug": null,
      "ingredients_text_with_allergens": null,
      "ingredients_text_with_allergens_fr": null,
      "ingredients_that_may_be_from_palm_oil_tags": [],
      "interface_version_created": "20150316.jqm2",
      "interface_version_modified": "20150316.jqm2",
      "lang": "fr",
      "languages": {
        "en:french": 3
      },
      "languages_codes": {
        "fr": 3
      },
      "languages_hierarchy": [
        "en:french"
      ],
      "languages_tags": [
        "en:french",
        "en:1"
      ],
      "last_edit_dates_tags": [
        "2018-05-21",
        "2018-05",
        "2018"
      ],
      "last_editor": null,
      "last_image_dates_tags": [
        "2018-05-21",
        "2018-05",
        "2018"
      ],
      "last_image_t": 1526892919,
      "last_modified_by": null,
      "last_modified_t": 1526892925,
      "lc": "fr",
      "max_imgid": "2",
      "minerals_prev_tags": [],
      "minerals_tags": [],
      "misc_tags": [
        "en:nutriscore-not-computed"
      ],
      "no_nutrition_data": "",
      "nova_group_debug": "no nova group when the product does not have ingredients",
      "nova_group_tags": [
        "not-applicable"
      ],
      "nucleotides_prev_tags": [],
      "nucleotides_tags": [],
      "nutrient_levels": {},
      "nutrient_levels_tags": [],
      "nutriments": {
        "carbohydrates": "12.5",
        "carbohydrates_100g": "12.5",
        "carbohydrates_serving": "",
        "carbohydrates_unit": "",
        "carbohydrates_value": "12.5",
        "energy": "159",
        "energy_100g": "159",
        "energy_serving": "",
        "energy_unit": "kcal",
        "energy_value": "38",
        "fat": "0.1",
        "fat_100g": "0.1",
        "fat_serving": "",
        "fat_unit": "",
        "fat_value": "0.1",
        "proteins": "0.1",
        "proteins_100g": "0.1",
        "proteins_serving": "",
        "proteins_unit": "",
        "proteins_value": "0.1",
        "salt": "1",
        "salt_100g": "1",
        "salt_serving": "",
        "salt_unit": "",
        "salt_value": "1",
        "saturated-fat": "0.1",
        "saturated-fat_100g": "0.1",
        "saturated-fat_serving": "",
        "saturated-fat_unit": "",
        "saturated-fat_value": "0.1",
        "sodium": "0.393700787401575",
        "sodium_100g": "0.393700787401575",
        "sodium_serving": "",
        "sugars": "10.9",
        "sugars_100g": "10.9",
        "sugars_serving": "",
        "sugars_unit": "",
        "sugars_value": "10.9"
      },
      "nutrition_data_per": "100g",
      "nutrition_data_per_debug_tags": [],
      "nutrition_data_prepared_per": "100g",
      "nutrition_grades_tags": [
        "not-applicable"
      ],
      "nutrition_score_debug": "no score when the product does not have a category",
      "photographers_tags": [
        "kiliweb"
      ],
      "product_name": "Vitamina Boronicë",
      "product_name_debug_tags": [],
      "product_name_fr": "Vitamina Boronicë",
      "quality_tags": [],
      "rev": 7,
      "selected_images": {
        "front": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/390/205/716/0768/front_fr.4.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/390/205/716/0768/front_fr.4.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/390/205/716/0768/front_fr.4.100.jpg"
          }
        },
        "ingredients": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/390/205/716/0768/ingredients_fr.7.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/390/205/716/0768/ingredients_fr.7.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/390/205/716/0768/ingredients_fr.7.100.jpg"
          }
        }
      },
      "serving_quantity": 0,
      "sortkey": 526892925,
      "states": "en:to-be-completed, en:nutrition-facts-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-to-be-completed, en:quantity-to-be-completed, en:product-name-completed, en:photos-to-be-validated, en:photos-uploaded",
      "states_hierarchy": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "states_tags": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "traces_from_ingredients": "",
      "traces_hierarchy": [],
      "traces_tags": [],
      "unknown_ingredients_n": 0,
      "unknown_nutrients_tags": [],
      "update_key": "novacat",
      "url": "http://world.productopener.localhost/product/3902057160768/vitamina-boronice",
      "vitamins_prev_tags": [],
      "vitamins_tags": []
    },
    {
      "_id": "3904030200263",
      "_keywords": [
        "fur",
        "vormischung",
        "truleqe",
        "stinsib"
      ],
      "additives_debug_tags": [],
      "additives_old_tags": [],
      "additives_original_tags": [],
      "additives_prev_original_tags": [],
      "additives_prev_tags": [],
      "additives_tags": [],
      "allergens_from_ingredients": "",
      "allergens_hierarchy": [],
      "allergens_tags": [],
      "amino_acids_prev_tags": [],
      "amino_acids_tags": [],
      "brands": "StinSib",
      "brands_debug_tags": [],
      "brands_tags": [
        "stinsib"
      ],
      "checkers_tags": [],
      "code": "3904030200263",
      "codes_tags": [
        "code-13",
        "3904030200263",
        "390403020026x",
        "39040302002xx",
        "3904030200xxx",
        "390403020xxxx",
        "39040302xxxxx",
        "3904030xxxxxx",
        "390403xxxxxxx",
        "39040xxxxxxxx",
        "3904xxxxxxxxx",
        "390xxxxxxxxxx",
        "39xxxxxxxxxxx",
        "3xxxxxxxxxxxx"
      ],
      "complete": 0,
      "correctors_tags": [
        "openfoodfacts-contributors",
        "nana1212"
      ],
      "countries": "en:CH",
      "countries_hierarchy": [
        "en:switzerland"
      ],
      "countries_tags": [
        "en:switzerland"
      ],
      "created_t": 1538112009,
      "creator": "nana1212",
      "editors_tags": [
        "nana1212",
        "openfoodfacts-contributors"
      ],
      "entry_dates_tags": [
        "2018-09-28",
        "2018-09",
        "2018"
      ],
      "id": "3904030200263",
      "image_front_small_url": "http://images.productopener.localhost/images/products/390/403/020/0263/front_de.4.200.jpg",
      "image_front_thumb_url": "http://images.productopener.localhost/images/products/390/403/020/0263/front_de.4.100.jpg",
      "image_front_url": "http://images.productopener.localhost/images/products/390/403/020/0263/front_de.4.400.jpg",
      "image_small_url": "http://images.productopener.localhost/images/products/390/403/020/0263/front_de.4.200.jpg",
      "image_thumb_url": "http://images.productopener.localhost/images/products/390/403/020/0263/front_de.4.100.jpg",
      "image_url": "http://images.productopener.localhost/images/products/390/403/020/0263/front_de.4.400.jpg",
      "images": {
        "1": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 69
            },
            "400": {
              "h": 400,
              "w": 276
            },
            "full": {
              "h": 3699,
              "w": 2555
            }
          },
          "uploaded_t": 1538112009,
          "uploader": "nana1212"
        },
        "front_de": {
          "angle": null,
          "geometry": "0x0-0-0",
          "imgid": "1",
          "normalize": null,
          "rev": "4",
          "sizes": {
            "100": {
              "h": 100,
              "w": 69
            },
            "200": {
              "h": 200,
              "w": 138
            },
            "400": {
              "h": 400,
              "w": 276
            },
            "full": {
              "h": 3699,
              "w": 2555
            }
          },
          "white_magic": null,
          "x1": null,
          "x2": null,
          "y1": null,
          "y2": null
        }
      },
      "informers_tags": [
        "nana1212"
      ],
      "ingredients": [],
      "ingredients_debug": [],
      "ingredients_from_palm_oil_tags": [],
      "ingredients_hierarchy": [],
      "ingredients_ids_debug": [],
      "ingredients_original_tags": [],
      "ingredients_tags": [],
      "ingredients_text_debug": null,
      "ingredients_text_with_allergens": null,
      "ingredients_text_with_allergens_de": null,
      "ingredients_that_may_be_from_palm_oil_tags": [],
      "interface_version_created": "20120622",
      "interface_version_modified": "20150316.jqm2",
      "lang": "de",
      "lang_debug_tags": [],
      "languages": {
        "en:german": 2
      },
      "languages_codes": {
        "de": 2
      },
      "languages_hierarchy": [
        "en:german"
      ],
      "languages_tags": [
        "en:german",
        "en:1"
      ],
      "last_edit_dates_tags": [
        "2018-09-28",
        "2018-09",
        "2018"
      ],
      "last_editor": "nana1212",
      "last_image_dates_tags": [
        "2018-09-28",
        "2018-09",
        "2018"
      ],
      "last_image_t": 1538112009,
      "last_modified_by": "nana1212",
      "last_modified_t": 1538112071,
      "lc": "de",
      "max_imgid": "1",
      "minerals_prev_tags": [],
      "minerals_tags": [],
      "misc_tags": [
        "en:nutriscore-not-computed"
      ],
      "no_nutrition_data": "on",
      "nova_group_debug": "no nova group when the product does not have ingredients",
      "nova_group_tags": [
        "not-applicable"
      ],
      "nucleotides_prev_tags": [],
      "nucleotides_tags": [],
      "nutrient_levels": {},
      "nutrient_levels_tags": [],
      "nutriments": {},
      "nutrition_data_per": "100g",
      "nutrition_data_prepared_per": "100g",
      "nutrition_grades_tags": [
        "not-applicable"
      ],
      "nutrition_score_debug": "no score when the product does not have a category",
      "packaging": "Mehl, Zucker, E450, Stärkemehl, Backpulver",
      "packaging_debug_tags": [],
      "packaging_tags": [
        "mehl",
        "zucker",
        "e450",
        "starkemehl",
        "backpulver"
      ],
      "photographers_tags": [
        "nana1212"
      ],
      "product_name": "Vormischung für Truleqe",
      "product_name_de": "Vormischung für Truleqe",
      "product_name_de_debug_tags": [],
      "product_quantity": 1000,
      "quality_tags": [
        "no-nutrition-data"
      ],
      "quantity": "1kg",
      "quantity_debug_tags": [],
      "rev": 5,
      "selected_images": {
        "front": {
          "display": {
            "de": "http://images.productopener.localhost/images/products/390/403/020/0263/front_de.4.400.jpg"
          },
          "small": {
            "de": "http://images.productopener.localhost/images/products/390/403/020/0263/front_de.4.200.jpg"
          },
          "thumb": {
            "de": "http://images.productopener.localhost/images/products/390/403/020/0263/front_de.4.100.jpg"
          }
        }
      },
      "serving_quantity": 0,
      "sortkey": 538112071,
      "states": "en:to-be-completed, en:nutrition-facts-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-completed, en:packaging-completed, en:quantity-completed, en:product-name-completed, en:photos-to-be-validated, en:photos-uploaded",
      "states_hierarchy": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-completed",
        "en:packaging-completed",
        "en:quantity-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "states_tags": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-completed",
        "en:packaging-completed",
        "en:quantity-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "traces_from_ingredients": "",
      "traces_hierarchy": [],
      "traces_tags": [],
      "unknown_ingredients_n": 0,
      "unknown_nutrients_tags": [],
      "update_key": "novacat",
      "url": "http://world.productopener.localhost/product/3904030200263/vormischung-fur-truleqe-stinsib",
      "vitamins_prev_tags": [],
      "vitamins_tags": []
    },
    {
      "_id": "3910050500061",
      "_keywords": [
        "de",
        "miel",
        "fleur"
      ],
      "additives_debug_tags": [],
      "additives_old_tags": [],
      "additives_original_tags": [],
      "additives_prev_original_tags": [],
      "additives_prev_tags": [],
      "additives_tags": [],
      "allergens": "",
      "allergens_debug_tags": [],
      "allergens_from_ingredients": "",
      "allergens_hierarchy": [],
      "allergens_tags": [],
      "amino_acids_prev_tags": [],
      "amino_acids_tags": [],
      "brands": "",
      "brands_debug_tags": [],
      "brands_tags": [],
      "categories": "Miels de fleurs",
      "categories_debug_tags": [],
      "categories_hierarchy": [
        "en:spreads",
        "en:breakfasts",
        "en:sweet-spreads",
        "en:bee-products",
        "en:farming-products",
        "en:sweeteners",
        "en:honeys",
        "fr:miels-de-fleurs"
      ],
      "categories_prev_hierarchy": [
        "en:breakfasts",
        "en:spreads",
        "en:sweet-spreads",
        "en:bee-products",
        "en:farming-products",
        "en:sweeteners",
        "en:honeys",
        "fr:miels-de-fleurs"
      ],
      "categories_prev_tags": [
        "en:breakfasts",
        "en:spreads",
        "en:sweet-spreads",
        "en:bee-products",
        "en:farming-products",
        "en:sweeteners",
        "en:honeys",
        "fr:miels-de-fleurs"
      ],
      "categories_tags": [
        "en:spreads",
        "en:breakfasts",
        "en:sweet-spreads",
        "en:bee-products",
        "en:farming-products",
        "en:sweeteners",
        "en:honeys",
        "fr:miels-de-fleurs"
      ],
      "checkers_tags": [],
      "cities_tags": [],
      "code": "3910050500061",
      "codes_tags": [
        "code-13",
        "3910050500061",
        "391005050006x",
        "39100505000xx",
        "3910050500xxx",
        "391005050xxxx",
        "39100505xxxxx",
        "3910050xxxxxx",
        "391005xxxxxxx",
        "39100xxxxxxxx",
        "3910xxxxxxxxx",
        "391xxxxxxxxxx",
        "39xxxxxxxxxxx",
        "3xxxxxxxxxxxx"
      ],
      "complete": 0,
      "correctors_tags": [
        "openfoodfacts-contributors",
        "moon-rabbit"
      ],
      "countries": "France",
      "countries_debug_tags": [],
      "countries_hierarchy": [
        "en:france"
      ],
      "countries_tags": [
        "en:france"
      ],
      "created_t": 1529471570,
      "creator": "kiliweb",
      "debug_param_sorted_langs": [
        "fr"
      ],
      "editors_tags": [
        "kiliweb",
        "openfoodfacts-contributors",
        "moon-rabbit"
      ],
      "emb_codes": "",
      "emb_codes_debug_tags": [],
      "emb_codes_orig": "",
      "emb_codes_tags": [],
      "entry_dates_tags": [
        "2018-06-20",
        "2018-06",
        "2018"
      ],
      "expiration_date": "",
      "expiration_date_debug_tags": [],
      "generic_name": "",
      "generic_name_fr": "",
      "generic_name_fr_debug_tags": [],
      "id": "3910050500061",
      "image_front_small_url": "http://images.productopener.localhost/images/products/391/005/050/0061/front_fr.4.200.jpg",
      "image_front_thumb_url": "http://images.productopener.localhost/images/products/391/005/050/0061/front_fr.4.100.jpg",
      "image_front_url": "http://images.productopener.localhost/images/products/391/005/050/0061/front_fr.4.400.jpg",
      "image_ingredients_small_url": "http://images.productopener.localhost/images/products/391/005/050/0061/ingredients_fr.7.200.jpg",
      "image_ingredients_thumb_url": "http://images.productopener.localhost/images/products/391/005/050/0061/ingredients_fr.7.100.jpg",
      "image_ingredients_url": "http://images.productopener.localhost/images/products/391/005/050/0061/ingredients_fr.7.400.jpg",
      "image_small_url": "http://images.productopener.localhost/images/products/391/005/050/0061/front_fr.4.200.jpg",
      "image_thumb_url": "http://images.productopener.localhost/images/products/391/005/050/0061/front_fr.4.100.jpg",
      "image_url": "http://images.productopener.localhost/images/products/391/005/050/0061/front_fr.4.400.jpg",
      "images": {
        "1": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "400": {
              "h": 400,
              "w": 300
            },
            "full": {
              "h": 1200,
              "w": 899
            }
          },
          "uploaded_t": "1529471572",
          "uploader": "kiliweb"
        },
        "2": {
          "sizes": {
            "100": {
              "h": 89,
              "w": 100
            },
            "400": {
              "h": 354,
              "w": 400
            },
            "full": {
              "h": 1200,
              "w": 1355
            }
          },
          "uploaded_t": "1529471575",
          "uploader": "kiliweb"
        },
        "front_fr": {
          "angle": null,
          "geometry": "0x0-0-0",
          "imgid": "1",
          "normalize": "0",
          "rev": "4",
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "200": {
              "h": 200,
              "w": 150
            },
            "400": {
              "h": 400,
              "w": 300
            },
            "full": {
              "h": 1200,
              "w": 899
            }
          },
          "white_magic": "0",
          "x1": null,
          "x2": null,
          "y1": null,
          "y2": null
        },
        "ingredients_fr": {
          "angle": null,
          "geometry": "0x0-0-0",
          "imgid": "2",
          "normalize": "0",
          "rev": "7",
          "sizes": {
            "100": {
              "h": 89,
              "w": 100
            },
            "200": {
              "h": 177,
              "w": 200
            },
            "400": {
              "h": 354,
              "w": 400
            },
            "full": {
              "h": 1200,
              "w": 1355
            }
          },
          "white_magic": "0",
          "x1": null,
          "x2": null,
          "y1": null,
          "y2": null
        }
      },
      "informers_tags": [
        "kiliweb",
        "moon-rabbit"
      ],
      "ingredients": [],
      "ingredients_debug": [],
      "ingredients_from_palm_oil_tags": [],
      "ingredients_hierarchy": [],
      "ingredients_ids_debug": [],
      "ingredients_original_tags": [],
      "ingredients_tags": [],
      "ingredients_text": "",
      "ingredients_text_debug": "",
      "ingredients_text_fr": "",
      "ingredients_text_fr_debug_tags": [],
      "ingredients_text_with_allergens": "",
      "ingredients_text_with_allergens_fr": "",
      "ingredients_that_may_be_from_palm_oil_tags": [],
      "interface_version_created": "20150316.jqm2",
      "interface_version_modified": "20120622",
      "labels": "",
      "labels_debug_tags": [],
      "labels_hierarchy": [],
      "labels_prev_hierarchy": [],
      "labels_prev_tags": [],
      "labels_tags": [],
      "lang": "fr",
      "lang_debug_tags": [],
      "languages": {
        "en:french": 3
      },
      "languages_codes": {
        "fr": 3
      },
      "languages_hierarchy": [
        "en:french"
      ],
      "languages_tags": [
        "en:french",
        "en:1"
      ],
      "last_edit_dates_tags": [
        "2018-06-21",
        "2018-06",
        "2018"
      ],
      "last_editor": "moon-rabbit",
      "last_image_dates_tags": [
        "2018-06-20",
        "2018-06",
        "2018"
      ],
      "last_image_t": 1529471575,
      "last_modified_by": "moon-rabbit",
      "last_modified_t": 1529608121,
      "lc": "fr",
      "link": "",
      "link_debug_tags": [],
      "manufacturing_places": "",
      "manufacturing_places_debug_tags": [],
      "manufacturing_places_tags": [],
      "max_imgid": "2",
      "minerals_prev_tags": [],
      "minerals_tags": [],
      "misc_tags": [
        "en:nutriscore-not-computed"
      ],
      "no_nutrition_data": "",
      "nova_group_debug": "no nova group when the product does not have ingredients",
      "nova_group_tags": [
        "not-applicable"
      ],
      "nucleotides_prev_tags": [],
      "nucleotides_tags": [],
      "nutrient_levels": {
        "fat": "low",
        "salt": "low",
        "saturated-fat": "low",
        "sugars": "low"
      },
      "nutrient_levels_tags": [
        "en:fat-in-low-quantity",
        "en:saturated-fat-in-low-quantity",
        "en:sugars-in-low-quantity",
        "en:salt-in-low-quantity"
      ],
      "nutriments": {
        "carbohydrates": "76.4",
        "carbohydrates_100g": "76.4",
        "carbohydrates_serving": "",
        "carbohydrates_unit": "g",
        "carbohydrates_value": "76.4",
        "energy": "1284",
        "energy_100g": "1284",
        "energy_serving": "",
        "energy_unit": "kcal",
        "energy_value": "307",
        "fat": "0",
        "fat_100g": "0",
        "fat_serving": "",
        "fat_unit": "g",
        "fat_value": "0",
        "proteins": "0.4",
        "proteins_100g": "0.4",
        "proteins_serving": "",
        "proteins_unit": "g",
        "proteins_value": "0.4",
        "salt": "0",
        "salt_100g": "0",
        "salt_serving": "",
        "salt_unit": "g",
        "salt_value": "0",
        "saturated-fat": "0",
        "saturated-fat_100g": "0",
        "saturated-fat_serving": "",
        "saturated-fat_unit": "g",
        "saturated-fat_value": "0",
        "sodium": 0,
        "sodium_100g": "0",
        "sodium_serving": "",
        "sodium_unit": "g",
        "sodium_value": "0",
        "sugars": "0",
        "sugars_100g": "0",
        "sugars_serving": "",
        "sugars_unit": "g",
        "sugars_value": "0"
      },
      "nutrition_data": "on",
      "nutrition_data_per": "100g",
      "nutrition_data_per_debug_tags": [],
      "nutrition_data_prepared": "",
      "nutrition_data_prepared_per": "100g",
      "nutrition_data_prepared_per_debug_tags": [],
      "nutrition_grades_tags": [
        "not-applicable"
      ],
      "nutrition_score_debug": "no nutriscore for category en:honeys",
      "origins": "",
      "origins_debug_tags": [],
      "origins_tags": [],
      "packaging": "",
      "packaging_debug_tags": [],
      "packaging_tags": [],
      "photographers_tags": [
        "kiliweb"
      ],
      "pnns_groups_1": "Sugary snacks",
      "pnns_groups_1_tags": [
        "sugary-snacks"
      ],
      "pnns_groups_2": "Sweets",
      "pnns_groups_2_tags": [
        "sweets"
      ],
      "product_name": "Miel de fleurs",
      "product_name_debug_tags": [],
      "product_name_fr": "Miel de fleurs",
      "product_name_fr_debug_tags": [],
      "product_quantity": 500,
      "purchase_places": "",
      "purchase_places_debug_tags": [],
      "purchase_places_tags": [],
      "quality_tags": [],
      "quantity": "500 g",
      "quantity_debug_tags": [],
      "rev": 8,
      "selected_images": {
        "front": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/391/005/050/0061/front_fr.4.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/391/005/050/0061/front_fr.4.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/391/005/050/0061/front_fr.4.100.jpg"
          }
        },
        "ingredients": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/391/005/050/0061/ingredients_fr.7.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/391/005/050/0061/ingredients_fr.7.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/391/005/050/0061/ingredients_fr.7.100.jpg"
          }
        }
      },
      "serving_quantity": 0,
      "serving_size": "",
      "serving_size_debug_tags": [],
      "sortkey": 529608121,
      "states": "en:to-be-completed, en:nutrition-facts-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-completed, en:brands-to-be-completed, en:packaging-to-be-completed, en:quantity-completed, en:product-name-completed, en:photos-to-be-validated, en:photos-uploaded",
      "states_hierarchy": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "states_tags": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "stores": "",
      "stores_debug_tags": [],
      "stores_tags": [],
      "traces": "",
      "traces_debug_tags": [],
      "traces_from_ingredients": "",
      "traces_hierarchy": [],
      "traces_tags": [],
      "unknown_ingredients_n": 0,
      "unknown_nutrients_tags": [],
      "update_key": "novacat",
      "url": "http://world.productopener.localhost/product/3910050500061/miel-de-fleurs",
      "vitamins_prev_tags": [],
      "vitamins_tags": []
    },
    {
      "_id": "3903504220103",
      "_keywords": [],
      "additives_debug_tags": [],
      "additives_old_tags": [],
      "additives_original_tags": [],
      "additives_prev_original_tags": [],
      "additives_prev_tags": [],
      "additives_tags": [],
      "allergens": "",
      "allergens_debug_tags": [],
      "allergens_from_ingredients": "",
      "allergens_from_user": "(mk)",
      "allergens_hierarchy": [],
      "allergens_tags": [],
      "amino_acids_prev_tags": [],
      "amino_acids_tags": [],
      "brands": "",
      "brands_debug_tags": [],
      "brands_tags": [],
      "categories": "",
      "categories_debug_tags": [],
      "categories_hierarchy": [],
      "categories_prev_hierarchy": [],
      "categories_prev_tags": [],
      "categories_tags": [],
      "checkers_tags": [],
      "cities_tags": [],
      "code": "3903504220103",
      "codes_tags": [
        "code-13",
        "3903504220103",
        "390350422010x",
        "39035042201xx",
        "3903504220xxx",
        "390350422xxxx",
        "39035042xxxxx",
        "3903504xxxxxx",
        "390350xxxxxxx",
        "39035xxxxxxxx",
        "3903xxxxxxxxx",
        "390xxxxxxxxxx",
        "39xxxxxxxxxxx",
        "3xxxxxxxxxxxx"
      ],
      "complete": 0,
      "correctors_tags": [
        "sebleouf"
      ],
      "countries": "Албанија,Kosovo,Република Македонија",
      "countries_debug_tags": [],
      "countries_hierarchy": [
        "en:albania",
        "en:kosovo",
        "en:republic-of-macedonia"
      ],
      "countries_tags": [
        "en:albania",
        "en:kosovo",
        "en:republic-of-macedonia"
      ],
      "created_t": 1538143417,
      "creator": "sebleouf",
      "debug_param_sorted_langs": [
        "sq"
      ],
      "editors_tags": [
        "sebleouf"
      ],
      "emb_codes": "",
      "emb_codes_debug_tags": [],
      "emb_codes_orig": "",
      "emb_codes_tags": [],
      "entry_dates_tags": [
        "2018-09-28",
        "2018-09",
        "2018"
      ],
      "expiration_date": "",
      "expiration_date_debug_tags": [],
      "generic_name": "",
      "generic_name_sq": "",
      "generic_name_sq_debug_tags": [],
      "id": "3903504220103",
      "image_front_small_url": "http://images.productopener.localhost/images/products/390/350/422/0103/front_sq.5.200.jpg",
      "image_front_thumb_url": "http://images.productopener.localhost/images/products/390/350/422/0103/front_sq.5.100.jpg",
      "image_front_url": "http://images.productopener.localhost/images/products/390/350/422/0103/front_sq.5.400.jpg",
      "image_ingredients_small_url": "http://images.productopener.localhost/images/products/390/350/422/0103/ingredients_sq.8.200.jpg",
      "image_ingredients_thumb_url": "http://images.productopener.localhost/images/products/390/350/422/0103/ingredients_sq.8.100.jpg",
      "image_ingredients_url": "http://images.productopener.localhost/images/products/390/350/422/0103/ingredients_sq.8.400.jpg",
      "image_small_url": "http://images.productopener.localhost/images/products/390/350/422/0103/front_sq.5.200.jpg",
      "image_thumb_url": "http://images.productopener.localhost/images/products/390/350/422/0103/front_sq.5.100.jpg",
      "image_url": "http://images.productopener.localhost/images/products/390/350/422/0103/front_sq.5.400.jpg",
      "images": {
        "1": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "400": {
              "h": 400,
              "w": 299
            },
            "full": {
              "h": 2000,
              "w": 1496
            }
          },
          "uploaded_t": 1538143431,
          "uploader": "sebleouf"
        },
        "2": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "400": {
              "h": 400,
              "w": 299
            },
            "full": {
              "h": 2000,
              "w": 1496
            }
          },
          "uploaded_t": 1538143431,
          "uploader": "sebleouf"
        },
        "3": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "400": {
              "h": 400,
              "w": 299
            },
            "full": {
              "h": 2000,
              "w": 1496
            }
          },
          "uploaded_t": 1541423716,
          "uploader": "sebleouf"
        },
        "4": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "400": {
              "h": 400,
              "w": 299
            },
            "full": {
              "h": 2000,
              "w": 1496
            }
          },
          "uploaded_t": 1541423722,
          "uploader": "sebleouf"
        },
        "front_sq": {
          "angle": "0",
          "geometry": "385x1730-651-234",
          "imgid": "2",
          "normalize": "false",
          "rev": "5",
          "sizes": {
            "100": {
              "h": 100,
              "w": 22
            },
            "200": {
              "h": 200,
              "w": 45
            },
            "400": {
              "h": 400,
              "w": 89
            },
            "full": {
              "h": 1730,
              "w": 385
            }
          },
          "white_magic": "false",
          "x1": "130.25",
          "x2": "207.25",
          "y1": "46.8125",
          "y2": "392.8125"
        },
        "ingredients_sq": {
          "angle": 0,
          "geometry": "0x0--5--5",
          "imgid": "3",
          "normalize": null,
          "rev": "8",
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "200": {
              "h": 200,
              "w": 150
            },
            "400": {
              "h": 400,
              "w": 299
            },
            "full": {
              "h": 2000,
              "w": 1496
            }
          },
          "white_magic": null,
          "x1": "-1",
          "x2": "-1",
          "y1": "-1",
          "y2": "-1"
        }
      },
      "informers_tags": [
        "sebleouf"
      ],
      "ingredients": [],
      "ingredients_debug": [],
      "ingredients_from_palm_oil_tags": [],
      "ingredients_hierarchy": [],
      "ingredients_ids_debug": [],
      "ingredients_original_tags": [],
      "ingredients_tags": [],
      "ingredients_text": "",
      "ingredients_text_debug": "",
      "ingredients_text_sq": "",
      "ingredients_text_sq_debug_tags": [],
      "ingredients_text_with_allergens": "",
      "ingredients_text_with_allergens_sq": "",
      "ingredients_that_may_be_from_palm_oil_tags": [],
      "interface_version_created": "20120622",
      "interface_version_modified": "20120622",
      "labels": "",
      "labels_debug_tags": [],
      "labels_hierarchy": [],
      "labels_prev_hierarchy": [],
      "labels_prev_tags": [],
      "labels_tags": [],
      "lang": "sq",
      "lang_debug_tags": [],
      "languages": {
        "en:albanian": 2
      },
      "languages_codes": {
        "sq": 2
      },
      "languages_hierarchy": [
        "en:albanian"
      ],
      "languages_tags": [
        "en:albanian",
        "en:1"
      ],
      "last_edit_dates_tags": [
        "2018-11-05",
        "2018-11",
        "2018"
      ],
      "last_editor": "sebleouf",
      "last_image_dates_tags": [
        "2018-11-05",
        "2018-11",
        "2018"
      ],
      "last_image_t": 1541423723,
      "last_modified_by": "sebleouf",
      "last_modified_t": 1541424019,
      "lc": "sq",
      "link": "",
      "link_debug_tags": [],
      "manufacturing_places": "",
      "manufacturing_places_debug_tags": [],
      "manufacturing_places_tags": [],
      "max_imgid": "4",
      "minerals_prev_tags": [],
      "minerals_tags": [],
      "misc_tags": [
        "en:nutriscore-not-computed"
      ],
      "no_nutrition_data": "",
      "nova_group_debug": "no nova group when the product does not have ingredients",
      "nova_group_tags": [
        "not-applicable"
      ],
      "nucleotides_prev_tags": [],
      "nucleotides_tags": [],
      "nutrient_levels": {},
      "nutrient_levels_tags": [],
      "nutriments": {},
      "nutrition_data": "on",
      "nutrition_data_per": "100g",
      "nutrition_data_per_debug_tags": [],
      "nutrition_data_prepared": "",
      "nutrition_data_prepared_per": "100g",
      "nutrition_data_prepared_per_debug_tags": [],
      "nutrition_grades_tags": [
        "not-applicable"
      ],
      "nutrition_score_debug": "no score when the product does not have a category",
      "origins": "",
      "origins_debug_tags": [],
      "origins_tags": [],
      "packaging": "",
      "packaging_debug_tags": [],
      "packaging_tags": [],
      "photographers_tags": [
        "sebleouf"
      ],
      "pnns_groups_1": "unknown",
      "pnns_groups_1_tags": [
        "unknown"
      ],
      "pnns_groups_2": "unknown",
      "pnns_groups_2_tags": [
        "unknown"
      ],
      "product_name": "",
      "product_name_sq": "",
      "product_name_sq_debug_tags": [],
      "purchase_places": "",
      "purchase_places_debug_tags": [],
      "purchase_places_tags": [],
      "quality_tags": [
        "quantity-not-recognized"
      ],
      "quantity": "",
      "quantity_debug_tags": [],
      "rev": 10,
      "selected_images": {
        "front": {
          "display": {
            "sq": "http://images.productopener.localhost/images/products/390/350/422/0103/front_sq.5.400.jpg"
          },
          "small": {
            "sq": "http://images.productopener.localhost/images/products/390/350/422/0103/front_sq.5.200.jpg"
          },
          "thumb": {
            "sq": "http://images.productopener.localhost/images/products/390/350/422/0103/front_sq.5.100.jpg"
          }
        },
        "ingredients": {
          "display": {
            "sq": "http://images.productopener.localhost/images/products/390/350/422/0103/ingredients_sq.8.400.jpg"
          },
          "small": {
            "sq": "http://images.productopener.localhost/images/products/390/350/422/0103/ingredients_sq.8.200.jpg"
          },
          "thumb": {
            "sq": "http://images.productopener.localhost/images/products/390/350/422/0103/ingredients_sq.8.100.jpg"
          }
        }
      },
      "serving_quantity": 0,
      "serving_size": "",
      "serving_size_debug_tags": [],
      "sortkey": 541424019,
      "states": "en:to-be-completed, en:nutrition-facts-to-be-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-to-be-completed, en:quantity-to-be-completed, en:product-name-to-be-completed, en:photos-to-be-validated, en:photos-uploaded",
      "states_hierarchy": [
        "en:to-be-completed",
        "en:nutrition-facts-to-be-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-to-be-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "states_tags": [
        "en:to-be-completed",
        "en:nutrition-facts-to-be-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-to-be-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "stores": "",
      "stores_debug_tags": [],
      "stores_tags": [],
      "traces": "",
      "traces_debug_tags": [],
      "traces_from_ingredients": "",
      "traces_from_user": "(mk)",
      "traces_hierarchy": [],
      "traces_tags": [],
      "unknown_ingredients_n": 0,
      "unknown_nutrients_tags": [],
      "update_key": "novacat",
      "url": "http://world.productopener.localhost/product/3903504220103",
      "vitamins_prev_tags": [],
      "vitamins_tags": []
    },
    {
      "_id": "3917800003551",
      "_keywords": [
        "poi",
        "petit",
        "en",
        "conserve",
        "carotte",
        "et"
      ],
      "additives_debug_tags": [],
      "additives_old_tags": [],
      "additives_original_tags": [],
      "additives_prev_original_tags": [],
      "additives_prev_tags": [],
      "additives_tags": [],
      "allergens": "",
      "allergens_debug_tags": [],
      "allergens_from_ingredients": "",
      "allergens_from_user": "(fr)",
      "allergens_hierarchy": [],
      "allergens_tags": [],
      "amino_acids_prev_tags": [],
      "amino_acids_tags": [],
      "brands": "",
      "brands_debug_tags": [],
      "brands_tags": [],
      "categories": "Petits pois et carottes en conserve",
      "categories_debug_tags": [
        "added-en-plant-based-foods-and-beverages",
        "added-en-plant-based-foods",
        "added-en-canned-foods",
        "added-en-fruits-and-vegetables-based-foods",
        "added-en-canned-plant-based-foods",
        "added-en-vegetables-based-foods",
        "added-en-canned-vegetables",
        "added-en-canned-legumes",
        "added-en-canned-peas-and-carrots",
        "removed-fr-petits-pois-et-carottes-en-conserve"
      ],
      "categories_hierarchy": [
        "en:plant-based-foods-and-beverages",
        "en:plant-based-foods",
        "en:canned-foods",
        "en:fruits-and-vegetables-based-foods",
        "en:canned-plant-based-foods",
        "en:vegetables-based-foods",
        "en:canned-vegetables",
        "en:canned-legumes",
        "en:canned-peas-and-carrots"
      ],
      "categories_prev_hierarchy": [
        "fr:Petits pois et carottes en conserve"
      ],
      "categories_prev_tags": [
        "fr:petits-pois-et-carottes-en-conserve"
      ],
      "categories_tags": [
        "en:plant-based-foods-and-beverages",
        "en:plant-based-foods",
        "en:canned-foods",
        "en:fruits-and-vegetables-based-foods",
        "en:canned-plant-based-foods",
        "en:vegetables-based-foods",
        "en:canned-vegetables",
        "en:canned-legumes",
        "en:canned-peas-and-carrots"
      ],
      "checkers_tags": [],
      "cities_tags": [],
      "code": "3917800003551",
      "codes_tags": [
        "code-13",
        "3917800003551",
        "391780000355x",
        "39178000035xx",
        "3917800003xxx",
        "391780000xxxx",
        "39178000xxxxx",
        "3917800xxxxxx",
        "391780xxxxxxx",
        "39178xxxxxxxx",
        "3917xxxxxxxxx",
        "391xxxxxxxxxx",
        "39xxxxxxxxxxx",
        "3xxxxxxxxxxxx"
      ],
      "complete": 0,
      "correctors_tags": [
        "openfoodfacts-contributors",
        "desan"
      ],
      "countries": "France",
      "countries_debug_tags": [],
      "countries_hierarchy": [
        "en:france"
      ],
      "countries_tags": [
        "en:france"
      ],
      "created_t": 1539276136,
      "creator": "kiliweb",
      "debug_param_sorted_langs": [
        "fr"
      ],
      "editors_tags": [
        "openfoodfacts-contributors",
        "kiliweb",
        "desan"
      ],
      "emb_codes": "",
      "emb_codes_debug_tags": [],
      "emb_codes_orig": "",
      "emb_codes_tags": [],
      "entry_dates_tags": [
        "2018-10-11",
        "2018-10",
        "2018"
      ],
      "expiration_date": "",
      "expiration_date_debug_tags": [],
      "generic_name": "",
      "generic_name_fr": "",
      "generic_name_fr_debug_tags": [],
      "id": "3917800003551",
      "image_front_small_url": "http://images.productopener.localhost/images/products/391/780/000/3551/front_fr.4.200.jpg",
      "image_front_thumb_url": "http://images.productopener.localhost/images/products/391/780/000/3551/front_fr.4.100.jpg",
      "image_front_url": "http://images.productopener.localhost/images/products/391/780/000/3551/front_fr.4.400.jpg",
      "image_ingredients_small_url": "http://images.productopener.localhost/images/products/391/780/000/3551/ingredients_fr.7.200.jpg",
      "image_ingredients_thumb_url": "http://images.productopener.localhost/images/products/391/780/000/3551/ingredients_fr.7.100.jpg",
      "image_ingredients_url": "http://images.productopener.localhost/images/products/391/780/000/3551/ingredients_fr.7.400.jpg",
      "image_small_url": "http://images.productopener.localhost/images/products/391/780/000/3551/front_fr.4.200.jpg",
      "image_thumb_url": "http://images.productopener.localhost/images/products/391/780/000/3551/front_fr.4.100.jpg",
      "image_url": "http://images.productopener.localhost/images/products/391/780/000/3551/front_fr.4.400.jpg",
      "images": {
        "1": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "400": {
              "h": 400,
              "w": 301
            },
            "full": {
              "h": 1200,
              "w": 902
            }
          },
          "uploaded_t": 1539276137,
          "uploader": "kiliweb"
        },
        "2": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "400": {
              "h": 400,
              "w": 300
            },
            "full": {
              "h": 1200,
              "w": 900
            }
          },
          "uploaded_t": 1539276138,
          "uploader": "kiliweb"
        },
        "front_fr": {
          "angle": null,
          "geometry": "0x0-0-0",
          "imgid": "1",
          "normalize": "0",
          "rev": "4",
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "200": {
              "h": 200,
              "w": 150
            },
            "400": {
              "h": 400,
              "w": 301
            },
            "full": {
              "h": 1200,
              "w": 902
            }
          },
          "white_magic": "0",
          "x1": null,
          "x2": null,
          "y1": null,
          "y2": null
        },
        "ingredients_fr": {
          "angle": null,
          "geometry": "0x0-0-0",
          "imgid": "2",
          "normalize": "0",
          "rev": "7",
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "200": {
              "h": 200,
              "w": 150
            },
            "400": {
              "h": 400,
              "w": 300
            },
            "full": {
              "h": 1200,
              "w": 900
            }
          },
          "white_magic": "0",
          "x1": null,
          "x2": null,
          "y1": null,
          "y2": null
        }
      },
      "informers_tags": [
        "kiliweb",
        "desan"
      ],
      "ingredients": [],
      "ingredients_debug": [],
      "ingredients_from_palm_oil_tags": [],
      "ingredients_hierarchy": [],
      "ingredients_ids_debug": [],
      "ingredients_original_tags": [],
      "ingredients_tags": [],
      "ingredients_text": "",
      "ingredients_text_debug": "",
      "ingredients_text_fr": "",
      "ingredients_text_fr_debug_tags": [],
      "ingredients_text_with_allergens": "",
      "ingredients_text_with_allergens_fr": "",
      "ingredients_that_may_be_from_palm_oil_tags": [],
      "interface_version_created": "20150316.jqm2",
      "interface_version_modified": "20120622",
      "labels": "",
      "labels_debug_tags": [],
      "labels_hierarchy": [],
      "labels_prev_hierarchy": [],
      "labels_prev_tags": [],
      "labels_tags": [],
      "lang": "fr",
      "lang_debug_tags": [],
      "languages": {
        "en:french": 3
      },
      "languages_codes": {
        "fr": 3
      },
      "languages_hierarchy": [
        "en:french"
      ],
      "languages_tags": [
        "en:french",
        "en:1"
      ],
      "last_edit_dates_tags": [
        "2018-10-12",
        "2018-10",
        "2018"
      ],
      "last_editor": "desan",
      "last_image_dates_tags": [
        "2018-10-11",
        "2018-10",
        "2018"
      ],
      "last_image_t": 1539276138,
      "last_modified_by": "desan",
      "last_modified_t": 1539339222,
      "lc": "fr",
      "link": "",
      "link_debug_tags": [],
      "manufacturing_places": "",
      "manufacturing_places_debug_tags": [],
      "manufacturing_places_tags": [],
      "max_imgid": "2",
      "minerals_prev_tags": [],
      "minerals_tags": [],
      "misc_tags": [
        "en:nutrition-no-fiber",
        "en:nutrition-no-fruits-vegetables-nuts",
        "en:nutrition-no-fiber-or-fruits-vegetables-nuts",
        "en:nutriscore-computed"
      ],
      "no_nutrition_data": "",
      "nova_group_debug": "no nova group when the product does not have ingredients",
      "nova_group_tags": [
        "not-applicable"
      ],
      "nucleotides_prev_tags": [],
      "nucleotides_tags": [],
      "nutrient_levels": {
        "fat": "low",
        "salt": "moderate",
        "saturated-fat": "low",
        "sugars": "low"
      },
      "nutrient_levels_tags": [
        "en:fat-in-low-quantity",
        "en:saturated-fat-in-low-quantity",
        "en:sugars-in-low-quantity",
        "en:salt-in-moderate-quantity"
      ],
      "nutriments": {
        "carbohydrates": "8.8",
        "carbohydrates_100g": "8.8",
        "carbohydrates_serving": "",
        "carbohydrates_unit": "g",
        "carbohydrates_value": "8.8",
        "energy": "264",
        "energy_100g": "264",
        "energy_serving": "",
        "energy_unit": "kcal",
        "energy_value": "63",
        "fat": "0.6",
        "fat_100g": "0.6",
        "fat_serving": "",
        "fat_unit": "g",
        "fat_value": "0.6",
        "nutrition-score-fr": "0",
        "nutrition-score-fr_100g": "0",
        "nutrition-score-uk": "0",
        "nutrition-score-uk_100g": "0",
        "proteins": "3.4",
        "proteins_100g": "3.4",
        "proteins_serving": "",
        "proteins_unit": "g",
        "proteins_value": "3.4",
        "salt": "0.57",
        "salt_100g": "0.57",
        "salt_serving": "",
        "salt_unit": "g",
        "salt_value": "0.57",
        "saturated-fat": "0.2",
        "saturated-fat_100g": "0.2",
        "saturated-fat_serving": "",
        "saturated-fat_unit": "g",
        "saturated-fat_value": "0.2",
        "sodium": "0.224409448818898",
        "sodium_100g": "0.224409448818898",
        "sodium_serving": "",
        "sodium_unit": "g",
        "sodium_value": "0.224409448818898",
        "sugars": "3.7",
        "sugars_100g": "3.7",
        "sugars_serving": "",
        "sugars_unit": "g",
        "sugars_value": "3.7"
      },
      "nutrition_data": "on",
      "nutrition_data_per": "100g",
      "nutrition_data_per_debug_tags": [],
      "nutrition_data_prepared": "",
      "nutrition_data_prepared_per": "100g",
      "nutrition_data_prepared_per_debug_tags": [],
      "nutrition_grade_fr": "b",
      "nutrition_grades": "b",
      "nutrition_grades_tags": [
        "b"
      ],
      "nutrition_score_debug": " -- energy 0 + sat-fat 0 + fr-sat-fat-for-fats 4 + sugars 0 + sodium 2 - fruits 0% 0 - fiber 0 - proteins 2 -- fsa 0 -- fr 0",
      "nutrition_score_warning_no_fiber": 1,
      "nutrition_score_warning_no_fruits_vegetables_nuts": 1,
      "origins": "",
      "origins_debug_tags": [],
      "origins_tags": [],
      "packaging": "",
      "packaging_debug_tags": [],
      "packaging_tags": [],
      "photographers_tags": [
        "kiliweb"
      ],
      "pnns_groups_1": "Fruits and vegetables",
      "pnns_groups_1_tags": [
        "fruits-and-vegetables"
      ],
      "pnns_groups_2": "Vegetables",
      "pnns_groups_2_tags": [
        "vegetables"
      ],
      "product_name": "Petits pois &amp; carottes",
      "product_name_debug_tags": [],
      "product_name_fr": "Petits pois &amp; carottes",
      "product_name_fr_debug_tags": [],
      "purchase_places": "",
      "purchase_places_debug_tags": [],
      "purchase_places_tags": [],
      "quality_tags": [
        "quantity-not-recognized"
      ],
      "quantity": "",
      "quantity_debug_tags": [],
      "rev": 8,
      "selected_images": {
        "front": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/391/780/000/3551/front_fr.4.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/391/780/000/3551/front_fr.4.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/391/780/000/3551/front_fr.4.100.jpg"
          }
        },
        "ingredients": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/391/780/000/3551/ingredients_fr.7.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/391/780/000/3551/ingredients_fr.7.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/391/780/000/3551/ingredients_fr.7.100.jpg"
          }
        }
      },
      "serving_quantity": 0,
      "serving_size": "",
      "serving_size_debug_tags": [],
      "sortkey": 539339222,
      "states": "en:to-be-completed, en:nutrition-facts-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-completed, en:brands-to-be-completed, en:packaging-to-be-completed, en:quantity-to-be-completed, en:product-name-completed, en:photos-to-be-validated, en:photos-uploaded",
      "states_hierarchy": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "states_tags": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "stores": "",
      "stores_debug_tags": [],
      "stores_tags": [],
      "traces": "",
      "traces_debug_tags": [],
      "traces_from_ingredients": "",
      "traces_from_user": "(fr)",
      "traces_hierarchy": [],
      "traces_tags": [],
      "unknown_ingredients_n": 0,
      "unknown_nutrients_tags": [],
      "update_key": "novacat",
      "url": "http://world.productopener.localhost/product/3917800003551/petits-pois-carottes",
      "vitamins_prev_tags": [],
      "vitamins_tags": []
    },
    {
      "_id": "3900000999861",
      "_keywords": [
        "jambon",
        "saucisson",
        "au"
      ],
      "additives_debug_tags": [],
      "additives_old_tags": [],
      "additives_original_tags": [],
      "additives_prev_original_tags": [],
      "additives_prev_tags": [],
      "additives_tags": [],
      "allergens": "",
      "allergens_from_ingredients": "",
      "allergens_hierarchy": [],
      "allergens_tags": [],
      "amino_acids_prev_tags": [],
      "amino_acids_tags": [],
      "checkers_tags": [],
      "code": "3900000999861",
      "codes_tags": [
        "code-13",
        "3900000999861",
        "390000099986x",
        "39000009998xx",
        "3900000999xxx",
        "390000099xxxx",
        "39000009xxxxx",
        "3900000xxxxxx",
        "390000xxxxxxx",
        "39000xxxxxxxx",
        "3900xxxxxxxxx",
        "390xxxxxxxxxx",
        "39xxxxxxxxxxx",
        "3xxxxxxxxxxxx"
      ],
      "complete": 0,
      "correctors_tags": [
        "openfoodfacts-contributors"
      ],
      "countries": "en:france",
      "countries_debug_tags": [],
      "countries_hierarchy": [
        "en:france"
      ],
      "countries_tags": [
        "en:france"
      ],
      "created_t": 1527851312,
      "creator": "kiliweb",
      "editors_tags": [
        "kiliweb",
        "openfoodfacts-contributors"
      ],
      "entry_dates_tags": [
        "2018-06-01",
        "2018-06",
        "2018"
      ],
      "id": "3900000999861",
      "image_front_small_url": "http://images.productopener.localhost/images/products/390/000/099/9861/front_fr.4.200.jpg",
      "image_front_thumb_url": "http://images.productopener.localhost/images/products/390/000/099/9861/front_fr.4.100.jpg",
      "image_front_url": "http://images.productopener.localhost/images/products/390/000/099/9861/front_fr.4.400.jpg",
      "image_ingredients_small_url": "http://images.productopener.localhost/images/products/390/000/099/9861/ingredients_fr.7.200.jpg",
      "image_ingredients_thumb_url": "http://images.productopener.localhost/images/products/390/000/099/9861/ingredients_fr.7.100.jpg",
      "image_ingredients_url": "http://images.productopener.localhost/images/products/390/000/099/9861/ingredients_fr.7.400.jpg",
      "image_small_url": "http://images.productopener.localhost/images/products/390/000/099/9861/front_fr.4.200.jpg",
      "image_thumb_url": "http://images.productopener.localhost/images/products/390/000/099/9861/front_fr.4.100.jpg",
      "image_url": "http://images.productopener.localhost/images/products/390/000/099/9861/front_fr.4.400.jpg",
      "images": {
        "1": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "400": {
              "h": 400,
              "w": 300
            },
            "full": {
              "h": 1200,
              "w": 901
            }
          },
          "uploaded_t": "1527851314",
          "uploader": "kiliweb"
        },
        "2": {
          "sizes": {
            "100": {
              "h": 75,
              "w": 100
            },
            "400": {
              "h": 300,
              "w": 400
            },
            "full": {
              "h": 1200,
              "w": 1600
            }
          },
          "uploaded_t": "1527851315",
          "uploader": "kiliweb"
        },
        "front_fr": {
          "angle": null,
          "geometry": "0x0-0-0",
          "imgid": "1",
          "normalize": "0",
          "rev": "4",
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "200": {
              "h": 200,
              "w": 150
            },
            "400": {
              "h": 400,
              "w": 300
            },
            "full": {
              "h": 1200,
              "w": 901
            }
          },
          "white_magic": "0",
          "x1": null,
          "x2": null,
          "y1": null,
          "y2": null
        },
        "ingredients_fr": {
          "angle": null,
          "geometry": "0x0-0-0",
          "imgid": "2",
          "normalize": "0",
          "rev": "7",
          "sizes": {
            "100": {
              "h": 75,
              "w": 100
            },
            "200": {
              "h": 150,
              "w": 200
            },
            "400": {
              "h": 300,
              "w": 400
            },
            "full": {
              "h": 1200,
              "w": 1600
            }
          },
          "white_magic": "0",
          "x1": null,
          "x2": null,
          "y1": null,
          "y2": null
        }
      },
      "informers_tags": [
        "kiliweb"
      ],
      "ingredients": [],
      "ingredients_debug": [],
      "ingredients_from_palm_oil_tags": [],
      "ingredients_hierarchy": [],
      "ingredients_ids_debug": [],
      "ingredients_original_tags": [],
      "ingredients_tags": [],
      "ingredients_text_debug": null,
      "ingredients_text_with_allergens": null,
      "ingredients_text_with_allergens_fr": null,
      "ingredients_that_may_be_from_palm_oil_tags": [],
      "interface_version_created": "20150316.jqm2",
      "interface_version_modified": "20150316.jqm2",
      "lang": "fr",
      "languages": {
        "en:french": 3
      },
      "languages_codes": {
        "fr": 3
      },
      "languages_hierarchy": [
        "en:french"
      ],
      "languages_tags": [
        "en:french",
        "en:1"
      ],
      "last_edit_dates_tags": [
        "2018-06-01",
        "2018-06",
        "2018"
      ],
      "last_editor": "kiliweb",
      "last_image_dates_tags": [
        "2018-06-01",
        "2018-06",
        "2018"
      ],
      "last_image_t": 1527851315,
      "last_modified_by": "kiliweb",
      "last_modified_t": 1527851445,
      "lc": "fr",
      "max_imgid": "2",
      "minerals_prev_tags": [],
      "minerals_tags": [],
      "misc_tags": [
        "en:nutriscore-not-computed"
      ],
      "no_nutrition_data": "",
      "nova_group_debug": "no nova group when the product does not have ingredients",
      "nova_group_tags": [
        "not-applicable"
      ],
      "nucleotides_prev_tags": [],
      "nucleotides_tags": [],
      "nutrient_levels": {},
      "nutrient_levels_tags": [],
      "nutriments": {
        "carbohydrates": "1.3",
        "carbohydrates_100g": "1.3",
        "carbohydrates_serving": "",
        "carbohydrates_unit": "",
        "carbohydrates_value": "1.3",
        "energy": "958",
        "energy_100g": "958",
        "energy_serving": "",
        "energy_unit": "kcal",
        "energy_value": "229",
        "fat": "9.9",
        "fat_100g": "9.9",
        "fat_serving": "",
        "fat_unit": "",
        "fat_value": "9.9",
        "proteins": "33.79",
        "proteins_100g": "33.79",
        "proteins_serving": "",
        "proteins_unit": "",
        "proteins_value": "33.79",
        "salt": "6.6",
        "salt_100g": "6.6",
        "salt_serving": "",
        "salt_unit": "",
        "salt_value": "6.6",
        "saturated-fat": "3.5",
        "saturated-fat_100g": "3.5",
        "saturated-fat_serving": "",
        "saturated-fat_unit": "",
        "saturated-fat_value": "3.5",
        "sodium": "2.59842519685039",
        "sodium_100g": "2.59842519685039",
        "sodium_serving": "",
        "sugars": "1.3",
        "sugars_100g": "1.3",
        "sugars_serving": "",
        "sugars_unit": "",
        "sugars_value": "1.3"
      },
      "nutrition_data_per": "100g",
      "nutrition_data_per_debug_tags": [],
      "nutrition_data_prepared_per": "100g",
      "nutrition_grades_tags": [
        "not-applicable"
      ],
      "nutrition_score_debug": "no score when the product does not have a category",
      "photographers_tags": [
        "kiliweb"
      ],
      "product_name": "Saucisson au jambon",
      "product_name_debug_tags": [],
      "product_name_fr": "Saucisson au jambon",
      "quality_tags": [],
      "rev": 9,
      "selected_images": {
        "front": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/390/000/099/9861/front_fr.4.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/390/000/099/9861/front_fr.4.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/390/000/099/9861/front_fr.4.100.jpg"
          }
        },
        "ingredients": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/390/000/099/9861/ingredients_fr.7.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/390/000/099/9861/ingredients_fr.7.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/390/000/099/9861/ingredients_fr.7.100.jpg"
          }
        }
      },
      "serving_quantity": 0,
      "sortkey": 527851445,
      "states": "en:to-be-completed, en:nutrition-facts-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-to-be-completed, en:quantity-to-be-completed, en:product-name-completed, en:photos-to-be-validated, en:photos-uploaded",
      "states_hierarchy": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "states_tags": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "traces_from_ingredients": "",
      "traces_hierarchy": [],
      "traces_tags": [],
      "unknown_ingredients_n": 0,
      "unknown_nutrients_tags": [],
      "update_key": "novacat",
      "url": "http://world.productopener.localhost/product/3900000999861/saucisson-au-jambon",
      "vitamins_prev_tags": [],
      "vitamins_tags": []
    },
    {
      "_id": "390502257",
      "_keywords": [
        "whey",
        "protein",
        "isapro"
      ],
      "additives_debug_tags": [],
      "additives_old_tags": [],
      "additives_original_tags": [],
      "additives_prev_original_tags": [],
      "additives_prev_tags": [],
      "additives_tags": [],
      "allergens": "",
      "allergens_hierarchy": [],
      "allergens_tags": [],
      "amino_acids_prev_tags": [],
      "amino_acids_tags": [],
      "checkers_tags": [],
      "code": "390502257",
      "codes_tags": [
        "code-9",
        "390502257",
        "39050225x",
        "3905022xx",
        "390502xxx",
        "39050xxxx",
        "3905xxxxx",
        "390xxxxxx",
        "39xxxxxxx",
        "3xxxxxxxx"
      ],
      "complete": 0,
      "correctors_tags": [],
      "countries": "en:US",
      "countries_hierarchy": [
        "en:united-states"
      ],
      "countries_tags": [
        "en:united-states"
      ],
      "created_t": 1483672188,
      "creator": "zoneblockscommunity",
      "editors_tags": [
        "zoneblockscommunity"
      ],
      "entry_dates_tags": [
        "2017-01-06",
        "2017-01",
        "2017"
      ],
      "id": "390502257",
      "informers_tags": [
        "zoneblockscommunity"
      ],
      "ingredients": [],
      "ingredients_debug": [],
      "ingredients_from_palm_oil_tags": [],
      "ingredients_hierarchy": [],
      "ingredients_ids_debug": [],
      "ingredients_original_tags": [],
      "ingredients_tags": [],
      "ingredients_text_debug": null,
      "ingredients_text_with_allergens": null,
      "ingredients_text_with_allergens_en": null,
      "ingredients_that_may_be_from_palm_oil_tags": [],
      "interface_version_created": "20150316.jqm2",
      "interface_version_modified": "20150316.jqm2",
      "lang": "en",
      "languages": {
        "en:english": 1
      },
      "languages_codes": {
        "en": 1
      },
      "languages_hierarchy": [
        "en:english"
      ],
      "languages_tags": [
        "en:english",
        "en:1"
      ],
      "last_edit_dates_tags": [
        "2017-01-06",
        "2017-01",
        "2017"
      ],
      "last_editor": "zoneblockscommunity",
      "last_modified_by": "zoneblockscommunity",
      "last_modified_t": 1483672188,
      "lc": "en",
      "minerals_prev_tags": [],
      "minerals_tags": [],
      "misc_tags": [
        "en:nutriscore-not-computed"
      ],
      "no_nutrition_data": "",
      "nova_group_debug": "no nova group when the product does not have ingredients",
      "nova_group_tags": [
        "not-applicable"
      ],
      "nucleotides_prev_tags": [],
      "nucleotides_tags": [],
      "nutrient_levels": {},
      "nutrient_levels_tags": [],
      "nutriments": {
        "carbohydrates": "8.7",
        "carbohydrates_100g": "8.7",
        "carbohydrates_serving": "",
        "carbohydrates_unit": "",
        "carbohydrates_value": "8.7",
        "fat": "6.525",
        "fat_100g": "6.525",
        "fat_serving": "",
        "fat_unit": "",
        "fat_value": "6.525",
        "proteins": "78.3",
        "proteins_100g": "78.3",
        "proteins_serving": "",
        "proteins_unit": "",
        "proteins_value": "78.3"
      },
      "nutrition_data_per": "100g",
      "nutrition_grades_tags": [
        "not-applicable"
      ],
      "nutrition_score_debug": "no score when the product does not have a category",
      "photographers_tags": [],
      "product_name": "IsaPro whey protein IsaPro Whey Protein IsaPro Whey Protein ",
      "product_name_debug_tags": [],
      "product_name_en": "IsaPro whey protein IsaPro Whey Protein IsaPro Whey Protein ",
      "quality_tags": [],
      "rev": 1,
      "serving_quantity": 0,
      "sortkey": 483672188,
      "states": "en:to-be-completed, en:nutrition-facts-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-to-be-completed, en:quantity-to-be-completed, en:product-name-completed, en:photos-to-be-uploaded",
      "states_hierarchy": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-completed",
        "en:photos-to-be-uploaded"
      ],
      "states_tags": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-completed",
        "en:photos-to-be-uploaded"
      ],
      "unknown_ingredients_n": 0,
      "unknown_nutrients_tags": [],
      "update_key": "novacat",
      "url": "http://world.productopener.localhost/product/390502257/isapro-whey-protein-isapro-whey-protein-isapro-whey-protein",
      "vitamins_prev_tags": [],
      "vitamins_tags": []
    },
    {
      "_id": "3902634650613",
      "_keywords": [],
      "checkers_tags": [],
      "code": "3902634650613",
      "codes_tags": [
        "code-13",
        "3902634650613",
        "390263465061x",
        "39026346506xx",
        "3902634650xxx",
        "390263465xxxx",
        "39026346xxxxx",
        "3902634xxxxxx",
        "390263xxxxxxx",
        "39026xxxxxxxx",
        "3902xxxxxxxxx",
        "390xxxxxxxxxx",
        "39xxxxxxxxxxx",
        "3xxxxxxxxxxxx"
      ],
      "complete": 0,
      "correctors_tags": [],
      "countries": "en:FR",
      "countries_hierarchy": [
        "en:france"
      ],
      "countries_tags": [
        "en:france"
      ],
      "created_t": 1538256599,
      "creator": "openfoodfacts-contributors",
      "editors_tags": [
        "openfoodfacts-contributors"
      ],
      "entry_dates_tags": [
        "2018-09-29",
        "2018-09",
        "2018"
      ],
      "id": "3902634650613",
      "image_front_small_url": "http://images.productopener.localhost/images/products/390/263/465/0613/front_fr.3.200.jpg",
      "image_front_thumb_url": "http://images.productopener.localhost/images/products/390/263/465/0613/front_fr.3.100.jpg",
      "image_front_url": "http://images.productopener.localhost/images/products/390/263/465/0613/front_fr.3.400.jpg",
      "image_small_url": "http://images.productopener.localhost/images/products/390/263/465/0613/front_fr.3.200.jpg",
      "image_thumb_url": "http://images.productopener.localhost/images/products/390/263/465/0613/front_fr.3.100.jpg",
      "image_url": "http://images.productopener.localhost/images/products/390/263/465/0613/front_fr.3.400.jpg",
      "images": {
        "1": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "400": {
              "h": 400,
              "w": 300
            },
            "full": {
              "h": 3264,
              "w": 2448
            }
          },
          "uploaded_t": 1538256599,
          "uploader": "openfoodfacts-contributors"
        },
        "2": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "400": {
              "h": 400,
              "w": 300
            },
            "full": {
              "h": 3264,
              "w": 2448
            }
          },
          "uploaded_t": 1538256628,
          "uploader": "openfoodfacts-contributors"
        },
        "front_fr": {
          "angle": 0,
          "geometry": "0x0--8--8",
          "imgid": "1",
          "normalize": null,
          "rev": "3",
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "200": {
              "h": 200,
              "w": 150
            },
            "400": {
              "h": 400,
              "w": 300
            },
            "full": {
              "h": 3264,
              "w": 2448
            }
          },
          "white_magic": null,
          "x1": "-1",
          "x2": "-1",
          "y1": "-1",
          "y2": "-1"
        }
      },
      "informers_tags": [
        "openfoodfacts-contributors"
      ],
      "ingredients": [],
      "ingredients_hierarchy": [],
      "ingredients_original_tags": [],
      "ingredients_tags": [],
      "interface_version_created": "20120622",
      "lang": "fr",
      "languages": {
        "en:french": 1
      },
      "languages_codes": {
        "fr": 1
      },
      "languages_hierarchy": [
        "en:french"
      ],
      "languages_tags": [
        "en:french",
        "en:1"
      ],
      "last_edit_dates_tags": [
        "2018-09-29",
        "2018-09",
        "2018"
      ],
      "last_editor": "openfoodfacts-contributors",
      "last_image_dates_tags": [
        "2018-09-29",
        "2018-09",
        "2018"
      ],
      "last_image_t": 1538256628,
      "last_modified_by": null,
      "last_modified_t": 1538256628,
      "lc": "fr",
      "max_imgid": "2",
      "nova_group_debug": "no nova group when the product does not have ingredients",
      "nova_group_tags": [
        "not-applicable"
      ],
      "nutriments": {},
      "photographers_tags": [
        "openfoodfacts-contributors"
      ],
      "rev": 4,
      "selected_images": {
        "front": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/390/263/465/0613/front_fr.3.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/390/263/465/0613/front_fr.3.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/390/263/465/0613/front_fr.3.100.jpg"
          }
        }
      },
      "sortkey": 538256628,
      "states": "en:to-be-completed, en:nutrition-facts-to-be-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-to-be-completed, en:quantity-to-be-completed, en:product-name-to-be-completed, en:photos-to-be-validated, en:photos-uploaded",
      "states_hierarchy": [
        "en:to-be-completed",
        "en:nutrition-facts-to-be-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-to-be-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "states_tags": [
        "en:to-be-completed",
        "en:nutrition-facts-to-be-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-to-be-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "unknown_ingredients_n": 0,
      "update_key": "novacat",
      "url": "http://world.productopener.localhost/product/3902634650613"
    },
    {
      "_id": "3905600000009",
      "_keywords": [
        "de",
        "noix",
        "huile"
      ],
      "additives_debug_tags": [],
      "additives_old_tags": [],
      "additives_original_tags": [],
      "additives_prev_original_tags": [],
      "additives_prev_tags": [],
      "additives_tags": [],
      "allergens": "",
      "allergens_from_ingredients": "",
      "allergens_hierarchy": [],
      "allergens_tags": [],
      "amino_acids_prev_tags": [],
      "amino_acids_tags": [],
      "checkers_tags": [],
      "code": "3905600000009",
      "codes_tags": [
        "code-13",
        "3905600000009",
        "390560000000x",
        "39056000000xx",
        "3905600000xxx",
        "390560000xxxx",
        "39056000xxxxx",
        "3905600xxxxxx",
        "390560xxxxxxx",
        "39056xxxxxxxx",
        "3905xxxxxxxxx",
        "390xxxxxxxxxx",
        "39xxxxxxxxxxx",
        "3xxxxxxxxxxxx"
      ],
      "complete": 0,
      "correctors_tags": [
        "openfoodfacts-contributors"
      ],
      "countries": "en:france",
      "countries_debug_tags": [],
      "countries_hierarchy": [
        "en:france"
      ],
      "countries_tags": [
        "en:france"
      ],
      "created_t": 1525185351,
      "creator": "kiliweb",
      "editors_tags": [
        "kiliweb",
        "openfoodfacts-contributors"
      ],
      "entry_dates_tags": [
        "2018-05-01",
        "2018-05",
        "2018"
      ],
      "id": "3905600000009",
      "image_front_small_url": "http://images.productopener.localhost/images/products/390/560/000/0009/front_fr.4.200.jpg",
      "image_front_thumb_url": "http://images.productopener.localhost/images/products/390/560/000/0009/front_fr.4.100.jpg",
      "image_front_url": "http://images.productopener.localhost/images/products/390/560/000/0009/front_fr.4.400.jpg",
      "image_ingredients_small_url": "http://images.productopener.localhost/images/products/390/560/000/0009/ingredients_fr.7.200.jpg",
      "image_ingredients_thumb_url": "http://images.productopener.localhost/images/products/390/560/000/0009/ingredients_fr.7.100.jpg",
      "image_ingredients_url": "http://images.productopener.localhost/images/products/390/560/000/0009/ingredients_fr.7.400.jpg",
      "image_small_url": "http://images.productopener.localhost/images/products/390/560/000/0009/front_fr.4.200.jpg",
      "image_thumb_url": "http://images.productopener.localhost/images/products/390/560/000/0009/front_fr.4.100.jpg",
      "image_url": "http://images.productopener.localhost/images/products/390/560/000/0009/front_fr.4.400.jpg",
      "images": {
        "1": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "400": {
              "h": 400,
              "w": 300
            },
            "full": {
              "h": 1200,
              "w": 901
            }
          },
          "uploaded_t": "1525185353",
          "uploader": "kiliweb"
        },
        "2": {
          "sizes": {
            "100": {
              "h": 75,
              "w": 100
            },
            "400": {
              "h": 300,
              "w": 400
            },
            "full": {
              "h": 1200,
              "w": 1599
            }
          },
          "uploaded_t": "1525185354",
          "uploader": "kiliweb"
        },
        "front_fr": {
          "angle": null,
          "geometry": "0x0-0-0",
          "imgid": "1",
          "normalize": "0",
          "rev": "4",
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "200": {
              "h": 200,
              "w": 150
            },
            "400": {
              "h": 400,
              "w": 300
            },
            "full": {
              "h": 1200,
              "w": 901
            }
          },
          "white_magic": "0",
          "x1": null,
          "x2": null,
          "y1": null,
          "y2": null
        },
        "ingredients_fr": {
          "angle": null,
          "geometry": "0x0-0-0",
          "imgid": "2",
          "normalize": "0",
          "rev": "7",
          "sizes": {
            "100": {
              "h": 75,
              "w": 100
            },
            "200": {
              "h": 150,
              "w": 200
            },
            "400": {
              "h": 300,
              "w": 400
            },
            "full": {
              "h": 1200,
              "w": 1599
            }
          },
          "white_magic": "0",
          "x1": null,
          "x2": null,
          "y1": null,
          "y2": null
        }
      },
      "informers_tags": [
        "kiliweb"
      ],
      "ingredients": [],
      "ingredients_debug": [],
      "ingredients_from_palm_oil_tags": [],
      "ingredients_hierarchy": [],
      "ingredients_ids_debug": [],
      "ingredients_original_tags": [],
      "ingredients_tags": [],
      "ingredients_text_debug": null,
      "ingredients_text_with_allergens": null,
      "ingredients_text_with_allergens_fr": null,
      "ingredients_that_may_be_from_palm_oil_tags": [],
      "interface_version_created": "20150316.jqm2",
      "interface_version_modified": "20150316.jqm2",
      "lang": "fr",
      "languages": {
        "en:french": 3
      },
      "languages_codes": {
        "fr": 3
      },
      "languages_hierarchy": [
        "en:french"
      ],
      "languages_tags": [
        "en:french",
        "en:1"
      ],
      "last_edit_dates_tags": [
        "2018-05-01",
        "2018-05",
        "2018"
      ],
      "last_editor": null,
      "last_image_dates_tags": [
        "2018-05-01",
        "2018-05",
        "2018"
      ],
      "last_image_t": 1525185354,
      "last_modified_by": null,
      "last_modified_t": 1525185355,
      "lc": "fr",
      "max_imgid": "2",
      "minerals_prev_tags": [],
      "minerals_tags": [],
      "misc_tags": [
        "en:nutriscore-not-computed"
      ],
      "no_nutrition_data": "",
      "nova_group_debug": "no nova group when the product does not have ingredients",
      "nova_group_tags": [
        "not-applicable"
      ],
      "nucleotides_prev_tags": [],
      "nucleotides_tags": [],
      "nutrient_levels": {},
      "nutrient_levels_tags": [],
      "nutriments": {
        "carbohydrates": "33",
        "carbohydrates_100g": "33",
        "carbohydrates_serving": "",
        "carbohydrates_unit": "",
        "carbohydrates_value": "33",
        "energy": "0",
        "energy_100g": "0",
        "energy_serving": "",
        "energy_unit": "kcal",
        "energy_value": "0",
        "fat": "3",
        "fat_100g": "3",
        "fat_serving": "",
        "fat_unit": "",
        "fat_value": "3",
        "proteins": "3",
        "proteins_100g": "3",
        "proteins_serving": "",
        "proteins_unit": "",
        "proteins_value": "3",
        "salt": "23",
        "salt_100g": "23",
        "salt_serving": "",
        "salt_unit": "",
        "salt_value": "23",
        "saturated-fat": "2",
        "saturated-fat_100g": "2",
        "saturated-fat_serving": "",
        "saturated-fat_unit": "",
        "saturated-fat_value": "2",
        "sodium": "9.05511811023622",
        "sodium_100g": "9.05511811023622",
        "sodium_serving": "",
        "sugars": "32",
        "sugars_100g": "32",
        "sugars_serving": "",
        "sugars_unit": "",
        "sugars_value": "32"
      },
      "nutrition_data_per": "100g",
      "nutrition_data_per_debug_tags": [],
      "nutrition_data_prepared_per": "100g",
      "nutrition_grades_tags": [
        "not-applicable"
      ],
      "nutrition_score_debug": "no score when the product does not have a category",
      "photographers_tags": [
        "kiliweb"
      ],
      "product_name": "Huile de noix",
      "product_name_debug_tags": [],
      "product_name_fr": "Huile de noix",
      "quality_tags": [],
      "rev": 7,
      "selected_images": {
        "front": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/390/560/000/0009/front_fr.4.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/390/560/000/0009/front_fr.4.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/390/560/000/0009/front_fr.4.100.jpg"
          }
        },
        "ingredients": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/390/560/000/0009/ingredients_fr.7.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/390/560/000/0009/ingredients_fr.7.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/390/560/000/0009/ingredients_fr.7.100.jpg"
          }
        }
      },
      "serving_quantity": 0,
      "sortkey": 525185355,
      "states": "en:to-be-completed, en:nutrition-facts-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-to-be-completed, en:quantity-to-be-completed, en:product-name-completed, en:photos-to-be-validated, en:photos-uploaded",
      "states_hierarchy": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "states_tags": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "traces_from_ingredients": "",
      "traces_hierarchy": [],
      "traces_tags": [],
      "unknown_ingredients_n": 0,
      "unknown_nutrients_tags": [],
      "update_key": "novacat",
      "url": "http://world.productopener.localhost/product/3905600000009/huile-de-noix",
      "vitamins_prev_tags": [],
      "vitamins_tags": []
    },
    {
      "_id": "3908801793077",
      "_keywords": [
        "itineraire",
        "affinage",
        "lait",
        "cru",
        "de",
        "saveur",
        "moi",
        "au",
        "beaufort",
        "aop"
      ],
      "additives_debug_tags": [],
      "additives_old_tags": [],
      "additives_original_tags": [],
      "additives_prev_original_tags": [],
      "additives_prev_tags": [],
      "additives_tags": [],
      "allergens": "",
      "allergens_from_ingredients": "",
      "allergens_hierarchy": [],
      "allergens_tags": [],
      "amino_acids_prev_tags": [],
      "amino_acids_tags": [],
      "brands": "itinéraire des saveurs",
      "brands_debug_tags": [],
      "brands_tags": [
        "itineraire-des-saveurs"
      ],
      "categories": "Beaufort",
      "categories_debug_tags": [],
      "categories_hierarchy": [
        "en:dairies",
        "en:fermented-foods",
        "en:fermented-milk-products",
        "en:cheeses",
        "en:cooked-pressed-cheeses",
        "en:french-cheeses",
        "fr:beaufort"
      ],
      "categories_prev_hierarchy": [
        "en:dairies",
        "en:fermented-foods",
        "en:fermented-milk-products",
        "en:cheeses",
        "en:cooked-pressed-cheeses",
        "en:french-cheeses",
        "fr:beaufort"
      ],
      "categories_prev_tags": [
        "en:dairies",
        "en:fermented-foods",
        "en:fermented-milk-products",
        "en:cheeses",
        "en:cooked-pressed-cheeses",
        "en:french-cheeses",
        "fr:beaufort"
      ],
      "categories_tags": [
        "en:dairies",
        "en:fermented-foods",
        "en:fermented-milk-products",
        "en:cheeses",
        "en:cooked-pressed-cheeses",
        "en:french-cheeses",
        "fr:beaufort"
      ],
      "checkers_tags": [],
      "cities_tags": [],
      "code": "3908801793077",
      "codes_tags": [
        "code-13",
        "3908801793077",
        "390880179307x",
        "39088017930xx",
        "3908801793xxx",
        "390880179xxxx",
        "39088017xxxxx",
        "3908801xxxxxx",
        "390880xxxxxxx",
        "39088xxxxxxxx",
        "3908xxxxxxxxx",
        "390xxxxxxxxxx",
        "39xxxxxxxxxxx",
        "3xxxxxxxxxxxx"
      ],
      "complete": 0,
      "correctors_tags": [
        "moon-rabbit"
      ],
      "countries": "France",
      "countries_debug_tags": [],
      "countries_hierarchy": [
        "en:france"
      ],
      "countries_tags": [
        "en:france"
      ],
      "created_t": 1426349094,
      "creator": "openfoodfacts-contributors",
      "debug_param_sorted_langs": [
        "fr"
      ],
      "editors": [
        ""
      ],
      "editors_tags": [
        "openfoodfacts-contributors",
        "moon-rabbit"
      ],
      "emb_codes": "",
      "emb_codes_20141016": "",
      "emb_codes_debug_tags": [],
      "emb_codes_orig": "",
      "emb_codes_tags": [],
      "entry_dates_tags": [
        "2015-03-14",
        "2015-03",
        "2015"
      ],
      "expiration_date": "",
      "expiration_date_debug_tags": [],
      "generic_name": "",
      "generic_name_fr": "",
      "generic_name_fr_debug_tags": [],
      "id": "3908801793077",
      "image_front_small_url": "http://images.productopener.localhost/images/products/390/880/179/3077/front_fr.3.200.jpg",
      "image_front_thumb_url": "http://images.productopener.localhost/images/products/390/880/179/3077/front_fr.3.100.jpg",
      "image_front_url": "http://images.productopener.localhost/images/products/390/880/179/3077/front_fr.3.400.jpg",
      "image_small_url": "http://images.productopener.localhost/images/products/390/880/179/3077/front_fr.3.200.jpg",
      "image_thumb_url": "http://images.productopener.localhost/images/products/390/880/179/3077/front_fr.3.100.jpg",
      "image_url": "http://images.productopener.localhost/images/products/390/880/179/3077/front_fr.3.400.jpg",
      "images": {
        "1": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "400": {
              "h": 400,
              "w": 300
            },
            "full": {
              "h": 3264,
              "w": 2448
            }
          },
          "uploaded_t": 1426349095,
          "uploader": "openfoodfacts-contributors"
        },
        "front": {
          "geometry": "0x0--8--8",
          "imgid": "1",
          "normalize": null,
          "rev": "3",
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "200": {
              "h": 200,
              "w": 150
            },
            "400": {
              "h": 400,
              "w": 300
            },
            "full": {
              "h": 3264,
              "w": 2448
            }
          },
          "white_magic": null
        },
        "front_fr": {
          "geometry": "0x0--8--8",
          "imgid": "1",
          "normalize": null,
          "rev": "3",
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "200": {
              "h": 200,
              "w": 150
            },
            "400": {
              "h": 400,
              "w": 300
            },
            "full": {
              "h": 3264,
              "w": 2448
            }
          },
          "white_magic": null
        }
      },
      "informers_tags": [
        "openfoodfacts-contributors",
        "moon-rabbit"
      ],
      "ingredients": [],
      "ingredients_debug": [],
      "ingredients_from_palm_oil_tags": [],
      "ingredients_hierarchy": [],
      "ingredients_ids_debug": [],
      "ingredients_original_tags": [],
      "ingredients_tags": [],
      "ingredients_text": "",
      "ingredients_text_debug": "",
      "ingredients_text_fr": "",
      "ingredients_text_fr_debug_tags": [],
      "ingredients_text_with_allergens": "",
      "ingredients_text_with_allergens_fr": "",
      "ingredients_that_may_be_from_palm_oil_tags": [],
      "interface_version_created": "20120622",
      "interface_version_modified": "20120622",
      "labels": "AOP",
      "labels_debug_tags": [],
      "labels_hierarchy": [
        "en:pdo"
      ],
      "labels_prev_hierarchy": [
        "en:pdo"
      ],
      "labels_prev_tags": [
        "en:pdo"
      ],
      "labels_tags": [
        "en:pdo"
      ],
      "lang": "fr",
      "lang_debug_tags": [],
      "languages": {
        "en:french": 2
      },
      "languages_codes": {
        "fr": 2
      },
      "languages_hierarchy": [
        "en:french"
      ],
      "languages_tags": [
        "en:french",
        "en:1"
      ],
      "last_edit_dates_tags": [
        "2017-10-17",
        "2017-10",
        "2017"
      ],
      "last_editor": "moon-rabbit",
      "last_image_dates_tags": [
        "2015-03-14",
        "2015-03",
        "2015"
      ],
      "last_image_t": 1426349095,
      "last_modified_by": "moon-rabbit",
      "last_modified_t": 1508252567,
      "lc": "fr",
      "link": "",
      "link_debug_tags": [],
      "manufacturing_places": "",
      "manufacturing_places_debug_tags": [],
      "manufacturing_places_tags": [],
      "max_imgid": "1",
      "minerals_prev_tags": [],
      "minerals_tags": [],
      "misc_tags": [
        "en:nutriscore-not-computed",
        "en:nutrition-not-enough-data-to-compute-nutrition-score",
        "en:nutrition-no-saturated-fat"
      ],
      "no_nutrition_data": "",
      "nova_group_debug": "no nova group when the product does not have ingredients",
      "nova_group_tags": [
        "not-applicable"
      ],
      "nucleotides_prev_tags": [],
      "nucleotides_tags": [],
      "nutrient_levels": {},
      "nutrient_levels_tags": [],
      "nutriments": {},
      "nutrition_data_per": "100g",
      "nutrition_data_per_debug_tags": [],
      "nutrition_grades_tags": [
        "unknown"
      ],
      "nutrition_score_debug": "missing energy",
      "origins": "",
      "origins_debug_tags": [],
      "origins_tags": [],
      "packaging": "",
      "packaging_debug_tags": [],
      "packaging_tags": [],
      "photographers_tags": [
        "openfoodfacts-contributors"
      ],
      "pnns_groups_1": "Milk and dairy products",
      "pnns_groups_1_tags": [
        "milk-and-dairy-products"
      ],
      "pnns_groups_2": "Cheese",
      "pnns_groups_2_tags": [
        "cheese"
      ],
      "product_name": "Beaufort au lait cru 6 mois d'affinage",
      "product_name_fr": "Beaufort au lait cru 6 mois d'affinage",
      "product_name_fr_debug_tags": [],
      "purchase_places": "",
      "purchase_places_debug_tags": [],
      "purchase_places_tags": [],
      "quality_tags": [
        "quantity-not-recognized"
      ],
      "quantity": "200g",
      "quantity_debug_tags": [],
      "rev": 5,
      "scans_n": 2,
      "selected_images": {
        "front": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/390/880/179/3077/front_fr.3.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/390/880/179/3077/front_fr.3.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/390/880/179/3077/front_fr.3.100.jpg"
          }
        }
      },
      "serving_quantity": 0,
      "serving_size": "",
      "serving_size_debug_tags": [],
      "sortkey": 508252567,
      "states": "en:to-be-completed, en:nutrition-facts-to-be-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-completed, en:brands-completed, en:packaging-to-be-completed, en:quantity-completed, en:product-name-completed, en:photos-to-be-validated, en:photos-uploaded",
      "states_hierarchy": [
        "en:to-be-completed",
        "en:nutrition-facts-to-be-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-completed",
        "en:brands-completed",
        "en:packaging-to-be-completed",
        "en:quantity-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "states_tags": [
        "en:to-be-completed",
        "en:nutrition-facts-to-be-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-completed",
        "en:brands-completed",
        "en:packaging-to-be-completed",
        "en:quantity-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "stores": "",
      "stores_debug_tags": [],
      "stores_tags": [],
      "traces": "",
      "traces_debug_tags": [],
      "traces_from_ingredients": "",
      "traces_hierarchy": [],
      "traces_tags": [],
      "unique_scans_n": 2,
      "unknown_ingredients_n": 0,
      "unknown_nutrients_tags": [],
      "update_key": "novacat",
      "url": "http://world.productopener.localhost/product/3908801793077/beaufort-au-lait-cru-6-mois-d-affinage-itineraire-des-saveurs",
      "vitamins_prev_tags": [],
      "vitamins_tags": []
    },
    {
      "_id": "3903504220028",
      "_keywords": [
        "kosovo"
      ],
      "additives_debug_tags": [],
      "additives_old_tags": [],
      "additives_original_tags": [],
      "additives_prev_original_tags": [],
      "additives_prev_tags": [],
      "additives_tags": [],
      "allergens": "",
      "allergens_debug_tags": [],
      "allergens_from_ingredients": "",
      "allergens_from_user": "(sq)",
      "allergens_hierarchy": [],
      "allergens_tags": [],
      "amino_acids_prev_tags": [],
      "amino_acids_tags": [],
      "brands": "",
      "brands_debug_tags": [],
      "brands_tags": [],
      "categories": "",
      "categories_debug_tags": [],
      "categories_hierarchy": [],
      "categories_prev_hierarchy": [],
      "categories_prev_tags": [],
      "categories_tags": [],
      "checkers_tags": [],
      "cities_tags": [],
      "code": "3903504220028",
      "codes_tags": [
        "code-13",
        "3903504220028",
        "390350422002x",
        "39035042200xx",
        "3903504220xxx",
        "390350422xxxx",
        "39035042xxxxx",
        "3903504xxxxxx",
        "390350xxxxxxx",
        "39035xxxxxxxx",
        "3903xxxxxxxxx",
        "390xxxxxxxxxx",
        "39xxxxxxxxxxx",
        "3xxxxxxxxxxxx"
      ],
      "complete": 0,
      "correctors_tags": [
        "sebleouf"
      ],
      "countries": "Shqipëria,Kosovo",
      "countries_debug_tags": [],
      "countries_hierarchy": [
        "en:albania",
        "sq:Kosovo"
      ],
      "countries_tags": [
        "en:albania",
        "sq:kosovo"
      ],
      "created_t": 1538142799,
      "creator": "sebleouf",
      "debug_param_sorted_langs": [
        "sq"
      ],
      "editors_tags": [
        "sebleouf"
      ],
      "emb_codes": "",
      "emb_codes_debug_tags": [],
      "emb_codes_orig": "",
      "emb_codes_tags": [],
      "entry_dates_tags": [
        "2018-09-28",
        "2018-09",
        "2018"
      ],
      "expiration_date": "",
      "expiration_date_debug_tags": [],
      "generic_name": "",
      "generic_name_sq": "",
      "generic_name_sq_debug_tags": [],
      "id": "3903504220028",
      "image_front_small_url": "http://images.productopener.localhost/images/products/390/350/422/0028/front_sq.5.200.jpg",
      "image_front_thumb_url": "http://images.productopener.localhost/images/products/390/350/422/0028/front_sq.5.100.jpg",
      "image_front_url": "http://images.productopener.localhost/images/products/390/350/422/0028/front_sq.5.400.jpg",
      "image_small_url": "http://images.productopener.localhost/images/products/390/350/422/0028/front_sq.5.200.jpg",
      "image_thumb_url": "http://images.productopener.localhost/images/products/390/350/422/0028/front_sq.5.100.jpg",
      "image_url": "http://images.productopener.localhost/images/products/390/350/422/0028/front_sq.5.400.jpg",
      "images": {
        "1": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "400": {
              "h": 400,
              "w": 299
            },
            "full": {
              "h": 2000,
              "w": 1496
            }
          },
          "uploaded_t": 1538142808,
          "uploader": "sebleouf"
        },
        "2": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "400": {
              "h": 400,
              "w": 299
            },
            "full": {
              "h": 2000,
              "w": 1496
            }
          },
          "uploaded_t": 1538142809,
          "uploader": "sebleouf"
        },
        "front_sq": {
          "angle": "0",
          "geometry": "375x1675-651-325",
          "imgid": "2",
          "normalize": "false",
          "rev": "5",
          "sizes": {
            "100": {
              "h": 100,
              "w": 22
            },
            "200": {
              "h": 200,
              "w": 45
            },
            "400": {
              "h": 400,
              "w": 90
            },
            "full": {
              "h": 1675,
              "w": 375
            }
          },
          "white_magic": "false",
          "x1": "130.25",
          "x2": "205.25",
          "y1": "65",
          "y2": "400"
        }
      },
      "informers_tags": [
        "sebleouf"
      ],
      "ingredients": [],
      "ingredients_debug": [],
      "ingredients_from_palm_oil_tags": [],
      "ingredients_hierarchy": [],
      "ingredients_ids_debug": [],
      "ingredients_original_tags": [],
      "ingredients_tags": [],
      "ingredients_text": "",
      "ingredients_text_debug": "",
      "ingredients_text_sq": "",
      "ingredients_text_sq_debug_tags": [],
      "ingredients_text_with_allergens": "",
      "ingredients_text_with_allergens_sq": "",
      "ingredients_that_may_be_from_palm_oil_tags": [],
      "interface_version_created": "20120622",
      "interface_version_modified": "20120622",
      "labels": "",
      "labels_debug_tags": [],
      "labels_hierarchy": [],
      "labels_prev_hierarchy": [],
      "labels_prev_tags": [],
      "labels_tags": [],
      "lang": "sq",
      "lang_debug_tags": [],
      "languages": {
        "en:albanian": 1
      },
      "languages_codes": {
        "sq": 1
      },
      "languages_hierarchy": [
        "en:albanian"
      ],
      "languages_tags": [
        "en:albanian",
        "en:1"
      ],
      "last_edit_dates_tags": [
        "2018-09-28",
        "2018-09",
        "2018"
      ],
      "last_editor": "sebleouf",
      "last_image_dates_tags": [
        "2018-09-28",
        "2018-09",
        "2018"
      ],
      "last_image_t": 1538142809,
      "last_modified_by": "sebleouf",
      "last_modified_t": 1538142831,
      "lc": "sq",
      "link": "",
      "link_debug_tags": [],
      "manufacturing_places": "Kosovo",
      "manufacturing_places_debug_tags": [],
      "manufacturing_places_tags": [
        "kosovo"
      ],
      "max_imgid": "2",
      "minerals_prev_tags": [],
      "minerals_tags": [],
      "misc_tags": [
        "en:nutriscore-not-computed"
      ],
      "no_nutrition_data": "",
      "nova_group_debug": "no nova group when the product does not have ingredients",
      "nova_group_tags": [
        "not-applicable"
      ],
      "nucleotides_prev_tags": [],
      "nucleotides_tags": [],
      "nutrient_levels": {},
      "nutrient_levels_tags": [],
      "nutriments": {},
      "nutrition_data": "on",
      "nutrition_data_per": "100g",
      "nutrition_data_per_debug_tags": [],
      "nutrition_data_prepared": "",
      "nutrition_data_prepared_per": "100g",
      "nutrition_data_prepared_per_debug_tags": [],
      "nutrition_grades_tags": [
        "not-applicable"
      ],
      "nutrition_score_debug": "no score when the product does not have a category",
      "origins": "Kosovo",
      "origins_debug_tags": [],
      "origins_tags": [
        "kosovo"
      ],
      "packaging": "",
      "packaging_debug_tags": [],
      "packaging_tags": [],
      "photographers_tags": [
        "sebleouf"
      ],
      "pnns_groups_1": "unknown",
      "pnns_groups_1_tags": [
        "unknown"
      ],
      "pnns_groups_2": "unknown",
      "pnns_groups_2_tags": [
        "unknown"
      ],
      "product_name": "",
      "product_name_sq": "",
      "product_name_sq_debug_tags": [],
      "purchase_places": "",
      "purchase_places_debug_tags": [],
      "purchase_places_tags": [],
      "quality_tags": [
        "quantity-not-recognized"
      ],
      "quantity": "",
      "quantity_debug_tags": [],
      "rev": 6,
      "selected_images": {
        "front": {
          "display": {
            "sq": "http://images.productopener.localhost/images/products/390/350/422/0028/front_sq.5.400.jpg"
          },
          "small": {
            "sq": "http://images.productopener.localhost/images/products/390/350/422/0028/front_sq.5.200.jpg"
          },
          "thumb": {
            "sq": "http://images.productopener.localhost/images/products/390/350/422/0028/front_sq.5.100.jpg"
          }
        }
      },
      "serving_quantity": 0,
      "serving_size": "",
      "serving_size_debug_tags": [],
      "sortkey": 538142831,
      "states": "en:to-be-completed, en:nutrition-facts-to-be-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-to-be-completed, en:quantity-to-be-completed, en:product-name-to-be-completed, en:photos-to-be-validated, en:photos-uploaded",
      "states_hierarchy": [
        "en:to-be-completed",
        "en:nutrition-facts-to-be-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-to-be-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "states_tags": [
        "en:to-be-completed",
        "en:nutrition-facts-to-be-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-to-be-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "stores": "",
      "stores_debug_tags": [],
      "stores_tags": [],
      "traces": "",
      "traces_debug_tags": [],
      "traces_from_ingredients": "",
      "traces_from_user": "(sq)",
      "traces_hierarchy": [],
      "traces_tags": [],
      "unknown_ingredients_n": 0,
      "unknown_nutrients_tags": [],
      "update_key": "novacat",
      "url": "http://world.productopener.localhost/product/3903504220028",
      "vitamins_prev_tags": [],
      "vitamins_tags": []
    },
    {
      "_id": "3910794883604",
      "_keywords": [
        "hubert",
        "st"
      ],
      "additives_debug_tags": [],
      "additives_old_tags": [],
      "additives_original_tags": [],
      "additives_prev_original_tags": [],
      "additives_prev_tags": [],
      "additives_tags": [],
      "allergens": "",
      "allergens_hierarchy": [],
      "allergens_tags": [],
      "brands": "",
      "brands_debug_tags": [],
      "brands_tags": [],
      "checkers_tags": [],
      "code": "3910794883604",
      "codes_tags": [
        "code-13",
        "3910794883604",
        "391079488360x",
        "39107948836xx",
        "3910794883xxx",
        "391079488xxxx",
        "39107948xxxxx",
        "3910794xxxxxx",
        "391079xxxxxxx",
        "39107xxxxxxxx",
        "3910xxxxxxxxx",
        "391xxxxxxxxxx",
        "39xxxxxxxxxxx",
        "3xxxxxxxxxxxx"
      ],
      "complete": 0,
      "correctors_tags": [],
      "countries": "en:MQ",
      "countries_hierarchy": [
        "en:martinique"
      ],
      "countries_tags": [
        "en:martinique"
      ],
      "created_t": 1492444629,
      "creator": "openfoodfacts-contributors",
      "editors_tags": [
        "openfoodfacts-contributors"
      ],
      "entry_dates_tags": [
        "2017-04-17",
        "2017-04",
        "2017"
      ],
      "id": "3910794883604",
      "image_front_small_url": "http://images.productopener.localhost/images/products/391/079/488/3604/front_fr.3.200.jpg",
      "image_front_thumb_url": "http://images.productopener.localhost/images/products/391/079/488/3604/front_fr.3.100.jpg",
      "image_front_url": "http://images.productopener.localhost/images/products/391/079/488/3604/front_fr.3.400.jpg",
      "image_small_url": "http://images.productopener.localhost/images/products/391/079/488/3604/front_fr.3.200.jpg",
      "image_thumb_url": "http://images.productopener.localhost/images/products/391/079/488/3604/front_fr.3.100.jpg",
      "image_url": "http://images.productopener.localhost/images/products/391/079/488/3604/front_fr.3.400.jpg",
      "images": {
        "1": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "400": {
              "h": 400,
              "w": 300
            },
            "full": {
              "h": 2000,
              "w": 1500
            }
          },
          "uploaded_t": "1492444630",
          "uploader": "openfoodfacts-contributors"
        },
        "front_fr": {
          "angle": 0,
          "geometry": "0x0--5--5",
          "imgid": "1",
          "normalize": null,
          "rev": "3",
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "200": {
              "h": 200,
              "w": 150
            },
            "400": {
              "h": 400,
              "w": 300
            },
            "full": {
              "h": 2000,
              "w": 1500
            }
          },
          "white_magic": null,
          "x1": -1,
          "x2": -1,
          "y1": -1,
          "y2": -1
        }
      },
      "informers_tags": [
        "openfoodfacts-contributors"
      ],
      "ingredients": [],
      "ingredients_debug": [],
      "ingredients_from_palm_oil_tags": [],
      "ingredients_hierarchy": [],
      "ingredients_ids_debug": [],
      "ingredients_original_tags": [],
      "ingredients_tags": [],
      "ingredients_text_debug": null,
      "ingredients_text_with_allergens": null,
      "ingredients_text_with_allergens_fr": null,
      "ingredients_that_may_be_from_palm_oil_tags": [],
      "interface_version_created": "20120622",
      "interface_version_modified": "20150316.jqm2",
      "lang": "fr",
      "languages": {
        "en:french": 2
      },
      "languages_codes": {
        "fr": 2
      },
      "languages_hierarchy": [
        "en:french"
      ],
      "languages_tags": [
        "en:french",
        "en:1"
      ],
      "last_edit_dates_tags": [
        "2017-04-17",
        "2017-04",
        "2017"
      ],
      "last_editor": null,
      "last_image_dates_tags": [
        "2017-04-17",
        "2017-04",
        "2017"
      ],
      "last_image_t": 1492444630,
      "last_modified_by": null,
      "last_modified_t": 1492444664,
      "lc": "fr",
      "max_imgid": "1",
      "misc_tags": [
        "en:nutriscore-not-computed"
      ],
      "no_nutrition_data": "",
      "nova_group_debug": "no nova group when the product does not have ingredients",
      "nova_group_tags": [
        "not-applicable"
      ],
      "nutrient_levels": {},
      "nutrient_levels_tags": [],
      "nutriments": {},
      "nutrition_data_per": "100g",
      "nutrition_grades_tags": [
        "not-applicable"
      ],
      "nutrition_score_debug": "no score when the product does not have a category",
      "photographers_tags": [
        "openfoodfacts-contributors"
      ],
      "product_name": "St Hubert ",
      "product_name_debug_tags": [],
      "product_name_fr": "St Hubert ",
      "quality_tags": [],
      "quantity": "255",
      "quantity_debug_tags": [],
      "rev": 6,
      "selected_images": {
        "front": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/391/079/488/3604/front_fr.3.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/391/079/488/3604/front_fr.3.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/391/079/488/3604/front_fr.3.100.jpg"
          }
        }
      },
      "serving_quantity": 0,
      "sortkey": 492444664,
      "states": "en:to-be-completed, en:nutrition-facts-to-be-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-to-be-completed, en:quantity-completed, en:product-name-completed, en:photos-to-be-validated, en:photos-uploaded",
      "states_hierarchy": [
        "en:to-be-completed",
        "en:nutrition-facts-to-be-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "states_tags": [
        "en:to-be-completed",
        "en:nutrition-facts-to-be-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "unknown_ingredients_n": 0,
      "unknown_nutrients_tags": [],
      "update_key": "novacat",
      "url": "http://world.productopener.localhost/product/3910794883604/st-hubert"
    },
    {
      "_id": "3901027970291",
      "_keywords": [
        "snowball",
        "splash",
        "fruit"
      ],
      "additives_debug_tags": [],
      "additives_old_tags": [],
      "additives_original_tags": [],
      "additives_prev_original_tags": [],
      "additives_prev_tags": [],
      "additives_tags": [],
      "allergens": "",
      "allergens_from_ingredients": "",
      "allergens_hierarchy": [],
      "allergens_tags": [],
      "amino_acids_prev_tags": [],
      "amino_acids_tags": [],
      "checkers_tags": [],
      "code": "3901027970291",
      "codes_tags": [
        "code-13",
        "3901027970291",
        "390102797029x",
        "39010279702xx",
        "3901027970xxx",
        "390102797xxxx",
        "39010279xxxxx",
        "3901027xxxxxx",
        "390102xxxxxxx",
        "39010xxxxxxxx",
        "3901xxxxxxxxx",
        "390xxxxxxxxxx",
        "39xxxxxxxxxxx",
        "3xxxxxxxxxxxx"
      ],
      "complete": 0,
      "correctors_tags": [
        "openfoodfacts-contributors"
      ],
      "countries": "en:france",
      "countries_debug_tags": [],
      "countries_hierarchy": [
        "en:france"
      ],
      "countries_tags": [
        "en:france"
      ],
      "created_t": 1520699058,
      "creator": "kiliweb",
      "editors_tags": [
        "kiliweb",
        "openfoodfacts-contributors"
      ],
      "entry_dates_tags": [
        "2018-03-10",
        "2018-03",
        "2018"
      ],
      "id": "3901027970291",
      "image_front_small_url": "http://images.productopener.localhost/images/products/390/102/797/0291/front_fr.4.200.jpg",
      "image_front_thumb_url": "http://images.productopener.localhost/images/products/390/102/797/0291/front_fr.4.100.jpg",
      "image_front_url": "http://images.productopener.localhost/images/products/390/102/797/0291/front_fr.4.400.jpg",
      "image_ingredients_small_url": "http://images.productopener.localhost/images/products/390/102/797/0291/ingredients_fr.7.200.jpg",
      "image_ingredients_thumb_url": "http://images.productopener.localhost/images/products/390/102/797/0291/ingredients_fr.7.100.jpg",
      "image_ingredients_url": "http://images.productopener.localhost/images/products/390/102/797/0291/ingredients_fr.7.400.jpg",
      "image_small_url": "http://images.productopener.localhost/images/products/390/102/797/0291/front_fr.4.200.jpg",
      "image_thumb_url": "http://images.productopener.localhost/images/products/390/102/797/0291/front_fr.4.100.jpg",
      "image_url": "http://images.productopener.localhost/images/products/390/102/797/0291/front_fr.4.400.jpg",
      "images": {
        "1": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 73
            },
            "400": {
              "h": 400,
              "w": 291
            },
            "full": {
              "h": 1200,
              "w": 874
            }
          },
          "uploaded_t": "1520699060",
          "uploader": "kiliweb"
        },
        "2": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 40
            },
            "400": {
              "h": 400,
              "w": 158
            },
            "full": {
              "h": 1200,
              "w": 475
            }
          },
          "uploaded_t": "1520699064",
          "uploader": "kiliweb"
        },
        "front_fr": {
          "angle": null,
          "geometry": "0x0-0-0",
          "imgid": "1",
          "normalize": "0",
          "rev": "4",
          "sizes": {
            "100": {
              "h": 100,
              "w": 73
            },
            "200": {
              "h": 200,
              "w": 146
            },
            "400": {
              "h": 400,
              "w": 291
            },
            "full": {
              "h": 1200,
              "w": 874
            }
          },
          "white_magic": "0",
          "x1": null,
          "x2": null,
          "y1": null,
          "y2": null
        },
        "ingredients_fr": {
          "angle": null,
          "geometry": "0x0-0-0",
          "imgid": "2",
          "normalize": "0",
          "rev": "7",
          "sizes": {
            "100": {
              "h": 100,
              "w": 40
            },
            "200": {
              "h": 200,
              "w": 79
            },
            "400": {
              "h": 400,
              "w": 158
            },
            "full": {
              "h": 1200,
              "w": 475
            }
          },
          "white_magic": "0",
          "x1": null,
          "x2": null,
          "y1": null,
          "y2": null
        }
      },
      "informers_tags": [
        "kiliweb"
      ],
      "ingredients": [],
      "ingredients_debug": [],
      "ingredients_from_palm_oil_tags": [],
      "ingredients_hierarchy": [],
      "ingredients_ids_debug": [],
      "ingredients_original_tags": [],
      "ingredients_tags": [],
      "ingredients_text_debug": null,
      "ingredients_text_with_allergens": null,
      "ingredients_text_with_allergens_fr": null,
      "ingredients_that_may_be_from_palm_oil_tags": [],
      "interface_version_created": "20150316.jqm2",
      "interface_version_modified": "20150316.jqm2",
      "lang": "fr",
      "languages": {
        "en:french": 3
      },
      "languages_codes": {
        "fr": 3
      },
      "languages_hierarchy": [
        "en:french"
      ],
      "languages_tags": [
        "en:french",
        "en:1"
      ],
      "last_edit_dates_tags": [
        "2018-03-10",
        "2018-03",
        "2018"
      ],
      "last_editor": "kiliweb",
      "last_image_dates_tags": [
        "2018-03-10",
        "2018-03",
        "2018"
      ],
      "last_image_t": 1520699064,
      "last_modified_by": "kiliweb",
      "last_modified_t": 1520699319,
      "lc": "fr",
      "max_imgid": "2",
      "minerals_prev_tags": [],
      "minerals_tags": [],
      "misc_tags": [
        "en:nutriscore-not-computed"
      ],
      "no_nutrition_data": "",
      "nova_group_debug": "no nova group when the product does not have ingredients",
      "nova_group_tags": [
        "not-applicable"
      ],
      "nucleotides_prev_tags": [],
      "nucleotides_tags": [],
      "nutrient_levels": {},
      "nutrient_levels_tags": [],
      "nutriments": {
        "carbohydrates": "9",
        "carbohydrates_100g": "9",
        "carbohydrates_serving": "",
        "carbohydrates_unit": "",
        "carbohydrates_value": "9",
        "energy": "151",
        "energy_100g": "151",
        "energy_serving": "",
        "energy_unit": "kcal",
        "energy_value": "36",
        "fat": "0",
        "fat_100g": "0",
        "fat_serving": "",
        "fat_unit": "",
        "fat_value": "0",
        "proteins": "0",
        "proteins_100g": "0",
        "proteins_serving": "",
        "proteins_unit": "",
        "proteins_value": "0",
        "saturated-fat": "0",
        "saturated-fat_100g": "0",
        "saturated-fat_serving": "",
        "saturated-fat_unit": "",
        "saturated-fat_value": "0",
        "sugars": "9",
        "sugars_100g": "9",
        "sugars_serving": "",
        "sugars_unit": "",
        "sugars_value": "9"
      },
      "nutrition_data_per": "100g",
      "nutrition_data_per_debug_tags": [],
      "nutrition_grades_tags": [
        "not-applicable"
      ],
      "nutrition_score_debug": "no score when the product does not have a category",
      "photographers_tags": [
        "kiliweb"
      ],
      "product_name": "Snowball fruit splash",
      "product_name_debug_tags": [],
      "product_name_fr": "Snowball fruit splash",
      "quality_tags": [],
      "rev": 8,
      "selected_images": {
        "front": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/390/102/797/0291/front_fr.4.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/390/102/797/0291/front_fr.4.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/390/102/797/0291/front_fr.4.100.jpg"
          }
        },
        "ingredients": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/390/102/797/0291/ingredients_fr.7.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/390/102/797/0291/ingredients_fr.7.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/390/102/797/0291/ingredients_fr.7.100.jpg"
          }
        }
      },
      "serving_quantity": 0,
      "sortkey": 520699319,
      "states": "en:to-be-completed, en:nutrition-facts-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-to-be-completed, en:quantity-to-be-completed, en:product-name-completed, en:photos-to-be-validated, en:photos-uploaded",
      "states_hierarchy": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "states_tags": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "traces_from_ingredients": "",
      "traces_hierarchy": [],
      "traces_tags": [],
      "unknown_ingredients_n": 0,
      "unknown_nutrients_tags": [],
      "update_key": "novacat",
      "url": "http://world.productopener.localhost/product/3901027970291/snowball-fruit-splash",
      "vitamins_prev_tags": [],
      "vitamins_tags": []
    },
    {
      "_id": "3907505000061",
      "_keywords": [
        "nocciolata"
      ],
      "additives_debug_tags": [],
      "additives_old_tags": [],
      "additives_original_tags": [],
      "additives_prev_original_tags": [],
      "additives_prev_tags": [],
      "additives_tags": [],
      "allergens": "",
      "allergens_from_ingredients": "",
      "allergens_hierarchy": [],
      "allergens_tags": [],
      "amino_acids_prev_tags": [],
      "amino_acids_tags": [],
      "checkers_tags": [],
      "code": "3907505000061",
      "codes_tags": [
        "code-13",
        "3907505000061",
        "390750500006x",
        "39075050000xx",
        "3907505000xxx",
        "390750500xxxx",
        "39075050xxxxx",
        "3907505xxxxxx",
        "390750xxxxxxx",
        "39075xxxxxxxx",
        "3907xxxxxxxxx",
        "390xxxxxxxxxx",
        "39xxxxxxxxxxx",
        "3xxxxxxxxxxxx"
      ],
      "complete": 0,
      "correctors_tags": [
        "openfoodfacts-contributors"
      ],
      "countries": "en:france",
      "countries_debug_tags": [],
      "countries_hierarchy": [
        "en:france"
      ],
      "countries_tags": [
        "en:france"
      ],
      "created_t": 1528543762,
      "creator": "kiliweb",
      "editors_tags": [
        "openfoodfacts-contributors",
        "kiliweb"
      ],
      "entry_dates_tags": [
        "2018-06-09",
        "2018-06",
        "2018"
      ],
      "id": "3907505000061",
      "image_front_small_url": "http://images.productopener.localhost/images/products/390/750/500/0061/front_fr.4.200.jpg",
      "image_front_thumb_url": "http://images.productopener.localhost/images/products/390/750/500/0061/front_fr.4.100.jpg",
      "image_front_url": "http://images.productopener.localhost/images/products/390/750/500/0061/front_fr.4.400.jpg",
      "image_ingredients_small_url": "http://images.productopener.localhost/images/products/390/750/500/0061/ingredients_fr.7.200.jpg",
      "image_ingredients_thumb_url": "http://images.productopener.localhost/images/products/390/750/500/0061/ingredients_fr.7.100.jpg",
      "image_ingredients_url": "http://images.productopener.localhost/images/products/390/750/500/0061/ingredients_fr.7.400.jpg",
      "image_small_url": "http://images.productopener.localhost/images/products/390/750/500/0061/front_fr.4.200.jpg",
      "image_thumb_url": "http://images.productopener.localhost/images/products/390/750/500/0061/front_fr.4.100.jpg",
      "image_url": "http://images.productopener.localhost/images/products/390/750/500/0061/front_fr.4.400.jpg",
      "images": {
        "1": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "400": {
              "h": 400,
              "w": 300
            },
            "full": {
              "h": 1200,
              "w": 901
            }
          },
          "uploaded_t": "1528543763",
          "uploader": "kiliweb"
        },
        "2": {
          "sizes": {
            "100": {
              "h": 75,
              "w": 100
            },
            "400": {
              "h": 300,
              "w": 400
            },
            "full": {
              "h": 1200,
              "w": 1599
            }
          },
          "uploaded_t": "1528543765",
          "uploader": "kiliweb"
        },
        "front_fr": {
          "angle": null,
          "geometry": "0x0-0-0",
          "imgid": "1",
          "normalize": "0",
          "rev": "4",
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "200": {
              "h": 200,
              "w": 150
            },
            "400": {
              "h": 400,
              "w": 300
            },
            "full": {
              "h": 1200,
              "w": 901
            }
          },
          "white_magic": "0",
          "x1": null,
          "x2": null,
          "y1": null,
          "y2": null
        },
        "ingredients_fr": {
          "angle": null,
          "geometry": "0x0-0-0",
          "imgid": "2",
          "normalize": "0",
          "rev": "7",
          "sizes": {
            "100": {
              "h": 75,
              "w": 100
            },
            "200": {
              "h": 150,
              "w": 200
            },
            "400": {
              "h": 300,
              "w": 400
            },
            "full": {
              "h": 1200,
              "w": 1599
            }
          },
          "white_magic": "0",
          "x1": null,
          "x2": null,
          "y1": null,
          "y2": null
        }
      },
      "informers_tags": [
        "kiliweb"
      ],
      "ingredients": [],
      "ingredients_debug": [],
      "ingredients_from_palm_oil_tags": [],
      "ingredients_hierarchy": [],
      "ingredients_ids_debug": [],
      "ingredients_original_tags": [],
      "ingredients_tags": [],
      "ingredients_text_debug": null,
      "ingredients_text_with_allergens": null,
      "ingredients_text_with_allergens_fr": null,
      "ingredients_that_may_be_from_palm_oil_tags": [],
      "interface_version_created": "20150316.jqm2",
      "interface_version_modified": "20150316.jqm2",
      "lang": "fr",
      "languages": {
        "en:french": 3
      },
      "languages_codes": {
        "fr": 3
      },
      "languages_hierarchy": [
        "en:french"
      ],
      "languages_tags": [
        "en:french",
        "en:1"
      ],
      "last_edit_dates_tags": [
        "2018-06-09",
        "2018-06",
        "2018"
      ],
      "last_editor": null,
      "last_image_dates_tags": [
        "2018-06-09",
        "2018-06",
        "2018"
      ],
      "last_image_t": 1528543771,
      "last_modified_by": null,
      "last_modified_t": 1528543777,
      "lc": "fr",
      "max_imgid": "2",
      "minerals_prev_tags": [],
      "minerals_tags": [],
      "misc_tags": [
        "en:nutriscore-not-computed"
      ],
      "no_nutrition_data": "",
      "nova_group_debug": "no nova group when the product does not have ingredients",
      "nova_group_tags": [
        "not-applicable"
      ],
      "nucleotides_prev_tags": [],
      "nucleotides_tags": [],
      "nutrient_levels": {},
      "nutrient_levels_tags": [],
      "nutriments": {
        "carbohydrates": "55",
        "carbohydrates_100g": "55",
        "carbohydrates_serving": "",
        "carbohydrates_unit": "",
        "carbohydrates_value": "55",
        "energy": "2251",
        "energy_100g": "2251",
        "energy_serving": "",
        "energy_unit": "kcal",
        "energy_value": "538",
        "fat": "31",
        "fat_100g": "31",
        "fat_serving": "",
        "fat_unit": "",
        "fat_value": "31",
        "proteins": "5.9",
        "proteins_100g": "5.9",
        "proteins_serving": "",
        "proteins_unit": "",
        "proteins_value": "5.9",
        "saturated-fat": "5.3",
        "saturated-fat_100g": "5.3",
        "saturated-fat_serving": "",
        "saturated-fat_unit": "",
        "saturated-fat_value": "5.3",
        "sugars": "50",
        "sugars_100g": "50",
        "sugars_serving": "",
        "sugars_unit": "",
        "sugars_value": "50"
      },
      "nutrition_data_per": "100g",
      "nutrition_data_per_debug_tags": [],
      "nutrition_data_prepared_per": "100g",
      "nutrition_grades_tags": [
        "not-applicable"
      ],
      "nutrition_score_debug": "no score when the product does not have a category",
      "photographers_tags": [
        "kiliweb"
      ],
      "product_name": "Nocciolata",
      "product_name_debug_tags": [],
      "product_name_fr": "Nocciolata",
      "quality_tags": [],
      "rev": 7,
      "selected_images": {
        "front": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/390/750/500/0061/front_fr.4.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/390/750/500/0061/front_fr.4.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/390/750/500/0061/front_fr.4.100.jpg"
          }
        },
        "ingredients": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/390/750/500/0061/ingredients_fr.7.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/390/750/500/0061/ingredients_fr.7.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/390/750/500/0061/ingredients_fr.7.100.jpg"
          }
        }
      },
      "serving_quantity": 0,
      "sortkey": 528543777,
      "states": "en:to-be-completed, en:nutrition-facts-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-to-be-completed, en:quantity-to-be-completed, en:product-name-completed, en:photos-to-be-validated, en:photos-uploaded",
      "states_hierarchy": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "states_tags": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "traces_from_ingredients": "",
      "traces_hierarchy": [],
      "traces_tags": [],
      "unknown_ingredients_n": 0,
      "unknown_nutrients_tags": [],
      "update_key": "novacat",
      "url": "http://world.productopener.localhost/product/3907505000061/nocciolata",
      "vitamins_prev_tags": [],
      "vitamins_tags": []
    },
    {
      "_id": "3903504220547",
      "_keywords": [],
      "additives_debug_tags": [],
      "additives_old_tags": [],
      "additives_original_tags": [],
      "additives_prev_original_tags": [],
      "additives_prev_tags": [],
      "additives_tags": [],
      "allergens": "",
      "allergens_debug_tags": [],
      "allergens_from_ingredients": "",
      "allergens_from_user": "(sq)",
      "allergens_hierarchy": [],
      "allergens_tags": [],
      "amino_acids_prev_tags": [],
      "amino_acids_tags": [],
      "brands": "",
      "brands_debug_tags": [],
      "brands_tags": [],
      "categories": "",
      "categories_debug_tags": [],
      "categories_hierarchy": [],
      "categories_prev_hierarchy": [],
      "categories_prev_tags": [],
      "categories_tags": [],
      "checkers_tags": [],
      "cities_tags": [],
      "code": "3903504220547",
      "codes_tags": [
        "code-13",
        "3903504220547",
        "390350422054x",
        "39035042205xx",
        "3903504220xxx",
        "390350422xxxx",
        "39035042xxxxx",
        "3903504xxxxxx",
        "390350xxxxxxx",
        "39035xxxxxxxx",
        "3903xxxxxxxxx",
        "390xxxxxxxxxx",
        "39xxxxxxxxxxx",
        "3xxxxxxxxxxxx"
      ],
      "complete": 0,
      "correctors_tags": [
        "sebleouf"
      ],
      "countries": "Shqipëria,Kosovo",
      "countries_debug_tags": [],
      "countries_hierarchy": [
        "en:albania",
        "sq:Kosovo"
      ],
      "countries_tags": [
        "en:albania",
        "sq:kosovo"
      ],
      "created_t": 1538143478,
      "creator": "sebleouf",
      "debug_param_sorted_langs": [
        "sq"
      ],
      "editors_tags": [
        "sebleouf"
      ],
      "emb_codes": "",
      "emb_codes_debug_tags": [],
      "emb_codes_orig": "",
      "emb_codes_tags": [],
      "entry_dates_tags": [
        "2018-09-28",
        "2018-09",
        "2018"
      ],
      "expiration_date": "",
      "expiration_date_debug_tags": [],
      "generic_name": "",
      "generic_name_sq": "",
      "generic_name_sq_debug_tags": [],
      "id": "3903504220547",
      "image_front_small_url": "http://images.productopener.localhost/images/products/390/350/422/0547/front_sq.5.200.jpg",
      "image_front_thumb_url": "http://images.productopener.localhost/images/products/390/350/422/0547/front_sq.5.100.jpg",
      "image_front_url": "http://images.productopener.localhost/images/products/390/350/422/0547/front_sq.5.400.jpg",
      "image_small_url": "http://images.productopener.localhost/images/products/390/350/422/0547/front_sq.5.200.jpg",
      "image_thumb_url": "http://images.productopener.localhost/images/products/390/350/422/0547/front_sq.5.100.jpg",
      "image_url": "http://images.productopener.localhost/images/products/390/350/422/0547/front_sq.5.400.jpg",
      "images": {
        "1": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "400": {
              "h": 400,
              "w": 299
            },
            "full": {
              "h": 2000,
              "w": 1496
            }
          },
          "uploaded_t": 1538143488,
          "uploader": "sebleouf"
        },
        "2": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "400": {
              "h": 400,
              "w": 299
            },
            "full": {
              "h": 2000,
              "w": 1496
            }
          },
          "uploaded_t": 1538143488,
          "uploader": "sebleouf"
        },
        "front_sq": {
          "angle": "0",
          "geometry": "445x1770-596-144",
          "imgid": "2",
          "normalize": "false",
          "rev": "5",
          "sizes": {
            "100": {
              "h": 100,
              "w": 25
            },
            "200": {
              "h": 200,
              "w": 50
            },
            "400": {
              "h": 400,
              "w": 101
            },
            "full": {
              "h": 1770,
              "w": 445
            }
          },
          "white_magic": "false",
          "x1": "119.25",
          "x2": "208.25",
          "y1": "28.8125",
          "y2": "382.8125"
        }
      },
      "informers_tags": [
        "sebleouf"
      ],
      "ingredients": [],
      "ingredients_debug": [],
      "ingredients_from_palm_oil_tags": [],
      "ingredients_hierarchy": [],
      "ingredients_ids_debug": [],
      "ingredients_original_tags": [],
      "ingredients_tags": [],
      "ingredients_text": "",
      "ingredients_text_debug": "",
      "ingredients_text_sq": "",
      "ingredients_text_sq_debug_tags": [],
      "ingredients_text_with_allergens": "",
      "ingredients_text_with_allergens_sq": "",
      "ingredients_that_may_be_from_palm_oil_tags": [],
      "interface_version_created": "20120622",
      "interface_version_modified": "20120622",
      "labels": "",
      "labels_debug_tags": [],
      "labels_hierarchy": [],
      "labels_prev_hierarchy": [],
      "labels_prev_tags": [],
      "labels_tags": [],
      "lang": "sq",
      "lang_debug_tags": [],
      "languages": {
        "en:albanian": 1
      },
      "languages_codes": {
        "sq": 1
      },
      "languages_hierarchy": [
        "en:albanian"
      ],
      "languages_tags": [
        "en:albanian",
        "en:1"
      ],
      "last_edit_dates_tags": [
        "2018-09-28",
        "2018-09",
        "2018"
      ],
      "last_editor": "sebleouf",
      "last_image_dates_tags": [
        "2018-09-28",
        "2018-09",
        "2018"
      ],
      "last_image_t": 1538143488,
      "last_modified_by": "sebleouf",
      "last_modified_t": 1538143505,
      "lc": "sq",
      "link": "",
      "link_debug_tags": [],
      "manufacturing_places": "",
      "manufacturing_places_debug_tags": [],
      "manufacturing_places_tags": [],
      "max_imgid": "2",
      "minerals_prev_tags": [],
      "minerals_tags": [],
      "misc_tags": [
        "en:nutriscore-not-computed"
      ],
      "no_nutrition_data": "",
      "nova_group_debug": "no nova group when the product does not have ingredients",
      "nova_group_tags": [
        "not-applicable"
      ],
      "nucleotides_prev_tags": [],
      "nucleotides_tags": [],
      "nutrient_levels": {},
      "nutrient_levels_tags": [],
      "nutriments": {},
      "nutrition_data": "on",
      "nutrition_data_per": "100g",
      "nutrition_data_per_debug_tags": [],
      "nutrition_data_prepared": "",
      "nutrition_data_prepared_per": "100g",
      "nutrition_data_prepared_per_debug_tags": [],
      "nutrition_grades_tags": [
        "not-applicable"
      ],
      "nutrition_score_debug": "no score when the product does not have a category",
      "origins": "",
      "origins_debug_tags": [],
      "origins_tags": [],
      "packaging": "",
      "packaging_debug_tags": [],
      "packaging_tags": [],
      "photographers_tags": [
        "sebleouf"
      ],
      "pnns_groups_1": "unknown",
      "pnns_groups_1_tags": [
        "unknown"
      ],
      "pnns_groups_2": "unknown",
      "pnns_groups_2_tags": [
        "unknown"
      ],
      "product_name": "",
      "product_name_sq": "",
      "product_name_sq_debug_tags": [],
      "purchase_places": "",
      "purchase_places_debug_tags": [],
      "purchase_places_tags": [],
      "quality_tags": [
        "quantity-not-recognized"
      ],
      "quantity": "",
      "quantity_debug_tags": [],
      "rev": 6,
      "selected_images": {
        "front": {
          "display": {
            "sq": "http://images.productopener.localhost/images/products/390/350/422/0547/front_sq.5.400.jpg"
          },
          "small": {
            "sq": "http://images.productopener.localhost/images/products/390/350/422/0547/front_sq.5.200.jpg"
          },
          "thumb": {
            "sq": "http://images.productopener.localhost/images/products/390/350/422/0547/front_sq.5.100.jpg"
          }
        }
      },
      "serving_quantity": 0,
      "serving_size": "",
      "serving_size_debug_tags": [],
      "sortkey": 538143505,
      "states": "en:to-be-completed, en:nutrition-facts-to-be-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-to-be-completed, en:quantity-to-be-completed, en:product-name-to-be-completed, en:photos-to-be-validated, en:photos-uploaded",
      "states_hierarchy": [
        "en:to-be-completed",
        "en:nutrition-facts-to-be-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-to-be-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "states_tags": [
        "en:to-be-completed",
        "en:nutrition-facts-to-be-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-to-be-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "stores": "",
      "stores_debug_tags": [],
      "stores_tags": [],
      "traces": "",
      "traces_debug_tags": [],
      "traces_from_ingredients": "",
      "traces_from_user": "(sq)",
      "traces_hierarchy": [],
      "traces_tags": [],
      "unknown_ingredients_n": 0,
      "unknown_nutrients_tags": [],
      "update_key": "novacat",
      "url": "http://world.productopener.localhost/product/3903504220547",
      "vitamins_prev_tags": [],
      "vitamins_tags": []
    },
    {
      "_id": "3900000419772",
      "_keywords": [
        "pruneaux",
        "denoyaute",
        "cuit",
        "agen",
        "mi"
      ],
      "additives_debug_tags": [],
      "additives_old_tags": [],
      "additives_original_tags": [],
      "additives_prev_original_tags": [],
      "additives_prev_tags": [],
      "additives_tags": [],
      "allergens": "",
      "allergens_from_ingredients": "",
      "allergens_hierarchy": [],
      "allergens_tags": [],
      "amino_acids_prev_tags": [],
      "amino_acids_tags": [],
      "checkers_tags": [],
      "code": "3900000419772",
      "codes_tags": [
        "code-13",
        "3900000419772",
        "390000041977x",
        "39000004197xx",
        "3900000419xxx",
        "390000041xxxx",
        "39000004xxxxx",
        "3900000xxxxxx",
        "390000xxxxxxx",
        "39000xxxxxxxx",
        "3900xxxxxxxxx",
        "390xxxxxxxxxx",
        "39xxxxxxxxxxx",
        "3xxxxxxxxxxxx"
      ],
      "complete": 0,
      "correctors_tags": [
        "openfoodfacts-contributors"
      ],
      "countries": "en:france",
      "countries_debug_tags": [],
      "countries_hierarchy": [
        "en:france"
      ],
      "countries_tags": [
        "en:france"
      ],
      "created_t": 1524996319,
      "creator": "kiliweb",
      "editors_tags": [
        "kiliweb",
        "openfoodfacts-contributors"
      ],
      "entry_dates_tags": [
        "2018-04-29",
        "2018-04",
        "2018"
      ],
      "id": "3900000419772",
      "image_front_small_url": "http://images.productopener.localhost/images/products/390/000/041/9772/front_fr.4.200.jpg",
      "image_front_thumb_url": "http://images.productopener.localhost/images/products/390/000/041/9772/front_fr.4.100.jpg",
      "image_front_url": "http://images.productopener.localhost/images/products/390/000/041/9772/front_fr.4.400.jpg",
      "image_ingredients_small_url": "http://images.productopener.localhost/images/products/390/000/041/9772/ingredients_fr.7.200.jpg",
      "image_ingredients_thumb_url": "http://images.productopener.localhost/images/products/390/000/041/9772/ingredients_fr.7.100.jpg",
      "image_ingredients_url": "http://images.productopener.localhost/images/products/390/000/041/9772/ingredients_fr.7.400.jpg",
      "image_small_url": "http://images.productopener.localhost/images/products/390/000/041/9772/front_fr.4.200.jpg",
      "image_thumb_url": "http://images.productopener.localhost/images/products/390/000/041/9772/front_fr.4.100.jpg",
      "image_url": "http://images.productopener.localhost/images/products/390/000/041/9772/front_fr.4.400.jpg",
      "images": {
        "1": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 56
            },
            "400": {
              "h": 400,
              "w": 225
            },
            "full": {
              "h": 1200,
              "w": 675
            }
          },
          "uploaded_t": "1524996319",
          "uploader": "kiliweb"
        },
        "2": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 56
            },
            "400": {
              "h": 400,
              "w": 225
            },
            "full": {
              "h": 1200,
              "w": 675
            }
          },
          "uploaded_t": "1524996322",
          "uploader": "kiliweb"
        },
        "front_fr": {
          "angle": null,
          "geometry": "0x0-0-0",
          "imgid": "1",
          "normalize": "0",
          "rev": "4",
          "sizes": {
            "100": {
              "h": 100,
              "w": 56
            },
            "200": {
              "h": 200,
              "w": 113
            },
            "400": {
              "h": 400,
              "w": 225
            },
            "full": {
              "h": 1200,
              "w": 675
            }
          },
          "white_magic": "0",
          "x1": null,
          "x2": null,
          "y1": null,
          "y2": null
        },
        "ingredients_fr": {
          "angle": null,
          "geometry": "0x0-0-0",
          "imgid": "2",
          "normalize": "0",
          "rev": "7",
          "sizes": {
            "100": {
              "h": 100,
              "w": 56
            },
            "200": {
              "h": 200,
              "w": 113
            },
            "400": {
              "h": 400,
              "w": 225
            },
            "full": {
              "h": 1200,
              "w": 675
            }
          },
          "white_magic": "0",
          "x1": null,
          "x2": null,
          "y1": null,
          "y2": null
        }
      },
      "informers_tags": [
        "kiliweb"
      ],
      "ingredients": [],
      "ingredients_debug": [],
      "ingredients_from_palm_oil_tags": [],
      "ingredients_hierarchy": [],
      "ingredients_ids_debug": [],
      "ingredients_original_tags": [],
      "ingredients_tags": [],
      "ingredients_text_debug": null,
      "ingredients_text_with_allergens": null,
      "ingredients_text_with_allergens_fr": null,
      "ingredients_that_may_be_from_palm_oil_tags": [],
      "interface_version_created": "20150316.jqm2",
      "interface_version_modified": "20150316.jqm2",
      "lang": "fr",
      "languages": {
        "en:french": 3
      },
      "languages_codes": {
        "fr": 3
      },
      "languages_hierarchy": [
        "en:french"
      ],
      "languages_tags": [
        "en:french",
        "en:1"
      ],
      "last_edit_dates_tags": [
        "2018-04-29",
        "2018-04",
        "2018"
      ],
      "last_editor": null,
      "last_image_dates_tags": [
        "2018-04-29",
        "2018-04",
        "2018"
      ],
      "last_image_t": 1524996322,
      "last_modified_by": null,
      "last_modified_t": 1524996323,
      "lc": "fr",
      "max_imgid": "2",
      "minerals_prev_tags": [],
      "minerals_tags": [],
      "misc_tags": [
        "en:nutriscore-not-computed"
      ],
      "no_nutrition_data": "",
      "nova_group_debug": "no nova group when the product does not have ingredients",
      "nova_group_tags": [
        "not-applicable"
      ],
      "nucleotides_prev_tags": [],
      "nucleotides_tags": [],
      "nutrient_levels": {},
      "nutrient_levels_tags": [],
      "nutriments": {
        "carbohydrates": "54",
        "carbohydrates_100g": "54",
        "carbohydrates_serving": "",
        "carbohydrates_unit": "",
        "carbohydrates_value": "54",
        "energy": "979",
        "energy_100g": "979",
        "energy_serving": "",
        "energy_unit": "kcal",
        "energy_value": "234",
        "fat": "0.3",
        "fat_100g": "0.3",
        "fat_serving": "",
        "fat_unit": "",
        "fat_value": "0.3",
        "proteins": "2",
        "proteins_100g": "2",
        "proteins_serving": "",
        "proteins_unit": "",
        "proteins_value": "2",
        "salt": "0.01",
        "salt_100g": "0.01",
        "salt_serving": "",
        "salt_unit": "",
        "salt_value": "0.01",
        "saturated-fat": "0.08",
        "saturated-fat_100g": "0.08",
        "saturated-fat_serving": "",
        "saturated-fat_unit": "",
        "saturated-fat_value": "0.08",
        "sodium": "0.00393700787401575",
        "sodium_100g": "0.00393700787401575",
        "sodium_serving": "",
        "sugars": "35",
        "sugars_100g": "35",
        "sugars_serving": "",
        "sugars_unit": "",
        "sugars_value": "35"
      },
      "nutrition_data_per": "100g",
      "nutrition_data_per_debug_tags": [],
      "nutrition_data_prepared_per": "100g",
      "nutrition_grades_tags": [
        "not-applicable"
      ],
      "nutrition_score_debug": "no score when the product does not have a category",
      "photographers_tags": [
        "kiliweb"
      ],
      "product_name": "Pruneaux d Agen mi cuits denoyautes",
      "product_name_debug_tags": [],
      "product_name_fr": "Pruneaux d Agen mi cuits denoyautes",
      "quality_tags": [],
      "rev": 7,
      "selected_images": {
        "front": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/390/000/041/9772/front_fr.4.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/390/000/041/9772/front_fr.4.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/390/000/041/9772/front_fr.4.100.jpg"
          }
        },
        "ingredients": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/390/000/041/9772/ingredients_fr.7.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/390/000/041/9772/ingredients_fr.7.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/390/000/041/9772/ingredients_fr.7.100.jpg"
          }
        }
      },
      "serving_quantity": 0,
      "sortkey": 524996323,
      "states": "en:to-be-completed, en:nutrition-facts-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-to-be-completed, en:quantity-to-be-completed, en:product-name-completed, en:photos-to-be-validated, en:photos-uploaded",
      "states_hierarchy": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "states_tags": [
        "en:to-be-completed",
        "en:nutrition-facts-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "traces_from_ingredients": "",
      "traces_hierarchy": [],
      "traces_tags": [],
      "unknown_ingredients_n": 0,
      "unknown_nutrients_tags": [],
      "update_key": "novacat",
      "url": "http://world.productopener.localhost/product/3900000419772/pruneaux-d-agen-mi-cuits-denoyautes",
      "vitamins_prev_tags": [],
      "vitamins_tags": []
    },
    {
      "_id": "3900003354612",
      "_keywords": [],
      "checkers_tags": [],
      "code": "3900003354612",
      "codes_tags": [
        "code-13",
        "3900003354612",
        "390000335461x",
        "39000033546xx",
        "3900003354xxx",
        "390000335xxxx",
        "39000033xxxxx",
        "3900003xxxxxx",
        "390000xxxxxxx",
        "39000xxxxxxxx",
        "3900xxxxxxxxx",
        "390xxxxxxxxxx",
        "39xxxxxxxxxxx",
        "3xxxxxxxxxxxx"
      ],
      "complete": 0,
      "correctors_tags": [],
      "countries": "en:FR",
      "countries_hierarchy": [
        "en:france"
      ],
      "countries_tags": [
        "en:france"
      ],
      "created_t": 1541936789,
      "creator": "openfoodfacts-contributors",
      "editors_tags": [
        "openfoodfacts-contributors"
      ],
      "entry_dates_tags": [
        "2018-11-11",
        "2018-11",
        "2018"
      ],
      "id": "3900003354612",
      "image_front_small_url": "http://images.productopener.localhost/images/products/390/000/335/4612/front_fr.3.200.jpg",
      "image_front_thumb_url": "http://images.productopener.localhost/images/products/390/000/335/4612/front_fr.3.100.jpg",
      "image_front_url": "http://images.productopener.localhost/images/products/390/000/335/4612/front_fr.3.400.jpg",
      "image_small_url": "http://images.productopener.localhost/images/products/390/000/335/4612/front_fr.3.200.jpg",
      "image_thumb_url": "http://images.productopener.localhost/images/products/390/000/335/4612/front_fr.3.100.jpg",
      "image_url": "http://images.productopener.localhost/images/products/390/000/335/4612/front_fr.3.400.jpg",
      "images": {
        "1": {
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "400": {
              "h": 400,
              "w": 300
            },
            "full": {
              "h": 4032,
              "w": 3024
            }
          },
          "uploaded_t": 1541936789,
          "uploader": "openfoodfacts-contributors"
        },
        "front_fr": {
          "angle": 0,
          "geometry": "0x0--10--10",
          "imgid": "1",
          "normalize": null,
          "rev": "3",
          "sizes": {
            "100": {
              "h": 100,
              "w": 75
            },
            "200": {
              "h": 200,
              "w": 150
            },
            "400": {
              "h": 400,
              "w": 300
            },
            "full": {
              "h": 4032,
              "w": 3024
            }
          },
          "white_magic": null,
          "x1": "-1",
          "x2": "-1",
          "y1": "-1",
          "y2": "-1"
        }
      },
      "informers_tags": [
        "openfoodfacts-contributors"
      ],
      "interface_version_created": "20120622",
      "lang": "fr",
      "languages": {
        "en:french": 1
      },
      "languages_codes": {
        "fr": 1
      },
      "languages_hierarchy": [
        "en:french"
      ],
      "languages_tags": [
        "en:french",
        "en:1"
      ],
      "last_edit_dates_tags": [
        "2018-11-11",
        "2018-11",
        "2018"
      ],
      "last_editor": null,
      "last_image_dates_tags": [
        "2018-11-11",
        "2018-11",
        "2018"
      ],
      "last_image_t": 1541936790,
      "last_modified_by": null,
      "last_modified_t": 1541936791,
      "lc": "fr",
      "max_imgid": "1",
      "photographers_tags": [
        "openfoodfacts-contributors"
      ],
      "rev": 3,
      "selected_images": {
        "front": {
          "display": {
            "fr": "http://images.productopener.localhost/images/products/390/000/335/4612/front_fr.3.400.jpg"
          },
          "small": {
            "fr": "http://images.productopener.localhost/images/products/390/000/335/4612/front_fr.3.200.jpg"
          },
          "thumb": {
            "fr": "http://images.productopener.localhost/images/products/390/000/335/4612/front_fr.3.100.jpg"
          }
        }
      },
      "sortkey": 541936791,
      "states": "en:to-be-completed, en:nutrition-facts-to-be-completed, en:ingredients-to-be-completed, en:expiration-date-to-be-completed, en:packaging-code-to-be-completed, en:characteristics-to-be-completed, en:categories-to-be-completed, en:brands-to-be-completed, en:packaging-to-be-completed, en:quantity-to-be-completed, en:product-name-to-be-completed, en:photos-to-be-validated, en:photos-uploaded",
      "states_hierarchy": [
        "en:to-be-completed",
        "en:nutrition-facts-to-be-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-to-be-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "states_tags": [
        "en:to-be-completed",
        "en:nutrition-facts-to-be-completed",
        "en:ingredients-to-be-completed",
        "en:expiration-date-to-be-completed",
        "en:packaging-code-to-be-completed",
        "en:characteristics-to-be-completed",
        "en:categories-to-be-completed",
        "en:brands-to-be-completed",
        "en:packaging-to-be-completed",
        "en:quantity-to-be-completed",
        "en:product-name-to-be-completed",
        "en:photos-to-be-validated",
        "en:photos-uploaded"
      ],
      "url": "http://world.productopener.localhost/product/3900003354612"
    }
  ],
  "skip": 0
}