import Character from './character';
import types from './app';

class Magician extends Character {
  constructor(...args) {
    super(...args);
    this.type = types.Magician;
    this.distance = 2;
  }
}

export default Magician;
