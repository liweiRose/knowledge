# 函数记忆

- 函数记忆是指将上次的计算结果缓存起来，当下次调用时，如果遇到相同的参数，就直接返回缓存中的数据。

- 使用的场景，也就是如果需要大量重复的计算，或者大量计算又依赖于之前的结果，便可以考虑使用函数记忆

- 原理上只用把参数和对应的结果数据存到一个对象中，调用时，判断参数对应的数据是否存在，存在就返回对应的结果数据。

```js
// 第一版 (来自《JavaScript权威指南》)
function memoize(f) {
  var cache = {};
  return function() {
    var key = arguments.length + Array.prototype.join.call(arguments, ',');
    if (key in cache) {
      return cache[key];
    } else {
      return (cache[key] = f.apply(this, arguments));
    }
  };
}
```

```js
// 第二版 (来自 underscore 的实现)
var memoize = function(func, hasher) {
  var memoize = function(key) {
    var cache = memoize.cache;
    var address = '' + (hasher ? hasher.apply(this, arguments) : key);
    if (!cache[address]) {
      cache[address] = func.apply(this, arguments);
    }
    return cache[address];
  };
  memoize.cache = {};
  return memoize;
};
```

- tips:
  - 函数记忆更加耗时
  - 函数记忆只是一种编程技巧
  - 本质上是牺牲算法的空间复杂度以换取更优的时间复杂度
