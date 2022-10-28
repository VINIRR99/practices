const oldCivic = { name: 'civic', year: 2000, broken: true };

const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);

interface Vehicle { name: string; year: number; broken: boolean };

const printVehicle2 = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken? ${vehicle.broken}`);
};

printVehicle2(oldCivic);

interface Vehicle2 { name: string; year: Date; broken: boolean, summary(): string };

const ford = { name: 'ford', year: new Date(), broken: false, summary(): string {return `Summary => Name: ${this.name}`} };

const printVehicle3 = (vehicle: Vehicle2): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken? ${vehicle.broken}`);
    console.log(vehicle.summary());
};

printVehicle3(ford);

interface Reportable { summary(): string };

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(ford);

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {return `My drink has ${this.sugar} grams of sugar`}
};

printSummary(drink);