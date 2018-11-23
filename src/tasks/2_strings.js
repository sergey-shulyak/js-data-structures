/**
 * Функция принимает id, имя и диаметр планеты
 * Функция должна вернуть строку в формате "<id><tab>|<name>|<tab><diameter>"
 */
function constructPlanetInfoString(id, name, diameter) {
  return id + "\t" + "|" + name + "|" + "\t" + diameter;
}

/**
 * Функция принимает какой-то текст
 * Функция должна вернуть true, если текст содержит слова из списка spamWords или false если не содержит.
 * Функция не должна быть чувствительна к регистру (если слово в списке спама "новинка", а в тексте "НоВиНкА" - то это спам)
 */
function isSpam(text, spamWords) {
  for (let word of spamWords) {
    if (text.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
      return true;
    }
  }

  return false;

  // for (let i = 0; i < spamWords.length - 1; i++) {
  //   let current = spamWords[i].toLowerCase();

  //   console.log

  //   if (text.toLowerCase().indexOf(current) !== -1) {
  //     return true;
  //   }
  // }

  // return false;
  // let spam = text.indexOf(spamWords.toLowerCase());
  // if (spam === -1) {
  //   return false;
  // } else {
  //   return true;
  // }
}

/**
 * Функция принимает текст, и значение которое нужно подставить между {{ и }}
 * Функция должна вернуть текст с подставленным значением (interpolateString("Hello {{username}}", "Jason") => "Hello Jason")
 */
function interpolateString(text, value) {
  let name = value.substr(0, 5);
  console.log(name);
  return text + value;
}

/**
 * Функция принимает массив чисел, которые представляют собой коды символов
 * Функция должна вернуть текст, составленный из кодов символов. [1076, 1091, 1073] => "дуб"
 */
function fromCharCodes(charCodes) {}

module.exports = {
  constructPlanetInfoString,
  isSpam,
  interpolateString,
  fromCharCodes
};
