// Defining the make_album function
function make_album(artist_name:String , album_title:String , Tracks?:number){
    let album : {Artist:String, Title:String, Tracks?:number} = {
        Artist: artist_name, 
        Title:album_title, 
    };

    if (Tracks !== undefined){
        album.Tracks = Tracks;
    }

    return album;

}

// Calling three functions and creating 3 variables with different values
let album1 = make_album("Rosie", "Bloom");

let album2 = make_album("Lily" , "Shine")


// Calling a make_album function with third parameter
let album3 = make_album("Daisy" , "Fragrance" , 4)


// Printing the variables
console.log(album1);
console.log(album2);
console.log(album3);