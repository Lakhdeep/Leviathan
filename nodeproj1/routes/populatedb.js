var express = require('express');
var https = require('https');
var router = express.Router();

var category = require('../models/category')

var options = {
  host: 'api.foursquare.com',
  port: 443,
  path: '/v2/venues/categories?oauth_token=Z3OKVW343I2ADUT54B0DU22S3YFP5AMRDNPSXUPZK3F04EV5&v=20160804',
  method: 'GET'
};

function logicFunc(jsonObj , callback){
	var array = jsonObj['response']['categories']
	for(i=0; i<array.length; i++){
		console.log('Main Categories: ' + array[i]['name']);
    var temp = new category(array[i]);
    temp.save(function(err) {
        if (err) throw err;

        console.log('Category saved successfully!');
    });
	}
};

router.get('/', function(req, res, next) {
	https.request(options , function(res) {
		  console.log('STATUS: ' + res.statusCode);
		  console.log('HEADERS: ' + JSON.stringify(res.headers));
		  res.setEncoding('utf8');
		  var body = '';
		  res.on('data', function (chunk) {
		  	body = body+chunk;
		    //console.log('BODY1: ' + chunk)
		    var str = '{"key": "value", "key2": "value2"}';
		  })
		  res.on('end', function() {
		  		// body = Buffer.concat(body).toString();
		  		logicFunc(JSON.parse(body));
			});
	}).end();
	res.send('OK');
});

module.exports = router;
