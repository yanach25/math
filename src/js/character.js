class Character {
  constructor(name) {
    if (typeof name !== 'string') {
      throw new Error('name should be type of string');
    }

    if (name.length < 2) {
      throw new Error('name should be more or equal 2');
    }

    if (name.length > 10) {
      throw new Error('name should be less or equal 10');
    }

    this.name = name;
    this.stoned = false;
  }

  countAttack() {
    const steps = 10 - this.distance + 1;
    const coeff = steps / 10;
    return this.currentAttack * coeff;
  }

  set attack(value) {
    this.currentAttack = value;
  }

  get attack() {
    if (this.stoned) {
      return this.countAttack() - Math.log2(this.distance) * 5;
    }

    return this.countAttack();
  }

  set stoned(isStoned) {
    this.currentStoned = isStoned;
  }

  get stoned() {
    return this.currentStoned;
  }
}

export default Character;
