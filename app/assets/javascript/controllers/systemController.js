angular.module('WeBet2Win').controller('SystemController', function($sce){
	this.pagecontent = systempagecontent.text;
	this.sidebanners = [];
	for (var i = 0; i < systempagecontent.sidebanners.length; i++) {
		this.sidebanners.push($sce.trustAsHtml(systempagecontent.sidebanners[i].code));
	};
});

