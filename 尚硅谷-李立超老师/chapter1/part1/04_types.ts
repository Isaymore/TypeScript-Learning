// object表示一个JS对象
let o: object;
o = {};
o = function () {
};
let p: { name: string, age?: number };
p = { name: '星爷', age: 17 };
p = { name: '周董' };

// [propName: string]: any 表示任意类型的属性
let q: { name: string, [propName: string]: any };
q = { name: '周星星同学', age: 17, gender: 'male' };

// 设置函数结构的类型声明
let r: (a: number, b: number) => number;
r = function (n1: string, n2: string): number {
    return n1 + n2;
}

// 字符串数组
let hobby: string[];
hobby = ['学习', '吃饭', '睡觉']

// 用数组泛型来表示数组
let fibonacci: Array<number> = [1, 1, 2, 3, 5];

// 元组：固定长度的数组
let tuple: [string, number];
tuple = ['xingye', 17, 'male'];

// enum（枚举类型）
enum Gender {
    Male = 0,
    Female = 1
}
let idol: { name: string, gender: Gender };
idol = {
    name: '星爷',
    gender: Gender.Male
}
console.log(idol.gender === Gender.Male);

// & 表示且，同时
let person: { name: string } & { age: number };
person = { name: '周星星同学', age: 17, gender: 'male' };

// 类型的别名
type myType = 1|2|3|4|5|6;
let u:myType;
let v:myType;
let w:myType
w=1;
