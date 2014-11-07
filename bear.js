var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var IndinavSchema   = new Schema({
	name: String
});

module.exports = mongoose.model('Bear', IndinavSchema);