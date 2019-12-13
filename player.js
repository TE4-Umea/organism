class Player {
    constructor(posX, posY, tileSize) {
        this.position = new Cord(posX, posY);
        this.tileSize = tileSize;
        this.food;
        this.water;
    }

    getPosition() {
        return this.position;
    }

    setPosition(newPosX, newPosY) {
        this.position.setCord(newPosX, newPosY);
    }

    drawPlayer(ctx) {
        ctx.fillStyle = "#FF0000";
        var x = this.position.getX();
        var y = this.position.getY();
        console.log("x is: " + x + " y is: " + y);
        ctx.fillRect(x, y, this.tileSize, this.tileSize);
    }

    move() {
        var x = this.position.getX();
        var y = this.position.getY();
        console.log("MOVE: x is: " + x + " y is: " + y + " " +  (Math.floor(Math.random() * 9)));
        
        switch (Math.floor(Math.random() * 9)) {
            case 0: 
                break;
            case 1: 
                if (!this.collide(x - this.tileSize, y))
                    this.setPosition(x - this.tileSize, y);
                break;
            case 2: 
                if (!this.collide(x - this.tileSize, y + this.tileSize)) {
                    this.setPosition(x - this.tileSize, y + this.tileSize);
                }
                break;
            case 3:
                if (!this.collide(x, y + this.tileSize)) {
                    this.setPosition(x, y + this.tileSize);
                }
                break;
            case 4:
                if (!this.collide(x + this.tileSize, y + this.tileSize)) {
                    this.setPosition(x + this.tileSize, y + this.tileSize);
                }
                break;
            case 5:
                if (!this.collide(x + this.tileSize, y)) {
                    this.setPosition(x + this.tileSize, y);
                }
                break;
            case 6:
                if (!this.collide(x + this.tileSize, y - this.tileSize)) {
                    this.setPosition(x + this.tileSize, y - this.tileSize);
                }
                break;
            case 7:
                if (!this.collide(x, y - this.tileSize)) {
                    this.setPosition(x, y - this.tileSize);
                }
                break;
            case 8:
                if (!this.collide(x - this.tileSize, y - this.tileSize)) {
                    this.setPosition(x - this.tileSize, y - this.tileSize);
                }
                break;
            default: 
                break;

        }
    }

    collide(posX, posY){
        if (posX < 0 || posX >= document.getElementById('canvas').width) {
            return true;
        }

        if (posY < 0 || posY >= document.getElementById('canvas').height) {
            return true;
        }

        /* rocks.forEach(element => {
            if (posX == element.x) {
                return true;
            }
            if (posX == element.y) {
                return true;
            }
        }); */

        return false;
    }

    resetStats(){
        this.food = 100;
        this.water = 100;
    }

    stats(){
        if(this.food == 0 || this.water == 0) {
            console.log("Game over");
        }

        this.food = this.food - 1;
        this.water = this.water - 1;
    }

    drawStats() {
        ctx.beginPath();
        ctx.rect(tileSize * 0.5, tileSize * 14.5, tileSize * 10, tileSize * 1);
        ctx.fillStyle = 'rgba(0,0,0,0.8)';
        ctx.fill();

        var foodWidth = this.food;
        console.log(tileSize * 9.6 - foodWidth);

        ctx.beginPath();
        ctx.rect(tileSize * 0.7, tileSize * 14.7, tileSize * 9.6 - foodWidth, tileSize * 0.6);
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        ctx.fill();

        ctx.beginPath();
        ctx.rect(tileSize * 11.5, tileSize * 14.5, tileSize * 10, tileSize * 1);
        ctx.fillStyle = 'rgba(0,0,0,0.8)';
        ctx.fill();

        ctx.beginPath();
        ctx.rect(tileSize * 11.7, tileSize * 14.7, tileSize * 9.6, tileSize * 0.6);
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        ctx.fill();
    }
}