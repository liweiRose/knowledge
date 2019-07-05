# JavaScript

### XML和JSON的区别

```js
(1).数据体积方面。JSON相对于XML来讲，数据的体积小，传递的速度更快些。

(2).数据交互方面。JSON与JavaScript的交互更加方便，更容易解析处理，更好的数据交互。

(3).数据描述方面。JSON对数据的描述性比XML较差。

(4).传输速度方面。JSON的速度要远远快于XML。
```
###  说说你对作用域链的理解

作用域链的作用是保证执行环境里有权访问的变量和函数是有序的，作用域链的变量只能向上访问，变量访问到`window`对象即被终止，作用域链向下访问变量是不被允许的。
### 对前端模块化的认识

> AMD 是 `RequireJS` 在推广过程中对模块定义的规范化产出。
>
> CMD 是 `SeaJS` 在推广过程中对模块定义的规范化产出。

`AMD` 是提前执行，`CMD` 是延迟执行。

`AMD`推荐的风格通过返回一个对象做为模块对象，`CommonJS`的风格通过对`module.exports`或`exports`的属性赋值来达到暴露模块对象的目的。

> CMD模块方式

```js
    define(function(require, exports, module) {

      // 模块代码

    });
```
### Javascript垃圾回收方法

> 标记清除（mark and sweep）

这是JavaScript最常见的垃圾回收方式，当变量进入执行环境的时候，比如函数中声明一个变量，垃圾回收器将其标记为“进入环境”，当变量离开环境的时候（函数执行结束）将其标记为“离开环境”。

垃圾回收器会在运行的时候给存储在内存中的所有变量加上标记，然后去掉环境中的变量以及被环境中变量所引用的变量的标记（闭包），在这些完成之后仍存在标记的就是要删除的变量了。

> 引用计数(reference counting)

在低版本IE中经常会出现内存泄露，很多时候就是因为其采用引用计数方式进行垃圾回收。引用计数的策略是跟踪记录每个值被使用的次数，当声明了一个 变量并将一个引用类型赋值给该变量的时候这个值的引用次数就加1，如果该变量的值变成了另外一个，则这个值得引用次数减1，当这个值的引用次数变为0的时 候，说明没有变量在使用，这个值没法被访问了，因此可以将其占用的空间回收，这样垃圾回收器会在运行的时候清理掉引用次数为0的值占用的空间。

在IE中虽然`JavaScript`对象通过标记清除的方式进行垃圾回收，但BOM与DOM对象却是通过引用计数回收垃圾的，
也就是说只要涉及`BOM`及`DOM`就会出现循环引用问题。

### 栈和队列的区别

```
栈的插入和删除操作都是在一端进行的，而队列的操作却是在两端进行的。

队列先进先出，栈先进后出。

栈只允许在表尾一端进行插入和删除，而队列只允许在表尾一端进行插入，在表头一端进行删除
```

### 栈和堆的区别

```
栈区（stack）—   由编译器自动分配释放   ，存放函数的参数值，局部变量的值等。

堆区（heap）   —   一般由程序员分配释放，   若程序员不释放，程序结束时可能由OS回收。

堆（数据结构）：堆可以被看成是一棵树，如：堆排序；

栈（数据结构）：一种先进后出的数据结构。
```
### 快速排序的思想并实现一个快排

“快速排序”的思想很简单，整个排序过程只需要三步：

　　（1）在数据集之中，找一个基准点

　　（2）建立两个数组，分别存储左边和右边的数组

　　（3）利用递归进行下次比较

```js
    <script type="text/javascript">

        function quickSort(arr){
            if(arr.length<=1){
                return arr;//如果数组只有一个数，就直接返回；
            }

            var num = Math.floor(arr.length/2);//找到中间数的索引值，如果是浮点数，则向下取整

            var numValue = arr.splice(num,1);//找到中间数的值
            var left = [];
            var right = [];

            for(var i=0;i<arr.length;i++){
                if(arr[i]<numValue){
                    left.push(arr[i]);//基准点的左边的数传到左边数组
                }
                else{
                   right.push(arr[i]);//基准点的右边的数传到右边数组
                }
            }

            return quickSort(left).concat([numValue],quickSort(right));//递归不断重复比较
        }

        alert(quickSort([32,45,37,16,2,87]));//弹出“2,16,32,37,45,87”

    </script>
```

### ES6的了解

- 新增模板字符串（为JavaScript提供了简单的字符串插值功能）、

- 箭头函数（操作符左边为输入的参数，而右边则是进行的操作以及返回的值`Inputs=>outputs`。）、
- `for-of`（用来遍历数据—例如数组中的值。）
- `arguments`对象可被不定参数和默认参数完美代替。
- `ES6`将`promise`对象纳入规范，提供了原生的`Promise`对象。
- 增加了`let`和`const`命令，用来声明变量。增加了块级作用域。let命令实际上就增加了块级作用域。ES6规定，`var`命令和`function`命令声明的全局变量，属于全局对象的属性；`let`命令、`const`命令、`class`命令声明的全局变量，不属于全局对象的属性。
- 还有就是引入`module`模块的概念。

### js继承方式及其优缺点

> 原型链继承的缺点

```
一是字面量重写原型会中断关系，使用引用类型的原型，并且子类型还无法给超类型传递参数。
```

> 借用构造函数（类式继承）

```
借用构造函数虽然解决了刚才两种问题，但没有原型，则复用无从谈起。所以我们需要原型链+借用构造函数的模式，这种模式称为组合继承
```

> 组合式继承

```
组合式继承是比较常用的一种继承方法，其背后的思路是 使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。这样，既通过在原型上定义方法实现了函数复用，又保证每个实例都有它自己的属性。
```
### defer和async

> defer并行加载js文件，会按照页面上script标签的顺序执行
> async并行加载js文件，下载完成立即执行，不会按照页面上script标签的顺序执行

### 说说你对闭包的理解

使用闭包主要是为了设计私有的方法和变量。闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。在js中，函数即闭包，只有函数才会产生作用域的概念

闭包有三个特性：

> 1.函数嵌套函数
>
> 2.函数内部可以引用外部的参数和变量
>
> 3.参数和变量不会被垃圾回收机制回收
### null和undefined的区别

`null`是一个表示”无”的对象，转为数值时为0；`undefined`是一个表示”无”的原始值，转为数值时为`NaN`。

当声明的变量还未被初始化时，变量的默认值为`undefined`。

`null`用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象。

`undefined`表示”缺少值”，就是此处应该有一个值，但是还没有定义。典型用法是：

```
（1）变量被声明了，但没有赋值时，就等于undefined。


（2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。


（3）对象没有赋值的属性，该属性的值为undefined。


（4）函数没有返回值时，默认返回undefined。
```

`null`表示”没有对象”，即该处不应该有值。典型用法是：

```
（1） 作为函数的参数，表示该函数的参数不是对象。

（2） 作为对象原型链的终点。
```

### new操作符具体干了什么呢

```js
   1、创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。

   2、属性和方法被加入到 this 引用的对象中。

   3、新创建的对象由 this 所引用，并且最后隐式的返回 this 。



var obj  = {};

obj.__proto__ = Base.prototype;

Base.call(obj);
```

### js延迟加载的方式有哪些？

```
defer和async、动态创建DOM方式（创建script，插入到DOM中，加载完毕后callBack）、按需异步载入js
```

### 哪些操作会造成内存泄漏？

```
内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。

垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。

setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。

闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）
```
### javascript对象的几种创建方式

```
1，工厂模式

2，构造函数模式

3，原型模式

4，混合构造函数和原型模式

5，动态原型模式

6，寄生构造函数模式

7，稳妥构造函数模式
```
### javascript继承的6种方法

```
1，原型链继承

2，借用构造函数继承

3，组合继承(原型+借用构造)

4，原型式继承

5，寄生式继承

6，寄生组合式继承
```
### 说说你对Promise的理解

依照 `Promise/A+` 的定义，`Promise` 有四种状态：

```
pending: 初始状态, 非 fulfilled 或 rejected.

fulfilled: 成功的操作.

rejected: 失败的操作.

settled: Promise已被fulfilled或rejected，且不是pending
```

另外， `fulfilled` 与 `rejected` 一起合称 `settled`。

`Promise` 对象用来进行延迟(deferred) 和异步(asynchronous ) 计算。

> Promise 的构造函数

构造一个 `Promise`，最基本的用法如下：

```js
    var promise = new Promise(function(resolve, reject) {

        if (...) {  // succeed

            resolve(result);

        } else {   // fails

            reject(Error(errMessage));

        }
    });
```

`Promise` 实例拥有 `then` 方法（具有 `then` 方法的对象，通常被称为 `thenable`）。它的使用方法如下：

```js
promise.then(onFulfilled, onRejected);
```

接收两个函数作为参数，一个在 `fulfilled` 的时候被调用，一个在 `rejected` 的时候被调用，接收参数就是 `future，onFulfilled` 对应 `resolve`, `onRejected` 对应 `reject`。
### 对AMD和Commonjs的理解

`CommonJS`是服务器端模块的规范，Node.js采用了这个规范。`CommonJS`规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。AMD规范则是非同步加载模块，允许指定回调函数。

`AMD`推荐的风格通过返回一个对象做为模块对象，`CommonJS`的风格通过对`module.exports`或`exports`的属性赋值来达到暴露模块对象的目的。
### 编写一个方法 求一个字符串的字节长度

