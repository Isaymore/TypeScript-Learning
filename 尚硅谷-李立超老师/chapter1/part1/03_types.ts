let d: 10;
d = 10;
d = 11;

let e: 'male' | 'female';
e = 'male';
e = 'female';
e = '人妖';

let f: string | boolean;
f = 'xingye';
f = true;
f = 666;

// let g: any;
let g;
g = 17;
g = 'xingye';
g = true;

// g的类型是any，可以赋值给任意变量
let s: string;
s = g;

let h: unknown;
h = 18;
h = '周星星';
g = false;

h = 'movie';
// unknown实际上是一个类型安全的any
// unknown类型的变量不能直接赋值给其它变量
// s = h;
// // 赋值给其它变量的方法一
// if(typeof h === "string"){
//     s = h;
// }
// 赋值给其它变量的方法二
s = h as string;
// 赋值给其它变量的方法三
s = <string>h;

function fn(): void {
}

function fn2(): never {
    throw new Error('报错了~');
}


