const tasks = require("../tasks/4_arrays");

describe("Tasks for arrays", () => {
  describe("trueLength", () => {
    it("return correct array length for usual array", () => {
      const array = [1, 2, 3, 4, 5];

      expect(tasks.trueLength(array)).toBe(5);
    });

    it("return correct array length for array with 'holes'", () => {
      const array = [1, 2, 3, 4, 5];

      array[42] = 42;

      expect(tasks.trueLength(array)).toBe(6);
    });
  });

  describe("isExpressionValid", () => {
    it("return false for only closing expression", () => {
      const expression =
        "let obj =) numArray: [ (1 + 2) * 5 + (42.toString() }";

      expect(tasks.isExpressionValid(expression)).toBe(false);
    });

    it("return true for a valid expression", () => {
      const expression =
        "let obj = { numArray: [ ((1 + 2) * 5) + (42).toString() ] }";

      expect(tasks.isExpressionValid(expression)).toBe(true);
    });

    it("return false for invalid expression", () => {
      const expression =
        "let obj = { numArray: [ (1 + 2) * 5 + (42.toString() }";

      expect(tasks.isExpressionValid(expression)).toBe(false);
    });
  });

  describe("getCapitalizedNamesString", () => {
    it("capitalizes incorrect names and returns joined string", () => {
      const names = ["пЕтя", "Артём", "катя", "МаШа"];

      expect(tasks.getCapitalizedNamesString(names)).toBe(
        "Петя, Артём, Катя, Маша"
      );
    });

    it("capitalizes other incorrect names and returns joined string", () => {
      const names = ["John", "kAte", "arthuR", "anjelIca"];

      expect(tasks.getCapitalizedNamesString(names)).toBe(
        "John, Kate, Arthur, Anjelica"
      );
    });
  });

  describe("sortByName", () => {
    it("sorts users by name", () => {
      const users = [
        { id: 1, name: "Катя", age: 24 },
        { id: 2, name: "Петя", age: 26 },
        { id: 3, name: "Маша", age: 21 },
        { id: 4, name: "Ann", age: 19 },
        { id: 5, name: "Jack", age: 32 },
        { id: 6, name: "Вася", age: 18 },
        { id: 7, name: "Kate", age: 27 },
        { id: 8, name: "Артём", age: 23 }
      ];

      const sortedUsers = [
        { id: 4, name: "Ann", age: 19 },
        { id: 5, name: "Jack", age: 32 },
        { id: 7, name: "Kate", age: 27 },
        { id: 8, name: "Артём", age: 23 },
        { id: 6, name: "Вася", age: 18 },
        { id: 1, name: "Катя", age: 24 },
        { id: 3, name: "Маша", age: 21 },
        { id: 2, name: "Петя", age: 26 }
      ];

      expect(tasks.sortByName(users)).toEqual(sortedUsers);
    });

    it("sorts other users by name", () => {
      const users = [
        { id: 2, name: "John", age: 26 },
        { id: 3, name: "Jane", age: 21 },
        { id: 1, name: "Jack", age: 24 }
      ];

      const sortedUsers = [
        { id: 1, name: "Jack", age: 24 },
        { id: 3, name: "Jane", age: 21 },
        { id: 2, name: "John", age: 26 }
      ];

      expect(tasks.sortByName(users)).toEqual(sortedUsers);
    });
  });

  describe("getEligibleUserNames", () => {
    it("sorts users by returns correct array", () => {
      const users = [
        { id: 1, name: "Катя", age: 13 },
        { id: 2, name: "Петя", age: 18 },
        { id: 3, name: "Маша", age: 19 },
        { id: 4, name: "Ann", age: 11 },
        { id: 5, name: "Jack", age: 24 },
        { id: 6, name: "Вася", age: 16 },
        { id: 7, name: "Kate", age: 13 },
        { id: 8, name: "Артём", age: 22 }
      ];

      const expectedNames = ["Петя", "Маша", "Jack", "Артём"];

      expect(tasks.getEligibleUserNames(users)).toEqual(expectedNames);
    });
  });

  describe("calculateCart", () => {
    it("returns correct sum for cart 1", () => {
      const items = [
        { name: "Морковь", amount: 3, price: 3.25 },
        { name: "Яблоко", amount: 5, price: 4.3 },
        { name: "Банан", amount: 2, price: 6.75 }
      ];

      expect(tasks.calculateCart(items)).toBe(44.75);
    });

    it("returns correct sum for cart 2", () => {
      const items = [
        { name: "Молоко", amount: 1, price: 20.0 },
        { name: "Курица", amount: 2, price: 55.0 },
        { name: "Яйца", amount: 10, price: 2.2 }
      ];

      expect(tasks.calculateCart(items)).toBe(152);
    });
  });

  describe("isAllPermittedToWrite", () => {
    it("returns true when everyone is permitted to write", () => {
      const users = [
        { name: "Катя", access: 3 },
        { name: "Петя", access: 2 },
        { name: "Маша", access: 3 },
        { name: "Ann", access: 2 },
        { name: "Jack", access: 2 },
        { name: "Вася", access: 3 },
        { name: "Kate", access: 2 },
        { name: "Артём", access: 3 }
      ];

      expect(tasks.isAllPermittedToWrite(users)).toBe(true);
    });

    it("returns false when not everyone is permitted to write", () => {
      const users = [
        { name: "Катя", access: 3 },
        { name: "Петя", access: 2 },
        { name: "Маша", access: 3 },
        { name: "Ann", access: 1 },
        { name: "Jack", access: 2 },
        { name: "Вася", access: 3 },
        { name: "Kate", access: 2 },
        { name: "Артём", access: 1 }
      ];

      expect(tasks.isAllPermittedToWrite(users)).toBe(false);
    });
  });
});
