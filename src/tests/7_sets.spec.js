const tasks = require("../tasks/7_sets");

describe("Tasks for sets", () => {
  describe("uniqueValues", () => {
    it("should return [1, 2, 3] for [1, 1, 2, 3, 3, 2, 3]", () => {
      expect(tasks.uniqueValues([1, 1, 2, 3, 3, 2, 3])).toEqual([1, 2, 3]);
    });

    it("should return [6, 11, 2] for [6, 6, 6, 11, 2, 2, 2, 11, 11, 11]", () => {
      expect(tasks.uniqueValues([6, 6, 6, 11, 2, 2, 2, 11, 11, 11])).toEqual([
        6,
        11,
        2
      ]);
    });
  });

  describe("getNotIntersectingElements", () => {
    it("should return [1, 2, 3] for ([1, 2, 3, 4, 5], [4, 5])", () => {
      expect(
        tasks.getNotIntersectingElements(
          new Set([1, 2, 3, 4, 5]),
          new Set([4, 5])
        )
      ).toEqual(new Set([1, 2, 3]));
    });

    it("should return [2, 4, 5, 7, 10] for ([1, 2, 3, 4, 5], [1, 3, 7, 10])", () => {
      expect(
        tasks.getNotIntersectingElements(
          new Set([1, 2, 3, 4, 5]),
          new Set([1, 3, 7, 10])
        )
      ).toEqual(new Set([2, 4, 5, 7, 10]));
    });
  });
});
