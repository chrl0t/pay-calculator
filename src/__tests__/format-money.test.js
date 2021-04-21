const formatMoney = require("../utils/format-money");

describe("formatMoney()", () => {
  it("should return a warning if an invalid input is passed in", () => {
    const input = "hi";
    const expectedOuptut = "Invalid input";
    const actualOutput = formatMoney(input);
    expect(expectedOuptut).toEqual(actualOutput);
  });
});
