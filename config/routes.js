var products = require('./../server/controllers/controller.js');
// make sure you change the required controller names to reflect what is in the file


module.exports = function(app){
	app.get('/customer', function(req, res){
		customers.show(req, res);
	})

	app.post('/', function(req, res){
		customers.create(req, res);
	})

}