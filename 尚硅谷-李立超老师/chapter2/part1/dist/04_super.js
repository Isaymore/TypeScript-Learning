"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('动物在叫~');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            // Dog是派生类
            // 派生类的构造函数必须包含 "super" 调用
            // 访问派生类的构造函数中的 "this" 前，必须调用 "super"
            // console.log('constructor的super',super,typeof super);
            super(name); // 在派生类的构造函数中，super表示调用父类的构造函数
            this.age = age;
        }
        sayHello() {
            // console.log('汪汪汪~');
            // console.log('类方法的super',super,typeof super);
            // 在类方法中，super表示当前类的父类
            super.sayHello();
        }
    }
    const dog = new Dog('旺财', 2);
    console.log('dog', dog, typeof dog);
})();
