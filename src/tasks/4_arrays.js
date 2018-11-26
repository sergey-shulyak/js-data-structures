/**
 * Функция принимает массив
 * Функция должна вернуть "настоящюю длинну массива" [1,2,3,4,5] => 5 | [1,2,3,4, ... пустота... 10] => 5
 */
function trueLength(array) {
  var count = 0;
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i]) === false) {
      count++;
    };
  }
  return count;
}

/**
 * Функция принимает строку, содержащую последовательность круглых, квадратных или фигурных скобок - "let obj = { numArray: [ ((1 + 2) * 5) + (42).toString() ] }"
 * Функция должна вернуть true если все скобки закрыты в правильном порядке или false в противном случае
 */
function isExpressionValid(expression) {
  var cer = 0;
  var sqr = 0;
  var fig = 0;
  let arr = expression.split("");
  for (let i = 0; i < arr.length; i++) {
      if ( arr[i] === "(" || arr[i] === ")") {
        cer++;
      }
      else if ( arr[i] === "[" || arr[i] === "]") {
        sqr++;
      }
      else if ( arr[i] === "{" || arr[i] === "}") {
        fig++;
      };
    };
    // return fig;
    if ( cer%2 == 0 && sqr%2 == 0 && fig%2 == 0) {
      return true;
    } else {
      return false;
    };
  }

/**
 * Функция принимает массив имен. Имена могут быть в любом виде: пЕтя, Артём, катя, МаШа
 * Функция должна вернуть строку с нормализованными именами, разделёнными запятой и пробелом: "Петя, Артём, Катя, Маша"
 */
function getCapitalizedNamesString(names) {
  var mas = [];
  var nam;
  for ( let i = 0; i < names.length; i++ ) {
    nam = names[i].toLowerCase().split("");
    naM = nam[0].toUpperCase();
    nam.shift();
    nam2 = nam.join("");
    full = naM + nam2;
    mas.push(full);
  }
  masone = mas.join(", ");
  return masone;
}

/**
 * Функция принимает массив объектов вида { id: 1, name: "Иван", age: 42 }
 * Функция должна вернуть массив таких же объектов, отсортированных по именам (в алфавитном порядке). НЕ ИСПОЛЬЗУЙТЕ ЦИКЛЫ.
 */
function sortByName(users) {
  function compare(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }
  
  users.sort(compare);
  return users;
}

/**
 * Функция принимает массив объектов вида { id: 1, name: "Иван", age: 42 }
 * Функция должна вернуть массив имён пользователей которым исполнилось 18 лет. НЕ ИСПОЛЬЗУЙТЕ ЦИКЛЫ.

 */
function getEligibleUserNames(users) {
  const mass = [];
  for (const key in users) {
    if (users[key].age > 17) {
    mass.push(users[key].name);
    };
  };
  return mass;

}

/**
 * Функция принимает массив покупок вида { name: "Морковь", amount: 3, price: 2.50 }
 * Функция должна вернуть сумму всех покупок. НЕ ИСПОЛЬЗУЙТЕ ЦИКЛЫ.
 */
function calculateCart(items) {
  var sum = 0;
  for (const key in items) {
    let x = items[key].price * items[key].amount;
    sum += x;
  }
  return sum;
}

/**
 * Функция принимает массив пользователей вида { id: 1, name: "Иван", access: 3 }
 * access - битовая маска прав пользователя. В двоичном виде: 3 = 11, где первый бит - доступ на чтение, а второй на запись.
 *
 * Функция должна вернуть true если у всех пользователей есть доступ на запись или false в противном случае
 * 11 10
 */
function isAllPermittedToWrite(users) {
  var mas = [];
  var res;
  for (const key in users) {
      mas.push((users[key].access).toString(2));
    };
    mas.forEach(element => {
      if (element == 11) {
        return res = true;
      } else {
        return res = false;
      };
    });
    return res;
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
