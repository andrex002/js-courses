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
});