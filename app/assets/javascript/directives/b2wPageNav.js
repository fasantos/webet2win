angular.module('WeBet2Win').directive('b2wPageNav', function(){
	return{
		replace: true,
		restrict: "E",
		templateUrl: "assets/templates/directives/b2wPageNav.html",
		controller: function($scope, $location, $state, $stateParams){
			$scope.isPage = function(name){
				return new RegExp("/" + name + "($|/)").test($location.path());
			};
			$scope.setLang = function(language){
				return $state.href($state.current.name, {lang: language});
			};

			$scope.navtext = navtext;
		}
	};
});