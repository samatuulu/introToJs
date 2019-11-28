var urlParams = new URLSearchParams(window.location.search);
var param = urlParams.get('code');

let test = "https://restcountries.eu/rest/v2/alpha/" + param + "?fields=name;capital;callingCodes;population;area"

const container = $("#container");


function renderData(data){
	Object.entries(data).forEach(function ([key, value]) {
		console.log(`${key}: ${value}`) 
		let countryDiv = $(document.createElement('div'));
		countryDiv.addClass('country');

		$(countryDiv).css({"background-color": "green", 
			"font-size": "20px", "text-align": "center",
			"font-family": "Times New Roman, Times, serif",
			"color": "white"});


		countryDiv.append(`${key[0].toUpperCase() + key.slice(1)}: ${value}`)
		container.append(countryDiv)

	});
};


function jqueryAjaxError(response, status){
	console.log(response);
	console.log(status);
	renderData(response);
};


function jqueryParseData(response, status) {
	console.log(response);
	console.log(status);
	renderData(response);
};

function jqueryLoadIndex(){
	$.ajax({
		url: test,
		method: 'GET',
		success: jqueryParseData,
		error: jqueryAjaxError
	});
};


$(document).ready(function(){
	jqueryLoadIndex();
});