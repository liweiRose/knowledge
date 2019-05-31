# CSS
### position的值， relative和absolute分别是相对于谁进行定位的？

- `absolute` :生成绝对定位的元素， 相对于最近一级的 定位不是 static 的父元素来进行定位。
- `fixed` （老IE不支持）生成绝对定位的元素，通常相对于浏览器窗口或 frame 进行定位。
- `relative` 生成相对定位的元素，相对于其在普通流中的位置进行定位。
- `static` 默认值。没有定位，元素出现在正常的流中
- `sticky` 生成粘性定位的元素，容器的位置根据正常文档流计算得出

### 谈谈浮动和清除浮动

浮动的框可以向左或向右移动，直到他的外边缘碰到包含框或另一个浮动框的边框为止。由于浮动框不在文档的普通流中，所以文档的普通流的块框表现得就像浮动框不存在一样。浮动的块框会漂浮在文档普通流的块框上。
### 解释下浮动和它的工作原理？清除浮动的技巧

```
浮动元素脱离文档流，不占据空间。浮动元素碰到包含它的边框或者浮动元素的边框停留。
```
- 利用clear样式清浮动：

  ```js
  .textDiv {
      color: blue;
      border: 2px solid blue;
      clear: left;//需要清浮动的元素设置此属性
  }
  ```

- 父元素结束标签之前插入清除浮动的块级元素

  ```js
  .blankDiv {
      clear: both; // or left
  }
  ```

- 利用伪元素 ( :after)

  ```js
  .clearfix:after {
      content: '.';
      height: 0; //空元素设置高为0
      display: block;//必须是块级元素
      clear: both;
  }
  ```

- 利用overflow清除浮动 (  原理是创建一个BFC:块级格式上下文)
### `display:none`和`visibility:hidden`的区别？

```
display:none  隐藏对应的元素，在文档布局中不再给它分配空间，它各边的元素会合拢，就当他从来不存在。

visibility:hidden  隐藏对应的元素，但是在文档布局中仍保留原来的空间。
```

### `position:absolute`和`float`属性的异同

- 共同点：对内联元素设置`float`和`absolute`属性，可以让元素脱离文档流，并且可以设置其宽高。

- 不同点：`float`仍会占据位置，`absolute`会覆盖文档流中的其他元素。

### 介绍一下box-sizing属性？

`box-sizing`属性主要用来控制元素的盒模型的解析模式。默认值是`content-box`。

- `content-box`：让元素维持W3C的标准盒模型。元素的宽度/高度由`border + padding + content`的宽度/高度决定，设置`width/height`属性指的是`content`部分的宽/高
- `border-box`：让元素维持IE传统盒模型（IE6以下版本和IE6~7的怪异模式）。设置`width/height`属性指的是`border + padding + content`

标准浏览器下，按照W3C规范对盒模型解析，一旦修改了元素的边框或内距，就会影响元素的盒子尺寸，就不得不重新计算元素的盒子尺寸，从而影响整个页面的布局。

### CSS 选择符有哪些？哪些属性可以继承？优先级算法如何计算？ CSS3新增伪类有那些？

```
		1.id选择器（ # myid）

    2.类选择器（.myclassname）

    3.标签选择器（div, h1, p）

    4.相邻选择器（h1 + p）

    5.子选择器（ul > li）

    6.后代选择器（li a）

    7.通配符选择器（ * ）

    8.属性选择器（a[rel = "external"]）

    9.伪类选择器（a: hover, li:nth-child）
```

**优先级为:**

```
!important > id > class > tag
```

`important` 比 内联优先级高,但内联比 `id` 要高

### CSS3新增伪类举例：

```
		p:first-of-type 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。

    p:last-of-type  选择属于其父元素的最后 <p> 元素的每个 <p> 元素。

    p:only-of-type  选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。

    p:only-child    选择属于其父元素的唯一子元素的每个 <p> 元素。

    p:nth-child(2)  选择属于其父元素的第二个子元素的每个 <p> 元素。

    :enabled  :disabled 控制表单控件的禁用状态。

    :checked        单选框或复选框被选中。
```

### CSS3有哪些新特性？

```js
CSS3实现圆角（border-radius），

阴影（box-shadow），

对文字加特效（text-shadow、），

线性渐变（gradient），

旋转（transform）

transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);//旋转,缩放,定位,倾斜

增加了更多的CSS选择器  多背景 rgba

在CSS3中唯一引入的伪元素是::selection.

媒体查询，多栏布局

border-image
```

### CSS3中新增了一种盒模型计算方式：`box-sizing`。

