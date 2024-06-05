// Defining function to show magicians name
function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}

// Adding The Great through .map which will modify array
function make_great(magicians:string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Making an array of magicians name
let magicians_name = ["Spell","Casper","Argan"];


// Call make-great function to modify magicians name
let great_magicians = make_great(magicians_name)


// Call show_magicians that show modified list of magicians
show_magicians(great_magicians);