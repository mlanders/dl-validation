"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DLTestNumbers_1 = require("../DLTestNumbers");
const DLValidation = require('../../src');
describe("Drivers License Tests", () => {
    const data = (0, DLTestNumbers_1.DLStateList)();
    data.forEach((key) => {
        const { valid, invalid, criteria } = (0, DLTestNumbers_1.DLTestNumbers)(key);
        describe(`${key} - ${criteria}`, () => {
            describe("Valid", () => {
                if (valid.length === 0)
                    test.todo(`${key}: Write Valid Tests`);
                valid.forEach((item) => {
                    it(item, () => {
                        const data = DLValidation.validate(key, item);
                        expect(item).toBeTruthy();
                        expect(data).toBe(true);
                    });
                });
            });
            describe("Invalid", () => {
                if (invalid.length === 0)
                    test.todo(`${key}: Write Invalid Tests`);
                invalid.forEach((item) => {
                    it(item, () => {
                        const data = DLValidation.validate(key, item);
                        expect(item).toBeTruthy();
                        expect(data).toBe(false);
                    });
                });
            });
        });
    });
});
