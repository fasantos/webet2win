angular.module('WeBet2Win').config(function($routeProvider, $stateProvider, $urlRouterProvider){

	$stateProvider
		.state('lang', {
			url: '/:lang',
			templateUrl: "assets/templates/main.html",
			controller: "MainController"
		})

		.state('lang.home', {
			url: '/home', 
			templateUrl: "assets/templates/home.html",
			controller: "HomeController"
		})

		.state('lang.system', {
			url:'/system',
			templateUrl: "assets/templates/system.html",
			controller: "SystemController"
		})

		.state('lang.start.level0', {
			url: '/level0', 
			templateUrl: "assets/templates/level0.html",
			controller: "StartController"
		})

		.state('lang.start.levels', {
			url: '/:levels', 
			templateUrl: "assets/templates/levels.html",
			controller: "LevelsController"
		})

		.state('lang.start', {
			url: '/start',
			templateUrl: "assets/templates/start.html",
			controller: "StartController"
		})

		.state('lang.deposit', {
			url:'/deposit',
			templateUrl: "assets/templates/deposit.html",
			controller: "DepositController"
		})

		.state('lang.livescores', {
			url:'/livescores',
			templateUrl: "assets/templates/livescores.html",
			controller: "LiveScoresController"
		})

		.state('lang.forum', {
			url:'/forum',
			templateUrl: "assets/templates/forum.html",
			controller: "ForumController"
		})

		.state('lang.aboutus', {
			url:'/aboutus',
			templateUrl: "assets/templates/aboutus.html",
			controller: "AboutUsController"
		})

		.state('lang.faqs', {
			url:'/faqs',
			templateUrl: "assets/templates/faqs.html",
			controller: "FaqsController"
		})

		.state('lang.copyrights', {
			url:'/copyrights',
			templateUrl: "assets/templates/copyrights.html",
			controller: "FaqsController"
		})

	$urlRouterProvider.otherwise(function($stateParams){
		if (geoplugin_countryCode() == "AO" || geoplugin_countryCode() == "BR" ||
			geoplugin_countryCode() == "CV" || geoplugin_countryCode() == "MZ" ||
			geoplugin_countryCode() == "PT" || geoplugin_countryCode() == "TL" ||
			geoplugin_countryCode() == "ST" || geoplugin_countryCode() == "MO" ||
			geoplugin_countryCode() == "GW") {

			return "pt/home";

		} else if (geoplugin_countryCode() == "AD" || geoplugin_countryCode() == "AR" ||
			geoplugin_countryCode() == "BO" || geoplugin_countryCode() == "CL" ||
			geoplugin_countryCode() == "CO" || geoplugin_countryCode() == "CR" ||
			geoplugin_countryCode() == "CU" || geoplugin_countryCode() == "DO" ||
			geoplugin_countryCode() == "EC" || geoplugin_countryCode() == "ES" ||
			geoplugin_countryCode() == "GT" || geoplugin_countryCode() == "HN" ||
			geoplugin_countryCode() == "MX" || geoplugin_countryCode() == "NI" ||
			geoplugin_countryCode() == "PE" || geoplugin_countryCode() == "PR" ||
			geoplugin_countryCode() == "SV" || geoplugin_countryCode() == "UY" ||
			geoplugin_countryCode() == "VE") {

			return "es/home";
		} else{

			return "en/home";
		}	
	});		
});