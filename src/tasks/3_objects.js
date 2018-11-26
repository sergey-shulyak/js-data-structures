/**
 * Функция принимает объект, имя свойства которое нужно изменить и новое имя свойства
 * Функция должна "переименовать" свойство в полученном объекте
 */
function renameProperty(obj, propName, newName) {
  obj[newName] = obj[propName];
  delete obj[propName];
}

/**
 * Функция принимает объект
 * Функция должна вернуть количество свойств объекта (числом)
 */
function countKeys(obj) {
  return Object.keys(obj).length;
}

/**
 * Функция принимает объект
 * Функция должна вернуть true если в объекте нет свойств или false в противном случае
 */
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

/**
 * Функция принимает объект
 * Функция должна вернуть сумму значений свойств, где значение - число
 */
function numericPropsSum(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === "number") sum += obj[key];
  }
  return sum;
}

/**
 * Функция принимает объект
 * Функция должна вернуть независимую копию объекта
 */
function clone(obj) {
  return { ...obj };
}

module.exports = {
  renameProperty,
  countKeys,
  isEmpty,
  numericPropsSum,
  clone
};
