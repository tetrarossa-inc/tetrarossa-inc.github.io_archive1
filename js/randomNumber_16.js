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
	const rN9 = Math.floor(Math.random() * (max - min + 1)) + min;
	const rN10 = Math.floor(Math.random() * (max - min + 1)) + min;
	const rN11 = Math.floor(Math.random() * (max - min + 1)) + min;
	const rN12 = Math.floor(Math.random() * (max - min + 1)) + min;
	const rN13 = Math.floor(Math.random() * (max - min + 1)) + min;
	const rN14 = Math.floor(Math.random() * (max - min + 1)) + min;
	const rN15 = Math.floor(Math.random() * (max - min + 1)) + min;
	const rN16 = Math.floor(Math.random() * (max - min + 1)) + min;
	
	document.getElementById("randomNumber").innerHTML = rN1 + "" + rN2 + "" + rN3  + "" + rN4 + " " + rN5 + "" + rN6 + "" + rN7  + "" + rN8 + " " + rN9 + "" + rN10 + "" + rN11  + "" + rN12 + " " + rN13 + "" + rN14 + "" + rN15  + "" + rN16;
	
}, 500);