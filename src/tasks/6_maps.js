/**
 * Функция принимает строку
 * Функция должна вернуть Map, содержащую количество каждой буквы: { a => 3, m => 6, ... }
 * Порядок пар не важен. Буквы А и а считать одной буквой.
 */
function countLetters(text) {
  let result = new Map();

  let lwText = text.toLowerCase().replace(/ /g, '');
  for (let i = 0; i < lwText.length; i++) {
    result.set(lwText[i], result.has(lwText[i]) ? result.get(lwText[i]) + 1 : 1);
  }

  return result;
}

/**
 * Функция принимает Map с парами вида { id: 1, name: "Петя" } => [8, 9, 8, ...]
 * Функция должна вернуть массив строк вида "1 Петя: 25 балл(ов)" где 25 - сумма оценок из массива
 */
function prettyPrintEntries(userMarksMap) {
  const result = [];

  for (let elem of userMarksMap) {
    let sum = elem[1].reduce((acc, raiting) => acc + raiting, 0);
    result.push(`${elem[0].id} ${elem[0].name}: ${sum} балл(ов)`);
  }

  return result;
}

module.exports = {
  countLetters,
  prettyPrintEntries
};
