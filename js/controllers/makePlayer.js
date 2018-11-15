class makePlayer {
	constructor(player) {
		if (player === 'player1') {
			this.player = 'player1';
			this.x = 20;

			this.rest = 'imgs/characterAnimations/character.png';
			this.restFrameCount = 8;
			this.restCurrentFrame = 0;
			this.restSpriteWidth = 864/8;
			this.restSpriteHeight = 280/2;
			this.restSrcX = 0;
			this.restSrcY = 0;

			this.projectile = 'imgs/characterAnimations/coin-sprite-animation.png';
			this.projectileFrameCount = 10;
			this.projectileCurrentFrame = 0;
			this.projectileSpriteWidth = 1000/10;
			this.projectileSpriteHeight = 100;
			this.projectileSrcX = 0;
			this.projectileSrcY = 0;

		} else {
			this.player = 'player2';
			this.x = 230;

			this.rest = 'imgs/characterAnimations/character.png';
			this.restFrameCount = 8;
			this.restCurrentFrame = 0;
			this.restSpriteWidth = 864 / 8;
			this.restSpriteHeight = 280 / 2;
			this.restSrcX = 0;
			this.restSrcY = 140;

			this.projectile = 'imgs/characterAnimations/coin-sprite-animation.png';
			this.projectileFrameCount = 10;
			this.projectileCurrentFrame = 0;
			this.projectileSpriteWidth = 1000/10;
			this.projectileSpriteHeight = 100;
			this.projectileSrcX = 0;
			this.projectileSrcY = 0;

		}
		this.y = 70;
		this.w = 50;
		this.h = 50;
		this.projectileStartX = 0;
		this.projectileStartY = 0;
		this.projectileEndX = 0;
		this.projectileEndY = 0;
		this.direction = [];
		this.speed = 0;
		this.currentProjectile = false;
		
	}
	
	createProjectile(defender) {
		if (this.player === 'player1') {
			this.currentProjectile = true;
			this.projectileStartX = this.x + this.w;
			this.projectileStartY = this.y + (this.h/2);
			this.projectileEndX = defender.x - 15;
			this.projectileEndY = this.projectileStartY;
			this.direction = [1, 0]
			
		} else {
			this.currentProjectile = true;
			this.projectileStartX = this.x - 15;
			this.projectileStartY = this.y + (this.h/2);
			this.projectileEndX = defender.x + defender.w;
			this.projectileEndY = this.projectileStartY;
			this.direction = [-1, 0]
		}
	}
	
	weakMeleeAttack(defender) {
		if (this.player === 'player1') {
			this.projectileStartX = this.x + this.w;
			this.projectileStartY = this.y / 2;
			this.projectileEndX = defender.x - 50;
			this.projectileEndY = this.projectileStartY;
			this.direction = [1, 0]
			
		} else {
			this.projectileStartX = this.x - 50;
			this.projectileStartY = this.y / 2;
			this.projectileEndX = defender.x + defender.w;
			this.projectileEndY = this.projectileStartY;
			this.direction = [-1, 0]
		}
	}
}