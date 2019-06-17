# 面试总结
## 面试1
- 首先做一下自我介绍？

  我叫xxx，x年的前端开发经验，目前在xx区工作，在职状态。

- 讲一下你们公司主要做什么的？

  我们公司主要做数据可视化以及中后台管理的。

- 你主要负责那个系统，讲讲主要情况？

  工期扬尘监控系统，系统主要分为三部分，项目总览（系统中所有项目的数据综合展示）、单个项目浏览（单个项目的数据展示）、中后台管理(管理所有项目的数据)

- dva你是怎么看的？

  dva首先是一个基于redux和redux-saga的数据流方案，然后为了简化开发体验，dva还额外内置了react-router和fetch,所以可以理解为一个轻量级的应用框架。

- redux和redux-saga的关系？

  redux是做同步数据管理的，对于一些异步处理需要一些中间件来完成，比如redux-thunk、redux-saga.

- redux-saga是怎么处理异步问题的？

  首先它是利用generator语法实现异步的，同时会暴露几个方法，如call(调用一个函数)、put(触发一个action)、takeLatest

- dva提供了哪些API？
  - app=dva();创建应用返回dva实例
  - app.use();使用插件
  - app.model();注册model
  - app.router();注册路由表
  - app.start();启动应用

- dva的effects副作用

  Dva的models中Effect被称为副作用，是做常见的异步操作。采用的是generator语法，generator函数接受两个参数，第一个是参数，第二是一些redux-saga的方法如put、call

- dispatch是哪里来的？

  本身dispath是redux的产物，dva中，connect Model的组件通过props可以访问dispatch,可以调用model中的reducers或者effects.

  connect的mapStateToProps和mapDispatchProps以及组件

- generator是做什么的？

  Generator函数是es6提供的异步编程解决方案 ，语法与传统的函数不同，function*name(){};

  也可以把它理解为一个状态机，封装了多个内部状态。

  执行Generator函数会返回一个遍历器对象，可以一次遍历Generator函数内的每一个状态。

- 如何在一个Generator函数内调用另外一个Generator函数？

  可以使用yield*表达式。

- 你们项目中用的react那个版本？

  我们大部分项目还是用15.4以上版本，不过也有部分项目用16.2以上版本的，现在最新的是16.7版本的了。

- react生命周期有哪些？

  1.componentWillMount

  组件初始化时调用，整个生命周期只调用一次，更新的时候不调用，可以修改state.

  2.componentDidMount

  组件渲染之后调用，只调用一次。

  3.componentWillReceiveProps

  组件接受新的props调用

  4.shouldComponentUpdata

  react性能优化非常重要的一环，组件接受新的state或props时调用，我们可以对比前后两个state或props是否相同，相同的话就返回false会组织更新；

  5.componentWillUpdata

  组件更新前调用，此时可以修改state。

  6.componentDidUpdata

  组件更新结束后调用。

  7.componentWillUnmount

  组件将要卸载时调用，一些时间监听和定时器在这里清除。

- 如何触发一个react组件重新渲染？

  1.setState();改变状态

  2.props改变，在组件上直接使用this.props.name

  3.props改变触发componentWillReceiveProps()周期函数，在周期函数内setState();

- setState();按照顺序触发哪些生命周期？

  1.shouldComponentUpdata();

  2.componentWillUpdata();

  3.componentDidUpdata();

- react中如何绑定事件？

  1.onClick={this.handleEdit.bind(this, param)}；

  ```
  // 如果不传参可用双冒号::
  <button onClick={::this.handleEdit}>编辑</button>
  ```

  2.构造函数内声明

  ```
  constructor(props){
          super(props);
           this.handleEdit = this.handleEdit.bind(this);
      }
  ```

  3.箭头函数

  ``` <button onClick={() => this.handleEdit(param)}>编辑</button>```

- echarts画过哪些图？

  折线图、柱状图、饼图...

  

- echarts的lengen怎么用的？

  ```js
  data: [{
      name: '系列1',
      // 强制设置图形为圆。
      icon: 'circle',
      // 设置文本为红色
      textStyle: {
          color: 'red'
      }
  }]
  ```

- bind、call、aplly区别？

  bind会创建一个函数并改变this，接受一个参数序列。

  call和apply只是调用一个函数，并制定this，这两个的区别是apply接受一个参数数组，call接受一个参数序列。

- 改变 this 的指向我总结有以下几种方法：
  - 使用 ES6 的箭头函数
  - 在函数内部使用 `_this = this`
  - 使用 `apply`、`call`、`bind`
  - new 实例化一个对象

- js中有几个作用域？

  全局作用域、局部作用域、块级作用域ß

- 箭头函数中this作用域指向？

  指向父执行上下文的this

