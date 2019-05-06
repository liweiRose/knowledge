# 防抖和节流

- 防抖

  - 为避免 频繁触发事件，执行多次回调，会造成非常严重的开销问题

  - 原理：频繁触发事件，但每次事件触发回调在 n 秒后才执行， n 秒内又触发了这个事件，则取最新触发的事件的时间为准。
    总之，等你触发完事件 n 秒内不再触发事件，我才执行。

> 基础实现

```js
function debounce(func, wait) {
  var timeout;

  return function() {
    var context = this;
    var args = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(function() {
      func.apply(context, args);
    }, wait);
  };
}
```

- 节流

  - 如果持续触发事件，每隔一段时间，只执行一次事件。

> 基础实现

```js
function throttle(func, wait) {
  var timeout;
  var previous = 0;

  return function() {
    context = this;
    args = arguments;
    if (!timeout) {
      timeout = setTimeout(function() {
        timeout = null;
        func.apply(context, args);
      }, wait);
    }
  };
}
```

- 防抖复杂实现

> 不一定非要等到事件停止触发后才执行，而是立刻执行函数，然后等到停止触发 n 秒后，才可以重新触发执行；另执行函数是有返回值的，故也应该返回结果值。

```js
function debounce(func, wait, immediate) {
  var timeout, result;

  return function() {
    var context = this;
    var args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout;
      timeout = setTimeout(function() {
        timeout = null;
      }, wait);
      if (callNow) result = func.apply(context, args);
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    }
    return result;
  };
}
```

- 节流复杂实现

> 根据首次是否执行以及结束后是否执行 ( leading 代表首次是否执行，trailing 代表结束后是否再执行一次 )

```js
/**
 * @param {boolean} options.leading false 表示禁用第一次执行
 * @param {boolean} options.trailing false 表示禁用停止触发的回调
 */
function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function() {
    var now = new Date().getTime();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
  };
  return throttled;
}
```
