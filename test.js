var reduce = require("./"),
	test = require("tape");

test("count length", function(t) {
	var stream = reduce(function(acc, data) {
		return acc + data.length;
	}, 0);

	t.plan(1);
	stream.on("error", t.ifError.bind(t));
	stream.on("data", function(length) {
		t.equal(length, 12);
	});

	stream.write("hello");
	stream.write("world");
	stream.write("ab");
	stream.end();
	t.end();
});
