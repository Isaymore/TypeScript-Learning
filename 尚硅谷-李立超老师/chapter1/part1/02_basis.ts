// 声明一个变量，同时指定该变量的类型为number
let a: number;
a = 666;
a = 888;
a = 'xingye';

let b: string;
b = '周星星同学';
b = 999;

// 声明变量后直接赋值
// let c:boolean=false;
// 如果声明变量后直接赋值，TS编译器会自动检测变量的类型
let c = false;
c = true;
c = 111;

// JS中的函数是不考虑参数的类型和个数，但TS考虑
function sum(a: number, b: number):number {
    return a + b;
}
let result = sum(111,'222');
