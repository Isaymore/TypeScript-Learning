// object表示一个JS对象
var o;
o = {};
o = function () {
};
var p;
p = { name: '星爷', age: 17 };
p = { name: '周董' };
// [propName: string]: any 表示任意类型的属性
var q;
q = { name: '周星星同学', age: 17, gender: 'male' };
// 设置函数结构的类型声明
var r;
r = function (n1, n2) {
    return n1 + n2;
};
// 字符串数组
var hobby;
hobby = ['学习', '吃饭', '睡觉'];
// 用数组泛型来表示数组
var fibonacci = [1, 1, 2, 3, 5];
// 元组：固定长度的数组
var tuple;
tuple = ['xingye', 17, 'male'];
// enum（枚举类型）
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var idol;
idol = {
    name: '星爷',
    gender: Gender.Male
};
console.log(idol.gender === Gender.Male);
