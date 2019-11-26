const indexLink = "https://restcountries.eu/rest/v2/all?fields=name;alpha3Code"


function renderData(data){
	console.log(data);
	const container = $(".container");
	for (let i = 0; i < data.length; i++){
		let countryDiv = $(document.createElement('div'));
		countryDiv.addClass('country');
		countryDiv.append(data[i].name+ ' ');
		let countryLink = $(document.createElement('a'));
		countryLink.attr('href', "country.html?code=" + data[i].alpha3Code);
		countryLink.text('Read more');
		countryDiv.append(countryLink);
		container.append(countryDiv);
	};
};


function parseData(event){
	let xhr = event.target;
	console.log(xhr.response);
	console.log(xhr.status);
	if (xhr.status === 200) {
		data = JSON.parse(xhr.response);
		renderData(data)
	}else {
		console.log('Error');
	};
};


function loadIndex() {
	let xhr = new XMLHttpRequest();
	xhr.onload = parseData;
	xhr.open('GET', indexLink);
	xhr.send();
};


$(document).ready(function() {
	loadIndex();
});