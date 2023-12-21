/*
观察者模式
观察者模式：又称为发布订阅模式(Publish-Subscribe),定义了一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生时就会通知所有的观察者对象，使得他们能够自动更新自己。
作用：
  1. 支持简单的广播通信，自动通知所有已经订阅过的对象。
  2. 页面载入后目标对象很容易与观察者存在一种动态关联，增加了灵活性。
  3. 目标对象与观察者之间的抽象耦合关系能够单独扩展以及重用。
注意：
  1. 监听在触发之前
  2. 写代码的功底是需要的
*/

import * as $ from '../node_modules/jquery/dist/jquery.min.js';

~(function(){
  let o = $({});
  $.subscribe = function(){
    o.on.apply(o, arguments);
  }
  $.publish = function(){
    o.trigger.apply(o, arguments);
  }
  $.clear = function(){
    o.off.apply(o, arguments);
  }
})();
$.subscribe('/test/ls',function(e,a,b,c){
  alert(a+'||'+b+'||'+c);
})
$.subscribe('/test/ls',function(e,a,b,c){
  alert('ok');
})
$.publish('/test/ls',[1,2,3]);

// 事件队列：trigger时，事件队列中的事件会依次执行