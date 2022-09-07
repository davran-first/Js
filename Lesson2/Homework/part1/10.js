

// 10) Необходимо суммировать все нечётные целые числа в диапазоне, который введёт пользователь с клавиатуры.

 let number = +prompt('Enter the number: ');
 let s = 0;
 for (let i = 0; i <= number; i++) {
     if (i % 2 == 1) {
         s = s + i;
         console.log(i)
     }
 }
 console.log('Сумма: ' + s);