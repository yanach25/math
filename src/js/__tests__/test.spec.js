import types from '../app';
import Character from '../character';
import Magician from '../magican';
import Daemon from '../daemon';

describe('test app.js', () => {
  it('Magician should be created', () => {
    const pers = new Magician('Tom');

    const mockedTom = {
      name: 'Tom',
      type: types.Magician,
      currentStoned: false,
      distance: 2,
    };

    expect(pers).toEqual(mockedTom);
  });

  it('Daemon should be created', () => {
    const pers = new Daemon('Tom');

    const mockedTom = {
      name: 'Tom',
      type: types.Daemon,
      currentStoned: false,
      distance: 2,
    };

    expect(pers).toEqual(mockedTom);
  });

  it('throw error name is not type of string', () => {
    expect(() => new Character(20)).toThrow('name should be type of string');
  });

  it('throw error name length is less than 2', () => {
    expect(() => new Character('O')).toThrow('name should be more or equal 2');
  });

  it('throw error name length is more than 10', () => {
    expect(() => new Character('Osdlfjlsdfjdslfjdsljfdslfjs')).toThrow('name should be less or equal 10');
  });

  it('should show real attack', () => {
    const tom = new Magician('tom');
    tom.attack = 200;

    expect(tom.attack).toBe(180);
    tom.attack = 100;
    tom.stoned = true;
    expect(tom.attack).toBe(85);
  });
});
