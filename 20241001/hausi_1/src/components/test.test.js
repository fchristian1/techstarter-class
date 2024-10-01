import { expect } from "@jest/globals";
function sum(a, b) {
    return a + b;
}

describe("Addition", () => {
    it("knows that 2 and 2 make 4", () => {
        expect(sum(2, 2)).toBe(4);
        expect(sum(2, 2)).toEqual(4);
    });
});
