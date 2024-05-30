export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(tempp) {
    if (typeof tempp !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = tempp;
  }

  get length() {
    return this._length;
  }

  set length(tempp) {
    if (typeof tempp !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = tempp;
  }

  get students() {
    return this._students;
  }

  set students(tempp) {
    if (!(tempp instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!tempp.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = tempp;
  }
}
