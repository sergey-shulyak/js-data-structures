const tasks = require("../tasks/3_objects");

describe("Tasks for objects", () => {
  describe("renameProperty", () => {
    it("renames coutn to count", () => {
      const testObj = { coutn: 42 };

      tasks.renameProperty(testObj, "coutn", "count");

      expect(testObj).toHaveProperty("count", 42);
    });

    it("renames smPrprt to someProperty", () => {
      const testObj = { smPrprt: "Some value" };

      tasks.renameProperty(testObj, "smPrprt", "someProperty");

      expect(testObj).toHaveProperty("someProperty", "Some value");
    });
  });

  describe("countKeys", () => {
    it("returns 5 for object with 5 keys", () => {
      const testObj = {
        prop1: 1,
        prop2: 2,
        prop3: 3,
        prop4: 4,
        prop5: 5
      };

      const result = tasks.countKeys(testObj);

      expect(result).toBe(5);
    });

    it("returns 55 for object with 55 keys", () => {
      const testObj = {};

      for (let i = 0; i < 55; i++) {
        testObj[`prop${i}`] = i;
      }

      const result = tasks.countKeys(testObj);

      expect(result).toBe(55);
    });
  });

  describe("isEmpty", () => {
    it("return true for empty object", () => {
      const testObj = {};

      expect(tasks.isEmpty(testObj)).toBe(true);
    });

    it("return false for non-empty object", () => {
      const testObj = {
        testProp: 42
      };

      expect(tasks.isEmpty(testObj)).toBe(false);
    });
  });

  describe("numericPropsSum", () => {
    it("returns 6 for corresponding object", () => {
      const obj = {
        one: "one",
        two: 2,
        three: "three",
        four: 4,
        five: "five"
      };

      expect(tasks.numericPropsSum(obj)).toBe(6);
    });
  });

  describe("clone", () => {
    it("creates independent copy", () => {
      const obj = {
        testProp1: "one",
        testProp2: "two",
        testProp3: "three"
      };

      const objCopy = tasks.clone(obj);
      objCopy.testProp1 = "changed";
      objCopy.newProp = "newProp";

      expect(obj).not.toHaveProperty("newProp");
      expect(obj).toHaveProperty("testProp1", "one");
    });
  });
});
