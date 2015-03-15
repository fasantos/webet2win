angular.module('WeBet2Win').controller('SystemController', function(){
	this.pagecontent = systempagecontent;
});

var systempagecontent = 
	{
		text: [{
			lang: 'en',
			title: "HOW DOES IT ALL WORK?",
			preview: [
				{
					paragraf: "Even for someone that has never placed an online bet, the WeBet2Win system is very straightforward!"
				},{
					paragraf: "First of all, it's important to know that most of the online bookmakers offer a sign-up bonus upon registration. For example, if you deposit 50€ with a 100% sign-up bonus, your balance will be 50€ + 50€ = 100€."
				},{
					paragraf: "As we have established partnerships with several bookmakers, you will have the opportunity to earn all the available bonuses and earn thousands!"
				}],
			content: [
			{
				paragraf: 'You have to keep in mind that you cannot transfer the bonus directly into your bank account as you first need to have wagered the total deposit + bonus value a few times, usually around 5. Taking our example above, our balance was 100€. Therefore if the "release condition" is to wager that value 5 times you would have to wager 500€ before transferring the money into your account.'
			},{
				paragraf: "No problem however! We will teach you how to avoid all this and most of all how to earn the bonus value with NO RISK involved. Using the WeBet2Win system you will not care about the result of your bet, as you win in every single case!"
			},{
				paragraf: "Here is a brief explanation of our system. You will be dealing with 2 different bookmakers every time you're trying to release one of the bonuses we are listing. One will be the bookmaker where you have signed-up and received the bonus (bet365, williamhill, etc) and the other will always be Betfair. The principle behind it is simple: you just have to place a Back bet (bet that the selected event will happen) at the bookmaker where you're tryng to release the bonus, and place a Lay bet (bet that the selected event won't happen) at Betfair."
			},{
				paragraf: "The WeBet2Win Calculator will be the only tool you need in order to complete the process described above for each bonus you will be trying to release."
			},{
				paragraf: "You also need to know that there are 2 different types of sign-up bonuses. They will both be given as a percentage of your initial deposit, up to a maximum value. The difference is that one is just a normal bonus like the one described above where you need to wager the deposit+bonus value a few times before releasing the money. The other is called Freebet. If your bet is a winning bet, your account balance will be credited with your winnings from the free bet, but not the stake amount. Also, if you lose your first bet up to the bonus amount, they will give you back that money. Don't worry if this sounds complicated to you, as all the calculations are going to be done by the WeBet2Win Calculator. All you need to do is select the type of bonus!"
			},{
				paragraf: "To maximize your profit, it is very important that you try to find high odds (around 3.0 or higher) to make sure you lose your bet at the selected bookmaker (where you are trying to release the bonus) and win at Betfair. The only downside is that the higher the odds, the more money you will need to have at Betfair to cover the responsibility for your bet, as can be seen in the WeBet2Win Calculator (again, there's absolutely no risk of losing your money)."
			},{
				paragraf: "In every bonus that you will try to release, you should expect your profit (with 0% risk involved) to be around 80-90% of the bonus amount (for example, when trying to release a 30€ bonus you will actually be able to transfer around 26€ to your bank account). As you will be able to confirm, when using the WeBet2Win Calculator, you should try to get the smallest possible difference between the Back and the Lay bets (for example a good pair of odds would be a Back bet with odds of 3.0 and a Lay bet with odds of 3.1). The smaller the difference, the higher your profit will be (so it's worth spending a few minutes looking for the best combination)."
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