'use strict';

// Declare app level module which depends on views, and components
angular.module('WeBet2Win', [
	'ngRoute',
	'ngResource',
	'ui.router'
])

.controller('MainController', function($stateParams, $sce){
	this.pagecontent = mainpagecontent.text;
	this.banner = {};
	this.banner.big = $sce.trustAsHtml(mainpagecontent.banner.big);
	this.banner.small = $sce.trustAsHtml(mainpagecontent.banner.small);
	this.showLang = function(lang){
		return $stateParams.lang === lang;
	};
})

.controller('AboutUsController', function(){
	this.pagecontent = aboutustpagecontent;
})

.controller('CopyrightsController', function(){
	this.pagecontent = copyrightspagecontent;
})

.controller('DepositController', function($sce){
	this.pagecontent = depositpagecontent.text;
	this.sidebanners = [];
	for (var i = 0; i < depositpagecontent.sidebanners.length; i++) {
		this.sidebanners.push($sce.trustAsHtml(depositpagecontent.sidebanners[i].code));
	};
})

.controller('FaqsController', function(){
	this.pagecontent = faqspagecontent;
	var showAnswer = false;	
})

.controller('HomeController', function(){
	
})

.controller('LevelsController', function($scope, $sce, $location, $stateParams){
	var text, level, house;
	this.pagecontent = levelspagecontent;
	for(text in this.pagecontent.texts){
		for(level in this.pagecontent.texts[text].levels){
			for (house in this.pagecontent.texts[text].levels[level].houses) {
				if (typeof(this.pagecontent.texts[text].levels[level].houses[house].banner) == typeof('')){
					this.pagecontent.texts[text].levels[level].houses[house].banner = 
					$sce.trustAsHtml(this.pagecontent.texts[text].levels[level].houses[house].banner);
				};
			};
		};
	};
	$scope.showLevel = function(level){
		return level == $stateParams.levels
	};

	this.levelurl= function(level){
		return '#/' + $stateParams.lang + '/start/' + level;
	}
})

.controller('LiveScoresController', function($sce){
	this.pagecontent = $sce.trustAsHtml(livesscorespagecontent.livesscores);
	this.sidebanners = [];
	for (var i = 0; i < livesscorespagecontent.sidebanners.length; i++) {
		this.sidebanners.push($sce.trustAsHtml(systempagecontent.sidebanners[i].code));
	};

})

.controller('StartController', 
	function($sce, $stateParams, $location){

		this.pagecontent = startpagecontent.text;
		this.betfairbanner = {};
		this.betfairbanner.big = $sce.trustAsHtml(startpagecontent.betfairbanner.big);
		this.betfairbanner.small = $sce.trustAsHtml(startpagecontent.betfairbanner.small);
		this.sidebanners = [];
		for (var i = 0; i < startpagecontent.sidebanners.length; i++) {
			this.sidebanners.push($sce.trustAsHtml(startpagecontent.sidebanners[i].code));
		};
})

.controller('SystemController', function($sce){
	this.pagecontent = systempagecontent.text;
	this.sidebanners = [];
	for (var i = 0; i < systempagecontent.sidebanners.length; i++) {
		this.sidebanners.push($sce.trustAsHtml(systempagecontent.sidebanners[i].code));
	};
});
