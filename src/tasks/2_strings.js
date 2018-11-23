/**
 * Функция принимает id, имя и диаметр планеты
 * Функция должна вернуть строку в формате "<id><tab>|<name>|<tab><diameter>"
 */
function constructPlanetInfoString(id, name, diameter) {
  return (
    id.toString() +
    "\t" +
    "|" +
    name.toString() +
    "|" +
    "\t" +
    diameter.toString()
  );
}

/**
 * Функция принимает какой-то текст
 * Функция должна вернуть true, если текст содержит слова из списка spamWords или false если не содержит.
 * Функция не должна быть чувствительна к регистру (если слово в списке спама "новинка", а в тексте "НоВиНкА" - то это спам)
 */
function isSpam(text, spamWords) {
  for (var i = 0; i < spamWords.length; i++) {
    if (text.toLowerCase().indexOf(spamWords[i].toLowerCase()) > 0) {
      return true;
    } else {
      return false;
    }
  }
}

/**
 * Функция принимает текст, и значение которое нужно подставить между {{ и }}
 * Функция должна вернуть текст с подставленным значением (interpolateString("Hello {{username}}, how are you?", "Jason") => "Hello Jason")
 */
function interpolateString(text, value) {
  var a = text.split("{")[0];
  var b = text.split("}")[1];
  return a + value + b;
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
