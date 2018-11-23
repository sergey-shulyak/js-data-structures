const tasks = require("../tasks/5_dates");

describe("Tasks for dates", () => {
  describe("timeTravel", () => {
    it("should return 'понедельник' for 4/21/2018", () => {
      const dateString = "4/21/2018";

      expect(tasks.timeTravel(dateString)).toBe("понедельник");
    });

    it("should return 'суббота' for 02/15/2007", () => {
      const dateString = "02/15/2007";

      expect(tasks.timeTravel(dateString)).toBe("суббота");
    });

    it("should return 'пятница' for 03/10/2033", () => {
      const dateString = "03/10/2033";

      expect(tasks.timeTravel(dateString)).toBe("пятница");
    });
  });

  describe("formatDate", () => {
    it("should format date correctly", () => {
      const millis = 1542818901189;

      const expectedFormattedDate = "ср, 21 нояб. 2018 г., 18:48";

      expect(tasks.formatDate(millis)).toBe(expectedFormattedDate);
    });

    it("should format another date correctly", () => {
      const millis = 1399909832916;

      const expectedFormattedDate = "пн, 12 мая 2014 г., 18:50";

      expect(tasks.formatDate(millis)).toBe(expectedFormattedDate);
    });
  });

  describe("benchmark", async () => {
    const delayedFunc = delay => async () =>
      await new Promise(resolve => setTimeout(resolve, delay));

    it("returns 'fast' for fast function", async () => {
      const fastFunc = () => 2 + 2;

      expect(await tasks.benchmark(fastFunc)).toBe("fast");
    });

    it("returns 'normal' for normal function", async () => {
      const normalFunc = delayedFunc(200);

      expect(await tasks.benchmark(normalFunc)).toBe("normal");
    });

    it("returns 'slow' for slow function", async () => {
      const slowFunc = delayedFunc(750);

      expect(await tasks.benchmark(slowFunc)).toBe("slow");
    });
  });
});
