# 函数柯里化

- 柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
- 常用于解决函数参数冗余

- 以下主要参考 - 「mqyqingfeng」柯里化代码演进：

> 这里更多的是应用在函数式编程中，这里只是暂时罗列演进代码「并未」仔细分析。可待以后深入之...

```js
// 第一版
var curry = function(fn) {
  // 截取 1 - n 参数
  var args = [].slice.call(arguments, 1);
  return function() {
    // 截取匿名函数参数
    var newArgs = args.concat([].slice.call(arguments));
    // 执行fn 传入所有参数
    return fn.apply(this, newArgs);
  };
};

// 使用：

function add(a, b) {
  return a + b;
}

var addCurry = curry(add, 1, 2);
addCurry(); // 3
//或者
var addCurry = curry(add, 1);
addCurry(2); // 3
//或者
var addCurry = curry(add);
addCurry(1, 2); // 3
```

```js
// 第二版
function sub_curry(fn) {
  return function() {
    return fn();
  };
}

function curry(fn, length) {
  length = length || 4;
  return function() {
    if (length > 1) {
      return curry(sub_curry(fn), --length);
    } else {
      return fn();
    }
  };
}

// 使用：

var fn0 = function() {
  console.log(1);
};

var fn1 = curry(fn0);

fn1()()()(); // 1

// 分析：

// 当执行 fn1() 时，函数返回：

curry(sub_curry(fn0));
// 相当于
curry(function() {
  return fn0();
});

// 当执行 fn1()() 时，函数返回：

curry(
  sub_curry(function() {
    return fn0();
  })
);
// 相当于
curry(function() {
  return (function() {
    return fn0();
  })();
});
// 相当于
curry(function() {
  return fn0();
});

// 当执行 fn1()()() 时，函数返回：


// 跟 fn1()() 的分析过程一样
curry(function(){
  return fn0()
})

// 当执行 fn1()()()() 时，因为此时 length > 2 为 false，所以执行 fn()：

fn()
// 相当于
(function(){
  return fn0()
})()
// 相当于
fn0()
// 执行 fn0 函数，打印 1

// 再回到真正的 curry 函数，我们以下面的例子为例：

var fn0 = function(a, b, c, d) {
  return [a, b, c, d];
}

var fn1 = curry(fn0);

fn1("a", "b")("c")("d")

// 当执行 fn1("a", "b") 时：

fn1("a", "b")
// 相当于
curry(fn0)("a", "b")
// 相当于
curry(sub_curry(fn0, "a", "b"))
// 相当于
// 注意 ... 只是一个示意，表示该函数执行时传入的参数会作为 fn0 后面的参数传入
curry(function(...){
  return fn0("a", "b", ...)
})

// 当执行 fn1("a", "b")("c") 时，函数返回：

curry(sub_curry(function(...){
  return fn0("a", "b", ...)
}), "c")
// 相当于
curry(function(...){
  return (function(...) {return fn0("a", "b", ...)})("c")
})
// 相当于
curry(function(...){
  return fn0("a", "b", "c", ...)
})

// 当执行 fn1("a", "b")("c")("d") 时，此时 arguments.length < length 为 false ，执行 fn(arguments)，相当于：

(function(...){
  return fn0("a", "b", "c", ...)
})("d")
// 相当于
fn0("a", "b", "c", "d")

```

```js
// 第二版 （简易）
function curry(fn, args) {
  var length = fn.length;

  args = args || [];

  return function() {
    var _args = args.slice(0),
      arg,
      i;

    for (i = 0; i < arguments.length; i++) {
      arg = arguments[i];

      _args.push(arg);
    }
    if (_args.length < length) {
      return curry.call(this, fn, _args);
    } else {
      return fn.apply(this, _args);
    }
  };
}

// 使用：

var fn = curry(function(a, b, c) {
  console.log([a, b, c]);
});

fn('a', 'b', 'c'); // ["a", "b", "c"]
fn('a', 'b')('c'); // ["a", "b", "c"]
fn('a')('b')('c'); // ["a", "b", "c"]
fn('a')('b', 'c'); // ["a", "b", "c"]
```

```js
// 第三版
function curry(fn, args, holes) {
  length = fn.length;

  args = args || [];

  holes = holes || [];

  return function() {
    var _args = args.slice(0),
      _holes = holes.slice(0),
      argsLen = args.length,
      holesLen = holes.length,
      arg,
      i,
      index = 0;

    for (i = 0; i < arguments.length; i++) {
      arg = arguments[i];
      // 处理类似 fn(1, _, _, 4)(_, 3) 这种情况，index 需要指向 holes 正确的下标
      if (arg === _ && holesLen) {
        index++;
        if (index > holesLen) {
          _args.push(arg);
          _holes.push(argsLen - 1 + index - holesLen);
        }
      }
      // 处理类似 fn(1)(_) 这种情况
      else if (arg === _) {
        _args.push(arg);
        _holes.push(argsLen + i);
      }
      // 处理类似 fn(_, 2)(1) 这种情况
      else if (holesLen) {
        // fn(_, 2)(_, 3)
        if (index >= holesLen) {
          _args.push(arg);
        }
        // fn(_, 2)(1) 用参数 1 替换占位符
        else {
          _args.splice(_holes[index], 1, arg);
          _holes.splice(index, 1);
        }
      } else {
        _args.push(arg);
      }
    }
    if (_holes.length || _args.length < length) {
      return curry.call(this, fn, _args, _holes);
    } else {
      return fn.apply(this, _args);
    }
  };
}

var _ = {};

var fn = curry(function(a, b, c, d, e) {
  console.log([a, b, c, d, e]);
});

// 验证 输出全部都是 [1, 2, 3, 4, 5]
fn(1, 2, 3, 4, 5);
fn(_, 2, 3, 4, 5)(1);
fn(1, _, 3, 4, 5)(2);
fn(1, _, 3)(_, 4)(2)(5);
fn(1, _, _, 4)(_, 3)(2)(5);
fn(_, 2)(_, _, 4)(1)(3)(5);
```

- 参考文章：
  - [mqyqingfeng/Blog](https://github.com/mqyqingfeng/Blog/issues/42)
