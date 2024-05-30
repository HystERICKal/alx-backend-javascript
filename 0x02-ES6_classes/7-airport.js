export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(tempp) {
    this._name = tempp;
  }

  get code() {
    return this._code;
  }

  set code(tempp) {
    this._code = tempp;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
