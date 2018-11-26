/**
 * Функция принимает массив чисел
 * Функция должна вернуть массив чисел без дубликатов
 */
function uniqueValues(numbers) {
  var set = new Set();
  numbers.forEach(element => {
    if (!set.has(element)) {
      set.add(element);
    }
  });
  return [...set];
}

/**
 * Функция принимает 2 множества (Set)
 * Функция должна вернуть множество элементов, которые не находятся в обоих множествах одновременно
 * [1, 2, 3, 4, 5] и [1, 3, 7, 10] => [2, 4, 5, 7, 10]
 */
function getNotIntersectingElements(setA, setB) {
  var defaultSet = setA;
  for (let item of setB) {
    defaultSet.has(item) ? defaultSet.delete(item) : defaultSet.add(item);
  }
  return defaultSet;
}

module.exports = {
  uniqueValues,
  getNotIntersectingElements
};
