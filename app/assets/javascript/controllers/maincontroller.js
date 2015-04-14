angular.module('WeBet2Win').controller('MainController', function($stateParams){
	this.pagecontent = mainPagecontent;
	this.showLang = function(lang){
		return $stateParams.lang === lang;
	};
});