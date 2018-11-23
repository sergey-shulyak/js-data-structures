/**
 * Функция принимает строку
 * Функция должна вернуть Map, содержащую количество каждой буквы: { a => 3, m => 6, ... }
 * Порядок пар не важен. Буквы А и а считать одной буквой.
 */
function countLetters(text) {
  let loverStr = text.toLowerCase().split("");

  var map = new Map();
  loverStr.forEach(element => {
    if (element !== " ") {
      map.set(element, map.has(element) ? map.get(element) + 1 : 1);
    }
  });

  return map;
}

/**
 * Функция принимает Map с парами вида { id: 1, name: "Петя" } => [8, 9, 8, ...]
 * Функция должна вернуть массив строк вида "1 Петя: 25 балл(ов)" где 25 - сумма оценок из массива
 */
function prettyPrintEntries(userMarksMap) {
  let result = [];

  //userMarksMap.forEach((key, value) => {
  userMarksMap.forEach((value, { id, name }) => {
    var points = value.reduce((sum, elem) => sum + elem, 0);
    //result.push(`${key.id} ${key.name}: ${points} балл(ов)`);
    result.push(`${id} ${name}: ${points} балл(ов)`);
  });

  return result;
}

module.exports = {
  countLetters,
  prettyPrintEntries
};
