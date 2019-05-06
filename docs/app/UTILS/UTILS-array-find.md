# 数组中查找指定元素

- findIndex()

  - 返回数组中满足提供的函数的第一个元素的索引，否则返回 -1。

- findLastIndex()
  - 倒叙查找

```js
function isBigEnough(element) {
  return element >= 15;
}

[12, 5, 8, 130, 44].findIndex(isBigEnough); // 3
```

```js
function findIndex(array, predicate, context) {
  for (var i = 0; i < array.length; i++) {
    if (predicate.call(context, array[i], i, array)) return i;
  }
  return -1;
}

findIndex([1, 2, 3, 4], function(item, i, array) {
  if (item == 3) return true;
}); // 2
```

```js
function findLastIndex(array, predicate, context) {
  var length = array.length;
  for (var i = length - 1; i >= 0; i--) {
    if (predicate.call(context, array[i], i, array)) return i;
  }
  return -1;
}

findLastIndex([1, 2, 3, 4], function(item, index, array) {
  if (item == 1) return true;
}); // 0
```

- createIndexFinder()
  - underscore 实现正序和倒序遍历

```js
function createIndexFinder(dir) {
  return function(array, predicate, context) {
    var length = array.length;
    var index = dir > 0 ? 0 : length - 1;

    for (; index >= 0 && index < length; index += dir) {
      if (predicate.call(context, array[index], index, array)) return index;
    }

    return -1;
  };
}

var findIndex = createIndexFinder(1);
var findLastIndex = createIndexFinder(-1);
```

- 实现 在一个 排好序的数组 中找到 value 对应的位置，保证插入数组后，依然保持有序的状态 ?

```js
function sortedIndex(array, obj) {
  var low = 0,
    high = array.length;

  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (array[mid] < obj) low = mid + 1;
    else high = mid;
  }

  return high;
}

console.log(sortedIndex([10, 20, 30, 40, 50], 35)); // 3
```

- indexOf(searchElement[, fromIndex = 0])

  - 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

    - 开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回-1。
    - 如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即-1
    - 表示从最后一个元素开始查找，-2 表示从倒数第二个元素开始查找 ，以此类推。
    - 注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组。
    - 如果抵消后的索引值仍小于 0，则整个数组都将会被查询。其默认值为 0.

- lastIndexOf(searchValue[, fromIndex])

  - 返回指定值在调用该方法的字符串中最后出现的位置，如果没找到则返回 -1。

    - 从调用该方法字符串的此位置处开始查找。可以是任意整数。
    - 默认值为 str.length。如果为负值，则被看作 0。
    - 如果 fromIndex > str.length，则 fromIndex 被看作 str.length。

```js
function createIndexOfFinder(dir, predicate, sortedIndex) {
  return function(array, item, idx) {
    var length = array.length;
    var i = 0;

    if (typeof idx == 'number') {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(length + idx, 0);
      } else {
        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
      }
    } else if (sortedIndex && idx && length) {
      idx = sortedIndex(array, item);
      // 如果该插入的位置的值正好等于元素的值，说明是第一个符合要求的值
      return array[idx] === item ? idx : -1;
    }

    // 判断是否是 NaN
    if (item !== item) {
      idx = predicate(array.slice(i, length), isNaN);
      return idx >= 0 ? idx + i : -1;
    }

    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if (array[idx] === item) return idx;
    }
    return -1;
  };
}

var indexOf = createIndexOfFinder(1, findIndex, sortedIndex);
var lastIndexOf = createIndexOfFinder(-1, findLastIndex);
```

### 参考文章

- [MDN - indexOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
- [MDN - findIndex](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [mqyqingfeng/Blog](https://github.com/mqyqingfeng/Blog/issues/37)
