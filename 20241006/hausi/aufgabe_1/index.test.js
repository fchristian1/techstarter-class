import { oddOrEven } from "./index";
describe("oddOrEven", () => {
    test("shuld retrun true is odd or false if even", () => {
        expect(oddOrEven(1)).toBe(false);
        expect(oddOrEven(2)).toBe(true);
    });
});
