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
	})

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
		
		if (isNaN(ageValue.value) || ageValue.value == '') {
			age.textContent = '0 лет';
		} else {
			age.textContent = ageValue.value + ' лет';
		}

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
	let progressBar_3 = document.querySelector('.progress-bar-3');

	ready.addEventListener('click', function() {
		custom.style.display = 'none';
		main.style.display = 'block';
		resultCount[1].innerHTML = '0%';
		progressBar_3.style.height = '0%';
	});

	
});
