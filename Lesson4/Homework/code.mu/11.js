// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:

function sqrt(num1, num2, num3) {
    number1 = Math.sqrt(num1);
    number2 = Math.sqrt(num2);
    number3 = Math.sqrt(num3);
	return number1;
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
// С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную res.

let res = sum(sqrt(2), sqrt(3), sqrt(4));
console.log(res);