# 类型判断

## typeof

```js

  * typeof转义:

    Undefined、Null、Boolean、Number、String、Object

    undefined、object、boolean、number、string、object

```

## Object.prototype.toString

返回一个表示该对象的字符串

```js

  - :

    var toString = Object.prototype.toString;

    toString.call(new Date);        // [object Date]
    toString.call(new String);      // [object String]
    toString.call(Math);            // [object Math]
    toString.call(JSON);            // [object JSON]
    toString.call(new Error);       // [object Error]
    toString.call(new RegExp);      // [object RegExp]
    toString.call(new Number);      // [object Number]
    toString.call(new Array);       // [object Array]
    toString.call(new Object);      // [object Object]
    toString.call(() => {});        // [object Function]

                                    // Since JavaScript 1.8.5
    toString.call(undefined);       // [object Undefined]
    toString.call(null);            // [object Null]

  tips: 在 IE6 中，null 和 undefined 会被 Object.prototype.toString 识别成 [object Object]
```

## instaceof

instanceof 运算符用于测试构造函数的 prototype 属性是否出现在对象的原型链中的任何位置

```js
var o = new C();
o instanceof C; // true
```

## 工具函数

```js

  - .../baseType.js

    var class2type = {};

    var typeList = "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " );
    typeList.forEach(function (item) {
      class2type["[object " + item + "]"] = item.toLowerCase();
    });

    function type(obj) {
      if (obj == null) {
        return obj + "";
      }
      return typeof obj === "object" || typeof obj === "function" ?
        class2type[ Object.prototype.toString.call(obj) ] || "object" :
        typeof obj;
    }

  - .../type.js

    function isFunction(val) {
      return type(val) === "function";
    }

    function isArray(val) {
      return Array.isArray || type(val) === "array";
    }
```

```js
function isWindow(obj) {
  return obj != null && obj === obj.window;
}
```

```js
function isEmptyObject(obj) {
  var name;
  for (name in obj) {
    return false;
  }
  return true;
}
```

## 参考文章

- [jquery](https://github.com/jquery/jquery/blob/ac9e3016645078e1e42120822cfb2076151c8cbe/src/core.js#L269)
- [MDN - toString](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
