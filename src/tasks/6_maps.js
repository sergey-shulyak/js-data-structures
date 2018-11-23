/**
 * Функция принимает строку
 * Функция должна вернуть Map, содержащую количество каждой буквы: { a => 3, m => 6, ... }
 * Порядок пар не важен. Буквы А и а считать одной буквой.
 */
function countLetters(text) {
  text.toLowerCase();
  let map = new Map();

  // return text.forEach((value, key) => `${key} => ${value}`);

  // return map.get(text);
  // for (let amound of map.keys()) {
  //   return amound;
  // }
}

/**
 * Функция принимает Map с парами вида { id: 1, name: "Петя" } => [8, 9, 8, ...]
 * Функция должна вернуть массив строк вида "1 Петя: 25 балл(ов)" где 25 - сумма оценок из массива
 */
function prettyPrintEntries(userMarksMap) {}

module.exports = {
  countLetters,
  prettyPrintEntries
};
