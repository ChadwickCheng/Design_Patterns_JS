/*
建造者模式
建造者模式：将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。
  说人话：将一个复杂的对象分解为多个简单的对象，然后一步一步构建而成。
作用：
  1. 分步骤构建一个复杂的对象。
  2. 解耦封装过程和具体创建的组件。
  3. 无需关心组件如何组装。
注意：
  1. 稳定的算法支持
  2. 加工工艺是暴露的
*/

/*
程序员想发请求
ajax是工头
ajax内部有一系列方法
$.ajax({
  url: 'newUrl',
  success: function(data){

  }
})
程序员想创建a标签
ajax是工头
ajax内部有一系列方法创造a标签
$('<a></a>')

1. 产出房子
2. 工头调用工人开工，工头清楚工人的某一大项
3. 工人盖房子 可以建造很多
4. 工头只是接口，不干活，只是能调用工人的方法完成目标
*/
function Fangzi(){
  this.woshi = '';
  this.keting = '';
  this.chufang = '';
}

function Gongtou(){
  this.gaifangzi = function(gongren){
    gongren.jian_woshi();
    gongren.jian_keting();
    gongren.jian_chufang();
  }
}

function Gongren(){
  this.jian_woshi = function(){
    console.log('建造卧室完成');
  }
  this.jian_keting = function(){
    console.log('建造客厅完成');
  }
  this.jian_chufang = function(){
    console.log('建造厨房完成');
  }
  this.jiaogong = function(){
    let _fangzi = new Fangzi();
    _fangzi.woshi = '铂金卧室';
    _fangzi.keting = '钻石客厅';
    _fangzi.chufang = '暗黑厨房';
    return _fangzi;
  }
}

let gongren = new Gongren();
let gongtou = new Gongtou();
gongtou.gaifangzi(gongren);
let chengping = gongren.jiaogong();
console.log(chengping);