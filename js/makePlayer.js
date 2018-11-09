class makePlayer {
    constructor(player) {
    if(player === 'player1') {
        this.player = 'player1';
        this.x = 20;
        this.fill = 'blue';
    } else {
        this.player = 'player2';
        this.x = 150;
        this.fill = 'green';
    }
    this.y = 70;
    this.w = 50;
    this.h = 50;
    }
}