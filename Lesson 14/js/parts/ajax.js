function ajax() {
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
}

module.exports = ajax;