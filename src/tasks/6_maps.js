/**
 * Функция принимает строку
 * Функция должна вернуть Map, содержащую количество каждой буквы: { a => 3, m => 6, ... }
 * Порядок пар не важен. Буквы А и а считать одной буквой.
 */
function countLetters(text) {
  let loverText = text.toLowerCase().split("");
  let map = new Map();

  loverText.forEach(el => {
    if (el !== " ") {
      map.set(el, map.has(el) ? map.get(el) + 1 : 1);
    }
  });

  return map;
}

/**
 * Функция принимает Map с парами вида { id: 1, name: "Петя" } => [8, 9, 8, ...]
 * Функция должна вернуть массив строк вида "1 Петя: 25 балл(ов)" где 25 - сумма оценок из массива
 */
function prettyPrintEntries(userMarksMap) {
  let resArr = [];

  userMarksMap.forEach((value, { id, name }) => {
    var points = value.reduce((sum, el) => sum + el, 0);
    resArr.push(`${id} ${name}: ${points} ball(s)`);
  });
  return resArr;
}

module.exports = {
  countLetters,
  prettyPrintEntries
};
