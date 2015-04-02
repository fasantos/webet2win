angular.module('WeBet2Win').controller('LiveScoresController', function($sce){
	this.pagecontent = $sce.trustAsHtml(livesscorespagecontent.livesscores);
	this.sidebanners = [];
	for (var i = 0; i < livesscorespagecontent.sidebanners.length; i++) {
		this.sidebanners.push($sce.trustAsHtml(systempagecontent.sidebanners[i].code));
	};

});

var livesscorespagecontent = 
	{
		livesscores:'<div data-type="livescore" data-id="94259" id="wgt-94259" class="tap-sport-tools" style="width:992px; height:auto;"></div><div id="wgt-ft-94259" style="width:988px;"><p>Livescore powered by <a href="http://www.whatsthescore.com" target="_blank" rel="nofollow"><img src="http://medias.whatsthescore.com/upload/logo-s.png" alt="whatsthescore.com" /></a></p></div><style type="text/css">#wgt-ft-94259  {background:#FFFFFF !important;color:#202020 !important;text-decoration:none !important;padding:4px 2px !important;margin:0 !important;}#wgt-ft-94259 * {font:10px Arial !important;}#wgt-ft-94259 a {color:#202020 !important;}#wgt-ft-94259 img {vertical-align:bottom !important;height:15px !important;}</style><script type="text/javascript" src="http://tools.whatsthescore.com/load.min.js?333"></script>',
		sidebanners:[{
				code: '<div style="FONT: 11px tahoma,sans-serif; WIDTH: 300px; TEXT-ALIGN: center"><a href="http://online.titanbet.com/promoRedirect?key=ej0yMTg1MDA2NjYzJmw9MCZwPTUyMTg3NA%3D%3D==" title="Free Bonus at Titan Bet"><img src="http://online.titanbet.com/promoLoadDisplay?key=ej0yMTg1MDA2NjYzJmw9MCZwPTUyMTg3NA%3D%3D==" width="300" height="250" border="0" alt="Titan Bet Free Bonus"/></a><br/><a href="http://online.titanbet.com/promoRedirect?key=ej0yMTg1MDA2NjYzJmw9MCZwPTUyMTg3NA%3D%3D==">Claim your Titan Bet Bonus</a></div>' 
			},{
				code: '<object type="application/x-shockwave-flash" id="a7350c31e212d447c9bae5b1a68bc9f56" data="http://imstore.bet365affiliates.com/365_045355-424-72-2-149-1-29503.aspx" width="300" height="250"><param name="movie" value="http://imstore.bet365affiliates.com/365_045355-424-72-2-149-1-29503.aspx" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="external" /><a href="http://imstore.bet365affiliates.com/Tracker.aspx?AffiliateId=29503&amp;AffiliateCode=365_045355&amp;CID=194&amp;DID=72&amp;TID=1&amp;PID=149&amp;LNG=1" target="_blank"><img src="http://imstore.bet365affiliates.com/?AffiliateCode=365_045355&amp;CID=194&amp;DID=72&amp;TID=1&amp;PID=149&amp;LNG=1" style="border:0;" alt="bet365"></img></a></object>'
			},{
				code: '<!-- Affiliate Code Do NOT Modify--><iframe allowtransparency="true" src="http://affiliates.bet-at-home.com/processing/impressions.asp?btag=a_52767b_33681&aid=" width="300"  height="250"  scrolling="no" frameborder="no" style="border-width:0"></iframe><!-- End affiliate Code-->'
			}]
	};