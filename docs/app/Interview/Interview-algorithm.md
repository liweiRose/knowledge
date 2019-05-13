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