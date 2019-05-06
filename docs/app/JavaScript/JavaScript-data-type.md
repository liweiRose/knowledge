# 数据类型简析

JavaScript 是一种弱类型或者说动态语言。这意味着你不用提前声明变量的类型，在程序运行过程中，类型会被自动确定。
最新的 ECMAScript 标准定义了 7 种数据类型：

- 6 种原始类型:

  - Undefined
  - Null
  - Number
  - String
  - Boolean
  - Symbol (ECMAScript 6 新定义)

- Object

## 原始类型

- 是一种既非对象也无方法的数据
- 除了 null 和 undefined 之外，所有基本类型都有其对应的包装对象, 其 valueOf() 方法返回基本类型值
- 所有基本类型的值都是不可改变的

```js

  * 使用字符串方法不会改变一个字符串

    var bar = 'baz';
    bar.toUpperCase(); // baz


  * 使用数组方法可以改变一个数组

    var foo = [];
    foo.push('change'); // [ 'change' ]


  * 赋值行为可以给基本类型一个新值，而不是改变它
  * 基本类型值可以被替换，但不能被改变。

    bar = bar.toUpperCase(); // BAZ


  * JavaScript会将传递进来的参数（基本类型的值）复制一份，创建一个本地副本

    let foo = 5;
    function addTwo(num) {
      num += 2;
    }
    addTwo(foo); // 5


```

### Undefined

```js
 * 全局属性 undefined 表示原始值 undefined
 * undefined 的最初值就是原始数据类型 undefined
 * undefined 是一个不能被配置（non-configurable），不能被重写（non-writable）的属性
 * 一个没有被赋值的变量的类型是 undefined
 * 如果方法或者是语句中操作的变量没有被赋值，则会返回undefined


  var x;

  x === undefined; // true

  typeof y === 'undefined'; // true

  y === undefined; // ReferenceError: y is not defined

  x === void 0; // true

  y === void 0; // throw RenferenceError

```

### Null

表示一个不存在或者无效 object 或者地址引用。

```js

  * null 与 undefined 的不同点

    typeof null;          // "object" (因为一些以前的原因而不是'null')
    typeof undefined;     // "undefined"
    null === undefined;   // false
    null == undefined;    // true
    null === null;        // true
    null == null;         // true
    !null;                // true

```

### Number

64 位双精度浮点型( Doubles )的数字数据类型

```js
var n_prim = 8;
var n_obj = new Number(n_prim);

console.log(typeof n_prim); // Logs "number"
console.log(typeof n_obj); // Logs "object"
```

#### 包装对象

Number 对象是经过封装的能让你处理数字值的对象

```js

Number('123');    // 123
Number('');       // 0
Number('0x11');   // 17
Number('0b11');   // 3
Number('0o11');   // 9
Number('foo');    // NaN
Number('100a');   // NaN

* API

  * Number.MAX_VALUE              => 能表示的最大正数 最小的负数是 -MAX_VALUE
  * Number.MIN_VALUE              => 能表示的最小正数即最接近 0 的正数 (实际上不会变成 0)。最大的负数是 -MIN_VALUE
  * Number.isNaN()                => 传递的值是否为 NaN和其类型是 Number
  * Number.parseInt()             => 根据给定的进制数把一个字符串解析成整数 和全局对象 parseInt() 一样
  * Number.parseFloat()           => 把一个字符串解析成浮点数 和全局对象 parseFloat() 一样

  * Number.prototype.toFixed()    => 使用定点表示法来格式化一个数

    Number.parseFloat(123.456).toFixed(2); // 123.45

```

### String

```js

  * 表示字符类型

    var s_prim = 'foo';
    var s_obj = new String(s_prim);

    console.log(typeof s_prim); // Logs "string"
    console.log(typeof s_obj); // Logs "object"

```

#### 包装对象

String 全局对象是一个用于字符串或一个字符序列的构造函数。

