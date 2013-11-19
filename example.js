var reduce = require("./");
process.stdin.pipe(reduce(function(acc, data) {
  return acc + data.length;
}, 0)).on("data", function(length) {
  console.log("stdin size:", length);
});
