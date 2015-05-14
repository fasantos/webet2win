angular.module('WeBet2Win').controller('LevelsController', function($scope, $sce, $location, $stateParams){

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
});

