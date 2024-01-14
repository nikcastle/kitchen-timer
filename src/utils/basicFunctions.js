let seconds;

export const countdown = (counter) => {
	const time = document.getElementById('time');
	const timer = setInterval(timer, 1000);

	const countDown = () => {
		time = time - 1;
		if (time <= 0) {
			clearInterval(counter);
			//TODO: counter ended, do something here
			return;
		}

		//TODO: code for showing the number of seconds here
	};
};
