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