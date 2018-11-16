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

			this.weakAtk = 'imgs/characterAnimations/character.png';
			this.weakAtkFrameCount = 8;
			this.weakAtkCurrentFrame = 0;
			this.weakAtkSpriteWidth = 864 / 8;
			this.weakAtkSpriteHeight = 280 / 2;
			this.weakAtkSrcX = 0;
			this.weakAtkSrcY = 0;

			this.heavyAtk = 'imgs/characterAnimations/character.png';
			this.heavyAtkFrameCount = 8;
			this.heavyAtkCurrentFrame = 0;
			this.heavyAtkSpriteWidth = 864 / 8;
			this.heavyAtkSpriteHeight = 280 / 2;
			this.heavyAtkSrcX = 0;
			this.heavyAtkSrcY = 0;

			this.projectile = 'imgs/characterAnimations/coin-sprite-animation.png';
			this.projectileFrameCount = 10;
			this.projectileCurrentFrame = 0;
			this.projectileSpriteWidth = 1000/10;
			this.projectileSpriteHeight = 100;
			this.projectileSrcX = 0;
			this.projectileSrcY = 0;
			this.projectileWidth = 10;
			this.projectileHeight = 10;
			this.projectileDirection = 1;
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

			this.weakAtk = 'imgs/characterAnimations/character.png';
			this.weakAtkFrameCount = 8;
			this.weakAtkCurrentFrame = 0;
			this.weakAtkSpriteWidth = 864 / 8;
			this.weakAtkSpriteHeight = 280 / 2;
			this.weakAtkSrcX = 0;
			this.weakAtkSrcY = 0;

			this.heavyAtk = 'imgs/characterAnimations/character.png';
			this.heavyAtkFrameCount = 8;
			this.heavyAtkCurrentFrame = 0;
			this.heavyAtkSpriteWidth = 864 / 8;
			this.heavyAtkSpriteHeight = 280 / 2;
			this.heavyAtkSrcX = 0;
			this.heavyAtkSrcY = 0;

			this.projectile = 'imgs/characterAnimations/coin-sprite-animation.png';
			this.projectileFrameCount = 10;
			this.projectileCurrentFrame = 0;
			this.projectileSpriteWidth = 1000/10;
			this.projectileSpriteHeight = 100;
			this.projectileSrcX = 0;
			this.projectileSrcY = 0;
			this.projectileWidth = 10;
			this.projectileHeight = 10;
			this.projectileDirection = -1;
		}
		this.y = 70;
		this.w = 50;
		this.h = 50;
		this.projectileStartX = 0;
		this.projectileStartY = 0;
		this.projectileEndX = 0;
		this.projectileEndY = 0;
		this.currentProjectile = false;
		this.currentWeakAtk = false;
		this.currentHeavyAtk = false;
		this.underAttack = false;
	}
	
	updatePlayerRestFrame() {
		this.restCurrentFrame = ++this.restCurrentFrame % this.restFrameCount;
		this.restSrcX = this.restCurrentFrame * (this.restSpriteWidth);
	}

	updatePlayerWeakAtkPosition() {
		this.weakAtkCurrentFrame = ++this.weakAtkCurrentFrame % this.weakAtkFrameCount;
		this.weakAtkSrcX = this.weakAtkCurrentFrame * (this.weakAtkSpriteWidth);
		this.weakAtkSrcY = 0;
		this.weakAtkStartX = this.weakAtkStartX + (10 * this.weakAtkDirection);
		if ((this.weakAtkDirection === 1 && (this.weakAtkStartX > this.weakAtkEndX)) || (this.weakAtkDirection === -1 && (this.weakAtkStartX < this.weakAtkEndX))) {
			this.currentweakAtk = false;
		}
	}

	createProjectile(defender) {
		if (this.player === 'player1') {
			this.currentProjectile = true;
			this.projectileStartX = this.x + this.w;
			this.projectileStartY = this.y + (this.h/2);
			this.projectileEndX = defender.x - 10;
			this.projectileEndY = this.projectileStartY;
			
		} else {
			this.currentProjectile = true;
			this.projectileStartX = this.x - 10;
			this.projectileStartY = this.y + (this.h/2);
			this.projectileEndX = defender.x + defender.w;
			this.projectileEndY = this.projectileStartY;
		}
	}

	updateProjectilePosition() {
		this.projectileCurrentFrame = ++this.projectileCurrentFrame % this.projectileFrameCount;
		this.projectileSrcX = this.projectileCurrentFrame * (this.projectileSpriteWidth);
		this.projectileSrcY = 0;
		this.projectileStartX = this.projectileStartX + (10 * this.projectileDirection);
		if ((this.projectileDirection === 1 && (this.projectileStartX > this.projectileEndX)) || (this.projectileDirection === -1 && (this.projectileStartX < this.projectileEndX))) {
			this.currentProjectile = false;
		}
	}
	
	weakAttack(defender) {
		if (this.player === 'player1') {
			this.currentWeakAttack = true;
			this.projectileStartX = this.x + this.w;
			this.projectileStartY = this.y / 2;
			this.projectileEndX = defender.x - 50;
			this.projectileEndY = this.projectileStartY;
			this.direction = [1, 0]
			
		} else {
			this.currentWeakAttack = true;
			this.projectileStartX = this.x - 50;
			this.projectileStartY = this.y / 2;
			this.projectileEndX = defender.x + defender.w;
			this.projectileEndY = this.projectileStartY;
			this.direction = [-1, 0]
		}
	}
}