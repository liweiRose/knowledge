# 深浅拷贝

- 浅拷贝

  - 复制引用的拷贝方法称之为浅拷贝

- 深拷贝

  - 指完全的拷贝一个对象，即使嵌套了对象，两者也相互分离，修改一个对象的属性，也不会影响另一个

## 浅拷贝

> 如果数组元素是基本类型，就会拷贝一份，互不影响，而如果是对象或者数组，就会只拷贝对象和数组的引用，这样我们无论在新旧数组进行了修改，两者都会发生变化。

```js
var arr = ['old', 1, true, null, undefined];

var new_arr = arr.concat();

new_arr[0] = 'new';

console.log(arr); // ["old", 1, true, null, undefined]
console.log(new_arr); // ["new", 1, true, null, undefined]

var new_arr = arr.slice();
```

## 深拷贝

```js
var arr = ['old', 1, true, ['old1', 'old2'], { old: 1 }];

var new_arr = JSON.parse(JSON.stringify(arr));

console.log(new_arr); // ['old', 1, true, ['old1', 'old2'], {old: 1}]
```

> 此方法也可深拷贝对象

> 注： 数组中含有函数不能拷贝

> undefined 、 function 、 symbol （ES6+）和包含循环引用（对象之间相互引用，形成一个无限循环）的 对象 都不符合 JSON 结构标准，支持 JSON 的语言无法处理它们。

> JSON.stringify(..) 在对象中遇到 undefined 、 function 和 symbol 时会自动将其忽略， 在 数组中则会返回 null

> 对包含循环引用的对象执行 JSON.stringify(..) 会出错

```js
var arr = [
  function() {
    console.log(a);
  }
];

var new_arr = JSON.parse(JSON.stringify(arr));

console.log(new_arr); // [null]
```

## 简单实现

```js

  ① 浅拷贝

    var shallowCopy = function(obj) {
      // 只拷贝对象
      if (typeof obj !== 'object') return;
      // 根据obj的类型判断是新建一个数组还是对象
      var newObj = obj instanceof Array ? [] : {};
      // 遍历obj，并且判断是obj的属性才拷贝
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          newObj[key] = obj[key];
        }
      }
      return newObj;
    };

  ② 深拷贝

  var deepCopy = function(obj) {
    if (typeof obj !== 'object') return;
    var newObj = obj instanceof Array ? [] : {};
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
      }
    }
    return newObj;
  }

```
