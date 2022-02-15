const DLTestNumbers = require( "../DLTestNumbers");
const DriversLicenseValidation = require( "../../index");

describe("Washington", () => {
  const { valid, invalid, criteria } = DLTestNumbers("WA");
  let regex;
  beforeEach(() => {
    regex = DriversLicenseValidation("WA");
  });
  console.log("Washington: " + criteria);
  describe("Valid", () => {
    valid.forEach((item) => {
      it(item, () => {
        const value = regex.test(item);
        expect(value).toBe(true);
      });
    });
  });
  describe("Invalid", () => {
    invalid.forEach((item) => {
      it(item, () => {
        const value = regex.test(item);
        expect(value).toBe(false);
      });
    });
  });
});

describe("Drivers License Tests", () => {
  const data = DLTestNumbers();
  for (const [key] of Object.entries(data)) {
    describe(key, () => {
      const {valid, invalid, criteria} = DLTestNumbers(key);
      let regex;
      beforeEach(() => {
        regex = DriversLicenseValidation(key);
      });
      console.log(`${key}: ${criteria}`);
      describe("Valid", () => {
        if(valid.length === 0) test.todo(`${key}: Write Valid Tests`)
        valid.forEach((item) => {
          it(item, () => {
            expect(item).toBeTruthy()
            const value = regex.test(item);
            expect(value).toBe(true);
          });
        });
      });
      describe("Invalid", () => {
        if(invalid.length === 0) test.todo(`${key}: Write Invalid Tests`)
        invalid.forEach((item) => {
          it(item, () => {
            expect(item).toBeTruthy()
            const value = regex.test(item);
            expect(value).toBe(false);
          });
        });
      });
    })
  }
});
