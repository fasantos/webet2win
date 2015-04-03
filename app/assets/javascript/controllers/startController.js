angular.module('WeBet2Win').controller('StartController', function($sce, $routeParams){
	this.pagecontent = startpagecontent.text;
	this.betfairbanner = {};
	this.betfairbanner.big = $sce.trustAsHtml(startpagecontent.betfairbanner.big);
	this.betfairbanner.small = $sce.trustAsHtml(startpagecontent.betfairbanner.small);
	//console.log(startpagecontent.betfairbanner.big);
	//console.log(this.betfairbanner.big);
	this.sidebanners = [];
	for (var i = 0; i < startpagecontent.sidebanners.length; i++) {
		this.sidebanners.push($sce.trustAsHtml(startpagecontent.sidebanners[i].code));
	};
});

var startpagecontent = 
	{
		text: [{
			lang: 'en',
			title: "START EARNING NOW!",
			preview: [
				{
					name: "First Step",
					paragraf: "Register an account with Betfair, as you will need it to place your Lay bets. It will also be the bookmaker where you will try to send all your winnings, in order to make them transferable into your bank account."
				},{
					name: "Second  Step",
					paragraf: "For each bookmaker, choose one event with odds around 3.0 or higher and place a bet on that event (Back bet). Place your bet against that same event (Lay bet) at Betfair and make sure the difference between the odds is no larger than 0.30."
				}],
			betfairtext:[
				{
					name: "Name",
					paragraf: "Betfair"
				},{
					name: "Bonus",
					paragraf: " First bet refunded up to €20 / Freebet up to £/€50 (UK+ROI)"
				},{
					name: "Release conditions",
					paragraf: "None (you will be given your money back, if your first bet up to 20€ is lost) UK+ROI - Freebet up to 50£/€50"
				}],
			content: [
				{
					name: "Example: ",
					paragraf: "3.15 at PartyBets and 3.25 at Betfair (Lay - pink) will make a 0.10 difference, which represents a good combination, as the closer those 2 values are, the higher your profit will be!"
				},{
					name: "Hint: ",
					paragraf: "Try the 1X2 football market to find the odds you need."
				},{
					name: "Notes: ",
					paragraf: "Altough we always try to give you the best advice for each of the bonuses to be released, ALWAYS read the bonus Terms and Conditions to avoid disappointment (in case the bookmaker changes any part of them)."
				},{
					paragraf: 'The term "rollover" simply refers to the amount that you must wager a few times, before requesting a payout. For example, if you deposit €50 and receive a 100% Sign-Up Bonus with a 3x rollover requirement, you would need to place a minimum of €150 (€50 x 3) in bets prior to requesting a payout.'
				}],
			levelstext:[
				{
					paragraf: "To make the bonus release process easier for you, the WeBet2Win team has created different levels."
				},{
					paragraf: "Please start with the 0-50 (smaller bonus amounts / less money needed to perform the required actions), then 51-150 and so on. Remember, there's absolutely NO RISK of losing your money!"
				}] 
		}],
		//meter numa directiva?..
		betfairbanner: {
			big: '<iframe allowtransparency="true" src="http://ads.betfair.com/ad.aspx?bid=8295&pid=17116" width="595" height="90" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>',
			small: '<iframe allowtransparency="true" src="http://ads.betfair.com/ad.aspx?bid=8297&pid=17116" width="359" height="60" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'
		},
		sidebanners:[{
				code: '<!-- Affiliate Code Do NOT Modify--><iframe allowtransparency="true" src="http://affiliates.bet-at-home.com/processing/impressions.asp?btag=a_52767b_33681&aid=" width="300"  height="250"  scrolling="no" frameborder="no" style="border-width:0"></iframe><!-- End affiliate Code-->'
			},{
				code: '<object type="application/x-shockwave-flash" id="a7350c31e212d447c9bae5b1a68bc9f56" data="http://imstore.bet365affiliates.com/365_045355-424-72-2-149-1-29503.aspx" width="300" height="250"><param name="movie" value="http://imstore.bet365affiliates.com/365_045355-424-72-2-149-1-29503.aspx" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="external" /><a href="http://imstore.bet365affiliates.com/Tracker.aspx?AffiliateId=29503&amp;AffiliateCode=365_045355&amp;CID=194&amp;DID=72&amp;TID=1&amp;PID=149&amp;LNG=1" target="_blank"><img src="http://imstore.bet365affiliates.com/?AffiliateCode=365_045355&amp;CID=194&amp;DID=72&amp;TID=1&amp;PID=149&amp;LNG=1" style="border:0;" alt="bet365"></img></a></object>'
			},{
				code: '<div style="FONT: 11px tahoma,sans-serif; WIDTH: 300px; TEXT-ALIGN: center"><a href="http://online.titanbet.com/promoRedirect?key=ej0yMTg1MDA2NjYzJmw9MCZwPTUyMTg3NA%3D%3D==" title="Free Bonus at Titan Bet"><img src="http://online.titanbet.com/promoLoadDisplay?key=ej0yMTg1MDA2NjYzJmw9MCZwPTUyMTg3NA%3D%3D==" width="300" height="250" border="0" alt="Titan Bet Free Bonus"/></a><br/><a href="http://online.titanbet.com/promoRedirect?key=ej0yMTg1MDA2NjYzJmw9MCZwPTUyMTg3NA%3D%3D==">Claim your Titan Bet Bonus</a></div>' 
			}]
	};