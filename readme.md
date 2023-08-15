## 贪食蛇项目

思考步骤:
  先明确项目里有几个对象: 
    1.蛇 食物 记分牌 
    2.control: 处理三个对象之间的关系

对象:
  snake:
    有哪些属性?
      位置: x y
    有哪些方法?
      存取器:setter getter
      身体变长: addbody
  food:
    属性:
      位置:x y
    方法:
      随机改变位置
  scorePanel:
    属性:
      level
      score
    方法:
      升级
      加分
  gameContorl:
    属性:
      snake
      food
      scorepanel
    方法:
      init()
      处理键盘事件

    业务:
      吃到food snake长度加1  
      蛇撞墙游戏结束
      蛇撞自己游戏结束
      ...
