const targetDate = new Date("Oct 29, 2025 00:00:00").getTime();

const countdownInterval = setInterval(function() {
	
	const now = new Date().getTime();
	
	const distance = targetDate - now;
	
	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
	document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
	
	document.getElementById("Σcountdown").innerHTML = distance;
	
	if (distance < 0) {
		clearInterval(countdownInterval);
		document.getElementById("countdown").innerHTML = now;
	}
	
}, 0);