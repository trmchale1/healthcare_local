var express = require('express');
var app = express();
var fs = require('fs');
var parse = require('csv-parse');

fs.readFile('states.csv', 'utf8', function(err,data){
	if(err){
		return console.log(err);
	}
	var content = data;
	console.log(content);
});

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
	res.send('hello world');
});

app.listen(3000, function () {
  console.log('Running.')
});
