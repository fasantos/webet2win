angular.module('WeBet2Win').controller('MainController', function($stateParams){
		console.log($stateParams.lang);
		this.showLang = function(lang){
			return $stateParams.lang === lang;
		};
});