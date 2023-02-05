(function () {
    abstract class Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        // 方法“sayHello”不能具有实现，因为它标记为抽象
        //    abstract sayHello() {
        //         console.log('动物在叫~');
        //     }
        abstract sayHello(): void;
    }

    class Dog extends Animal {
        sayHello(): void {
            // 无法通过 super 表达式访问“Animal”类中的“sayHello”抽象方法。
            // super.sayHello();
            console.log('汪汪汪~');
        }
    }
    class Cat extends Animal {
        sayHello(): void {
            console.log('喵喵喵~');

        }
    }
    // // 无法创建抽象类的实例
    // const animal = new Animal('兔子');
    const dog = new Dog('旺财');
    console.log('dog', dog, typeof dog);
    dog.sayHello();
    const cat = new Cat('胖橘');
    console.log('cat', cat, typeof cat);
    cat.sayHello();
})();