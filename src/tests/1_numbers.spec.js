const tasks = require("../tasks/1_numbers");

describe("Tasks for numbers", () => {
  describe("parseCssProp", () => {
    it("parses props and returns correct value", () => {
      expect(tasks.parseCssProp("42px")).toBe(42);
      expect(tasks.parseCssProp("196rem")).toBe(196);
      expect(tasks.parseCssProp("8.5pt")).toBe(8.5);
      expect(tasks.parseCssProp("22.45em")).toBe(22.45);
    });
  });

  describe("binarySum", () => {
    it("converts binary sum to hex", () => {
      expect(tasks.binarySum("101", "110")).toBe("b");
      expect(tasks.binarySum("110110101", "1000100101")).toBe("3da");
    });
  });

  describe("maxRoundedBalance", () => {
    it("returns max rounded balance in proper format", () => {
      expect(tasks.maxRoundedBalance(225.5245, 3223412.465, 52123.2342)).toBe(
        "3223412.46$"
      );
      expect(
        tasks.maxRoundedBalance(55627423.234123, 923992.4231, 2123.12)
      ).toBe("55627423.23$");
    });
  });
});
