# 惰性函数

我们现在需要写一个 foo 函数，这个函数返回首次调用时的 Date 对象，注意是首次。

```js

  - 污染了全局变量
  - 每次调用都需要进行一次判断

    var t;
    function foo() {
      if (t) return t;
      t = new Date();
      return t;
    }

  - 避免了污染全局变量
  - 每次调用仍然需要进行一次判断

    var foo = (function() {
      var t;
      return function() {
        if (t) return t;
        t = new Date();
        return t;
      };
    })();

    function foo() {
      if (foo.t) return foo.t;
      foo.t = new Date();
      return foo.t;
    }

  * 惰性函数 - 重写 foo 函数解决上述两个问题

    var foo = function() {
      var t = new Date();
      foo = function() {
        return t;
      };
      return foo();
    };

```

- 应用场景
  - 函数内部某个条件只需要判断一次，接下来的使用方式都不会发生改变的时候。

### 参考文章

- [Lazy Function Definition Pattern](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
