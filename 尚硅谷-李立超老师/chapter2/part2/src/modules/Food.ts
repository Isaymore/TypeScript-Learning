// 改变编程思维：面向对象
// 要创建对象，必须要先定义类
// 定义食物类Food
class Food {
    // 声明属性，用于表示食物对应的元素
    element: HTMLElement;

    constructor() {
        // 获取页面中的food元素，并赋值给element属性
        // ! 非空断言，排除undefined和null
        this.element = document.querySelector('.food')!;
    };
    // 获取食物的X轴和Y轴坐标
    get point() {
        const x = this.element.offsetLeft;
        const y = this.element.offsetTop;
        return { x, y }
    };
    // 修改食物的位置
    change() {
        // 借助Math.random()生成随机数，从而生成随机位置
        // 根据stage容器的宽高是304px（注意：border-box，border有2px）
        // 食物的宽高是10px，所以食物的活动范围是[0,290]
        // 蛇移动一次是一格，一格是10px，所以食物的位置必须是整10，否则蛇吃不到食物
        // Math.round(Math.random() * 29) * 10; // 随机数算法实现方法一
        let top = Math.floor(Math.random() * 30) * 10; // 随机数算法实现方法二
        let left = Math.floor(Math.random() * 30) * 10;
        this.element.style.top = `${top}px`;
        this.element.style.left = `${left}px`;
    }
};

// 默认导出类Food
export default Food;

// // 测试代码
// const food = new Food();
// console.log(food.point);
// food.change();
// console.log(food.point);