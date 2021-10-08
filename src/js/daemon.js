import Character from './character';
import types from './app';

class Daemon extends Character {
  constructor(...args) {
    super(...args);
    this.distance = 2;
    this.type = types.Daemon;
  }
}

export default Daemon;
