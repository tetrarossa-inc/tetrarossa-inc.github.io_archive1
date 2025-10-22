const countdownInterval = setInterval(function() {

	const now = new Date().getTime();
	
	const days = Math.floor(now / (1000 * 60 * 60 * 24));
	const hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((now % (1000 * 60)) / 1000);
	
	document.getElementById("currentTime").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
	
}, 0);