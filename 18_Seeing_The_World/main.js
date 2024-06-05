"use strict";
// Making an Array of countries and print its original order
let countriesToVisit = ["Dubai", "China", "Bangladesh", "America"];
console.log("Original Order:", countriesToVisit);
// Making a copy of original array and printing the array in alphabetical order without modifying original array
console.log("Alphabetical Order:", [...countriesToVisit].sort());
// show that the array is in original form
console.log("Still in Original Order:", countriesToVisit);
// Print the array in reversed order without modifying the actual array list
console.log("Reverse Order:", [...countriesToVisit].reverse());
// show that the array is still in its original form
console.log("Still in Original Order:", countriesToVisit);
// We have changed the Original Array order now
console.log("Original Array Reversed:", countriesToVisit.reverse());
// Print the Array to show that it is back to its original order
console.log("Back to Original Order:", countriesToVisit.reverse());
// Print the Array to show that its order has been changed in Alphabetical Order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
// We have again changed the Original Array to Reverse Oder again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());
