const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score');
const posxDisplay = document.getElementById('posx');
const posyDisplay = document.getElementById('posy');

let score = 0;
let player = { x: 50, y: 50, width: 10, height: 10, color: 'red' };

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height); // Draw player
    scoreDisplay.textContent = `Score: ${score}`;
	posxDisplay.textContent = `x: ${posx}`;
	posyDisplay.textContent = `y: ${posy}`;
}

function update() {
    // Implement game logic here (e.g., player movement, obstacle movement, collision detection)
    score++; // Example: increment score
	posx++;
	posy++;
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop); // Loop continuously
}

// Start the game
gameLoop();

// Example of player movement with keyboard input
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') player.x += 5;
	if (e.key === 'ArrowRight') posx += 5;
	
    if (e.key === 'ArrowLeft') player.x -= 5;
	if (e.key === 'ArrowLeft') posx -= 5;
	
    if (e.key === 'ArrowUp') player.y -= 5;
	if (e.key === 'ArrowUp') posy -= 5;
	
    if (e.key === 'ArrowDown') player.y += 5;
	if (e.key === 'ArrowDown') posy += 5;
});