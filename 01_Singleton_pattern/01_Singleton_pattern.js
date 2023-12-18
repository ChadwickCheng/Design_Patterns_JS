/*
单例模式
单例：它保证一个类只有一个实例，并提供一个全局访问点来获取这个唯一的实例。
实现：判断实例存在与否，存在直接返回，不存在则创建后返回。
作用：
  1. 模块间通信
  2. 系统中某个类的对象只能存在一个，如：线程池、全局缓存、浏览器中的 window 对象等。
  3. 保护自己的属性和方法
注意：
  1. this的使用
  2. 闭包容易导致内存泄露，不需要的时候要及时清除
  3. new的成本(继承)
*/

/*
1. 两个独立对象 sakura li
2. 而这通过门铃通讯
3. 先看sakura家有无门，有门通过门铃通讯，无门则建门
4. 二者开始通讯
*/
let sakura = (function(args){
  const SakuraHouse = function(msg){
    this.doorBell = msg
  }
  let door;
  let info = {
    sendMsg:function(msg){
      if(!door){
        door = new SakuraHouse(msg)
      }
      return door
    }
  }
  return info
})()
let li = {
  callSakura:function(msg){
    let _loveLetter = sakura.sendMsg(msg)
    /*
    let _loveLetter = info.sendMsg(msg)
    let _loveLetter = door = new SakuraHouse(msg) which door.doorBell = msg
    */
    console.log(_loveLetter.doorBell)
    _loveLetter = null
  }
}
li.callSakura('木叶的苍蓝猛兽')

/*
页面6个按钮
abc top1
def banner
*/
const top1 = {
  init:function(){
    this.render();
    this.bind();
  },
  a:4,
  render:function(){
    let _this = this;
    _this.btna = document.getElementById('a')
  },
  bind:function(){
    let _this = this;
    _this.btna.onclick = function(){
      _this.test();
    }
  },
  test:function(){
    this.a = 5;
    console.log('from top1',this.a)
  }
}
const banner = {
  init:function(){
    this.render();
    this.bind();
  },
  a:4,
  render:function(){
    let _this = this;
    _this.btnd = document.getElementById('d')
  },
  bind:function(){
    let _this = this;
    _this.btnd.onclick = function(){
      _this.test();
    }
  },
  test:function(){
    // a = 6;
    top1.a = 6;
    console.log('from banner',top1.a)
  }
}
top1.init();
banner.init();