```js

  * API

    * String.prototype.length             => 字符串的长度

    * String.prototype.constructor        => 创造对象的原型对象的特定的函数

    * String.prototype.charAt()           => 返回特定位置的字符

        var anyString = "Brave new world";
        anyString.charAt(0); // 'B'


    * String.prototype.concat()           => 连接两个字符串文本，并返回一个新的字符串

        var anyString = "Brave new world";
        anyString.concat(", Kevin", " nice") // Brave new world, Kevin nice


    * String.prototype.includes()         => 判断一个字符串里是否包含其他字符串,返回 true 或 false

        var anyString = "Brave new world";
        anyString.includes('new'); // true


    * String.prototype.indexOf()          => 从字符串对象中返回首个被发现的给定值的索引值，如果没有找到则返回-1
    * String.prototype.lastIndexOf()      => 从字符串对象中返回最后一个被发现的给定值的索引值，如果没有找到则返回-1

        var anyString = "Brave new world";
        anyString.indexOf('new'); // 6


    * String.prototype.replace()          => 被用来在正则表达式和字符串直接比较，然后用新的子串来替换被匹配的子串, 原字符串不会改变

        var anyString = "Brave new world";
        var regex = /r/gi;
        anyString.replace(regex, 'R');        // BRave new woRld
        anyString.replace('world', 'worlds'); // Brave new worlds


    * String.prototype.slice()            => 提取一个字符串区域，返回一个新的字符串

        var anyString = "Brave new world";
        anyString.slice(4, -2); // e new wor
        anyString.slice(1, 4);  // rav


    * String.prototype.split()            => 使用指定的分隔符字符串将一个String对象分割成字符串数组

        var anyString = "Brave new world";
        anyString.split(" ", 2); // ["Brave", "new"]
        anyString.split(" ");    // ["Brave", "new", "world"]


    * String.prototype.trim()             => 从一个字符串的两端删除空白字符

        var anyString = " Brave new world ";
        anyString.trim(); // 'Brave new world'


    * String.prototype.toLocaleLowerCase()  => 返回调用字符串值转换为小写的值。
    * String.prototype.toLocaleUpperCase()  => 返回调用字符串值转换为大写的值。

        var anyString = " Brave new world ";
        anyString.toLocaleLowerCase(); // 'Brave new world'


    * String.prototype.substr()           => 返回一个字符串中从指定位置开始到指定字符数的字符

        var anyString = "Brave new world";
        anyString.substr(-4, 4); // orld
        anyString.substr(1, 4);  // rave

    * String.prototype.substring()        => 返回一个字符串在开始索引到结束索引之间的一个子集

        var anyString = "Brave new world";
        anyString.substring(0, 4); // Brav
        anyString.substring(4, 0);  // Brav
        anyString.substring(4, -4);  // Brav

```

### Boolean

表示布尔类型, true, false

```js

  0、-0、null、false、NaN、undefined、""     =>   false

```

#### 包装对象

Boolean 对象是一个布尔值的对象包装器

```js

TIPS:

  * 当 Boolean 对象用于条件语句的时候，任何不是 undefined 和 null 的对象，包括值为 false 的 Boolean 对象，都会被当做 true 来对待。

    var x = new Boolean(false);
    if (x) {
      // 这里的代码会被执行
    }

  * 不要用创建 Boolean 对象的方式将一个非布尔值转化成布尔值，直接将 Boolean 当做转换函数来使用即可

    var x = Boolean(expression);        // 推荐
    var x = new Boolean(expression);    // 不推荐

  * 对于任何对象，即使是值为 false 的 Boolean 对象，当将其传给 Boolean 函数时，生成的 Boolean 对象的值都是 true

    var myFalse = new Boolean(false);   // false
    var g = new Boolean(myFalse);       // true

```

### Symbol

