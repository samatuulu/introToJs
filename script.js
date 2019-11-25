test_1 = document.getElementById('string-3');
test_2 = document.getElementById('string-5');
test_3 = document.getElementById('string-2');
test_4 = document.getElementById('string-4');
test_5 = document.getElementById('string-1');

console.log(test_1.innerText);
console.log(test_2.innerText);
console.log(test_3.innerText);
console.log(test_4.innerText);
console.log(test_5.innerText);

// second task
element = document.getElementsByClassName('element');


for (let i = 0; i < element.length; i++){
	if (i < 3) {
		element[i].style.color = 'red';
	} else {
		element[i].style.color = 'green';
	};
};

// third task
let class_container = document.getElementById('container');
console.log(class_container);


for (var i = 1; i < 6; i++){
	test_6 = document.createElement('div');
	class_container.appendChild(test_6).className +='element';
	test_6.innerText = `Element ${i}`;
};


// third task(version2)
let class_container2 = document.getElementById('container');

for (var i = 1; i < 6; i++){
	class_container2.innerHTML += `<div class='element'>Element ${i}</div>`
};

console.log(class_container2);


// fourth task
let button_class = document.getElementById('add-item-btn');
class_button = document.getElementById('container');

function add_class(){
	class_button2 = document.createElement('div');
	class_button2.innerText = 'Element';

	class_button.appendChild(class_button2).className += 'element';

};