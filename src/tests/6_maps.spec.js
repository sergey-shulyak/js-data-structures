const tasks = require("../tasks/6_maps");

describe("Tasks for maps", () => {
  describe("countLetters", () => {
    it("returns map with correct count of letters", () => {
      const text = "Мама мыла раму";

      const expectedMap = new Map([
        ["м", 4],
        ["а", 4],
        ["ы", 1],
        ["л", 1],
        ["р", 1],
        ["у", 1]
      ]);

      const actual = tasks.countLetters(text);

      expect(actual).toBeInstanceOf(Map);
      expect(actual).toEqual(expectedMap);
    });

    it("returns another map with correct count of letters", () => {
      const text = "Ship ships sheep";

      const expectedMap = new Map([
        ["s", 4],
        ["h", 3],
        ["i", 2],
        ["p", 3],
        ["e", 2]
      ]);

      const actual = tasks.countLetters(text);

      expect(actual).toBeInstanceOf(Map);
      expect(actual).toEqual(expectedMap);
    });
  });

  describe("prettyPrintEntries", () => {
    it("returns correct array of strings", () => {
      const studentsMap = new Map([
        [{ id: 1, name: "Петя" }, [8, 9, 8]],
        [{ id: 2, name: "Маша" }, [5, 5, 3, 4, 5]],
        [{ id: 3, name: "Соня" }, [10, 10, 12, 9, 8, 11]]
      ]);

      const expectedArray = [
        "1 Петя: 25 балл(ов)",
        "2 Маша: 22 балл(ов)",
        "3 Соня: 60 балл(ов)"
      ];

      expect(tasks.prettyPrintEntries(studentsMap)).toEqual(expectedArray);
    });

    it("returns another correct array of strings", () => {
      const studentsMap = new Map([
        [{ id: 32, name: "Ann" }, [100, 95, 80, 85]],
        [{ id: 64, name: "John" }, [75, 70, 75, 78]],
        [{ id: 68, name: "Joseph" }, [95, 90, 95, 85]]
      ]);

      const expectedArray = [
        "32 Ann: 360 балл(ов)",
        "64 John: 298 балл(ов)",
        "68 Joseph: 365 балл(ов)"
      ];

      expect(tasks.prettyPrintEntries(studentsMap)).toEqual(expectedArray);
    });
  });
});
