# 排序

## 快排序

通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。

```js
//方法一
function quickSort(array, left, right) {
  console.time('1.快速排序耗时');
  if (
    Object.prototype.toString.call(array).slice(8, -1) === 'Array' &&
    typeof left === 'number' &&
    typeof right === 'number'
  ) {
    if (left < right) {
      var x = array[right],
        i = left - 1,
        temp;
      for (var j = left; j <= right; j++) {
        if (array[j] <= x) {
          i++;
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
      quickSort(array, left, i - 1);
      quickSort(array, i + 1, right);
    }
    console.timeEnd('1.快速排序耗时');
    return array;
  } else {
    return 'array is not an Array or left or right is not a number!';
  }
}
```

```js
//方法二
var quickSort2 = function(arr) {
  console.time('2.快速排序耗时');
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  console.timeEnd('2.快速排序耗时');
  return quickSort2(left).concat([pivot], quickSort2(right));
};

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(quickSort(arr, 0, arr.length - 1)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(quickSort2(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```

- 参考文章:

  - [visualgo](https://visualgo.net/zh/sorting?slide=1)
  - [十大经典排序算法总结](https://juejin.im/post/57dcd394a22b9d00610c5ec8)
