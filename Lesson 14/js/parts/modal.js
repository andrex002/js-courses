function modal() {
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
}

module.exports = modal;