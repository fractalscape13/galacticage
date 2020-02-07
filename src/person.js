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

  setGalacticAge() {
    this.ageMercury = parseInt(this.age / .24)
    this.ageVenus = parseInt(this.age / .62)
    this.ageMars = parseInt(this.age / 1.88)
    this.ageJupiter = parseInt(this.age / 11.86)
  }


}