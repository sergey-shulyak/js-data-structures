require("../polyfills/intl");

/**
 * Функция принимает дату в виде строки
 * Функция должна вернуть день недели (например "вторник"), который был ровно 10 лет назад
 * Используйте Intl: https://learn.javascript.ru/intl
 */
function timeTravel(dateString) {
  let formatter = new Intl.DateTimeFormat("ru", { weekday: "long" });
  let date = new Date(dateString);
  date.setFullYear(date.getFullYear() - 10);
  return formatter.format(date);
}

/**
 * Функция принимает дату - число миллисекунд, прошедших с 1 января 1970 года
 * Функция должна вернуть строку в формате "ср, 21 нояб. 2018 г., 18:48"
 * Используйте Intl: https://learn.javascript.ru/intl
 */
function formatDate(millis) {
  const formatter = new Intl.DateTimeFormat("ru", {
    weekday: "narrow",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  });
  return formatter.format(new Date(millis)).toString();
}

/**
 * Функция принимает функцию для которой нужно провести бенчмарк
 * Функция должна вернуть:
 * "fast" - если функция выполнялась менее 10 мс
 * "normal" - если функция выполнялась менее 10 - 500 мс
 * "slow" - если функция выполнялась более 500 мс
 */
async function benchmark(f) {
  var time = Date.now();

  await f(); // Не меняйте эту строку. Это вызов переданной функции с ожиданием выполнения.
  time = Date.now() - time;
  if (time < 10) {
    return "fast";
  } else if (time < 500) {
    return "normal";
  } else {
    return "slow";
  }
}

module.exports = {
  timeTravel,
  formatDate,
  benchmark
};
