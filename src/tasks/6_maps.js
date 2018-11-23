/**
 * Функция принимает строку
 * Функция должна вернуть Map, содержащую количество каждой буквы: { a => 3, m => 6, ... }
 * Порядок пар не важен. Буквы А и а считать одной буквой.
 */
function countLetters(text) {
  let result = new Map();

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " " && result.get(text[i])) {
      let temp = result.get(text[i]) + 1;
      result.delete(text[i]);
      result.set(text[i].toLowerCase(), temp);
    } else if (text[i] !== " ") {
      result.set(text[i].toLowerCase(), 1);
    }
  }

  return result;
}

/**
 * Функция принимает Map с парами вида { id: 1, name: "Петя" } => [8, 9, 8, ...]
 * Функция должна вернуть массив строк вида "1 Петя: 25 балл(ов)" где 25 - сумма оценок из массива
 */
function prettyPrintEntries(userMarksMap) {
  let result = [];

  for (let elem of userMarksMap.keys()) {
    let sum = userMarksMap.get(elem).reduce((acc, raiting) => {
      return acc + raiting;
    }, 0);

    result.push(`${elem.id} ${elem.name}: ${sum} балл(ов)`);
  }

  return result;
}

module.exports = {
  countLetters,
  prettyPrintEntries
};
