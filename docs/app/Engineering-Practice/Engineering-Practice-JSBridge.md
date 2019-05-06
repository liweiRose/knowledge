# webview 与 App native 之间的交互

Webview 是我们前端开发从 PC 端演进到移动端的一个重要载体，现在大家每天使用的 App，webview 都发挥着它的重要性。其应用场景也很多，这里主要阐述 APP 内嵌页面场景。

## 交互方式

> 目前 javascript 和客户端交互的常见方式有两种： JSBridge | Schema

## JSBridge

JSBridge 体现的形式其实就是，当我们在 native 内打开 m 页，native 会在全局的 window 下，为我们注入一个 Bridge。这个 Bridge 里面，会包含我们与 native 交互的各种方法、比如判断第三方 App 是否安装、获取网络信息等等功能。

```JS
  /**
   * 作用域下的JSBridge，
   * 和实例化后的getNetInfomation，
   * 均根据实际约定情况而定，
   * 这里只是用来举例说明
   */

  const bridge = window.JSBridge;
  console.log(bridge.getNetInfomation());

```

### IOS 端

在 IOS 中，主要使用 WebViewJavascriptBridge 来注册，可以参考 Github WebViewJavascriptBridge

```js

  jsBridge = [ WebViewJavascriptBridge bridgeForWebView:webView ];

  ...

  [ jsBridge registerHandler:@"scanClick"
      handler:^(id data, WVJBResponseCallback responseCallback) {
        // to do
      }
  ];

```

### Android 端

在 Android 中，需要通过 addJavascriptInterface 来注册

```js
  class JSBridge {

    @JavascriptInterface public void getNetInfomation() {
      // to do
    };

  };

  webView.addJavascriptInterface(new JSBridge(), "JSBridge");
```

> 注： Bridge 的方式是在 native 内部交互

## Schema

schame url 的不紧可以在 native 内交互，也是可以跨 app 来交互的。schema 也是目前我们转转使用的主要方式，它类似一个伪协议的链接（也可以叫做统跳协议）

> 如： schema://path?param=abc

在 webview 里，当 m 页发起 schema 请求时，native 端会去进行捕获。这里可以顺带给大家普及一下 IOS 和 Android 的知识，具体如下：

#### IOS 端

以 UIWebView 为例，在 IOS 中，UIWebView 内发起网络请求时，可以通过 delegate 在 native 层来拦截，然后将捕获的 schema 进行触发对应的功能或业务逻辑（利用 shouldStartLoadWithRequest）。代码如下：

```js

- (BOOL)webView:(UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType: (UIWebViewNavigationType)navigationType {

    //获取scheme url后自行进行处理
    NSURL *url = [request URL];
    NSString *requestString = [[request URL] absoluteString];
    return YES;

}

```

#### Android 端

在 Android 中，可以使用 shouldoverrideurlloading 来捕获 schema url。代码如下：

```js

public boolean shouldOverrideUrlLoading(WebView view, String url) {
  //读取到url后自行进行分析处理
  //这里注意：如果返回false，则WebView处理链接url，如果返回true，代表WebView根据程序来执行url
  return true;
}

```

待续。。。。

## 参考文章

[你真的了解 webview 么？](https://mp.weixin.qq.com/s/CGCLcrgAM3k5mK9qi_15FQ)
