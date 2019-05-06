# 作用域

- 在 JavaScript 中, 作用域为可访问变量，对象，函数的集合
- 作用域规定了如何查找变量，确定当前执行代码对变量的访问权限
- JavaScript 采用词法作用域(lexical scoping)，也就是静态作用域

## 变量生命周期

- 声明时初始化
- 局部变量在函数执行完毕后销毁
- 全局变量在页面关闭后销毁

## 局部变量和全局变量

- 局部变量

  - 只能在函数内部访问
  - 局部变量只作用于函数内，不同的函数可以使用相同名称的变量
  - 在函数开始执行时创建，函数执行完后局部变量会自动销毁

- 全局变量
  - 变量在函数外定义，即为全局变量 或者 如果变量在函数内没有声明，该变量为全局变量
  - 全局变量有 全局作用域
  - 网页中所有脚本和函数均可使用

## 静态作用域与动态作用域

- 静态作用域

  - 函数的作用域在函数定义的时候决定
    - 实现机制：当函数创建时，函数内部属性 [[scope]] 会保存所有父级 变量对象 到其中，注意：[[scope]] 并不代表完整的作用域链！

- 动态作用域
  - 函数的作用域是在函数调用的时候决定

```js

  * ex1:

    var scope = 'global scope';
    function checkscope() {
      var scope = 'local scope';
      function f() {
        return scope;
      }
      return f();
    }
    checkscope();


  * ex2:

    var scope = 'global scope';
    function checkscope() {
      var scope = 'local scope';
      function f() {
        return scope;
      }
      return f;
    }
    checkscope()();

  * result: local scope

```

```js
  * ex3:

    var x = 21;
    var talk = function () {
        console.log(x);
        var x = 20;
    };
    talk ();

  * result：undefined
  * tips:   var 是具有变量提升的， 会在函数顶部 先声明变量 然后在去赋值
            console 的位置在声明之后 赋值之前 所以打印出来时undefined

```

```js

1. 函数内部属性 [[scope]] - 可以深挖

```

## 参考文章

- [你不知道的 JavaScript · 上卷](')
- [mqyqingfeng/Blog](https://github.com/mqyqingfeng/Blog/issues/3)
