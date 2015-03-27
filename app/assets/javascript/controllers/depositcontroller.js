angular.module('WeBet2Win').controller('DepositController', function($sce){
	this.pagecontent = depositpagecontent.text;
	this.sidebanners = [];
	for (var i = 0; i < depositpagecontent.sidebanners.length; i++) {
		this.sidebanners.push($sce.trustAsHtml(depositpagecontent.sidebanners[i].code));
	};
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
		sidebanners:[{
				code: '<iframe allowtransparency="true" src="http://ads.betfair.com/ad.aspx?bid=8291&pid=17116" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'
			}]
	};