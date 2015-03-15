angular.module('WeBet2Win').controller('AboutUsController', function(){
	this.pagecontent = aboutustpagecontent;
});

var aboutustpagecontent = 
	{
		text: [{
			lang: 'en',
			uplevel: [{
				title: "THE PROJECT",
				paragraf: "In the WeBet2Win Project our aim is that everyone can have the possibility of earning a good amount of money, avoiding any risks. We all know that it's quite exciting to do an online bet, but it's certainly even more exciting if we can do it knowing that we will always win! Our mission is to help every single person to achieve this."
			},{
				title: "THE TEAM",
				paragraf: "We are just a group of friends that have been doing this for some time and now felt it's the time to share our knowledge with the others. Our team has the mission of finding and negotiating the best bonuses and to give full help and support to everyone. By doing this, we wish and expect you to be able to get maximum income in less time, and in a completely secure way."
			}],
			midlevel: [{
				title: "WHY DO WE SHARE OUR KNOWLEDGE?",
				paragraf: "Altough this is highly valueable information we won't be asking anyone to pay us anything or to make a donotion. We believe that everyone has the right to know these easy ways to make money online. If you want to help us, just make sure that you share this information with everyone you know, so that they can start earning some money too! That will allow us to continue our mission in finding and negotiating the best bonuses for all of us."
			}],
			downlevel: [{
				title: "HELP AND SUPPORT",
				paragraf: "If you still have any doubts or fill unconfident about anything related with our content, please have a look at our FAQ section where you'll probably find the answer you're lookin for. If you can't find your answer, please don't hesitate and post a new topic in our forum or send us a message to:",
				link: {
					adress: "mailto:info@webet2win.com",
					text: "info@webet2win.com"
				}
			},{
				title: "SUGGESTIONS",
				paragraf: "We intend to provide as much information as possible in this website so that each one of our visitors can be successful in earning risk free money, but if you still feel that some important information is missing, please don't hesitate to contact us at:",
				link: {
					adress: "mailto:webmaster@webet2win.com",
					text: "webmaster@webet2win.com"
				}
			}]
		}]
	};