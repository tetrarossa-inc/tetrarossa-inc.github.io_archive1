const countdownInterval = setInterval(function() {
	
	const min = 0;
	const max = 9;
	
	const rN1 = Math.floor(Math.random() * (max - min + 1)) + min;
	const rN2 = Math.floor(Math.random() * (max - min + 1)) + min;
	const rN3 = Math.floor(Math.random() * (max - min + 1)) + min;
	const rN4 = Math.floor(Math.random() * (max - min + 1)) + min;
	const rN5 = Math.floor(Math.random() * (max - min + 1)) + min;
	const rN6 = Math.floor(Math.random() * (max - min + 1)) + min;
	const rN7 = Math.floor(Math.random() * (max - min + 1)) + min;
	const rN8 = Math.floor(Math.random() * (max - min + 1)) + min;
	
	document.getElementById("randomNumber").innerHTML = rN1 + "" + rN2 + "" + rN3  + "" + rN4 + " " + rN5 + "" + rN6 + "" + rN7  + "" + rN8;
	
}, 500);