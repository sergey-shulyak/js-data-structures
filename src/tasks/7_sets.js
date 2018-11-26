/**
 * Функция принимает массив чисел
 * Функция должна вернуть массив чисел без дубликатов
 */
function uniqueValues(numbers) {
  let mas = [];
  let set = new Set(numbers);
  set.forEach(item => {
    mas.push(item);
  });
  return mas;
}

/**
 * Функция принимает 2 множества (Set)
 * Функция должна вернуть множество элементов, которые не находятся в обоих множествах одновременно
 * [1, 2, 3, 4, 5] и [1, 3, 7, 10] => [2, 4, 5, 7, 10]
 */
function getNotIntersectingElements(setOne, setTwo) {
  let set = setOne;
  for (let key of setTwo) {
    if (set.has(key)) {
      set.delete(key);
    } else {
      set.add(key);
    }
  }
  return set;
}

module.exports = {
  uniqueValues,
  getNotIntersectingElements
};
