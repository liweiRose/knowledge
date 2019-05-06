# Event Loop

javascript 是单线程语言，按顺序执行代码

## javascript 引擎执行机制

```js
                            任务执行
                              ||
                              ||
              ============  同步异步 ？ =============
            ||                                   ||
          同步任务                              异步任务
            ||                                   ||
          主线程执行                            event table
            ||                           (存放 宏任务 和 微任务)
            ||                                   ||
            ||                               event task
            ||                                   ||
            ||                  执行完            ||
            ||             monitor process监听    ||
        主线程执行完成了 ？ ========================
            ||           从event task中取异步任务执行
            ||
            ||未执行完
            ||
            ||
        继续执行主线程任务
```

## micro task 和 macro task

### micro task

- callback
- Promise
- Object.observe

- process.nextTick
  - node 环境中 process 对象提供的一个方法
  - process.nextTick 这个名字有点误导，它是在本轮循环执行的，而且是所有异步任务里面最快执行的
  - 微任务队列追加在 process.nextTick 队列的后面，也属于本轮循环

### macro task

- setTimeout
- setInterval

### 执行机制

- 事件队列在同步队列执行完后，首先会执行 nextTick，等 nextTick 执行完成后，然后会先执行 micro task
- 等 micro task 队列空了之后，才会去执行 macro task
- 如果中间添加了 micro task 加入了 micro task 队列，会继续去执行 micro task 队列
- 然后再回到 macro task 队列
- js 引擎存在 monitoring process 进程， 会不停的监听 task queue

```js


      async function async1() {
        console.log('async1 start');
        await async2();
        console.log('async1 end');
      }

      async function async2() {
        console.log('async2');
      }

      console.log('script start');

      setTimeout(function() {
        console.log('setTimeout');
      }, 0);

      async1();

      process.nextTick(function() {
        console.log('10');
      })

      new Promise(function(resolve) {
        console.log('promise1');
        resolve();
      }).then(function() {
        console.log('promise2');
      });

      console.log('script end');

    - result:  ① script start
               ② async1 start
               ③ async2
               ④ promise1
               ⑤ script end
               ⑥ async1 end  // 由于async函数使用await后语句会被放入一个回调函数中(微任务中)
               ⑦ promise2
               ⑧ setTimeout

```
