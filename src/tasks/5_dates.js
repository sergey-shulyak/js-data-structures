require("../polyfills/intl");

/**
 * Функция принимает дату в виде строки
 * Функция должна вернуть день недели (например "вторник"), который был ровно 10 лет назад
 * Используйте Intl: https://learn.javascript.ru/intl
 */
function timeTravel(dateString) {
  let dateArr = dateString.split("/");
  let date = new Date(dateArr[2] - 10, dateArr[1], dateArr[0]);
  let formatter = new Intl.DateTimeFormat("ru", { day: "numeric" });
  let days = new Map([
    ["0", "воскресенье"],
    ["1", "понедельник"],
    ["2", "вторник"],
    ["3", "среда"],
    ["4", "четверг"],
    ["5", "пятница"],
    ["6", "суббота"]
  ]);

  return days.get(formatter.format(date));
}

/**
 * Функция принимает дату - число миллисекунд, прошедших с 1 января 1970 года
 * Функция должна вернуть строку в формате "ср, 21 нояб. 2018 г., 18:48"
 * Используйте Intl: https://learn.javascript.ru/intl
 */
function formatDate(millis) {}

/**
 * Функция принимает функцию для которой нужно провести бенчмарк
 * Функция должна вернуть:
 * "fast" - если функция выполнялась менее 10 мс
 * "normal" - если функция выполнялась менее 10 - 500 мс
 * "slow" - если функция выполнялась более 500 мс
 */
async function benchmark(f) {
  // код

  await f(); // Не меняйте эту строку. Это вызов переданной функции с ожиданием выполнения.

  // код
}

module.exports = {
  timeTravel,
  formatDate,
  benchmark
};
