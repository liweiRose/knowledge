# 算法 相关
### 阶乘
```js
const factorial1 = n => {
  if (n <= 1) return 1
  return n * factorial1(n - 1)
}

// 尾递归优化
const factorial2 = (n, total = 1) => {
  if (n <= 1) return total
  return factorial2(n - 1, total * n)
}

console.log(factorial1(3)) // 6
console.log(factorial2(3)) // 6
console.log(factorial1(5)) // 120
console.log(factorial2(5)) // 120
```
### 斐波那契数列
斐波那契数列从第三项开始，每一项都等于前两项之和。指的是这样一个数列：0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 …
- 1.递归
```js
function fib(n) {
  if (n === 1 || n === 2) return n - 1;
  return fib(n - 1) + fib(n - 2)
}
console.log(fib(10)); // 34
//时间复杂度为O(2^n)
```
- 2.非递归
```js
function fib(n) {
  let a = 0;
  let b = 1;
  let c = a + b;
  for (let i = 3; i < n; i++) {
    a = b;
    b = c;
    c = a + b;
  }
  return c;
}
console.log(fib(10)); // 34
// 时间复杂度为O(n)
```
### 十进制转化为其他进制 (利用栈)
```js
function divideBy2(decNumber, base = 2) {
  let remStack = new Stack()
  let rem
  let binaryString = ''
  let digits = '0123456789ABCDEF'
  while (decNumber > 0) {
    rem = Math.floor(decNumber % base)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / base)
  }
  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()].toString()
  }
  return binaryString
}

// 将十进制转换成其他进制
let num = 100345
num.toString(2) // "11000011111111001"
num.toString(8) // "303771"

console.log(divideBy2(num, 2)) // "11000011111111001"
console.log(divideBy2(num, 8)) // "303771"
```
### 一道关于Array push的JS题
```js
// 类数组
let obj = {
  '1': 'a',
  '2': 'b',
  length: 2,
  push: Array.prototype.push
};

// Array.prototype.push.call(obj, 'c');
obj.push('c')

console.log(obj); // { '1': 'a', '2': 'c', length: 3 }
```
push和pop实现
> Array的push底层实现是依赖于 数组的length属性的
```js
Array.prototype.push2 = function(...rest){
  this.splice(this.length, 0, ...rest)
  return this.length;
}
```
对于 pop也是一样
```js
Array.prototype.pop2 = function(){
  return this.splice(this.length - 1, 1)[0];
}
```
### 在一个数组中 找出里面其中两项相加后的和为num，如果存在就返回两个数的索引位置，否则false
```js
function fn(num = 0, ary = []) {
  for (let i = 0; i < ary.length; i++) {
    let diff = num - ary[i];
    let diffIndex = ary.indexOf(diff);
    if (diffIndex !== -1) {
      return [i, diffIndex];
    }
  }
  return false;
}

let num = 3;
let arr = [-1, 4, 6, 2];

console.log(fn(num, arr)); // [0, 1]
```
### 将两个有序数组合并为一个排好序的大数组
```js
function mergeAry(left = [], right = []) {
  const result = [];
  while (left.length && right.length) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift());
  }
  return result.concat(left, right);
}

console.log(mergeAry([1, 2, 3], [1, 4, 8, 9])); // [ 1, 1, 2, 3, 4, 8, 9 ]
```
### 二分查找
```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// 二分查找 递归 由中间开始往两边查找 前提是有序的数组 返回对应的索引位置
function binarySearch1(arr, dest, start = 0, end = data.length) {
	if (start > end) {
		return -1
	}
	let midIndex = Math.floor((start + end) / 2); // 中间位置索引
	let mid = arr[midIndex]; // 中间值

	if (mid == dest) {
		return midIndex;
	}
	if (dest < mid) { // 要找的比中间值小 就从中间往开头找 一直到0
		return binarySearch1(arr, dest, 0, midIndex - 1);
	}
	if (dest > mid) { // 要找的比中间值大 就从中间往后找 一直到end结束
		return binarySearch1(arr, dest, midIndex + 1, end);
	}
	return -1; // 找不到返回-1
}
console.log(binarySearch1(arr, 7, 3, 6)); // 6

// 非递归 arr前提有序数组 （从小到大）返回对应的索引位置 
function binarySearch2(arr, dest) {
	let max = arr.length - 1;
	let min = 0;
	while (min <= max) {
		let mid = Math.floor((max + min) / 2); // mid中间位置索引
		if (dest < arr[mid]) { // 如果要找的这项比中间项还要小 说明应该在mid中间位置前面 修改最大边界值max=mid-1 
			max = mid - 1;
		} else if (dest > arr[mid]) { // 如果要找的这项比中间项还要大 说明应该在mid中间位置的后面 修改最小边界值min=mid+1
			min = mid + 1;
		} else {
			return mid;
		}
	}
	return -1; // 找不到返回-1
}
console.log(binarySearch2(arr, 3)); // 2
```
### 二分查找题
 > 在一个二维数组中，每一行都按照从左到右递增，每一列都从上到下递增的顺序排序，完成一个函数，输入这个二维数组和一个整数，判断数组中是否含有该整数

 思路是一样的，只不过从一维变成了二维，我们遍历思路可以这样子：

