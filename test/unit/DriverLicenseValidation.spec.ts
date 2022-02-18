import { DLStateList, DLTestNumbers } from "../DLTestNumbers";

const DLValidation = require('../../src');

describe("Drivers License Tests", () => {
  const data = DLStateList();
  data.forEach((key:string)=> {
    const {valid, invalid, criteria} = DLTestNumbers(key);
    describe(`${key} - ${criteria}`, () => {
      describe("Valid", () => {
        if(valid.length === 0) test.todo(`${key}: Write Valid Tests`)
        valid.forEach((item:string) => {
          it(item, () => {
            const data = DLValidation.validate(key,item)
            expect(item).toBeTruthy()
            expect(data).toBe(true);
          });
        });
      });
      describe("Invalid", () => {
        if(invalid.length === 0) test.todo(`${key}: Write Invalid Tests`)
        invalid.forEach((item:string) => {
          it(item, () => {
            const data = DLValidation.validate(key,item)

            expect(item).toBeTruthy()
            expect(data).toBe(false);
          });
        });
      });
    })
  })
});
