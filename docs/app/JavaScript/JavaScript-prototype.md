# 原型与原型链

## 以一个例子解析

```js

  * Person 构造函数，使用 new 创建了一个实例对象 person，并在原型上增加一个属性。


      function Person() { }

      Person.prototype.age = 19;

      var person = new Person();

      person.name = 'Kevin';
      console.log(person.name, person.age) // Kevin 19


  * __proto__  JavaScript对象(除 null 外)具有的一个属性，这个属性会指向该对象的原型


  * constructor 每个原型都有一个 constructor 属性指向关联的构造函数


  * 关系图谱：

                          ptototype
                          ===========>
          Person                           Person.prototype
        「 构造函数 」      <===========       「 实例原型 」
            ‖               construct             ∧    ‖
            ‖                                     ‖    ‖
            ‖                                     ‖    ‖
            ‖                                     ‖    ‖
            ∨                _proto_              ‖    ‖ _proto_
          person   ==============================      ‖
                                                       ‖
                                                       ‖
                          ptototype                    ‖
                          ===========>                 ∨
          Object()                           Object.prototype
        「 内置对象 」      <===========                 ‖
                            construct                  ‖
                                                       ‖ _proto_
                                                       ‖
                                                       ∨
                                                      null
```

## 参考文章

- [javascript 高级程序设计](.)
- [mqyqingfeng/Blog](https://github.com/mqyqingfeng/Blog)