盒模型默认的值是`content-box`, 新增的值是`padding-box`和`border-box`，几种盒模型计算元素宽高的区别如下：

- content-box（默认）

布局所占宽度Width：

```
Width = width + padding-left + padding-right + border-left + border-right
```

布局所占高度Height:

```
Height = height + padding-top + padding-bottom + border-top + border-bottom
```

- padding-box

布局所占宽度Width：

```
Width = width(包含padding-left + padding-right) + border-left + border-right
```

布局所占高度Height:

```
Height = height(包含padding-top + padding-bottom) + border-top + border-bottom
```

- border-box

布局所占宽度Width：

```
Width = width(包含padding-left + padding-right + border-left + border-right)
```

布局所占高度Height:

```
Height = height(包含padding-top + padding-bottom + border-top + border-bottom)
```
### 字体font-family
```js
    @ 宋体      SimSun
    @ 黑体      SimHei
    @ 微信雅黑   Microsoft Yahei
    @ 微软正黑体 Microsoft JhengHei
    @ 新宋体    NSimSun
    @ 新细明体  MingLiU
    @ 细明体    MingLiU
    @ 标楷体    DFKai-SB
    @ 仿宋     FangSong
    @ 楷体     KaiTi
    @ 仿宋_GB2312  FangSong_GB2312
    @ 楷体_GB2312  KaiTi_GB2312  
    @
    @ 说明：中文字体多数使用宋体、雅黑，英文用Helvetica
    
    body { font-family: Microsoft Yahei,SimSun,Helvetica; } 
```
### 消除transition闪屏
```js
    .css {
        -webkit-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
        -webkit-perspective: 1000;
    }
    过渡动画（在没有启动硬件加速的情况下）会出现抖动的现象， 以上的 解决方案只是改变 视角 来启动硬件加速的一种方式；
    启动硬件加速的 另外一种方式： 
        .css {
            -webkit-transform: translate3d(0,0,0);
            -moz-transform: translate3d(0,0,0);
            -ms-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
        }
    
    启动硬件加速
    最常用的方式：translate3d、translateZ、transform

    opacity属性/过渡动画（需要动画执行的过程中才会创建合成层，动画没有开始或结束后元素还会回到之前的状态）

    will-chang属性（这个比较偏僻），一般配合opacity与translate使用（而且经测试，除了上述可以引发硬件加速的属性外，
    其它属性并不会变成复合层），

    弊端： 硬件加速会导致 CPU性能占用量过大，电池电量消耗加大 ；因此 尽量避免泛滥使用硬件加速。


```
### css实现单行文本溢出显示 ...
效果：

<img :src="$withBase('/images/cssflow1.png')">

```js
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
当然还需要加宽度width属来兼容部分浏览。

```
### 实现多行文本溢出显示...
效果：

<img :src="$withBase('/images/cssovferlow.png')">

```js
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;

```
适用范围：

因使用了WebKit的CSS扩展属性，该方法适用于WebKit浏览器及移动端；
注：
```js
1、-webkit-line-clamp用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。常见结合属性：
2、display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
3、-webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。

```
如果你觉着这样还不够美观， 那么就接着往下看：

<img :src="$withBase('/images/cssflow2.png')">

实现方法
```js
div {
    position: relative;
    line-height: 20px;
    max-height: 40px;
    overflow: hidden;
}

div:after {
    content: "..."; position: absolute; bottom: 0; right: 0; padding-left: 40px;
    background: -webkit-linear-gradient(left, transparent, #fff 55%);
    background: -o-linear-gradient(right, transparent, #fff 55%);
    background: -moz-linear-gradient(right, transparent, #fff 55%);
    background: linear-gradient(to right, transparent, #fff 55%);
}

不要只顾着吃，要注意胃口，此方法有个弊端 那就是 【未超出行的情况下也会出现省略号】 ，这样会不会很挫！！！ 没办法，只能结合JS 进行优化该方法了。


```
注：
```js

1、将height设置为line-height的整数倍，防止超出的文字露出。
2、给p::after添加渐变背景可避免文字只显示一半。
3、由于ie6-7不显示content内容，所以要添加标签兼容ie6-7（如：<span>…<span/>）；兼容ie8需要将::after替换成:after。

```
### 让图文不可复制
这点应该大家 都很熟悉了， 某些时候【你懂的】为了快捷搜索答案，可是打死也不让你复制.
```js
-webkit-user-select: none; 
-ms-user-select: none;
-moz-user-select: none;
-khtml-user-select: none;
user-select: none;
```
那有些网页为了尊重原创，复制的文本 都会被加上一段来源说明，是如何做到的呢？问的好！ 等的就是你这个问题 -_- 。
大致思路：
```js
1、答案区域监听copy事件，并阻止这个事件的默认行为。
2、获取选中的内容（window.getSelection()）加上版权信息，然后设置到剪切板（clipboarddata.setData()）。
```
### 盒子垂直水平居中
这个问题好像面试必问的吔！反正我是必问的，哈哈！！！ 其实无关多少种实现思路，只要你能实现就可以！

