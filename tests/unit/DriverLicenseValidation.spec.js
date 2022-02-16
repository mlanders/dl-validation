const DLTestNumbers = require( "../DLTestNumbers");
const DLValidation = require('../../index');

describe("Drivers License Tests", () => {
  const data = DLTestNumbers();
  for (const [key] of Object.entries(data)) {
    describe(key, () => {
      const {valid, invalid, criteria} = DLTestNumbers(key);
      console.log(`${key}: ${criteria}`);
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