- 原生js中如何绑定事件的？

  1.直接在dom元素上绑定

  ```
  <input  onclick="alert('谢谢支持')"  type="button"  value="点击我，弹出警告框" />
  ```

  2.在js中绑定

  ```
  document.getElementById("demo").onclick=function(){
      alert(this.getAttribute("type"));  //  this 指当前发生事件的HTML元素，这里是<div>标签
  }
  ```

  3.绑定事件监听函数

  addEventListener() 或 attachEvent() 来绑定事件监听函数。

- 事件的event对象有哪些常见的属性？

  e.clientX，e.clientY，e.target,e.keyCode...

- target和currentTarget区别？

  e.target指向触发事件监听的对象。

  e.currentTarget指向添加监听事件的对象。

- es6对象结构

  对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

  变量没有对应的同名属性，导致取不到值，最后等于`undefined`。

- flex布局怎么用？

  容器属性：

  - flex-direction(属性决定主轴的方向)
  - flex-wrap(如果一条轴线排不下，如何换行)
  - flex-flow(`flex-direction`属性和`flex-wrap`属性的简写形式)
  - justify-content(定义了项目在主轴上的对齐方式。)
  - align-items(定义项目在交叉轴上如何对齐)
  - align-content(定义了多根轴线的对齐方式)

  项目的属性

  - order(项目的排列顺序)
  - flex-grow(定义项目的放大比例)
  - flex-shrink(定义了项目的缩小比例)
  - flex-basis(定义了在分配多余空间之前，项目占据的主轴空间)
  - flex(`flex-grow`, `flex-shrink` 和 `flex-basis`的简写)
  - align-self(允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性)

- 圆角的实现，以及圆形的实现？

  Border-redius:50%;

- 实现三角形

  ```js
   border-color: #57af1a #fff #fff #fff;
                  border-style: solid;
                  border-width: 100px 60px 0 60px;
                  height: 0;
                  width: 0;
                  display: inline-block;
  ```

- 盒模型有哪两种模式？用什么属性指定？

  在w3c盒模型中，设置的width/height是content的宽度/高度，在怪异模式中width/height设置的是content+padding+border宽度/高度。

  box-sizing设置模式

- Html 中的本地存储有哪些？

  LocalStorage、sessionStorage、Cookie

  | 特性           | Cookie                                                       | localStorage                                                | sessionStorage                               |
  | -------------- | ------------------------------------------------------------ | ----------------------------------------------------------- | -------------------------------------------- |
  | 数据的生命期   | 一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效 | 除非被清除，否则永久保存                                    | 仅在当前会话下有效，关闭页面或浏览器后被清除 |
  | 存放数据大小   | 4K左右                                                       | 一般为5MB                                                   |                                              |
  | 与服务器端通信 | 每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题 | 仅在客户端（即浏览器）中保存，不参与和服务器的通信          |                                              |
  | 易用性         | 需要程序员自己封装，源生的Cookie接口不友好                   | 源生接口可以接受，亦可再次封装来对Object和Array有更好的支持 |                                              |

- cookie属性

  除了name（名）和value（值），cookie还有以下一些可选属性，用来控制cookie的有效期，作用域，安全性等：

  - **expires属性——时间要转成GMT形式 ： toGMTString()；**
  - **domain属性可以使多个web服务器共享cookie**

- 跨域问题

  **Jsonp**,**cors**,**通过修改document.domain来跨子域**、**使用window.name来进行跨域**
  ## 面试2

- js事件机制？

  JavaScript 事件触发有三个阶段。

  - 捕获阶段
  - 目标阶段
  - 冒泡阶段

  通常我们使用 `addEventListener` 注册事件，

  `target` 和 `currentTarget`区别

  - `target` 是触发事件的某个具体的对象，只会出现在事件机制的目标阶段，即“谁触发了事件，谁就是 `target` 。
  - `currentTarget` 是绑定事件的对象。

  我们可以通过 `e.stopPropagation` 中断事件的向下或向上传递。我们可以使用 `e.preventDefault` 取消默认行为。

- 事件委托？

  事件委托是将事件监听器添加到父元素，而不是每个子元素单独设置事件监听器。当触发子元素时，事件会冒泡到父元素，监听器就会触发。这种技术的好处是：

  - 内存占用减少，因为只需要一个父元素的事件处理程序，而不必为每个后代都添加事件处理程序。
  - 无需从已删除的元素中解绑处理程序，也无需将处理程序绑定到新元素上。

- div移动有哪些方法？

  1.设置position：absolute；再设置left和top;

  2.css3的transform：translate(50%);

  3.animation利用`@keyframes` 中创建动画；

