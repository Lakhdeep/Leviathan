var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
  id: String,
  name: String,
  pluralName: String,
  shortName: String,
  icon: {
  	prefix: String,
  	suffix: String
  },
  categories: [this]
});


var Category = mongoose.model('Category', categorySchema);

module.exports = Category;