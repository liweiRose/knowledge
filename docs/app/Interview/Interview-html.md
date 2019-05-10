# HTML

### Doctype 作用？标准模式与兼容模式各有什么区别？

```js

  - 告知浏览器的解析器用什么文档标准解析这个文档。

  - DOCTYPE不存在或格式不正确会导致文档以 兼容模式 ·呈现。

  - 标准模式的排版 和 JS运作模式 都是以该浏览器支持的最高标准运行。

  - 在兼容模式中，页面以宽松的向后兼容的方式显示

```

### 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？

```js
  首先：CSS 规范规定，每个元素都有 display 属性，确定该元素的类型，每个元素都有默认的 display 值
  如 div 的 display 默认值为 “block”，则为 “块级” 元素；
    span 默认 display 属性值为 “inline”，是 “行内” 元素。


  （1）行内元素有：a b span img input select strong（强调的语气）

  （2）块级元素有：div ul ol li dl dt dd h1 h2 h3 h4…p

  （3）常见的空元素：
      <br> <hr> <img> <input> <link> <meta>
      鲜为人知的是：
      <area> <base> <col> <command> <embed> <keygen> <param> <source> <track> <wbr>
```

### 页面导入样式时，使用 link 和@import 有什么区别？

```js

（1）link 属于 XHTML 标签，除了加载 CSS 外，还能用于定义 RSS, 定义 rel 连接属性等作用；
    而 @import 是 CSS 提供的，只能用于加载 CSS;

（2）页面被加载的时，link 会同时被加载，而 @import 引用的 CSS 会等到页面被加载完再加载;

（3）import 是 CSS2.1 提出的，只在 IE5 以上才能被识别，而 link 是 XHTML 标签，无兼容问题;

```

### 介绍一下你对浏览器内核的理解？

```js
主要分成两部分：渲染引擎(layout engineer 或 Rendering Engine) 和 JS 引擎。

渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入 CSS 等）
        以及计算网页的显示方式，然后会输出至显示器或打印机。
        浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。
        所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。

JS 引擎则：解析和执行 javascript 来实现网页的动态效果。

最开始渲染引擎和 JS 引擎并没有区分的很明确，后来 JS 引擎越来越独立，内核就倾向于只指渲染引擎。
```

### 常见的浏览器内核有哪些？

```js
Trident 内核：IE,MaxThon,TT,The World,360,搜狗浏览器等。[又称 MSHTML]

Gecko   内核：Netscape6 及以上版本，FF,MozillaSuite/SeaMonkey 等

Presto  内核：Opera7 及以上。 [Opera 内核原为：Presto，现为：Blink;]

Webkit  内核：Safari,Chrome 等。 [ Chrome 的：Blink（WebKit 的分支）]

```

### html5 有哪些新特性、移除了那些元素？如何区分 HTML 和 HTML5？

```js
HTML5 主要是关于图像，位置，存储，多任务等功能的增加。

绘画 canvas;

用于媒介回放的 video 和 audio 元素;

本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;

sessionStorage 的数据在浏览器关闭后自动删除;

语意化更好的内容元素，比如 article、footer、header、nav、section;

表单控件，calendar、date、time、email、url、search;

新的技术 webworker, websocket, Geolocation;


移除的元素：

    纯表现的元素：basefont，big，center，font, s，strike，tt，u;

    对可用性产生负面影响的元素：frame，frameset，noframes；


DOCTYPE声明\新增的结构元素\功能元素
```

### 简述一下你对 HTML 语义化的理解？

```js
用正确的标签做正确的事情。
html 语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;
即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的;
搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于 SEO;
使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。
```

### HTML5 的离线储存怎么使用，工作原理能不能解释一下？

