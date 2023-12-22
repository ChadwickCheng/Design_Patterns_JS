/*
中介者模式
中介者模式：用一个中介对象来封装一系列的对象交互。中介者使各对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。
作用：
  1. 软件开发中，中介者是一个行为设计模式，通过提供一个同游的接口让系统的不同部分进行通信。一般，如果系统有很多子模块需要直接沟通，都要创建一个中央控制点让其各模块通过该中央控制点进行交互。中介者模式可以让这些子模块不需要直接沟通，从而达到解耦目的。
注意：
  1. 系统出现多对多交互复杂的对象群时，先考虑是否有系统设计问题，如果没有，再考虑使用中介者模式。
*/

const feiji = function(name){
  this.name = name;
}
feiji.prototype.send = function(msg,to){
  tatai.send(msg,to);
}
feiji.prototype.jieshou = function(msg){
  console.log(this.name+'收到消息'+msg);
}
const tatai = {
  all:{},
  zhuce:function(feiji){
    this.all[feiji.name] = feiji;
  },
  send:function(msg,to){
    this.all[to.name].jieshou(msg);
  }
}
let feiji1 = new feiji('feiji1');
let feiji2 = new feiji('feiji2');
tatai.zhuce(feiji1);
tatai.zhuce(feiji2);
feiji1.send('hello',feiji2);
feiji2.send('hi',feiji1);