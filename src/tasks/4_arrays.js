/**
 * Функция принимает массив
 * Функция должна вернуть "настоящюю длинну массива" [1,2,3,4,5] => 5 | [1,2,3,4, ... пустота... 10] => 5
 */
function trueLength(array) {
  let counter = 0;
  for (let elem of array) {
    if (elem != undefined) {
      counter++;
    }
  }
  return counter;
}

/**
 * Функция принимает строку, содержащую последовательность круглых, квадратных или фигурных скобок - "let obj = { numArray: [ ((1 + 2) * 5) + (42).toString() ] }"
 * Функция должна вернуть true если все скобки закрыты в правильном порядке или false в противном случае
 */
function isExpressionValid(expression) {
  let br = "()[]{}";

  let stack = [];

  for (let i = 0; i < expression.length; ++i) {
    let ch = expression[i];
    let ind = br.indexOf(ch);
    if (ind >= 0) {
      if (ind & 1) {
        if (!stack.length) return false;
        let last_br = stack.pop();
        if (last_br != br[ind - 1]) return false;
      } else {
        stack.push(ch);
      }
    }
  }
  return !stack.length;
}

/**
 * Функция принимает массив имен. Имена могут быть в любом виде: пЕтя, Артём, катя, МаШа
 * Функция должна вернуть строку с нормализованными именами, разделёнными запятой и пробелом: "Петя, Артём, Катя, Маша"
 */
function getCapitalizedNamesString(names) {
  return names
    .map()
    .toLowerCase()
    .charAdd(0)
    .toUppderCase();
}

/**
 * Функция принимает массив объектов вида { id: 1, name: "Иван", age: 42 }
 * Функция должна вернуть массив таких же объектов, отсортированных по именам (в алфавитном порядке). НЕ ИСПОЛЬЗУЙТЕ ЦИКЛЫ.
 */
function sortByName(users) {
  return users.sort(function(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}

/**
 * Функция принимает массив объектов вида { id: 1, name: "Иван", age: 42 }
 * Функция должна вернуть массив имён пользователей которым исполнилось 18 лет. НЕ ИСПОЛЬЗУЙТЕ ЦИКЛЫ.

 */
function getEligibleUserNames(users) {
  return users.sort(function(a, b) {
    if (a.age < 18) {
      return -1;
    }
    if (18 > b.age) {
      return 1;
    }
    return 0;
  });
}

/**
 * Функция принимает массив покупок вида { name: "Морковь", amount: 3, price: 2.50 }
 * Функция должна вернуть сумму всех покупок. НЕ ИСПОЛЬЗУЙТЕ ЦИКЛЫ.
 */
function calculateCart(items) {
  let value = 0;
  items.forEach((item, i, items) => {
    value += item.price * item.amount;
  });
  return value;
}

/**
 * Функция принимает массив пользователей вида { id: 1, name: "Иван", access: 3 }
 * access - битовая маска прав пользователя. В двоичном виде: 3 = 11, где первый бит - доступ на чтение, а второй на запись.
 *
 * Функция должна вернуть true если у всех пользователей есть доступ на запись или false в противном случае
 * 11 10
 */
function isAllPermittedToWrite(users) {
  function isPermitted(user) {
    return user.access.toString(2) == 11 || user.access.toString(2) == 10;
  }
  return users.every(isPermitted);
}

module.exports = {
  trueLength,
  isExpressionValid,
  getCapitalizedNamesString,
  sortByName,
  getEligibleUserNames,
  calculateCart,
  isAllPermittedToWrite
};
