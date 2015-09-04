eventWarRoom.factory('partialFactory', function($http){
	var factory = {};
	// enter your factory methods below=============

// example:
	// factory.getProducts = function(callback){
	// 	$http.get('/products').success(function(output){
	// 		callback(output);
	// 	})
	// }

	// factory.addProducts = function(data, callback){
	// 	$http.post('/add/product', data).success(function(output){
	// 		callback(output);
	// 	})
	// 	console.log('factory');
	// 	console.log(data);
	// }
	// 	factory.updateOrder = function(data){
	// 	$http.post('/update/product', data).success(function(output){
	// 		console.log('success');
	// 	})
	// }
	
	return factory;
})

//rename 'partialController - make sure you change it on the associated partial'
//rename the injected partialFactory to reflect the associated factory
eventWarRoom.controller('dashboardController', function($scope, partialFactory){
	$scope.products;
// enter the controller methods below
// make sure you change the factory name to reflec the injected factory	

// example
	// partialFactory.getProducts(function(data){
	// 	$scope.products = data;
	// 	console.log($scope.products);
	// })

	// $scope.addProduct = function(){
	// 	partialFactory.addProducts($scope.newProduct, function(data){
	// 		$scope.products.push(data);
	// 		$scope.newProduct = {};
	// 		$scope.newProduct.imageUrl = "http://";

	// 	})

	// }

})