提供4种方法
```js
1、定位 盒子宽高已知， position: absolute; left: 50%; top: 50%; margin-left:-自身一半宽度; margin-top: -自身一半高度;

2、table-cell布局 父级 display: table-cell; vertical-align: middle;  子级 margin: 0 auto;

3、定位 + transform ; 适用于 子盒子 宽高不定时； （这里是本人常用方法）
    
    position: relative / absolute;
    /*top和left偏移各为50%*/
       top: 50%;
       left: 50%;
    /*translate(-50%,-50%) 偏移自身的宽和高的-50%*/
    transform: translate(-50%, -50%); 注意这里启动了3D硬件加速哦 会增加耗电量的 （至于何是3D加速 请看浏览器进程与线程篇）

4、flex 布局
    父级： 
        /*flex 布局*/
        display: flex;
        /*实现垂直居中*/
        align-items: center;
        /*实现水平居中*/
        justify-content: center;

再加一种水平方向上居中 ：margin-left : 50% ; transform: translateX(-50%);
```
### 改变placeholder的字体颜色大小
其实这个方法也就在PC端可以，真机上屁用都没有，当时我就哭了。 但 还是贴出来吧
```js
input::-webkit-input-placeholder { 
    /* WebKit browsers */ 
    font-size:14px;
    color: #333;
} 
input::-moz-placeholder { 
    /* Mozilla Firefox 19+ */ 
    font-size:14px;
    color: #333;
} 
input:-ms-input-placeholder { 
    /* Internet Explorer 10+ */ 
    font-size:14px;
    color: #333;
}
```
### flex 布局 与 grid 布局
这个问题比较简单，用 flex 与 grid 实现如下即可：
<img :src="$withBase('/images/cssflex.png')">
实现方式如下：
```js
      /* flex */
     .box {
       display: flex;
       flex-wrap: wrap;
       width: 100%;
     }
     .box div {
        width: calc(100% / 3 - 2px);
        height: 100px;
        border: 1px solid black;
     }
     /* grid */
     .box {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
     }

     .box div {
        height: 100px;
        border: 1px solid black;
     }
```
### 使用css实现一个持续的动画效果
```js
animation:mymove 5s infinite;
@keyframes mymove {
from {top:0px;}
to {top:200px;}
}
```
主要考：`animation` 用法
- animation-name  规定需要绑定到选择器的 keyframe 名称。


- animation-duration  规定完成动画所花费的时间，以秒或毫秒计。


- animation-timing-function  规定动画的速度曲线。


- animation-delay  规定在动画开始之前的延迟。


- animation-iteration-count  规定动画应该播放的次数。


- animation-direction  规定是否应该轮流反向播放动画。
### 右边宽度固定，左边自适应
- 第一种：
```html
<style>
body{
    display: flex;
}
.left{
    background-color: rebeccapurple;
    height: 200px;
    flex: 1;
}
.right{
    background-color: red;
    height: 200px;
    width: 100px;
}
</style>
<body>
    <div class="left"></div>
    <div class="right"></div>
</body>
```
- 第二种
```html
<style>
    div {
        height: 200px;
    }
    .left {
        float: right;
        width: 200px;
        background-color: rebeccapurple;
    }
    .right {
        margin-right: 200px;
        background-color: red;
    }
</style>
<body>
    <div class="left"></div>
    <div class="right"></div>
</body>
```
### 水平垂直居中
- 第一种
```js
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
```js
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
```js
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
```js
#container{
    display:flex;
    justify-content:center;
    align-items: center;
}
```
### 封装一个函数，参数是定时器的时间，.then执行回调函数。
```js
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
```
### 一个关于 this 指向的问题
```js
obj = {
    name: 'a',
    getName : function () {
        console.log(this.name);
    }
}

