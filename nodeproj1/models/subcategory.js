var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');
var Schema = mongoose.Schema;

var subcategorySchema = new Schema({
  id: String,
  name: String,
  pluralName: String,
  shortName: String,
  icon: {
  	prefix: String,
  	suffix: String
  }
});


var Subcategory = mongoose.model('Subcategory', subcategorySchema);

module.exports = Subcategory;