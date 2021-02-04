var data = require("../data.json");

exports.addFriend = function(request, response) {   
	// Your code goes here
	var inputName = request.query.name;
	var inputDescription = request.query.description;
	var newFriend = {
		"name":inputName,
		"description":inputDescription,
		"imageURL": "http://lorempixel.com/400/400/people"
	};
	console.log(data);
	data.friends.push(newFriend);
	response.render('index', data);
	
}