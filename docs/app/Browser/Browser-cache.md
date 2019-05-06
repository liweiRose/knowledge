# 浏览器缓存

- 浏览器在加载资源时，先根据这个资源的一些 http header 判断它是否命中强缓存，强缓存如果命中，浏览器直接从自己的缓存中读取资源，不会发请求到服务器。比如某个 css 文件，如果浏览器在加载它所在的网页时，这个 css 文件的缓存配置命中了强缓存，浏览器就直接从缓存中加载这个 css，连请求都不会发送到网页所在服务器；

- 当强缓存没有命中的时候，浏览器一定会发送一个请求到服务器，通过服务器端依据资源的另外一些 http header 验证这个资源是否命中协商缓存，如果协商缓存命中，服务器会将这个请求返回，但是不会返回这个资源的数据，而是告诉客户端可以直接从缓存中加载这个资源，于是浏览器就又会从自己的缓存中去加载这个资源；

- 强缓存与协商缓存的共同点是：如果命中，都是从客户端缓存中加载资源，而不是从服务器加载资源数据；区别是：强缓存不发请求到服务器，协商缓存会发请求到服务器。

- 当协商缓存也没有命中的时候，浏览器直接从服务器加载资源数据。

## 强缓存

- 浏览器对某个资源的请求命中了强缓存时，返回的 http 状态为 200，在 chrome 的开发者工具的 network 里面 size 会显示为 (from cache)

| name | status | type   | initiator | size       | time | waterfall |
| ---- | ------ | ------ | --------- | ---------- | ---- | --------- |
| a.js | 200    | script | index     | from cache | 0ms  | -----     |

- 强缓存是利用 Expires 或者 Cache-Control 这两个 http response header 实现的，它们都用来表示资源在客户端缓存的有效期。

### Expires

- 它是 http1.0 提出的一个表示资源过期时间的 header
- 描述的是一个绝对时间，由服务器返回
- Expires:Thu, 31 Dec 2037 23:55:55 GMT

```

 ① 浏览器第一次跟服务器请求一个资源，服务器在返回这个资源的同时，在 respone 的 header 里加上 Expires

 ② 浏览器在接收到这个资源后，会把这个资源连同所有 response header 一起缓存下来
  （ 所以缓存命中的请求返回的header并不是来自服务器，而是来自之前缓存的header ）

 ③ 浏览器再次请求这个资源时，先从缓存中寻找，找到这个资源后，拿出它的 Expires 跟当前的请求时间比较
    如果请求时间在 Expires 指定的时间之前，就能命中缓存，否则就不行。

 ④ 如果缓存没有命中，浏览器直接从服务器加载资源时，Expires Header在重新加载的时候会被更新。

 tips:

   - 服务器时间与客户端时间相差较大时，缓存管理容易出现问题

   - 故在 http1.1 的时候，提出了一个新的 header，就是 Cache-Control
```

### Cache-Control

- 来控制页面的缓存与否
- 是一个相对时间，以秒为单位。
- Cache-Control:max-age=115360000

```

 ① 浏览器第一次跟服务器请求一个资源，服务器在返回这个资源的同时，在 respone 的 header 里加上 Cache-Control

 ② 浏览器在接收到这个资源后，会把这个资源连同所有 response header 一起缓存下来

 ③ 浏览器再请求这个资源时，先从缓存中寻找，找到这个资源后，
    根据它第一次的请求时间和 Cache-Control 设定的有效期，计算出一个资源过期时间，
    再拿这个过期时间跟当前的请求时间比较，如果请求时间在过期时间之前，就能命中缓存，否则就不行。

 ④ 如果缓存没有命中，浏览器直接从服务器加载资源时，Cache-Control Header 在重新加载的时候会被更新。


 tips：

  - 当 Expires 和 Cache-Control 同时存在时，Cache-Control 优先级高于 Expires

```

```

Cache-Control 配置：

  请求 Request Header：

    [1] no-cache  ---- 不要读取缓存中的文件，要求向WEB服务器重新请求

    [2] no-store  ---- 请求和响应都禁止被缓存

  响应 Response Header：

    [1] public     ---- 数据内容皆被储存起来，就连有密码保护的网页也储存，安全性很低
    [2] private    ---- 数据内容只能被储存到私有的cache，仅对某个用户有效，不能共享

    [3] no-cache   ---- 可以缓存，但是只有在跟WEB服务器验证了其有效后，才能返回给客户端
    [4] no-store   ---- 请求和响应都禁止被缓存
    [4] max-age    ---- 本响应包含的对象的过期时间

```

