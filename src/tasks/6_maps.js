/**
 * Функция принимает строку
 * Функция должна вернуть Map, содержащую количество каждой буквы: { a => 3, m => 6, ... }
 * Порядок пар не важен. Буквы А и а считать одной буквой.
 */
function countLetters(text) {
  let str = text.toLowerCase();
  let res = new Map();
  for (let letter of str) {
    if (letter !== " ") {
      res.set(letter, res.has(letter) ? res.get(letter) + 1 : 1);
    }
  }
  return res;
}

/**
 * Функция принимает Map с парами вида { id: 1, name: "Петя" } => [8, 9, 8, ...]
 * Функция должна вернуть массив строк вида "1 Петя: 25 балл(ов)" где 25 - сумма оценок из массива
 */
function prettyPrintEntries(userMarksMap) {
  let accumulator = (prevVal, currVal) => prevVal + currVal;
  return Array.from(userMarksMap).map(([user, marks]) => {
    return `${user.id} ${user.name}: ${marks.reduce(accumulator, 0)} балл(ов)`;
  });
}

module.exports = {
  countLetters,
  prettyPrintEntries
};
