(function () {
    class Idol {
        private _name: string;
        private _age: number;
        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }
        // // 定义方法，用来获取name属性
        // getName() {
        //     return this._name;
        // }
        // // 定义方法，用来设置name属性
        // setName(val: string) {
        //     this._name = val;
        // }
        // // 定义方法，用来获取age属性
        // getAge() {
        //     return this._age;
        // }
        // // 定义方法，用来设置age属性
        // setAge(val: number) {
        //     // 判定年龄是否合法
        //     if (val >= 0) {
        //         this._age = val;
        //     }
        // }
        get name() {
            console.log('调用执行get name()方法~');
            return this._name;
        }
        set name(val: string) {
            console.log('调用执行set name()方法~');
            this._name = val;
        }
        get age() {
            console.log('调用执行get age()方法~');
            return this._age;
        }
        set age(val: number) {
            console.log('调用执行set age()方法~');
            // 判定年龄是否合法
            if (val >= 0) {
                this._age = val;
            }
        }
    }
    const idol = new Idol('星爷', 17);
    // 属性“_name”为私有属性，只能在类“Idol”中访问
    // TypeScript 编译的时候即使报错了，还是会编译生成js文件
    // 解决方法：tsconfig.json中配置compilerOptions.noEmitOnError为true
    // idol._name = '周星星同学';
    // idol._age = -100;
    // idol.setName('周星星');
    // idol.setAge(18);
    // console.log(idol.getName());
    // 调用执行set name()方法
    idol.name = '星仔';
    // 调用执行get name()方法
    console.log(idol.name);
    idol.age = 18;
    console.log(idol.age);

    console.log('idol', idol, typeof idol);

    class A {
        protected num: number;
        constructor(num: number) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log('test的this.num', this.num, typeof this.num);
        }
    }
    const b = new B(666);
    console.log('b', b, typeof b);
    b.test()
    // 属性“num”受保护，只能在类“A”及其子类中访
    // console.log(b.num);

    class C {
        // 定义类的语法糖：等效于类型声明+构造函数中赋值
        constructor(public name: string, public age: number) { }
    }
    const c = new C('星爷', 17);
    console.log('c', c, typeof c);

})();