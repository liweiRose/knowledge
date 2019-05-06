# CSS3相关
CSS3 被划分为模块。

其中最重要的 CSS3 模块包括：

- 选择器(上文已介绍)
- 框模型(上文已介绍)
- 背景和边框
- 文本效果
- 2D/3D 转换
- 动画
- 多列布局
- 用户界面
## 背景和边框
- border-radius
- box-shadow
- border-image
- background-size 属性规定背景图片的尺寸。
- background-origin 属性规定背景图片的定位区域。

背景图片可以放置于 content-box、padding-box 或 border-box 区域。

<img :src="$withBase('/images/background-origin.gif')">

## 文本效果
- text-shadow 可向文本应用阴影
- word-wrap	允许对长的不可分割的单词进行分割并换行到下一行。
在新的 @font-face 规则中，您必须首先定义字体的名称（比如 myFirstFont），然后指向该字体文件。

如需为 HTML 元素使用字体，请通过 font-family 属性来引用字体的名称 (myFirstFont)：
```js
<style> 
@font-face
{
font-family: myFirstFont;
src: url('Sansation_Light.ttf'),
     url('Sansation_Light.eot'); /* IE9+ */
}

div
{
font-family:myFirstFont;
}
</style>
```
## 2D/3D 转换
### 2D Transform
CSS`transform`属性允许你旋转，缩放，倾斜或平移给定元素。这是通过修改CSS视觉格式化模型的坐标空间来实现的。
```js
matrix(n,n,n,n,n,n)	定义 2D 转换，使用六个值的矩阵。
translate(x,y)	定义 2D 转换，沿着 X 和 Y 轴移动元素。
translateX(n)	定义 2D 转换，沿着 X 轴移动元素。
translateY(n)	定义 2D 转换，沿着 Y 轴移动元素。
scale(x,y)	定义 2D 缩放转换，改变元素的宽度和高度。
scaleX(n)	定义 2D 缩放转换，改变元素的宽度。
scaleY(n)	定义 2D 缩放转换，改变元素的高度。
rotate(angle)	定义 2D 旋转，在参数中规定角度。
skew(x-angle,y-angle)	定义 2D 倾斜转换，沿着 X 和 Y 轴。
skewX(angle)	定义 2D 倾斜转换，沿着 X 轴。
skewY(angle)	定义 2D 倾斜转换，沿着 Y 轴。
```
### 3D 
```js
matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)	定义 3D 转换，使用 16 个值的 4x4 矩阵。
translate3d(x,y,z)	定义 3D 转化。
translateX(x)	定义 3D 转化，仅使用用于 X 轴的值。
translateY(y)	定义 3D 转化，仅使用用于 Y 轴的值。
translateZ(z)	定义 3D 转化，仅使用用于 Z 轴的值。
scale3d(x,y,z)	定义 3D 缩放转换。
scaleX(x)	定义 3D 缩放转换，通过给定一个 X 轴的值。
scaleY(y)	定义 3D 缩放转换，通过给定一个 Y 轴的值。
scaleZ(z)	定义 3D 缩放转换，通过给定一个 Z 轴的值。
rotate3d(x,y,z,angle)	定义 3D 旋转。
rotateX(angle)	定义沿 X 轴的 3D 旋转。
rotateY(angle)	定义沿 Y 轴的 3D 旋转。
rotateZ(angle)	定义沿 Z 轴的 3D 旋转。
perspective(n)	定义 3D 转换元素的透视视图。
```
## 过渡 transition
通过 CSS3，我们可以在不使用 Flash 动画或 JavaScript 的情况下，当元素从一种样式变换为另一种样式时为元素添加效果。
要实现这一点，必须规定两项内容：

- 规定您希望把效果添加到哪个 CSS 属性上
- 规定效果的时长
```js
div
{
transition: width 2s;
-moz-transition: width 2s;	/* Firefox 4 */
-webkit-transition: width 2s;	/* Safari 和 Chrome */
-o-transition: width 2s;	/* Opera */
}
```
### 多项改变
如需向多个样式添加过渡效果，请添加多个属性，由逗号隔开：
```js
div
{
transition: width 2s, height 2s, transform 2s;
-moz-transition: width 2s, height 2s, -moz-transform 2s;
-webkit-transition: width 2s, height 2s, -webkit-transform 2s;
-o-transition: width 2s, height 2s,-o-transform 2s;
}
```
## 动画 animation
通过 CSS3，我们能够创建动画，这可以在许多网页中取代动画图片、Flash 动画以及 JavaScript。
```js
@keyframes myfirst
{
from {background: red;}
to {background: yellow;}
}
```
当您在 `@keyframes` 中创建动画时，请把它捆绑到某个选择器，否则不会产生动画效果。

通过规定至少以下两项 CSS3 动画属性，即可将动画绑定到选择器：

- 规定动画的名称
- 规定动画的时长
```js
div
{
width:100px;
height:100px;
background:red;
animation:myfirst 5s;
-moz-animation:myfirst 5s; /* Firefox */
-webkit-animation:myfirst 5s; /* Safari and Chrome */
-o-animation:myfirst 5s; /* Opera */
}

@keyframes myfirst
{
from {background:red;}
to {background:yellow;}
}
```
动画是使元素从一种样式逐渐变化为另一种样式的效果。

您可以改变任意多的样式任意多的次数。

请用百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。

0% 是动画的开始，100% 是动画的完成。

为了得到最佳的浏览器支持，您应该始终定义 0% 和 100% 选择器。
```js
@keyframes myfirst
{
0%   {background: red;}
25%  {background: yellow;}
50%  {background: blue;}
100% {background: green;}
}
```
下面的表格列出了 @keyframes 规则和所有动画属性：
```js
@keyframes	规定动画。	3
animation	所有动画属性的简写属性，除了 animation-play-state 属性。	3
animation-name	规定 @keyframes 动画的名称。	3
animation-duration	规定动画完成一个周期所花费的秒或毫秒。默认是 0。	3
animation-timing-function	规定动画的速度曲线。默认是 "ease"。	3
animation-delay	规定动画何时开始。默认是 0。	3
animation-iteration-count	规定动画被播放的次数。默认是 1。	3
animation-direction	规定动画是否在下一周期逆向地播放。默认是 "normal"。	3
animation-play-state	规定动画是否正在运行或暂停。默认是 "running"。	3
animation-fill-mode	规定对象动画时间之外的状态。
```
### CSS3 @keyframes 规则
`@keyframes` 规则用于创建动画。在 `@keyframes` 中规定某项 CSS 样式，就能创建由当前样式逐渐改为新样式的动画效果。
## 多列
通过 CSS3，您能够创建多个列来对文本进行布局 - 就像报纸那样！

- column-count 属性规定元素应该被分隔的列数：
- column-gap 属性规定列之间的间隔：
- column-rule  属性设置列之间的宽度、样式和颜色规则。
## 用户列表
在 CSS3 中，新的用户界面特性包括重设元素尺寸、盒尺寸以及轮廓等。
### resize
在 CSS3，`resize` 属性规定是否可由用户调整元素尺寸。
```js
div
{
resize:both;
overflow:auto;
}
```
### box-sizing
box-sizing 属性允许您以确切的方式定义适应某个区域的具体内容。
```js
div
{
box-sizing:border-box;
-moz-box-sizing:border-box;	/* Firefox */
-webkit-box-sizing:border-box;	/* Safari */
width:50%;
float:left;
}
```
### outline-offset
`outline-offset` 属性对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。
```js
div
{
border:2px solid black;
outline:2px solid red;
outline-offset:15px;
}
```

