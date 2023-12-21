/*
命令模式
命令模式：对方法调用进行参数化处理和传送，这样处理过的方法调用可以在任何需要的时候执行。即旨在将函数的调用，请求和操作封装成一个单一的对象，之后对这个对象进行一系列的处理。消除调用操作的对象和实现操作的对象之间的耦合，为各种具体的类的更换带来灵活性。
 说人话：将函数的调用，请求和操作封装成一个单一的对象，之后对这个对象进行一系列的处理。
作用：
  1. 将函数的封装，请求和调用结合为一体。
  2. 调用具体的函数解耦命令对象与接受对象。
  3. 提高程序模块化的灵活性。
注意：
  1. 不需要接口一致，直接调用函数即可，避免浪费。
*/

const company = {
  artillery: function(cannon_num){
    console.log(cannon_num+'名炮兵'+'开始战斗');
  },
  infantry: function(infantry_num){
    console.log(infantry_num+'名步兵'+'开始战斗');
  },
  company_leader: function(command){
    company[command.type](command.num);
  }
};
// 资本家的命令 董事执行
company.company_leader({type:'artillery',num:100});
company.company_leader({type:'infantry',num:1000});