// Creating an Array
let userNames = ["Ahza","Ahmera","Admin","Ahme"]

userNames = []

if(userNames.length === 0){
    console.log("We Need to Find Some Users, Your Array is Empty")
} else{
// Using ForEach Loop on Array
userNames.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`\nHello ${oneUser}, Would you like to see a status report?`)
    } 
    else{
        console.log(`\nHello ${oneUser}, Thankyou for Logging in Again.`)
    }
})
}