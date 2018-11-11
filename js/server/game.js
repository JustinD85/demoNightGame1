/*PURPOSE:: Do logic and send info to server for storage, and send info back to controller.js */
import {
  Player
} from '../models/player.js';

export {
  Game,
  Player
}
class Game {
  constructor() {
    this.players = [];
  }
  init(callback) {
    callback(JSON.stringify(this.players));
  }
  createPlayer(inName, inClass, isP1) {
    this.players.push(new Player(inName, inClass, isP1));
  }
  normalAttack(attacker, attackee, callback) {
    //Simulate sending a server info, same rules as local storage

    if (attacker === 'p1') {
      this.players[1].health -= this.players[0].dmg
    } else {
      this.players[0].health -= this.players[1].dmg
    }

    //I will call your function here sending you updated values
    callback(JSON.stringify(this.players));
  }
}