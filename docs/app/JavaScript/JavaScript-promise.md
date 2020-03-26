# Promise

Promise 是抽象异步处理对象以及对其进行各种操作的组件。
promise 的功能是可以将复杂的异步处理轻松地进行模式化。
promise 在很多场景和框架中都被应用， 后被纳入规范后更显其重要性，这里有必要总结一下，加深理解。

## promise 前的解决方案 - callback

```js
doA(function() {
  doB();

  doC(function() {
    doD();
  });

  doE();
});

doF();
```

执行顺序： doA => doF => doB => doC => doE => doD

### 控制反转

- 回调函数可能执行多次 （Promise 只能 resolve 一次）
- 回调函数可能没有执行 （Promise race ）
- 回调函数有时同步异步执行不确定 （then 函数指定的方法是异步执行的）

为了避免上述问题的可能，需要写很多安全代码去规避这些问题，由此需要一个更好的替代方案。

### 回调嵌套过深

1. 代码复用性非常低
2. 堆栈信息被断开 （promise - 尚未解决）

> 如上述例子：
> doA 主线程执行， doF 主线程执行, doB 被推入任务队列， doA/doF 执行完，
> 此时 doA/doF 的执行上下文已不在， 接着从任务队列里取 doB 执行，
> 此时如 doB 异常则 try catch 无法直接捕获异常。

## promise api 用法

Promise 在规范上规定 Promise 只能使用异步调用方式；
promise 对象指的是 Promise 实例对象

### Promise

```js
  const promise = new Promise(function(resolve, reject) {

    if (/* 异步操作成功 */){

      // resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved）
      resolve(value);

    } else {

      // reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected）
      reject(error);

    }

  });
```

### Promise.prototype.then()

```js
// then方法，依次指定了两个回调函数。第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数
// 第二个then方法指定的回调函数，就会等待这个新的Promise对象状态发生变化
getJSON('/posts.json')
  .then(function(json) {
    return json.post;
  })
  .then(function(post) {
    // ...
  });
```

### Promise.prototype.catch()

```js
promise.catch(onRejected);
//  等价的
promise.then(undefined, onRejected);
```

### Promise.prototype.finally() - ES2018 引入标准

```js
  // finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作
  promise
    .then(result => {···})
    .catch(error => {···})
    .finally(() => {···});

```

### Promise.prototype.done()

与 then 相似但 done 并不返回 promise 对象; done 则会在函数中跳过错误处理，直接抛出异常。

```js
if (typeof Promise.prototype.done === 'undefined') {
  Promise.prototype.done = function(onFulfilled, onRejected) {
    this.then(onFulfilled, onRejected).catch(function(error) {
      setTimeout(function() {
        throw error;
      }, 0);
    });
  };
}
var promise = Promise.resolve();
promise.done(function() {
  JSON.parse('this is not json'); // => SyntaxError: JSON.parse
});
```

### Promise.all()

```js
Promise.all([loadSomething(), loadAnotherthing()]).then(function([
  something,
  another
]) {
  DoSomethingAnother(...[something, another]);
});

function doSomethingAsyncList(arr) {
  return Promise.all(
    arr.map(function(item) {
      return doSomethingAsync(item);
    })
  );
}
```

### Promise.race()

```js
// 只要p1、p2、p3之中有一个实例率先改变状态, p的状态就跟着改变, 那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。
const p = Promise.race([p1, p2, p3]);
```

### Promise.resolve()

new Promise 的快捷方式, 方便初始化或者编写测试代码，拥有将非 promise 对象转换为一个 promise 对象功能

```js

  Promise.resolve(do); // 可以认为是以下代码的语法糖。

  new Promise(function(resolve){
      resolve(do);
  });
```

### Promise.reject()

new Promise 的快捷方式

```js
Promise.reject(new Error('出错了')); // 可以认为是以下代码的语法糖。

new Promise(function(resolve, reject) {
  reject(new Error('出错了'));
});
```

### Promise chain

#### 写法

```js

  function taskA() {
    console.log("Task A");
  }
  function taskB() {
    console.log("Task B");
  }
  function onRejected(error) {
    console.log("Catch Error: A or B", error);
  }
  function finalTask() {
    console.log("Final Task");
  }

  var promise = Promise.resolve();
  promise
    .then(taskA)
    .then(taskB)
    .catch(onRejected)
    .then(finalTask);

  // 执行结果：
  //         Task A
  //         Task B
  //         Final Task

  // 若 taskA 为
  function taskA() {
    console.log("Task A");
    hrow new Error("throw Error @ Task A");
  }

  // 执行结果：
  //         Task A
  //         Error: throw Error @ Task A
  //         Final Task

```

