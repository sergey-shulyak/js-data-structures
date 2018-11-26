/**
 * Функция принимает строку
 * Функция должна вернуть Map, содержащую количество каждой буквы: { a => 3, m => 6, ... }
 * Порядок пар не важен. Буквы А и а считать одной буквой.
 */
function countLetters(text) {
  let map = new Map();
  Array.from(text.toLowerCase()).forEach(letter => {
    if (letter !== " ") {
      map.set(letter, map.has(letter) ? map.get(letter) + 1 : 1);
    }
  });

  return map;
}

/**
 * Функция принимает Map с парами вида { id: 1, name: "Петя" } => [8, 9, 8, ...]
 * Функция должна вернуть массив строк вида "1 Петя: 25 балл(ов)" где 25 - сумма оценок из массива
 */
function prettyPrintEntries(userMarksMap) {
  let arr = [];
  userMarksMap.forEach((value, key) =>
    arr.push(
      `${key.id} ${key.name}: ${value.reduce((acc, curr) => {
        return (acc += curr);
      }, 0)} балл(ов)`
    )
  );

  return arr;
}

module.exports = {
  countLetters,
  prettyPrintEntries
};
