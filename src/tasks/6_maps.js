/**
 * Функция принимает строку
 * Функция должна вернуть Map, содержащую количество каждой буквы: { a => 3, m => 6, ... }
 * Порядок пар не важен. Буквы А и а считать одной буквой.
 */
function countLetters(text) {
  const map = new Map();
  text.replace(/\s/g, '').split('').forEach(symbol => {
    const s = symbol.toLowerCase();
    map.set(s, (map.get(s) || 0) + 1);
  });
  return map;
}


/**
 * Функция принимает Map с парами вида { id: 1, name: "Петя" } => [8, 9, 8, ...]
 * Функция должна вернуть массив строк вида "1 Петя: 25 балл(ов)" где 25 - сумма оценок из массива
 */
function prettyPrintEntries(userMarksMap) {
  const res = [];
  userMarksMap.forEach((value, key) => {
      const sum = value.reduce((res, val) => res + val, 0);
      res.push(`${key.id} ${key.name}: ${sum} балл(ов)`);
  });
return res;
}


module.exports = {
  countLetters,
  prettyPrintEntries
};
