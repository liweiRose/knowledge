# 求数组的最大值和最小值

- Math.max(value1[,value2, ...])
  - 返回一组数中的最大值
    - 如果没有参数，则结果为 - Infinity。
    - 如果有任一参数不能被转换为数值，则结果为 NaN。

```js

  var arr = [6, 4, 1, 8, 2, 11, 23];

  ①
    var max = Math.max(...arr); // 23


  ②
    Math.max.apply(null, arr); // 23


  ③
    var result = arr[0];
    for (var i = 1; i < arr.length; i++) {
      result = Math.max(result, arr[i]);
    }
    console.log(result); // 23


  ④
    function max(prev, next) {
      return Math.max(prev, next);
    }
    arr.reduce(max); // 23


  ⑤
    arr.sort(function(a, b) {
      return a - b;
    });
    arr[arr.length - 1]; // 23

```
