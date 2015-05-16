angular.module('WeBet2Win').directive('b2wCalculator', function(){
	return {
		replace: true,
		restrict: "E",
		templateUrl: "assets/templates/directives/b2wCalculator.html",
		controller: function($scope, $sce){

			this.pagetext = calctext.text;

			// Calculator
			$("#betValue").on("keyup", function(){
				calculator();
			});
			$("#houseOdd").on("keyup", function(){calculator();});
			$("#freebet").on("change", function(){calculator();});
			$("#betfairOdd").on("keyup", function(){calculator();});
			$("#comission").on("keyup", function(){calculator();});

			calculator = function(){
				var betValue = Number($("#betValue").val());
			 	var houseOdd = Number($("#houseOdd").val());
			 	var freebet = $("#freebet").is(':checked');
			 	var betfairOdd = Number($("#betfairOdd").val());
			 	var comission = Number($("#comission").val());
			 	var result;

			 	if(isNaN(betValue) || isNaN(houseOdd) || isNaN(betfairOdd) || isNaN(comission)){
					alert("Please enter a numeric value.");
				}else{
					if(freebet){
			 			result = calculateWithFreebet(betValue, houseOdd, betfairOdd, comission);
			 		}else{
			 			result = calculateWithoutFreebet(betValue, houseOdd, betfairOdd, comission);
			 		}
				}

			 	$("#val2Bet").val(Math.round(result[0] * 100) / 100);
				$("#balNeeded").val(Math.round(result[1] * 100) / 100);
				$("#winbetfair").val(Math.round(result[2] * 100) / 100);
				$("#winbethouse").val(Math.round(result[2] * 100) / 100);

			}

			var calculateWithFreebet = function(betValue, houseOdd, betfairOdd, comission){
				var valToBet = ((houseOdd - 1)/ (betfairOdd - (comission / 100))) * betValue;
				var balNeeded = (betfairOdd - 1) * valToBet;
				var win = ((houseOdd - 1) * betValue) - balNeeded;
				return [valToBet, balNeeded, win]
			}

			var calculateWithoutFreebet = function(betValue, houseOdd, betfairOdd, comission){
				var valToBet = (houseOdd / (betfairOdd - (comission / 100))) * betValue;
				var balNeeded = (betfairOdd - 1) * valToBet;
				var win = ((houseOdd - 1) * betValue) - balNeeded;
				return [valToBet, balNeeded, win]
			}

			//Odds Converter
			$("#quocient").on("keyup", function(){
				//alert(Number($("#quocient").val()));
				fractional();});
			$("#dividend").on("keyup", function(){auxfunc();});
			$("#signal").on("keyup", function(){american();});
			$("#signal").on("change", function(){american();});
			$("#aDividend").on("keyup", function(){american();});

			var auxfunc = function(){
				var dividend = Number($("#dividend").val());
				var sDividend = $("#dividend").val();
				if(sDividend !== ""){
					if(dividend === 0){
						alert("Dividend must be diferent then 0. ");
					}else{
						fractional();
					}
				}
			}

			var fractional = function(){
				var quocient = Number($("#quocient").val());
			 	var dividend = Number($("#dividend").val());

			 	if(isNaN(quocient) || isNaN(dividend)){
					alert("Please enter a numeric value.");
				}else{
			 		$("#fractRsul").val(Math.round((quocient / dividend) + 1 * 100) / 100);
			 	}
			}

			var american = function(){
			 	var signal = $("#signal").val();
			 	var aDividend = Number($("#aDividend").val());

			 	if (signal !== "+" && signal !== "-"){
			 		alert("Signal must be '+' or '-'.");
			 	}else if (isNaN(aDividend)){
			 		alert("Please enter a numeric value.");
			 	}else if (signal === "+"){
			        $("#amRsul").val(Math.round(aDividend / 100 + 1 * 100) / 100);
			    }
			    else{
			       	$("#amRsul").val(Math.round(100 / aDividend + 1 * 100) / 100);
			    }
			}

			//Ajax currency converter handler
			$.getJSON($sce.trustAsUrl("http://www.geoplugin.net/currency_symbols.gp?format=json&jsoncallback=?"),
				function(data){
					var currencyCode = geoplugin_currencyCode();
					var fromCurr = '';
					var toCurr = '';

					$.each(data, function(i,item){
						if ( currencyCode == i ) {
							fromCurr = fromCurr + "<option value='"+i+"' selected>"+item.name+" "+(item.symbol?item.symbol:'')+"</option>";
						} else {
							fromCurr = fromCurr + "<option value='"+i+"'>"+item.name+" "+(item.symbol?item.symbol:'')+"</option>";
						}
					});          
					$.each(data, function(i,item){
						if ( currencyCode == 'USD' && i == 'EUR' ) {
							toCurr = toCurr + "<option value='"+i+"' selected>"+item.name+" "+(item.symbol?item.symbol:'')+"</option>";
						} else {
							toCurr = toCurr + "<option value='"+i+"'>"+item.name+" "+(item.symbol?item.symbol:'')+"</option>";
						}
					});
					$(fromCurr).appendTo("#gp_from");
					$(toCurr).appendTo("#gp_to");
			});
			
			$('#gp_convertIt').on('click', function(){
				if (!$('#gp_amount').val()){
					return false;
				} else {
					var gp_from = $('#gp_from').val();
					var gp_to = $('#gp_to').val();
					var gp_amount = $('#gp_amount').val();
					//Ajax currency converter callback
					$.getJSON($sce.trustAsUrl("http://www.geoplugin.net/currency_converter.gp?jsoncallback=?"), { from:gp_from, to:gp_to, amount:gp_amount },
						function(output){
							$("#gp_converted").val(output.to.amount);
						});
				}

			});

		},
		controllerAs: 'b2wCalculatorCtrl'
	};
});