# 性能优化
### 性能优化是什么
从前端的角度来说，性能优化可以分为两个方向。从用户角度来看，一个是页面加载的很快，另一个是页面使用起来很流畅。因此，对性能优化的探索，我们可以分为页面加载时间跟页面运行效率两个方向来进行研究.
### 从浏览器打开到页面渲染完成，花费了多少时间
是的，这个问题有点熟悉，面试官比较常问的是从浏览器打开到页面渲染完成，发生了什么事情。这个问题网上很多回答，我也不就重复的细说了。主要的过程是：

浏览器解析->查询缓存->dns查询->建立链接->服务器处理请求->服务器发送响应->客户端收到页面->解析HTML->构建渲染树->开始显示内容(白屏时间)->首屏内容加载完成(首屏时间)->用户可交互(DOMContentLoaded)->加载完成(load)

很显然，如果我们要进行加载时间的优化，我们需要从这里的每一个步骤都去思考，去总结，而避免东凑一点，西凑一点。
### 页面加载时间监控
有一句话说得好，If You Can't Measure It, You Can't Manage It。在对这些环节进行优化之前，我们需要知道如何监控这些环节花费了多少时间。

首先推荐一个[PerformanceTiming](https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceTiming),可以获取到很多页面加载相关的数据。

比较常用的有:
```js
DNS解析时间： domainLookupEnd - domainLookupStart
TCP建立连接时间： connectEnd - connectStart
白屏时间： responseStart - navigationStart
dom渲染完成时间： domContentLoadedEventEnd - navigationStart
页面onload时间： loadEventEnd - navigationStart
```
如果不使用该API，可以以服务器渲染返回的时间，或是SPA路由跳转离开的时间为起点，domContentLoaded，load等事件为结束点进行记录。或是直接上google analytics。方法很多，就不细说了。
### 项目做过哪些性能优化？
- 减少 HTTP 请求数
- 减少 DNS 查询
- 使用 CDN
- 避免重定向
- 图片懒加载
- 减少 DOM 元素数量
- 减少 DOM 操作
- 使用外部 JavaScript 和 CSS
- 压缩 JavaScript 、 CSS 、字体、图片等
- 优化 CSS Sprite
- 使用 iconfont
- 字体裁剪
- 多域名分发划分内容到不同域名
- 尽量减少 iframe 使用
- 避免图片 src 为空
- 把样式表放在  中
- 把脚本放在页面底部
### 你对优化这块了解多少?
- 比如从客户端着手的:
- 压缩代码(JS/CSS),压缩图片
- 合并一些小图片(css sprite)
- 若是打包的代码尽可能切割成多个 chunk,减少单一 chunk过大
- 静态文件采用 cdn 引入
- HTTP的缓存头使用的合理
- 减小第三方库的依赖
- 对于代码应该考虑性能来编写,比如使用requestAnimationFrame绘制动画,尽可能减少页面重绘(DOM 改变)
- 渐进升级,引入preload这些预加载资源
- 看情况用service worker来缓存资源(比如移动端打算搞 PWA)
### 前端需要注意哪些SEO
- 合理的title、description、keywords：搜索对着三项的权重逐个减小，title值强调重点即可，重要关键词出现不要超过2次，而且要靠前，不同页面title要有所不同；
- description把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面description有所不同；keywords列举出重要关键词即可
- 语义化的HTML代码，符合W3C规范：语义化代码让搜索引擎容易理解网页
- 重要内容HTML代码放在最前：搜索引擎抓取HTML顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容一定会被抓取
- 重要内容不要用js输出：爬虫不会执行js获取内容
- 少用iframe：搜索引擎不会抓取iframe中的内容
- 非装饰性图片必须加alt

- 提高网站速度：网站速度是搜索引擎排序的一个重要指标
### 谈谈你对重构的理解
- 网站重构：在不改变外部行为的前提下，简化结构、添加可读性，而在网站前端保持一致的行为。也就是说是在不改变UI的情况下，对网站进行优化， 在扩展的同时保持一致的UI

- 对于传统的网站来说重构通常是：

  - 表格(table)布局改为DIV+CSS
  - 使网站前端兼容于现代浏览器(针对于不合规范的CSS、如对IE6有效的)
  - 对于移动平台的优化
  - 针对于SEO进行优化
### 平时如何管理你的项目？
- 先期团队必须确定好全局样式（globe.css），编码模式(utf-8) 等；
- 编写习惯必须一致（例如都是采用继承式的写法，单样式都写成一行）；
- 标注样式编写人，各模块都及时标注（标注关键样式调用的地方）；
- 页面进行标注（例如 页面 模块 开始和结束）；
- CSS跟HTML 分文件夹并行存放，命名都得统一（例如style.css）；
- JS 分文件夹存放 命名以该JS功能为准的英文翻译。
- 图片采用整合的 images.png png8 格式文件使用 - 尽量整合在一起使用方便将来的管理
### 强类型检查
- 用===代替 ==
```js
// 如果处理不当，它会极大地影响程序逻辑。这就像，你想向左走，但由于某种原因，你向右走
0 == false // true
0 === false // false
2 == "2" // true
2 === "2" // false

// 例子
const value = "500";
if (value === 500) {
  console.log(value);
  // 条件不成立，不会进入
}

if (value === "500") {
  console.log(value);
  // 条件成立，会进入
}
```
### 变量
用知名其意的方式为变量命名，通过这种方式，当一个人看到它们时，易于搜索和理解。

