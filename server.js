var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static(__dirname));

app.get('/data', function (req, res) {
	res.header("Content-Type", "application/json");
  res.send({
  	data: [{
  		name: 'bread', qty: 2, unit: 'pcs'
  	}, {
  		name: 'water', qty: 3, unit: 'l'
  	}, {
			name: 'apples', qty: 2.5, unit: 'kg'
  	}]
  });
});

app.post('/add', function (req, res) {
	data = require('./data.json');
	data.push({ name: 'test', qty: '3', unit: 'pcs' });
	fs.writeFile( "data.json", JSON.stringify( data ), "utf8", function() {
		res.send({success: true});
	} );
});

app.get('*', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

var server = app.listen(1337);

