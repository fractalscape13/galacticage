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
    this.pastYears = 0;
    this.pastMercury = 0;
    this.pastVenus = 0;
    this.pastMars = 0;
    this.pastJupiter = 0;
  }

  setAge(age, level) {
    this.age = age;
    this.ageMercury = parseInt(this.age / .24);
    this.ageVenus = parseInt(this.age / .62);
    this.ageMars = parseInt(this.age / 1.88);
    this.ageJupiter = parseInt(this.age / 11.86);
    if (level === "above avg") {
      this.lifeX += 5;
    }
    if (level === "below avg") {
      this.lifeX -= 5;
    }
    this.remainingYears = (this.lifeX - this.age);
    this.remainingMercury = (parseInt(this.lifeX / .24) - this.ageMercury);
    this.remainingVenus = (parseInt(this.lifeX / .62)- this.ageVenus);
    this.remainingMars = (parseInt(this.lifeX / 1.88) - this.ageMars);
    this.remainingJupiter = (parseInt(this.lifeX / 11.86) - this.ageJupiter);
    if (this.remainingYears < 0) {
      this.pastYears = (-this.remainingYears);
    } 
    if (this.remainingMercury < 0) {
      this.pastMercury = (-this.remainingMercury);
    }
    if (this.remainingVenus < 0) {
      this.pastVenus = (-this.remainingVenus);
    }
    if (this.remainingMars < 0) {
      this.pastMars = (-this.remainingMars);
    }
    if (this.remainingJupiter < 0) {
      this.pastJupiter = (-this.remainingJupiter);
    }
  }
}