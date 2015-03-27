angular.module('WeBet2Win').directive('b2wPageNav', function(){
	return{
		replace: true,
		restrict: "E",
		templateUrl: "assets/templates/directives/b2wPageNav.html",
		controller: function($scope, $location){
			$scope.isPage = function(name){
				return new RegExp("/" + name + "($|/)").test($location.path());
			};
		}
	};
});