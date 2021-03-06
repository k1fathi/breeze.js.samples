/**
 * Creates testFns.lookupsExport - lookup entity data for testing
 *
 * Generated by hand per the following procedure (total time: 15 minutes)
 * - set a breakpoint in the real app just after lookups were loaded
 * - execute the following line in the console:
 *      manager.exportEntities(null, false); // excludes metadata
 * - scrape the console window and paste into http://jsonprettyprint.com/json-pretty-printer.php
 * - paste from there to here as 'lookupsExportJson'
 * - reduce to useful subset (optional?)
 *
 * Todo: automate it ... someday ... although sounds like a serious waste of time
 * as only have to re-generate when/if the lookup entity definitions or breeze metadata change (rare)
 */
(function(testFns){

    var lookupsExportJson = {
        "tempKeys": [],
        "entityGroupMap": {
            "OrderStatus:#Zza.Model": {
                "entities": [
                    {
                        "id": 1,
                        "name": "Ordered",
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 2,
                        "name": "PickedUp",
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 3,
                        "name": "Delivered",
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 4,
                        "name": "Cancelled",
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 5,
                        "name": "Pending",
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    }
                ]
            },
            "Product:#Zza.Model": {
                "entities": [
                    {
                        "id": 1,
                        "type": "pizza",
                        "name": "Plain Cheese",
                        "description": "Your basic plain cheese pizza with no toppings.\nIncludes tomato sauce, mozzarella, oregano and a sprinkling of cheddar",
                        "image": "plaincheese.jpg",
                        "hasOptions": false,
                        "isPremium": false,
                        "isVegetarian": true,
                        "withTomatoSauce": true,
                        "sizeIds": [

                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 2,
                        "type": "pizza",
                        "name": "Make Your Own",
                        "description": "Make your own\nIncludes tomato sauce, mozzarella, oregano and a sprinkling of cheddar",
                        "image": "makeyourown.jpg",
                        "hasOptions": true,
                        "isPremium": false,
                        "isVegetarian": true,
                        "withTomatoSauce": true,
                        "sizeIds": [

                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 3,
                        "type": "pizza",
                        "name": "Holy Smokes",
                        "description": "Swiss, fontina, gorgonzola, mozzarella, roasted walnuts and fresh sage",
                        "image": "holysmokes.jpg",
                        "hasOptions": true,
                        "isPremium": true,
                        "isVegetarian": true,
                        "withTomatoSauce": false,
                        "sizeIds": [

                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 22,
                        "type": "salad",
                        "name": "Caesar Salad",
                        "description": "Crisp Romaine, parmesan and croutons",
                        "image": "caesarsalad.jpg",
                        "hasOptions": true,
                        "isPremium": false,
                        "isVegetarian": false,
                        "withTomatoSauce": false,
                        "sizeIds": [
                            7,
                            8
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 23,
                        "type": "salad",
                        "name": "Chicken Caesar Salad",
                        "description": "Traditional Caesar with your choice of grilled or BBQ chicken",
                        "image": "chickencaesarsalad.jpg",
                        "hasOptions": true,
                        "isPremium": false,
                        "isVegetarian": false,
                        "withTomatoSauce": false,
                        "sizeIds": [
                            9
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 31,
                        "type": "drink",
                        "name": "Cola",
                        "description": "Cola",
                        "image": "cola.jpg",
                        "hasOptions": false,
                        "isPremium": false,
                        "isVegetarian": false,
                        "withTomatoSauce": false,
                        "sizeIds": [
                            10,
                            11,
                            12
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 36,
                        "type": "drink",
                        "name": "Lemon Spruce",
                        "description": "Lemon Spruce",
                        "image": "lemonspruce.jpg",
                        "hasOptions": false,
                        "isPremium": false,
                        "isVegetarian": false,
                        "withTomatoSauce": false,
                        "sizeIds": [
                            10
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    }
                ]
            },
            "ProductOption:#Zza.Model": {
                "entities": [
                    {
                        "id": 1,
                        "type": "crust",
                        "name": "Classic Crust",
                        "factor": "0",
                        "productTypes": [
                            "pizza"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 2,
                        "type": "crust",
                        "name": "Wheat Crust",
                        "factor": "0",
                        "productTypes": [
                            "pizza"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 3,
                        "type": "crust",
                        "name": "Gluten-free Crust",
                        "factor": "0",
                        "productTypes": [
                            "pizza"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 4,
                        "type": "sauce",
                        "name": "Tomato",
                        "factor": "0",
                        "productTypes": [
                            "pizza"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 5,
                        "type": "sauce",
                        "name": "Pesto*",
                        "factor": "2",
                        "productTypes": [
                            "pizza"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 6,
                        "type": "sauce",
                        "name": "Salsa",
                        "factor": "1",
                        "productTypes": [
                            "pizza"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 7,
                        "type": "sauce",
                        "name": "Texas BBQ",
                        "factor": "1",
                        "productTypes": [
                            "pizza"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 8,
                        "type": "sauce",
                        "name": "Hummus",
                        "factor": "1",
                        "productTypes": [
                            "pizza"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 9,
                        "type": "sauce",
                        "name": "Hoisin",
                        "factor": "1",
                        "productTypes": [
                            "pizza"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 13,
                        "type": "cheese",
                        "name": "Feta",
                        "factor": "1",
                        "productTypes": [
                            "pizza",
                            "salad"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 14,
                        "type": "cheese",
                        "name": "Fontina & Swiss",
                        "factor": "1",
                        "productTypes": [
                            "pizza",
                            "salad"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 20,
                        "type": "veggie",
                        "name": "Black Olives",
                        "factor": "1",
                        "productTypes": [
                            "pizza",
                            "salad"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 21,
                        "type": "veggie",
                        "name": "Broccoli",
                        "factor": "1",
                        "productTypes": [
                            "pizza",
                            "salad"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 22,
                        "type": "veggie",
                        "name": "Jalapenos",
                        "factor": "1",
                        "productTypes": [
                            "pizza",
                            "salad"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 23,
                        "type": "veggie",
                        "name": "Fresh Mushrooms",
                        "factor": "1",
                        "productTypes": [
                            "pizza",
                            "salad"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 41,
                        "type": "meat",
                        "name": "Pepperoni",
                        "factor": "1",
                        "productTypes": [
                            "pizza",
                            "salad"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 42,
                        "type": "meat",
                        "name": "Italian Sausage",
                        "factor": "1",
                        "productTypes": [
                            "pizza",
                            "salad"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 43,
                        "type": "meat",
                        "name": "Salami",
                        "factor": "1",
                        "productTypes": [
                            "pizza",
                            "salad"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 44,
                        "type": "meat",
                        "name": "Smoked Bacon",
                        "factor": "1",
                        "productTypes": [
                            "pizza",
                            "salad"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 46,
                        "type": "meat",
                        "name": "BBQ Chicken*",
                        "factor": "2",
                        "productTypes": [
                            "pizza",
                            "salad"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 53,
                        "type": "spice",
                        "name": "Basil",
                        "factor": "0",
                        "productTypes": [
                            "pizza",
                            "salad"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 54,
                        "type": "spice",
                        "name": "Cilantro",
                        "factor": "0",
                        "productTypes": [
                            "pizza",
                            "salad"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 58,
                        "type": "saladDressing",
                        "name": "No Dressing",
                        "factor": "0",
                        "productTypes": [
                            "salad"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 59,
                        "type": "saladDressing",
                        "name": "Vinaigrette",
                        "factor": "1",
                        "productTypes": [
                            "salad"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 60,
                        "type": "saladDressing",
                        "name": "Ranch",
                        "factor": "1",
                        "productTypes": [
                            "salad"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 61,
                        "type": "saladDressing",
                        "name": "Caesar",
                        "factor": "1",
                        "productTypes": [
                            "salad"
                        ],
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    }
                ]
            },
            "ProductSize:#Zza.Model": {
                "entities": [
                    {
                        "id": 1,
                        "type": "pizza",
                        "name": "Personal 8\"",
                        "price": 6.15,
                        "premiumPrice": 7.65,
                        "toppingPrice": 0.65,
                        "isGlutenFree": false,
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 2,
                        "type": "pizza",
                        "name": "Medium 12\"",
                        "price": 12.4,
                        "premiumPrice": 16.95,
                        "toppingPrice": 1.35,
                        "isGlutenFree": false,
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 3,
                        "type": "pizza",
                        "name": "Large 14\"",
                        "price": 14.45,
                        "premiumPrice": 20.95,
                        "toppingPrice": 1.7,
                        "isGlutenFree": false,
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 4,
                        "type": "pizza",
                        "name": "X-Large 16\"",
                        "price": 16.5,
                        "premiumPrice": 23.45,
                        "toppingPrice": 2.05,
                        "isGlutenFree": false,
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 5,
                        "type": "pizza",
                        "name": "Huge 18\"",
                        "price": 17.95,
                        "premiumPrice": 26.95,
                        "toppingPrice": 2.25,
                        "isGlutenFree": false,
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 6,
                        "type": "pizza",
                        "name": "Gluten Free 12\"",
                        "price": 16.9,
                        "premiumPrice": 21.45,
                        "toppingPrice": 1.35,
                        "isGlutenFree": true,
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 7,
                        "type": "salad",
                        "name": "Side",
                        "price": 3.95,
                        "toppingPrice": 0.65,
                        "isGlutenFree": false,
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 8,
                        "type": "salad",
                        "name": "Entree",
                        "price": 7.95,
                        "toppingPrice": 1.3,
                        "isGlutenFree": false,
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 9,
                        "type": "salad",
                        "name": "Entree",
                        "price": 8.95,
                        "toppingPrice": 1.3,
                        "isGlutenFree": false,
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 10,
                        "type": "drink",
                        "name": "Can",
                        "price": 1.5,
                        "isGlutenFree": false,
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 11,
                        "type": "drink",
                        "name": "20 oz",
                        "price": 1.95,
                        "isGlutenFree": false,
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 12,
                        "type": "drink",
                        "name": "2 liter",
                        "price": 2.75,
                        "isGlutenFree": false,
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 13,
                        "type": "drink",
                        "name": "20 oz",
                        "price": 1.75,
                        "isGlutenFree": false,
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 14,
                        "type": "drink",
                        "name": "Serving",
                        "price": 1.75,
                        "isGlutenFree": false,
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    },
                    {
                        "id": 15,
                        "type": "drink",
                        "name": "Serving",
                        "price": 2,
                        "isGlutenFree": false,
                        "entityAspect": {
                            "entityState": "Unchanged"
                        }
                    }
                ]
            }
        },
        "metadataVersion": "1.0.5"
    };

    testFns.lookupsExport = JSON.stringify(lookupsExportJson);

})(window.testFns);
