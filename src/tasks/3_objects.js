/**
 * Функция принимает объект, имя свойства которое нужно изменить и новое имя свойства
 * Функция должна "переименовать" свойство в полученном объекте
 */
function renameProperty(obj, propName, newName) {
  // if (propName !== newName) {
  //   Object.defineProperty(obj, newName,
  //       Object.getOwnPropertyDescriptor(obj, propName));
  //   delete obj[propName];
  // }

  obj[newName] = obj[propName];
  delete obj[propName]
}

/**
 * Функция принимает объект
 * Функция должна вернуть количество свойств объекта (числом)
 */
function countKeys(obj) {
  var count = 0;
  for (let key in obj) {
    count++;
  };
  return count;
}


/**
 * Функция принимает объект
 * Функция должна вернуть true если в объекте нет свойств или false в противном случае
 */
function isEmpty(obj) {
  var count = 0;
  for (let keys in obj) {
    count++;
  }
  // if (count > 0) {
  //   return false;
  // } else {
  //   return true;
  // }
  return count !== 0;
}

/**
 * Функция принимает объект
 * Функция должна вернуть сумму значений свойств, где значение - число
 */
function numericPropsSum(obj) {
  var sum = 0;
  for (let keys in obj) {
    if (typeof obj[keys] === "number") {
      sum += obj[keys];
    }; 
  };
  return sum;
}

/**
 * Функция принимает объект
 * Функция должна вернуть независимую копию объекта
 */
function clone(obj) {
  obj1 = {};
  for (let key in obj) {
    obj1[key] = obj[key];
  };
  return obj1;
}

module.exports = {
  renameProperty,
  countKeys,
  isEmpty,
  numericPropsSum,
  clone
};
