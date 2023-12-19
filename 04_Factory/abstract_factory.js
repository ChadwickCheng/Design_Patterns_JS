// 抽象工厂 实质就是组合式继承
let XMLHttpFactory = function(){};
XMLHttpFactory.prototype = {
  // 调用这个方法会出错，不可被实例化，只可以用来派生子类
  createFactory: function(){
    throw new Error('This is an abstract class');
  }
}// 开始派生子类
let XHRHandler = function(){
  XMLHttpFactory.call(this);
}
XHRHandler.prototype = new XMLHttpFactory();
XHRHandler.prototype.constructor = XHRHandler;
// 重写抽象方法
XHRHandler.prototype.createFactory = function(){
  let XMLHttp = null;
  if(window.XMLHttpRequest){
    XMLHttp = new XMLHttpRequest();
  }
  else if(window.ActiveXObject){
    XMLHttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  return XMLHttp;
}// 测试