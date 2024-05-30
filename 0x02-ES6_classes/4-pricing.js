import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(tempp) {
    if (typeof tempp !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = tempp;
  }

  get currency() {
    return this._currency;
  }

  set currency(tempp) {
    if (!(tempp instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = tempp;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
