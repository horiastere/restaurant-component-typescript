var express = require("express");
var router = express.Router();

var menu = {
  "categories": [
      {
          "id": 276652,
          "name": "Tapas",
          "items": [
              {
                  "id": 12413791,
                  "name": "Taco cu Crab/ Crab Taco (140g)",
                  "description": "Tortilla din porumb umpluta cu carne de crab si asezonata cu cascaval si sosuri facute in casa / Corn tortilla filled with crab meat and topped with melted cheese and sauces.",
                  "price": 20,
                  "currency": "EUR",
                  "tags": [],
                  "thumbnail": "https://tazzcdn.akamaized.net/uploads/menu/7341/16242579-halloumi-and-cheddar-sandwich.f2fe7f3-bHoZK13.jpg",
                  "options": [
                    {
                        "id": 2332,
                        "name": "EXTRA BRANZA/EXTRA CHEESE",
                        "price": 3
                    },
                    {
                        "id": 2331,
                        "name": "JALAPENOS",
                        "price": 2
                    },
                    {
                        "id": 2222, 
                        "name": "DIN TORTILLA DE FAINA",
                        "price": 2
                    }
                ]
              },
              {
                "id": 15012750,
                "name": "Totopos con Aji Salsa (200g)",
                "description": "Nachos prajiti in casa asezonati cu condiment Cajun, serviti cu aji salsa facuta in casa/ Home fried Nachos, flavoured with Cajun spice and served with homemade aji salsa.",
                "price": 22,
                "currency": "EUR",
                "tags": [],
                "options": []
              },
              {
                "id": 12413794,
                "name": "Totopos con salsa (200g)",
                "description": "Nachos prajiti in casa asezonati cu condiment Cajun, serviti cu salsa de rosii facuta in casa  / Home fried nachos, flavoured with home-mixed cajun spice and served with homemade tomato salsa",
                "price": 22,
                "currency": "EUR",
                "tags": [
                  "VEGAN",
                  "GLUTEN_FREE"
              ],
              "options": []
            }
          ]
      },
      {
        "id": 376652,
        "name": "FELURI PRINCIPALE",
        "items": [
            {
                "id": 12413731,
                "name": "Quesadilla de pui / Chicken quesadilla (300g)",
                "description": "ortillas de faina, umplute cu branza si cu carne de pui, servite cu sosuri facute in casa / Grilled soft flour tortilla, filled with cheese and chicken and served with homemade sauces.",
                "price": 42,
                "currency": "EUR",
                "tags": [],
                "thumbnail": "https://tazzcdn.akamaized.net/uploads/menu/7341/16242579-halloumi-and-cheddar-sandwich.f2fe7f3-bHoZK13.jpg",
                "options": [
                  {
                      "id": 1362,
                      "name": "Jalapenos",
                      "price": 5
                  },
                  {
                      "id": 5532,
                      "name": "Extra Branza / Extra Cheese",
                      "price": 8
                  }
              ]
            },
            {
              "id": 15112750,
              "name": "Quesadilla de porc / Pork quesadilla (300g)",
              "description": "Tortillas de faina, umplute cu branza si cu carne de porc, servite cu sosuri facute in casa / Grilled soft flour tortilla, filled with cheese and pork and served with homemade sauces.",
              "price": 42,
              "currency": "EUR",
              "tags": [],
              "thumbnail": "https://tazzcdn.akamaized.net/uploads/menu/7341/16242579-halloumi-and-cheddar-sandwich.f2fe7f3-bHoZK13.jpg",
              "options": [
                {
                  "id": 9332,
                  "name": "Jalapenos",
                  "price": 5
                },
                {
                    "id": 2399,
                    "name": "Extra Branza / Extra Cheese",
                    "price": 8
                }
              ]
            },
            {
              "id": 22413791,
              "name": "Quesadilla de legume / Vegetable quesadiila (300g)",
              "description": "Tortillas de faina, umplute cu branza si cu legume, servite cu sosuri facute in casa / Grilled soft flour tortilla, filled with cheese and vegetables and served with homemade sauces.",
              "price": 40.99,
              "currency": "EUR",
              "tags": [
                "VEGAN"
            ],
            "options": []
          }
        ]
    }
  ]
};

router.get("/", function(req, res, next) {
    res.send(JSON.stringify(menu));
});

module.exports = router;