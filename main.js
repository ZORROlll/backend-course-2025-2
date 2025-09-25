// Оголошення констант 
const currency = 'usd';
const date_from = '20220707';
const date_to = '20220719';

// Створення об'єкта URL - базовий URL сайту НБУ
const urlObject = new URL('https://bank.gov.ua/');

// Додаємо шлях до API 
urlObject.pathname = '/NBU_Exchange/exchange_site';

// Отримуємо параметри пошуку
const searchParams = urlObject.searchParams;

// Додаємо всі параметри з наших констант
searchParams.append('valcode', currency);
searchParams.append('start', date_from);
searchParams.append('end', date_to);
searchParams.append('sort', 'exchangedate');
searchParams.append('order', 'desc');
searchParams.append('json', '');

// Виводимо готовий URL
console.log(urlObject.toString());