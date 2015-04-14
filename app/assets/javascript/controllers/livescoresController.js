angular.module('WeBet2Win').controller('LiveScoresController', function($sce){
	this.pagecontent = $sce.trustAsHtml(livesscorespagecontent.livesscores);
	this.sidebanners = [];
	for (var i = 0; i < livesscorespagecontent.sidebanners.length; i++) {
		this.sidebanners.push($sce.trustAsHtml(systempagecontent.sidebanners[i].code));
	};

});
