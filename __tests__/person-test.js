import { Person } from '../src/person.js';
import { exportAllDeclaration } from '@babel/types';

describe('Person', () => {
  let user;

  beforeEach(() => {
    user = new Person();
  });

  test('user enters age', () => {
    user.setAge(30);
    expect(user.age).toEqual(30);
  });

  test('convert user age into Mercury equivalents', () => {
    user.setAge(30);
    user.setAgeMercury();
    expect(user.ageMercury).toEqual(125);
  });
});