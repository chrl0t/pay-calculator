const formatMoney = require("../utils/format-money");

describe("formatMoney()", () => {
  it("should return a warning if an invalid input is passed in", () => {
    const input = "hi";
    const expectedOuptut = "Invalid input";
    const actualOutput = formatMoney(input);
    expect(expectedOuptut).toEqual(actualOutput);
  });
  it("should return the number passed in formatted as British currency", () => {
    const input = 12000;
    const expectedOutput = "£12,000.00";
    const actualOutput = formatMoney(input);
    expect(expectedOutput).toEqual(actualOutput);
  });
});
