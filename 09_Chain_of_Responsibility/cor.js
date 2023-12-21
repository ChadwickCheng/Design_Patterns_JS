/*
职责链
职责链：使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系。将这个 对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止。链中收到请求的对象要么亲自处理，要么转发给下一个候选者。提交方并不明确有多少个对象会处理它，任何一个候选者都可以响应相应的请求，可以在运行时刻决定哪些候选者参与到链中。
作用：
  1. dom冒泡类似职责链
  2. nodejs，控制器有很多逻辑时需要拆分中间件放在models中
  3. 解耦发送者和接收者
注意：
  1. js每次.都有代价。如无必要，勿增实体。
*/

function Boss(xiangmujingli){
  if(xiangmujingli){
    this.xiangmujingli = xiangmujingli;
  }
}
Boss.prototype.write = function(php){
  this.xiangmujingli.write(php);
}
function Xiangmujingli(coder){
  if(coder){
    this.coder = coder;
  }
}
Xiangmujingli.prototype.write = function(php){
  this.coder.write(php);
}
function Coder(php){
  // this.write(php);
}
Coder.prototype.write = function(php){
  console.log('写代码'+php);
}
let begin = new Boss(new Xiangmujingli(new Coder('php')));
begin.write('php');