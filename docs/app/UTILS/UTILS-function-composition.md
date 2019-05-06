# 函数组合

从右往左执行函数组合（右侧函数的输出作为左侧函数的输入）。最右侧函数可以是任意元函数（参数个数不限），其余函数必须是一元函数。

- underscore compose 实现

```js
function compose() {
  var args = arguments;
  var start = args.length - 1;
  return function() {
    var i = start;
    var result = args[start].apply(this, arguments);
    while (i--) result = args[i].call(this, result);
    return result;
  };
}
```

- Pointfree

  - 本质就是使用一些通用的函数，组合出各种复杂运算。
  - 上层运算不直接操作数据，而是通过底层函数去处理。
  - 需要定义很多的基础函数

  - pointfree 模式可以减少不必要的命名，让代码保持简洁和通用，更符合语义，更容易复用。

```js
  * 筛选出这个用户的未完成的任务的 ids、priorities、titles、和 dueDate 数据，并且按照日期升序排序。

    var data = {
      result: 'SUCCESS',
      tasks: [
        {
          id: 104,
          complete: false,
          priority: 'high',
          dueDate: '2013-11-29',
          username: 'Scott',
          title: 'Do something',
          created: '9/22/2013'
        },
        {
          id: 105,
          complete: false,
          priority: 'medium',
          dueDate: '2013-11-22',
          username: 'Lena',
          title: 'Do something else',
          created: '9/22/2013'
        },
        {
          id: 107,
          complete: true,
          priority: 'high',
          dueDate: '2013-11-22',
          username: 'Mike',
          title: 'Fix the foo',
          created: '9/22/2013'
        },
        {
          id: 108,
          complete: false,
          priority: 'low',
          dueDate: '2013-11-15',
          username: 'Punam',
          title: 'Adjust the bar',
          created: '9/25/2013'
        },
        {
          id: 110,
          complete: false,
          priority: 'medium',
          dueDate: '2013-11-15',
          username: 'Scott',
          title: 'Rename everything',
          created: '10/2/2013'
        },
        {
          id: 112,
          complete: true,
          priority: 'high',
          dueDate: '2013-11-27',
          username: 'Lena',
          title: 'Alter all quuxes',
          created: '10/5/2013'
        }
      ]
    };

  * getIncompleteTaskSummaries('Scott') 结果
    result = [
      {
        id: 110,
        title: 'Rename everything',
        dueDate: '2013-11-15',
        priority: 'medium'
      },
      { id: 104, title: 'Do something', dueDate: '2013-11-29', priority: 'high' }
    ];
```

```js
//  面向过程式编程
var fetchData = function() {
  // 模拟
  return Promise.resolve(data);
};

var getIncompleteTaskSummaries = function(membername) {
  return fetchData()
    .then(function(data) {
      return data.tasks;
    })
    .then(function(tasks) {
      return tasks.filter(function(task) {
        return task.username == membername;
      });
    })
    .then(function(tasks) {
      return tasks.filter(function(task) {
        return !task.complete;
      });
    })
    .then(function(tasks) {
      return tasks.map(function(task) {
        return {
          id: task.id,
          dueDate: task.dueDate,
          title: task.title,
          priority: task.priority
        };
      });
    })
    .then(function(tasks) {
      return tasks.sort(function(first, second) {
        var a = first.dueDate,
          b = second.dueDate;
        return a < b ? -1 : a > b ? 1 : 0;
      });
    })
    .then(function(task) {
      console.log(task);
    });
};

getIncompleteTaskSummaries('Scott');
```

```js
// pointfree 模式
var fetchData = function() {
  return Promise.resolve(data);
};

// 编写基本函数
var prop = curry(function(name, obj) {
  return obj[name];
});

var propEq = curry(function(name, val, obj) {
  return obj[name] === val;
});

var filter = curry(function(fn, arr) {
  return arr.filter(fn);
});

var map = curry(function(fn, arr) {
  return arr.map(fn);
});

var pick = curry(function(args, obj) {
  var result = {};
  for (var i = 0; i < args.length; i++) {
    result[args[i]] = obj[args[i]];
  }
  return result;
});

var sortBy = curry(function(fn, arr) {
  return arr.sort(function(a, b) {
    var a = fn(a),
      b = fn(b);
    return a < b ? -1 : a > b ? 1 : 0;
  });
});

var getIncompleteTaskSummaries = function(membername) {
  return fetchData()
    .then(prop('tasks'))
    .then(filter(propEq('username', membername)))
    .then(filter(propEq('complete', false)))
    .then(map(pick(['id', 'dueDate', 'title', 'priority'])))
    .then(sortBy(prop('dueDate')))
    .then(console.log);
};

getIncompleteTaskSummaries('Scott');
```

```js
// 使用 ramda.js
var fetchData = function() {
  return Promise.resolve(data);
};

var getIncompleteTaskSummaries = function(membername) {
  return fetchData()
    .then(R.prop('tasks'))
    .then(R.filter(R.propEq('username', membername)))
    .then(R.filter(R.propEq('complete', false)))
    .then(R.map(R.pick(['id', 'dueDate', 'title', 'priority'])))
    .then(R.sortBy(R.prop('dueDate')))
    .then(console.log);
};

getIncompleteTaskSummaries('Scott');
```

```js
// 利用 compose
var fetchData = function() {
  return Promise.resolve(data);
};

var getIncompleteTaskSummaries = function(membername) {
  return fetchData().then(
    R.compose(
      console.log,
      R.sortBy(R.prop('dueDate')),
      R.map(R.pick(['id', 'dueDate', 'title', 'priority'])),
      R.filter(R.propEq('complete', false)),
      R.filter(R.propEq('username', membername)),
      R.prop('tasks')
    )
  );
};

getIncompleteTaskSummaries('Scott');
```

> 我们现在写的大部分是面向 _面向过程式编程_ 这很要命！很要命！很要命！

> 试着想想 _面向对象编程_ 这很重要！很重要！很重要！

### 参考文章

- [ramda.js - 一个专门为函数式编程风格设计的库](https://github.com/ramda/ramda)
- [favoring-curry](https://fr.umio.us/favoring-curry/)
- [mqyqingfeng/Blog](https://github.com/mqyqingfeng/Blog/issues/45)
