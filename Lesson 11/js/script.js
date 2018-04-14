window.addEventListener('DOMContentLoaded', () => {

//Пишем табы - начало

	let tab = document.querySelectorAll('.info-header-tab');
	let tabContent = document.querySelectorAll('.info-tabcontent');
	let info = document.querySelector('.info-header');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}
	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});

//Пишем табы - конец.

//Пишем таймер - начало

	let deadline = '2018-04-25';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date());
		let seconds = Math.floor((t/1000) % 60);
		let minutes = Math.floor((t/1000/60) % 60);
		let hours = Math.floor((t/(1000*60*60)));

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id);
		let hours = timer.querySelector('.hours');
		let minutes = timer.querySelector('.minutes');
		let seconds = timer.querySelector('.seconds');

		function updateClock() {
			let t = getTimeRemaining(endtime);
			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}

		updateClock();
		let timeInterval = setInterval(updateClock, 1000);
	}

	setClock('timer', deadline);
//Пишем таймер - конец

//Модальное окно - начало

	let descriptionBtn = document.querySelectorAll('.description-btn');
	let overlay = document.querySelector('.overlay');
	let close = document.querySelector('.popup-close');
	console.log(descriptionBtn);

	for (let i = 0; i < descriptionBtn.length; i++) {
		descriptionBtn[i].addEventListener('click', function () {
			this.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
	}	

		close.addEventListener('click', () => {
			overlay.style.display = 'none';
			for (let j = 0; j < descriptionBtn.length; j++) {
				descriptionBtn[j].classList.remove('more-splash');
			}
			document.body.style.overflow = '';
		});
//Модальное окно - конец	

	class options {
		constructor(height, width, bg, fontSize, textAlign) {
			this.height = height;
			this.width = width;
			this.bg = bg;
			this.fontSize = fontSize;
			this.textAlign = textAlign;
		}

		createDiv() {
			let div = document.createElement('div');
			div.innerHTML = 'Привет Всем!';
			div.style.cssText = `height:${this.height};
								 width:${this.width};
								 background:${this.bg};
								 font-size:${this.fontSize};
								 text-align:${this.textAlign};`;
			document.body.appendChild(div);
		}
	}

	let divBlock = new options('100px', '100%', 'yellow', '25px', 'center');
	divBlock.createDiv();

//Отправка данных формы модального окна без перезагрузки - начало

	let message = new Object();
	message.loading = 'Загрузка...';
	message.success = 'Спасибо! Ваши данные успешно приняты';
	message.failure = 'Что-то пошло не так...';

	let form = document.getElementsByClassName('main-form')[0];
	let input = form.getElementsByTagName('input');
	let statusMessage = document.createElement('div');

	statusMessage.classList.add('status');

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		form.appendChild(statusMessage);

		//AJAX
		let request = new XMLHttpRequest();
		request.open("POST", 'server.php')

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(form);
		request.send(formData);

	 	request.onreadystatechange = function() {
	 		if (request.readyState < 4) {
	 			statusMessage.innerHTML = message.loading;
	 		} else if (request.readyState === 4) {
	 			if (request.status == 200 && request.status < 300) {
	 				statusMessage.innerHTML = message.success;
	 			} else {
	 				statusMessage.innerHTML = message.failure;
	 			}
	 		}
	 	}
	 	for (let i = 0; i < input.length; i++) {
	 		input[i].value = '';
	 	}
	});
//Отправка данных формы модального окна без перезагрузки - конец

//Отправка данных формы контактов без перезагрузки - начало

	let contactsData = document.getElementById('form');
	let inputContacts = contactsData.getElementsByTagName('input');
	let statusMessageContacts = document.createElement('div');

	statusMessageContacts.classList.add('status');

	contactsData.addEventListener('submit', function(event) {
		event.preventDefault();
		contactsData.appendChild(statusMessageContacts);

		//AJAX
		let requestContacts = new XMLHttpRequest();
		requestContacts.open("POST", 'server.php')

		requestContacts.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formDataContacts = new FormData(contactsData);
		requestContacts.send(formDataContacts);

	 	requestContacts.onreadystatechange = function() {
	 		if (requestContacts.readyState < 4) {
	 			statusMessageContacts.innerHTML = message.loading;
	 		} else if (requestContacts.readyState === 4) {
	 			if (requestContacts.status == 200 && requestContacts.status < 300) {
	 				statusMessageContacts.innerHTML = message.success;
	 			} else {
	 				statusMessageContacts.innerHTML = message.failure;
	 			}
	 		}
	 	}
	 	for (let i = 0; i < inputContacts.length; i++) {
	 		inputContacts[i].value = '';
	 	}
	})
});

