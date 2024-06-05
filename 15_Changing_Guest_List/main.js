"use strict";
let guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];
let notComing = guestList[0];
console.log(notComing, "Nahi ayeingy");
guestList.splice(0, 1, "Zainab");
guestList.forEach(guest => console.log(`Salam ${guest}, would You Like to Join Us For a Sunday Brunch?`));
