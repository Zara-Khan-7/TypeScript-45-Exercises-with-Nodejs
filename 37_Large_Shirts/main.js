"use strict";
// MAKING A FUNCTION
function make_shirt(size = "Large", printMessage = "I Love TypeScript") {
    console.log(`You have selected ${size} size shirt with ${printMessage} printed on it`);
}
// CALLING A FUNCTION WITH DEFAULT VALUES
make_shirt();
// CALLING A FUNCTION WITH MEDIUM SIZE AND DEFAULT VALUES
make_shirt("Medium");
// CALLING A FUNCTION NOW WITH SMALL SIZE AND DIFFERENT PRINT MESSAGE
make_shirt("Small", "I Love JavaScript");