假设：一个英文字符占用一个字节，一个中文字符占用两个字节

```js
 function GetBytes(str){

        var len = str.length;

        var bytes = len;

        for(var i=0; i<len; i++){

            if (str.charCodeAt(i) > 255) bytes++;

        }

        return bytes;

    }

alert(GetBytes("你好,as"));
```

### git fetch和git pull的区别

```js
git pull：相当于是从远程获取最新版本并merge到本地

git fetch：相当于是从远程获取最新版本到本地，不会自动merge
```
### 为什么 0.1 + 0.2 != 0.3?
因为 JS 采用 IEEE 754 双精度版本（64位），并且只要采用 IEEE 754 的语言都有该问题。

我们都知道计算机表示十进制是采用二进制表示的，所以 0.1 在二进制表示为
```js
// (0011) 表示循环
0.1 = 2^-4 * 1.10011(0011)
```
小数算二进制和整数不同。乘法计算时，只计算小数位，整数位用作每一位的二进制，并且得到的第一位为最高位。所以我们得出 0.1 = 2^-4 * 1.10011(0011)，那么 0.2 的演算也基本如上所示，只需要去掉第一步乘法，所以得出 0.2 = 2^-3 * 1.10011(0011)。
回来继续说 IEEE 754 双精度。六十四位中符号位占一位，整数位占十一位，其余五十二位都为小数位。因为 0.1 和 0.2 都是无限循环的二进制了，所以在小数位末尾处需要判断是否进位（就和十进制的四舍五入一样）。
所以 2^-4 * 1.10011...001 进位后就变成了 2^-4 * 1.10011(0011 * 12次)010 。那么把这两个二进制加起来会得出 2^-2 * 1.0011(0011 * 11次)0100 , 这个值算成十进制就是 0.30000000000000004
下面说一下原生解决办法，如下代码所示
```js
parseFloat((0.1 + 0.2).toFixed(10))
```
### 10 个 Ajax 同时发起请求，全部返回展示结果，并且至多允许三次失败，说出设计思路
这个问题相信很多人会第一时间想到 Promise.all ，但是这个函数有一个局限在于如果失败一次就返回了，直接这样实现会有点问题，需要变通下。以下是两种实现思路.
```js
// 以下是不完整代码，着重于思路 非 Promise 写法
let successCount = 0
let errorCount = 0
let datas = []
ajax(url, (res) => {
     if (success) {
         success++
         if (success + errorCount === 10) {
             console.log(datas)
         } else {
             datas.push(res.data)
         }
     } else {
         errorCount++
         if (errorCount > 3) {
            // 失败次数大于3次就应该报错了
             throw Error('失败三次')
         }
     }
})
// Promise 写法
let errorCount = 0
let p = new Promise((resolve, reject) => {
    if (success) {
         resolve(res.data)
     } else {
         errorCount++
         if (errorCount > 3) {
            // 失败次数大于3次就应该报错了
            reject(error)
         } else {
             resolve(error)
         }
     }
})
Promise.all([p]).then(v => {
  console.log(v);
});

```
### 基于 Localstorage 设计一个 1M 的缓存系统，需要实现缓存淘汰机制
设计思路如下：

存储的每个对象需要添加两个属性：分别是过期时间和存储时间。
利用一个属性保存系统中目前所占空间大小，每次存储都增加该属性。当该属性值大于 1M 时，需要按照时间排序系统中的数据，删除一定量的数据保证能够存储下目前需要存储的数据。
每次取数据时，需要判断该缓存数据是否过期，如果过期就删除。

以下是代码实现，实现了思路，但是可能会存在 Bug，但是这种设计题一般是给出设计思路和部分代码，不会需要写出一个无问题的代码.
```js
class Store {
  constructor() {
    let store = localStorage.getItem('cache')
    if (!store) {
      store = {
        maxSize: 1024 * 1024,
        size: 0
      }
      this.store = store
    } else {
      this.store = JSON.parse(store)
    }
  }
  set(key, value, expire) {
    this.store[key] = {
      date: Date.now(),
      expire,
      value
    }
    let size = this.sizeOf(JSON.stringify(this.store[key]))
    if (this.store.maxSize < size + this.store.size) {
      console.log('超了-----------');
      var keys = Object.keys(this.store);
      // 时间排序
      keys = keys.sort((a, b) => {
        let item1 = this.store[a], item2 = this.store[b];
        return item2.date - item1.date;
      });
      while (size + this.store.size > this.store.maxSize) {
        let index = keys[keys.length - 1]
        this.store.size -= this.sizeOf(JSON.stringify(this.store[index]))
        delete this.store[index]
      }
    }
    this.store.size += size

    localStorage.setItem('cache', JSON.stringify(this.store))
  }
  get(key) {
    let d = this.store[key]
    if (!d) {
      console.log('找不到该属性');
      return
    }
    if (d.expire > Date.now) {
      console.log('过期删除');
      delete this.store[key]
      localStorage.setItem('cache', JSON.stringify(this.store))
    } else {
      return d.value
    }
  }
  sizeOf(str, charset) {
    var total = 0,
      charCode,
      i,
      len;
    charset = charset ? charset.toLowerCase() : '';
    if (charset === 'utf-16' || charset === 'utf16') {
      for (i = 0, len = str.length; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode <= 0xffff) {
          total += 2;
        } else {
          total += 4;
        }
      }
    } else {
      for (i = 0, len = str.length; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode <= 0x007f) {
          total += 1;
        } else if (charCode <= 0x07ff) {
          total += 2;
        } else if (charCode <= 0xffff) {
          total += 3;
        } else {
          total += 4;
        }
      }
    }
    return total;
  }
}
```
### 详细说明 Event loop
众所周知 JS 是门非阻塞单线程语言，因为在最初 JS 就是为了和浏览器交互而诞生的。如果 JS 是门多线程的语言话，我们在多个线程中处理 DOM 就可能会发生问题（一个线程中新加节点，另一个线程中删除节点），当然可以引入读写锁解决这个问题。
JS 在执行的过程中会产生执行环境，这些执行环境会被顺序的加入到执行栈中。如果遇到异步的代码，会被挂起并加入到 Task（有多种 task） 队列中。一旦执行栈为空，Event Loop 就会从 Task 队列中拿出需要执行的代码并放入执行栈中执行，所以本质上来说 JS 中的异步还是同步行为。
```js
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

console.log('script end');

```
以上代码虽然 setTimeout 延时为 0，其实还是异步。这是因为 HTML5 标准规定这个函数第二个参数不得小于 4 毫秒，不足会自动增加。所以 setTimeout 还是会在 script end 之后打印。
不同的任务源会被分配到不同的 Task 队列中，任务源可以分为 微任务（microtask） 和 宏任务（macrotask）。在 ES6 规范中，microtask 称为 jobs，macrotask 称为 task。
```js
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

new Promise((resolve) => {
    console.log('Promise')
    resolve()
}).then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');
// script start => Promise => script end => promise1 => promise2 => setTimeout

```
以上代码虽然 setTimeout 写在 Promise 之前，但是因为 Promise 属于微任务而 setTimeout 属于宏任务，所以会有以上的打印。
微任务包括 process.nextTick ，promise ，Object.observe ，MutationObserver
宏任务包括 script ， setTimeout ，setInterval ，setImmediate ，I/O ，UI rendering
很多人有个误区，认为微任务快于宏任务，其实是错误的。因为宏任务中包括了 script ，浏览器会先执行一个宏任务，接下来有异步代码的话就先执行微任务。
所以正确的一次 Event loop 顺序是这样的

执行同步代码，这属于宏任务
执行栈为空，查询是否有微任务需要执行
执行所有微任务
必要的话渲染 UI
然后开始下一轮 Event loop，执行宏任务中的异步代码

