# 闭包

闭包是代码块和创建该代码块的上下文中数据的结合。从理论角度来说，在 ECMAScript 中所有的函数都是闭包(因为作用域链，使得所有的函数都是闭包)。

## 函数式编程基本定义

在函数式语言中函数即是数据。比如，函数可以赋值给变量，可以当参数传递给其他函数，还可以从函数里返回等。

### 高阶函数

接受函数式参数的函数称为高阶函数（high-order function 简称：HOF）。还可以称作：函数式函数或者偏数理或操作符

```js
function exampleFunc(funArg) {
  funArg();
}

exampleFunc(function() {
  alert('funArg');
});
```

### 带函数值的函数

函数不仅可以作为参数，还可以作为返回值。这类以函数为返回值的函数称为带函数值的函数（functions with functional value or function valued functions）。

```js
(function functionValued() {
  return function() {
    alert('returned function is called');
  };
})()();
```

### 自应用函数

接受自己作为参数的函数，称为自应用函数（auto-applicative function 或者 self-applicative function）。

```js
(function selfApplicative(funArg) {
  if (funArg && funArg === selfApplicative) {
    alert('self-applicative');
    return;
  }

  selfApplicative(selfApplicative);
})();
```

### 自复制函数

以自己为返回值的函数称为自复制函数（auto-replicative function 或者 self-replicative function）。

```js
(function selfReplicative() {
  return selfReplicative;
})();
```

## 自由变量

- 自由变量是指:
  - 在函数中使用
  - 既不是函数参数
  - 也不是函数的局部变量的变量。

```js

  * Z的值到底取哪个，从哪个上下文，哪个作用域中查询 ？

    var z = 10;
    function foo() {
      alert(z);
    }

    (function (funArg) {                    (function (funArg) {

      var z = 30;                               var z = 30;
      funArg();                                 return funArg;

    })(foo);                                 })(foo)();

    // alert: 10                             // alert: 10


  * 对于 innerFun 函数来说，z 就属于自由变量

    var z = 10;
    (function outerFun() {

      var z = 30;
      return function innerFun() {
        alert(z)
      }

    })()();

    // alert: 30

  * think: 当 outerFun 函数调用结束后，其局部变量都会从堆栈中移除。
           外部对 innerFun 进行函数调用的时候，outerFun 中的局部变量 z 被移除
           此时 往上层查找 找到全局变量。 输出 10 ？

  * 是如何实现将局部变量在上下文销毁后仍然保存下来 ？

```

## 实现

```js

  * 创建该函数的父级上下文的数据是保存在函数的内部属性 [[Scope]]中, [[Scope]]在函数创建的时候就存在了。

    var x = 10;

    function foo() {
      alert(x);
    }

    // foo是闭包
    foo: <FunctionObject> = {
      [[Call]]: <code block of foo>,
      [[Scope]]: [
        global: {
          x: 10
        }
      ],
      ... // 其它属性
    };

  * 在ECMAScript中，同一个父上下文中创建的闭包是共用一个[[Scope]]属性的。
    也就是说，某个闭包对其中[[Scope]]的变量做修改会影响到其他闭包对其变量的读取。

    var firstClosure;
    var secondClosure;

    function foo() {

      var x = 1;

      firstClosure = function () { return ++x; };
      secondClosure = function () { return --x; };

      x = 2; // 影响 AO["x"], 在2个闭包公有的[[Scope]]中

      alert(firstClosure()); // 3, 通过第一个闭包的[[Scope]]
    }

    foo();

    alert(firstClosure()); // 4
    alert(secondClosure()); // 3


  * 下面这个例子就很容易理解了

    var data = [];                               // 借助闭包                                // 借助callee

    for (var k = 0; k < 3; k++) {               for (var k = 0; k < 3; k++) {              for (var k = 0; k < 3; k++) {
      data[k] = function () {                      data[k] = (function _helper(x) {          (data[k] = function () {
        alert(k);                                    return function () {                       alert(arguments.callee.i)
      };                                               alert(x);                             }).k = k
    }                                                }                                     }
                                                   })(k);
                                                }

    data[0](); // 3, 而不是0                     data[0](); // 1                           data[0](); // 1
    data[1](); // 3, 而不是1                     data[1](); // 2                           data[1](); // 2
    data[2](); // 3, 而不是2                     data[2](); // 3                           data[2](); // 3

    // 同一个上下文中创建的闭包是共用一个[[Scope]]属性的

  * [[Scope]]分析

    data[0].[[Scope]] === [
      ... // 其它变量对象
      父级上下文中的活动对象AO: {data: [...], k: 3},
      _helper上下文中的活动对象AO: {x: 0}
    ];

    data[1].[[Scope]] === [
      ... // 其它变量对象
      父级上下文中的活动对象AO: {data: [...], k: 3},
      _helper上下文中的活动对象AO: {x: 1}
    ];

    data[2].[[Scope]] === [
      ... // 其它变量对象
      父级上下文中的活动对象AO: {data: [...], k: 3},
      _helper上下文中的活动对象AO: {x: 2}
    ];
```

## 参考文章

- [Closure](<https://en.wikipedia.org/wiki/Closure_(computer_programming)>)
- [Javascript Closures](http://jibbering.com/faq/notes/closures/)
- [Closure - TomXu](http://www.cnblogs.com/TomXu/archive/2012/01/31/2330252.html)
