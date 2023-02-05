// 定义记分牌类
class ScorePanel {
    // score: number;
    // level: number;
    score = 0;
    level = 1;
    // 分数和等级所在的元素，在构造函数中初始化
    // 声明属性，用于表示score对应的元素
    scoreEle: HTMLElement;
    // 声明属性，用于表示level对应的元素
    levelEle: HTMLElement;
    // 声明属性，限制最大等级
    maxLevel: number;
    // 声明属性：多少分升1级  分/级
    upScore: number;

    // ES6语法：默认参数
    constructor(maxLevel: number = 10, upScore: number = 10) {
        // 获取页面中的score元素，并赋值给scoreEle属性
        // ! 非空断言，排除undefined和null
        this.scoreEle = document.querySelector('.score')!;
        this.scoreEle.innerHTML = this.score.toString(); // 避免初始化时，不显示分数
        // 获取页面中的level元素，并赋值给levelEle属性
        // ! 非空断言，排除undefined和null
        this.levelEle = document.querySelector('.level')!;
        this.levelEle.innerHTML = this.level.toString(); // 避免初始化时，不显示等级
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    };

    addScore() {
        // this.score += 1;
        // 或者使用自增
        // this.scoreEle.innerHTML = ++this.score + '';
        this.scoreEle.innerHTML = `${this.score++}`;
        // 如果是10的整数倍，提升一级w
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }
    levelUp() {
        // 限制最大等级，不能无限升级
        // 注意：代码中尽量不要出现字面量判断，因为如果后面修改最大等级，不方便维护和拓展
        if (this.level < this.maxLevel) {
            // this.levelEle.innerHTML = ++this.level + '';
            this.levelEle.innerHTML = `${this.level++}`;
        }
    }
    clear() {
        this.score = 0;
        this.level = 1;
    }
}

// 默认导出类ScorePanel
export default ScorePanel;

// // 测试代码
// const scorePanel = new ScorePanel(10, 2);
// for (let i = 0; i < 9; i++) {
//     scorePanel.addScore();
// }
