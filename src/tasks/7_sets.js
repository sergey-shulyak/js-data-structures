/**
 * Функция принимает массив чисел
 * Функция должна вернуть массив чисел без дубликатов
 */
function uniqueValues(numbers) {
  let set = new Set(numbers);
  return Array.from(set);
}

/**
 * Функция принимает 2 множества (Set)
 * Функция должна вернуть множество элементов, которые не находятся в обоих множествах одновременно
 * [1, 2, 3, 4, 5] и [1, 3, 7, 10] => [2, 4, 5, 7, 10]
 */
function getNotIntersectingElements(setA, setB) {
  let set = setA;

  for (let el of setB) {
    set.has(el) ? set.delete(el) : set.add(el);
  }
  return set;
}

module.exports = {
  uniqueValues,
  getNotIntersectingElements
};