- Symbol()函数会返回 [symbol](http://es6.ruanyifeng.com/#docs/symbol) 类型的值，该类型具有静态属性和静态方法
- 返回的 symbol 值都是唯一的
- 它的静态属性会暴露几个内建的成员对象
- 它的静态方法会暴露全局的 symbol 注册，且类似于内建对象类
- 该内建对象类作为构造函数来说它并不完整，因为它不支持语法："new Symbol()"
- 一个 symbol 值能作为对象属性的标识符；这是该数据类型仅有的目的

```js
var sym1 = Symbol();
var sym2 = Symbol('foo');
typeof sym; // "symbol"
Symbol('foo') === Symbol('foo'); // false
var sym = new Symbol(); // TypeError
```

## 复杂类型

按引用引用

### Object

Object 构造函数为给定值创建一个对象包装器。如果给定值是 null 或 undefined，将会创建并返回一个空对象，否则，将返回一个与给定值对应类型的对象。

#### 初始化对象

```js

  * 字面量标记
    let obj = {};

  * 构造函数
    let obj = new Object()

  * Object.create()
    let obj = Object.create({})

```

```js

* API:

  * Object.assign()                  => 通过复制一个或多个对象来创建一个新的对象

    const obj = { a: 1 };
    const copy = Object.assign({}, obj); // { a: 1 }

    * Object.assign()拷贝的是属性值。假如源对象的属性值是一个对象的引用，那么它也只指向那个引用.

        let obj1 = { a: 0 , b: { c: 0}};
        let obj2 = Object.assign({}, obj1);
        console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}

        obj1.a = 1;
        console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
        console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}

        obj2.a = 2;
        console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
        console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 0}}

        obj2.b.c = 3;
        console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 3}}
        console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 3}}


  * Object.defineProperty()          => 直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象

    var o = {};
    Object.defineProperty(o, "a", {
      value : 37,
      writable : true,
      enumerable : true,
      configurable : true
    });
    o.a; // 37

    var bValue;
    Object.defineProperty(o, "b", {
      get : function(){
        return bValue;
      },
      set : function(newValue){
        bValue = newValue;
      },
      enumerable : true,
      configurable : true
    });
    o.b = 38;
    o.b; // 38


  * Object.freeze()                  => 冻结一个对象, 被冻结的对象再也不能被修改

    const object1 = {
      property1: 42
    };
    const object2 = Object.freeze(object1);
    object2.property1 = 33;                 // Throws an error in strict mode
    console.log(object2.property1);         // expected output: 42


  * Object.entries()                  => 返回一个给定对象自身可枚举属性的键值对数组

    const object1 = { foo: 'bar', baz: 42 };
    console.log(Object.entries(object1)[1]); // ["baz", 42]


  * Object.values()                   => 返回给定对象自身可枚举值的数组
  * Object.keys()                     => 返回一个包含所有给定对象自身可枚举属性名称的数组


  * Object.is()                       => 比较两个值是否相同。所有 NaN 值都相等（这与==和===不同)

      Object.is('foo', 'foo');     // true
      Object.is(window, window);   // true

      Object.is('foo', 'bar');     // false
      Object.is([], []);           // false

      var foo = { a: 1 };
      var bar = { a: 1 };
      Object.is(foo, foo);         // true
      Object.is(foo, bar);         // false

      Object.is(null, null);       // true

      // 特例
      Object.is(0, -0);            // false
      Object.is(-0, -0);           // true
      Object.is(NaN, 0/0);         // true
```

### Array

- [数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)是一种类列表对象
- 原型中提供了遍历和修改元素的相关操作
- 只能用整数作为数组元素的索引，而不能用字符串

```js
let arr = [];
let arr = new Array();
```

```js

  * API

    * Array.from()               => 从一个类似数组或可迭代对象中创建一个新的数组实例

      Array.from('foo');                              // ["f", "o", "o"]
      Array.from([1, 2, 3], x => x + x);              // [2, 4, 6]
      Array.from(new Set(['foo', window]));           // ["foo", window]
      Array.from(new Map([[1, 2], [2, 4], [4, 8]]));  // [[1, 2], [2, 4], [4, 8]]

      const func = () => Array.from(arguments);
      func(1, 2, 3);                                  // [1, 2, 3]


    * Array.isArray()            => 确定传递的值是否是一个 Array

      Array.isArray([1, 2, 3]);     // true
      Array.isArray({foo: 123});    // false
      Array.isArray("foobar");      // false
      Array.isArray(undefined);     // false

      * Array.isArray 优于 instanceof,因为Array.isArray能检测iframes.

        var iframe = document.createElement('iframe');
        document.body.appendChild(iframe);
        xArray = window.frames[window.frames.length-1].Array;
        var arr = new xArray(1,2,3); // [1,2,3]
        Array.isArray(arr);          // true
        arr instanceof Array;        // false


    * Array.of()                 => 从一个类似数组或可迭代对象中创建一个新的数组实例

      Array.of(7);       // [7]
      Array.of(1, 2, 3); // [1, 2, 3]
      Array.of(undefined); // [undefined]

      Array(7);          // [ , , , , , , ]
      Array(1, 2, 3);    // [1, 2, 3]

    * 修改器方法

      这些方法会改变调用它们的对象自身的值

        * Array.prototype.fill()        => 将数组中指定区间的所有元素的值，都替换成某个固定的值
        * Array.prototype.pop()         => 删除数组的最后一个元素，并返回这个元素
        * Array.prototype.shift()       => 删除数组的第一个元素，并返回这个元素
        * Array.prototype.push()        => 在数组的末尾增加一个或多个元素，并返回数组的新长度
        * Array.prototype.reverse()     => 颠倒数组中元素的排列顺序，即原先的第一个变为最后一个，原先的最后一个变为第一个
        * Array.prototype.sort()        => 对数组元素进行排序，并返回当前数组
        * Array.prototype.splice()      => 在任意的位置给数组添加或删除任意个元素
        * Array.prototype.unshift()     => 在数组的开头增加一个或多个元素，并返回数组的新长度

    * 访问方法

      这些方法绝对不会改变调用它们的对象的值，只会返回一个新的数组或者返回一个其它的期望值

        * Array.prototype.concat()      => 返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组
        * Array.prototype.includes()    => 判断当前数组是否包含某指定的值，如果是返回 true，否则返回 false
        * Array.prototype.join()        => 连接所有数组元素组成一个字符串
        * Array.prototype.slice()       => 抽取当前数组中的一段元素组合成一个新数组
        * Array.prototype.indexOf()     => 返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1
        * Array.prototype.lastIndexOf() => 返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1

    * 迭代方法

      指定一个回调函数作为参数。在每一个数组元素都分别执行回调函数

        * Array.prototype.forEach()     => 为数组中的每个元素执行一次回调函数
        * Array.prototype.map()         => 返回一个由回调函数的返回值组成的新数组
        * Array.prototype.every()       => 如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false
        * Array.prototype.some()        => 如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false
        * Array.prototype.filter()      => 将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回
        * Array.prototype.reduce()      => 从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。

        * Array.prototype.find()        => 找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined
        * Array.prototype.findIndex()   => 找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1
        * Array.prototype.entries()     => 返回一个数组迭代器对象，该迭代器会包含所有数组元素的键值对
        * Array.prototype.values()      => 返回一个数组迭代器对象，该迭代器会包含所有数组元素的值
        * Array.prototype.keys()        => 返回一个数组迭代器对象，该迭代器会包含所有数组元素的键
```

### Date

Date 对象基于 1970 年 1 月 1 日（世界标准时间）起的毫秒数。

```js

new Date();
new Date(value);
new Date(dateString);
new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);

```

```js
* API

  * Date.now()                          => 返回自 1970-1-1 00:00:00  UTC (世界标准时间)至今所经过的毫秒数
  * Date.parse()                        => 解析一个表示日期的字符串，并返回从 1970-1-1 00:00:00 所经过的毫秒数
  * Date.prototype.getDay()             => 根据本地时间返回指定日期对象的星期中的第几天（0-6）0 表示星期天
  *
  * Date.prototype.getFullYear()        => 根据本地时间返回指定日期对象的年份（四位数年份时返回四位数字）
  * Date.prototype.getMonth()           => 根据本地时间返回指定日期对象的月份（0-11）
  * Date.prototype.getDate()            => 根据本地时间返回指定日期对象的月份中的第几天（1-31)
  *
  * Date.prototype.getHours()           => 根据本地时间返回指定日期对象的小时（0-23）
  * Date.prototype.getMinutes()         => 根据本地时间返回指定日期对象的分钟（0-59）
  * Date.prototype.getSeconds()         => 根据本地时间返回指定日期对象的秒数（0-59）

```

### Math

- Math 是一个内置对象， 它具有数学常数和函数的属性和方法。不是一个函数对象
- Math 不是一个构造器. Math 的所有属性和方法都是静态的

```js
 * API

   * Math.PI                      => 圆周率，一个圆的周长和直径之比，约等于 3.14159
   * Math.abs(x)                  => 返回x的绝对值
   * Math.ceil(x)                 => 返回x向上取整后的值
   * Math.random()                => 返回0到1之间的伪随机数
```

### RegExp

[RegExp](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 构造函数创建了一个正则表达式对象，用于将文本与一个模式匹配。

```js
var regex1 = /\w+/;
var regex2 = new RegExp('\\w+');

console.log(regex1); // /\w+/
console.log(regex2); // /\w+/
console.log(regex1 === regex2); // false
```

### Function

Function 构造函数 创建一个新的 Function 对象。 在 JavaScript 中, 每个函数实际上都是一个 Function 对象

```js

  * new Function ([arg1[, arg2[, ...argN]],] functionBody)

    var sum = new Function('a', 'b', 'return a + b');
    sum(2, 6); // 8

```

```js

* API

  * arguments                      => arguments对象是所有（非箭头）函数中都可用的局部变量
  * arguments.callee               => 指向当前执行的函数

  * Function.prototype.apply()     => 在一个对象的上下文中应用另一个对象的方法；参数能够以数组形式传入
  * Function.prototype.bind()      => bind()方法会创建一个新函数,称为绑定函数.第一个参数作为 this,
                                      第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数

  * Function.prototype.call()      => 在一个对象的上下文中应用另一个对象的方法；参数能够以列表形式传入。

```

## 参考文章

- [JavaScript 数据类型和数据结构 - MDN
  ](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)
