//
console.log('Vehicle1:');
//

class Vehicle1 {
    drive(): void {
        console.log('chugga chugga 1');
    };

    honk(): void {
        console.log('beep 1');
    };
};

const vehicle = new Vehicle1();
vehicle.drive();
vehicle.honk();

//
console.log('');
console.log('Vehicle2:');
//

class Vehicle2 {
    drive(): void {
        console.log('chugga chugga 2');
    };

    honk(): void {
        console.log('beep 2');
    };
};

class Car1 extends Vehicle2 {
    drive(): void {
        console.log('vroom vroom 1');
    };
};

const car1 = new Car1();
car1.drive();
car1.honk();

// Nothing Changes
console.log('');
console.log('Vehicle3:');
//

class Vehicle3 {
    public drive(): void {
        console.log('chugga chugga 3');
    };

    public honk(): void {
        console.log('beep 3');
    };
};

class Car2 extends Vehicle3 {
    public drive(): void {
        console.log('vroom vroom 2');
    };
};

const car2 = new Car2();
car2.drive();
car2.honk();

//
console.log('');
console.log('Vehicle4:');
//

class Vehicle4 {
    protected honk(): void {
        console.log('beep 4');
    };
};

class Car3 extends Vehicle4 {
    private drive(): void {
        console.log('vroom vroom 3');
    };

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    };
};

const car3 = new Car3();
car3.startDrivingProcess();

//
console.log('');
console.log('Vehicle5');
//

class Vehicle5 {
    color: string = 'red 1';

    protected honk(): void {
        console.log('beep 5');
    };
};

class Car4 extends Vehicle5 {
    private drive(): void {
        console.log('vroom vroom 4');
    };

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    };
};

const car4 = new Car4();
car4.startDrivingProcess();
console.log(car4.color);

//
console.log('');
console.log('Vehicle6:');
//

class Vehicle6 {
    color: string;

    constructor(color: string) {
        this.color = color;
    };

    protected honk(): void {
        console.log('beep 6');
    };
};

class Car5 extends Vehicle6 {
    private drive(): void {
        console.log('vroom vroom 5');
    };

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    };
};

const car5 = new Car5('red 2');
car5.startDrivingProcess();
console.log(car5.color);

//
console.log('');
console.log('Vehicle7:');
//

class Vehicle7 {
    constructor(public color: string) {};

    protected honk(): void {
        console.log('beep 7');
    };
};

class Car6 extends Vehicle7 {
    private drive(): void {
        console.log('vroom vroom 6');
    };

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    };
};

const car6 = new Car6('red 3');
car6.startDrivingProcess();
console.log(car6.color);

//
console.log('');
console.log('Vehicle8:');
//

class Vehicle8 {
    constructor(public color: string) {};

    protected honk(): void {
        console.log('beep 8');
    };
};

class Car7 extends Vehicle8 {
    constructor(public wheels: number, color: string) {
        super(color);
    };

    private drive(): void {
        console.log('vroom vroom 7');
    };

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    };
};

const car7 = new Car7(4, 'red 4');
car7.startDrivingProcess();
console.log(car7.color);

// npm i parcel --save-dev