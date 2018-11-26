/**
 * Функция принимает строку
 * Функция должна вернуть Map, содержащую количество каждой буквы: { a => 3, m => 6, ... }
 * Порядок пар не важен. Буквы А и а считать одной буквой.
 */
function countLetters(text) {
  let map = new Map();
  for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase();
    if (char == " ") continue;
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  return map;
}

/**
 * Функция принимает Map с парами вида { id: 1, name: "Петя" } => [8, 9, 8, ...]
 * Функция должна вернуть массив строк вида "1 Петя: 25 балл(ов)" где 25 - сумма оценок из массива
 */
function prettyPrintEntries(userMarksMap) {
  let res = [];
  userMarksMap.forEach((arr, keyObj) => {
    res.push(makeString(arr, keyObj));
  });
  return res;
}
function makeString(arr, { id, name }) {
  let sum = arr.reduce((sum, current) => sum + current);
  return `${id} ${name}: ${sum} балл(ов)`;
}

module.exports = {
  countLetters,
  prettyPrintEntries
};
