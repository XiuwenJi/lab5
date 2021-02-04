// Get all of our friend data
/*This will get printed to the terminal console 
via console.log whenever loading the page*/
var data = require('../data.json');

exports.view = function(request, response){
	console.log(data);
	response.render('index', data);
}