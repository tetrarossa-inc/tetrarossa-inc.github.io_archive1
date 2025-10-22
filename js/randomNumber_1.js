const countdownInterval = setInterval(function() {
	
	const min = 0;
	const max = 9;
	
	const rN1 = Math.floor(Math.random() * (max - min + 1)) + min;
	
	document.getElementById("randomNumber").innerHTML = rN1;
	
}, 500);