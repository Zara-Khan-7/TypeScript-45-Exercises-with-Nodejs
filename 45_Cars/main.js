"use strict";
function create_car(manufacturer, model, optional) {
    return Object.assign({ manufacturer,
        model }, optional);
}
const myCar = create_car("Toyota", "Corolla", { Colour: "Black", Year: "2024", Sunroof: "True" });
console.log(myCar);
