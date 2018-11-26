/**
 * @file Does the logic and send info to server for storage, and send info back to controller.js
 * @author Justin Duncan <justin@baal-software.com>
 */
import {
  Player
} from '../models/player.js';


/**
 * Creates a new Game
 * @class Game
 */
export class Game {
  constructor() {
    this.players = [];
    this.isP1Turn = true;
  }

  /**
   * function that can update dom
   * @param {JSON} callback - function whose first argument is a JSON array of updated Objects
   */
  init(callback) {
    callback(JSON.stringify(this.players), 'Game Ready!');
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

  changeTurns() {
    this.isP1Turn = !this.isP1Turn;
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
      if (this.isP1Turn === true) {
        playerOne.normalAttack(playerTwo);
        playerOne.ailments();
        playerOne.message = ``;
        playerTwo.message= `❇️`
        this.changeTurns();
      } else {
        callback(JSON.stringify(this.players),`It's player two's turn!! 😡` );
        return false;
      }
    }
      
    if (attacker === 'p2') {
      if (this.isP1Turn === false) {
        playerTwo.normalAttack(playerOne);
        playerTwo.ailments();
        playerTwo.message = ``;
        playerOne.message = `❇️`;
        this.changeTurns();
      } else {
        callback(JSON.stringify(this.players),`It's player one's turn!! 😡`);
        return false;
      }
    }
    callback(JSON.stringify(this.players), `Success!`);
    return true;
  }
  heavyAttack(attacker, callback) {
    const playerOne = this.players[0]
    const playerTwo = this.players[1]
    if (attacker === 'p1') {
      if (this.isP1Turn === true) {
        playerOne.heavyAttack(playerTwo);
        playerOne.ailments();
        playerOne.message = ``;
        playerTwo.message= `❇️`
        this.changeTurns();
      } else {
        callback(JSON.stringify(this.players), `It's player two's turn!! 😡`);
        return false;
      }
    }
      
    if (attacker === 'p2') {
      if (this.isP1Turn === false) {
        playerTwo.heavyAttack(playerOne);
        playerTwo.ailments();
        playerTwo.message = ``;
        playerOne.message= `❇️`
        this.changeTurns();
      } else {
        callback(JSON.stringify(this.players), `It's player one's turn!! 😡`);
        return false;
      }
    }
    callback(JSON.stringify(this.players), `Success!`);
    return true;
  }
  specialAttack(attacker, callback) {
    const playerOne = this.players[0]
    const playerTwo = this.players[1]
    if (attacker === 'p1' && this.isP1Turn === true) {
      playerOne.specialAttack(playerTwo);
      playerOne.ailments();
    } else if(attacker === 'p2' && this.isP1Turn === false){
      playerTwo.specialAttack(playerOne);
      playerTwo.ailments();
    }
    callback(JSON.stringify(this.players));
  }
}