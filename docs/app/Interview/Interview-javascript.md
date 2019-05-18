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