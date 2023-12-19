/*
代理模式
代理模式：为其他对象提供一种代理以控制对这个对象的访问。
代理模式使得代理对象控制具体对象的引用。代理几乎可以是任何对象：文件、资源、内存中的对象，或者是一些难以复制的东西。
作用：
  1. 远程代理：一个对象将不同空间的对象进行局部代理
  2. 虚拟代理：根据需要创建开销很大的对象，通过代理模式来存放实例化需要很长时间的真实对象
  3. 安全代理：用来控制真实对象访问时的权限
  4. 智能指引：在访问真实对象时，代理处理另外一些事，如垃圾回收机制
注意：
  1. 滥用代理模式，会让程序变得很复杂
*/

/*
三方：买 中介 卖
*/
function Buyer(args){
  this.name = 'ming';
}
function Intermediary(){
  
}
Intermediary.prototype.buyHouse = function(){
  new Seller(new Buyer).buyHouse('$20m');
}
function Seller(buyer){
  this.buyer_name = buyer.name;
  this.buyHouse = function(money){
    console.log(this.buyer_name + ' buy house ' + money);
  }
}
(new Intermediary).buyHouse();