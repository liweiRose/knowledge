# 继承

## ES5 继承方式

### 原型链继承

```js

  - 缺点： 引用类型的属性被所有实例共享；在创建 Child 的实例时，不能向 Parent 传参。

    function Parent() {
      this.name = 'kevin';
    }

    Parent.prototype.getName = function() {
      console.log(this.name);
    };

    function Child() {}

    Child.prototype = new Parent();

    var child = new Child();

    console.log(child.getName()); // kevin

```

### 借用构造函数(经典继承)

```js

  - 优点：避免了引用类型的属性被所有实例共享； 可以在 Child 中向 Parent 传参
  - 缺点：方法都在构造函数中定义，每次创建实例都会创建一遍方法

    function Parent(age) {
      this.age = age;
      this.names = ['kevin', 'daisy'];
    }

    function Child(age) {
      Parent.call(this, age);
    }

    var child = new Child(12);

    child.names.push('yayu');

    console.log(child.names); // ["kevin", "daisy", "yayu"]

    var child1 = new Child(11);

    console.log(child1.names); // ["kevin", "daisy"]

```

### 组合继承

```js

  - JavaScript 中最常用的继承模式

    function Parent(name) {
      this.name = name;
      this.colors = ['red', 'blue', 'green'];
    }

    Parent.prototype.getName = function() {
      console.log(this.name);
    };

    function Child(name, age) {
      Parent.call(this, name);

      this.age = age;
    }

    Child.prototype = new Parent();
    Child.prototype.constructor = Child;

    var child1 = new Child('kevin', '18');

    child1.colors.push('black');

    console.log(child1.name); // kevin
    console.log(child1.age); // 18
    console.log(child1.colors); // ["red", "blue", "green", "black"]

    var child2 = new Child('daisy', '20');

    console.log(child2.name); // daisy
    console.log(child2.age); // 20
    console.log(child2.colors); // ["red", "blue", "green"]

```

## ES6 继承方式

### Class Extends

基础语法参阅 [es6 基本语法讲解部分](http://localhost:9090/notes/app/JavaScript/JavaScript-es6.html#class)

```js
```

## 参考文章

- [JavaScript 高级程序设计](-)
- [es6 - class](http://es6.ruanyifeng.com/#docs/class)
- [mqyqingfeng/Blog](https://github.com/mqyqingfeng/Blog/issues/105)
