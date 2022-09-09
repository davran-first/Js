
// 8) Требуется заполнить массив числами, которые вводит пользователь, и вычислить их сумму. Если пользователь вводит ноль или превышен размер массива, то запросы на ввод должны прекратиться.

let number;
let a = [];
let summa = 0;
for (i = 0; i <= 2; i++) {
    number = +prompt('Enter the number: ')
    a.push(number);
    
    if (number == 0) {
        console.log('ошибка');
        break;
    }
}
console.log(a);
for (j = 0; j < a.length; j++) {
    summa = summa + a[j];
}
console.log(summa);