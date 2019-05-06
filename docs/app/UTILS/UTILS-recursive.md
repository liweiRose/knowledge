# 递归

程序调用自身的编程技巧称为递归(recursion)。

- 构成递归需具备边界条件、递归前进段和递归返回段
- 当边界条件不满足时，递归前进
- 当边界条件满足时，递归返回。
- 如：阶乘中的 n == 1 和 斐波那契数列中的 n < 2 都是边界条件。

```js

 ① 阶乘

    function factorial(n) {
      if (n == 1) return n;
      return n * factorial(n - 1);
    }

    factorial(5); // 5 * 4 * 3 * 2 * 1 = 120

```

```js

  ② 斐波那契数列

    function fibonacci(n) {
      return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
    }

    fibonacci(5); // 1 1 2 3 5

```

> 上例 JavaScript 会不停的创建执行上下文压入执行上下文栈，对于内存而言，维护这么多的执行上下文开销很大。

> 采用尾调用方式可以减小这方面的开销

> 所谓尾调用，是指函数内部的最后一个动作是函数调用。

```js
function f(x) {
  return g(x);
}
```

```js
function factorial(n, res) {
  if (n == 1) return res;
  return factorial(n - 1, n * res);
}

factorial(4, 1); // 24
```

> 递归在编程中很重要，必须掌握！