- 深拷贝和浅拷贝？

  1.数组的浅拷贝：我们可以利用数组的一些方法比如：slice、concat 返回一个新数组的特性来实现拷贝。

  2.深拷贝：`JSON.parse(JSON.stringify(arr))`;

  简单实现：

  ```js
  //浅拷贝
  function shallowCopy (obj){
    if(typeof obj !== 'object') return;
    var new_obj = obj instanceof Array ? []:{};
    for (var key in obj){
      if(obj.hasOwnProperty(key)){
         new_obj[key] = obj[key];
         }
    }
    return new_obj;
  }
  //深拷贝
  function deepCopy(obj){
    if(typeof obj !== 'object')return;
    var new_obj = obj instanceof Array?[]:{};
    for(var key in obj){
      if(obj.hasOwnProperty(key)){
         new_obj[key] = typeof obj[key]==='object'?deepCopy(obj[key]):obj[key];
         }
    }
    return new_obj;
  }
  ```

  
  ## 面试3

- 首先自我介绍一下

  你好，我叫xx，从事前端开发有n年的经验，目前就职于***信息科技有限公司，主要负责水与环境方向的数据可视化以及后台管理页面的开发与维护。

- 有没有react+redux之类的开发？

  公司主要使用dvajs作为轻型框架搭建一个项目，dvajs中就集成了react+redux+redux-saga+react-router.

- 了解过Next.js吗？

  Next.js是一个用于React应用的极简的服务端渲染框架。

  客户端渲染和服务器渲染有什么区别？

  - **客户端渲染 -** 通常我们使用 React，你的浏览器会下载一个最小化的 HTML 页面，然后用 JavaScript 来生成、填充内容。

  - 而在 **服务器端渲染**，在服务端已经生成好初始内容，所以你的浏览器下载的是一个完整的页面，它的内容早已在里面。但内容的更新仍然还是需要浏览器来处理。

- 这些项目是跑在用户的浏览器吗？有没有用node跑过你的这些项目？

  是的，没有。

- 你主要做的功能模块有哪些？

   利用fabric.js做的组态配置和展示模块，利用video.js做的视频云台控制模块，报警信息模块等

- 有没有自己封装过一些UI库？

   在做项目的过程中遇到复用性比较高的模块，我会把它单独封装起来，用的时候直接调这个模块传一些配置以及数据，然后就生产出自己想要的业务模块。像我封装过视频播放的模块，表单的动态增删模块，地图打点的模块

- video.js是用来播哪些视频

  之前直接使用video.js去做视频直播，利用他的一些api可以控制自动播放，有的时候画面会出现变形的问题，最后发现百度改版的video.js player可以自适应画面。http://cyberplayer.bcelive.com/demo/new/index.html (我们用的是rtmp流直播)

  只是比较蛋疼的是要注册一个百度的accessKey。

- 移动端h5有做过吗？小程序有了解过吗？

  移动端在我们项目中没做过。小程序没做过。

- 除了react，像vue,angular有用过吗?

  没用过。

- css里面预处理器l你用的是less,有用过其他的吗？

   Sass、Less和Stylus。

  - Sass和Less语法严谨、Stylus相对自由。因为Less长得更像 css，所以它可能学习起来更容易。
  - Sass 和 Compass、Stylus 和 Nib 都是好基友。
  - Sass 和 Stylus 都具有类语言的逻辑方式处理：条件、循环等，而 Less 需要通过When等关键词模拟这些功能，这方面 Less 比不上 Sass 和 Stylus。
  - Less 在丰富性以及特色上都不及 Sass 和 Stylus，若不是因为 Bootstrap 引入了 Less，可能它不会像现在这样被广泛应用（个人愚见）。

- 你们前端项目打包是怎么打的？

   利用webpack

- 有一个很大很大很大的数组只有`0`，`1`写一个算法把`0`放在数组左面，`1`放在数组右面。

  我首先想到的是下面的这个，会多出两个额外空间，数组很大的话会有问题。

  ```js
  function a(arr){
    let left=[];
    let right=[];
  	for(let i=0 ; i<arr.length ;i++){
        if(arr[i]===0){
          	left.push(0);
           }else{
           	right.push(1);
           }
      }
    return left.concat(right);
  }
  let arr=[0,1,0,0,1,1,0,1,1,1,0,0,0,0];
  console.log(a(arr))
  ```

  

  我们考虑牺牲时间复杂度来降低空间复杂度，设计如下：(类似于冒泡排序)

  ```js
  function a(arr){
  	for(let i=0 ; i<arr.length ;i++){
        if(arr[i]===1){
          	for(let j = i+1 ; j<arr.length;j++){
                if(arr[j]===0){
                  arr[i]=0;
                  arr[j]=1;
                  break;;
                }
              }
           }
      }
    return arr;
  }
  let arr=[0,1,0,0,1,1,0,1,1,1,0,0,0,0];
  console.log(a(arr));//[0,0,0,0,0,0,0,0,1,1,1,1,1,1]
  ```

