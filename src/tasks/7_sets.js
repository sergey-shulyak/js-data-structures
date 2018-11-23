/**
 * Функция принимает массив чисел
 * Функция должна вернуть массив чисел без дубликатов
 */
function uniqueValues(numbers) {
  return [...new Set(numbers)];
}

/**
 * Функция принимает 2 множества (Set)
 * Функция должна вернуть множество элементов, которые не находятся в обоих множествах одновременно
 * [1, 2, 3, 4, 5] и [1, 3, 7, 10] => [2, 4, 5, 7, 10]
 */
function getNotIntersectingElements(setA, setB) {
  return new Set([
    ...new Set([...setA].filter(x => !setB.has(x))),
    ...new Set([...setB].filter(x => !setA.has(x)))
  ]);
}

module.exports = {
  uniqueValues,
  getNotIntersectingElements
};
