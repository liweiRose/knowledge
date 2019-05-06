# 重绘与重排

- 由于节点的几何属性发生改变或者由于样式发生改变，例如改变元素背景色时，屏幕上的部分内容需要更新。这样的更新被称为重绘。

- 部分渲染树（或者整个渲染树）需要重新分析并且节点尺寸需要重新计算。重新生成布局, 这被称为重排。

- 重排和重绘代价是高昂的，它们会破坏用户体验，并且让 UI 展示非常迟缓。

## 浏览器渲染过程

- HTML 代码转化成 DOM
- CSS 代码转化成 CSSOM（CSS Object Model）
- 结合 DOM 和 CSSOM，生成一棵渲染树（包含每个节点的视觉信息）
- 生成布局（layout），即将所有渲染树的所有节点进行平面合成
- 将布局绘制（paint）在屏幕上

> "生成布局"（flow）和"绘制"（paint）这两步，合称为"渲染"（render）

```js

  HTML                =>  DOM Tree

                                          =>  Render tree  =>  Paint

  stylesheets/style   => Styles struct

  tips:
       - 用户操作：resize win \ fonst-size +/-  =>  Render tree

```

### DOM Tree

呈现这个 HTML 文档的 DOM 树对每一个标签和标签间每一段文本都有一个对应的节点

```js
documentElement (html)
    head
        title
    body
        p
            [text node]
        div
            [text node]
        div
            img
        ...
```

### Render tree

渲染树就是 DOM 树中可见的部分

```js
root (RenderView)
    body
        p
            line 1
      line 2
      line 3
      ...
  div
      img
  ...
```

## 触发重排和重绘

- 添加、删除、更新 DOM 节点

- 通过 display: none 隐藏一个 DOM 节点 - 触发重排和重绘

- 通过 visibility: hidden 隐藏一个 DOM 节点 - 只触发重绘，因为没有几何变化

- 移动或者给页面中的 DOM 节点添加动画

- 添加一个样式表，调整样式属性

- 用户行为，例如调整窗口大小，改变字号，或者滚动。

```js
bstyle.padding = '20px'; // 重排 + 重绘

bstyle.fontSize = '20px'; // 重排 + 重绘

bstyle.border = '20px solid red'; // 重排 + 重绘

bstyle.color = 'blue'; // 重绘

bstyle.backgroundColor = 'red'; // 重绘

document.body.appendChild(document.createTextNode('reflow & repaint')); // 重排+重绘
```

> 如果你直接改变 body 下的一个子节点，可能并不会对其它节点造成影响。但是当你给一个当前页面顶级的 div 添加动画或者改变它的大小，就会推动整个页面改变

> 通过减少重排/重绘的负面影响来提高用户体验

> 样式表越简单，重排和重绘就越快

> 重排和重绘的 DOM 元素层级越高，成本就越高

> table 元素的重排和重绘成本，要高于 div 元素

## 性能优化

- 不要一条条地改变样式，而要通过改变 class

- 先将元素设为 display: none（需要 1 次重排和重绘），然后对这个节点进行 100 次操作，最后再恢复显示（需要 1 次重排和重绘）。这样一来，你就用两次重新渲染，取代了可能高达 100 次的重新渲染

- position 属性为 absolute 或 fixed 的元素，重排的开销会比较小，因为不用考虑它对其他元素的影响

- 使用虚拟 DOM 的脚本库，比如 React 等

- 使用 window.requestAnimationFrame()、window.requestIdleCallback() 这两个方法调节重新渲染

> 网页动画的每一帧（frame）都是一次重新渲染。每秒低于 24 帧的动画，人眼就能感受到停顿。一般的网页动画，需要达到每秒 30 帧到 60 帧的频率，才能比较流畅。如果能达到每秒 70 帧甚至 80 帧，就会极其流畅。

### window.requestAnimationFrame()

推迟到下一次重新渲染

```js

  * 每次循环都是，读操作后面跟着一个写操作。
  * 这会在短时间内触发大量的重新渲染，显然对于网页性能很不利。

    function doubleHeight(element) {
      var currentHeight = element.clientHeight;
      element.style.height = (currentHeight * 2) + 'px';
    }
    elements.forEach(doubleHeight);

  * 我们可以使用 window.requestAnimationFrame()，
  * 让 读操作 和 写操作 分离，把所有的写操作放到下一次重新渲染。

    function doubleHeight(element) {
      var currentHeight = element.clientHeight;
      window.requestAnimationFrame(function () {
        element.style.height = (currentHeight * 2) + 'px';
      });
    }
    elements.forEach(doubleHeight);


  * 应用场景

    -  页面滚动事件（scroll）的监听函数

      $(window).on('scroll', function() {
        window.requestAnimationFrame(scrollHandler);
      });

    - 最适用的场合还是网页动画

      var rAF = window.requestAnimationFrame;

      var degrees = 0;
      function update() {
        div.style.transform = "rotate(" + degrees + "deg)";
        console.log('updated to degrees ' + degrees);
        degrees = degrees + 1;
        rAF(update);
      }
      rAF(update);

```

### window.requestIdleCallback()

它指定只有当一帧的末尾有空闲时间，才会执行回调函数。

```js

  * 只有当前帧的运行时间小于16.66ms时，函数fn才会执行。
  * 否则，就推迟到下一帧，如果下一帧也没有空闲时间，就推迟到下下一帧，以此类推。

    requestIdleCallback(fn);

  * 如果在指定的 5000 ms 这段时间之内，每一帧都没有空闲时间，那么函数fn将会强制执行。

    requestIdleCallback(fn, 5000);

    requestIdleCallback((deadline) => {
      console.log('deadline 对象': deadline)
      console.log('timeRemaining() 方法只能读，不能写, 返回当前帧还剩余的毫秒:', deadline.timeRemaining())
      console.log('didTimeout 属性, 返回一个布尔值，表示指定的时间是否过期: ', deadline.didTimeout)

      console.log('如果回调函数由于指定时间过期而触发，那么会得到两个结果:')
      console.log('timeRemaining方法返回0')
      console.log('didTimeout 属性等于 true')
    }, 10000)

```

## 参考文章

- [Rendering: repaint, reflow/relayout, restyle](http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/)
- [GWT](http://www.gwtproject.org/?csw=1)
- [网页性能管理](http://www.ruanyifeng.com/blog/2015/09/web-page-performance-in-depth.html)
