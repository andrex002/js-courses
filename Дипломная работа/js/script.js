window.addEventListener('DOMContentLoaded', function() {

	let popupBtn = document.getElementById('popup-btn');
	let overlay = document.querySelector('.overlay');
	let main = document.querySelector('.main');
	let custom = document.querySelector('.custom');
	let customChild = custom.querySelectorAll('div.custom > div');

	popupBtn.addEventListener('click', function () {
		overlay.style.display = 'none';
		main.style.display = 'none';
		custom.style.display = 'flex';

		for (i = 0; i < customChild.length; i++) {
			customChild[i].style.display = 'block';
		}
	});

	let mainCardsItem = document.querySelectorAll('.main-cards-item');
	let name = mainCardsItem[1].querySelector('.name');
	let age = mainCardsItem[1].querySelector('.age');
	let sex = mainCardsItem[1].querySelector('.sex');
	let views = mainCardsItem[1].querySelector('.views');
	let bio = mainCardsItem[1].querySelector('.bio');
	let personEasy = document.querySelector('.person-easy');

	
	let nameValue = document.getElementById('name');
	let ageValue = document.getElementById('age');
	let maleValue = document.getElementById('male');
	let femaleValue = document.getElementById('female');
	let viewsValue = document.getElementById('select');
	let bioValue = document.getElementById('bio');
	let radio = document.querySelector('.radio');
	let inputSex = radio.getElementsByTagName('input');

	nameValue.addEventListener('change', function() {
		
		if (isNaN(nameValue.value) && nameValue.value != '') {
			name.textContent = nameValue.value;
		}

	});

	ageValue.addEventListener('change', function() {
		
		//if (isNaN(ageValue.value) || ageValue.value == '' || ageValue.value > 80 || ageValue.value < 25) {
			//age.textContent = 'Введите корректный возраст';
		//	alert('Введите корректный возраст (от 25 до 80)');
		//} else {
			age.textContent = ageValue.value + ' лет';
		//}

	});

	radio.addEventListener('click', function(event) {
		if (event.target && event.target.tagName == 'INPUT') {
			sex.textContent = event.target.value;
		}

		if (event.target.value == 'Женский') {
			personEasy.style.backgroundImage = 'url(img/construct-1.png)';
			preview.style.backgroundImage = 'url(img/construct-1.png)';
			photo3.style.backgroundImage = personEasy.style.backgroundImage;
		} else {
			personEasy.style.backgroundImage = 'url(img/construct-5.png)';
			preview.style.backgroundImage = 'url(img/construct-5.png)';
			photo3.style.backgroundImage = personEasy.style.backgroundImage;
		}
	});
	
	viewsValue.addEventListener('change', function() {
		views.innerHTML = this.options[this.selectedIndex].value;
	});

	bioValue.addEventListener('change', function() {
		bio.innerHTML = this.value;
	});

	//Слайдер
	let prev = document.querySelector('.prev');
	let next = document.querySelector('.next');
	let preview = document.querySelector('.preview');
	let photo3 = document.querySelector('.photo-3');
	let slideIndex = 5;

	function showSlides (n) {
		if (n > 8 && male.checked) {
			slideIndex = 5;
		};
		if (n < 5 && male.checked) {
			slideIndex = 8;
		}
		if (n > 4 && female.checked) {
			slideIndex = 1;
		}
		if (n < 1 && female.checked) {
			slideIndex = 4;
		}
	}
	
	function plusSlides (n) {
		
		showSlides(slideIndex += n)
		preview.style.backgroundImage = 'url(img/construct-' + slideIndex +'.png)';
		personEasy.style.backgroundImage = 'url(img/construct-' + slideIndex +'.png)';
		photo3.style.backgroundImage = personEasy.style.backgroundImage;
	}

	
	next.addEventListener('click', function() {
		plusSlides(1);

	});

	prev.addEventListener('click', function() {
		plusSlides(-1);
	});
	//Слайдер - конец

	let ready = document.getElementById('ready');
	let resultCount = document.getElementsByClassName('result-count');
	let progressBar_1 = document.querySelector('.progress-bar-1');
	let progressBar_2 = document.querySelector('.progress-bar-2');
	let progressBar_3 = document.querySelector('.progress-bar-3');
	let message = document.createElement('div');

	message.style.color = 'red';

	ready.addEventListener('click', function() {
		if (nameValue.value == '' || ageValue.value == '' || bioValue.value == '') {
			customChild[0].appendChild(message);
			message.innerHTML = 'Заполните пожалуйста все поля';
		
		} else if (isNaN(ageValue.value) || ageValue.value == '' || ageValue.value > 80 || ageValue.value < 25) {
			alert('Введите корректный возраст (от 25 до 80)');
			ageValue.value = '';
			ageValue.focus();
		} else {
			custom.style.display = 'none';
			main.style.display = 'block';
			for (let i = 0; i < resultCount.length; i++) {
				resultCount[i].innerHTML = '0%';
			}
			progressBar_1.style.height = '0%';
			progressBar_2.style.height = '0%';
			progressBar_3.style.height = '0%';
		}
	});

	let reset = document.getElementById('reset');

	reset.addEventListener('click', function() {
		custom.style.display = 'flex';
		main.style.display = 'none';
		message.remove();
		nameValue.value = '';
		ageValue.value = '';
		maleValue.checked = 'checked';
		viewsValue.options[0].selected = 'selected';
		bioValue.value = '';

		if (maleValue.checked) {
			personEasy.style.backgroundImage = 'url(img/construct-5.png)';
			preview.style.backgroundImage = 'url(img/construct-5.png)';
		}

	});

	//Кнопка “Провести честное голосование”
	let voting = document.getElementById('voting');
	let candidatePoints_1;
	let candidatePoints_2;
	let candidatePoints_3;

	function favorite (n1, n2, n3) {
		if (n1 > n2 && n1 > n3) {
			mainCardsItem[0].classList.add('main-cards-item-active');
			mainCardsItem[1].classList.remove('main-cards-item-active');
			mainCardsItem[2].classList.remove('main-cards-item-active');
		} 
		if (n2 > n1 && n2 > n3) {
			mainCardsItem[1].classList.add('main-cards-item-active');
			mainCardsItem[0].classList.remove('main-cards-item-active');
			mainCardsItem[2].classList.remove('main-cards-item-active');
		} 
		if (n3 > n1 && n3 > n2) {
			mainCardsItem[2].classList.add('main-cards-item-active');
			mainCardsItem[1].classList.remove('main-cards-item-active');
			mainCardsItem[0].classList.remove('main-cards-item-active');
		}
	};

	voting.addEventListener('click', function() {
		candidatePoints_1 = Math.floor(Math.random()*100);
		candidatePoints_2 = Math.floor(Math.random()*(100 - candidatePoints_1));
		candidatePoints_3 = 100 - candidatePoints_1 - candidatePoints_2;
		
		resultCount[0].innerHTML = candidatePoints_1 + '%';
		resultCount[1].innerHTML = candidatePoints_2 + '%';
		resultCount[2].innerHTML = candidatePoints_3 + '%';
		progressBar_1.style.height = candidatePoints_1 + '%';
		progressBar_2.style.height = candidatePoints_2 + '%';
		progressBar_3.style.height = candidatePoints_3 + '%';

		favorite(candidatePoints_1, candidatePoints_2, candidatePoints_3);
	});

	//Кнопка “Вмешаться в выборы”
	let crime = document.getElementById('crime');
	crime.addEventListener('click', function() {
		candidatePoints_1 = Math.floor(Math.random()*75);
		candidatePoints_2 = Math.floor(Math.random()*(75 - candidatePoints_1)) + 25;
		candidatePoints_3 = 100 - candidatePoints_1 - candidatePoints_2;
		
		resultCount[0].innerHTML = candidatePoints_1 + '%';
		resultCount[1].innerHTML = candidatePoints_2 + '%';
		resultCount[2].innerHTML = candidatePoints_3 + '%';
		progressBar_1.style.height = candidatePoints_1 + '%';
		progressBar_2.style.height = candidatePoints_2 + '%';
		progressBar_3.style.height = candidatePoints_3 + '%';

		favorite(candidatePoints_1, candidatePoints_2, candidatePoints_3);
	});
	
});
