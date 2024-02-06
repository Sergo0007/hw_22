
// Описание: Привет, TypeScript!

// Создайте переменную greeting типа string и присвойте ей значение "Hello, TypeScript!". Выведите значение переменной в консоль.

const greeting:string = "Hello,TypeScript!";
console.log(greeting);

// Описание: Калькулятор суммы

// Напишите функцию mult, которая принимает два параметра типа number и возвращает их произведение.

const a:number = 235;
const b:number = 235;
function mult (a:number, b:number):number{
    return a * b;
    
}
console.log(mult(a,b));

// Напишите функцию isEven, которая принимает число и возвращает true, если оно четное, и false, если нечетное.

const c:number = 25;
function isEven(num: number):boolean{
    return num % 2 === 0;
}
console.log(isEven(c));

// Описание: Приветствие пользователя

// Напишите функцию greetUser, которая принимает имя пользователя и выводит приветствие.
 
 function greetUser(name: string): void {
        // console.log(`Привет, ${name}!`);
        console.log("Привет" + ", " + name + "!");
}

 
const userName: string = "Tom";
greetUser(userName);  
 
// Описание: Фильтрация положительных чисел

// Создайте функцию filterPositiveNumbers, которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа.
const arr =[1,-2,3,-5];
function filterPositiveNumbers(arr: number[]):number[]{
    return arr.filter(num => num > 0);
}
const positiveNumbers = filterPositiveNumbers(arr);
console.log(positiveNumbers);