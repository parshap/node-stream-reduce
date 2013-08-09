# stream-reduce

Reduce stream data to a single value. Like
[Array#reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
but for streams!

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
