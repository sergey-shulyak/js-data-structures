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
  let countOfProps = 0;
  for (let key in obj) {
    countOfProps++;
  }
  return countOfProps;
}

/**
 * Функция принимает объект
 * Функция должна вернуть true если в объекте нет свойств или false в противном случае
 */
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

/**
 * Функция принимает объект
 * Функция должна вернуть сумму значений свойств, где значение - число
 */
function numericPropsSum(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      sum += obj[key];
    }
  }
  return sum;
}

/**
 * Функция принимает объект
 * Функция должна вернуть независимую копию объекта
 */
function clone(obj) {
  let cloneObj = {};
  for (let key in obj) {
    cloneObj[key] = obj[key];
  }
  return cloneObj;
}

module.exports = {
  renameProperty,
  countKeys,
  isEmpty,
  numericPropsSum,
  clone
};
