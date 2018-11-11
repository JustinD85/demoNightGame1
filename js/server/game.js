/**
 * @file Does the logic and send info to server for storage, and send info back to controller.js
 * @author Justin Duncan <justin@baal-software.com>
 */
import {
  Player
} from '../models/player.js';


// export {
//   Game
// }

/**
 * Creates a new Game
 * @class Game
 */
export class Game {
  constructor() {
    this.players = [];
  }

  /**
   * function that can update dom
   * @param {JSON} callback - function whose first argument is a JSON array of updated Objects
   */
  init(callback) {
    callback(JSON.stringify(this.players));
  }

  /**
   * Creates a player and puts them in player array
   * @param {string} inName - Players name
   * @param {string} inClass - Players class
   * @param {boolean} isP1 - Indicate whether player 1
   */
  createPlayer(inName, inClass, isP1) {
    this.players.push(new Player(inName, inClass, isP1));
  }

  /**
   * Performs an Attack on the other player
   * @param {string} attacker - Choose 'p1' or 'p2'
   * @param {JSON} callback - function whose first argument is a JSON array of updated Objects
   */
  normalAttack(attacker, callback) {
    const playerOne = this.players[0]
    const playerTwo = this.players[1]
    if (attacker === 'p1') {
      playerOne.normalAttack(playerTwo);
      playerOne.ailments();
    } else {
      playerTwo.normalAttack(playerOne);
      playerTwo.ailments();
    }
    callback(JSON.stringify(this.players));
  }
}