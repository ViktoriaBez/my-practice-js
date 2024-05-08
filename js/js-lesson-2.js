// const num = 10;

// if (num >= 100) {
//     console.log("big chocolate");
// } else {
//     console.log("small chocolate");
// }


// const points = 1510;

// if (points <= 500 ) {
//     console.log("lv1");
// } else if  (points > 500) {
//     console.log("lv2");
// } else if  (points > 1500) {
//     console.log("lv3");
// } else {
//     console.log("lv4");
// }


// const points = 0;

// if (points > 1500 ) {
//     console.log("lv1");
// } else if  (points > 500) {
//     console.log("lv2");
// } else if  (points === 500) {
//     console.log("lv3");
// } else {
//     console.log("lv4");
// }



// const balance = -1000;
// const message = balance >= 0 ? "Positive" : "Negative";
// console.log(message);


// TODO 
//* Напишіть програму, яка приймає вік користувача та виводить повідомлення про те, чи він може отримати право голосу відповідно до законодавства вашої країни, використовуючи тернарний оператор.

// const adultAge = 18;
// const userAge = 19;

// const checkAge = userAge >= adultAge ? "Major" : "Minor";
// console.log(`This person is ${checkAge}`);

// TODO 
//* Напишіть програму, яка приймає число від користувача та виводить "Парне", якщо число парне, і "Непарне", якщо число непарне, використовуючи тернарний оператор.

// const number = 6;
// const check = number % 2 === 0 ? "Парне" : "Непарне";
// console.log(check);

// TODO 
//*Напишіть програму, яка приймає два числа від користувача та виводить найбільше з них, використовуючи тернарний оператор.

// const firstNumber = 11;
// const secondNumber = 6;

// const check = (firstNumber > secondNumber) ? firstNumber : secondNumber;
// console.log(check);

// TODO 
//* Напишіть програму, яка приймає три числа від користувача та виводить найбільше з них, використовуючи тернарний оператор.

// const fNan = parseFloat(prompt(4,2));
// const sNan = parseFloat(prompt(7));
// const tNan = parseFloat(prompt(90,1))

// const maxNan = fNan > sNan ? (fNan > tNan ? fNan : tNan) : (sNan > tNan ? sNan : tNan);
// alert `Найбільше число ${maxNan}`



// TODO 
//*визнач парне, не парне, та мінусове значення числа

// const num = -1; 
// if (num % 2 === 0) {
//     console.log("парне");
// } else if (num < 0) {
//     console.log("мінусове");
// } else {
//     console.log("не парне");
// }

// TODO 
//*Помножити число на 2, якщо воно парне, інакше поділити на 2:

// const num = 4;
// if (num % 2 === 0) {
//     console.log(num * 2);
// } else {
//     console.log(num / 2);
// }


// TODO 
//*Створіть програму, яка приймає число від користувача і перевіряє, чи воно належить діапазону від 1 до 100. Якщо число належить цьому діапазону, виведіть "Число належить діапазону", в іншому випадку виведіть "Число не належить діапазону".

// const num = 101;
// if (num >= 1 && num <= 100) {
//     console.log("Число належить діапазону");
// } else {
//     console.log("Число не належить діапазону");
// }

// TODO 
//* із задачі лекція 2.1 якщо о хв, то просто виводимо години

// const hours = 14;
// const minutes = 0;

// const time = minutes > 0 ? `${hours} год ${minutes} хв` : `${hours} год`;
// console.log(time);


//! switch case
//* Напишіть програму, яка приймає номер дня тижня (від 1 до 7) і виводить назву дня тижня за допомогою конструкції switch case (наприклад, 1 - "Понеділок", 2 - "Вівторок" і т.д.).

// const numberDayOfWeek = "3";

// switch(numberDayOfWeek) {
//     case "1":
//         console.log("Monday");
//         break;
//     case "2":
//         console.log("Tuesday");
//         breack;
//     case "3":
//         console.log("Wednesday");
//         break;
//     case "4":
//         console.log("Thursday");
//         break;
//     case "5":
//         console.log("Friday");
//         break;
//     case "6":
//         console.log("Saturday");
//         break;
//     case "7":
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Day not found");      
// }

//TODO
//* Створіть програму, яка приймає тип товару ("стандартний", "експрес" тощо) і обчислює вартість доставки за допомогою конструкції switch case. Наприклад, доставка стандартного товару може коштувати 5 доларів, а експрес-доставка - 10 доларів.

// let productType = "Standart";
// let deliveryCost = 0;

// switch (productType) {
//   case "Standart":
//     console.log("10");
//     break;
//   case "Express":
//     console.log(20);
//     break;
//   default:
//     console.log("Error");
// }

// const sub = "free";
// let canConnect;

// if (sub === "vip" || sub === "pro") {
//     canConnect = true;
// } else {
//     canConnect = false; 
// }

// console.log("Acess aproval?", canConnect);

//TODO 
//* Напишіть програму, яка перевіряє логін та пароль, введені користувачем. У випадку, якщо обидва значення вірні, виведіть "Логін та пароль вірні", в іншому випадку виведіть "Невірний логін або пароль".


// function check(login, password) {
//     if (login === "password" || password === "login") {
//         console.log("Логін та пароль вірні");
//     } else {
//         console.log("Невірний логін або пароль");
//     }
// }
// check("password", 2);

// function getEaster(year) {
// 	var f = Math.floor,
// 		// Golden Number - 1
// 		G = year % 19,
// 		C = f(year / 100),
// 		// related to Epact
// 		H = (C - f(C / 4) - f((8 * C + 13)/25) + 19 * G + 15) % 30,
// 		// number of days from 21 March to the Paschal full moon
// 		I = H - f(H/28) * (1 - f(29/(H + 1)) * f((21-G)/11)),
// 		// weekday for the Paschal full moon
// 		J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
// 		// number of days from 21 March to the Sunday on or before the Paschal full moon
// 		L = I - J,
// 		month = 3 + f((L + 40)/44),
// 		day = L + 28 - 31 * f(month / 4);

// // 	return [month,day];
// }


// let counter = 4; 
// while( counter <7 ) {
// 	console.log(counter);
// 	counter++;
// }

// for (let i=2; i<5; i++) {
// 	console.log(i);
// }

// let counter = 0;

// do {
// 	console.log(counter);
// 	counter++;
// } while(counter < 5)




	// const str = "Hello worls";

	// for (let i = 0; i < str.length; i++) {
	// 	console.log(i, str[i]);
	// }

//TODO
//* напиши цикл for, який виводить у консоль браузера число за зростанням від а до б, але тільки якщо число кратне 5 

// const a = 20;
// const b = 100;

// for(let i = a; i < b; i++) {
// 	if(i % 5 === 0) {
// 		console.log(i);
// 	}
// }

//* cуму цих чисел

// const a = 20;
// const b = 100;
// const total = 0

// for(let i = a; i < b; i++) {
// 	if(i % 5 === 0) {
// 		console.log(i);
// 		total += i
// 	}
// }
// console.log(total);

// const a = 20;
// const b = 100;

// for(let i = a; i < b; i++) {
// 	if(!(i % 5)){
// 		console.log(i);
// 	}
// }

//TODO
//*Напишіть програму, яка виведе числа від 1 до 10.

// for(let i=0; i <= 10; i++) {
// 	console.log(i);
// }

//*Напишіть програму, яка обчислить суму чисел від 1 до 100.

// let total = 0;

// for(let i = 1; i <= 100; i++ ){
// 	console.log(total);
// 	total += i;
// }
