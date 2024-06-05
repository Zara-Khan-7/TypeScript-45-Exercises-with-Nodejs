"use strict";
// Defining function to show magicians name
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// Making an array of magicians name
let magicians_name = ["Spell", "Casper", "Argan"];
let great_magicians = make_great(magicians_name);
show_magicians(great_magicians);
