const tasks = require("../tasks/2_strings");

describe("Tasks for strings", () => {
  describe("constructPlanetInfoString", () => {
    it("returns properly formatted string", () => {
      expect(tasks.constructPlanetInfoString(1, "Test 1", 325.53)).toBe(
        "1\t|Test 1|\t325.53"
      );

      expect(tasks.constructPlanetInfoString(2, "Test 2", 44232.4223)).toBe(
        "2\t|Test 2|\t44232.4223"
      );
    });
  });

  describe("isSpam", () => {
    it("properly distinguishes spam text", () => {
      expect(tasks.isSpam("Almost not a spam, really", ["spam"])).toBe(true);

      expect(
        tasks.isSpam(
          "Скидки в Цитрусе! Только на Чёрную Пятницу спеши купить новый iPhone XS всего за 34 999!",
          ["цитрус", "iphone", "только"]
        )
      ).toBe(true);

      expect(
        tasks.isSpam("Оплатите интернет-доступ. Ваш провайдер.", [
          "купить",
          "безлимит"
        ])
      ).toBe(false);

      expect(
        tasks.isSpam("Your meeting with John Doe was canceled", [
          "proposition",
          "free",
          "new"
        ])
      ).toBe(false);
    });
  });

  describe("interpolateString", () => {
    it("interpolates string with provided value", () => {
      expect(tasks.interpolateString("Hello {{username}}", "Kate")).toBe(
        "Hello Kate"
      );
      expect(tasks.interpolateString("Вы купили {{amount}} персиков", 5)).toBe(
        "Вы купили 5 персиков"
      );
    });
  });

  describe("fromCharCodes", () => {
    it("turns array of char codes to string", () => {
      expect(tasks.fromCharCodes([72, 101, 108, 108, 111])).toBe("Hello");
      expect(
        tasks.fromCharCodes([
          1041,
          1072,
          1088,
          1089,
          1080,
          1082,
          32,
          45,
          32,
          1083,
          1091,
          1095,
          1096,
          1080,
          1081,
          32,
          1082,
          1086,
          1090
        ])
      ).toBe("Барсик - лучший кот");
    });
  });
});
