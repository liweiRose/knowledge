# 乱序

```js
// Math.random() - 0.5 随机得到一个正数、负数或是 0，
// 如果是正数则降序排列，
// 如果是负数则升序排列，
// 如果是 0 就不变，
// 然后不断的升序或者降序，最终得到一个乱序的数组
var values = [1, 2, 3, 4, 5];

values.sort(function() {
  return Math.random() - 0.5;
});

console.log(values);
```

- 具体深入 - 参见 [「mqyqingfeng/Blogs」](https://github.com/mqyqingfeng/Blog/issues/51)

- 参考文章:

  - [visualgo](https://visualgo.net/zh/sorting?slide=1)
