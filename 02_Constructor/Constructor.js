/*
构造函数模式
构造函数：用于创建特定类型的对象
作用：
  1. 创建特定类型对象
  2. 首次声明时给对象赋值
  3. 自己声明构造函数，赋予属性与方法
注意：
  1. 声明函数时处理业务逻辑
  2. 配合单例实现初始化
  3. 首字母大写
  4. new的成本(继承，公用的方法放于原型上)
*/

/*
1. 创建特定类型对象
2. 单引号比较好
3. 构造函数必须new
*/
let AA = {
  a:function Ninja(skill){
    if(!(this instanceof Ninja)){
      return new Ninja('替身术');
    };
    let _skill = '色诱之术';
    if(skill){
      _skill = skill;
    }
    this.villege = '木叶';
    this.skill = _skill;
    this.create  = function(){
      return '是出身'+this.villege+'的忍者，擅长'+this.skill;
    }
  }
}
let BB = {
  a:function Ninja(skill){
    if(!(this instanceof Ninja)){
      return new Ninja('替身术');
    };
    let _skill = '写轮眼';
    if(skill){
      _skill = skill;
    }
    this.villege = '木叶';
    this.skill = _skill;
    this.create  = function(){
      return '是出身'+this.villege+'的忍者，擅长'+this.skill;
    }
  }
}

const naruto = new AA.a();
console.log('naruto '+naruto.create());
const sasuke = new BB.a('雷切');
console.log('sasuke '+sasuke.create());