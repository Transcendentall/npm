const date = require('date-and-time');
console.log("Привет, мир!");

const now = new Date();

const yesterday = date.addDays(now, -1);
const two_months_ago = date.addMonths(now, 2);
const after_3800_years = date.addYears(now, 3800);
const after_1000000_milliseconds = date.addMilliseconds(now, 1000000);
const sixteen_hours_in_the_past = date.addHours(now, -60);

console.log("Сейчас дата и время такие:", date.format(now, 'DD/MM/YYYY HH:mm:ss'));
console.log("Вчера были такие:", date.format(yesterday, 'DD/MM/YYYY HH:mm:ss'));
console.log("Через два месяца от текущего момента будут такие:", date.format(two_months_ago, 'DD/MM/YYYY HH:mm:ss'));
console.log("Спустя 3800 лет будут такие:", date.format(after_3800_years, 'DD/MM/YYYY HH:mm:ss'));
console.log("Когда пройдёт 1000000 миллисекунд будут вот такие:", date.format(after_1000000_milliseconds, 'DD/MM/YYYY HH:mm:ss'));
console.log("А 60 часов назад были такие:", date.format(sixteen_hours_in_the_past, 'DD/MM/YYYY HH:mm:ss'));