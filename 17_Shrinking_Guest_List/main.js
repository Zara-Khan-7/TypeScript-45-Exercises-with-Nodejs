"use strict";
// Creating a Guest List Array
let guestList = ["David", "John", "Lucifer", "Edward"];
// Making a Variable for those guests who can't come
let dontCome = guestList[0];
// Print the name of guest who can't come
console.log(dontCome, "Not able to Attend");
// Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Peter");
// Print Message for Bigger Table
console.log("\n\tGood News ! We have Found a Bigger Table For Dinner\n");
// Adding a new guest at the starting index of array
guestList.unshift("Jack");
// Adding a new guest at the ending index of array
guestList.push("Leo");
// Making Variable to get the middle index of an array
let middleindex = Math.floor(guestList.length / 2);
// Adding a new guest in the middle of an Array
guestList.splice(middleindex, 0, "George");
// Print Message of Updated List
console.log("\n\tUpdated List Of Our Guests\n");
// Send invitation messages to Everyone Separately
guestList.forEach(oneguest => console.log(`Hey ${oneguest}, Would you Like to Attend the Sunday Brunch?`));
// Limit Guests to {2} only
console.log("\n\tUnfortunately, The New Bigger Table did not Arrive On Time, So I can only Invite 2 Guests for my Sunday Brunch\n");
//Using while-loop to remove guest from the array until 2 names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest}, I cant invite you for Sunday Brunch`);
}
// Printing invitation message to the last 2 guests
console.log("\n\t Inviatation to the last 2 Guests");
// Sending Invitation to the last 2 guests
guestList.forEach(lasttwo => console.log(`\nluckily! ${lasttwo}, You are still invited for the Sunday Brunch\n`));
// Removing the last 2 guests from the Array
guestList.pop();
guestList.pop();
// Printing the Guest list to ensure it is Empty
console.log("Empty List:", guestList);
