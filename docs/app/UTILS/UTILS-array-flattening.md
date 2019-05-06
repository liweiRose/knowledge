# 数组扁平化

数组的扁平化，就是将一个嵌套多层的数组 array (嵌套可以是任何层数)转换为只有一层的数组

```js
var arr = [1, [2, [3, [4, [5, 6]]]]];
console.log(flatten(arr)); // [1, 2, 3, 4, 5, 6]
```

> Array.reduce() 实现

```js
var arr = [1, [2, [3, 4]]];

function flatten(arr) {
  return arr.reduce(function(prev, next) {
    return prev.concat(Array.isArray(next) ? flatten(next) : next);
  }, []);
}

console.log(flatten(arr)); // [1, 2, 3, 4]
```

> underscore 实现

```js
/**
 * 数组扁平化
 * @param  {Array} input   要处理的数组
 * @param  {boolean} shallow 是否只扁平一层
 * @param  {boolean} strict  是否严格处理元素
 * @param  {Array} output  这是为了方便递归而传递的参数
 */
function flatten(input, shallow, strict, output) {
  // 递归使用的时候会用到output
  output = output || [];
  var idx = output.length;

  for (var i = 0, len = input.length; i < len; i++) {
    var value = input[i];
    // 如果是数组，就进行处理
    if (Array.isArray(value)) {
      // 如果是只扁平一层，遍历该数组，依此填入 output
      if (shallow) {
        var j = 0,
          length = value.length;
        while (j < length) output[idx++] = value[j++];
      }
      // 如果是全部扁平就递归，传入已经处理的 output，递归中接着处理 output
      else {
        flatten(value, shallow, strict, output);
        idx = output.length;
      }
    }
    // 不是数组，根据 strict 的值判断是跳过不处理还是放入 output
    else if (!strict) {
      output[idx++] = value;
    }
  }

  return output;
}
```

> ES10 标准 实现

```js
[1, 2, [3, 4, [5, 6]]].flat(); // [ 1, 2, 3, 4, [ 5, 6 ] ]

[1, 2, [3, 4, [5, 6]]].flat(2); // [ 1, 2, 3, 4, 5, 6 ]
```

### 参考文章

- [WHAT'S NEW IN ECMASCRIPT 2019](https://pawelgrzybek.com/whats-new-in-ecmascript-2019/#array-prototype-flat-array-prototype-flatmap-by-brian-terlson-michael-ficarra-and-mathias-bynens)

- [underscore - flatten](https://github.com/jashkenas/underscore/blob/master/underscore.js)

- [mqyqingfeng/Blog](https://github.com/mqyqingfeng/Blog/issues/36)
