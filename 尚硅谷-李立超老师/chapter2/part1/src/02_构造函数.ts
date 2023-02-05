class Dog {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log('2023年汪汪汪');
        console.log('this指向', this, typeof this);
    }
}

const dog1 = new Dog('旺财', 2);
const dog2 = new Dog('十一', 3);
console.log(dog1);
console.log(dog2);
dog1.bark();

