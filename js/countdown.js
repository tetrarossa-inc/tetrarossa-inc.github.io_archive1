const A = new Date("Jan 1, 0000 00:00:00").getTime();
const anime_HazbinHotel = new Date("Oct 29, 2025 00:00:00").getTime();
const Internat_TER = new Date("Apr 1, 2028 00:00:00").getTime();
const Z = new Date("Dec 31, 9999 24:59:59").getTime();

const countdownInterval = setInterval(function() {

	const now = new Date().getTime();
	
	const d_A = A - now;
	const d_anime_HazbinHotel = anime_HazbinHotel - now;
	const d_Internat_TER = Internat_TER - now;
	const d_Z = Z - now;
	
	document.getElementById("c_A").innerHTML = "Ω{" + d_A + "}Ω";
	document.getElementById("c_anime_HazbinHotel").innerHTML = "Ω{" + d_anime_HazbinHotel + "}Ω";
	document.getElementById("c_Internat_TER").innerHTML = "Ω{" + d_Internat_TER + "}Ω";
	document.getElementById("c_Z").innerHTML = "Ω{" + d_Z + "}Ω";
	
}, 0);