# Polyfill

Polyfill 是一块代码（通常是 Web 上的 JavaScript），用来为旧浏览器提供它没有原生支持的较新的功能。

## Array.isArray()

假如不存在 Array.isArray()，则在其他代码之前运行下面的代码将创建该方法。

```js
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
```

## Object.is()

假如不存在 Object.is()，则在其他代码之前运行下面的代码将创建该方法。

```js
if (!Object.is) {
  Object.is = function(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  };
}
```

## 参考文章

- [What is a Polyfill?](https://remysharp.com/2010/10/08/what-is-a-polyfill)
