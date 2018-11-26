/**
 * Функция принимает массив чисел
 * Функция должна вернуть массив чисел без дубликатов
 */
function uniqueValues(numbers) {
  let set = new Set(numbers);
  let temp = [];
  set.forEach(item => {
    temp.push(item);
  });
  return temp;
}

/**
 * Функция принимает 2 множества (Set)
 * Функция должна вернуть множество элементов, которые не находятся в обоих множествах одновременно
 * [1, 2, 3, 4, 5] и [1, 3, 7, 10] => [2, 4, 5, 7, 10]
 */
function getNotIntersectingElements(setA, setB) {
  let set = setA;
  for (let key of setB) {
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