- 1~n个连序的无序数组，从中删除一个，你怎么找出来删除的这个？

  例如：[1，2，6，4，3，5]；[1，6，4，3，5]；

  ​		找出来的应该是2；

  我想出来的是

  ```js
  function a(arr1,arr2){
  	for(let i=0 ; i<arr1.length ;i++){
        if(arr2.indexOf(arr1[i])===-1){
          	return arr1[i];
           }
      }
  }
  let arr1=[0,1,2,6,3,5,4];
  let arr2=[0,1,6,3,5,4];
  console.log(a(arr1,arr2));//2
  ```

- window下面有哪些经常使用的属性和方法？

  - ```js
    window.close();  //关闭窗口
    window.alert("message");  //弹出一个具有OK按钮的系统消息框，显示指定的文本 
    window.confirm("Are you sure?");  //弹出一个具有OK和Cancel按钮的询问对话框，返回一个布尔值  
    window.history.go(-1); //访问浏览器窗口的历史，负数为后退，正数为前进 
    window.history.back();  //向后 
    window.history.forward();//向前
    window.history.length  //可以查看历史中的页面数
    ```

- Html5对history新增了有哪些方法？

  HTML5引入了 `history.pushState()` 和` history.replaceState()` 方法，它们分别可以添加和修改历史记录条目。

  (react单页面应用的回退是怎么做到只在单页面中回退的？react-router是怎么实现的？页面中用#url有很多问题，比如页面中带锚点的链接就失效了，重点看一下MDN)

- 浏览器中如何获取客户端类型（安卓，iPhone，pc），浏览器类型(IE,chrome)?

  `navigator`对象：包含大量有关Web浏览器的信息，在检测浏览器及操作系统上非常有用，也可用`window.navigator`引用它.

  ```js
  navigator.appName  //官方浏览器名的字符串表示  
  
  navigator.appVersion  //浏览器版本
  ```

  ```js
  
  if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
    var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      //在微信中打开
    }
    if (ua.match(/WeiBo/i) == "weibo") {
      //在新浪微博客户端打开
    }
    if (ua.match(/QQ/i) == "qq") {
      //在QQ空间打开
    }
    if (browser.versions.ios) {
      //是否在IOS浏览器打开
    } 
    if(browser.versions.android){
      //是否在安卓浏览器打开
    }
  } else {
    //否则就是PC浏览器打开
  
  ```

  再附上browser的代码，通过以下方法可以判断很多浏览器。包括判断IE浏览器，Opera浏览器，苹果浏览器，谷歌浏览器，火狐浏览器等。

  ```js
  
  var browser = {
   versions: function () {
    var u = navigator.userAgent, app = navigator.appVersion;
    return {   //移动终端浏览器版本信息
     trident: u.indexOf('Trident') > -1, //IE内核
     presto: u.indexOf('Presto') > -1, //opera内核
     webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
     gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
     mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
     ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
     android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
     iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
     iPad: u.indexOf('iPad') > -1, //是否iPad
     webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
    };
   }(),
   language: (navigator.browserLanguage || navigator.language).toLowerCase()
  
  ```

- js中事件冒泡在不同浏览器中有什么差异？

DOM 的事件在传播时，会从根节点开始往下传递到 `target` ，若注册了事件监听器，则监听器处于捕获阶段。

`target` 就是触发事件的具体对象，这时注册在 `target` 上的事件监听器处于目标阶段。

最后，事件再往上从 `target` 一路逆向传递到根节点，若注册了事件监听器，则监听器处于冒泡阶段。

IE5.5及更早版本中的事件冒泡会跳过元素（从直接跳到document），IE9、Firefox、Chrome和Safari则将事件一直冒泡到window对象；老版本的浏览器不支持事件捕获。

我们可以通过 `e.stopPropagation` 中断事件的向下或向上传递。

我们可以使用 `e.preventDefault` 取消默认行为。

- target与currentTarget有什么区别？
  - `target` 是触发事件的某个具体的对象，只会出现在事件机制的目标阶段，即谁触发了事件，谁就是 `target` 。
  - `currentTarget` 是绑定事件的对象。

- 点击一个按钮出现一个弹框，再点击弹框外的任意地方让这个弹框消失，怎么去做？

  一般处理方式就是判断点击事件的 e.target 是否为非弹层区域。不是的话，就关闭弹层。
  注意将监听事件绑定在document上。绑定在body上，页面body高度没有超过一屏时，点击非body区域，是不起作用的。

- 判断一个对象是不是数组？

  - 验证原型对象:

    ```js
    1、Object.getPrototypeOf(obj) == Array.prototype
    ```

    getPrototypeOf: 这是Object自带的一个API，作用是获取一个对象的原型对象.

    ```js
    2、var bool = Array.prototype.isPrototypeOf(obj)
    ```

  ​		每个对象都有一个`isPrototypeOf`的API，继承自`Object.prototype`，用来 判断father（Array）是否		是child（obj）的父对象。

  - 从构造函数上判断:

    ```js
    1、obj.constructor == Array
    ```

    构造函数的prototype指向原型对象，同时，原型对象有constructor指回构造函数对象，constructor只在原型对象上有.

    ```js
    2、var bool = obj instanceof Array
    ```

    instance: 判断对象（obj）是否由构造函数（Array）创建出来

  - 检查内部属性class+call或apply

    这个class是每个对象中记录对象创建时使用的类型的属性，一旦对象被创建，class属性就无法被修改！

    获得class的唯一的办法就是调用Object.prototype中的toString()方法

    输出结果有"[object Object]"，"[object Function]"等

    ```js
    Object.prototype.toString.call(obj)=="[object Array]"
    ```

  - Es6中的API，Array.isArray(obj)

    ```js
    var arr = [1,2,3,4];
    Array.isArray(arr);//true
    ```

- 一个数组中取出最大值，怎么去做？

  ```js
   var arr = [6, 4, 1, 8, 2, 11, 23];
  
    ①
      var max = Math.max(...arr); // 23
  
  
    ②
      Math.max.apply(null, arr); // 23
  
  
    ③
      var result = arr[0];
      for (var i = 1; i < arr.length; i++) {
        result = Math.max(result, arr[i]);
      }
      console.log(result); // 23
  
  
    ④
      function max(prev, next) {
        return Math.max(prev, next);
      }
      arr.reduce(max); // 23
  
  
    ⑤
      arr.sort(function(a, b) {
        return a - b;
      });
      arr[arr.length - 1]; // 23
  ```

- `Math.max()` 函数返回一组数中的最大值。

   参数是一组数值。

- bind、call、aplly区别？

  bind会创建一个函数并改变this，接受一个参数序列。

  call和apply只是调用一个函数，并制定this，这两个的区别是apply接受一个参数数组，call接受一个参数序列。

- es6展开一个数组使用什么方法？

  扩展运算符（spread）是三个点（`...`）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。

- 异步请求xhr的状态值有哪些？

  ```
  0``：初始化，XMLHttpRequest对象还没有完成初始化
  1``：载入，XMLHttpRequest对象开始发送请求
  2``：载入完成，XMLHttpRequest对象的请求发送完成
  3``：解析，XMLHttpRequest对象开始读取服务器的响应
  4``：完成，XMLHttpRequest对象读取服务器响应结束
  ```

  参考：[Ajax关于readyState（状态值）和status（状态码）的研究](https://www.cnblogs.com/liu-fei-fei/p/5618782.html)

- 常见web安全及防护原理

   sql注入原理

  就是通过把SQL命令插入到Web表单递交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的SQL命令。

  总的来说有以下几点：

  ```
      1.永远不要信任用户的输入，要对用户的输入进行校验，可以通过正则表达式，或限制长度，对单引号和双"-"进行转换等。
  
      2.永远不要使用动态拼装SQL，可以使用参数化的SQL或者直接使用存储过程进行数据查询存取。
  
      3.永远不要使用管理员权限的数据库连接，为每个应用使用单独的权限有限的数据库连接。
  
      4.不要把机密信息明文存放，请加密或者hash掉密码和敏感的信息。
  ```

  > XSS原理及防范

  Xss(cross-site scripting)攻击指的是攻击者往Web页面里插入恶意 `html`标签或者`javascript`代码。比如：攻击者在论坛中放一个

  看似安全的链接，骗取用户点击后，窃取`cookie`中的用户私密信息；或者攻击者在论坛中加一个恶意表单，

  当用户提交表单的时候，却把信息传送到攻击者的服务器中，而不是用户原本以为的信任站点。

  > XSS防范方法

  首先代码里对用户输入的地方和变量都需要仔细检查长度和对`”<”,”>”,”;”,”’”`等字符做过滤；其次任何内容写到页面之前都必须加以`encode`，避免不小心把`html tag` 弄出来。这一个层面做好，至少可以堵住超过一半的`XSS` 攻击。

  首先，避免直接在`cookie` 中泄露用户隐私，例如email、密码等等。

  其次，通过使`cookie` 和系统`ip` 绑定来降低`cookie` 泄露后的危险。这样攻击者得到的`cookie` 没有实际价值，不可能拿来重放。

  如果网站不需要再浏览器端对`cookie` 进行操作，可以在`Set-Cookie` 末尾加上`HttpOnly` 来防止`javascript` 代码直接获取`cookie` 。

  尽量采用`POST` 而非`GET` 提交表单

  > XSS与CSRF有什么区别吗？

  `XSS`是获取信息，不需要提前知道其他用户页面的代码和数据包。`CSRF`是代替用户完成指定的动作，需要知道其他用户页面的代码和数据包。

  要完成一次`CSRF`攻击，受害者必须依次完成两个步骤：

  ```
  登录受信任网站A，并在本地生成Cookie。
  
  在不登出A的情况下，访问危险网站B。
  ```

  > CSRF的防御

  - 服务端的`CSRF`方式方法很多样，但总的思想都是一致的，就是在客户端页面增加伪随机数。
  - 通过验证码的方法

- 什么是HttpOnly?

  如果您在cookie中设置了HttpOnly属性，那么通过js脚本将无法读取到cookie信息，这样能有效的防止XSS攻击.

- LocalStorage、sessionStorage、Cookie区别？

  

  | 特性           | Cookie                                                       | localStorage                                                | sessionStorage                               |
  | -------------- | ------------------------------------------------------------ | ----------------------------------------------------------- | -------------------------------------------- |
  | 数据的生命期   | 一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效 | 除非被清除，否则永久保存                                    | 仅在当前会话下有效，关闭页面或浏览器后被清除 |
  | 存放数据大小   | 4K左右                                                       | 一般为5MB                                                   |                                              |
  | 与服务器端通信 | 每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题 | 仅在客户端（即浏览器）中保存，不参与和服务器的通信          |                                              |
  | 易用性         | 需要程序员自己封装，源生的Cookie接口不友好                   | 源生接口可以接受，亦可再次封装来对Object和Array有更好的支持 |                                              |

- 0.1+0.2==0.3是true还是false为什么，怎么处理让他们相等?

  - 为什么0.1 + 0.2 不等于0.3。因为计算机不能精确表示0.1， 0.2这样的浮点数，计算时使用的是带有舍入误差的数
  - 并不是所有的浮点数在计算机内部都存在舍入误差，比如0.5就没有舍入误差
  - 具有舍入误差的运算结可能会符合我们的期望，原因可能是“负负得正”
  - 怎么办？1个办法是使用整型代替浮点数计算；2是不要直接比较两个浮点数，而应该使用bignumber.js这样的浮点数运算库

  利用toFixed()处理后可以解决这个问题。

- 盒模型有哪两种模式？用什么属性指定？

  在w3c盒模型中，设置的width/height是content的宽度/高度，在怪异模式中width/height设置的是content+padding+border宽度/高度。

  用box-sizing指定。

- 画一个正方形的div，width等于浏览器窗口的大小.

  Width = windows.innerWidth;或document.body.clientWidth;

- Padding-top:100%;margin-top:100%;这里的100%是相对哪个？

  赋值为%百分比的时候，是按父元素的width为参照物。

- 垂直居中的布局，

  1.绝对定位与负边距实现：

  利用绝对定位，将元素的top和left属性都设为50%，再利用margin边距，将元素回拉它本身高宽的一半，实现垂直居中。核心CSS代码如下：

  ```
  `#container{``    ``position``:``relative``;``}` `#``center``{``    ``width``:``100px``;``    ``height``:``100px``;``    ``position``:``absolute``;``    ``top``:``50%``;``    ``left``:``50%``;``    ``margin``:``-50px` `0` `0` `-50px``;``}`
  ```

  2.使用flex布局。

  ```js
  #box {
      width: 300px;
      height: 300px;
      background: #ddd;
      display: flex;
      align-items: center;
  }
  ```

  3.使用transform的translate属性。

  ```js
  #box {
      width: 300px;
      height: 300px;
      background: #ddd;
      position: relative;
  }
  #child {
      background: orange;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
  }
  ```

- 鼠标移到一个按钮上时浮框出现，鼠标移除时消失

  用js设置定时器，过一段时间执行消失函数。

  用css,在外层加一个大的div包裹着。

- 小三角的气泡提示框怎么画出来的?

  可以画一个小正方形，利用**transform**: rotate(45deg);将正方形旋转45度。

- 函数的防抖和节流，

  防抖是防止频繁触发，过一段时间才会触发事件；节流的话是频繁触发的事件每隔一段时间触发一次。

- react中，父组件调子组件，子组件调父组件怎么去做？

  前期我们说了父子组件互相通过`props`传递数据的方法父子组件的通讯,

  利用ref去做父调子

  ```js
  import React, {Component} from 'react';
  
  export default class Parent extends Component {
      render() {
          return(
              <div>
                  <Child onRef={this.onRef} />
                  <button onClick={this.click} >click</button>
              </div>
          )
      }
  
      onRef = (ref) => {
          this.child = ref
      }
  
      click = (e) => {
          this.child.myName()
      }
  
  }
  
  class Child extends Component {
      componentDidMount(){
          this.props.onRef(this)
      }
  
      myName = () => alert('xiaohesong')
  
      render() {
          return ('woqu')
      }
  }
  ```
- ref是做什么的？

  标识dom的
## 笔试题总结
### http状态码301和302
- 301 redirect: 301 代表永久性转移(Permanently Moved)

- 302 redirect: 302 代表暂时性转移(Temporarily Moved )
### http中常用的请求方法？
①、GET：用于请求访问已被url识别的资源，可以通过url传参给服务器

②、POST：用于传输信息给服务器

③、PUT：传输文件，报文体中包含文件内容，保存在对应的url位置

④、HEAD：获得报文首部，与GET方法相似，只是不返回报文主体，一般用于验证一个内容是否正常存在，或者url是否有效

⑤、OPTIONS：返回服务器可用的方法（请求方法）

⑥、TRACE：查看http协议有没被修改。

⑦、DELETE ：删除对应url位置的文件
### 正则表达式验证邮箱格式
```js
var reEmail=/^(\w+\.?)*\w+@(?:\w+\.)\w+$/;
```
### 判断一个对象是数字
- instanceof
instanceof运算符可以用来判断某个构造函数的prototype属性所指向的對象是否存在于另外一个要检测对象的原型链上。
```js
const a = [];
const b = {};
console.log(a instanceof Array);//true
console.log(a instanceof Object);//true,在数组的原型链上也能找到Object构造函数
console.log(b instanceof Array);//false
```
- constructor
```js
//定义一个数组
const a = [];
//作死将constructor属性改成了别的
a.contrtuctor = Object;
console.log(a.constructor == Array);//false (哭脸)
console.log(a.constructor == Object);//true (哭脸)
console.log(a instanceof Array);//true (instanceof火眼金睛)
```
- Object的toString方法
```js
const a = ['Hello','Howard'];
const b = {0:'Hello',1:'Howard'};
const c = 'Hello Howard';
Object.prototype.toString.call(a);//"[object Array]"
Object.prototype.toString.call(b);//"[object Object]"
Object.prototype.toString.call(c);//"[object String]"
```
- isArray方法
```js
const a = [];
const b = {};
Array.isArray(a);//true
Array.isArray(b);//false
```
### 获取浏览器的ua(userAgent)
```js
navigator.userAgent
```
### SPA实现history页面跳转常用的两个方法
pushState()、replaceState()
### web存储方式有哪些？
- cookie
- sessionStorage
- localStorage
- application cache（离线缓存）
### 浏览器实现js多线程提供的原生对象是？
web worker
### css伪类清浮动
```css
.clearfix:after{
  content: "020"; 
  display: block; 
  height: 0; 
  clear: both; 
  visibility: hidden;  
  }

