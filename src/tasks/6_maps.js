/**
 * Функция принимает строку
 * Функция должна вернуть Map, содержащую количество каждой буквы: { a => 3, m => 6, ... }
 * Порядок пар не важен. Буквы А и а считать одной буквой.
 */
function countLetters(text) {
  let countMap = new Map(),
    textToLower = text
      .toLowerCase()
      .split(" ")
      .join("");

  for (let i = 0; i < textToLower.length; i++) {
    if (!countMap.has(textToLower[i])) countMap.set(textToLower[i], 1);
    else countMap.set(textToLower[i], countMap.get(textToLower[i]) + 1);
  }

  return countMap;
}

/**
 * Функция принимает Map с парами вида { id: 1, name: "Петя" } => [8, 9, 8, ...]
 * Функция должна вернуть массив строк вида "1 Петя: 25 балл(ов)" где 25 - сумма оценок из массива
 */
function prettyPrintEntries(userMarksMap) {
  let marksArray = [];
  for (var [user, marks] of userMarksMap.entries()) {
    marksArray.push(
      `${user.id} ${user.name}: ${marks.reduce(
        (accum, mark) => (accum += mark)
      )} балл(ов)`
    );
  }
  return marksArray;
}

module.exports = {
  countLetters,
  prettyPrintEntries
};
