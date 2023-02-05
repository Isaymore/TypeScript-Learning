import { movie } from "./m1";

const idol = {
    name: '周星星同学',
    age: 17
}
idol.age = 18;
console.log(idol);
console.log('星爷小迷弟');
function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(111, 222));
console.log('星爷电影', movie);
console.log('Promise', Promise, typeof Promise);