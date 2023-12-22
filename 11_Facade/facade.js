/*
外观模式
外观模式：门面模式，为子系统中的一组接口提供了一个一致的界面，此模块定义了一个高层接口，这个接口使得这一子系统更加容易使用。不仅简化类中的接口，而且对接口与调用者也进行了解耦。外观模式常被认为开发者必备，它可以将一些复杂的操作封装起来，并创建一个简单的接口用于调用。
作用：
  1. 设计初期，有意识将不同的层分离。
  2. 开发阶段，子系统往往因为不断的重构演化变得越来越复杂，增加外观模式提供一个简单的接口，减少他们之间的依赖。
  3. 为维护一个遗留的大型系统时，为系统开发一个外观Facade类，为设计粗糙和高度复杂的遗留代码提供比较清晰的接口，让新系统和Facade对象交互，Facade与遗留代码交互所有复杂的工作。
注意：
  1. 外观模式被开发者连续使用时会产生一定的性能问题，因为在每次调用时都要检测功能的可用性。
*/

const fuhao = {};
fuhao.huofang = function(){
  return '馒头';
}
fuhao.chuliliangshi = function(){
  return '面粉';
}
fuhao.mantou = function(){
  this.chuliliangshi();
  this.huofang();
}
fuhao.men = function(){
  return this.mantou();
}
// 冒泡
let stopEvent = function(e){
  e.stopPropagation();
  e.preventDefault();
}
document.getElementById('btn').onclick = (e) =>{
  console.log('btn')
  stopEvent(e)
}
// 前端开发一个经典实践：利用axios单独封装一个请求模块来处理项目中的请求