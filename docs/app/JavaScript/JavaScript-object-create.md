# 创建对象

## 工厂模式

```js

  function createPerson(name) {
    var o = new Object();
    o.name = name;
    o.getName = function () {
      console.log(this.name);
    };

    return o;
  }

  var person1 = createPerson('kevin');

 * 缺点: 对象无法识别，因为所有的实例都指向一个原型

```

## 构造函数模式

```js
  function Person(name) {
    this.name = name;
    this.getName = function() {
      console.log(this.name);
    };
  }

  var person1 = new Person('kevin');

  * 优点：实例可以识别为一个特定的类型

  * 缺点：每次创建实例时，每个方法都要被创建一次

```

## 原型模式

```js

  function Person(name) {}

  - 优点：方法不会重新创建
  - 缺点：所有的属性和方法都共享， 不能初始化参数

    Person.prototype.name = 'keivn';
    Person.prototype.getName = function() {
      console.log(this.name);
    };


  - 缺点：重写了原型，丢失了 constructor 属性

    Person.prototype = {
      name: 'kevin',
      getName: function() {
        console.log(this.name);
      }
    };


  - 优点：实例可以通过constructor属性找到所属构造函数

    Person.prototype = {
      constructor: Person,
      name: 'kevin',
      getName: function() {
        console.log(this.name);
      }
    };

  var person1 = new Person();

```

## 组合模式

```js
  * 使用最广泛的方式

    function Person(name) {
      this.name = name;
    }

    Person.prototype = {
      constructor: Person,
      getName: function() {
        console.log(this.name);
      }
    };

    var person1 = new Person();
```

## 补充

了解上述几种模式实践即可，待补充...

## 参考文章

- [javascript 高级程序设计](-)
