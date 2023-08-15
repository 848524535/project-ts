//定义一个食物类
export default class Food {
  //定义一个属性表示食物所对应的元素
  element: HTMLElement
  constructor() {
    this.element = document.querySelector('#food')!//!表示值不会为空
  }

  get X() {
    return this.element.offsetLeft
  }

  get Y() {
    return this.element.offsetTop
  }

  //修改食物随机位置
  change() {
    let x = ~~(Math.random() * 29) * 10
    let y = ~~(Math.random() * 29) * 10

    this.element.style.left = x + 'px'
    this.element.style.top = y + 'px'
  }

}

