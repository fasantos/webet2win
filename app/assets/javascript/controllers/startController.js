angular.module('WeBet2Win').controller('StartController', 
	function($sce, $stateParams, $location){

		this.pagecontent = startpagecontent.text;
		this.betfairbanner = {};
		this.betfairbanner.big = $sce.trustAsHtml(startpagecontent.betfairbanner.big);
		this.betfairbanner.small = $sce.trustAsHtml(startpagecontent.betfairbanner.small);
		this.sidebanners = [];
		for (var i = 0; i < startpagecontent.sidebanners.length; i++) {
			this.sidebanners.push($sce.trustAsHtml(startpagecontent.sidebanners[i].code));
		};
});