.clearfix {
  /* 触发 hasLayout */ 
  zoom: 1; 
  }
```
### css水平垂直居中
- 第一种
```css
#container{
    position:relative;
}
#center{
    width:100px;
    height:100px;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
}
```
- 第二种
```css
#container{
    position:relative;
}

#center{
    width:100px;
    height:100px;
    position:absolute;
    top:50%;
    left:50%;
    margin:-50px 0 0 -50px;
}
```
- 第三种
```css
#container{
    position:relative;
}

#center{
    position:absolute;
    margin:auto;
    top:0;
    bottom:0;
    left:0;
    right:0;
}
```
- 第四种 flex
```css
#container{
    display:flex;
    justify-content:center;
    align-items: center;
}
```
### 跨域的解决方案
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
### 一个函数题
- 实现一个函数，入参是一个字符串，判断字符串中是否包含重复字母，如果包含返回第一个重复字母的下标，不包含返回-1，（备注：时间复杂度越低越好，不允许使用indexof、正则等方法）。
```js
let str="liwierose";
function foo(str){
let arr=str.split('');
 let len=arr.length;
  let num=[];
  for(let i=0;i<len;i++){
    for(let j=i+1;j<len;j++){
      if(arr[i]==arr[j]){
        num.push(i);
      }
  }
  }
  if(num.length>0){
    return num[0];
  }else{
  return -1;
  }
}
console.log(foo(str));
```
### 使用Git命令行，创建一个feature/detail的分支，并推到远程；
```js
$ git checkout -b detail
$ git push origin detail:detail

