"use strict";
// Array of Current Users
let current_user = ["Zara", "Ali", "Armaan", "Ahad", "Abeer"];
// Array of New Users
let new_users = ["Armaan", "Fariha", "Abiha", "Ayesha", "Zara"];
// Loop through new_users to check for usernames availability
new_users.forEach(new_one_user => {
    // Making a condition for username already exist and save in our_condition
    let my_condition = current_user.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    // Print different messages using If-Else statements
    if (my_condition) {
        console.log(`Sorry ${new_one_user} is already taken!`);
    }
    else {
        console.log(`This Username ${new_one_user} is available.`);
    }
});
