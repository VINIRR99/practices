let apples: number = 5;
apples = 10;

let speed: string = "fast";
speed = "slow";

let hasName: boolean = true;
hasName = false;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {

};
let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// Function
const logNumber: (i: number) => void /* This annotation is for the variable, not the function */ = (i: number) => {
    console.log(i)
};

// If declaration and inicialization are on the same line, TypeScript will figure out the type of the variable

// When to use type annotations?
// 1) Function that return the "any" type
const json = '{ "x": 10, "y": 20 }';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // { x: 10, y: 20 }

// 2) When we declare a variable on one line and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i += 1) {
    if (words[i] === "green") foundWord = true;
};

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > 0) numberAboveZero = numbers[i];
};