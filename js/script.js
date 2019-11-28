let class_inside = document.getElementById('container');


function randomTag(){
	class_inside_2 = document.createElement('div');
	class_inside_2.innerText = Math.floor((Math.random() * (20 + 1)));
	class_inside.appendChild(class_inside_2);


};

var intervalId = setInterval(randomTag, 5000);