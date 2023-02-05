// 声明一个变量，同时指定该变量的类型为number
var a;
a = 666;
a = 888;
a = 'xingye';
var b;
b = '周星星同学';
b = 999;
// 声明变量后直接赋值
// let c:boolean=false;
// 如果声明变量后直接赋值，TS编译器会自动检测变量的类型
var c = false;
c = true;
c = 111;
// JS中的函数是不考虑参数的类型和个数，但TS考虑
function getSum(a, b) {
    return a + b;
}
console.log(getSum(111, '222'));
