// 布尔值
let isDone: boolean = false;
// let createdByNewBoolean: boolean = new Boolean(1);
let createdByBoolean: boolean = Boolean(666)

// 数值
let decLiteral: number = 666;
let hexLiteral: number = 0xffff;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// 字符串
let myName: string = 'xiaobin';
let myAge: number = 26;
let sentence: string = `Hello, my name is ${myName}. I'll be ${myAge + 1} years old next month.`

// 空值
function alertName(): void {
    alert('My name is xiaobin')
}

// undefined 和 null
let u: undefined = undefined;
let n: null = null;
let num1: number = undefined;
let num2: number = null;

let u1: undefined;
let num3: number = u1;
let u2: void;
let num4: number = u2