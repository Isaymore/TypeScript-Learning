// 定义蛇类
class Snake {
    // 表示蛇头的元素
    head: HTMLElement;
    // 表示蛇身的元素(包括蛇头)
    body: HTMLCollection;
    // 表示蛇的容器
    element: HTMLElement;

    constructor() {
        this.element = document.querySelector('.snake')!;
        // 获取蛇头元素，并赋值给属性head
        this.head = document.querySelector('.snake > div')!;
        // 获取蛇身元素，并赋值给属性body
        this.body = this.element.getElementsByTagName('div');
        // 获取蛇的容器，并赋值给属性element
    }
    // 获取蛇头的X轴坐标
    get X() {
        return this.head.offsetLeft;
    }
    // 获取蛇头的Y轴坐标
    get Y() {
        return this.head.offsetTop;
    }
    // 设置蛇头的X轴坐标
    set X(val) {
        // 如果新值和旧值相同，直接return，不再修改
        // 因为蛇上下左右移动，每次移动，X和Y值不会同时改变，如果同时变，就变成对角线了
        if (this.X === val) {
            return;
        }
        // 判断是否撞墙：X值的合法范围是[0,290]
        if (val < 0 || val > 290) {
            // 撞墙了，抛出异常：注意要在GameControl.ts的run方法内部，也就是调用该方法set Y()处捕获异常
            // 这里抛出异常的原因：Snake.ts和GameControl.ts是2个模块，Snake.ts通过抛出异常，通知GameControl.ts
            throw new Error('蛇撞墙了~');
        }

        /**
         * 修改x，实际是修改水平坐标，蛇往左右移动。比如蛇往左移动时，不能往右掉头，反之亦然
         * 判断第二个div的偏移量offsetLeft跟蛇头的新值val是否相等
         * 如果相等，说明发生了往左或右掉头
         * 注意：如果只有一个蛇头div，支持左右移动
         */
        if (this.body[1] && (<HTMLElement>this.body[1]).offsetLeft === val) {
            console.log('水平方向发生了掉头');
            // 如果掉头，蛇往反方向继续移动
            // 判断蛇头新值val和旧值X，不会出现相等的情况
            if (val > this.X) {
                // 蛇头新值val大于旧值X，说明蛇往右掉头，蛇要继续往左走
                val = this.X - 10;  // 减10刚好抵消了GameControl.ts的run方法内部的加10
            } else {
                // 蛇头新值val < 旧值X，说明蛇往左掉头，蛇要继续往右走
                val = this.X + 10;
            }
        }

        // 顺序：先执行移动身体，再设置蛇头的X轴坐标
        // 如果顺序相反，第一次吃到食物，虽然页面添加一个div，但跟蛇头对应的div位置重合
        // 原因：moveBody方法内部遍历时，没有遍历蛇头div
        this.moveBody();
        this.head.style.left = `${val}px`;
        // 检查蛇头是否撞到身体
        this.checkHeadBody();
    }
    // 设置蛇头的Y轴坐标
    set Y(val) {
        // 如果新值和旧值相同，直接return，不再修改
        // 因为蛇上下左右移动，每次移动，X和Y值不会同时改变，如果同时变，就变成对角线了
        if (this.Y === val) {
            return;
        }
        // 判断是否撞墙：Y值的合法范围是[0,290]
        if (val < 0 || val > 290) {
            // 撞墙了，抛出异常：注意要在GameControl.ts的run方法内部，也就是调用该方法set Y()处捕获异常
            // 这里抛出异常的原因：Snake.ts和GameControl.ts是2个模块，Snake.ts通过抛出异常，通知GameControl.ts
            throw new Error('蛇撞墙了~');
        }

        /**
         * 修改x，实际是修改垂直坐标，蛇往上下移动。比如蛇往下移动时，不能往上掉头，反之亦然
         * 判断第二个div的偏移量offsetTop跟蛇头的新值val是否相等
         * 如果相等，说明发生了往上或下掉头
         * 注意：如果只有一个蛇头div，支持上下移动
         */
        if (this.body[1] && (<HTMLElement>this.body[1]).offsetTop === val) {
            console.log('垂直方向发生了掉头');
            // 如果掉头，蛇往反方向继续移动
            // 判断蛇头新值val和旧值Y，不会出现相等的情况
            if (val > this.Y) {
                // 蛇头新值val大于旧值Y，说明蛇往下掉头，蛇要继续往上走
                val = this.Y - 10;  // 减10刚好抵消了GameControl.ts的run方法内部的加10
            } else {
                // 蛇头新值val < 旧值Y，说明蛇往上掉头，蛇要继续往下走
                val = this.Y + 10;
            }
        }

        // 顺序：先执行移动身体，再设置蛇头的Y轴坐标
        // 如果顺序相反，第一次吃到食物，虽然页面添加一个div，但跟蛇头对应的div位置重合
        this.moveBody();
        this.head.style.top = `${val}px`;
        // 检查蛇头是否撞到身体
        this.checkHeadBody();
    }
    // 蛇添加身体
    addBody() {
        // 给蛇的容器元素，添加一个div的方法一
        // 在父元素末尾添加子元素：父元素.appendChild(子元素)
        // 类型“string”的参数不能赋给类型“Node”的参数
        // this.element.appendChild('div');  // 报错
        // const div = document.createElement('div'); // 第一步：创建node节点
        // this.element.appendChild(div); // 第二步：父元素末尾添加节点
        // 给蛇的容器元素，添加一个div的方法二
        this.element.insertAdjacentHTML('beforeend', '<div class="part"></div>');
    }
    // 蛇移动身体
    moveBody() {
        /**
         * 将前边的身体位置，设置给后边的身体位置
         * eg： 第4节 = 第3节位置
         * 第3节 = 第2节位置
         */
        // 遍历获取所有身体，这里不用考虑蛇头的坐标，因为set Y方法已经设置蛇头坐标
        // for(let i = 0; i < this.body.length; i++) {
        // 注意1：这里i > 0，不用i >= 0 是因为 i = 0时，this.body[-1]为undefined，会报错：Cannot read properties of undefined (reading 'offsetLeft') 
        // 注意2：从this.body数组后面开始遍历，如果length不减1
        // this.body[length]索引超出，this.body[length]为undefined，会报错：Cannot read properties of undefined (reading 'style')
        for (let i = this.body.length - 1; i > 0; i--) {
            // 获取前边的身体位置 类型断言
            let X = (this.body[i - 1] as HTMLElement).offsetLeft;
            let Y = (<HTMLElement>this.body[i - 1]).offsetTop;
            // 将前边的身体位置，设置给后边的身体位置
            (<HTMLElement>this.body[i]).style.left = `${X}px`;
            (<HTMLElement>this.body[i]).style.top = `${Y}px`;
        }
    }
    // 检查蛇头是否撞到身体
    checkHeadBody() {
        // 遍历所有蛇身，检查蛇身和蛇头的坐标是否相等
        // 如果相等，说明蛇头撞到身体，游戏结束
        // console.log(this.body); // div.part元素组成的数组
        // console.log(this.body.length);
        // i = 1,不是i = 0 ，是因为蛇身的蛇头永远不可能撞到蛇头
        for (let i = 1; i < this.body.length; i++) {
            const bd = <HTMLElement>this.body[i]; // div.part元素
            // console.log('bd', bd, typeof bd);
            // 判断蛇身和蛇头的X和Y轴坐标是否相等
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                // 如果相等，说明蛇头撞到身体，游戏结束，抛出异常
                throw new Error('撞到自己了~')
            }
        }
    }
}

export default Snake;