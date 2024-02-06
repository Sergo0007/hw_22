"use strict";
// Описание: Привет, TypeScript!
// Создайте переменную greeting типа string и присвойте ей значение "Hello, TypeScript!". Выведите значение переменной в консоль.
const greeting = "Hello,TypeScript!";
console.log(greeting);
// Описание: Калькулятор суммы
// Напишите функцию mult, которая принимает два параметра типа number и возвращает их произведение.
const a = 235;
const b = 235;
function mult(a, b) {
    return a * b;
}
console.log(mult(a, b));
// Напишите функцию isEven, которая принимает число и возвращает true, если оно четное, и false, если нечетное.
const c = 25;
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(c));
// Описание: Приветствие пользователя
// Напишите функцию greetUser, которая принимает имя пользователя и выводит приветствие.
function greetUser(name) {
    // console.log(`Привет, ${name}!`);
    console.log("Привет" + ", " + name + "!");
}
const userName = "Tom";
greetUser(userName);
// Описание: Фильтрация положительных чисел
// Создайте функцию filterPositiveNumbers, которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа.
const arr = [1, -2, 3, -5];
function filterPositiveNumbers(arr) {
    return arr.filter(num => num > 0);
}
const positiveNumbers = filterPositiveNumbers(arr);
console.log(positiveNumbers);
