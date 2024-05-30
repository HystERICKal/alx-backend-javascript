export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(tempp) {
    this._code = tempp;
  }

  get name() {
    return this._name;
  }

  set name(tempp) {
    this._name = tempp;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
