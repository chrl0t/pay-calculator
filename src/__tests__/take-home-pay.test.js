const takeHomePay = require("../utils/take-home-pay");

describe("takeHomePay()", () => {
  it("should return a warning if an invalid input is passed in", () => {
    const input = "hi";
    const expectedOutput = "Invalid input";
    const acutalOutput = takeHomePay(input);
    expect(acutalOutput).toEqual(expectedOutput);
    const input1 = -1;
    const expectedOutput1 = "Invalid input";
    const acutalOutput1 = takeHomePay(input1);
    expect(acutalOutput1).toEqual(expectedOutput1);
  });
  it("should return an object if a valid input is passed in", () => {
    const output = takeHomePay(1);
    expect(typeof output).toBe("object");
  });
  it("should return an object with the expected keys", () => {
    const input = 1;
    const output = takeHomePay(input);
    expect(output).toHaveProperty("tax");
    expect(output).toHaveProperty("ni");
    expect(output).toHaveProperty("pay");
  });
});
