/**
 * Функция принимает массив чисел
 * Функция должна вернуть массив чисел без дубликатов
 */
function uniqueValues(numbers) {
  const res = [];
  const set = new Set();
  numbers.forEach(n => set.add(n));
  set.forEach(s => res.push(s));
  return res;

}

/**
 * Функция принимает 2 множества (Set)
 * Функция должна вернуть множество элементов, которые не находятся в обоих множествах одновременно
 * [1, 2, 3, 4, 5] и [1, 3, 7, 10] => [2, 4, 5, 7, 10]
 */
function getNotIntersectingElements(setA, setB) {
  const res = new Set();
  setA.forEach(a => {
    if (!setB.has(a)) res.add(a);
  })
  setB.forEach(b => {
    if (!setA.has(b)) res.add(b);
  })
  return res;
}

module.exports = {
  uniqueValues,
  getNotIntersectingElements
};
