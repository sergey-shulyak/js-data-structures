/**
 * Функция принимает массив
 * Функция должна вернуть "настоящюю длинну массива" [1,2,3,4,5] => 5 | [1,2,3,4, ... пустота... 10] => 5
 */
function trueLength(array) {
  return Object.values(array).length;
}

/**
 * Функция принимает строку, содержащую последовательность круглых, квадратных или фигурных скобок - "let obj = { numArray: [ ((1 + 2) * 5) + (42).toString() ] }"
 * Функция должна вернуть true если все скобки закрыты в правильном порядке или false в противном случае
 */
function isExpressionValid(expression) {
  let arr = [];
  let match = {
    "{": "}",
    "(": ")",
    "[": "]"
  };
  switch (expression) {
    case "{":
    case "[":
    case "(":
      arr.push(arexpressionr);
      break;

    case "}":
    case "]":
    case ")":
  }
}

/**
 * Функция принимает массив имен. Имена могут быть в любом виде: пЕтя, Артём, катя, МаШа
 * Функция должна вернуть строку с нормализованными именами, разделёнными запятой и пробелом: "Петя, Артём, Катя, Маша"
 */
function getCapitalizedNamesString(names) {
  return names
    .map(name => name[0].toUpperCase() + name.substr(1).toLowerCase())
    .join(", ");
}

/**
 * Функция принимает массив объектов вида { id: 1, name: "Иван", age: 42 }
 * Функция должна вернуть массив таких же объектов, отсортированных по именам (в алфавитном порядке). НЕ ИСПОЛЬЗУЙТЕ ЦИКЛЫ.
 */
function sortByName(users) {
  return users.sort((user1, user2) => (user1.name > user2.name ? 1 : -1));
}

/**
 * Функция принимает массив объектов вида { id: 1, name: "Иван", age: 42 }
 * Функция должна вернуть массив имён пользователей которым исполнилось 18 лет. НЕ ИСПОЛЬЗУЙТЕ ЦИКЛЫ.

 */
function getEligibleUserNames(users) {
  return users.filter(user => user.age >= 18).map(user => user.name);
}

/**
 * Функция принимает массив покупок вида { name: "Морковь", amount: 3, price: 2.50 }
 * Функция должна вернуть сумму всех покупок. НЕ ИСПОЛЬЗУЙТЕ ЦИКЛЫ.
 */
function calculateCart(items) {
  return items.reduce(
    (sum, currentItem) => sum + currentItem.amount * currentItem.price,
    0
  );
}

/**
 * Функция принимает массив пользователей вида { id: 1, name: "Иван", access: 3 }
 * access - битовая маска прав пользователя. В двоичном виде: 3 = 11, где первый бит - доступ на чтение, а второй на запись.
 *
 * Функция должна вернуть true если у всех пользователей есть доступ на запись или false в противном случае
 * 11 10
 */
function isAllPermittedToWrite(users) {
  return users.every(user => user.access >> 1 === 1);
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
