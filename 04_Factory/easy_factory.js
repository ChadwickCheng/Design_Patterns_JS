let XMLHttpFactory = function () {

}
XMLHttpFactory.createXMLHttp = function(){
  let XMLHttp = null;
  // 该方法根据环境返回一个XHR对象
  if(window.XMLHttpRequest){
    XMLHttp = new XMLHttpRequest();
  }
  else if(window.ActiveXObject){
    XMLHttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  return XMLHttp;
}
let AjaxHander = function () {
  let XMLHttp = XMLHttpFactory.createXMLHttp();
  // 具体操作
}
// 简单工厂：工厂接受命令，根据情况返回对象，消费者无需知道对象创建的细节