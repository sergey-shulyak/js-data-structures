/**
 * Функция принимает строку со значением css ("#px/rem/pt...")
 * Функция должна вернуть величину значения в виде числа
 */
function parseCssProp(cssValue) {
  return parseFloat(cssValue);
}

/**
 * Функция принимает две строки с двоичными числами ("101", "110")
 * Функция должна вернуть сумму этих чисел в виде строки с шестнадцатеричным числом ("b")
 */
function binarySum(binaryA, binaryB) {
  let a = Number.parseInt(binaryA, 2) + Number.parseInt(binaryB, 2);
  return a.toString(16);
}

/**
 * Функция принимает несколько чисел с балансом банковского счёта в формате "n" - где n - дробное число
 * Функция должна вернуть больший из балансов в виде строки формата "n$", где n - дробное число округленное до 2 знаками после запятой
 */
function maxRoundedBalance(...balances) {
  let b = Math.max(...balances);

  return b.toFixed(2) + "$";
}

module.exports = {
  parseCssProp,
  binarySum,
  maxRoundedBalance
};
