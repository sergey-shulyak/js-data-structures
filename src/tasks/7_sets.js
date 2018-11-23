/**
 * Функция принимает массив чисел
 * Функция должна вернуть массив чисел без дубликатов
 */
function uniqueValues(numbers) {
  let resSet = new Set();
  numbers.forEach(element => {
    resSet.add(element);
  });
  return Array.from(resSet);
}

/**
 * Функция принимает 2 множества (Set)
 * Функция должна вернуть множество элементов, которые не находятся в обоих множествах одновременно
 * [1, 2, 3, 4, 5] и [1, 3, 7, 10] => [2, 4, 5, 7, 10]
 */
function getNotIntersectingElements(setA, setB) {
  let setC = new Set();
  setA.forEach(element => {
    setC.add(element);
  });
  set.delete(item);

  return setC;
}

module.exports = {
  uniqueValues,
  getNotIntersectingElements
};
