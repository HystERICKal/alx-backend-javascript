export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(tempp) {
    this._brand = tempp;
  }

  get motor() {
    return this._motor;
  }

  set motor(tempp) {
    this._motor = tempp;
  }

  get color() {
    return this._color;
  }

  set color(tempp) {
    this._color = tempp;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
