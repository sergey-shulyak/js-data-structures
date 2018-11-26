/**
 * Функция принимает массив чисел
 * Функция должна вернуть массив чисел без дубликатов
 */
function uniqueValues(numbers) {
  let set = new Set();
  let tempArr = [];
  numbers.forEach(element => {
    set.add(element);
  });
  set.forEach(element => {
    tempArr.push(element);
  });
  return tempArr;
}

/**
 * Функция принимает 2 множества (Set)
 * Функция должна вернуть множество элементов, которые не находятся в обоих множествах одновременно
 * [1, 2, 3, 4, 5] и [1, 3, 7, 10] => [2, 4, 5, 7, 10]
 */
function getNotIntersectingElements(setA, setB) {
  let set = new Set();
  setA.forEach(element => {
    if (!setB.has(element)) set.add(element);
  });
  setB.forEach(element => {
    if (!setA.has(element)) set.add(element);
  });
  return set;
}

module.exports = {
  uniqueValues,
  getNotIntersectingElements
};