#### promise chain 中如何传递参数

```js
function doubleUp(value) {
  return value * 2;
}
function increment(value) {
  return value + 1;
}
function output(value) {
  console.log(value); // => (1 + 1) * 2
}

var promise = Promise.resolve(1);
promise
  .then(increment)
  .then(doubleUp)
  .then(output)
  .catch(function(error) {
    console.error(error);
  });

// 执行结果： 4
```

## promise 局限性

### 吞噬错误

```js
// 初始化promise构造函数，内部抛出错误异常，程序中断  --- 正常
const promise = new Promise(null);
console.log('程序被异常中断，打印异常');
```

```js
// promise resolve异常，程序未中断 --- 异常
let promise = new Promise(() => {
  throw new Error('error');
});
console.log('程序正常执行，打印正常');
```

综上所述，promise 链应追加 catch 捕获异常。

```js
// 若 anotherAsync 内部异常，handleError 将无法捕获。
somethingAync.then(
  function() {
    return anotherAsync();
  },
  function(err) {
    handleError(err);
  }
);

// 最佳实践
somethingAync
  .then(function() {
    return anotherAsync();
  })
  .catch(function(err) {
    handleError(err);
  });
```

### 兼容性问题

##### Polyfill

polyfill 是一个支持在不具备某一功能的浏览器上使用该功能的 Library

##### IE8 及以下版本

> 执行 Promise.prototype.caych() 会出现 identifier not found 的语法错误

```js
//  catch 是ECMAScript的 保留字, 在ECMAScript 3中保留字是不能作为对象的属性名使用, IE8及以下版本都是基于ECMAScript 3实现
```

## promise a+规范

Promises/A+。 这是 ES6 Promises 的前身，是一个社区规范，它和 ES6 Promises 有很多共通的内容。

### 状态描述术语

用 new Promise 实例化的 promise 对象有以下三个状态。

```js

 * 左侧 ES6 Promises 规范中定义的术语
 * 右侧 Promises/A+  中描述状态的术语

'has-resolution' - Fulfilled; // resolve(成功)时。此时会调用 onFulfilled

'has-rejection' - Rejected; // reject(失败)时。此时会调用 onRejected

'unresolved' - Pending; // 是 promise 对象刚被创建后的初始化状态等
```

> Tips: 以下为深入部分，上述为基础论述。

## 渐进式讲解 promise 的设计

逐步构建 promise 并审查其所有主要设计决策来解释 promises 如何工作以及此实现为何以其特定方式工作的原因。

```js
  * 考虑一种更通用的方法，其中函数返回一个表示函数最终结果的对象。
  * 无论是成功还是失败，而不是返回值或抛出异常。
  * 这个对象是一个象征性和名义的promise，表示最终解决。
  * 我们可以在promise上调用函数来观察其实现或拒绝。
  * 如果promise被拒绝并且未明确遵守拒绝，则出于同样的原因，任何未达成的promise都将被隐式拒绝。

  * maybeOneOneSecondLater 函数返回一个具有 then 函数的对象，该函数用于注册回调。

  var maybeOneOneSecondLater = function () {
    var callback;
    setTimeout(function () {
      callback(1);
    }, 1000);
    return {
      then: function (_callback) {
        callback = _callback;
      }
    };
  };

  maybeOneOneSecondLater().then(callback);

  * 缺点：
        - 每个注册的回调都需要具备明确的错误解决方案
        - 在构造 promise 之后注册回调超过一秒，则回调不会被调用。

```

```js
  * 更通用的解决方案将接受任意数量的回调并允许它们在超时之前或之后注册
  * 或者通常是 resolution event
  * 通过使 promise 成为一个双态（resolution, rejection）对象来实现这一目标
  * peomise 最初 未解决( unresolved )，所有回调都添加到 待处理( pending ) 观察者数组中
  * promise 得到 解决 ( resolved )时，所有观察者都会收到通知
  * 在解决了promise之后，立即调用新的回调
  * 通过挂起的回调数组是否仍然存在来区分状态变化
  * 并在解决后将它们抛弃

  var maybeOneOneSecondLater = function () {
    var pending = [], value;
    setTimeout(function () {
      value = 1;
      for (var i = 0, ii = pending.length; i < ii; i++) {
        var callback = pending[i];
        callback(value);
      }
      pending = undefined;
    }, 1000);
    return {
      then: function (callback) {
        if (pending) {
          pending.push(callback);
        } else {
          callback(value);
        }
      }
    };
  };

  maybeOneOneSecondLater().then(callback);
```

