canvas.setAttribute("id", "canvas");




var p;
var ctx;
var tileSize;
// let rocks = [];




function main() {
    var canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    console.log(window.innerHeight + ":h w: " + window.innerWidth);

    canvas.width  = window.innerWidth - 16;
    canvas.height = window.innerHeight - 16;

    //Creates the player
    tileSize = canvas.height / 16;

    p = new Player(8*tileSize, 8*tileSize, tileSize);
    r = new Rock(8*tileSize, 8*tileSize, tileSize);

    resetBoard();


    p.drawPlayer(ctx);

    /* rocks.push(new Rock(10*tileSize, 15*tileSize));
    rocks.push(new Rock(4 * tileSize, 8 * tileSize));
    rocks.push(new Rock(12 * tileSize, 12 * tileSize)); */
    step();
}

let start = null;

function step() {
    if (!start) start = Date.now();
    var progress = Date.now() - start;
    if (progress > 500) { // Denna körs varje sekund
        p.move();
        start = Date.now();
        resetBoard();
        p.drawPlayer(ctx);
        //r.draw();
        
    }
    window.requestAnimationFrame(step);
}

function resetBoard(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.beginPath();
    ctx.lineWidth = 2;
    for(let i = 0; i < tileSize; i++) {
        ctx.moveTo(0, i * tileSize);
        ctx.lineTo(canvas.width, i * tileSize);
    }

    for (let i = 0; i < tileSize*2; i++) {
        ctx.moveTo(i * tileSize, 0);
        ctx.lineTo(i * tileSize, canvas.height);
    }

    ctx.stroke();
}



    
/*function render(ctx){
    p.drawPlayer(ctx);

} */