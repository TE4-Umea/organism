canvas.setAttribute('id', 'canvas');

var p;
var ctx;
var tileSize;
let food = [];
let water = [];

function main() {
    var canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    console.log(window.innerHeight + ':h w: ' + window.innerWidth);

    canvas.width = window.innerWidth - 16;
    canvas.height = window.innerHeight - 16;

    //Creates the player
    tileSize = canvas.height / 16;

    p = new Player(8 * tileSize, 8 * tileSize, tileSize);

    resetBoard();
    p.resetStats();
    for (let i = 0; i < 5; i++) {
        food.push(new Food(getRandomInt(0, 36), getRandomInt(0, 16), tileSize));
        water.push(
            new Water(getRandomInt(0, 36), getRandomInt(0, 16), tileSize)
        );
    }

    resetBoard();

    p.drawPlayer(ctx);
    step();
}

let start = null;

function step() {
    if (!start) start = Date.now();
    var progress = Date.now() - start;
    if (progress > 500) {
        // Denna körs varje sekund
        p.move();
        start = Date.now();
        resetBoard();
        p.drawPlayer(ctx);
        //r.draw();
        p.stats();
        p.drawStats(ctx);
    }
    window.requestAnimationFrame(step);
}

function resetBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.lineWidth = 2;
    for (let i = 0; i < tileSize; i++) {
        ctx.moveTo(0, i * tileSize);
        ctx.lineTo(canvas.width, i * tileSize);
    }

    for (let i = 0; i < tileSize * 2; i++) {
        ctx.moveTo(i * tileSize, 0);
        ctx.lineTo(i * tileSize, canvas.height);
    }

    for (let i = 0; i < food.length; i++) {
        food[i].draw(ctx);
        water[i].draw(ctx);
    }

    ctx.stroke();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function drawFood() {}

/*function render(ctx){
    p.drawPlayer(ctx);

} */