```js

在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。

如何使用：
    1、页面头部像下面一样加入一个manifest的属性；
    2、在cache.manifest文件的编写离线存储的资源；
        CACHE MANIFEST
        #v0.11
        CACHE:
        js/app.js
        css/style.css
        NETWORK:
        resourse/logo.png
        FALLBACK:
        / /offline.html
    3、在离线状态时，操作window.applicationCache进行需求实现。

原理：HTML5 的离线存储是基于一个新建的.appcache 文件的缓存机制(不是存储技术)，
     通过这个文件上的解析清单离线存储资源，这些资源就会像 cookie 一样被存储了下来。
     之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。

```

### 浏览器是怎么对 HTML5 的离线储存资源进行管理和加载的呢？

```js

在线的情况下，浏览器发现 html 头部有 manifest 属性，它会请求 manifest 文件，
如果是第一次访问 app，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储。
如果已经访问过 app 并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，
然后浏览器会对比新的 manifest 文件与旧的 manifest 文件，
如果文件没有发生改变，就不做任何操作，如果文件改变了，
那么就会重新下载文件中的资源并进行离线存储。
离线的情况下，浏览器就直接使用离线存储的资源。
```

### 请描述一下 cookies，sessionStorage 和 localStorage 的区别？

```js
  cookie 是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。
  cookie 数据始终在同源的 http 请求中携带（即使不需要），记会在浏览器和服务器间来回传递。
  sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存。

  存储大小：
      cookie 数据大小不能超过4k。
      sessionStorage 和 localStorage 虽然也有存储大小的限制，但比 cookie 大得多，可以达到5M或更大。

  有期时间：
      localStorage    存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
      sessionStorage  数据在当前浏览器窗口关闭后自动删除。
      cookie          设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭
```

### iframe 有那些缺点？

```js

  *iframe会阻塞主页面的Onload事件；
  *搜索引擎的检索程序无法解读这种页面，不利于SEO;

  *iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。

  使用iframe之前需要考虑这两个缺点。如果需要使用iframe，最好是通过javascript
  动态给iframe添加src属性值，这样可以绕开以上两个问题。

```

### 如何实现浏览器内多个标签页之间的通信？

```js
  WebSocket、SharedWorker；
  也可以调用localstorge、cookies等本地存储方式；

  localstorge另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，
  我们通过监听事件，控制它的值来进行页面信息通信；
  注意quirks：Safari 在无痕模式下设置localstorge值时会抛出 QuotaExceededError 的异常；
```

### 页面可见性（Page Visibility API） 可以有哪些用途？

```js
  通过 visibilityState 的值检测页面当前是否可见，以及打开网页的时间等;
  在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放；
```

### 如何在页面上实现一个圆形的可点击区域？

```js
  1、map+area或者svg
  2、border-radius
  3、纯js实现 需要求一个点在不在圆上简单算法、获取鼠标坐标等等
```

### 实现不使用 border 画出 1px 高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果。

```html
<div style="height:1px;overflow:hidden;background:red"></div>
```
### Web Worker 和webSocket

worker主线程:

```
	  1.通过 worker = new Worker( url ) 加载一个JS文件来创建一个worker，同时返回一个worker实例。

    2.通过worker.postMessage( data ) 方法来向worker发送数据。

    3.绑定worker.onmessage方法来接收worker发送过来的数据。

    4.可以使用 worker.terminate() 来终止一个worker的执行。
```

`WebSocket`是`Web`应用程序的传输协议，它提供了双向的，按序到达的数据流。他是一个`HTML5`协议，`WebSocket`的连接是持久的，他通过在客户端和服务器之间保持双工连接，服务器的更新可以被及时推送给客户端，而不需要客户端以一定时间间隔去轮询。

### cookie 和session 的区别：

```js
 1、cookie数据存放在客户的浏览器上，session数据放在服务器上。

 2、cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗

    考虑到安全应当使用session。

 3、session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能

     考虑到减轻服务器性能方面，应当使用COOKIE。

 4、单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。

 5、所以个人建议：

    将登陆信息等重要信息存放为SESSION

    其他信息如果需要保留，可以放在COOKIE中
```
### HTML与XHTML——二者有什么区别

