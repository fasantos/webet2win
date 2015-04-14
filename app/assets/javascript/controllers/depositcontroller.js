angular.module('WeBet2Win').controller('DepositController', function($sce){
	this.pagecontent = depositpagecontent.text;
	this.sidebanners = [];
	for (var i = 0; i < depositpagecontent.sidebanners.length; i++) {
		this.sidebanners.push($sce.trustAsHtml(depositpagecontent.sidebanners[i].code));
	};
});

