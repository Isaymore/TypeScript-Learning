import { hi } from "./modules";
console.log('星爷');
let a = '周星星同学';
let b = 17;
// 测试移除注释
console.log(hi);
function sum(a: number, b: number) {
    return a + b;
}

function fn(this: Window){
    alert(this);
}

const box1=document.getElementById('#box1');
// box1元素对象可能为null
// box1.addEventListener('click',function(){
//     alert('hello');
// })
// 解决方法一：
if(box1 !==null){
box1.addEventListener('click',function(){
    alert('hello');
})
}
// 解决方法二：使用JS的?运算符
box1?.addEventListener('click',function(){
    alert('hello');
})