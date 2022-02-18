import { States } from './types';

class DLValidation {
  private readonly states: States;

  constructor() {
    this.states = {
      AL: new RegExp(/\b\d{7,8}\b/),
      AK: new RegExp(/\b\d{7}\b/),
      AZ: new RegExp(/(\b[A-Z]{1}\d{8}\b)|(\b\d{9}\b)/),
      AR: new RegExp(/\b\d{9}\b/),
      CA: new RegExp(/\b[A-Z]{1}\d{7}\b/),
      CO: new RegExp(/\b\d{9}\b/),
      CT: new RegExp(/\b\d{9}\b/),
      DE: new RegExp(/\b\d{2,7}\b/),
      DC: new RegExp(/(\b\d{7,9}\b)/),
      FL: new RegExp(/\b[A-Z]{1}\d{12}\b/),
      GA: new RegExp(/\b\d{9}\b/),
      HI: new RegExp(/(\bH\d{8}\b)|(\b\d{9}\b)/),
      ID: new RegExp(/(\b[A-Z]{2}\d{6}[A-Z]{1}\b)|(\b\d{9}\b)/),
      IL: new RegExp(/\b[A-Z]{1}\d{11,12}\b/),
      IN: new RegExp(/(\b\d{10}\b)/),
      IA: new RegExp(/(\b\d{9}\b)|(\b\d{3}[A-Z]{2}\d{4}\b)/),
      KS: new RegExp(/(\b[K]\d{8}\b)/),
      KY: new RegExp(/\b[A-Z]{1}\d{8}\b/),
      LA: new RegExp(/(\b[0]?\d{7,8}\b$)|(\b\d{7,8}\b$)/),
      ME: new RegExp(/\b\d{7}\b/),
      MD: new RegExp(/(\b[A-Z]{1}\d{12}\b)|(\bMD\d{11}\b)/),
      MA: new RegExp(/(\bSA\d{7}\b)|(\bS\d{8}\b)|(\b\d{9}\b)/),
      MI: new RegExp(/(\b[A-Z]{1}\d{12}\b)/),
      MN: new RegExp(/(\b[A-Z]{1}\d{12}\b)/),
      MS: new RegExp(/\b\d{9}\b/),
      MO: new RegExp(
        /(\b\d{9}\b)|(\b[A-Z]{1}\d{5,9}\b)|(\b\d{3}[A-Z]{1}\d{6}\b)/
      ),
      MT: new RegExp(
        /(\b\d{13}\b$)|(\b(\d|[A-Z]){9}\b$)|(\b[A-Z]{3}\d{10}\b$)/
      ),
      NE: new RegExp(/\b[A-Z]{1}\d{3,8}\b/),
      NV: new RegExp(/\b\d{10}\b/),
      NH: new RegExp(/(\b\d{2}[A-Z]{3}\d{5}\b)|(\bNHL\d{8}\b)/),
      NJ: new RegExp(/\b[A-Z]{1}\d{14}\b/),
      NM: new RegExp(/\b\d{9}\b/),
      NY: new RegExp(/(\b\d{9}\b)|(\b[A-Z]{1}\d{18}\b)/),
      NC: new RegExp(/\b\d{1,12}\b/),
      ND: new RegExp(/\b(\d|[A-Z]){9}\b/),
      OH: new RegExp(/(\b[A-Z]{2}\d{6}\b)|(\b\d{8}\b)/),
      OK: new RegExp(/(\b^[A-Z]{1}\d{9}\b)|(\b^\d{9}\b)/),
      OR: new RegExp(/(\b\d{5,7}\b)|(\b[A-Z]{1}\d{6}\b)/),
      PA: new RegExp(/\b\d{8}\b/),
      PR: new RegExp(/(\b\d{5,7}\b$)|(\b\d{9}\b$)/),
      RI: new RegExp(/(\b\d{7,8}\b)|(\bV\d{6}\b)/),
      SC: new RegExp(/\b\d{3,10}\b/),
      SD: new RegExp(/\b\d{6,9}\b/),
      TN: new RegExp(/\b\d{7,9}\b/),
      TX: new RegExp(/\b\d{7,8}\b/),
      UT: new RegExp(/\b\d{4,10}\b/),
      VT: new RegExp(/(\b\d{8}\b)|(\b\d{7}A\b)/),
      VA: new RegExp(/(\b[A-Z]{1}\d{8}\b)|(\b\d{9}\b)/),
      WA: new RegExp(
        /(\b[A-Z*]{4,8}\d{2,3}(\d|[A-Z]){2}\b)|(\bWDL([A-Z]|\d){9}\b)/
      ),
      WV: new RegExp(/\b([A-Z]|\d){7}\b/),
      WI: new RegExp(/\b[A-Z]{1}\d{13}\b/),
      WY: new RegExp(/\b\d{9}\b/),
    };
  }
  validate(state: string, value: string): boolean {
    const regex = this.states[state.toUpperCase()];
    return regex.test(value.toUpperCase());
  }
}

export default new DLValidation();

module.exports = new DLValidation();
