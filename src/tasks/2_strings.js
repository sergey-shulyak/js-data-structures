/**
 * Функция принимает id, имя и диаметр планеты
 * Функция должна вернуть строку в формате "<id><tab>|<name>|<tab><diameter>"
 */
function constructPlanetInfoString(id, name, diameter) {
  return id + "\t|" + name + "|\t" + diameter;

  // return `${id}\t|${name}|\t${diameter}`
}

/**
 * Функция принимает какой-то текст и массив спам-слов
 * Функция должна вернуть true, если текст содержит слова из списка spamWords или false если не содержит.
 * Функция не должна быть чувствительна к регистру (если слово в списке спама "новинка", а в тексте "НоВиНкА" - то это спам)
 */
function isSpam(text, spamWords) {
  return text
    .toString()
    .toLowerCase()
    .includes(...spamWords);
}

/**
 * Функция принимает текст, и значение которое нужно подставить между {{ и }}
 * Функция должна вернуть текст с подставленным значением (interpolateString("Hello {{username}}", "Jason") => "Hello Jason")
 */
function interpolateString(text, value) {
  return text.replace(`{{${text.split("{{")[1].split("}}")[0]}}}`, value);

  // return (text.replace(`${text.substring(text.indexOf("{{"), text.indexOf("}}") + 2)}`, value));
}

/**
 * Функция принимает массив чисел, которые представляют собой коды символов
 * Функция должна вернуть текст, составленный из кодов символов. [1076, 1091, 1073] => "дуб"
 */
function fromCharCodes(charCodes) {
  return String.fromCharCode(...charCodes);
}

module.exports = {
  constructPlanetInfoString,
  isSpam,
  interpolateString,
  fromCharCodes
};
