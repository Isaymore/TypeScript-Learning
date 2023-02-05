"use strict";
(function () {
    const obj = {
        name: '星爷',
        age: 17
    };
    console.log('obj', obj, typeof obj);
    const obj2 = {
        name: '周董',
        age: 18,
        gender: 'male'
    };
    console.log('obj2', obj2, typeof obj2);
    // 定义类时，使类实现接口
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('hello~');
        }
    }
    ;
    const myClass = new MyClass('测试类实现接口');
    console.log('myClass', myClass, typeof myClass);
    myClass.sayHello();
})();