### 是否启用强缓存

```java
# 启用

java.util.Date date = new java.util.Date();
response.setDateHeader("Expires", date.getTime() + 20000); // Expires: 过期值
response.setHeader("Cache-Control", "public"); // public: 浏览器和缓存服务器都可以缓存页面信息
response.setHeader("Pragma", "Pragma"); // Pragma:设置页面是否缓存，为 Pragma 则缓存，no-cache 则不缓存

# 不启用

response.setDateHeader("Expires", 0);
response.addHeader( "Cache-Control", "no-cache" ); // 浏览器和缓存服务器都不应该缓存页面信息
response.setHeader( "Pragma", "no-cache" );

# tips: 可以在 Chrome - network 设置 Disable cache 禁止缓存

```

### 应用

- 强缓存是前端性能优化最有力的工具，没有之一，对于有大量静态资源的网页，一定要利用强缓存，提高响应速度

  - 通常的做法是，为这些静态资源全部配置一个超时时间超长的 Expires 或 Cache-Control；如：2029 年后
    - 这种做法所引发的问题：
      - 发布时资源更新的问题（ 因为缓存的存在，加载本地缓存文件，发布文件应用不上 ）

- 通常都是针对静态资源使用，动态资源需要慎用

## 协商缓存

- 当浏览器对某个资源的请求没有命中强缓存，就会发一个请求到服务器，验证协商缓存是否命中，如果协商缓存命中，请求响应返回的 http 状态为 304 并且会显示一个 Not Modified 的字符串

| name | status             | type   | initiator | size  | time  | waterfall |
| ---- | ------------------ | ------ | --------- | ----- | ----- | --------- |
| a.js | 304 (Not Modified) | script | index     | 200kb | 200ms | -----     |

- 协商缓存是利用的是 [ Last-Modified，If-Modified-Since ] 和 [ ETag、If-None-Match ] 这两对 Header 来管理

### Last-Modified，If-Modified-Since

```

 ① 浏览器第一次跟服务器请求一个资源，服务器在返回这个资源的同时，
    在 respone 的 header 里加上 Last-Modified 表示这个资源在服务器上的最后修改时间：
    Last-Modified：Thu, 31 Dec 2037 23:55:55 GMT

 ② 浏览器再次跟服务器请求这个资源时，在 request 的 header 里加上 If-Modified-Since，
    值是上一次请求时返回的 Last-Modified 的值
    If-Modified-Since：Thu, 31 Dec 2037 23:55:55 GMT

 ③ 服务器再次收到资源请求时，根据浏览器传过来 If-Modified-Since 和 资源在服务器上的最后修改时间判断资源是否有变化
    如果没有变化则返回304 Not Modified，但是不会返回资源内容；
    如果有变化，就正常返回资源内容。
    当服务器返回 304 Not Modified 的响应时，response header 中不会再添加 Last-Modified，
    因为既然资源没有变化，那么Last-Modified也就不会改变。

 ④ 浏览器收到304的响应后，就会从缓存中加载资源

 ⑤ 如果协商缓存没有命中，浏览器直接从服务器加载资源时，
    Last-Modified Header 在重新加载的时候会被更新，
    下次请求时，If-Modified-Since 会启用上次返回的 Last-Modified 值

```

### ETag、If-None-Match

```

 ① 浏览器第一次跟服务器请求一个资源，服务器在返回这个资源的同时，在 respone header 里加上 ETag ，它是服务器根据当前请求的资源生成的一个唯一标识
    这个唯一标识是一个字符串，只要资源有变化这个字符串就不同，与最后修改时间没有关系。
    ETag：'asdadasdadw2131'

 ② 浏览器再次跟服务器请求这个资源时，在 request header 里加上 If-None-Match，它的值是上一次请求时返回的 ETag 的值
    If-None-Match：'asdadasdadw2131'

 ③ 服务器再次收到资源请求时，根据浏览器传过来 If-None-Matc 和 根据资源生成一个新的 ETag，
    如果这两个值相同就说明资源没有变化，否则就是有变化；
    如果没有变化则返回 304 Not Modified，但是不会返回资源内容；
    如果有变化，就正常返回资源内容。
    304 Not Modified时，由于ETag重新生成过，response header中还会把这个ETag返回，即使这个ETag跟之前的没有变化

 ④ 浏览器收到304的响应后，就会从缓存中加载资源

```
