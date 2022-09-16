
// Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:


// С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную res записывалась дробь, округленная до 3-х знаков в дробной части.

function sqrt(num1, num2, num3) {
    number1 = Math.sqrt(num1);
    number2 = Math.sqrt(num2);
    number3 = Math.sqrt(num3);
	return number1;
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}

function round(num) {
	return num.toFixed(3);  // сокращает число
}

let res = round(sum(sqrt(2), sqrt(3), sqrt(4)));
console.log(res);