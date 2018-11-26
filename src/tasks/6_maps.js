/**
 * Функция принимает строку
 * Функция должна вернуть Map, содержащую количество каждой буквы: { a => 3, m => 6, ... }
 * Порядок пар не важен. Буквы А и а считать одной буквой.
 */
function countLetters(text) {
  let map = new Map();
  let tex = text.toLowerCase();
  for (let i = 0; i < tex.length; i++) {
    if (tex[i] == " ") {
      continue;
    }
    if (map.has(tex[i])) {
      map.set(tex[i], map.get(tex[i]) + 1);
    } else {
      map.set(tex[i], 1);
    }
  }
  return map;
}

/**
 * Функция принимает Map с парами вида { id: 1, name: "Петя" } => [8, 9, 8, ...]
 * Функция должна вернуть массив строк вида "1 Петя: 25 балл(ов)" где 25 - сумма оценок из массива
 */
function prettyPrintEntries(userMarksMap) {
  let mas = [];
  for (let item of userMarksMap.entries()) {
    let masStr = "";
    masStr += item[0].id + " " + item[0].name + ": ";
    masStr += item[1].reduce((a, b) => a + b) + " балл(ов)";
    console.log(masStr);
    mas.push(masStr);
  }
  return mas;
}

module.exports = {
  countLetters,
  prettyPrintEntries
};
