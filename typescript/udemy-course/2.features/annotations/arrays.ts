const carMakers = ["Ford", "Honda", "Toyota"];
const carMakers2: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake = [
    ["Ford Ka"],
    ["Honda Civic"],
    ["Corolla"]
];
const carsByMake2: string[][] = [];

// Help with inference when extracting values
const car2 = carMakers[0];
const myCar = carMakers.pop();

// Prevente incompatible values
// carMakers.push(100);

// Help with "map"
const carArray = carMakers.map((car) => {
    return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), "07/08/1999"];
const importantDates2: (string | Date)[] = [];