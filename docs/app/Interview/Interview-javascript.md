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