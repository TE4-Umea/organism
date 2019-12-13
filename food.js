class Food {
    constructor(posX, posY, tileSize) {
        this.tileSize = tileSize;
        this.x = posX * this.tileSize;
        this.y = posY * this.tileSize;
    }

    getPosition() {
        return this.position;
        console.log('XXXXXXXXXX' + this.x);
    }

    setPosition(newPosX, newPosY) {
        this.position.setCord(newPosX, newPosY);
    }

    draw(ctx) {
        ctx.fillStyle = '#2cfc03';
        ctx.fillRect(this.x, this.y, this.tileSize, this.tileSize);
    }
}
