"use strict";
(function () {
    // class Dog {
    //     name: string;
    //     age: number;
    //     constructor(name: string, age: number) {
    //         this.name = name;
    //         this.age = age;
    //     }
    //     sayHello() {
    //         console.log('汪汪汪~');
    //     }
    // }
    // class Cat {
    //     name: string;
    //     age: number;
    //     constructor(name: string, age: number) {
    //         this.name = name;
    //         this.age = age;
    //     }
    //     sayHello(){
    //         console.log('喵喵喵~');
    //     }
    // }
    // Dog类和Cat类具有相同的属性name和age，所以提取共用代码，使用父类Animal
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('动物在叫~');
        }
    }
    // 子类Dog使用关键字extends继承父类Animal
    class Dog extends Animal {
        run() {
            console.log(`${this.name}在跑~`);
        }
        // 方法重写
        sayHello() {
            console.log('汪汪汪~');
        }
    }
    // 子类Cat使用关键字extends继承父类Animal
    class Cat extends Animal {
        // 方法重写
        sayHello() {
            console.log('喵喵喵~');
        }
    }
    const dog = new Dog('旺财', 2);
    console.log('dog', dog, typeof dog);
    dog.run();
    dog.sayHello();
    const cat = new Cat('胖橘', 3);
    console.log('cat', cat, typeof cat);
    cat.sayHello();
})();
