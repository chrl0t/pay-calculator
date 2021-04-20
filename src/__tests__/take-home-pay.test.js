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
  it("should return the correct value if the input is less than 15,001", () => {
    const input = 12000;
    const expectedOutput = { tax: 0, ni: 0, pay: 12000 };
    const actualOutput = takeHomePay(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
  it("should return the correct value if the input is between 15,001 and 50,000", () => {
    const input = 20000;
    const expectedOutput = { tax: 1000, ni: 600, pay: 18400 };
    const actualOutput = takeHomePay(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
  it("should return the correct value if the input is above 50,000", () => {
    const input = 55000;
    const expectedOutput = { tax: 9000, ni: 4300, pay: 41700 };
    const actualOutput = takeHomePay(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
});