var fn = obj.getName
obj.getName()
var fn2 = obj.getName()
fn()
fn2()
```
### 重排和重绘
- 部分渲染树（或者整个渲染树）需要重新分析并且节点尺寸需要重新计算。这被称为重排。注意这里至少会有一次重排-初始化页面布局。
- 由于节点的几何属性发生改变或者由于样式发生改变，例如改变元素背景色时，屏幕上的部分内容需要更新。这样的更新被称为重绘。
### 什么情况会触发重排和重绘？
- 添加、删除、更新 DOM 节点
- 通过 display: none 隐藏一个 DOM 节点-触发重排和重绘
- 通过 visibility: hidden 隐藏一个 DOM 节点-只触发重绘，因为没有几何变化
- 移动或者给页面中的 DOM 节点添加动画
- 添加一个样式表，调整样式属性
- 用户行为，例如调整窗口大小，改变字号，或者滚动。
### 高度已知，三栏布局，左右宽度300，中间自适应
```css
/* 浮动布局 */
  .layout.float .left{
    float:left;
    width:300px;
    background: red;
  }
  .layout.float .center{
    background: yellow;
  }
  .layout.float .right{
    float:right;
    width:300px;
    background: blue;
  }
 /* 决定定位布局 */
 .layout.absolute .left-center-right>div{
  position: absolute;
 }
.layout.absolute .left{
  left:0;
  width: 300px;
  background: red;
}
.layout.absolute .center{
  left: 300px;
  right: 300px;
  background: yellow;
}
.layout.absolute .right{
  right:0;
  width: 300px;
  background: blue;
}
 /* flex布局 */
  .layout.flexbox{
      margin-top: 110px;
    }
    .layout.flexbox .left-center-right{
      display: flex;
    }
    .layout.flexbox .left{
      width: 300px;
      background: red;
    }
    .layout.flexbox .center{
      flex:1;
      background: yellow;
    }
    .layout.flexbox .right{
      width: 300px;
      background: blue;
    }
```
### 如何实现一个最大的正方形
```css
 section {
    width:100%;
    padding-bottom: 100%;
    background: #333;
}
```
### css 的解析顺序
> css 选择器匹配元素是逆向解析
- 因为所有样式规则可能数量很大，而且绝大多数不会匹配到当前的 DOM 元素（因为数量很大所以一般会建立规则索引树），所以有一个快速的方法来判断「这个 selector 不匹配当前元素」就是极其重要的。
- 如果正向解析，例如「div div p em」，我们首先就要检查当前元素到 html 的整条路径，找到最上层的 div，再往下找，如果遇到不匹配就必须回到最上层那个 div，往下再去匹配选择器中的第一个 div，回溯若干次才能确定匹配与否，效率很低。
- 逆向匹配则不同，如果当前的 DOM 元素是 div，而不是 selector 最后的 em，那只要一步就能排除。只有在匹配时，才会不断向上找父节点进行验证。
> 所以为了减少查找时间，尽量不要直接使用标签选择器。
### CSS 有哪些样式可以给子元素继承!
- 可继承的:font-size,font-weight,line-height,color,cursor等
- 不可继承的一般是会改变盒子模型的:display,margin、border、padding、height等
### 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？
- 行内: input,span,a,img以及display:inline的元素
- 块级: p,div,header,footer,aside,article,ul以及display:block这些
- void: br,hr
### CSS3实现一个扇形
```css
.sector {
      width: 0;
      height: 0;
      border-width: 50px;
      border-style: solid;
      border-color: #f00 transparent transparent;
      border-radius: 50px;
    }
```
### box-sizing常用的属性有哪些? 分别有啥作用?
box-sizing有两个值:`content-box`(W3C标准盒模型),`border-box`(怪异模型),

content-box的计算公式会把宽高的定义指向 content,border和 padding 另外计算,
也就是说 content + padding + border = 120px(盒子实际大小)

而border-box的计算公式是总的大小涵盖这三者, content 会缩小,来让给另外两者
content(80px) + padding(5*2px) + border(5*2px) = 100px
### 清除浮动的方式有哪些?比较好的是哪一种?
常用的一般为三种.clearfix, clear:both,overflow:hidden;
比较好是 .clearfix,伪元素万金油版本...后两者有局限性
```css
    .clearfix:after {
      visibility: hidden;
      display: block;
      font-size: 0;
      content: " ";
      clear: both;
      height: 0;
    }
    
    
<!--
为毛没有 zoom ,_height 这些...IE6,7这类需要 csshack 不再我们考虑之内了
.clearfix 还有另外一种写法...
-->

.clearfix:before, .clearfix:after {
	content:"";
	display:table;
}
.clearfix:after{
	clear:both;
	overflow:hidden;
}
.clearfix{
    zoom:1;
}

