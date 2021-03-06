# 选择器
选择器可以被分为以下类别：
- 简单选择器：通过元素类型、class 或 id 匹配一个或多个元素。

- 属性选择器：通过 属性 / 属性值 匹配一个或多个元素`[attribute]`。

- 伪类：匹配处于确定状态的一个或多个元素，比如被鼠标指针悬停的元素`:hover`，或当前被选中或未选中的复选框，或元素是DOM树中一父节点的第一个子节点`:first-child`。

- 伪元素: 匹配处于相关的确定位置的一个或多个元素，例如每个段落的第一个字`:first-letter`，或者某个元素之前生成的内容`:before`。

- 组合器:这里不仅仅是选择器本身，还有以有效的方式组合两个或更多的选择器用于非常特定的选择的方法。例如，你可以只选择divs的直系子节点的段落，或者直接跟在headings后面的段落`element element`。

- 多重选择器:这些也不是单独的选择器；这个思路是将以逗号分隔开的多个选择器放在一个CSS规则下面， 以将一组声明应用于由这些选择器选择的所有元素`element,element`。