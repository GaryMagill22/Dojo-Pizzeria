
function pizzaOven(crustType , sauceType , cheeses, toppings) {
    var pizza = {}
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;

}

var pizza1 = pizzaOven("thick", "pesto sauce", "provolone", ["onions", "red peppers", "pineapple"]);
console.log(pizza1);


var pizza2 = pizzaOven("hand tossed", "marinara", ["mozarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("deep dish", "traditional", ["feta", "goat cheese"], ["chicken", "onions", "red peppers"]);
console.log(pizza3);

var pizza4 = pizzaOven("hand tossed", "white", "provelone", ["pepperoni", "mushrooms", "olives"]);
console.log(pizza4);

var crustType = [
    "thick",
    "thin",
    "deep dish",
    "hand tossed",
    "stuffed",
    "gluten free"
];

var sauceType = [
    "marinara",
    "pesto",
    "traditional",
    "BBQ",
    "white sauce"
];

var cheeses = [
    "provelone cheese",
    "mozarella",
    "feta",
    "Ricotta",
    "gouda",
    "goat cheese"
];

var toppings = [
    "pepperoni",
    "sausage",
    "mushrooms",
    "olives",
    "onions",
    "red peppers",
    "pineapple",
    "grilled chicken"
];

