/*
工厂模式
返回对象的函数就是工厂函数
工厂模式：定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类，该模式使得一个类的实例化延迟到其子类。子类可以重写父类接口方法以便创建的时候指定自己的对象类型(抽象工厂)。
作用：
  1. 创建对象的流程赋值
  2. 对象构建十分复杂时
  3. 依赖具体环境创建不同实例 
  4. 处理大量具有相同属性的小对象
注意：
  1. 滥用工厂方法会增加代码的复杂性
*/

/*
工厂厂长决定运行哪个产品线
消费者为子类
*/

const factory = {};
factory.clothes = function(args){
  this.worker_num = 50;
  console.log('We have ' + this.worker_num + ' workers to make clothes.');
}
factory.shoes = function(){
  console.log('shows maker');
}
factory.transportation = function(){
  console.log('pro transportation')
}
factory.leader = function(param){
  return new factory[param]();
}
var consumer = factory.leader('clothes');
console.log(consumer.worker_num);