/*
适配器模式
适配器模式：将一个类（对象）的接口（方法或属性）转化成另外一个接口，以满足用户需求，使类（对象）之间接口的不兼容问题通过适配器得以解决。
作用：
  1. 使用一个已经存在的对象，但其方法或属性的接口不符合你的要求
  2. 创建一个可复用的对象，该对象可以与其他不相关的对象或不可见对象（即接口方法或属性不兼容的对象）协同工作 (基类)
  3. 使用已存在的一个或多个对象，但是不能进行继承已匹配它的接口
注意：
  1. 与代理模式区别，代理模式不改变原接口，适配是原接口不符合规范
*/

// const Aa = {
//   test: function(args){

//   },
//   go: function(){

//   }
// }
// Aa.test();
// 重构
function Pp(){
  this.test = function(){
    console.log('new test')
  }
};
Pp.prototype.gogo = function(args){
 console.log('new gogo')
};
// 适配重构方案
function Adapter(){
  let S = new Pp();
  let Aa = {
    test:function(){
      S.test();
    },
    go:function(){
      S.gogo();
    }
  }
  return Aa;
}
let Aa = Adapter();
Aa.test();
Aa.go();