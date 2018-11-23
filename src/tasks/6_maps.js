/**
 * Функция принимает строку
 * Функция должна вернуть Map, содержащую количество каждой буквы: { a => 3, m => 6, ... }
 * Порядок пар не важен. Буквы А и а считать одной буквой.
 */
function countLetters(text) {
  var tex = text.split("");
  var map = new Map();
  let key = 0;
  for ( let i = 0; i < tex.length; i++) {
    if (map.has( i, tex[i])) {
      map.set(i, tex[i++]);
    } else {
      map.set( i, tex[i]);
    };
    
  }
  return map;
}

/**
 * Функция принимает Map с парами вида { id: 1, name: "Петя" } => [8, 9, 8, ...]
 * Функция должна вернуть массив строк вида "1 Петя: 25 балл(ов)" где 25 - сумма оценок из массива
 */
function prettyPrintEntries(userMarksMap) {
  var map = new Map();
}

module.exports = {
  countLetters,
  prettyPrintEntries
};
