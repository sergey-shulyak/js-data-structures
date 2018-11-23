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
  let temp = [];
  for (let item of userMarksMap.entries()) {
    let tempStr = "";
    tempStr += item[0].id + " " + item[0].name + ": ";
    tempStr += item[1].reduce((a, b) => a + b) + " балл(ов)";
    console.log(tempStr);
    temp.push(tempStr);
  }
  return temp;
}

module.exports = {
  countLetters,
  prettyPrintEntries
};
