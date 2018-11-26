/**
 * Функция принимает строку
 * Функция должна вернуть Map, содержащую количество каждой буквы: { a => 3, m => 6, ... }
 * Порядок пар не важен. Буквы А и а считать одной буквой.
 */
function countLetters(text) {
  var letters = new Map();
  var value;
  var dataSet = text.split("");
  dataSet.forEach(element => {
    element = element.toLowerCase();
    !letters.has(element) && element !== " " ? letters.set(element, 0) : false;
    if (letters.has(element) && element !== " ") {
      value = letters.get(element);
      letters.set(element, ++value);
    }
  });
  return letters;
}

/**
 * Функция принимает Map с парами вида { id: 1, name: "Петя" } => [8, 9, 8, ...]
 * Функция должна вернуть массив строк вида "1 Петя: 25 балл(ов)" где 25 - сумма оценок из массива
 */
function prettyPrintEntries(userMarksMap) {
  let array = [];
  let sum;
  for (let [info, marks] of userMarksMap.entries()) {
    sum = 0;
    marks.forEach(mark => {
      sum += mark;
    });
    array.push(`${info.id} ${info.name}: ${sum} балл(ов)`);
  }
  return array;
}

module.exports = {
  countLetters,
  prettyPrintEntries
};
