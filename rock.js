class Rock {
    constructor(posX, posY) {
        this.x = posX;
        this.y = posY;
    }

    getPosition() {
        return this.position;
        console.log("XXXXXXXXXX" + this.x)
    }

    setPosition(newPosX, newPosY) {
        this.position.setCord(newPosX, newPosY);
    }

    draw(){
        ctx.fillStyle = "#0000FF";
        ctx.fillRect(x, y, this.tileSize, this.tileSize);
    }
}