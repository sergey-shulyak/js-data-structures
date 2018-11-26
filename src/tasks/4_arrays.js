/**
 * Функция принимает массив
 * Функция должна вернуть "настоящюю длинну массива" [1,2,3,4,5] => 5 | [1,2,3,4, ... пустота... 10] => 5
 */
function trueLength(array) {
  let counter = 0;
  array.filter(a => {
    if (a != null) ++counter;
  });
  return counter;
}

/**
 * Функция принимает строку, содержащую последовательность круглых, квадратных или фигурных скобок - "let obj = { numArray: [ ((1 + 2) * 5) + (42).toString() ] }"
 * Функция должна вернуть true если все скобки закрыты в правильном порядке или false в противном случае
 */
function isExpressionValid(expression) {
  let stack = [];

  for (let i = 0; i < expression.length; i++) {
    let temp = expression[i];
    if (temp === "(" || temp === "{" || temp === "[") {
      stack.push(temp);
    }

    if (temp === ")" && stack[stack.length - 1] === "(") {
      stack.pop(temp);
    }

    if (temp === "}" && stack[stack.length - 1] === "{") {
      stack.pop(temp);
    }

    if (temp === "]" && stack[stack.length - 1] === "[") {
      stack.pop(temp);
    }
  }
  return stack.length === 0;
}

/**
 * Функция принимает массив имен. Имена могут быть в любом виде: пЕтя, Артём, катя, МаШа
 * Функция должна вернуть строку с нормализованными именами, разделёнными запятой и пробелом: "Петя, Артём, Катя, Маша"
 */
function getCapitalizedNamesString(names) {
  var newnames = names.map(el => {
    let n = el.toLowerCase();
    return n[0].toUpperCase() + n.substr(1);
  });
  return newnames.join(", ");
}

/**
 * Функция принимает массив объектов вида { id: 1, name: "Иван", age: 42 }
 * Функция должна вернуть массив таких же объектов, отсортированных по именам (в алфавитном порядке). НЕ ИСПОЛЬЗУЙТЕ ЦИКЛЫ.
 */
function sortByName(users) {
  return users.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Функция принимает массив объектов вида { id: 1, name: "Иван", age: 42 }
 * Функция должна вернуть массив имён пользователей которым исполнилось 18 лет. НЕ ИСПОЛЬЗУЙТЕ ЦИКЛЫ.

 */
function getEligibleUserNames(users) {
  return users
    .filter(a => {
      return a.age >= 18;
    })
    .map(a => a.name);
}

/**
 * Функция принимает массив покупок вида { name: "Морковь", amount: 3, price: 2.50 }
 * Функция должна вернуть сумму всех покупок. НЕ ИСПОЛЬЗУЙТЕ ЦИКЛЫ.
 */
function calculateCart(items) {
  return items.reduce((acc, obj) => {
    return (acc += obj.price * obj.amount);
  }, 0);
}

/**
 * Функция принимает массив пользователей вида { id: 1, name: "Иван", access: 3 }
 * access - битовая маска прав пользователя. В двоичном виде: 3 = 11, где первый бит - доступ на чтение, а второй на запись.
 *
 * Функция должна вернуть true если у всех пользователей есть доступ на запись или false в противном случае
 * 11 10
 */
function isAllPermittedToWrite(users) {
  return users.every(user => {
    return user.access.toString(2) == 11 || user.access.toString(2) == 10;
  });
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
