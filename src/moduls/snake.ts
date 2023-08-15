export default class Snake {
  //定义一个蛇的容器
  element: HTMLElement
  //蛇头
  head: HTMLElement
  //蛇身体(包括头)
  bodies: HTMLCollection

  constructor() {
    this.element = document.querySelector('#snake')!
    this.head = this.element.querySelector('#snake>div') as HTMLElement
    this.bodies = this.element.getElementsByTagName('div')
  }

  get X() {
    return this.head.offsetLeft
  }

  get Y() {
    return this.head.offsetTop
  }
  //set X
  set X(value: number) {
    if (this.X === value) {
      return
    }

    if (value < 0 || value > 290) {
      throw new Error('撞墙了 GAME OVER')
    }

    //修改X时  时在修改水平坐标 向左移动就不能向右移动 反之亦然
    //第一个和第二个发生重合时 说明发生了掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      //如果新值大于旧值 说明此时是向右掉头的 应该继续向左走
      if (value > this.X) {
        //value的值不正确 修改value的值
        value = this.X - 10
      } else {
        value = this.X + 10
      }

    }
    this.moveBody()
    this.head.style.left = value + 'px'
    this.checkHeadBody()
  }
  //set Y
  set Y(value: number) {
    if (this.Y === value) {
      return
    }

    if (value < 0 || value > 290) {
      throw new Error('撞墙了 GAME OVER')
    }
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      //如果新值大于旧值 说明此时是向右掉头的 应该继续向左走
      if (value > this.Y) {
        //value的值不正确 修改value的值
        value = this.Y - 10
      } else {
        value = this.Y + 10
      }

    }
    this.moveBody()
    this.head.style.top = value + 'px'
    this.checkHeadBody()
  }

  //蛇增加身体的方法
  addBody() {
    let vDom = document.createElement('div')
    this.element.appendChild(vDom)//在结束标签前插入

  }

  //蛇身体移动的方法
  moveBody() {
    /*
      第四节的身体 到 第三节的位置
      三到二
      二到一
      一再setter的时候已经改了 这里不用变
    */
    for (let i = this.bodies.length - 1; i > 0; i--) {
      //获取前一节的位置 
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      //把前一节的位置的值赋值给后一节
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px'
    }
    // console.log(this.bodies.length)
  }

  checkHeadBody() {
    for (let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement
      if (bd.offsetLeft === this.X && bd.offsetTop === this.Y
      ) {
        throw new Error('撞身体 gameover')
      }
    }
  }




}

//querySelector是死的不能热更新 getElementsByTagName能热更新
//insertAdjacentElement 在结束标签前插入