import { Person } from '../src/person.js';
import { exportAllDeclaration } from '@babel/types';

describe('Person', () => {
  let user;

  beforeEach(() => {
    user = new Person();
  });

  test('user enters age', () => {
    user.setAge(31);
    expect(user.age).toEqual(31);
  });

  test('convert user age into Mercury equivalent', () => {
    user.setAge(31);
    user.setAgeMercury();
    expect(user.ageMercury).toEqual(129);
  });

  test('convert user age into Venus equivalent', () => {
    user.setAge(31);
    user.setAgeVenus();
    expect(user.ageVenus).toEqual(50);
  });
  test('convert user age into Mars equivalent', () => {
    user.setAge(31);
    user.setAgeMars();
    expect(user.ageMars).toEqual(16);
  });
  test('convert user age into Jupiter equivalent', () => {
    user.setAge(31);
    user.setAgeJupiter();
    expect(user.ageJupiter).toEqual(2);
  });
});