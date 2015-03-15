angular.module('WeBet2Win').config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			redirectTo: '/home'
		})

		.when('/home', {
			templateUrl: "assets/templates/home.html",
			controller: "HomeController"
		})

		.when('/system', {
			templateUrl: "assets/templates/system.html",
			controller: "SystemController"
		})

		.when('/levels', {
			templateUrl: "assets/templates/levels.html",
			controller: "LevelsController"
		})

		.when('/levels/:level', {
			templateUrl: "assets/templates/levels/level.html",
			controller: "LevelsLevelController"
		})

		.when('/start', {
			templateUrl: "assets/templates/start.html",
			controller: "StartController"
		})

		.when('/deposit', {
			templateUrl: "assets/templates/deposit.html",
			controller: "DepositController"
		})

		.when('/livescores', {
			templateUrl: "assets/templates/livescores.html",
			controller: "LiveScoresController"
		})

		.when('/forum', {
			templateUrl: "assets/templates/forum.html",
			controller: "ForumController"
		})

		.when('/aboutus', {
			templateUrl: "assets/templates/aboutus.html",
			controller: "AboutUsController"
		})
		
		.when('/faqs', {
			templateUrl: "assets/templates/faqs.html",
			controller: "FaqsController"
		})

		.when('/copyrights', {
			templateUrl: "assets/templates/copyrights.html",
			controller: "CopyrightsController"
		})

		.otherwise({redirectTo: '/home'});
}]);