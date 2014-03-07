# stream-reduce

Like [`Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
but for streams. Given a sync reduce function and an initial value it
will return a through stream that emits a single data event with the
reduced value once the input stream ends.

# Example

```js
var reduce = require("stream-reduce");

process.stdin.pipe(reduce(function(acc, data) {
	return acc + data.length;
}, 0)).on("data", function(length) {
	console.log("stdin size:", length);
});
```

# Installation

```
npm install stream-reduce
```
