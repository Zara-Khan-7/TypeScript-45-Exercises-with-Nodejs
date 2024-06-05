"use strict";
// Defining function to show magicians name
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// Adding The Great through .map which will modify array
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// Making an array of magicians name
let magicians_name = ["Spell", "Casper", "Argan"];
// Making a copy of original array through .slice() function
let copy_magician_name = magicians_name.slice();
// Modify the copied array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magician_name);
// Printing both Arrays Original and Copied
// Original
console.log("\nOriginal Array\n");
show_magicians(magicians_name);
// Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
