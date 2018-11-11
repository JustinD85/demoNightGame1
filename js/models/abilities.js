 function normalAttack(attackee) {
   if (this.nowRooted()) {
     console.log('I cant move!')
   } else {
     attackee.health -= 10;
     this.energy -= 10;
     this.isBurned(attackee);
   }
 }

 // module.exports = weakAttack;

 export {
   normalAttack
 }