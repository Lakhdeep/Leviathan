var express = require('express');
var router = express.Router();

var category = require('../models/category')

router.get('/:id', function(req, res, next) {
	category.find({categories:{
		$elemMatch : {
			id : req.params.id
			}
		}
	},{categories:1, id:1}, function(err, subcats) {
			  if (err) throw err;

			  for(var i=0; i<subcats[0].categories.length;i++){
			  	var subcategory = subcats[0].categories[i];
			  	if(subcategory.id == req.params.id){
			  		console.log(subcats[0].id);
			  		res.render('subcategory', { title: subcategory.name , subcategory: subcategory, back: subcats[0].id});
			  	}
			  }
			});
});

module.exports = router;
