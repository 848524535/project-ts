//定义一个记分牌
export default class ScorePanel {
  //属性
  score = 0
  level = 1
  //定义一个升级分数 (每多少分升一级)
  scoreUp: number
  //定义一个最大等级
  levelMax: number
  //分数和等级所在的元素在类中初始化
  scoreEle: HTMLElement
  levelEle: HTMLElement
  constructor(scoreUp: number = 10, levelMax: number = 10) {
    this.scoreEle = document.querySelector('#panel-score')!
    this.levelEle = document.querySelector('#panel-level')!
    this.scoreUp = scoreUp
    this.levelMax = levelMax
  }

  //加分数
  addScore() {
    this.scoreEle.innerHTML = ++this.score + ''
    if (this.score % this.scoreUp === 0) {
      this.levelUp()
    }
  }
  //升等级
  levelUp() {
    if (this.level < this.levelMax) {
      this.levelEle.innerHTML = ++this.level + ''
    }

  }
}