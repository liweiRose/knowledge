# DOM
HTML DOM 定义了访问和操作 HTML 文档的标准,DOM  是 Document Object Model（文档对象模型）的缩写。
## DOM 节点
根据 W3C 的 HTML DOM 标准，HTML 文档中的所有内容都是节点：

- 整个文档是一个文档节点
- 每个 HTML 元素是元素节点
- HTML 元素内的文本是文本节点
- 每个 HTML 属性是属性节点
- 注释是注释节点
### HTML DOM 节点树
节点树中的节点彼此拥有层级关系。
![asda](https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=0fe685f8ec1190ef15f69a8daf72f673/4afbfbedab64034ff2239713a4c379310a551d3c.jpg)
我们常用父（parent）、子（child）和同胞（sibling）等术语来描述这些关系。父节点拥有子节点。同级的子节点被称为同胞（兄弟或姐妹）。
- 在节点树中，顶端节点被称为根（root）。
- 每个节点都有父节点、除了根（它没有父节点）。
- 一个节点可拥有任意数量的子节点。
- 同胞是拥有相同父节点的节点。
- 可通过节点的 innerHTML 属性来访问文本节点的值。

## DOM 方法
HTML DOM 方法是我们可以在节点（HTML 元素）上执行的动作。

HTML DOM 属性是我们可以在节点（HTML 元素）设置和修改的值。
### HTML DOM 对象 - 方法和属性
一些常用的 HTML DOM 方法：

- getElementById(id) - 获取带有指定 id 的节点（元素）
- appendChild(node) - 插入新的子节点（元素）
- removeChild(node) - 删除子节点（元素）
- createElement() - 创建元素节点
- getAttribute() - 返回指定的属性值。
- setAttribute() - 把指定属性设置或修改为指定的值。

一些常用的 HTML DOM 属性：

- innerHTML - 节点（元素）的文本值
- parentNode - 节点（元素）的父节点
- childNodes - 节点（元素）的子节点
- attributes - 节点（元素）的属性节点
## DOM - 事件
HTML 事件的例子：

- onclick - 当用户点击鼠标时
- onload  - 当网页已加载时
- onmouseover 和 onmouseout - 当鼠标移动移出元素时
- onchange - 当输入字段被改变时
- onsubmit - 当 HTML 表单被提交时
- onkeydown - 当用户触发按键时
