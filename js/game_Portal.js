const audioFiles = [
	'jevil_anything.mp3',
];

const audioPlayer = document.getElementById('myAudio');

function playRandomAudio() {
	const randomIndex = Math.floor(Math.random() * audioFiles.length);
	audioPlayer.src = audioFiles[randomIndex];
	audioPlayer.play();
}

setInterval(playRandomAudio, 2000);