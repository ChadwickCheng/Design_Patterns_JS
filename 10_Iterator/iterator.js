/*
迭代器模式 遍历方法不变，拿到当前对象的索引和值
迭代器模式：提供一种方法顺序访问一个聚合对象中各个元素，而又不暴露该对象的内部表示。
作用：
  1. 为遍历不同的集合结构提供一个统一的接口，从而支持同样的算法在不同的集合结构上进行操作。
  2. 对于集合内部结果常常变化各异，我们不想暴露其内部结构，但又想让客户代码透明访问其中的元素，这时可以考虑使用迭代器模式。
注意：
  1. 至少有两个方法，next()和hasNext()。
  2. 遍历同时更改迭代器所在的集合结构，会导致遍历结果不可预期。（Csharp的foreach不允许修改item）
*/

const arr = ['1','2','3']
const diedai = function(arr){
  let length = arr.length
  let index = 0
  return {
    hasNext:function(){
      return index < length;
    },
    next:function(){
      let data = arr[index];
      index += 1;
      return data;
    },
    reset:function(){
      index = 0;
    }
  }
}(arr);
while(diedai.hasNext()){
  console.log(diedai.next())
}