require("../polyfills/intl");

/**
 * Функция принимает дату в виде строки
 * Функция должна вернуть день недели (например "вторник"), который был ровно 10 лет назад
 * Используйте Intl: https://learn.javascript.ru/intl
 */
function timeTravel(dateString) {
  let d = new Date(dateString);
  d.setFullYear( d.getFullYear()-10 );
  let formatter = new Intl.DateTimeFormat("ru", {
    weekday: "long"
  });
  return( formatter.format(d) );
}

/**
 * Функция принимает дату - число миллисекунд, прошедших с 1 января 1970 года
 * Функция должна вернуть строку в формате "ср, 21 нояб. 2018 г., 18:48"
 * Используйте Intl: https://learn.javascript.ru/intl
 */
function formatDate(millis) {
  let d = new Date(millis);
  let formatter = new Intl.DateTimeFormat("ru", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "numeric"
  });
  return( formatter.format(d) );
}

/**
 * Функция принимает функцию для которой нужно провести бенчмарк
 * Функция должна вернуть:
 * "fast" - если функция выполнялась менее 10 мс
 * "normal" - если функция выполнялась менее 10 - 500 мс
 * "slow" - если функция выполнялась более 500 мс
 */
async function benchmark(f) {
  let t0 = new Date();
  await f(); // Не меняйте эту строку. Это вызов переданной функции с ожиданием выполнения.
  let t = new Date() - t0;
  return (t<10)?"fast":(t<=500)?"normal":"slow";
}

module.exports = {
  timeTravel,
  formatDate,
  benchmark
};