```
### 实现less的一个混合，或者sass的函数。
- 要求：接受一个参数n（n的默认值为1），在文本溢出n行后，尾部变成省略号。
。。。。待整理

## 电面4（有赞）

### 首先介绍下你自己
我叫xxx,从事前端开发xxx年，.......
### 如何遍历一个对象？
`for in`、`Object.keys`、`Object.getOwnProperty`三种方法
- 一、对非Array对象类型的遍历
  - 1、for in
  主要用于遍历对象的可枚举属性，包括自有属性、继承自原型的属性
  ```js
  var obj = {"name":"tom","sex":"male"}；

  Object.defineProperty(obj, "age", {value:"18", enumerable:false});//增加不可枚举的属性age

  Object.prototype.protoPer1 = function(){console.log("name is tom");};//通过原型链增加属性，为一个函数

  Object.prototype.protoPer2 = 2;////通过原型链增加属性，为一个整型值2

  for(var a in obj)

  console.log(a);

  //   name
  //   sex
  //   protoPer1
  //   protoPer2
  ```
  `总结：for in 主要用于遍历对象的可枚举属性，包括自有属性、继承自原型的属性，示例中的属性age为不可可枚举，所以没有输出。
  - 2、Object.keys

  此方法返回一个数组，元素均为对象自有可枚举的属性
  ```js
  var obj = {"name":"tom","sex":"male"}；

  Object.defineProperty(obj, "age", {value:"18", enumerable:false});//增加不可枚举的属性age

  Object.prototype.protoPer1 = function(){console.log("name is tom");};//通过原型链增加属性，为一个函数

  Object.prototype.protoPer2 = 2;////通过原型链增加属性，为一个整型值2

  console.log(Object.keys(obj));
  //  ["name","sex"]
  ```
  总结：Object.keys主要用于遍历对象自有的可枚举属性，不包括继承自原型的属性和不可枚举的属性。
  - 3、Object.getOwnProperty
  此方法用于返回对象的自有属性，包括可枚举和不可枚举的属性
  ```js
  var obj = {"name":"tom","sex":"male"}；

  Object.defineProperty(obj, "age", {value:"18", enumerable:false});//增加不可枚举的属性age

  Object.prototype.protoPer1 = function(){console.log("name is tom");};//通过原型链增加属性，为一个函数

  Object.prototype.protoPer2 = 2;////通过原型链增加属性，为一个整型值2

  console.log(Object.getOwnPropertyNames(obj));
  //   ["name","sex","age"]
  ```