- 不好的方式：
```js
let daysSLV = 10;
let y = new Date().getFullYear();

let ok;
if (user.age > 30) {
  ok = true;
}
```
- 好的方式：
```s
const MAX_AGE = 30;
let daysSinceLastVisit = 10;
let currentYear = new Date().getFullYear();

...

const isUserOlderThanAllowed = user.age > MAX_AGE;
```
不要在变量名中添加额外的不需要的单词。
- 不好的方式：
```js
let nameValue;
let theProduct;
```
- 好的方式：
```js
let name;
let product;
```
不要简写变量上下文。
- 不好的方式：
```js
const users = ["John", "Marco", "Peter"];
users.forEach(u => {
  doSomething();
  doSomethingElse();
  // ...
  // ...
  // ...
  // ...
  // 当上面代码很多的时候 ，这 `u` 是什么鬼
  register(u);
});
```
- 好的方式：
```js
const users = ["John", "Marco", "Peter"];
users.forEach(user => {
  doSomething();
  doSomethingElse();
  // ...
  // ...
  // ...
  // ...
  register(user);
});
```
不要添加不必要的上下文。
- 不好的方式：
```js
const user = {
  userName: "John",
  userSurname: "Doe",
  userAge: "28"
};

...

user.userName;
```
- 好的方式：
```js
const user = {
  name: "John",
  surname: "Doe",
  age: "28"
};

...

user.name;
```
### 函数
使用长而具有描述性的名称。 考虑到函数表示某种行为，函数名称应该是动词或短​​语，用以说明其背后的意图以及参数的意图。 函数的名字应该说明他们做了什么。
- 不好的方式：
```js
function notif(user) {
  // implementation
}
```
- 好的方式：
```js
function notifyUser(emailAddress) {
  // implementation
}
```
避免使用大量参数。 理想情况下，函数应该指定两个或更少的参数。 参数越少，测试函数就越容易，参数多的情况可以使用对象。
- 不好的方式：
```js
function getUsers(fields, fromDate, toDate) {
  // implementation
}
```
- 好的方式：
```js
function getUsers({ fields, fromDate, toDate }) {
  // implementation
}

getUsers({
  fields: ['name', 'surname', 'email'],
  fromDate: '2019-01-01',
  toDate: '2019-01-18'
});
```
使用默认参数替代 || 操作
- 不好的方式：
```js
function createShape(type) {
  const shapeType = type || "cube";
  // ...
}
```
- 好的方式：
```js
function createShape(type = "cube") {
  // ...
}
```
一个函数应该只做一件事，不要在一个函数中执行多个操作。
- 不好的方式：
```js
function notifyUsers(users) {
  users.forEach(user => {
    const userRecord = database.lookup(user);
    if (userRecord.isVerified()) {
      notify(user);
    }
  });
}
```
- 好的方式：
```js
function notifyVerifiedUsers(users) {
  users.filter(isUserVerified).forEach(notify);
}

function isUserVerified(user) {
  const userRecord = database.lookup(user);
  return userRecord.isVerified();
}
```
使用Object.assign设置对象默认值。
- 不好的方式：
```js
const shapeConfig = {
  type: "cube",
  width: 200,
  height: null
};

function createShape(config) {
  config.type = config.type || "cube";
  config.width = config.width || 250;
  config.height = config.height|| 250;
}


createShape(shapeConfig);
```
- 好的方式：
```js
const shapeConfig = {
  type: "cube",
  width: 200
  // Exclude the 'height' key
};

function createShape(config) {
  config = Object.assign(
    {
      type: "cube",
      width: 250,
      height: 250
    },
    config
  );

  ...
}

createShape(shapeConfig);
```
不要使用标志作为参数，因为它们告诉函数做的比它应该做的多。
- 不好的方式：
```js
function createFile(name, isPublic) {
  if (isPublic) {
    fs.create(`./public/${name}`);
  } else {
    fs.create(name);
  }
}
```
- 好的方式：
```js
function createFile(name) {
  fs.create(name);
}

function createPublicFile(name) {
  createFile(`./public/${name}`);
}
```
不要污染全局变量。 如果需要扩展现有对象，请使用ES类和继承，而不是在原生对象的原型链上创建函数。
- 不好的方式：
```js
Array.prototype.myFunc = function myFunc() {
  // implementation
};
```
- 好的方式：
```js
class SuperArray extends Array {
  myFunc() {
    // implementation
  }
}
```