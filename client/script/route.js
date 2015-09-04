var eventWarRoom = angular.module('EventWarRoom', ['ngRoute', 'ngMap']);
eventWarRoom.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: '/partials/welcome.html'
		})
		.when('/welcome',{
			templateUrl: '/partials/welcome.html'
		})
		.when('/login', {
			templateUrl: '/partials/login.html'
		})
		.when('/register', {
			templateUrl: '/partials/register.html'
		})		
		.when('/dashboard', {
			templateUrl: '/partials/dashboard.html'
		})		
		.when('/create', {
			templateUrl: '/partials/create.html'
		})		
		.when('/invite', {
			templateUrl: '/partials/invite.html'
		})		
		.when('/chat', {
			templateUrl: 
			'/partials/chat.html'
		})		
		.otherwise({
			redirectTo: '/'
		});
});