//这里有三个类 Food Snake ScorePanel 还需要一个类把这三个类整合起来 GameControl
import Food from './Food'
import Snake from './snake'
import ScorePanel from './ScorePanel'
//游戏控制器 控制其他的所有类
export default class GameControl {
  food: Food
  snake: Snake
  scorePanel: ScorePanel
  btn: HTMLElement

  //是否存活
  private islive: boolean = true

  //定义方向键
  direction = 'ArrowRight'
  constructor() {
    this.food = new Food()
    this.snake = new Snake()
    this.scorePanel = new ScorePanel()
    this.btn = document.querySelector('button') as HTMLElement
    //游戏初始化
    this.init()
  }

  init() {
    //事件监听 键盘按下的时候执行...行为
    document.addEventListener('keydown', this.keydownHandler.bind(this))//bind强制this指向实例
    this.run()
  }

  //处理按下键盘的行为
  keydownHandler(e: KeyboardEvent) {
    // console.log(e.key)
    this.direction = e.key
  }


  //跑起来
  run() {
    /*
      Chrome浏览器  IE浏览器
      ArrowUp       Up
      ArrowLeft     Left
      ArrowRight    Right
      ArrowDown     Down
    */
    //获取蛇的坐标
    let X = this.snake.X
    let Y = this.snake.Y
    //根据方向更改坐标的值
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y -= 10
        break
      case 'ArrowLeft':
      case 'Left':
        X -= 10
        break
      case 'ArrowRight':
      case 'Right':
        X += 10
        break
      case 'ArrowDown':
      case 'Down':
        Y += 10
        break
    }
    // console.log(X, Y)
    //是否吃到食物
    this.checkEat(X, Y)

    try {
      //把新坐标赋值给sanke 触发snake的setter 
      this.snake.X = X
      this.snake.Y = Y
    } catch (e: unknown) {
      // console.log(e)//e是error对象
      alert('游戏结束' + (e as Error).message)
      //catch捕获了error 但程序还是会往下执行 要把islive改为false终止程序运行
      this.islive = false
    }

    this.islive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }

  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.snake.addBody()
      this.scorePanel.addScore()
      this.food.change()
    }
  }





}


