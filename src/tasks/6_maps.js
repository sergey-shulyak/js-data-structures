/**
 * Функция принимает строку
 * Функция должна вернуть Map, содержащую количество каждой буквы: { a => 3, m => 6, ... }
 * Порядок пар не важен. Буквы А и а считать одной буквой.
 */
function countLetters(text) {
  var te = [];
  var texone = text.split(" ").join("");
  var tex = texone.split("");
  tex.forEach((element, index) => {
      te.push(tex[index].toLowerCase())
  });
  var map = new Map();
  te.forEach((element, index) => {
    map.set(te[index]);
  });
  for (const key in te) {
    if (key == map.keys()) {
      map.set(key, 1);
    };
  };
  
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
