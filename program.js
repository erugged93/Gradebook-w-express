var book = require("./lib/grades").book;
var express = require("express");
var app = express();

app.get("/", function(req, res) {
	
	res.send("Hello World");
});

app.get("/grade", function(req,res) {
	console.log(req);
	var grades = req.query.grades.split(',');
	for (var i = 0; i < grades.length; i++) {
		book.addGrade(parseInt(grades[i]));
	}
	var average = book.getAverage();
	var letterGrade = book.getLetterGrade();
	res.send(letterGrade + ': ' + average);
	book.reset();
});

app.listen(3000);

console.log("Server ready...");