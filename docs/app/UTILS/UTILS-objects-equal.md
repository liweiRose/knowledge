# 相等判断

## +0 与 -0

- JavaScript 采用了 IEEE_754 浮点数表示法，这是一种二进制表示法
- 标准规定最高位是符号位(0 代表正，1 代表负)，剩下的用于表示大小
- 而对于零这个边界值 ，1000(-0) 和 0000(0)都是表示 0

```js

  - 特殊性:

    +0 === -0;                               // true

    -0 < +0;                                 // false
    +0 < -0;                                 // false

    (-0).toString();                         // '0'
    (+0).toString();                         // '0'

    (+0).toString() === (-0).toString();     // true

    1 / +0;                                  // Infinity
    1 / -0;                                  // -Infinity

    1 / +0 === 1 / -0;                       // false


  - 正确比较:

    function eq(a, b) {
      if (a === b) return a !== 0 || 1 / a === 1 / b;
      return false;
    }

    Object.is() // 判断两个值是否是相同的值

    eq(+0, -0);                               // false
    Object.is(+0, -0);                        // false
```

## NaN

```js
  - 特殊性:

    NaN === NaN;                        // false
    NaN == NaN;                         // false

  - 正确比较:

    function eq(a, b) {
      if (a !== a) return b !== b;
    }

    Object.is()

    eq(NaN, NaN);                       // true
    Object.is(NaN, NaN);                // true
```

> tips: Object.is()

```js
Object.is([], []); // false

var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo); // true
Object.is(foo, bar); // false
```

## underscore「eq」源码

> 以下内容待仔细回归几遍，加深理解！

```js
var toString = Object.prototype.toString;

function isFunction(obj) {
  return toString.call(obj) === '[object Function]';
}

function eq(a, b, aStack, bStack) {
  // === 结果为 true 的区别出 +0 和 -0
  if (a === b) return a !== 0 || 1 / a === 1 / b;

  // typeof null 的结果为 object ，这里做判断，是为了让有 null 的情况尽早退出函数
  if (a == null || b == null) return false;

  // 判断 NaN
  if (a !== a) return b !== b;

  // 判断参数 a 类型，如果是基本类型，在这里可以直接返回 false
  var type = typeof a;
  if (type !== 'function' && type !== 'object' && typeof b != 'object')
    return false;

  // 更复杂的对象使用 deepEq 函数进行深度比较
  return deepEq(a, b, aStack, bStack);
}

function deepEq(a, b, aStack, bStack) {
  // a 和 b 的内部属性 [[class]] 相同时 返回 true
  var className = toString.call(a);
  if (className !== toString.call(b)) return false;

  switch (className) {
    case '[object RegExp]':
    case '[object String]':
      return '' + a === '' + b;
    case '[object Number]':
      if (+a !== +a) return +b !== +b;
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case '[object Date]':
    case '[object Boolean]':
      return +a === +b;
  }

  var areArrays = className === '[object Array]';
  // 不是数组
  if (!areArrays) {
    // 过滤掉两个函数的情况
    if (typeof a != 'object' || typeof b != 'object') return false;

    var aCtor = a.constructor,
      bCtor = b.constructor;
    // aCtor 和 bCtor 必须都存在并且都不是 Object 构造函数的情况下，aCtor 不等于 bCtor， 那这两个对象就真的不相等啦
    if (
      aCtor !== bCtor &&
      !(
        isFunction(aCtor) &&
        aCtor instanceof aCtor &&
        isFunction(bCtor) &&
        bCtor instanceof bCtor
      ) &&
      ('constructor' in a && 'constructor' in b)
    ) {
      return false;
    }
  }

  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;

  // 检查是否有循环引用的部分
  while (length--) {
    if (aStack[length] === a) {
      return bStack[length] === b;
    }
  }

  aStack.push(a);
  bStack.push(b);

  // 数组判断
  if (areArrays) {
    length = a.length;
    if (length !== b.length) return false;

    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false;
    }
  }
  // 对象判断
  else {
    var keys = Object.keys(a),
      key;
    length = keys.length;

    if (Object.keys(b).length !== length) return false;
    while (length--) {
      key = keys[length];
      if (!(b.hasOwnProperty(key) && eq(a[key], b[key], aStack, bStack)))
        return false;
    }
  }

  aStack.pop();
  bStack.pop();
  return true;
}
```

```js
console.log(eq(0, 0)); // true
console.log(eq(0, -0)); // false

console.log(eq(NaN, NaN)); // true
console.log(eq(Number(NaN), Number(NaN))); // true

console.log(eq('Curly', new String('Curly'))); // true

console.log(eq([1], [1])); // true
console.log(eq({ value: 1 }, { value: 1 })); // true

var a, b;

a = { foo: { b: { foo: { c: { foo: null } } } } };
b = { foo: { b: { foo: { c: { foo: null } } } } };
a.foo.b.foo.c.foo = a;
b.foo.b.foo.c.foo = b;

console.log(eq(a, b)); // true
```

## 参考文章

- [jashkenas](https://github.com/jashkenas)
- [jdalton](https://github.com/jdalton)
