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


eventWarRoom.controller('createController', function($scope, $rootScope, partialFactory){

	$scope.create = function(){
		console.log($scope.event);
		console.log($scope.location);
		console.log($scope.place);
	}

	$scope.placeChanged = function() {
      $scope.place = this.getPlace();
  }

})








