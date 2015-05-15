angular.module('WeBet2Win').controller('MainController', function($stateParams, $sce){
	this.pagecontent = mainpagecontent.text;
	this.banner = {};
	this.banner.big = $sce.trustAsHtml(mainpagecontent.banner.big);
	this.banner.small = $sce.trustAsHtml(mainpagecontent.banner.small);
	this.showLang = function(lang){
		return $stateParams.lang === lang;
	};
});