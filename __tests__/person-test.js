import { Person } from '../src/person.js';
import { exportAllDeclaration } from '@babel/types';

describe('Person', () => {
  let user;

  beforeEach(() => {
    user = new Person();
    user.setAge(31, "avg");
  });

  test('user enters age', () => {
    expect(user.age).toEqual(31);
  });

  test('convert user age into galactic equivalents', () => {
    expect(user.ageMercury).toEqual(129);
    expect(user.ageVenus).toEqual(50);
    expect(user.ageMars).toEqual(16);
    expect(user.ageJupiter).toEqual(2);
  });

  test('check expected remaining years based on user age', () => {
    expect(user.remainingYears).toEqual(41);
    expect(user.remainingMercury).toEqual(171);
    expect(user.remainingVenus).toEqual(66);
    expect(user.remainingMars).toEqual(22);
    expect(user.remainingJupiter).toEqual(4);
  });

  test('update user life expectancy based on inputted health value', () => {
    user.setAge(31, "above avg");
    expect(user.lifeX).toEqual(77);
  });

  test('if user is older than life expectancy, update years lived past life expectancy', () => {
    user.setAge(75, "avg");
    expect(user.pastYears).toEqual(3);
    expect(user.pastMercury).toEqual(12);
    expect(user.pastVenus).toEqual(4);
    expect(user.pastMars).toEqual(1);
    expect(user.pastJupiter).toEqual(0);
  });
});