<!--
用display:table 是为了避免外边距margin重叠导致的margin塌陷,
内部元素默认会成为 table-cell 单元格的形式
-->
```
`clear:both:`若是用在同一个容器内相邻元素上,那是贼好的...有时候在容器外就有些问题了, 比如相邻容器的包裹层元素塌陷

`overflow:hidden`:这种若是用在同个容器内,可以形成 `BFC`避免浮动造成的元素塌陷
### CSS 中transition和animate有何区别? animate 如何停留在最后一帧!
transition一般用来做过渡的, 没时间轴的概念, 通过事件触发(一次),没中间状态(只有开始和结束).

而animate则是做动效,有时间轴的概念(帧可控),可以重复触发和有中间状态;

过渡的开销比动效小,前者一般用于交互居多,后者用于活动页居多;

至于如何让animate停留在最后一帧也好办,就它自身参数的一个值就可以了.
```css
animation-fill-mode: forwards;  
<!--backwards则停留在首帧,both是轮流-->
```
### 说说样式权重的优先级;
`!important` > 行内样式 > `id `> `class` > `tag`

样式权重可以叠加, 比如 `id>class`
### 伪元素有哪些？
```css
::after (:after)
::backdrop 
::before (:before)
::cue (:cue)
::first-letter (:first-letter)
::first-line (:first-line)
::grammar-error 
::marker 
::placeholder 
::selection
::slotted()
::spelling-error 
```
### css sprite是什么,有什么优缺点
css 雪碧图
- 概念：将多个小图片拼接到一个图片中。通过background-position和元素尺寸调节需要显示的背景图案。
- 优点：

  - 减少HTTP请求数，极大地提高页面加载速度
  - 增加图片信息重复度，提高压缩比，减少图片大小
  - 更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现
- 缺点：

  - 图片合并麻烦
  - 维护麻烦，修改一个图片可能需要从新布局整个图片，样式
  ### display: none;与visibility: hidden;的区别
  - 联系：它们都能让元素不可见
- 区别：

  - display:none;会让元素完全从渲染树中消失，渲染的时候不占据任何空间；visibility: hidden;不会让元素从渲染树消失，渲染师元素继续占据空间，只是内容不可见

  - display: none;是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示；visibility: hidden;是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式
  - 修改常规流中元素的display通常会造成文档重排。修改visibility属性只会造成本元素的重绘。
  - 读屏器不会读取display: none;元素内容；会读取visibility: hidden;元素内容
### 如何创建块级格式化上下文(block formatting context),BFC有什么用
- 创建规则：

  - 根元素
  - 浮动元素（float不是none）
  - 绝对定位元素（position取值为absolute或fixed）

  - display取值为inline-block,table-cell, table-caption,flex, inline-flex之一的元素

  - overflow不是visible的元素

- 作用：

  - 可以包含浮动元素
  - 不被浮动元素覆盖
  - 阻止父子元素的margin折叠
### 清除浮动的几种方式，各自的优缺点
- 父级div定义height

- 结尾处加空div标签clear:both

- 父级div定义伪类:after和zoom

- 父级div定义overflow:hidden

- 父级div也浮动，需要定义宽度
- 结尾处加br标签clear:both

- 比较好的是第3种方式，好多网站都这么用
### CSS3新增伪类有那些？
- p:first-of-type 选择属于其父元素的首个<p>元素的每个<p> 元素。

- p:last-of-type  选择属于其父元素的最后 <p> 元素的每个<p> 元素。

- p:only-of-type  选择属于其父元素唯一的 <p>元素的每个 <p> 元素。

- p:only-child       选择属于其父元素的唯一子元素的每个 <p> 元素。

- p:nth-child(2)  选择属于其父元素的第二个子元素的每个 <p> 元素。

- :after        在元素之前添加内容,也可以用来做清除浮动。

- :before       在元素之后添加内容
- :enabled

- :disabled      控制表单控件的禁用状态。

- :checked       单选框或复选框被选中
### display有哪些值？说明他们的作用
- block      象块类型元素一样显示。

- none      缺省值。象行内元素类型一样显示。

- inline-block 象行内元素一样显示，但其内容象块类型元素一样显示。

- list-item   象块类型元素一样显示，并添加样式列表标记。

- table       此元素会作为块级表格来显示

- inherit      规定应该从父元素继承 display 属性的值
### 介绍一下标准的CSS的盒子模型？低版本IE的盒子模型有什么不同的？
- 有两种， IE盒子模型、W3C盒子模型；
- 盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border)；
- 区 别： IE的content部分把 border 和 padding计算了进去;