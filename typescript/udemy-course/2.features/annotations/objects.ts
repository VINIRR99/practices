const profile = {
    nome: "Alex",
    age: 20,
    coords: {
        lat: 0,
        long: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};

const { age, nome }: { age: number; nome: string } = profile;

console.log(nome);

const { coords: { lat, long } }: { coords: { lat: number; long: number } } = profile;