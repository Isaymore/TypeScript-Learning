// interface Person {
//     name: string;
//     age: number
// }
// let tom: Person = {
//     name: 'Tom',
//     age: 17
// }

// let xingye: Person = {
//     name: 'xingye'
// }

// let jay: Person = {
//     name: 'jay',
//     age: 17,
//     gender: 'male'
// }

// interface Person {
//     name: string;
//     age?: number
// }
// let xiaobin: Person = {
//     name: 'xiaobin',
//     gender: 'male'
// }

// interface Person {
//     name: string;
//     age?: number;
//     [propName: string]: any;
// }
// let tom: Person = {
//     name: 'Tom',
//     age: 17,
//     gender: 'male'
// }

// interface Person {
//     name: string;
//     age?: number;
//     [propName: string]: string;
// }
// let tom: Person = {
//     name: 'Tom',
//     age: 17,
//     gender: 'male'
// }

// interface Person {
//     name: string;
//     age?: number;
//     [propName: string]: string | number;
// }
// let tom: Person = {
//     name: 'Tom',
//     age: 17,
//     gender: 'male'
// }

// interface Person {
//     readonly id: number;
//     name: string;
//     age?: number;
//     [propName: string]: any;
// }
// let tom: Person = {
//     id: 666,
//     name: 'Tom',
//     age: 17,
//     gender: 'male'
// }
// tom.id = 888;

interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}
let tom: Person = {
    name: 'Tom',
    age: 17,
    gender: 'male'
}
tom.id = 888;