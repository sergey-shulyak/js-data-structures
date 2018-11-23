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
function binarySum(binarA, binarB) {
  return (Number.parseInt(binarA, 2) + Number.parseInt(binarB, 2)).toString(16);
}

/**
 * Функция принимает несколько чисел с балансом банковского счёта в формате "n" - где n - дробное число
 * Функция должна вернуть больший из балансов в виде строки формата "n$", где n - дробное число округленное до 2 знаками после запятой
 */
function maxRoundedBalance(...balances) {
  let maxBalance = Math.max(...balances);
  return maxBalance.toFixed(2) + "$";
}

module.exports = {
  parseCssProp,
  binarySum,
  maxRoundedBalance
};
