//Products controller

// rename the var and the 'Model' to reflect the name of the collection you want 



module.exports = (function(){
	return {
		show: function(req, res){
			
			// enter show query here

//example :
			// Product.find({}, function(err, results){
			// 	if (err) {
			// 		console.log(err);
			// 	}
			// 	else{
			// 		res.json(results);
			// 	}
			// })
		},
		create: function(req, res){
			//enter the create query here

//example:			
			// console.log('create!!!');
			// console.log(req.body);
			// var data = new Product({
			// 	order: [],
			// 	name: req.body.name,
			// 	image_url: req.body.imageUrl,
			// 	description: req.body.desc,
			// 	inventory: req.body.quantity
			// });

			// data.save(function(err, results){
			// 	if(err){
			// 		console.log(err);
			// 	} else{
			// 		res.json(results);
			// 	}
			// })
		}
//more queies? - put em here.


	}
})();