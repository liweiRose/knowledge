# 偏函数

- 在计算机科学中，局部应用是指固定一个函数的一些参数，然后产生另一个更小元的函数。

  - 元是指函数参数的个数，比如一个带有两个参数的函数被称为二元函数。

- 柯里化是将一个多参数函数转换成多个单参数函数，也就是将一个 n 元函数转换成 n 个一元函数。

- 局部应用则是固定一个函数的一个或者多个参数，也就是将一个 n 元函数转换成一个 n - x 元函数。

- 以下主要参考 - 「mqyqingfeng」柯里化代码演进：

> 这里更多的是应用在函数式编程中，这里只是暂时罗列演进代码「并未」仔细分析。可待以后深入之...

```js
// 第一版
// 似曾相识的代码
function partial(fn) {
  var args = [].slice.call(arguments, 1);
  return function() {
    var newArgs = args.concat([].slice.call(arguments));
    return fn.apply(this, newArgs);
  };
}

// 使用：

function add(a, b) {
  return a + b + this.value;
}

// var addOne = add.bind(null, 1);
var addOne = partial(add, 1);

var value = 1;
var obj = {
  value: 2,
  addOne: addOne
};
obj.addOne(2); // ???
// 使用 bind 时，结果为 4
// 使用 partial 时，结果为 5
```

```js
// 第二版（可以使用占位符）
var _ = {};

function partial(fn) {
  var args = [].slice.call(arguments, 1);
  return function() {
    var position = 0,
      len = args.length;
    for (var i = 0; i < len; i++) {
      args[i] = args[i] === _ ? arguments[position++] : args[i];
    }
    while (position < arguments.length) args.push(arguments[position++]);
    return fn.apply(this, args);
  };
}

// 使用：

var subtract = function(a, b) {
  return b - a;
};
subFrom20 = partial(subtract, _, 20);
subFrom20(5);
```

- 参考文章
  - [functional-programming-jargon](https://github.com/hemanth/functional-programming-jargon#partial-application)
  - [mqyqingfeng/Blog](https://github.com/mqyqingfeng/Blog/issues/43)
