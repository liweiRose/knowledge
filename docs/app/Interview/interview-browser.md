# Browser
### 如何解决跨域问题

- JSONP：

原理是：动态插入script标签，通过script标签引入一个js文件，这个js文件载入成功后会执行我们在url参数中指定的函数，并且会把我们需要的json数据作为参数传入。

由于同源策略的限制，XmlHttpRequest只允许请求当前源（域名、协议、端口）的资源，为了实现跨域请求，可以通过script标签实现跨域请求，然后在服务端输出JSON数据并执行回调函数，从而解决了跨域的数据请求。

优点是兼容性好，简单易用，支持浏览器与服务器双向通信。缺点是只支持GET请求。

JSONP：json+padding（内填充），顾名思义，就是把JSON填充到一个盒子里。

```js
<script>
    function createJs(sUrl){

        var oScript = document.createElement('script');
        oScript.type = 'text/javascript';
        oScript.src = sUrl;
        document.getElementsByTagName('head')[0].appendChild(oScript);
    }

    createJs('jsonp.js');

    box({
       'name': 'test'
    });

    function box(json){
        alert(json.name);
    }
</script>
```

- CORS

  服务器端对于`CORS`的支持，主要就是通过设置`Access-Control-Allow-Origin`来进行的。如果浏览器检测到相应的设置，就可以允许`Ajax`进行跨域的访问。

- 通过修改document.domain来跨子域

  将子域和主域的`document.domain`设为同一个主域.前提条件：这两个域名必须属于同一个基础域名!而且所用的协议，端口都要一致，否则无法利用`document.domain`进行跨域。

- 使用window.name来进行跨域

  `window`对象有个`name`属性，该属性有个特征：即在一个窗口(window)的生命周期内,窗口载入的所有的页面都是共享一个`window.name`的，每个页面对`window.name`都有读写的权限，`window.name`是持久存在一个窗口载入过的所有页面中的。

- 使用HTML5中新引进的`window.postMessage`方法来跨域传送数据.
### 列举IE 与其他浏览器不一样的特性？

- IE支持`currentStyle`，FIrefox使用`getComputStyle`
- IE 使用`innerText`，Firefox使用`textContent`
- 滤镜方面：IE:`filter:alpha(opacity= num)`；Firefox：`-moz-opacity:num`
- 事件方面：IE：`attachEvent`：火狐是`addEventListener`
- 鼠标位置：IE是`event.clientX`；火狐是`event.pageX`
- IE使用`event.srcElement`；Firefox使用`event.target`
- IE中消除list的原点仅需margin:0即可达到最终效果；FIrefox需要设置`margin:0;padding:0以及list-style:none`
- CSS圆角：ie7以下不支持圆角
### WEB应用从服务器主动推送Data到客户端有那些方式？

Javascript数据推送

- `Commet`：基于HTTP长连接的服务器推送技术

- 基于`WebSocket`的推送方案

- `SSE`（Server-Send Event）：服务器推送数据新方式
### IE各版本和chrome可以并行下载多少个资源

```
IE6 两个并发，iE7升级之后的6个并发，之后版本也是6个
Firefox，chrome也是6个
```

### Flash、Ajax各自的优缺点，在使用中如何取舍？

- `Flash`适合处理多媒体、矢量图形、访问机器；对`CSS`、处理文本上不足，不容易被搜索。

- `Ajax`对`CSS`、文本支持很好，支持搜索；多媒体、矢量图形、机器访问不足。

- 共同点：与服务器的无刷新传递消息、用户离线和在线状态、操作DOM
### IE与火狐的事件机制有什么区别？ 如何阻止冒泡？

```
 1. 我们在网页中的某个操作（有的操作对应多个事件）。例如：当我们点击一个按钮就会产生一个事件。是可以被 JavaScript 侦测到的行为。

 2. 事件处理机制：IE是事件冒泡、firefox同时支持两种事件模型，也就是：捕获型事件和冒泡型事件。；

 3. `ev.stopPropagation()`;注意旧ie的方法 `ev.cancelBubble = true`;
 ```
 ### ajax的缺点

```
  1、ajax不支持浏览器back按钮。

  2、安全问题 AJAX暴露了与服务器交互的细节。

  3、对搜索引擎的支持比较弱。

  4、破坏了程序的异常机制。

  5、不容易调试。
```

> IE缓存问题

在IE浏览器下，如果请求的方法是`GET`，并且请求的`URL`不变，那么这个请求的结果就会被缓存。解决这个问题的办法可以通过实时改变请求的`URL`，只要URL改变，就不会被缓存，可以通过在URL末尾添加上随机的时间戳参数(`'t'= + new Date().getTime()`)

或者：

```
open('GET','demo.php?rand=+Math.random()',true);//
```

> Ajax请求的页面历史记录状态问题

可以通过锚点来记录状态，`location.hash`。让浏览器记录Ajax请求时页面状态的变化。

还可以通过`HTML5`的`history.pushState`，来实现浏览器地址栏的无刷新改变
### document.write()的用法

document.write()`方法可以用在两个方面：页面载入过程中用实时脚本创建页面内容，以及用延时脚本创建本窗口或新窗口的内容。

`document.write`只能重绘整个页面。`innerHTML`可以重绘页面的一部分

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>document.write() example</title>
</head>
<body>
    <p>Some original document content.</p>
    <script>
    window.onload = function() {
        alert("load new content");
        document.open();
        document.write("<h1>Out with the old - in with the new!</h1>");
        document.close();
    };
    </script>
</body>
</html>
```