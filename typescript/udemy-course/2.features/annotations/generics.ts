class ArrayOfNumbers1 {
    constructor(public collection: number[]) {};

    get(index: number): number {return this.collection[index]};
};

class ArrayOfStrings1 {
    constructor(public collection: string[]) {};

    get(index: number): string {return this.collection[index]};
};

const arrayOfNumbers1 = new ArrayOfNumbers1([1, 2, 3]);
console.log('Array of Numbers 1: ', arrayOfNumbers1.get(1));

const arrayOfStrings1 = new ArrayOfStrings1(['apple', 'orange', 'banana']);
console.log('Array of Strings 1: ', arrayOfStrings1.get(1));

//
console.log();
//

class ArrayOfAnything1<T> {
    constructor(public collection: T[]) {};

    get(index: number): T {return this.collection[index]};
};

const arrayOfNumbers2 = new ArrayOfAnything1<number>([1, 2, 3]);
console.log('Array of Numbers 2: ', arrayOfNumbers2.get(1));

const arrayOfStrings2 = new ArrayOfAnything1<string>(['apple', 'orange', 'banana']);
console.log('Array of Strings 2: ', arrayOfStrings2.get(1));

// Example of generics with functions
console.log();
//

const printNumbers1 = (arr: number[]): void => {
    arr.forEach((num: number): void => console.log('Print Numbers 1: ', num));
};

const printStrings1 = (arr: string[]): void => {
    arr.forEach((str: string): void => console.log('Print Strings 1: ', str));
};

printNumbers1([1, 2, 3]);
printStrings1(['apple', 'orange', 'banana']);

//
console.log();
//

const printAnything1 = <T>(arr: T[]): void => {
    arr.forEach((item: T): void => console.log('Print Anything 1: ', item));
};

printAnything1<number>([1, 2, 3]);
printAnything1<string>(['apple', 'orange', 'banana']);

// Generic Constraints
console.log();
//

class Car1 {
    print = (): void => {console.log('Car1: ', 'I am a car')};
};

class House1 {
    print = (): void => {console.log('House1: ', 'I am a house')};
};

interface Printable {
    print(): void;
};

const printHousesOrCars1 = <T extends Printable>(arr: T[]): void => {
    arr.forEach((item: T): void => item.print());
};

printHousesOrCars1<Car1>([new Car1(), new Car1()]);
printHousesOrCars1<House1>([new House1(), new House1()]);