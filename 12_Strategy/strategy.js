/*
策略模式
策略模式：定义算法家族分别封装，让他们之间可以相互替换，此模式让算法的变化不会影响到使用算法的用户。
作用：
  1. 所有的算法都在做相同的事情，但是实现不同
  2. 以相同方式调用所有的方法，减少了各种算法类与使用算法类之间的耦合
  3. 单独定义算法类，方便单元测试
注意：
  1. 不仅封装算法，也可以封装几乎任何类型的规则。在分析过程中需要在不同时间应用不同的业务规则，可以考虑使用策略模式处理这种变化的可能性。
*/

class RouteStrategy {
  calculate(route) {
    throw new Error('Calculate method should be implemented');
  }
}

class FastestRouteStrategy extends RouteStrategy {
  calculate(route) {
    // 实现最快路线的算法
  }
}

class ShortestRouteStrategy extends RouteStrategy {
  calculate(route) {
    // 实现最短路线的算法
  }
}

class AvoidHighwaysRouteStrategy extends RouteStrategy {
  calculate(route) {
    // 实现避开高速的路线算法
  }
}

class Navigator {
  constructor(strategy = new FastestRouteStrategy()) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  navigate(route) {
    return this.strategy.calculate(route);
  }
}

// 使用
const navigator = new Navigator();
navigator.navigate('New York, NY to San Francisco, CA');

navigator.setStrategy(new ShortestRouteStrategy());
navigator.navigate('New York, NY to San Francisco, CA');