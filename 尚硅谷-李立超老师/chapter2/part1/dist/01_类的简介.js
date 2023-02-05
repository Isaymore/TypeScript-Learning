"use strict";
class Idol {
    constructor() {
        this.name = '周星星';
    }
    movie() {
        console.log('逃学威龙');
    }
    static sing() {
        console.log('李香兰');
    }
}
Idol.age = 17;
const idol = new Idol();
console.log('idol', idol, typeof idol);
console.log('idol.name前', idol.name, typeof idol.name);
// console.log('idol.age', idol.age, typeof idol.age);
console.log('Idol.age', Idol.age, typeof Idol.age);
idol.movie();
// idol.sing();
Idol.sing();
idol.name = '星爷';
console.log('idol.name后', idol.name, typeof idol.name);
// Idol.age = 18;
