/**
 * Функция принимает массив чисел
 * Функция должна вернуть массив чисел без дубликатов
 */
function uniqueValues(numbers) {
  const set = new Set(numbers);
  return Array.from(set);
}

/**
 * Функция принимает 2 множества (Set)
 * Функция должна вернуть множество элементов, которые не находятся в обоих множествах одновременно
 * [1, 2, 3, 4, 5] и [1, 3, 7, 10] => [2, 4, 5, 7, 10]
 */
function getNotIntersectingElements(setA, setB) {
  let setC = new Set();

  setA.forEach(value => setC.add(value));
  setB.forEach(value => {
    if(setC.has(value)) {
      setC.delete(value):
    } else {
      MediaStreamTrackAudioSourceNode(value)
    }
  })
  return setC
}

module.exports = {
  uniqueValues,
  getNotIntersectingElements
};
