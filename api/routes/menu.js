var express = require("express");
var router = express.Router();

var menu = {
  "categories": [
    {
      "id": 276652,
      "name": "Burgers and Sandwiches",
      "items": [
        {
          "id": 12413711,
          "name": "Burger",
          "description": "Beef, caramelized onions, pickles, cheddar, bacon, barbacue sauce, iceberg lettuce",
          "price": 7,
          "tags": [
          ],
          "thumbnail": "https://tazzcdn.akamaized.net/uploads/menu/5920/burger.jpg",
          "options": [
            {
                "id": 1362,
                "name": "Jalapenos",
                "price": 1
            },
            {
                "id": 5532,
                "name": "Extra Cheese",
                "price": 1.59
            }
          ]
        },
        {
          "id": 12413712,
          "name": "Double Burger",
          "description": "Beef, caramelized onions, pickles, cheddar, bacon, barbacue sauce, iceberg lettuce",
          "price": 9,
          "tags": [
          ],
          "thumbnail": "https://tazzcdn.akamaized.net/uploads/menu/5920/burger_1.jpg",
          "options": [
            {
                "id": 1363,
                "name": "Jalapenos",
                "price": 1
            },
            {
                "id": 5533,
                "name": "Extra Cheese",
                "price": 1.59
            }
          ]
        },
        {
          "id": 12413713,
          "name": "Chicken Burger",
          "description": "Crispy chicken breast, iceberg lettuce, tomatoes, barbacue sauce, pickled cucumbers",
          "price": 6,
          "tags": [
          ],
          "thumbnail": "https://tazzcdn.akamaized.net/uploads/menu/5920/chicken-burger.jpg",
          "options": [
            {
                "id": 1364,
                "name": "Jalapenos",
                "price": 1
            }
          ]
        },
        {
          "id": 12413714,
          "name": "Roasted Pork Sandwich",
          "description": "Pork, jalapeno peppers, cheddar, mustard sauce",
          "price": 7,
          "tags": [
          ],
          "thumbnail": "https://tazzcdn.akamaized.net/uploads/menu/5920/roasted-pork.jpg",
          "options": [
            {
                "id": 5534,
                "name": "Extra Cheese",
                "price": 1.59
            }
          ]
        },
        {
          "id": 12413715,
          "name": "Vegan Burger",
          "description": "Beyond the Meat, caramelized onions, pickles, vegan cheddar, barbacue sauce, iceberg lettuce",
          "price": 9,
          "tags": [
            "VEGAN"
          ],
          "thumbnail": "https://tazzcdn.akamaized.net/uploads/menu/5920/burger.jpg",
          "options": [
            {
                "id": 1365,
                "name": "Jalapenos",
                "price": 1
            },
            {
                "id": 5535,
                "name": "Onion",
                "price": 0.49
            }
          ]
        },
        {
          "id": 12413716,
          "name": "Pulled Pork Sandwich",
          "description": "Pork, iceberg salad, pickles, fries, ketchup",
          "price": 8.49,
          "tags": [
          ],
          "thumbnail": "https://tazzcdn.akamaized.net/uploads/menu/5920/porcusorul_zdrentuit.jpg",
          "options": [
          ]
        },
        {
          "id": 12413717,
          "name": "Vegan Pulled Pork Sandwich",
          "description": "Jackfruit, iceberg salad, pickles, fries, gluten free bun, ketchup",
          "price": 9,
          "tags": [
            "VEGAN",
            "GLUTEN_FREE"
          ],
          "thumbnail": "https://tazzcdn.akamaized.net/uploads/menu/5920/porcusorul_zdrentuit.jpg",
          "options": [
          ]
        },
        {
          "id": 12413718,
          "name": "Cuban Sandwich",
          "description": "Pork, ham, pickles, gouda, fries, gluten free bun, ketchup",
          "price": 8.59,
          "tags": [
            "GLUTEN_FREE"
          ],
          "thumbnail": "https://tazzcdn.akamaized.net/uploads/menu/5920/roasted_pork.jpg",
          "options": [
            {
                "id": 1366,
                "name": "Jalapenos",
                "price": 1
            },
            {
                "id": 5536,
                "name": "Extra Cheese",
                "price": 1.59
            },
            {
              "id": 5537,
              "name": "Onion",
              "price": 0.49
            }
          ]
        }
      ]
    },
    {
      "id": 376652,
      "name": "Fries",
      "items": [
        {
          "id": 12413719,
          "name": "Regular Fries",
          "description": "",
          "price": 2.49,
          "tags": [
            "VEGAN",
            "GLUTEN_FREE"
          ],
          "thumbnail": "",
          "options": [
            {
                "id": 1367,
                "name": "Smoked Paprika",
                "price": 1.19
            },
            {
              "id": 5541,
              "name": "Ketchup",
              "price": 0.29
          },
            {
                "id": 5538,
                "name": "Vegan Cheese",
                "price": 2
            }
          ]
        },
        {
          "id": 12413720,
          "name": "Loaded Fries",
          "description": "Fries, jalapenos, gouda, cheddar, smoked paprika",
          "price": 4,
          "tags": [
            "GLUTEN_FREE"
          ],
          "thumbnail": "",
          "options": [
            {
                "id": 1368,
                "name": "Corn",
                "price": 1.39
            },
            {
                "id": 5539,
                "name": "Onion",
                "price": 0.49
            },
            {
              "id": 5142,
              "name": "Ketchup",
              "price": 0.29
            },
            {
              "id": 5540,
              "name": "Bacon",
              "price": 1.59
            }
          ]
        }
        
      ]
    },
    {
      "id": 376653,
      "name": "Drinks",
      "items": [
        {
          "id": 12413721,
          "name": "Pepsi",
          "description": "",
          "price": 3,
          "tags": [
          ],
          "thumbnail": "https://tazzcdn.akamaized.net/uploads/menu/6835/14971394-pepsi-330-ml.ac4f909-QAiSjMb.jpg",
          "options": [
          ]
        },
        {
          "id": 12413722,
          "name": "Pepsi Max",
          "description": "",
          "price": 3,
          "tags": [
          ],
          "thumbnail": "https://tazzcdn.akamaized.net/uploads/menu/6835/14971395-pepsi-max-330-ml.f273c37-Fxodrxl.jpg",
          "options": [
          ]
        },
        {
          "id": 12413723,
          "name": "Mirinda",
          "description": "",
          "price": 3,
          "tags": [
          ],
          "thumbnail": "https://tazzcdn.akamaized.net/uploads/menu/6835/14971392-mirinda-330-ml.67b7126-GTKXQfr.jpg",
          "options": [
          ]
        },
        {
          "id": 12413724,
          "name": "Mountain Dew",
          "description": "",
          "price": 3,
          "tags": [
          ],
          "thumbnail": "https://tazzcdn.akamaized.net/uploads/menu/6835/14971393-mountain-dew-330-ml.bb9322f-QW9aswB.jpg",
          "options": [
          ]
        },
        {
          "id": 12413725,
          "name": "7up",
          "description": "",
          "price": 3,
          "tags": [
          ],
          "thumbnail": "https://tazzcdn.akamaized.net/uploads/menu/6835/14971383-7-up-330-ml.98f703e-g5h7I0M.jpg",
          "options": [
          ]
        }
      ]
    }
  ]
};

router.get("/", function(req, res, next) {
    res.send(JSON.stringify(menu));
});

module.exports = router;