# 对象合并

## Object.assign()

- 该方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。并返回目标对象。

- 是一层浅拷贝

```js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target); // expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget); // expected output: Object { a: 1, b: 4, c: 5 }
```

## 实现

> 以下内容待仔细回归几遍，加深理解！

jQuery.extend() 合并两个或者更多的对象的内容到第一个对象中。以下是源代码实现：

```js
var class2type = {};
var toString = class2type.toString;
var hasOwn = class2type.hasOwnProperty;

function isPlainObject(obj) {
  var proto, Ctor;
  if (!obj || toString.call(obj) !== '[object Object]') {
    return false;
  }
  proto = Object.getPrototypeOf(obj);
  if (!proto) {
    return true;
  }
  Ctor = hasOwn.call(proto, 'constructor') && proto.constructor;
  return (
    typeof Ctor === 'function' &&
    hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object)
  );
}

function extend() {
  var deep = false; // 默认不进行深拷贝
  var name, options, src, copy, clone, copyIsArray;
  var length = arguments.length;
  var i = 1; // 记录要复制的对象的下标
  // 第一个参数不传布尔值的情况下，target 默认是第一个参数
  var target = arguments[0] || {};
  // 如果第一个参数是布尔值，第二个参数是 target
  if (typeof target == 'boolean') {
    deep = target;
    target = arguments[i] || {};
    i++;
  }
  // 如果target不是对象，我们是无法进行复制的，所以设为 {}
  if (typeof target !== 'object' && !isFunction(target)) {
    target = {};
  }

  // 循环遍历要复制的对象们
  for (; i < length; i++) {
    // 获取当前对象
    options = arguments[i];
    // 要求不能为空 避免 extend(a,,b) 这种情况
    if (options != null) {
      for (name in options) {
        // 目标属性值
        src = target[name];
        // 要复制的对象的属性值
        copy = options[name];

        // 解决循环引用
        if (target === copy) {
          continue;
        }

        // 要递归的对象必须是 plainObject 或者数组
        if (
          deep &&
          copy &&
          (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))
        ) {
          // 要复制的对象属性值类型需要与目标属性值相同
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && Array.isArray(src) ? src : [];
          } else {
            clone = src && isPlainObject(src) ? src : {};
          }

          target[name] = extend(deep, clone, copy);
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }

  return target;
}
```
