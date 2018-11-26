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
  let intbin1 = parseInt(binaryA, 2);
  let intbin2 = parseInt(binaryB, 2);
  return (intbin1 + intbin2).toString(16);
};

/**
 * Функция принимает несколько чисел с балансом банковского счёта в формате "n" - где n - дробное число
 * Функция должна вернуть больший из балансов в виде строки формата "n$", где n - дробное число округленное до 2 знаками после запятой
 */
function maxRoundedBalance(...balances) {
  return Math.max(...balances).toFixed(2)+"$";
}

module.exports = {
  parseCssProp,
  binarySum,
  maxRoundedBalance
};