type Car = {
    manufacturer:string;
    model:string;
    [key:string]:any;
}

function create_car(manufacturer:string,model:string,optional:Record<string,any>):Car {
    return {
        manufacturer,
        model,
        ...optional
    }
}

const myCar:Car = create_car("Toyota","Corolla",{Colour:"Black",Year:"2024",Sunroof:"True"});

console.log(myCar);