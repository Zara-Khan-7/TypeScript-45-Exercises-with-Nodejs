// Creating an Array
let userNames = ["Ahza","Ahmera","Admin","Ahme"];

// Using ForEach Loop on Array
userNames.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`\nHello ${oneUser}, Would you like to see a status report?`)
    } 
    else{
        console.log(`\nHello ${oneUser}, Thankyou for Logging in Again.`)
    }
})
