

function func(num) {
	if (num <= 0) {
		return Math.abs(num);  ///из отрицательного числа делает положительное
	} else {
		return num ** 2;
	}
}

console.log( func(10) );
console.log( func(-5) );