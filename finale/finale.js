// Array of audio file paths
const audioFiles = [
	'finale/jevil_anything.mp3',
	'finale/jevil_laugh1.mp3',
	'finale/jevil_laugh2.mp3',
	'finale/jevil_laugh3.mp3',
	'finale/jevil_laugh4.mp3',
	'finale/jevil_oh.mp3'
];

// Reference to the <audio> element using its ID
const audioPlayer = document.getElementById('myAudio');

// Random index within the range of the audioFiles array's length
function playRandomAudio() {
	const randomIndex = Math.floor(Math.random() * audioFiles.length);
	audioPlayer.src = audioFiles[randomIndex];
	audioPlayer.play();
}

// Random sound every 5 seconds
setInterval(playRandomAudio, 5000);