- 二、对Array对象类型的遍历
  - 1、for in
  ```js
  var arr = [1,2,3,4,5,6];

  for(var a in arr) console.log(a);
  //0,1,2,3,4,5
  ```
  总结：输出为数组对象的index 值。
  - 2、Object.keys
  ```js
  var arr = [1,2,3,4,5,6];

  console.log(Object.keys(arr));

  // ["0","1","2","3","4","5"]
  ```
  总结：输出为数组对象的index 值。
  - 3、Object.getOwnProperty
  ```js
  var arr = [1,2,3,4,5,6];

  console.log(Object.getOwnPropertyNames(arr));
  //["0","1","2","3","4","5","length"]
  ```
  总结：输出为数组对象的index 值和数组长度的属性值。
### 如何实现（iterator）遍历器
```js
  function makeIterator(array){
	var nextIndex=0;
	return {
		next:function(){
			//value属性表示当前成员的值，done属性是一个布尔值，表示遍历是否结束。
			return nextIndex<array.length?{value:array[nextIndex],done:false}:{value:undefined,done:true};
		}
	};
}
```
参考：[JavaScript遍历器](http://www.imooc.com/article/271863?block_id=tuijian_wz)
### 如何判断一个对象是数组
- object.isArray()
- instanceOf
- object.propertype.toString()
### instanceOf的内部实现机制
参考[浅谈 instanceof 和 typeof 的实现原理](https://juejin.im/post/5b0b9b9051882515773ae714)
### ES6 模块与 CommonJS 模块的差异
参考[阮一峰-Module 的加载实现](https://es6.ruanyifeng.com/#docs/module-loader)
### 你会用的技术栈
react
### 使用react的版本
项目中使用15.3版本以上，最新的是16.8版本
### react16版本比15版本有什么改变
生命周期变化。。。
增加hook。。。
### Component和PureComponent相关问题？
除了为你提供了一个具有浅比较的shouldComponentUpdate方法，PureComponent和Component基本上完全相同。当props或者state改变时，PureComponent将对props和state进行浅比较。另一方面，Component不会比较当前和下个状态的props和state。因此，每当shouldComponentUpdate被调用时，组件默认的会重新渲染。
参考[何时使用Component还是PureComponent？](https://segmentfault.com/a/1190000014979065)


