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