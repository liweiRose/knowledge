# 执行上下文

当执行一个函数时 JavaScript 会进行初始化工作，形成一个执行上下文(execution context)

- 包含三个重要属性:
  - 变量对象
  - 作用域链
  - this

## 执行上下文栈

JavaScript 引擎创建 执行上下文栈（Execution context stack，ECS）来管理 执行上下文

### 函数执行过程 执行上下文栈 的变化

```js

  ① 执行上下文栈（模拟）

      ECStack = [];

  ② 初始化 向执行上下文栈推入一个全局执行上下文(globalContext)

      ECStack = [
        globalContext
      ];

  ③ 当执行函数时 创建一个执行上下文 并将其推入执行上下文栈

      ECStack = [
        functionContext,
        globalContext
      ];

  ④ 当函数执行完毕 将函数执行上下文 推出执行上下文栈

      ECStack = [
        globalContext
      ];

  ⑤ 程序退出 清空执行上下文栈

      ECStack = [];

```

## 变量对象( Variable object )

如果变量与执行上下文相关，那变量自己应该知道它的数据存储在哪里，并且知道如何访问。这种机制称为变量对象(variable object)。

- 变量对象(缩写为 VO)是一个与执行上下文相关的特殊对象，它存储着在上下文中声明的以下内容：

  - 变量 (var, 变量声明);
  - 函数声明 (FunctionDeclaration, 缩写为 FD);
  - 函数的形参

- 变量对象是与执行上下文相关的数据作用域，存储了在上下文中定义的变量和函数声明
- 只有全局上下文的变量对象允许通过 VO 的属性名称来间接访问 (因为在全局上下文里，全局对象自身就是变量对象)，
  在其它上下文中是不能直接访问 VO 对象的，因为它只是内部机制的一个实现。

```js

  * examples:

    var a = 10;

    function test(x) {
      var b = 20;
    };
    test(30);

  * 对应的变量对象:

    VO(globalContext) = {
      a: 10,
      test: <reference to function>
    };

    VO(test functionContext) = {
      x: 30,
      b: 20
    };

```

### 不同执行上下文中的变量对象

```js

抽象变量对象VO (变量初始化过程的一般行为)
  ║
  ╠══> 全局上下文变量对象GlobalContextVO
  ║        (VO === this === global)
  ║
  ╚══> 函数上下文变量对象FunctionContextVO
           (VO === AO, 并且添加了<arguments>和<formal parameters>)

```

#### 全局上下文变量对象

- 全局对象(Global object) 是在进入任何执行上下文之前就已经创建了的对象
- 这个对象只存在一份，它的属性在程序中任何地方都可以访问，全局对象的生命周期终止于程序退出那一刻
- 全局对象初始创建阶段将 Math、String、Date、parseInt 作为自身属性初始化，同样也可以有额外创建的其它对象作为属性（其可以指向到全局对象自身）
  如：在 DOM 中，全局对象的 window 属性就可以引用全局对象自身

```js

  global = {
    Math: <...>,
    String: <...>,
    Date: <...>,
    parseInt: <...>,
    ...
    window: global
  };

  * 当访问全局对象的属性时通常会忽略掉前缀，这是因为全局对象是不能通过名称直接访问

    String(10);  <=>  global.String(10);
    parseInt();  <=>  global.parseInt();

    * 也可带有前缀访问

      window.a = 10;  <=>  global.window.a = 10 === global.a = 10;
      this.b = 20;    <=>  global.b = 20;

  *** 全局上下文变量对象：VO === this === global ***

```

#### 函数上下文中的变量对象

- 在函数执行上下文中，VO 是不能直接访问的，此时由活动对象(activation object,缩写为 AO)扮演 VO 的角色。
- 活动对象是在进入函数上下文时刻被创建

```js

  VO(functionContext) === AO;

  AO = {
    arguments: <ArgO>
  };

```

#### 函数执行过程中变量对象的变化

- 执行过程
  - 进入执行上下文
  - 代码执行

```js

  * 活动对象AO:
              函数形参
              函数声明
              变量声明

    function foo(a) {
      var b = 2;
      function c() {}
      var d = function() {};
      b = 3;
    }
    foo(1);

    * 进入执行上下文

      AO = {
        arguments: {
          0: 1,
          length: 1
        },
        a: 1,
        b: undefined,
        c: reference to function c(){},
        d: undefined
      }

    * 代码执行

      AO = {
        arguments: {
          0: 1,
          length: 1
        },
        a: 1,
        b: 3,
        c: reference to function c(){},
        d: reference to FunctionExpression "d"
      }

```

## 作用域链

由多个执行上下文的变量对象构成的链表就叫做作用域链。

### 剖析 函数执行上下文中 作用域链和变量对象 的创建过程

```js

    var scope = 'global scope';
    function checkscope() {
      var scope2 = 'local scope';
      return scope2;
    }
    checkscope();


  ① checkscope 函数被创建，保存作用域链到内部属性 [[scope]]

      checkscope.[[scope]] = [
        globalContext.VO
      ];

  ② 初始化 向执行上下文栈推入一个全局执行上下文(globalContext)

      globalContext = {
        VO: [global],
        Scope: [globalContext.VO],
        this: globalContext.VO
      }

      ECStack = [
        globalContext
      ];

  ③ 执行 checkscope 创建 checkscope 的执行上下文 并将其推入执行上下文栈

      ECStack = [
        checkscopeContext,
        globalContext
      ];

  ④ 初始化 checkscope 函数的执行上下文

      checkscopeContext = {
        Scope: checkscope.[[scope]], // 1.复制函数 [[scope]] 属性创建作用域链
        AO: {                        // 2.创建活动对象并初始化
          arguments: {
              length: 0
          },
          scope2: undefined
        },
        this: undefined,             // 在非严格模式下，会转为全局对象(第5版的ECMAScript中，已经不强迫转换成全局变量了，而是赋值为undefined)
      }

      checkscopeContext = {
        Scope: [AO, [[Scope]]],      // 3.将活动对象推入 checkscope 作用域链顶端
        AO: {
          arguments: {
              length: 0
          },
          scope2: 'local scope'      // 4.执行函数，修改 AO 的属性值
        },
        this: undefined,
      }

  ⑤ 函数执行完毕 checkscope 函数的执行上下文从执行上下文栈中推出

      ECStack = [
        globalContext
      ];

  ⑥ 程序退出 清空执行上下文栈

      ECStack = [];
```

## this

- this 是执行上下文中的一个属性
- this 值在进入上下文时确定，并且在上下文运行期间永久不变
- 在通常的函数调用中，this 是由激活上下文代码的调用者来提供的，即调用函数的父上下文(parent context )。this 取决于调用函数的方式

```js

  * 通过调用方式动态确定this值

    function foo() {
      alert(this.bar);
    }

    var x = {bar: 10};
    var y = {bar: 20};

    x.test = foo;
    y.test = foo;

    x.test(); // 10
    y.test(); // 20

```

```js

2. this - 理解的不深

2. 整体尚需在读三遍 - 捋出不妥之处

```

## 参考文章

- [变量对象（Variable Object）](https://www.cnblogs.com/TomXu/archive/2012/01/16/2309728.html)
- [mqyqingfeng/Blog](https://github.com/mqyqingfeng/Blog/issues/6)
