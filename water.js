class Water {
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
        ctx.fillStyle = '#03f0fc';
        ctx.fillRect(this.x, this.y, this.tileSize, this.tileSize);
    }
}
