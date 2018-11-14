class makePlayer {
	constructor(player) {
		if (player === 'player1') {
			this.player = 'player1';
			this.x = 20;
			this.fill = 'blue';
		} else {
			this.player = 'player2';
			this.x = 230;
			this.fill = 'green';
		}
		this.y = 70;
		this.w = 50;
		this.h = 50;
		this.startX = 0;
		this.startY = 0;
		this.endX = 0;
		this.endY = 0;
		this.direction = [];
		this.speed = 0;
		
	}
	
	createProjectile(defender) {
		if (this.player === 'player1') {
			this.startX = this.x + this.w;
			this.startY = this.y / 2;
			this.endX = defender.x - 15;
			this.endY = this.startY;
			this.direction = [1, 0]
			
		} else {
			this.startX = this.x - 15;
			this.startY = this.y / 2;
			this.endX = defender.x + defender.w;
			this.endY = this.startY;
			this.direction = [-1, 0]
		}
	}
	
	weakMeleeAttack(defender) {
		if (this.player === 'player1') {
			this.startX = this.x + this.w;
			this.startY = this.y / 2;
			this.endX = defender.x - 50;
			this.endY = this.startY;
			this.direction = [1, 0]
			
		} else {
			this.startX = this.x - 50;
			this.startY = this.y / 2;
			this.endX = defender.x + defender.w;
			this.endY = this.startY;
			this.direction = [-1, 0]
		}
	}
}