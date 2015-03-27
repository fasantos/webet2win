// Calculator
document.getElementById("betValue").addEventListener("keyup", function(){calculator();});
document.getElementById("houseOdd").addEventListener("keyup", function(){calculator();});
document.getElementById("freebet").addEventListener("change", function(){calculator();});
document.getElementById("betfairOdd").addEventListener("keyup", function(){calculator();});
document.getElementById("comission").addEventListener("keyup", function(){calculator();});

var calculator = function(){
	var betValue = Number(document.getElementById("betValue").value);
 	var houseOdd = Number(document.getElementById("houseOdd").value);
 	var freebet = document.getElementById("freebet").checked;
 	var betfairOdd = Number(document.getElementById("betfairOdd").value);
 	var comission = Number(document.getElementById("comission").value);
 	var result;

 	//alert(betValue);
 	if(isNaN(betValue) || isNaN(houseOdd) || isNaN(betfairOdd) || isNaN(comission)){
		alert("Please enter a numeric value.");
	}else{
		if(freebet){
 			result = calculateWithFreebet(betValue, houseOdd, betfairOdd, comission);
 		}else{
 			result = calculateWithoutFreebet(betValue, houseOdd, betfairOdd, comission);
 		}
	}
 	

 	document.getElementById("val2Bet").value = Math.round(result[0] * 100) / 100;
	document.getElementById("balNeeded").value = Math.round(result[1] * 100) / 100;
	document.getElementById("winbetfair").value = Math.round(result[2] * 100) / 100;
	document.getElementById("winbethouse").value = Math.round(result[2] * 100) / 100;

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
document.getElementById("quocient").addEventListener("keyup", function(){fractional();});
document.getElementById("dividend").addEventListener("keyup", function(){
	auxfunc();
});
document.getElementById("signal").addEventListener("keyup", function(){american();});
document.getElementById("signal").addEventListener("change", function(){american();});
document.getElementById("aDividend").addEventListener("keyup", function(){american();});

var auxfunc = function(){
	var dividend = Number(document.getElementById("dividend").value);
	var sDividend = document.getElementById("dividend").value;
	if(sDividend !== ""){
		if(dividend === 0){
			alert("Dividend must be diferent then 0. ");
		}else{
			fractional();
		}
	}
}

var fractional = function(){
	var quocient = Number(document.getElementById("quocient").value);
 	var dividend = Number(document.getElementById("dividend").value);

 	if(isNaN(quocient) || isNaN(dividend)){
		alert("Please enter a numeric value.");
	}else{
 		document.getElementById("fractRsul").value = Math.round((quocient / dividend) + 1 * 100) / 100;
 	}
}

var american = function(){
 	var signal = document.getElementById("signal").value;
 	var aDividend = Number(document.getElementById("aDividend").value);

 	if (signal !== "+" && signal !== "-"){
 		alert("Signal must be '+' or '-'.");
 	}else if (isNaN(aDividend)){
 		alert("Please enter a numeric value.");
 	}else if (signal === "+"){
        document.getElementById("amRsul").value = Math.round(aDividend / 100 + 1 * 100) / 100;
    }
    else{
       	document.getElementById("amRsul").value = Math.round(100 / aDividend + 1 * 100) / 100;
    }
}

//Ajax currency converter handler
/*google.load("jquery", "1.2.6");function gp_currencySymbols() {
	$.getJSON("http://www.geoplugin.net/currency_symbols.gp?format=json&jsoncallback=?",
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
};*/
function gp_convertIt() {
	if (!document.getElementById('gp_amount').value){
		return false;
	} else {
	var gp_from = document.getElementById('gp_from').value;
	var gp_to = document.getElementById('gp_to').value;
	var gp_amount = document.getElementById('gp_amount').value;
	//Ajax currency converter callback
	$.getJSON( "http://www.geoplugin.net/currency_converter.gp?jsoncallback=?", { from:gp_from, to:gp_to, amount:gp_amount },
		function(output){
			document.getElementById("gp_converted").value = output.to.amount;
		});
	}
}