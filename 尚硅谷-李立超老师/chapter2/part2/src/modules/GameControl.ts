import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器，控制其他类：蛇、食物和记分牌
class GameControl {
    // 声明属性,类作为类型声明
    snake: Snake; // 蛇
    food: Food; // 食物
    scorePanel: ScorePanel; // 记分牌
    // 存储蛇的移动方向，也就是按键方向
    direction: string = '';
    // 标记游戏是否结束
    isLive: boolean = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        // 调用游戏初始化方法，开始游戏
        this.init();
    }
    // 游戏初始化，调用后开始游戏
    init() {
        /**
         * 监听键盘按下的事件
         * bind() 方法创建一个新的函数
         * 在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数
         * 而其余参数将作为新函数的参数，供调用时使用
         */
        document.addEventListener('keydown', this.onKeydown.bind(this));
        // 调用run方法，移动蛇
        this.run();
    }

    /**
     * 键盘按下的回调函数
     * ArrowUp--Chrome  Up--IE 其它同理   
     * ArrowDown Down
     * ArrowLeft Left
     * ArrowRight Right
     * @param event 
     */
    onKeydown(event: KeyboardEvent) {
        // // 原则：谁调用，this就指向谁：this指向#document对象
        // // 但调用bind函数后，this指向bind函数的第一个参数，这里的this指向类GameControl的实例
        // console.log('onKeydown的this', this, typeof this);
        // console.log(event.key);
        // 检查event.key的值是否合法（用户是否按了正确的箭头按键）
        const arrow = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Up', 'Down', 'Left', 'Right'];
        if (arrow.includes(event.key)) {
            // 修改direction属性
            this.direction = event.key;
        }
    }
    // 控制蛇的移动方向(也就是按键方向)
    run() {
        console.log(666); 
        // 获取蛇的初始化坐标，也就是蛇头的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        // 根据按键方向，修改蛇的X和Y值
        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                // 往上移动 top 减少
                Y -= 10;
                break;
            case 'ArrowDown':
            case 'Down':
                // 往下移动 top 增加
                Y += 10;
                break;
            case 'ArrowLeft':
            case 'Left':
                // 往左移动  left 减少
                X -= 10;
                break;
            case 'ArrowRight':
            case 'Right':
                // 往右移动  left 增加
                X += 10;
                break;
        }
        // 检查蛇是否吃到了食物
        this.checkEat(X, Y);
        // 修改蛇的X和Y轴的坐标
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (error) {
            console.log((error));
            
            // 捕获异常，游戏结束，并弹出一个提示信息
            this.isLive = false;
            // 加判断的原因：tsconfig.json开启了use: strict，程序会报错：error的类型是unknown
            if (error instanceof Error) {
                alert(`${error.message} Game Over~`)
            }
        }


        // 开启定时器写法一：箭头函数内调用run方法
        // 因为箭头函数没有this，于是往上层找，找到类GameControl的实例
        // 该实例调用run方法，run方法内部的this指向当前调用实例方法的实例
        // setTimeout(() => {
        //     this.run();
        // }, 300);
        // 开启定时器写法二：run方法调用bind函数，使this指向bind函数的第一个参数
        // 300ms后，递归调用run方法
        // 等级越高，timeout越小，因为最大等级是10，所以timeout最小是30ms
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    // 检查蛇是否吃到了食物
    checkEat(X: number, Y: number) {
        if (X === this.food.point.x && Y === this.food.point.y) {
            // 重置食物的位置
            this.food.change();
            // 蛇身添加一节
            this.snake.addBody();
            // 分数增加
            this.scorePanel.addScore();
        }
    }
}

export default GameControl;