对 maybeOneOneSecondLater 函数进行改造

```js

  * defer 函数返回一个对象，它包含两个属性：
      - 一个用于注册观察者
      - 一个用于通知观察者解析

  var defer = function () {
    var pending = [], value;
    return {
      resolve: function (_value) {
        value = _value;
        for (var i = 0, ii = pending.length; i < ii; i++) {
          var callback = pending[i];
          callback(value);
        }
        pending = undefined;
      },
      then: function (callback) {
        if (pending) {
          pending.push(callback);
        } else {
          callback(value);
        }
      }
    }
  };

  var oneOneSecondLater = function () {
    var result = defer();
    setTimeout(function () {
      result.resolve(1);
    }, 1000);
    return result;
  };

  oneOneSecondLater().then(callback);

  * resolve函数存在缺陷：

    - 可以多次调用，改变 promise 结果的值
    - 无法模拟一个函数只返回一个值或抛出一个错误的事实

```

我们对 defer 提供的 resolve 函数进行改造

```js
var defer = function() {
  var pending = [],
    value;
  return {
    resolve: function(_value) {
      if (pending) {
        value = _value;
        for (var i = 0, ii = pending.length; i < ii; i++) {
          var callback = pending[i];
          callback(value);
        }
        pending = undefined;
      } else {
        throw new Error('A promise can only be resolved once.');
      }
    },
    then: function(callback) {
      if (pending) {
        pending.push(callback);
      } else {
        callback(value);
      }
    }
  };
};
```

继续改造

```js
var Promise = function() {
  // todo...
};

var isPromise = function(value) {
  return value instanceof Promise;
};

var defer = function() {
  var pending = [],
    value;
  var promise = new Promise();
  promise.then = function(callback) {
    if (pending) {
      pending.push(callback);
    } else {
      callback(value);
    }
  };
  return {
    resolve: function(_value) {
      if (pending) {
        value = _value;
        for (var i = 0, ii = pending.length; i < ii; i++) {
          var callback = pending[i];
          callback(value);
        }
        pending = undefined;
      }
    },
    promise: promise
  };
};
```

```js
var isPromise = function(value) {
  return value && typeof value.then === 'function';
};

var defer = function() {
  var pending = [],
    value;
  return {
    resolve: function(_value) {
      if (pending) {
        value = _value;
        for (var i = 0, ii = pending.length; i < ii; i++) {
          var callback = pending[i];
          callback(value);
        }
        pending = undefined;
      }
    },
    promise: {
      then: function(callback) {
        if (pending) {
          pending.push(callback);
        } else {
          callback(value);
        }
      }
    }
  };
};
```

```js
var isPromise = function(value) {
  return value && typeof value.then === 'function';
};

var defer = function() {
  var pending = [],
    value;
  return {
    resolve: function(_value) {
      if (pending) {
        value = ref(_value); // values wrapped in a promise
        for (var i = 0, ii = pending.length; i < ii; i++) {
          var callback = pending[i];
          value.then(callback); // then called instead
        }
        pending = undefined;
      }
    },
    promise: {
      then: function(_callback) {
        var result = defer();
        // callback is wrapped so that its return
        // value is captured and used to resolve the promise
        // that "then" returns
        var callback = function(value) {
          result.resolve(_callback(value));
        };
        if (pending) {
          pending.push(callback);
        } else {
          value.then(callback);
        }
        return result.promise;
      }
    }
  };
};

var ref = function(value) {
  if (value && typeof value.then === 'function') return value;
  return {
    then: function(callback) {
      return ref(callback(value));
    }
  };
};
```

```js
var isPromise = function(value) {
  return value && typeof value.then === 'function';
};

var defer = function() {
  var pending = [],
    value;
  return {
    resolve: function(_value) {
      if (pending) {
        value = ref(_value);
        for (var i = 0, ii = pending.length; i < ii; i++) {
          // apply the pending arguments to "then"
          value.then.apply(value, pending[i]);
        }
        pending = undefined;
      }
    },
    promise: {
      then: function(_callback, _errback) {
        var result = defer();
        var callback = function(value) {
          result.resolve(_callback(value));
        };
        var errback = function(reason) {
          result.resolve(_errback(reason));
        };
        if (pending) {
          pending.push([callback, errback]);
        } else {
          value.then(callback, errback);
        }
        return result.promise;
      }
    }
  };
};

var ref = function(value) {
  if (value && typeof value.then === 'function') return value;
  return {
    then: function(callback) {
      return ref(callback(value));
    }
  };
};

var reject = function(reason) {
  return {
    then: function(callback, errback) {
      return ref(errback(reason));
    }
  };
};
```

