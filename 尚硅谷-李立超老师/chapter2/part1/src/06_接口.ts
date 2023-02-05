(function () {
    // 定义一个对象的类型，myType是类型别名
    type myType = {
        name: string,
        age: number
    }
    const obj: myType = {
        name: '星爷',
        age: 17
    };
    console.log('obj', obj, typeof obj);

    // 定义接口，用来定义类结构，指定类中包含哪些属性和方法
    interface MyInterface {
        name: string,
        age: number
    }
    interface MyInterface {
        gender: string
    }
    const obj2: MyInterface = {
        name: '周董',
        age: 18,
        gender: 'male'
    };
    console.log('obj2', obj2, typeof obj2);

    interface MyInter {
        // 接口中的所有属性都没有实际值
        name: string;
        // 接口中所有的方法都是抽象方法
        sayHello(): void;
    }

    // 定义类时，使类实现接口
    class MyClass implements MyInter {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        sayHello(): void {
            console.log('hello~');

        }
    };
    const myClass = new MyClass('测试类实现接口');
    console.log('myClass', myClass, typeof myClass);
    myClass.sayHello();

})();