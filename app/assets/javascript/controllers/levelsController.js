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
	//console.log($stateParams.levels);
	$scope.showLevel = function(level){
		return level == $stateParams.levels
	};
})

var levelspagecontent = 
	{
		texts: [{
			lang: 'en',
			intro: "The following betting houses have a sign-up bonus amount up to",
			namelabel: "Name: ",
			bonuslabel: "Bonus: ",
			conditionslabel: "Release conditions: ",
			levels: [{
				level: "Level 1",
				houses: [{
					name: "Bwin",
					bonus: "100% sign-up bonus up to 50€",
					conditions: "To release the bonus bet 150€ at odds of 2.00 or greater", 
					banner: '<iframe id="itsfogo86043" name="itsfogo86043" src="http://adserver.itsfogo.com/default.aspx?t=f&v=1&zoneid=86043" frameborder="0" scrolling="no"></iframe>'
				}]
			}]
		}]
	};