```
区别：(以下是描述XHTM)

1.所有的标记都必须要有一个相应的结束标记

2.所有标签的元素和属性的名字都必须使用小写

3.所有的XML标记都必须合理嵌套

4.所有的属性必须用引号""括起来

5.把所有<和&特殊符号用编码表示

6.给所有属性赋一个值

7.不要在注释内容中使“--”

8.图片必须有说明文字
```
### DOM操作——怎样添加、移除、移动、复制、创建和查找节点。

- 1）创建新节点

```
      createDocumentFragment()    //创建一个DOM片段

      createElement()   //创建一个具体的元素

      createTextNode()   //创建一个文本节点
```

- 2）添加、移除、替换、插入

```
      appendChild()

      removeChild()

      replaceChild()

      insertBefore() //并没有insertAfter()
```

- 3）查找

```
      getElementsByTagName()    //通过标签名称

      getElementsByName()    //通过元素的Name属性的值(IE容错能力较强，
      会得到一个数组，其中包括id等于name值的)

      getElementById()    //通过元素Id，唯一性
```

### 如何实现浏览器内多个标签页之间的通信?

```
调用localstorge、cookies等本地存储方式
```

### 什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC？

```
     FOUC - Flash Of Unstyled Content 文档样式闪烁

     <style type="text/css" media="all">@import "../fouc.css";</style>

而引用CSS文件的@import就是造成这个问题的罪魁祸首。IE会先加载整个HTML文档的DOM，然后再去导入外部的CSS文件，因此，在页面DOM加载完成到CSS导入完成中间会有一段时间页面上的内容是没有样式的，这段时间的长短跟网速，电脑速度都有关系。
解决方法简单的出奇，只要在<head>之间加入一个<link>或者<script>元素就可以了。
```
### 说说严格模式的限制

严格模式主要有以下限制：

```
变量必须声明后再使用

函数的参数不能有同名属性，否则报错

不能使用with语句

不能对只读属性赋值，否则报错

不能使用前缀0表示八进制数，否则报错

不能删除不可删除的属性，否则报错

不能删除变量delete prop，会报错，只能删除属性delete global[prop]

eval不会在它的外层作用域引入变量

eval和arguments不能被重新赋值

arguments不会自动反映函数参数的变化

不能使用arguments.callee

不能使用arguments.caller

禁止this指向全局对象

不能使用fn.caller和fn.arguments获取函数调用的堆栈

增加了保留字（比如protected、static和interface）
```

设立”严格模式”的目的，主要有以下几个：

- 消除`Javascript`语法的一些不合理、不严谨之处，减少一些怪异行为;
- 消除代码运行的一些不安全之处，保证代码运行的安全；
- 提高编译器效率，增加运行速度；
- 为未来新版本的`Javascript`做好铺垫。

注：经过测试`IE6,7,8,9`均不支持严格模式。

### 如何删除一个cookie

- 1.将时间设为当前时间往前一点。

```
var date = new Date();

date.setDate(date.getDate() - 1);//真正的删除
```

`setDate()`方法用于设置一个月的某一天。

- 2.expires的设置

```
    document.cookie = 'user='+ encodeURIComponent('name')  + ';expires = ' + new Date(0)
```

### strong和em标签

```
<strong> 标签和 <em> 标签一样，用于强调文本，但它强调的程度更强一些。

em 是 斜体强调标签，更强烈强调，表示内容的强调点。相当于html元素中的 <i>...</i>;

< b > < i >是视觉要素，分别表示无意义的加粗，无意义的斜体。

em 和 strong 是表达要素(phrase elements)。
```
### 请解释什么是事件代理

事件代理（Event Delegation），又称之为事件委托。是 `JavaScript` 中常用绑定事件的常用技巧。顾名思义，“事件代理”即是把原本需要绑定的事件委托给父元素，让父元素担当事件监听的职务。事件代理的原理是`DOM`元素的事件冒泡。使用事件代理的好处是可以提高性能。
### attribute和property的区别是什么？

