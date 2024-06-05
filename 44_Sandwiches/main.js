"use strict";
// making a function with a rest parameter that accepts multiple different arguments/parameters
function make_sandwich(...items) {
    console.log("\nPreparing your sandwich with the following items;\n");
    items.forEach(items_name => console.log("✔" + items_name));
    console.log("\nEnjoy your Meal !\n");
}
// Calling function with 3 different parameters
make_sandwich("Bread", "Chicken", "Cheese", "Onions", "Tomato");
make_sandwich("Pita", "Chicken", "Mushrooms", "Lettuce");
make_sandwich("Bread", "Pickles", "Chicken", "Pepperoni", "Onions", "Lettuce", "Cheese");
