/**
 * Функция принимает массив чисел
 * Функция должна вернуть массив чисел без дубликатов
 */
function uniqueValues(numbers) {
  let set = new Set(numbers);
  let resArr = [];

  set.forEach(item => {
    resArr.push(item);
  });

  return resArr;
}

/**
 * Функция принимает 2 множества (Set)
 * Функция должна вернуть множество элементов, которые не находятся в обоих множествах одновременно
 * [1, 2, 3, 4, 5] и [1, 3, 7, 10] => [2, 4, 5, 7, 10]
 */
function getNotIntersectingElements(setA, setB) {
  let temp = setA;

  for (let elem of setB) {
    temp.has(elem) ? temp.delete(elem) : temp.add(elem);
  }

  return temp;
}

module.exports = {
  uniqueValues,
  getNotIntersectingElements
};
