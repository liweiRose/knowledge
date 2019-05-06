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