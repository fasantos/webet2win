angular.module('WeBet2Win').controller('DepositController', function(){
	this.pagecontent = depositpagecontent;
});

var depositpagecontent = 
	{
		text: [{
			lang: 'en',
			title: "HOW TO MAKE DEPOSITS",
			firstparagraf: "To make a deposit into your account at each bookmaker you can usually choose one of the following options(*):",
			methods: [
				{
					prefix: "1 - Debit / Credit Card: ",
					sufix: "others...",
					links: [
					{
						href: "https://www.visa.com",
						img: "assets/images/visaicon.jpg"
					},{
						href: "http://www.mastercard.com",
						img: "assets/images/mcicon.jpg"
					},{
						href: "https://www.americanexpress.com",
						img: "assets/images/aeicon.jpg"
					}]
				},{
					prefix: "2 - Click Here To Join ",
					sufix: " Now.",
					links: [{
						href: "https://www.skrill.com",
						img: "assets/images/skicon.jpg"
					}]
				},{
					prefix: "3 - Click Here To Join ",
					sufix: " Now.",
					links: [{
						href: "http://www.neteller.com",
						img: "assets/images/nticon.jpg"
					}]
				}],
			content: [
			{
				paragraf: '(*) - We will always try to help you choose the best option to make your deposit at each bookmaker. However please always make sure to read the "Terms and Conditions" for every single bonus as sometimes there are restrictions.'
			},{
				paragraf: 'Example: "If you use Skrill to fund your account you will not be eligible for any free bet or matched bet promotion."'
			}] 
		}],
		//meter numa directiva?..
		sidebanners:[{
				code: '<!-- Affiliate Code Do NOT Modify--><iframe allowtransparency="true" src="http://affiliates.bet-at-home.com/processing/impressions.asp?btag=a_52767b_33681&aid=" width="300"  height="250"  scrolling="no" frameborder="no" style="border-width:0"></iframe><!-- End affiliate Code-->'
			},{
				code: '<object type="application/x-shockwave-flash" id="a7350c31e212d447c9bae5b1a68bc9f56" data="http://imstore.bet365affiliates.com/365_045355-424-72-2-149-1-29503.aspx" width="300" height="250"><param name="movie" value="http://imstore.bet365affiliates.com/365_045355-424-72-2-149-1-29503.aspx" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="external" /><a href="http://imstore.bet365affiliates.com/Tracker.aspx?AffiliateId=29503&amp;AffiliateCode=365_045355&amp;CID=194&amp;DID=72&amp;TID=1&amp;PID=149&amp;LNG=1" target="_blank"><img src="http://imstore.bet365affiliates.com/?AffiliateCode=365_045355&amp;CID=194&amp;DID=72&amp;TID=1&amp;PID=149&amp;LNG=1" style="border:0;" alt="bet365"></img></a></object>'
			},{
				code: '<div style="FONT: 11px tahoma,sans-serif; WIDTH: 300px; TEXT-ALIGN: center"><a href="http://online.titanbet.com/promoRedirect?key=ej0yMTg1MDA2NjYzJmw9MCZwPTUyMTg3NA%3D%3D==" title="Free Bonus at Titan Bet"><img src="http://online.titanbet.com/promoLoadDisplay?key=ej0yMTg1MDA2NjYzJmw9MCZwPTUyMTg3NA%3D%3D==" width="300" height="250" border="0" alt="Titan Bet Free Bonus"/></a><br/><a href="http://online.titanbet.com/promoRedirect?key=ej0yMTg1MDA2NjYzJmw9MCZwPTUyMTg3NA%3D%3D==">Claim your Titan Bet Bonus</a></div>' 
			},{
				code: '<iframe allowtransparency="true" src="http://ads.betfair.com/ad.aspx?bid=8291&pid=17116" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'
			}]
	};