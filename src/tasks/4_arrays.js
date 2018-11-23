/**
 * Функция принимает массив
 * Функция должна вернуть "настоящюю длинну массива" [1,2,3,4,5] => 5 | [1,2,3,4, ... пустота... 10] => 5
 */
function trueLength(array) {
  return Object.keys(array).length;
}

/**
 * Функция принимает строку, содержащую последовательность круглых, квадратных или фигурных скобок - "let obj = { numArray: [ ((1 + 2) * 5) + (42).toString() ] }"
 * Функция должна вернуть true если все скобки закрыты в правильном порядке или false в противном случае
 */
function isExpressionValid(expression) {
  let brackets = "()[]{}";
  let stack = [];
  for (var i = 0; i < expression.length; ++i) {
    var char = expression[i];
    var index = brackets.indexOf(char);
    if (index >= 0) {
      if (index & 1) {
        if (!stack.length) return false;
        var last_brackets = stack.pop();
        if (last_brackets != brackets[index - 1]) return false;
      } else {
        stack.push(char);
      }
    }
  }
  return !stack.length;
}

//   var flag = true;
//   let stack = {};
//   let symbols = ["{", "}", "(", ")", "[", "]"];
//   symbols.forEach(element => {
//     stack[element.charCodeAt(0)] = 0;
//   });
//   for (let index = 0; index < expression.length; index++) {
//     let char = expression[index];
//     Object.keys(stack).forEach(data => {
//       parseFloat(data) === char.charCodeAt(0) ? stack[data]++ : false;
//     });
//   }
//   var keys = Object.values(stack);
//   for (let index = 0; index < keys.length - 1; index++) {
//     console.log([keys[index + 1], keys[index]]);
//     if (keys[index + 1] !== keys[index]) {
//       return false;
//     }
//   }
//   return flag;
// }

/**
 * Функция принимает массив имен. Имена могут быть в любом виде: пЕтя, Артём, катя, МаШа
 * Функция должна вернуть строку с нормализованными именами, разделёнными запятой и пробелом: "Петя, Артём, Катя, Маша"
 */
function getCapitalizedNamesString(names) {
  let temp = [];
  names.map(element => {
    element = element.toLowerCase();
    element = element.charAt(0).toUpperCase() + element.slice(1);
    temp.push(element);
  });
  return temp.join(", ");
}

/**
 * Функция принимает массив объектов вида { id: 1, name: "Иван", age: 42 }
 * Функция должна вернуть массив таких же объектов, отсортированных по именам (в алфавитном порядке). НЕ ИСПОЛЬЗУЙТЕ ЦИКЛЫ.
 */
function sortByName(users) {
  return users.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
}

/**
 * Функция принимает массив объектов вида { id: 1, name: "Иван", age: 42 }
 * Функция должна вернуть массив имён пользователей которым исполнилось 18 лет. НЕ ИСПОЛЬЗУЙТЕ ЦИКЛЫ.
 
 */
function getEligibleUserNames(users) {
  let names = [];
  users
    .filter(element => {
      return element.age >= 18;
    })
    .forEach(element => {
      names.push(element.name);
    });
  return names;
}

/**
 * Функция принимает массив покупок вида { name: "Морковь", amount: 3, price: 2.50 }
 * Функция должна вернуть сумму всех покупок. НЕ ИСПОЛЬЗУЙТЕ ЦИКЛЫ.
 */
function calculateCart(items) {
  return items.reduce((sum, item) => {
    return sum + item.price * item.amount;
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
    return user.access.toString(2) == 10 || user.access.toString(2) == 11;
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