通过上述的  Event loop 顺序可知，如果宏任务中的异步代码有大量的计算并且需要操作 DOM 的话，为了更快的 界面响应，我们可以把操作 DOM 放入微任务中。
- [Node 中的 Event loop](https://juejin.im/post/5aa8a07cf265da238a3022a4)
### 事件的各个阶段
```js
1：捕获阶段 ---> 2：目标阶段 ---> 3：冒泡阶段
document   ---> target目标 ----> document

由此，addEventListener的第三个参数设置为true和false的区别已经非常清晰了：

true表示该元素在事件的“捕获阶段”（由外往内传递时）响应事件；

false表示该元素在事件的“冒泡阶段”（由内向外传递时）响应事件。

```
### let var const
```js
let 允许你声明一个作用域被限制在块级中的变量、语句或者表达式
    let绑定不受变量提升的约束，这意味着let声明不会被提升到当前
    该变量处于从块开始到初始化处理的“暂存死区”。

var 声明变量的作用域限制在其声明位置的上下文中，而非声明变量总是全局的
    由于变量声明（以及其他声明）总是在任意代码执行之前处理的，所以在代码中的任意位置声明变量总是等效于在代码开头声明
    
const 声明创建一个值的只读引用 (即指针)
    这里就要介绍下 JS 常用类型 
    String、Number、Boolean、Array、Object、Null、Undefined
    其中基本类型 有 Undefined、Null、Boolean、Number、String，保存在栈中；
    复合类型 有 Array、Object ，保存在堆中；
    
    基本数据当值发生改变时，那么其对应的指针也将发生改变，故造成 const申明基本数据类型时，
    再将其值改变时，将会造成报错， 例如 const a = 3 ; a = 5 时 将会报错；
    但是如果是复合类型时，如果只改变复合类型的其中某个Value项时， 将还是正常使用；

```
### 箭头函数
```js
    语法比函数表达式更短，并且不绑定自己的this，arguments，super或 new.target。
    这些函数表达式最适合用于非方法函数，并且它们不能用作构造函数。
    
```
### 快速的让一个数组乱序
```js
    var arr = [1,2,3,4,5,6,7,8,9,10];
    arr.sort(function(){
        return Math.random() - 0.5;
    })
    console.log(arr);

```
### JS 判断设备来源
```js
    function deviceType(){
        var ua = navigator.userAgent;
        var agent = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];    
        for(var i=0; i<len,len = agent.length; i++){
            if(ua.indexOf(agent[i])>0){         
                break;
            }
        }
    }
    deviceType();
    window.addEventListener('resize', function(){
        deviceType();
    })


    微信的 有些不太一样
    function isWeixin(){
        var ua = navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i)=='micromessenger'){
            return true;
        }else{
            return false;
        }
    }

```
### 最快捷的数组求最大值
```js
    var arr = [ 1,5,1,7,5,9];
    Math.max(...arr)  // 9 
```
### 更短的数组去重写法
```js
    [...new Set([2,"12",2,12,1,2,1,6,12,13,6])]
    
    // [2, "12", 12, 1, 6, 13]
```
### 下面代码输出结果？为什么？
```js
Function.prototype.a = 'a';
Object.prototype.b = 'b';
function Person(){};
var p = new Person();
console.log('p.a: '+ p.a); // p.a: undefined
console.log('p.b: '+ p.b); // p.b: b
```
### 下面代码输出结果？为什么？
```js
const person = {
  namea: 'menglinghua',
  say: function (){
    return function (){
      console.log(this.namea);
    };
  }
};
person.say()(); // undefined
```
```js
const person = {
  namea: 'menglinghua',
  say: function (){
    return () => {
      console.log(this.namea);
    };
  }
};
person.say()(); // menglinghua
```
```js
setTimeout(() => console.log('a'), 0);
var p = new Promise((resolve) => {
  console.log('b');
  resolve();
});
p.then(() => console.log('c'));
p.then(() => console.log('d'));
console.log('e');
// 结果：b e c d a
// 任务队列优先级：promise.Trick()>promise的回调>setTimeout>setImmediate
```
```js
async function async1() {
    console.log("a");
    await  async2(); //执行这一句后，await会让出当前线程，将后面的代码加到任务队列中，然后继续执行函数后面的同步代码
    console.log("b");

}
async function async2() {
   console.log( 'c');
}
console.log("d");
setTimeout(function () {
    console.log("e");
},0);
async1();
new Promise(function (resolve) {
    console.log("f");
    resolve();
}).then(function () {
    console.log("g");
});
console.log('h');
// 谁知道为啥结果不一样？？？？？？？？？？？？？
// 直接在控制台中运行结果：      d a c f h g b e
// 在页面的script标签中运行结果：d a c f h b g e
```
### js bind 实现机制？手写一个 bind 方法？
```js
// 代码来自书籍 《javaScript 模式》
if (typeof Function.prototype.bind === "undefined"){
  Function.prototype.bind = function (thisArgs){
    var fn = this,
        slice = Array.prototype.slice,
        args = slice.call(arguments, 1);
    return function (){
      return fn.apply(thisArgs, args.concat(slice.call(arguments)));
    }
  }
}
```
### 高阶函数实现AOP（面向切面编程）
```js
    Function.prototype.before = function (beforefn) {
        let _self = this; // 缓存原函数的引用
        return function () { // 代理函数
            beforefn.apply(this, arguments); // 执行前置函数
            return _self.apply(this, arguments); // 执行原函数
        }
    }

    Function.prototype.after = function (afterfn) {
        let _self = this;
        return function () {
            let set = _self.apply(this, arguments);
            afterfn.apply(this, arguments);
            return set;
        }
    }

    let func = () => console.log('func');
    func = func.before(() => {
        console.log('===before===');
    }).after(() => {
        console.log('===after===');
    });

    func();

```
### 字符串repeat实现
```js
// 原生repeat
'ni'.repeat(3); // 'ninini'

// 实现一
String.prototype.repeatString1 = function (n) {
  return Array(n + 1).join(this);
}
console.log('ni'.repeatString1(3));

// 实现二
String.prototype.repeatString2 = function (n) {
  return Array(n).fill(this).join('');
}
console.log('ni'.repeatString2(3));
```
### 当我们 new 一个类的时候 都发生了什么
```js
/**
 * new2 new关键字的代码实现演示
 * @param {function} func 被new的类 (构造函数)
 */
function new2(func) {
    // 创建了一个实例对象 o，并且这个对象__proto__指向func这个类的原型对象 
    let o = Object.create(func.prototype); 
    // (在构造函数中this指向当前实例)让这个类作为普通函数值行 并且里面this为实例对象 
    let k = func.call(o);
    // 最后再将实例对象返回 如果你在类中显示指定返回值k，
    // 注意如果返回的是引用类型则将默认返回的实例对象o替代掉
    return typeof k === 'object' ? k : o;
}

// 实验
function M() { // 即将被new的类
    this.name = 'liwenli';
}

let m = new2(M); // 等价于 new M 这里只是模拟
console.log(m instanceof M); // instanceof 检测实例  true
console.log(m instanceof Object);  // true
console.log(m.__proto__.constructor === M); //true
```
### this/bind
```js
let obj = { a: 1};
  function fn() {
    this.b = 100;
    return this.a;
  }
  let fe = fn.bind(obj);
  console.log(fe()); // 1  里面this是obj
  console.log(obj); // { a: 1, b: 100 }
  console.log(new fe()); // 里面this是当前创建实例对象 { b: 100 }
```
### Object.create 兼容实现
```js
        let obj1 = {id: 1};
        Object._create = (o) => {
            let Fn = function() {}; // 临时的构造函数
            Fn.prototype = o;
            return new Fn;
        }
        
        let obj2 = Object._create(obj1);
        console.log(obj2.__proto__ === obj1); // true
        console.log(obj2.id); // 1

        // 原生的Object.create
        let obj3 = Object.create(obj1);
        console.log(obj3.__proto__ === obj1); // true
        console.log(obj3.id); // 1
```
### 一道面试题

<img :src="$withBase('/images/mianshiti1.jpg')">

- 解法一
```js
function CodingMan(name) { // 主要考察的是 面向对象以及JS运行机制（同步 异步 任务队列 事件循环）
	function Man(name) {
		setTimeout(() => { // 异步
			console.log(`Hi! This is ${name}`);
		}, 0);
	}

	Man.prototype.sleep = function(time) {
		let curTime = new Date();
		let delay = time * 1000;
		setTimeout(() => { // 异步
			while (new Date() - curTime < delay) {} // 阻塞当前主线程
			console.log(`Wake up after ${time}`);
		}, 0);
		return this;
	}

	Man.prototype.sleepFirst = function(time) {
		let curTime = new Date();
		let delay = time * 1000;
		while (new Date() - curTime < delay) {} // 阻塞当前主线程
		console.log(`Wake up after ${time}`);
		return this;
	}

	Man.prototype.eat = function(food) {
		setTimeout(() => { // 异步
			console.log(`Eat ${food}~~`);
		}, 0)
		return this;
	}

	return new Man(name);
}

// CodingMan('Peter');
// CodingMan('Peter').sleep(3).eat('dinner');
// CodingMan('Peter').eat('dinner').eat('supper');
// CodingMan('Peter').sleepFirst(5).eat('supper');
```
- 解法二
```js
    function CodingMan(name) {
        function fe() {
            fe.flag = true;
            console.log(`Hi! This is ${name}`);
        }
        fe.flag = false;
        fe.timer = setTimeout(() => {
            clearTimeout(fe.timer);
            if (!fe.flag) fe();
        }, 0);
        return fe;
    }

    Function.prototype.sleep = function (delay) {
        this()
        this.await(delay);
        return this;
    }

    Function.prototype.sleepFirst = function (delay) {
        this.await(delay);
        this();
        return this;
    }

    Function.prototype.eat = function (dinner) {
        setTimeout(() => {
            console.log(`Eat ${dinner}~`);
        });
        return this;
    };

    Function.prototype.await = function (delay) {
        delay = isNaN(delay) ? 0 : delay;
        let startTime = new Date();
        let delayTime = delay * 1000;
        while (new Date() - startTime <= delayTime) {
        }
        console.log(`Wake up after ${delayTime}ms`);
    }
     // CodingMan('peter')
     // CodingMan('peter').sleep(2).eat('hanbao');
     // CodingMan('peter').sleepFirst(2).eat('hanbao');
     CodingMan('peter').eat('haha').eat('hanbao');
```
### 函数防抖完全版
```js
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
 
function debounce(func,wait,immediate) {
    var timeout;

    return function () {
        var context = this;
        var args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(function(){
                timeout = null;
            }, wait)
            if (callNow) func.apply(context, args)
        }
        else {
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
    }
}
```
### 深度拷贝兼容写法（不包括原型属性）
```js
function deepCopy(obj) {
    if (typeof obj !== 'object') return obj;
    if (typeof window !== 'undefined' && window.JSON) { // 浏览器环境下 并支持window.JSON 则使用 JSON
        return JSON.parse(JSON.stringify(obj));
    } else {
        let newObj = obj.constructor === Array ? [] : {};
        for(let key in obj) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
        return newObj;
    }
}

let obj = {a: 1, b: [12]};
let newObj = deepCopy(obj);
newObj.b[1] = 100;
console.log(obj);
console.log(newObj);
```
### 深度克隆加强版
```js
function cloneDeep(obj) {
  let type = isType(obj)
  if (type === 'Array' || type === 'Object') {
    return cloneObj(obj)
  } else if (type === 'Date') {
    return obj.constructor(obj)
  } else {
    return obj
  }
}

function cloneObj(obj) {
  let newObj = obj instanceof Array ? [] : {};
  for (let key in obj) {
    newObj[key] = typeof obj[key] === 'object' ? cloneObj(obj[key]) : obj[key]
  }
  return newObj;
}

function isType(o) {
  return /\[object\s(.*?)\]/.exec(Object.prototype.toString.call(o))[1]
}

let fn = function () {
  return 123
}
var a = [[1, 2, 3], [4, 5, 6, 7, fn]];
// let c = new Date();
// var b = cloneDeep(c);
var b = cloneDeep(a);
console.log(b[0], a[0]);
console.log(b[0] === a[0]);
```
### 原生数据类型检测简易封装
```js
Object.prototype.isType = function (type) {
  return function (params) {
    return Object.prototype.toString.call(params) === `[object ${type}]`
  }
}

let isString = Object.isType('String')
let isArray = Object.isType('Array')

console.log(isString(1)) // false
console.log(isString('hello')) // true

console.log(isArray(2)) // false
console.log(isArray(['hello'])) // true
```
### Array的reduce实现
```js
Array.prototype._reduce = function (callback, initVal) {
  let i = 0
  let result = initVal
  if (typeof initVal === 'undefined') {
    result = this[0]
    i++
  }

  for (i; i < this.length; i++) {
    result = callback(result, this[i])
  }
  return result
}

const arr = [1, 2, 3]
let result = arr._reduce((a, b) => {
  return a + b
}, 0)
console.log(result) // 6
```
### Function的bind实现
```js
1.es5
    Function.prototype._bind = function(context) {
      let func = this;
      let params = [].slice.call(arguments, 1);
      let Fnop = function() {};
      let fbound = function() {
        params = params.concat([].slice.call(arguments, 0));
        return func.apply(this instanceof Fnop ?
          this : context, params);
      }
      Fnop.prototype = this.prototype;
      fbound.prototype = new Fnop();
      return fbound;
    }

    function foo() {
      this.b = 100;
      return this.a;
    }
    let fe = foo._bind({ a: 1 });
    console.log(fe()); // 1
    console.log(new fe()); // 实例 {b: 100}

2.es6
  Function.prototype.mybind = function(context, ...rest) {
    return (...params) => this.call(context, ...rest, ...params);
  }
```
### 如何主动中止Promise调用链
```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => { // 异步操作
      resolve('start')
  }, 1000);
});

p1.then((result) => {
   console.log('a', result); 
   return Promise.reject('中断后续调用'); // 此时rejected的状态将直接跳到catch里，剩下的调用不会再继续
}).then(result => {
   console.log('b', result);
}).then(result => {
   console.log('c', result);
}).catch(err => {
   console.log(err);
});

// a start
// 中断后续调用
```
### 字符串是否符合回文规则
```js
let str = 'My age is 0, 0 si ega ym.';

方法一
function palindrome(params) {
  params = params.replace(/[\W\s_]/ig, '');
 return params.toLowerCase()  === params.split('').reverse().join('').toLowerCase();
}
console.log(palindrome(str));

方法二
function palindrome(params) {
  params = params.replace(/[\W\s_]/ig, '').toLowerCase();
  for (var i = 0, j = params.length-1; i<j; i++, j--) {
    if (params[i] !== params[j]) {
      return false;
    }
  }
  return true;
}
```
### 数组展平
```js
let arr = [[1, 2], 3, [[[4], 5]]]; // 数组展平
function flatten(arr) {
    return [].concat(
        ...arr.map(x => Array.isArray(x) ? flatten(x) : x)
    )
}
```
### getElementsByClassName 兼容写法
```js
  function getByClass(cName) {
      if ('getElementsByClassName' in this) {
          return this.getElementsByClassName(cName);
      }
      cName = cName.replace(/(^\s+|\s+$)/g, '').split(/\s+/g);
      let eles = this.getElementsByTagName('*');
     for (let i = 0; i < cName.length; i++) {
        let reg = new RegExp(`(^| )${cName[i]}( |$)`);
        let temp = [];
        for (let j = 0; j < eles.length; j++) {
            let cur = eles[j];
            let {className} = cur;
            if (reg.test(className)) {
                temp.push(cur);
            }
        }
        eles = temp;
     }
     return eles;
  }
  console.log(content.getByClass('c1 c2 '));
```
### 使用js实现一个持续的动画效果
最开始的思路是用定时器实现，最后没有想的太完整，面试官给出的答案是用`requestAnimationFrame`。
- 定时器思路
```js
var e = document.getElementById('e')
var flag = true;
var left = 0;
setInterval(() => {
    left == 0 ? flag = true : left == 100 ? flag = false : ''
    flag ? e.style.left = ` ${left++}px` : e.style.left = ` ${left--}px`
}, 1000 / 60)
```
- `requestAnimationFrame` 由于之前没有用过这个 `API` 所以是现学的。
```js
//兼容性处理
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function(callback){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var e = document.getElementById("e");
var flag = true;
var left = 0;

function render() {
    left == 0 ? flag = true : left == 100 ? flag = false : '';
    flag ? e.style.left = ` ${left++}px` :
        e.style.left = ` ${left--}px`;
}

(function animloop() {
    render();
    requestAnimFrame(animloop);
})();
```
- 浏览器可以优化并行的动画动作，更合理的重新排列动作序列，并把能够合并的动作放在一个渲染周期内完成，从而呈现出更流畅的动画效果
- 解决毫秒的不精确性
- 避免过度渲染（渲染频率太高、tab 不可见暂停等等）

注：requestAnimFrame 和 定时器一样也头一个类似的清除方法 cancelAnimationFrame。
### CommonJS 中的 require/exports 和 ES6 中的 import/export 区别？
- commonJS 模块的重要特性是加载时执行，即脚本代码在 require 的时候，就会全部执行。一旦出现某个模块被”循环加载”，就只输出已经执行的部分，还未执行的部分不会输出。
- ES6 模块是动态引用，如果使用 import 从一个模块加载变量，那些变量不会被缓存，而是成为一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。
- import/export 最终都是编译为 require/exports 来执行的。
- CommonJS 规范规定，每个模块内部，module 变量代表当前模块。这个变量是一个对象，它的 exports 属性（即 module.exports ）是对外的接口。加载某个模块，其实是加载该模块的 module.exports 属性。
- export 命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
### 一行代码实现数组去重？
```js
[...new Set([1,2,3,1,'a',1,'a'])]
```
### 使用addEventListener点击li弹出内容，并且动态添加li之后有效
```js
var ulNode = document.getElementById("ul");
    ulNode.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName.toUpperCase() == "LI") {
            alert(e.target.innerHTML);
        }
    }, false);
```
### 怎么判断两个对象相等？
```js
obj={
    a:1,
    b:2
}
obj2={
    a:1,
    b:2
}
obj3={
    a:1,
    b:'2'
}
```
最开始的思路是遍历来判断，但是最后好像没有说清楚，查了下，好像可以转换为字符串来判断。
```js
JSON.stringify(obj)==JSON.stringify(obj2);//true
JSON.stringify(obj)==JSON.stringify(obj3);//false
```
### Set 和 Map 数据结构
- ES6 提供了新的数据结构 Set 它类似于数组，但是成员的值都是唯一的，没有重复的值。
- ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
### 不借助第三者交换 a，b两个值。
```js
/* 方法一 */
a = a + b;
b = a - b;
a = a - b;

/* 方法二 */
a = a - b;
b = a + b;
a = b - a;

/* 方法三 */
a = {a:b,b:a};
b = a.b;
a = a.a;

/* 方法四 */
a = [a,b];
b = a[0];
a = a[1];

/* 方法五 */
[a,b] = [b,a];
```
### new 的过程和实现
```js
/* 选自 yck 文章 */
function create(Con, ...args) {
  let obj = {}
  Object.setPrototypeOf(obj, Con.prototype)
  let result = Con.apply(obj, args)
  return result instanceof Object ? result : obj
}
```
如果你能清楚的了解上边代码的原理，请忽略。

不然的话建议阅读下边大佬的文章。
推荐 yck 的文章 [重学 JS 系列：聊聊 new 操作符](https://juejin.im/post/5c7b963ae51d453eb173896e)
### JS 实现一个闭包函数,每次调用都自增1;
```js

var add = (function() {
  // 声明一变量,由于下面 return所以变量只会声明一次
  var count = 0; 
  return function() {
    return console.log(count++);
  };
})();

add(); // 0
add(); // 1
add(); // 2
```
### '1','2','3'].map(parseInt) 输出什么,为什么?
```js

['1','2','3'].map(parseInt); // [1,NaN,NaN]

// 刨析

// map有三个参数:数组元素，元素索引，原数组本身
// parseInt有两个参数,元素本身以及进制
// 理清了这两个就好办了...
// ['1','2','3'].map(parseInt); 等于如下
['1','2','3'].map(function(item,index,array){
    return parseInt(item,index); // 是不是一目了然
});

// parseInt("1",0); => 1
// parseInt("2",1); => NaN
// parseInt("3",2); => NaN
```
### 对数组 ['2018-03-05', '2013-06-12','2019-03-12','2018-03-05','2014-02-22'] 去重且排序
```js
//很好理解, Set 具有值唯一性(但不是所有值,等会我抛出我的另外一篇文章)
// 结合...解构,可以把可迭代(比如 arguments/nodelist 等)的转为数组
// sort 里面传入 两个值比较,返回-1和1是因为1代表这个数大排后(相对),-1代表小(相对),0为相等

let arr = [...new Set(['2018-03-05', '2013-06-12','2019-03-12','2018-03-05','2014-02-22'])].sort(function(a,b){
  return a<b ? -1:1; // 这里返回的是升序的,降序改下返回值就好了.所以是相对
})

// ["2013-06-12", "2014-02-22", "2018-03-05", "2019-03-12"]
```
### 对数组[1,2,3,4,5,'6',7,'8','a','b','z']进行乱序
```js

// 我们依旧可以用上面的 sort 的原理实现乱序

let tempArr = [1,2,3,4,5,'6',7,'8','a','b','z'].sort(function(){
  return Math.random() > 0.5 ? -1 : 1;
})

// 因为里面有随机数,所以答案没有标准答案,我这边跑了一次是输出这个
//["6", "z", 3, "b", 5, 2, 7, "8", "a", 1, 4]
```
### 求[1, 10, 11, -1,'-5',12, 13, 14, 15, 2, 3, 4, 7, 8, 9]内最大值与最小值之差
```js

// 来一个很粗糙的版本,只当传入是数组且可以隐性转为数字的
function MaxMinPlus(arr) {
  // 返回最大值与最小值之差
  return Array.isArray(arr) ? Math.max.apply(Math, arr) - Math.min.apply(Math, arr) : console.log('传入的不是数组亦或者未能解决的错误')
}

// 结果是 20

// 若是要完善的话,要考虑传入的是非数组,
//传入字符串的时候要判断,然后切割为数组..
// 都要考虑进去代码量不短
```
### 请给Array实现一个方法,去重后返回重复的字符(新数组)
```js

  var testArr = [1,6,8,3,7,9,2,7,2,4,4,3,3,1,5,3];
    
  Array.prototype.extraChar = function(){
      var cacheExtraChar = []; // 缓存重复出现的字符
      var that = this; // 缓存 this;
      this.map(function(item,index){
          // 怎么理解这段代码呢?
          // 就是向前往后查找一遍和从后往前查找一遍,不等就是没有重复
          // 为什么还要判断一遍缓存,是过滤缓存数组内多次写入
          (that.indexOf(item) !== that.lastIndexOf(item)) && cacheExtraChar.indexOf(item) === -1 ? cacheExtraChar.push(item) : -1;
      });
      return cacheExtraChar;
  }


testArr.extraChar(); // [1, 3, 7, 2, 4]

// 若是还需要排序就再排序下

[1,6,8,3,7,9,2,7,2,4,4,3,3,1,5,3]
.extraChar()
.sort(function(a,b){return a-b}) // [1, 2, 3, 4, 7]
```
### 一个数组中 par中存放了多个人员的信息,每个人员的信息由 name 和 age 构成({name:'张三',age:15}).请用 JS 实现年龄从小到大的排序;
```js
var par = [{age:5,name:'张三'},{age:3,name:'李四'},{age:15,name:'王五'},{age:1,name:'随便'}]

var parSort = par.sort(function(a,b){
    return a.age - b.age;
})
```
### 判断一个回文字符串和同字母异序字符串
- 回文字符串就是正序倒序都是一样的;
- 同字母异序字符串则是字符串都一样,但是位置可能不一定一样,比如abcefd和dceabf=>return true
后者的思路就是用排序把异序扭正.
```js

// 回文判断 , 比如用 abcba
var isPalindromes = function(params){
  params = params.toString().toLowerCase()
  return params === params.split('').reverse().join('');
}

// 同字母异序判定,比如`abcefd`和`dceabf`
var isAnagram = function(str1, str2)  {
  str1 = str1.toString().toLowerCase();
  str2 = str2.toString().toLowerCase();
  return str1.split('').sort().join('') === str2.split('').sort().join('')
}
```
进阶版:多一些特殊字符

若是我们要去除所有非字母数字的字符,则需要用到正则
```js

// 进阶版: isPalindromes('abc_ &b #@a')

var isPalindromes = function(params){
  // 传入参数先转为字符串且全部转为小写,最后去除多余字符比较
  params = params.toString().toLowerCase().replace(/[\W_\s]/g,'');
  console.log(params)
  return params === params.split('').reverse().join('');
}


// 进阶版同字母异序: isAnagram('ab *&cef#d','!d@ce^abf')
var isAnagram = function(str1, str2)  {
  str1 = str1.toString().toLowerCase().replace(/[\W_\s]/g,'');
  str2 = str2.toString().toLowerCase().replace(/[\W_\s]/g,'');
  return str1.split('').sort().join('') === str2.split('').sort().join('')
}
```
### JS 实现String.trim()方法;
```js
// 原生是有 trim()方法的.我们要模拟一个;

String.prototype.emuTrim = function(){
    // 这条正则很好理解,就是把头部尾部多余的空格字符去除
    return this.replace(/(^\s*)|(\s*$)/g,'');
}


'  fsaf fsdaf f safl lllll    '.emuTrim();  //"fsaf fsdaf f safl lllll" 
```
### JS 实现函数运行一秒后打印输出0-9;给定如下代码
```js

for(let i=0;i<10;i++){
  setTimeout(function(){
       console.log(i);
  },1000);
}
```
### 实现对一个数组或者对象的浅拷贝和"深度"拷贝
浅拷贝就是把属于源对象的值都复制一遍到新的对象,不会开辟两者独立的内存区域;

深度拷贝则是完完全全两个独立的内存区域,互不干扰

- 浅拷贝
```js

// 这个 ES5的

function shallowClone(sourceObj) {
  // 先判断传入的是否为对象类型
  if (!sourceObj || typeof sourceObj !== 'object') {
    console.log('您传入的不是对象!!')
  }
  // 判断传入的 Obj是类型,然后给予对应的赋值
  var targetObj = sourceObj.constructor === Array ? [] : {};
  
  // 遍历所有 key
  for (var keys in sourceObj) {
    // 判断所有属于自身原型链上的 key,而非继承(上游 )那些
    if (sourceObj.hasOwnProperty(keys)) {
      // 一一复制过来
      targetObj[keys] = sourceObj[keys];
    }
  }
  return targetObj;
}

 // ES6 可以用 Object.assign(targeObj, source1,source2,source3) 来实现对象浅拷贝
```
- 深度拷贝
```js

// 就是把需要赋值的类型转为基本类型(字符串这些)而非引用类型来实现
// JOSN对象中的stringify可以把一个js对象序列化为一个JSON字符串，parse可以把JSON字符串反序列化为一个js对象

var deepClone = function(sourceObj) {
  if (!sourceObj || typeof sourceObj !== 'object') {
    console.log('您传入的不是对象!!');
    return;
  }
  // 转->解析->返回一步到位
  return window.JSON
    ? JSON.parse(JSON.stringify(sourceObj))
    : console.log('您的浏览器不支持 JSON API');
};
```
### this对象的理解
简言之:谁调用指向谁,运行时的上下文确定,而非定义的时候就确定;
强行绑定 this的话,可以用 call,apply,bind,箭头函数....来修改this的指向
这类的文章太多,自行搜索吧....

Q: 看到你说到 bind,能用 JS简单的模拟个么?
```js
Function.prototype.emulateBind =  function (context) {
    var self = this;
    return function () {
        return self.apply(context);
    }

}
```
### JS 的作用域是什么?有什么特别之处么?
作用域就是有它自身的上下文区域(比如函数内),内部会有变量声明提升,函数声明提升这些;

函数声明提升优于变量声明提升..

作用域有全局作用域和块级作用域(局部,比如用 let 或者单纯花括号的);

作用域会影响this的指向
### 怎么解决跨域问题,有哪些方法...
我一般用这三种,cors,nginx反向代理,jsonp
- `jsonp` : 单纯的 `get` 一些数据,局限性很大...就是利用`script`标签的`src`属性来实现跨域。
- `nginx` 反向代理: 主要就是用了`nginx.conf`内的proxy_pass http://xxx.xxx.xxx,会把所有请求代理到那个域名,有利也有弊吧..
- `cors`的话,可控性较强,需要前后端都设置,兼容性 IE10+ ,比如

Access-Control-Allow-Origin: foo.example  // 子域乃至整个域名或所有域名是否允许访问
Access-Control-Allow-Methods: POST, GET, OPTIONS // 允许那些行为方法
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type  // 允许的头部字段
Access-Control-Max-Age: 86400  // 有效期

Q: 对于想携带一些鉴权信息跨域如何走起?比如cookie!

需要配置下 header Access-Control-Allow-Credentials:true ,具体用法看下面的nginxdemo

当然cros的配置不仅仅这些,还有其他一些,具体引擎吧....

若是我们要用 nginx或者 express 配置cors应该怎么搞起? 来个简易版本的
- nginx
```js
location / {
   # 检查域名后缀
    add_header Access-Control-Allow-Origin xx.xx.com;
    add_header Access-Control-Allow-Methods GET,POST,OPTIONS;
    add_header Access-Control-Allow-Credentials true;
    add_header Access-Control-Allow-Headers DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type;
    add_header Access-Control-Max-Age 86400;
} 
```
- express, 当然这货也有一些别人封装好的 cors中间件,操作性更强...
```js
let express = require('express');  
let app = express();  

//设置所有请求的头部
app.all('*', (req, res, next) =>  {  
    res.header("Access-Control-Allow-Origin", "xx.xx.com");  
    res.header("Access-Control-Allow-Headers", "DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type");  
    res.header("Access-Control-Allow-Credentials","true")
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    next();  
});  
```
### 对于XSS 和 CSRF 如何防范
- XSS的防范

  - 我能想到的就是转义<>这些造成代码直接运行的的标签..轮询或者正则替换
     - 而面试官说这种的效率最低下,我回来仔细找了找相关资料好像没有更优方案...有的留言...
  - 若是有用到 cookie,设置为http-only,避免客户端的篡改
- CSRF的防范一般这几种
  - 验证码,用户体验虽然不好,,但是很多场合下可以防范大多数攻击
  - 验证 HTTP Referer 字段,判断请求来源
  - token加密解密,这种是目前很常用的手段了...
任何防范都有代价的,比如验证码造成的体验不好,token滥用造成的性能问题,轮询替换造成的响应时间等
### 描述下cookie,sessionStorage,localStorage的差异..
- cookie : 大小4KB 左右,跟随请求(请求头),会占用带宽资源,但是若是用来判断用户是否在线这些挺方便
- sessionStorage和localStorage大同小异,大小看浏览器支持,一般为5MB,数据只保留在本地,不参与服务端交互.

  - sessionStorage的生存周期只限于会话中,关闭了储存的数据就没了.
  - localStorage则保留在本地,没有人为清除会一直保留
### javascript的原型链你怎么理解?
原型链算是 JS 内一种独有的机制,

所有对象都有一个内置[[proto]]指向创建它的原型对象(prototype)

原型链的基本用来实现继承用的
### javascript里面的继承怎么实现，如何避免原型链上面的对象共享
- ES5:寄生组合式继承:通过借用构造函数来继承属性和原型链来实现子继承父。
```js

    function ParentClass(name) {
      this.name = name;
    }
    ParentClass.prototype.sayHello = function () {
      console.log("I'm parent!" + this.name);
    }
    function SubClass(name, age) {
      //若是要多个参数可以用apply 结合 ...解构
      ParentClass.call(this, name);
      this.age = age;
    }
    SubClass.prototype = Object.create(ParentClass.prototype);
    SubClass.prototype.constructor = SubClass;
    SubClass.prototype.sayChildHello = function (name) {
      console.log("I'm child " + this.name)
    }

    let testA = new SubClass('CRPER')

    // Object.create()的polyfill
    /*
    function pureObject(o){
        //定义了一个临时构造函数
         function F() {}
         //将这个临时构造函数的原型指向了传入进来的对象。
         F.prototype = obj;
         //返回这个构造函数的一个实例。该实例拥有obj的所有属性和方法。
         //因为该实例的原型是obj对象。
         return new F();
    }
    */
```
- ES6: 其实就是ES5的语法糖,不过可读性很强..
```js
    class ParentClass {
      constructor(name) {
        this.name = name;
      }
      sayHello() {
        console.log("I'm parent!" + this.name);
      }
    }

    class SubClass extends ParentClass {
      constructor(name) {
        super(name);
      }
      sayChildHello() {
        console.log("I'm child " + this.name)
      }
      // 重新声明父类同名方法会覆写,ES5的话就是直接操作自己的原型链上
      sayHello(){
        console.log("override parent method !,I'm sayHello Method")
      }
    }

    let testA = new SubClass('CRPER')
```
### ES6+你熟悉么,用过哪些特性?
- 箭头函数
- 类及引入导出和继承( class/import/export/extends)
- 字符串模板
- Promise
- let,const
- async/await
- 默认参数/参数或变量解构装饰器
- Array.inclueds/String.padStart|String.padEnd/Object.assign
### 箭头函数的this指向谁?
- 肯定很多小伙伴会说指向局部方法内!!答案是错误的...
- 箭头函数所改变的并非把 this 局部化，而是完全不把 this 绑定到里面去;
- 就是 this 是取自外部的上下级作用域(但是又不是常规 function的语法糖)..
- 因为箭头函数里并不支持 var self = this 或者 .bind(this) 这样的写法。
### 问的时候你用过静态方法,静态属性,私有变量么?
静态方法是ES6之后才有这么个玩意,有这么些特点

- 方法不能给 this引用,可以给类直接引用
- 静态不可以给实例调用,比如 let a = new ParentClass => a.sayHello() 会抛出异常
- 父类静态方法,子类非static方法没法覆盖父类
- 静态方法可以给子类继承
- 静态属性可以继承也可以被修改
```js

 class ParentClass {
      constructor(name) {
        this.name = name;
      }
      static sayHello() {
        console.log("I'm parent!" + this.name);
      }

      static testFunc(){
        console.log('emm...Parent test static Func')
      }
    }

    class SubClass extends ParentClass {
      constructor(name) {
        super(name);
      }
      sayChildHello() {
        console.log("I'm child " + this.name)
      }
      static sayHello() {
        console.log("override parent method !,I'm sayHello Method")
      }

      static testFunc2() {
        console.log(super.testFunc() + 'fsdafasdf');
      }
    }
    ParentClass.sayHello(); // success print

    let a = new ParentClass('test');
    a.sayHello() // throw error

    SubClass.sayHello(); // 同名 static 可以继承且覆盖
    
    SubClass.testFunc2(); // 可以继承

    let testA = new SubClass('CRPER');
```
WeakMap可以避免内存泄露,当没有被值引用的时候会自动给内存寄存器回收了.
```js

const _ = new WeakMap(); // 实例化,value 必须为对象,有 delete,get,has,set四个方法,看名字都知道了

class TestWeakMap {
  constructor(id, barcode) {
    _.set(this, { id,barcode });
  }
  testFunc() {
    let { id,barcode } = _.get(this); // 获取对应的值
    return { id,barcode };
  }
}
```
当然你也可以用Symbol来实现一个私有变量,这也是一个好法子
### 谈谈你对 Promise 的理解? 和 ajax 有关系么?
`Promise`和`ajax`没有半毛钱直接关系.`promise`只是为了解决"回调地狱"而诞生的;

平时结合 `ajax`是为了更好的梳理和控制流程...这里我们简单梳理下..

`Promise`有三种状态,`Pending`/`resolve()`/`reject();`
一些需要注意的小点,如下
- 在 Pending 转为另外两种之一的状态时候,状态不可在改变..
- Promise的 then为异步.而(new Promise())构造函数内为同步
- Promise的catch不能捕获任意情况的错误(比如 then 里面的setTimout内手动抛出一个Error)
- Promise的then返回Promise.reject()会中断链式调用
- Promise的 resolve若是传入值而非函数,会发生值穿透的现象
- Promise的catch还是then,return的都是一个新的 Promise(在 Promise 没有被中断的情况下)
Promise 还有一些自带的方法,比如race,all,前者有任一一个解析完毕就返回,后者所有解析完毕返回...
> 实现一个延时的 promise 函数, 可以用async和await
```js

const delay = (time)=> new Promise((resolve,reject)=>{
  setTimeout(resolve,time)
})


// test

let testRun = async function(){
   console.log(1);
   await delay(2000);
   console.log('我两秒后才触发',3)
} 

// 1 => Promise = > 3
```
这段代码的运行结果是什么?
```js
var test = new Promise((resolve,reject)=>{
   resolve();
});

test
  .then(data => {
    // promise start
    console.log('promise first then : ', data);
    return Promise.resolve(1); // p1
  })
  .then(data => {
    // promise p1
    console.log('get parent(p1) resolve data : ', data);
    return Promise.reject(new Error('哎呀,中断了,你能奈我何!')); // p2
   
  })
  .then(data => {
    // promise p2
    console.log('result of p2: ', data);
    return Promise.resolve(3); // p3
  })
  .catch(err => {
    console.log('err: ', err);
    return false;
  });
  
// promise first then :  undefined
// get parent(p1) resolve data :  1
// err:  Error: 哎呀,中断了,你能奈我何!

// 这里在 then 返回 Promise.reject()的时候已经中断了链式调用.直接给 catch捕获到
```
别急,假如你不管有没有捕获到错误,最后再执行一个回调函数如何实现?
这里说的就是类似try..catch..finally,给Promise实现一个 finally;
```js
// finally比较好加，按照现在社区的讨论，finally的特点如下： 
// url : https://www.v2ex.com/t/205715  
//1. 不接收任何参数，原来的value或者Error在finally里是收不到的 
//2. 处理后不影响原Promise的状态，该reject还是reject，该resolve还是resolve 
//3. 不影响Promise向后传递的传，resolve状态还是传递原来的value，reject状态还是传递原来的Error 

Promise.prototype.finally = function (callback) {
  let P = this.constructor; // 这里拿到的是 Promise 的构造函数
  
  //不管前面的 Promise 是fulfilled还是rejected，都会执行回调函数callback。
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};

// 用法很简单,就是可以传入一个回调函数..
// https://developers.google.com/web/updates/2017/10/promise-finally
// 这个 url 中说了 node 及 chrome 的哪些版本已经实现了 finally 及用法
// ES 2018已经把 finally 追加到 promise 的原型链中..
```
### 几个短而让我印象深刻的题
```js
if(!("a" in window)){
    var a = 10;
}
console.log(a); // undefined

// !("a" i n window)  , 返回 true
// 留言小伙伴的刨析,非常感谢,还是涉及变量提升的问题
/*
 var a;
if(!("a" in window)){
    a = 10;
}
*/

// 变种题
(function(){
 var  x = c =  b = {a:1}
})()

console.log(x.a); // error , x is not defined
console.log(c,b) // {a: 1} {a: 1}
```
```js
var count = 0;

console.log(typeof count === "number"); // true , 这个不用解释了

console.log(!!typeof count === "number"); // false

// 这里涉及到就是优先级和布尔值的问题
// typeof count 就是字符串"number"
// !!是转为布尔值(三目运算符的变种),非空字符串布尔值为 true
// 最后才=== 比较 , true === "number" , return false
```
```js

(function(){
  var a = b = 3;
})()

console.log(typeof a === "undefined"); // false
console.log(typeof b === "undefined"); // false

// 这里涉及的就是立即执行和闭包的问题,还有变量提升,运算符执行方向(=号自左向右)
// 那个函数可以拆成这样

(function()
  var a; /* 局部变量,外部没法访问*/
  b = 3; /* 全局变量,so . window.b === 3 , 外部可以访问到*/
  a = b;
})()

// 若是改成这样,这道题应该是对的
console.log(typeof b === "number" && b ===3
); // true
```
```js

function foo(something){
  this.a = something;
}

var obj1 = {
  foo:foo
};

var obj2 = {};

obj1.foo(2)

console.log(obj1.a) // 2 ,此时的 this 上下文还在 obj1内,若是 obj1.foo 先保存当做引用再执行传参,则上下文为 window

obj1.foo.call(obj2,3); // 用 call 强行改变上下文为 obj2内
console.log(obj2.a); // 3

var  bar = new obj1.foo(4); // 这里产生了一个实例
console.log(obj1.a); // 2
console.log(bar.a); // 4;  new的绑定比隐式和显式绑定优先级更高
```
```js
function fn(){
 alert(a);
 var a = 200;
 alert(a);
}

fn(); // undefined / 200 ; 涉及变量提升
alert(a); // undefined
var a;
alert(a); // undefined

var a = 300;
alert(a); // 300
```
```js
var obj1= {
  name:'obj1',
  fn:function(){
    console.log(this.name);
  }
};

var obj2 = {name:'obj2'};
var obj3 = {name:'obj3'};

// 这道题主要涉及的是 this 指向的问题..
obj1.fn(); // obj1

var newFn = obj1.fn;
newFn(); // undefined, this 指向 window

newFn.call(obj2);// obj2, this 指向 obj2

obj3.fn = newFn;
/*
ƒ (){
    console.log(this.name);
  }
*/

obj3.fn(); // 这里指向的是 obj3 .所以输出 obj3
```
```js

// 这道题来作为笔试题很绕,因为要回答的答案很多(脑海构思)..反正我是遇到了..
// 这道题主要考核的是对原型链继承这块的理解
function Parent(){
  this.a = 1;
  this.b = [1,2,this.a];
  this.c = {demo:5};
  this.show = function(){
   console.log(this.a + '' + this.c.demo + ':' + this.b)
  }
}

function Child(){
  this.a  = 2;
  this.change = function(){
    this.b.push(this.a);
    this.a = this.b.length;
    this.c.demo = this.a++;
  }

}

Child.prototype = new Parent();
var parent = new Parent();
var child1 = new Child();
var child2 = new Child();

child1.a = 11;
child2.a = 12;

// 这前面几个还算简单,继续看下去
parent.show(); // 15:1,2,1

// 因为 Child 自身没有 show 的方法,所以往原型链的上游找;
// 找到父类的,this 因为没更改,所以输出结果如下
child1.show(); // 115:1,2,1
child2.show(); // 125:1,2,1

child1.change();  // 改变一些数据,没有输出
child2.change();  // +1

parent.show(); // 15:1,2,1

child1.show(); // 55:1,2,1,11,12
child2.show(); // 65:1,2,1,11,12
```
```js

// 这道题也很绕,函数递归调用的


function test(a,b){
  console.log(b);
  return {
    test:function(c){
       return test(c,a);
    }
};

// 这道题的理解,拆成这样就好理解了
/*function test(a,b){
  console.log("a:"+a,"b:"+b);
  return {
    test:function(c){
       console.log("a:"+a,"b:"+b,"c"+c);
       return test(c,a);
    }
  }

}*/



var a = test(100); // undefined, 这个是不言而喻的;
a.test(200); //  100;
a.test(300); // 100;

var b =  test(101).test(201).test(301); // undefined/101/201


var c =  test(102).test(202); // undefined / 102

c.test(302); // 202
```
### 有字符串 var test='abc345efgabcab'; 请根据提示实现对应要求
- 去掉字符串中的 a,b,c 字符 ,形成结果'345efg';
```js
test.replace(/[abc]/g,''); // "345efg"
```
- 将字符串的数字用括号括起来, 形成结果: abc[3][4][5]efg....'
```js

test.replace(/\d/g,'[$&]');  // "abc[3][4][5]efgabcab"

// 若是有分组则按照$1, $2, $3的形式进行引用，而 $& 则表示的是整个正则表达式匹配的内容。
```
- 将字符串中的每个数字的值分别乘以2,输出:'abc6810....'
```js

var temp = test.split('').map(function(item){
  return /^\d$/.test(item) ? item * 2 : item;
}).join('');

// "abc6810efgabcab"
```
### 使用不少于三种方式替换文本"dream"改成"package",提供字符串"I have a dream";
- 正则替换
```js
// 这是最简单的代码量了..
var str = "I have a dream";
str.replace(/dream/g,"package");

// 不用正则也可以直接字符串替换
str.replace("dream","package")
```
- 数组遍历更改
```js
// 很直白的大脑回路
var str = "I have a dream";

str.split(" ").map(function(item){
 return  item === "dream" ? item = "package":item;
}).join(" ");
```
- 数组查询切割法
```js
var str = "I have a dream";

var tempArr = str.split(" "); // ["I", "have", "a", "dream"]
var removeIndex = tempArr.indexOf('dream'); // 3

tempArr.splice(removeIndex,1,"package");

var transStr = tempArr.join(" "); // "I have a package";
```
### 闭包
- 闭包就是能够读取其他函数内部变量的函数
- 闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域
- 闭包的特性：
  - 函数内再嵌套函数
  - 内部函数可以引用外层的参数和变量
  - 参数和变量不会被垃圾回收机制回收
#### 说说你对闭包的理解
- 使用闭包主要是为了设计私有的方法和变量。闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。在js中，函数即闭包，只有函数才会产生作用域的概念
- 闭包 的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中
- 闭包的另一个用处，是封装对象的私有属性和私有方法
- 好处：能够实现封装和缓存等；
- 坏处：就是消耗内存、不正当使用会造成内存溢出的问题
#### 使用闭包的注意点
- 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露
- 解决方法是，在退出函数之前，将不使用的局部变量全部删除
### 说说你对作用域链的理解
- 作用域链的作用是保证执行环境里有权访问的变量和函数是有序的，作用域链的变量只能向上访问，变量访问到window对象即被终止，作用域链向下访问变量是不被允许的
- 简单的说，作用域就是变量与函数的可访问范围，即作用域控制着变量与函数的可见性和生命周期
### 谈谈This对象的理解
- this总是指向函数的直接调用者（而非间接调用者）
- 如果有new关键字，this指向new出来的那个对象
- 在事件中，this指向触发这个事件的对象，特殊的是，IE中的attachEvent中的this总是指向全局对象Window
### offsetWidth/offsetHeight,clientWidth/clientHeight与scrollWidth/scrollHeight的区别
- offsetWidth/offsetHeight返回值包含content + padding + border，效果与e.getBoundingClientRect()相同

- clientWidth/clientHeight返回值只包含content + padding，如果有滚动条，也不包含滚动条


- scrollWidth/scrollHeight返回值包含content + padding + 溢出内容的尺寸
### javascript有哪些方法定义对象
- 对象字面量： var obj = {};
- 构造函数： var obj = new Object();
- Object.create(): var obj = Object.create(Object.prototype);
### 说几条写JavaScript的基本规范？
- 不要在同一行声明多个变量
- 请使用===/!==来比较true/false或者数值
- 使用对象字面量替代new Array这种形式
- 不要使用全局函数

- Switch语句必须带有default分支

- If语句必须使用大括号

- for-in循环中的变量 应该使用var关键字明确限定作用域，从而避免作用域污
### javascript 代码中的"use strict";是什么意思 ? 使用它区别是什么？
- use strict是一种ECMAscript 5 添加的（严格）运行模式,这种模式使得 Javascript 在更严格的条件下运行,使JS编码更加规范化的模式,消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为
### 同步和异步的区别?
- 同步：浏览器访问服务器请求，用户看得到页面刷新，重新发请求,等请求完，页面刷新，新内容出现，用户看到新内容,进行下一步操作
- 异步：浏览器访问服务器请求，用户正常操作，浏览器后端进行请求。等请求完，页面不刷新，新内容也会出现，用户看到新内容
### 异步编程的实现方式？
- 回调函数

  - 优点：简单、容易理解
  - 缺点：不利于维护，代码耦合高
- 事件监听(采用时间驱动模式，取决于某个事件是否发生)：

  - 优点：容易理解，可以绑定多个事件，每个事件可以指定多个回调函数
  - 缺点：事件驱动型，流程不够清晰
- 发布/订阅(观察者模式)

  - 类似于事件监听，但是可以通过‘消息中心’，了解现在有多少发布者，多少订阅者
- Promise对象

  - 优点：可以利用then方法，进行链式写法；可以书写错误时的回调函数；
  - 缺点：编写和理解，相对比较难
- Generator函数

  - 优点：函数体内外的数据交换、错误处理机制
  - 缺点：流程管理不方便
- async函数

  - 优点：内置执行器、更好的语义、更广的适用性、返回的是Promise、结构清晰。
  - 缺点：错误处理机制

### new的实现原理是什么？

`new` 的实现原理:

1. 创建一个空对象，构造函数中的this指向这个空对象

2. 这个新对象被执行 [[原型]] 连接

3. 执行构造函数方法，属性和方法被添加到this引用的对象中

4. 如果构造函数中没有返回其它对象，那么返回this，即创建的这个的新对象，否则，返回构造函数中返回的对象。
```js
function _new() {
  let target = {}; //创建的新对象
  //第一个参数是构造函数
  let [constructor,...args] = [arguments];
  //执行[[原型]]连接；targrt 是 constructor 的实例；
  target._proto_ = constructor.prototype;
  let result = constructor.apply(target,args);
  if(result && (typeof (result) === "object" || typeof (result) === "function")){
    //如果构造函数执行的结果返回的是个对象，那么就返回这个对象；
    return result;
  }
  //如果构造函数返回的不是一个对象，返回创建的对象；
  return target;
}
```
###  如何正确判断this的指向？
如果用一句话说明 this 的指向，那么即是: 谁调用它，this 就指向谁。

但是仅通过这句话，我们很多时候并不能准确判断 this 的指向。因此我们需要借助一些规则去帮助自己：
this 的指向可以按照以下顺序判断:
- 全局环境中的 this

浏览器环境：无论是否在严格模式下，在全局执行环境中（在任何函数体外部）this 都指向全局对象 `window`;

`node` 环境：无论是否在严格模式下，在全局执行环境中（在任何函数体外部），this 都是空对象 {};
- 是否是 new 绑定

如果是 new 绑定，并且构造函数中没有返回 function 或者是 object，那么 this 指向这个新对象。如下:
```js
//构造函数返回值不是 function 或 object。new Super() 返回的是 this 对象。
function Super (age) {
  this.age = age;
}
let instance = new Super('26');
console.log(instance.age)//26
```
```js
//构造函数返回值是 function 或 object，new Super()是返回的是Super种返回的对象。
function Super (age) {
  this.age = age;
  const obj = {a: '2'};
  return obj;
}
let instance = new Super('hello');
console.log(instance) //{a:'2'}
console.log(instance.age)//undefined
```
- 函数是否通过 call,apply 调用，或者使用了 bind 绑定，如果是，那么this绑定的就是指定的对象【归结为显式绑定】。

```js
function info(){
//node环境下：非严格模式 global 严格模式为 null
//浏览器环境下：非严格模式 window 严格模式为 null
console.log(this);
console.log(this.age);
}
var parson = {
  age:20,
  info,
}
var age = 28;
var info = parson.info;
//严格模式抛出错误
//非严格模式 ，node下输出undefiend(因为全局的age不会挂在global上)
//非严格模式下， 浏览器下输出 28 （因为全局age会挂在window上）
info.call(null);
```
- 隐式绑定，函数的调用是在某个对象上触发的，即调用位置上存在上下文对象。典型的隐式调用为:` xxx.fn()`
```js
function info(){
  console.log(this.age);
}
var person = {
  age:20,
  info
}
var age = 28;
person.info();//20;执行的是隐式绑定
```
- 默认绑定，在不能应用其它绑定规则时使用的默认规则，通常是独立函数调用。

非严格模式： node环境，执行全局对象 global，浏览器环境，执行全局对象 window。

严格模式：执行 undefined
```js
function info(){
console.log(this.age);
}
var age = 28;
info();
//严格模式抛出错误
//非严格模式 ，node下输出undefiend(因为全局的age不会挂在global上)
//非严格模式下， 浏览器下输出 28 （因为全局age会挂在window上）
```
- 箭头函数的情况：
箭头函数没有自己的this，继承外层上下文绑定的this。
```js
let obj = {
  age:20,
  info:function (){
    return ()=>{
      console.log(this.age);//this继承的是上级绑定的this
    }
  }
}
let person = {age:28};
let info = obj.info();
info();//20
let info2 = obj.info.call(person);
info2();//28
```
### 深拷贝和浅拷贝的区别是什么？实现一个深拷贝
深拷贝和浅拷贝是针对复杂数据类型来说的，浅拷贝只拷贝一层，而深拷贝是层层拷贝。
- 深拷贝
深拷贝复制变量值，对于非基本类型的变量，则递归至基本类型变量后，再复制。 深拷贝后的对象与原来的对象是完全隔离的，互不影响，对一个对象的修改并不会影响另一个对象。
- 浅拷贝
浅拷贝是会将对象的每个属性进行依次复制，但是当对象的属性值是引用类型时，实质复制的是其引用，当引用指向的值改变时也会跟着变化。
可以使用 `for in`、 `Object.assign`、 扩展运算符 ... 、`Array.prototype.slice()`、`Array.prototype.concat()` 等，例如:
###  call/apply 的实现原理是什么？

### 柯里化函数实现

### 如何让 (a == 1 && a == 2 && a == 3) 的值为true？

### 什么是BFC？BFC的布局规则是什么？如何创建BFC？

### 异步加载JS脚本的方式有哪些？

### ES5有几种方式可以实现继承？分别有哪些优缺点？

### 隐藏页面中的某个元素的方法有哪些？

### let、const、var 的区别有哪些？

### 说一说你对JS执行上下文栈和作用域链的理解？
### 防抖函数的作用是什么？请实现一个防抖函数
### 节流函数的作用是什么？有哪些应用场景，请实现一个节流函数

### 什么是闭包？闭包的作用是什么？
### 实现 Promise.all 方法
###  请实现一个 flattenDeep 函数，把嵌套的数组扁平化
### 请实现一个 uniq 函数，实现数组去重
### 请实现一个 uniq 函数，实现数组去重
### JSONP 的原理是什么？


### 参考文章

- [fe-interview](https://microzz.com/2017/02/01/fe-interview/)
- [Front-end-Developer-Interview-Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions)
- [几道高级前端面试题解析](https://juejin.im/post/5aa8a07cf265da238a3022a4)
- [面试的信心来源于过硬的基础](https://segmentfault.com/a/1190000013331105)
- [2018 美团前端面试题，两年经验，你能答对几道？](https://juejin.im/post/5a96c6326fb9a063626408c8)
- [面试分享：专科半年经验面试阿里前端 P6+总结(附面试真题及答案)](https://juejin.im/post/5a92c23b5188257a6b06110b)
- [tcp、http 面试指南](https://juejin.im/post/5ad4094e6fb9a028d7011069)
- [几道 JS 代码手写题以及一些代码实现](https://juejin.im/post/5aa7d82c6fb9a028c522de43)
- [当面试官问你如何进行性能优化时，你该这么回答(一)](https://juejin.im/post/5a99f80cf265da238c3a1e16)
- [记录面试中一些回答不够好的题（Vue 居多）](https://juejin.im/post/5a9b8417518825558251ce15)
- [面试分享：2018 阿里巴巴前端面试总结](https://juejin.im/post/5ab0da85f265da23866fb9b7#heading-19)
- [大厂前端面试考什么?](https://juejin.im/post/5ab70735f265da237a4cf9b1)
- [2018 春招前端面试: 闯关记(精排精校)](https://juejin.im/post/5a998991f265da237f1dbdf9#heading-11)
- [3 月前端知识集锦](https://juejin.im/post/5abb22925188255c4c1050e0)
- [前端常见问题整理](https://juejin.im/post/5ac43e7c6fb9a028d1414f84)
- [面试总结 JavaScript 篇](https://segmentfault.com/a/1190000014321635?utm_source=index-hottest)
- [面试带你飞：这是一份全面的 计算机网络基础 总结攻略](https://juejin.im/post/5ad7e6c35188252ebd06acfa)
- [前端面试考点多？看这些文章就够了](https://juejin.im/post/5aae076d6fb9a028cc6100a9)
- [前端知识集锦](https://juejin.im/post/5a961d496fb9a06356314a36)
- [前端面试之 ES6 篇（高产似母猪）](https://juejin.im/post/59c8aec0f265da065c5e965e)
- [浏览器缓存知识小结及应用](http://www.cnblogs.com/lyzg/p/5125934.html)