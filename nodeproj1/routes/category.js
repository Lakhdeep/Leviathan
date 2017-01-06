var express = require('express');
var router = express.Router();

var category = require('../models/category')

router.get('/', function(req, res, next) {
	category.find({}, function(err, categories) {
		  if (err) throw err;
		  res.render('categories', { title: 'Main Categories' , categories: categories});
		});
});

router.get('/:id', function(req, res, next) {
	category.find({id: req.params.id}, function(err, maincategory) {
		  if (err) throw err;
		  res.render('category', { title: maincategory.name , maincategory: maincategory[0], back:''});
		});
});

module.exports = router;
