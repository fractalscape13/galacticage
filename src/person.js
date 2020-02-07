export class Person {
  constructor() {
    this.age = 0;
    this.lifeX = 72;
    this.ageMercury = 0;
    this.ageVenus = 0;
    this.ageMars = 0;
    this.ageJupiter = 0;
    this.remainingYears = 0;
    this.remainingMercury = 0;
    this.remainingVenus = 0;
    this.remainingMars = 0;
    this.remainingJupiter = 0;
  }

  setAge(age) {
    if (age !== NaN) {
    this.age = age;
    }
  }

  setAgeMercury() {
    this.ageMercury = parseInt(this.age / .24)
  }

  setAgeVenus() {
    this.ageVenus = parseInt(this.age / .62)
  }

  setAgeMars() {
    this.ageMars = parseInt(this.age / 1.88)
  }
  
  setAgeJupiter() {
    this.ageJupiter = parseInt(this.age / 11.86)
  }

}