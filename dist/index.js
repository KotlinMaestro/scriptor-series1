"use strict";
let sales = 454534334;
let course = 'TypeScript';
let is_published = true;
let level;
level = 9;
level = 'Jay';
let numbers = [1, 4, 6, "string"];
let numbers2 = [23, 45, 21, 56];
let names = ["Vince", "John", "Jennifer", "Michelangelo"];
console.log(names.forEach(n => n.endsWith("e")));
let myTuple;
myTuple = [5, true, 'Johny'];
let user = [3, 'Vince'];
const readOnlyTuple = [56, true, "I am Vincent"];
const graph = [55.6, 32.1];
let car = {
    type: "Mitsubishi",
    model: "Mirage",
    mileage: 78
};
console.log("A car of the type " + car.type + " and the model " + car.model + "flew past us at " + car.mileage.toString() + " miles per hour");
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["West"] = 2] = "West";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
})(CardinalDirections || (CardinalDirections = {}));
console.log(CardinalDirections.North);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
var CardinalDirections1;
(function (CardinalDirections1) {
    CardinalDirections1["North"] = "North";
    CardinalDirections1["East"] = "East";
    CardinalDirections1["South"] = "South";
    CardinalDirections1["West"] = "West";
})(CardinalDirections1 || (CardinalDirections1 = {}));
const carMileage = 76544;
const carBrand = "Mitsubishi";
const carModel = "Mirage";
const myCar = {
    mileage: carMileage,
    brand: carBrand,
    model: carModel
};
const rect = {
    height: 345,
    width: 78
};
const rect1 = {
    height: 56,
    width: 79
};
const color_rect = {
    height: 34,
    width: 54,
    color: "Red"
};
function printStatusCode(code) {
    console.log(`Return status code ${code}`);
}
printStatusCode(404);
printStatusCode('404');
function getTime() {
    return new Date().getTime();
}
function printHello() {
    console.log('Hello World!!');
}
function multiply(a, b) {
    return a * b;
}
let product = multiply(67, 3);
function add(a, b, c) {
    return a + b + (c || 0);
}
let sum = add(56, 45);
let sum_2 = add(56, 76, 45);
function pow(value, exponent = 10) {
    return value ** exponent;
}
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
let dividend = 78;
let divisor = 2;
//# sourceMappingURL=index.js.map