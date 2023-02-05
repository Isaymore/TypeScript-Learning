// function fn(a: any): any {
//     return a
// }

// 定义函数或类时，如果类型不明确，可以使用泛型
function fn<T>(a: T): T {
    return a;
}

// 直接调用具有泛型的函数
let result = fn(666); // 不指定泛型，TS自动推断出类型
let result2 = fn<string>('hello'); // 指定泛型

// 可以同时指定多个泛型
function fn2<T, K>(a: T, b: K): T {
    console.log(b);
    return a;
}
fn2<number, string>(888, 'bye');

// 泛型类
class MyClass<T>{
    name: T;

    constructor(name: T) {
        this.name = name;
    }
}
const mc = new MyClass<string>('星爷');

interface MyInter {
    length: number;
}

// T extends MyInter 表示泛型T必须是继承MyInter的类，即泛型T必须是MyInter的子类
function fn3<T extends MyInter>(arg: T): number {
    return arg.length; // length是接口MyInter的属性
}

// 类型“number”的参数不能赋给类型“MyInter”的参数
// fn3(123);
fn3('abc');
fn3({ length: 8 })