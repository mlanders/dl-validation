const DLTestNumbers = require( "../DLTestNumbers");
const DLValidation = require('../../src');

describe("Drivers License Tests", () => {
  const data = DLTestNumbers();
  for (const [key] of Object.entries(data)) {
    const {valid, invalid, criteria} = DLTestNumbers(key);
    describe(`${key} - ${criteria}`, () => {
      describe("Valid", () => {
        if(valid.length === 0) test.todo(`${key}: Write Valid Tests`)
        valid.forEach((item) => {
          it(item, () => {
            const data = DLValidation.validate(key,item)
            expect(item).toBeTruthy()
            expect(data).toBe(true);
          });
        });
      });
      describe("Invalid", () => {
        if(invalid.length === 0) test.todo(`${key}: Write Invalid Tests`)
        invalid.forEach((item) => {
          it(item, () => {
            expect(item).toBeTruthy()
            expect(DLValidation.validate(key,item)).toBe(false);
          });
        });
      });
    })
  }
});