- 选取第一行的最后一个进行判断(这个是第一行中最大的)
- 如果目标大于该值，行数加1，遍历第二行(因为每列都是递增的)
- 如果目标小于该值，则在这一行中进行查找
循环以上步骤
```js
function findTarget(arr,target) {
    let i = 0; // i代表行
    let j = arr[i].length -1; // j每行中每项索引位置 从最后项开始比较
    while(i < arr.length && j>=0) { 
        if(target < arr[i][j]) {
            j--;
        } else if (target > arr[i][j]) {
            i++;
        } else {
            return `找到了，位置在${i},${j}`
        }
    }
    return `(${i},${j})`
}

let arr = [
  [1,2,3,4],
  [5,9,10,11],
  [13,20,21,23]
]  //测试
```
### 找出数组中重复出现过的元素
```js
// 例如：[1，2，4，4，3，3，1，5，3]
// 输出：[1，3，4]
let arr = [1, 2, 4, 4, 3, 3, 1, 5, 3];

// 方法一
function repeat1(arr){
	var result = [], map = {};
	arr.map(function(num){
	if(map[num] === 1) result.push(num); // 等于1说明之前出现过一次 这次重复出现了
		map[num] = (map[num] || 0) + 1; // 微妙之处 开始第一次出现无值 记为 0 + 1 = 1 下一次从1开始累加
	});
	return result;
}
console.log(repeat1(arr));

// 方法二

function repeat(arr) {
    let result = arr.filter((x, i, self) => {
        return self.indexOf(x) === i && self.lastIndexOf(x) !== i
    }); // 
    return result;
}
console.log(repeat(arr));
```
### 根据数组中数字重复出现的次数排序
```js
// 如果次数相同 则按照值排序 比如  2, 2, 2和 1, 1, 1  应排序为 [1, 1, 1, 2, 2, 2]
// 比如 [1, 2, 1, 2, 1, 3, 4, 5, 4, 5, 5, 2, 2] => [3, 4, 4, 1, 1, 1, 5, 5, 5, 2, 2, 2, 2]

const repeatTimeSort = arr => {
  arr.sort((a, b) => a - b)
  let ary = []
  while (arr.length > 0) {
    let a = arr[0]
    let start = arr.indexOf(a)
    let end = arr.lastIndexOf(a) + 1
    ary.push(arr.splice(start, end - start))
  }
  ary.sort((a, b) => a.length - b.length)
  return ary.reduce((prev, cur) => prev.concat(cur), [])
}

// [ 12, 13, 13, 11, 11, 11 ]
console.log(repeatTimeSort([11, 12, 13, 11, 11, 13]))
// [ 3, 4, 4, 1, 1, 1, 5, 5, 5, 2, 2, 2, 2 ]
console.log(repeatTimeSort([1, 2, 1, 2, 1, 3, 4, 5, 4, 5, 5, 2, 2]))
```
### 不用循环，创建一个长度为 100 的数组，并且每个元素的值等于它的下标。
```js
// 方法一 递归写法
function createArray(len, arr = []) {

    if (len > 0) {
        arr[--len] = len;
        createArray(len, arr);
    }
    return arr;
}
console.log(createArray(100)); 

// 方法二

// 下面评论中@MaDivH 提供的实现方法 长度为 100 的数组 
Array(100).fill().map((_,i)=>i+1);

// 方法三
[...Array(100).keys()]
```
### 根据关键词找出 所在对象id
```js
var docs = [
    {
        id: 1,
        words: ['hello', "world"]
    }, {
        id: 2,
        words: ['hello', "hihi"]
    }, {
        id: 3,
        words: ['haha', "hello"]
    }, {
        id: 4,
        words: ['world', "nihao"]
    }
];
findDocList(docs, ['hello']) // 文档id1，文档id2，文档id3
findDocList(docs, ['hello', 'world']) // 文档id1
function findDocList(docs, word = []) {
    if (word.constructor !== Array) return;
    let ids = [];
    for (let i = 0; i < docs.length; i++) {
        let {id, words} = docs[i];
        let flag = word.every((item) => {
            return words.indexOf(item) > -1;
        });
        flag && ids.push(id);
    }
    return ids;
}
findDocList(docs, ['hello', 'world']);
```
### 插入排序
> 插入排序 从后往前比较 直到碰到比当前项 还要小的前一项时 将这一项插入到前一项的后面
```js
function insertSort(arr) {
  let len = arr.length;
  let preIndex, current;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i]; // 当前项
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]; // 如果前一项大于当前项 则把前一项往后挪一位
      preIndex-- // 用当前项继续和前面值进行比较
    }
    arr[preIndex + 1] = current; // 如果前一项小于当前项则 循环结束 则将当前项放到 前一项的后面
  }
  return arr;
}
```
```js
function insert(arr, i, x) {
  let prev = i - 1;
  while(prev >= 0 && arr[prev] > x) {
    arr[prev + 1] = arr[prev];
    prev--;
  }
  arr[prev + 1] = x;
}

function insert_sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    insert(arr, i, arr[i]);
  }
  return arr;
}

console.log(insert_sort([1, 10, 3, 0]));
```
### 选择排序
> 选择排序 每次拿当前项与后面其他项进行比较 得到最小值的索引位置 然后把最小值和当前项交换位置
```js
function selectSort(arr) {
  let len = arr.length;
  let temp = null;
  let minIndex = null;
  for (let i = 0; i < len - 1; i++) { // 把当前值的索引作为最小值的索引一次去比较
    minIndex = i; // 假设当前项索引 为最小值索引
    for (let j = i + 1; j < len; j++) { // 当前项后面向一次比小
      if (arr[j] < arr[minIndex]) { // 比假设的值还要小 则保留最小值索引
        minIndex = j; // 找到最小值的索引位置
      }
    }
    // 将当前值和比较出的最小值交换位置
    if (i !== minIndex) {
       temp = arr[i]
       arr[i] = arr[minIndex];
       arr[minIndex] = temp;
    }
  }
  return arr;
}
```
### 冒泡排序
> 冒泡排序 相邻两项进行比较 如果当前值大于后一项 则交换位置
- 冒泡1
```js

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function bubleSort(arr) {
  let length = arr.length;
  let temp = null;
  for (let i = 0; i < length - 1; i++) { // 控制轮数
    let flag = false; // 当前这轮是否交换过标识
    for (let l = 0; l < length - i - 1; l++) { // 控制每轮比较次数
      if (arr[l] > arr[l + 1]) {
        // temp = arr[l];
        // arr[l] = arr[l + 1];
        // arr[l + 1] = temp;
        swap(arr, l, l + 1);
        flag = true; // 如果发生过交换flag则为true
      } 
    }
    if (!flag) { // 优化  如果从头到尾比较一轮后 flag依然为false说明 已经排好序了 没必要在继续下去
      temp = null;
      return arr;
    }
  }
  return arr;
}
```
- 冒泡2
```js
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function bubble_sort(arr) {
  for (let i = arr.length - 1; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      arr[j - 1] > arr[j] && swap(arr, j - 1, j)
    }
  }
  return arr;
}

console.log(bubble_sort([1, 10, 3, 0]));
```
### 快速排序（阮一峰版）
```js
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let midIndex = Math.floor(arr.length / 2);
    let midNum = arr.splice(midIndex, 1)[0];
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length; i++) {
        let cur = arr[i];
        if (cur <= midNum) {
            left.push(cur);
        } else {
            right.push(cur);
        }
    }
    return quickSort(left).concat(midNum, quickSort(right));
}

let arr = [2, 4, 12, 9, 22, 10, 18, 6];
quickSort(arr);
```
### 快速排序 第二版
```js
let array = [9, 6, 20, 3, 2];
// let array = [15, 13, 20, 21, 29];

function quickSort(arr, left = 0, right = arr.length - 1) {
  let len = arr.length;
  let partitionIndex;
  // left = typeof left != 'number' ? 0 : left;
  // right = typeof right != 'number' ? len - 1 : right;
  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = left;
  let index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}

function swap(arr, i, index) {
  [arr[i], arr[index]] = [arr[index], arr[i]];
}
console.log(quickSort(array));
```
### 归并排序
```js
let array = [5, 13, 20, 3, 2];
// let array = [15, 13, 20, 21, 29];

function mergeSort(array) {
  let arr = array.slice(0);
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  let midIndex = Math.floor(len / 2);
  let left = arr.slice(0, midIndex);
  let right = arr.slice(midIndex);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  while(left.length && right.length) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }

  if (left.length && !right.length) {
    result = result.concat(left);
  }

  if (right.length && !left.length) {
    result = result.concat(right);
  }
  return result;
}

console.log(mergeSort(array));
```
### 数组去重几种方法
```js
const arr = [1, 2, 1, 2, 3, 4, 2, 1, 3];

// 1 ES6
let newArr = [...new Set(arr)];

// 2
const arr = [1, 2, 1, 2, 3, 4, 'l', 2, 1, 3, 'l'];
const newArr = arr.filter(function(ele, index, array) {
	return index === array.indexOf(ele)
});
console.log(newArr); // [ 1, 2, 3, 4, 'l' ]

// 3
Array.prototype.unique2 = function() {
    let newArr = [];
    let len = this.length;
    for(let i = 0; i < len; i++) {
        let cur = this[i];
        if(newArr.indexOf(cur) === -1) {
            newArr[newArr.length] = cur;
        }
    }
    return newArr;
}
console.log(arr.unique1());

// 4
Array.prototype.unique3 = function() {
    let newArr = this.slice(0);
    let len = this.length;
    let obj = {};
    for(let i = 0; i < len; i++) {
        let cur = newArr[i];
        if(obj[cur]) {
            newArr[i] = newArr[newArr.length - 1];
            newArr.length--;
            i--;
            continue;
        }
        obj[cur] = cur;
    }
    return newArr;
}
console.log(arr.unique3());

// 5
Array.prototype.unique4 = function() {
    let json = {}, newArr = [], len = this.length;
    for(var i = 0; i < len; i++) {
        let cur = this[i];
        if (typeof json[cur] == "undefined") {
            json[cur] = true;
            newArr.push(cur)
        }
    }
    return newArr;
}
console.log(arr.unique4());
```
### 千分符
- 方法一
```js
// 处理数字
let str1 = 2123456789;
let str2 = 2123456789.12;
console.log(str1.toLocaleString()); // 2,123,456,789
console.log(str2.toLocaleString()); // 2,123,456,789.12
```
- 方法二
```js
    // 处理字符串
    let str1 = '2123456789';
    let str2 = '2123456789.12';

    // 利用正向预查 匹配 开头一个数字\d 后面匹配这个数字后面必须是三个数字为一组为结尾或小数为结尾
    function thousandth(str) { 
        let reg = /\d(?=(?:\d{3})+(?:\.\d+|$))/g; 
        return str.replace(reg, '$&,');
    }
    console.log(thousandth(str1)); // 2,123,456,789
    console.log(thousandth(str2)); // 2,123,456,789.12
```
### 求a的值 什么情况下 满足if (a == 1 & a == 2 & a == 3)这个条件
```js
var a = {
  a: 1,
  valueOf() {
    return this.a++
  }
}

if (a == 1 & a == 2 & a == 3) {
  console.log(1)
}
```
### 在一个数组中 如a、b两项, 要保证a和b两项的差 与 a和b两项索引的差 的相加后的结果max 是数组中其他两项max 中的最大值 找出符合条件两项a, b的值 (不可以排序 或改变数组位置) 如：
let max = (a - b) + (a的索引- b的索引); 求a b
答案：
```js
// 思路：其实也就是找出数组中当前的每一项与自身索引相加后的和的最大值以及与索引相加后的最小值的和 找出符合条件的两项即可 如 let result = (maxItem-minItem) + (maxIndex-minIndex) 等价于 (maxItem+maxIndex) - (minItem+minIndex)

// let arr = [1, 2, 3, 4, 5, 6]; // 最简单的测试数组 最小项1 最大项6
// 很显然这个数组中最大值6与索引相加(6+5)是当中最大值11 1与索引相加(1+0)为当中的最小值1（6 + 5）-（1+0）= 10

// 假设法
let arr = [2, 10, 9, 1, 8, 3, 4];
let minItem = arr[0]; // 假设第一项与自身索引的和是最小值 索引为0因此省略
let maxItem = arr[0]; // 假设第一项与自身索引的和是最大值 索引为0因此省略
let min = minItem; // 最小项
let max = maxItem; // 最大项
let minIndex = 0; // 最小项索引
let maxIndex = 0; // 最大项索引
for(let i = 1; i < arr.length; i++) {
    let cur = arr[i] + i; // 当前项和自身索引的和
    cur < minItem ? (minItem = cur, min = arr[i], minIndex = i) : null;
    cur > maxItem ? (maxItem = cur, max = arr[i], maxIndex = i) : null;
}
console.log(maxItem, minItem); // 最大项与索引的和 最小项与索引的和
console.log(max, min); // 最大项 最小项
console.log(maxIndex, minIndex); // 最大项的索引 最小项的索引
```
### 检测 字符串中括号表达式是否平衡
```js
// 如 balance('[()') = false; balance('[()()()]') = true
// 一
function match(a, b) {
	return (a === '(' && b === ')') || (a === ')' && b === '(') || (a === '[' && b === ']') || (a === ']' && b === '[');
}

function balance(str) {
	if (str.length % 2 === 0) {
		let len = str.length;
		for (let i = 0, j = len - 1; i < len / 2; i++, j--) {
			if (!match(str[i], str[j])) {
				return false;
			}
		}
		return true;
	}
	return false;
}
console.log(balance('[()()()]')); // true
console.log(balance('[()')); // false
console.log(balance('[]()')); // false
// 二
function is_balance(str) {
	return [...str].reduce((stack, c) => {
		match(stack[stack.length - 1], c) ?
			stack.pop() : stack.push(c);
		return stack;
	}, []).length === 0;
}
console.log(is_balance('[()()()]')); // true
console.log(is_balance('[()')); // false
console.log(is_balance('[]()')); // false
```
### 求相邻两项最大和
```js
// 一
let arr1 = [-1, 3, 1, -5, 2]; // 如 [2, 4, -4, -3] => 4
function sum(arr) {
    let prev = arr[0];
    let sumArr = [];
    let len = arr.length;
    for(let i = 1; i < len; i++) {
        let cur = arr[i];
        sumArr.push(cur + prev);
        prev = cur;
    }   
    return Math.max(...sumArr);
}
console.log(sum(arr1));

// 二
function maxsum(arr) {
    const M = [arr[0]];
    let max = M[0];
    
    for(let i = 1; i < arr.length; i++) {
        M[i] = Math.max(arr[i], M[i - 1] + arr[i]);
        max = Math.max(M[i], max);
    }
    return max;
}
```
### 字符串去除相邻的重复项 如：'aabbccddeexxxxaa' => 'abcdexa'
```js
// 正则表达式
let str = 'aabbccddeexxxxaa';
function uniq1(str) {
    // return str.replace(/([a-z])(\1){1,}/g, '$1');
    return str.replace(/(.)(?=\1)/g, '');
}
console.log(uniq1(str));

// 数组方式
function uniq2(str) {
    let arr = str.split('');
    let newArr = [arr[0]];
    for(let i = 1; i < arr.length; i++) {
        let cur = arr[i];
        if (cur !== newArr[newArr.length - 1]) {
            newArr.push(cur);
        }
    }
    return newArr.join('');
}
console.log(uniq2(str));
```
### 实现一个快排序
```js

// 快排的大体思路是这样的,
// 找个中位值,从原数组切割出来,
// 剩下的作为两个数组,每次都去比较;
// 直到递归的结果出来, 平均复杂度O(nlog n)

function quickSort(arr) {
  //如果数组长度<=1,则直接返回
  if (arr.length <= 1) {
    return arr;
  }
  // 中间位(基准)取长度的一半向下取整
  var pivotIndex = Math.floor(arr.length / 2);
  //把中间位从原数组切割出来, splice 会改变原数组!!!!
  var pivot = arr.splice(pivotIndex, 1)[0];
  //定义两个空数组来存放比对后的值
  var left = [];
  var right = [];

  //比基准小的放在left，比基准大的放在right
  for (var i = 0 , j = arr.length; i < j; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  //递归下去  arr = [ left , pivot , right]
  // 怎么个递归法,就是比对后的数组还是会重复之前的取基准再切开比较..直到最后没有可以切了
  return quickSort(left).concat([pivot], quickSort(right));
}
```
### 写一个二分法查找
```js
// 二分法跟快排的思路差不多,对半比较
// 这个只用于排序好数组内的查询,高低位都知道的情况下
function binSearch(target, arr, start, end) {
  var start = start || 0; // 允许从什么位置开始,下标
  var end = end || arr.length - 1; // 什么位置结束,下标
  start >= end ? -1 : ''; // 没有找到,直接返回-1
  var mid = Math.floor((start + end) / 2); // 中位下标
  if (target == arr[mid]) {
    return mid; // 找到直接返回下标
  } else if (target > arr[mid]) {
    //目标值若是大于中位值,则下标往前走一位
    return binSearch(target, arr, start, mid - 1);
  } else {
    //若是目标值小于中位值,则下标往后退一位
    return binSearch(target, arr, mid + 1, end);
  }
}

// binSearch(5,[1,2,3,4,5,6,7,8]) => 4

// 无序的数组则需要先排序好数组,否则会堆栈溢出(死循环)
```