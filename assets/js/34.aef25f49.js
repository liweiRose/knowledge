(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{215:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("p",[t._v("从前端的角度来说，性能优化可以分为两个方向。从用户角度来看，一个是页面加载的很快，另一个是页面使用起来很流畅。因此，对性能优化的探索，我们可以分为页面加载时间跟页面运行效率两个方向来进行研究.")]),t._m(2),a("p",[t._v("是的，这个问题有点熟悉，面试官比较常问的是从浏览器打开到页面渲染完成，发生了什么事情。这个问题网上很多回答，我也不就重复的细说了。主要的过程是：")]),a("p",[t._v("浏览器解析->查询缓存->dns查询->建立链接->服务器处理请求->服务器发送响应->客户端收到页面->解析HTML->构建渲染树->开始显示内容(白屏时间)->首屏内容加载完成(首屏时间)->用户可交互(DOMContentLoaded)->加载完成(load)")]),a("p",[t._v("很显然，如果我们要进行加载时间的优化，我们需要从这里的每一个步骤都去思考，去总结，而避免东凑一点，西凑一点。")]),t._m(3),a("p",[t._v("有一句话说得好，If You Can't Measure It, You Can't Manage It。在对这些环节进行优化之前，我们需要知道如何监控这些环节花费了多少时间。")]),a("p",[t._v("首先推荐一个"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceTiming",target:"_blank",rel:"noopener noreferrer"}},[t._v("PerformanceTiming"),a("OutboundLink")],1),t._v(",可以获取到很多页面加载相关的数据。")]),a("p",[t._v("比较常用的有:")]),t._m(4),a("p",[t._v("如果不使用该API，可以以服务器渲染返回的时间，或是SPA路由跳转离开的时间为起点，domContentLoaded，load等事件为结束点进行记录。或是直接上google analytics。方法很多，就不细说了。")]),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),a("p",[t._v("用知名其意的方式为变量命名，通过这种方式，当一个人看到它们时，易于搜索和理解。")]),t._m(19),t._m(20),t._m(21),t._m(22),a("p",[t._v("不要在变量名中添加额外的不需要的单词。")]),t._m(23),t._m(24),t._m(25),t._m(26),a("p",[t._v("不要简写变量上下文。")]),t._m(27),t._m(28),t._m(29),t._m(30),a("p",[t._v("不要添加不必要的上下文。")]),t._m(31),t._m(32),t._m(33),t._m(34)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能优化","aria-hidden":"true"}},[this._v("#")]),this._v(" 性能优化")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"性能优化是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能优化是什么","aria-hidden":"true"}},[this._v("#")]),this._v(" 性能优化是什么")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"从浏览器打开到页面渲染完成，花费了多少时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从浏览器打开到页面渲染完成，花费了多少时间","aria-hidden":"true"}},[this._v("#")]),this._v(" 从浏览器打开到页面渲染完成，花费了多少时间")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"页面加载时间监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面加载时间监控","aria-hidden":"true"}},[this._v("#")]),this._v(" 页面加载时间监控")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DNS")]),t._v("解析时间： domainLookupEnd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" domainLookupStart\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TCP")]),t._v("建立连接时间： connectEnd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" connectStart\n白屏时间： responseStart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" navigationStart\ndom渲染完成时间： domContentLoadedEventEnd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" navigationStart\n页面onload时间： loadEventEnd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" navigationStart\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"项目做过哪些性能优化？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目做过哪些性能优化？","aria-hidden":"true"}},[this._v("#")]),this._v(" 项目做过哪些性能优化？")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("减少 HTTP 请求数")]),a("li",[t._v("减少 DNS 查询")]),a("li",[t._v("使用 CDN")]),a("li",[t._v("避免重定向")]),a("li",[t._v("图片懒加载")]),a("li",[t._v("减少 DOM 元素数量")]),a("li",[t._v("减少 DOM 操作")]),a("li",[t._v("使用外部 JavaScript 和 CSS")]),a("li",[t._v("压缩 JavaScript 、 CSS 、字体、图片等")]),a("li",[t._v("优化 CSS Sprite")]),a("li",[t._v("使用 iconfont")]),a("li",[t._v("字体裁剪")]),a("li",[t._v("多域名分发划分内容到不同域名")]),a("li",[t._v("尽量减少 iframe 使用")]),a("li",[t._v("避免图片 src 为空")]),a("li",[t._v("把样式表放在  中")]),a("li",[t._v("把脚本放在页面底部")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"你对优化这块了解多少"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#你对优化这块了解多少","aria-hidden":"true"}},[this._v("#")]),this._v(" 你对优化这块了解多少?")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("比如从客户端着手的:")]),a("li",[t._v("压缩代码(JS/CSS),压缩图片")]),a("li",[t._v("合并一些小图片(css sprite)")]),a("li",[t._v("若是打包的代码尽可能切割成多个 chunk,减少单一 chunk过大")]),a("li",[t._v("静态文件采用 cdn 引入")]),a("li",[t._v("HTTP的缓存头使用的合理")]),a("li",[t._v("减小第三方库的依赖")]),a("li",[t._v("对于代码应该考虑性能来编写,比如使用requestAnimationFrame绘制动画,尽可能减少页面重绘(DOM 改变)")]),a("li",[t._v("渐进升级,引入preload这些预加载资源")]),a("li",[t._v("看情况用service worker来缓存资源(比如移动端打算搞 PWA)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"前端需要注意哪些seo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端需要注意哪些seo","aria-hidden":"true"}},[this._v("#")]),this._v(" 前端需要注意哪些SEO")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("合理的title、description、keywords：搜索对着三项的权重逐个减小，title值强调重点即可，重要关键词出现不要超过2次，而且要靠前，不同页面title要有所不同；")])]),a("li",[a("p",[t._v("description把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面description有所不同；keywords列举出重要关键词即可")])]),a("li",[a("p",[t._v("语义化的HTML代码，符合W3C规范：语义化代码让搜索引擎容易理解网页")])]),a("li",[a("p",[t._v("重要内容HTML代码放在最前：搜索引擎抓取HTML顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容一定会被抓取")])]),a("li",[a("p",[t._v("重要内容不要用js输出：爬虫不会执行js获取内容")])]),a("li",[a("p",[t._v("少用iframe：搜索引擎不会抓取iframe中的内容")])]),a("li",[a("p",[t._v("非装饰性图片必须加alt")])]),a("li",[a("p",[t._v("提高网站速度：网站速度是搜索引擎排序的一个重要指标")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"谈谈你对重构的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#谈谈你对重构的理解","aria-hidden":"true"}},[this._v("#")]),this._v(" 谈谈你对重构的理解")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("网站重构：在不改变外部行为的前提下，简化结构、添加可读性，而在网站前端保持一致的行为。也就是说是在不改变UI的情况下，对网站进行优化， 在扩展的同时保持一致的UI")])]),s("li",[s("p",[this._v("对于传统的网站来说重构通常是：")]),s("ul",[s("li",[this._v("表格(table)布局改为DIV+CSS")]),s("li",[this._v("使网站前端兼容于现代浏览器(针对于不合规范的CSS、如对IE6有效的)")]),s("li",[this._v("对于移动平台的优化")]),s("li",[this._v("针对于SEO进行优化")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"平时如何管理你的项目？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#平时如何管理你的项目？","aria-hidden":"true"}},[this._v("#")]),this._v(" 平时如何管理你的项目？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("先期团队必须确定好全局样式（globe.css），编码模式(utf-8) 等；")]),s("li",[this._v("编写习惯必须一致（例如都是采用继承式的写法，单样式都写成一行）；")]),s("li",[this._v("标注样式编写人，各模块都及时标注（标注关键样式调用的地方）；")]),s("li",[this._v("页面进行标注（例如 页面 模块 开始和结束）；")]),s("li",[this._v("CSS跟HTML 分文件夹并行存放，命名都得统一（例如style.css）；")]),s("li",[this._v("JS 分文件夹存放 命名以该JS功能为准的英文翻译。")]),s("li",[this._v("图片采用整合的 images.png png8 格式文件使用 - 尽量整合在一起使用方便将来的管理")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"强类型检查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强类型检查","aria-hidden":"true"}},[this._v("#")]),this._v(" 强类型检查")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("用===代替 ==")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果处理不当，它会极大地影响程序逻辑。这就像，你想向左走，但由于某种原因，你向右走")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 例子")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"500"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 条件不成立，不会进入")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"500"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 条件成立，会进入")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 变量")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("不好的方式：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" daysSLV "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFullYear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ok"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ok "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("好的方式：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-s extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("const MAX_AGE = 30;\nlet daysSinceLastVisit = 10;\nlet currentYear = new Date().getFullYear();\n\n...\n\nconst isUserOlderThanAllowed = user.age > MAX_AGE;\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("不好的方式：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" nameValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" theProduct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("好的方式：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" product"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("不好的方式：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" users "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Marco"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Peter"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nusers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("u")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomethingElse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当上面代码很多的时候 ，这 `u` 是什么鬼")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("好的方式：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" users "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Marco"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Peter"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nusers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("user")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomethingElse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("不好的方式：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  userSurname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Doe"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  userAge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"28"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\nuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("好的方式：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  surname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Doe"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"28"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\nuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);