```js
var isPromise = function(value) {
  return value && typeof value.then === 'function';
};

var defer = function() {
  var pending = [],
    value;
  return {
    resolve: function(_value) {
      if (pending) {
        value = ref(_value);
        for (var i = 0, ii = pending.length; i < ii; i++) {
          value.then.apply(value, pending[i]);
        }
        pending = undefined;
      }
    },
    promise: {
      then: function(_callback, _errback) {
        var result = defer();
        // provide default callbacks and errbacks
        _callback =
          _callback ||
          function(value) {
            // by default, forward fulfillment
            return value;
          };
        _errback =
          _errback ||
          function(reason) {
            // by default, forward rejection
            return reject(reason);
          };
        var callback = function(value) {
          result.resolve(_callback(value));
        };
        var errback = function(reason) {
          result.resolve(_errback(reason));
        };
        if (pending) {
          pending.push([callback, errback]);
        } else {
          value.then(callback, errback);
        }
        return result.promise;
      }
    }
  };
};

var ref = function(value) {
  if (value && typeof value.then === 'function') return value;
  return {
    then: function(callback) {
      return ref(callback(value));
    }
  };
};

var reject = function(reason) {
  return {
    then: function(callback, errback) {
      return ref(errback(reason));
    }
  };
};
```

```js
var enqueue = function(callback) {
  //process.nextTick(callback); // NodeJS
  setTimeout(callback, 1); // Naïve browser solution
};

var isPromise = function(value) {
  return value && typeof value.then === 'function';
};

var defer = function() {
  var pending = [],
    value;
  return {
    resolve: function(_value) {
      if (pending) {
        value = ref(_value);
        for (var i = 0, ii = pending.length; i < ii; i++) {
          // XXX
          enqueue(function() {
            value.then.apply(value, pending[i]);
          });
        }
        pending = undefined;
      }
    },
    promise: {
      then: function(_callback, _errback) {
        var result = defer();
        _callback =
          _callback ||
          function(value) {
            return value;
          };
        _errback =
          _errback ||
          function(reason) {
            return reject(reason);
          };
        var callback = function(value) {
          result.resolve(_callback(value));
        };
        var errback = function(reason) {
          result.resolve(_errback(reason));
        };
        if (pending) {
          pending.push([callback, errback]);
        } else {
          // XXX
          enqueue(function() {
            value.then(callback, errback);
          });
        }
        return result.promise;
      }
    }
  };
};

var ref = function(value) {
  if (value && value.then) return value;
  return {
    then: function(callback) {
      var result = defer();
      // XXX
      enqueue(function() {
        result.resolve(callback(value));
      });
      return result.promise;
    }
  };
};

var reject = function(reason) {
  return {
    then: function(callback, errback) {
      var result = defer();
      // XXX
      enqueue(function() {
        result.resolve(errback(reason));
      });
      return result.promise;
    }
  };
};

var when = function(value, _callback, _errback) {
  var result = defer();
  var done;

  _callback =
    _callback ||
    function(value) {
      return value;
    };
  _errback =
    _errback ||
    function(reason) {
      return reject(reason);
    };

  // XXX
  var callback = function(value) {
    try {
      return _callback(value);
    } catch (reason) {
      return reject(reason);
    }
  };
  var errback = function(reason) {
    try {
      return _errback(reason);
    } catch (reason) {
      return reject(reason);
    }
  };

  enqueue(function() {
    ref(value).then(
      function(value) {
        if (done) return;
        done = true;
        result.resolve(ref(value).then(callback, errback));
      },
      function(reason) {
        if (done) return;
        done = true;
        result.resolve(errback(reason));
      }
    );
  });

  return result.promise;
};
```

```js

1. promise 设计思路 - 未精细研读，只是把q的实现方式拿过来了。

2. 整体尚需在读三遍 - 捋出不妥之处

```

## 参考文章

- [ECMAscript 6 入门](http://es6.ruanyifeng.com/#docs/promise)
- [Promises/A+规范](http://www.ituring.com.cn/article/66566)
- [Promises/A+规范 - 英文](https://promisesaplus.com/)
- [JavaScript Promise 迷你书（中文版）](http://liubin.org/promises-book/#introduction)
- [ES6 系列之我们来聊聊 Promise](https://github.com/mqyqingfeng/Blog/issues/98)
- [q](http://documentup.com/kriskowal/q/)
