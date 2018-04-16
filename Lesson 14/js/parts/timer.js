function timer() {
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
}

module.exports = timer;