`attribute`是`dom`元素在文档中作为`html`标签拥有的属性；

`property`就是`dom`元素在`js`中作为对象拥有的属性。

所以：

对于`html`的标准属性来说，`attribute`和`property`是同步的，是会自动更新的，

但是对于自定义的属性来说，他们是不同步的.
### viewport
```js
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    // width    设置viewport宽度，为一个正整数，或字符串‘device-width’
    // device-width  设备宽度
    // height   设置viewport高度，一般设置了宽度，会自动解析出高度，可以不用设置
    // initial-scale    默认缩放比例（初始缩放比例），为一个数字，可以带小数
    // minimum-scale    允许用户最小缩放比例，为一个数字，可以带小数
    // maximum-scale    允许用户最大缩放比例，为一个数字，可以带小数
    // user-scalable    是否允许手动缩放
```
延伸 提问 :怎样处理 移动端 1px 被 渲染成 2px 问题?
```js
    1 局部处理
        meta标签中的 viewport属性 ，initial-scale 设置为 1 
        rem 按照设计稿标准走，外加利用transfrome 的scale(0.5) 缩小一倍即可；
    2 全局处理
        meta标签中的 viewport属性 ，initial-scale 设置为 0.5
        rem 按照设计稿标准走即可
```
### 可能用到的meta标签
```js
    
    <!-- 设置缩放 -->
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui" />
    <!-- 可隐藏地址栏，仅针对IOS的Safari（注：IOS7.0版本以后，safari上已看不到效果） -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <!-- 仅针对IOS的Safari顶端状态条的样式（可选default/black/black-translucent ） -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <!-- IOS中禁用将数字识别为电话号码/忽略Android平台中对邮箱地址的识别 -->
    <meta name="format-detection"content="telephone=no, email=no" />

    其他meta标签
    <!-- 启用360浏览器的极速模式(webkit) -->
    <meta name="renderer" content="webkit">
    <!-- 避免IE使用兼容模式 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
    <meta name="HandheldFriendly" content="true">
    <!-- 微软的老式浏览器 -->
    <meta name="MobileOptimized" content="320">
    <!-- uc强制竖屏 -->
    <meta name="screen-orientation" content="portrait">
    <!-- QQ强制竖屏 -->
    <meta name="x5-orientation" content="portrait">
    <!-- UC强制全屏 -->
    <meta name="full-screen" content="yes">
    <!-- QQ强制全屏 -->
    <meta name="x5-fullscreen" content="true">
    <!-- UC应用模式 -->
    <meta name="browsermode" content="application">
    <!-- QQ应用模式 -->
    <meta name="x5-page-mode" content="app">
    <!-- windows phone 点击无高光 -->
    <meta name="msapplication-tap-highlight" content="no">

```
### audio元素和video元素在ios和andriod中无法自动播放
```js
    
    原因： 因为各大浏览器都为了节省流量，做出了优化，在用户没有行为动作时（交互）不予许自动播放；

    /音频，写法一
    <audio src="music/bg.mp3" autoplay loop controls>你的浏览器还不支持哦</audio>
    
    //音频，写法二
    <audio controls="controls"> 
        <source src="music/bg.ogg" type="audio/ogg"></source>
        <source src="music/bg.mp3" type="audio/mpeg"></source>
        优先播放音乐bg.ogg，不支持在播放bg.mp3
    </audio>
    
    //JS绑定自动播放（操作window时，播放音乐）
    $(window).one('touchstart', function(){
        music.play();
    })
    
    //微信下兼容处理
    document.addEventListener("WeixinJSBridgeReady", function () {
        music.play();
    }, false);
    
    //小结
    //1.audio元素的autoplay属性在IOS及Android上无法使用，在PC端正常；
    //2.audio元素没有设置controls时，在IOS及Android会占据空间大小，而在PC端Chrome是不会占据任何空间；
    //3.注意不要遗漏微信的兼容处理需要引用微信JS；


```