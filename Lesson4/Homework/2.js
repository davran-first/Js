// let number;
// let a = [];
// let summa = 0;
// for (i = 0; i <= 2; i++) {
//     number = +prompt('Enter the number: ')
//     a.push(number);

//     if (number == 0) {
//         console.log('ошибка');
//         break;
//     }
// }
// console.log(a);

// for (j = 0; j < a.length; j++) {
//     summa = summa + a[j];
// }
// console.log(summa);

number = +prompt('Enter the number: ')

function funcNumber(num) {
    // let number;
    let a = [];
    let summa = 0;
    for (i = 0; i <= 2; i++) {
        a.push(num);

        if (num == 0) {
            console.log('ошибка');
            break;
        }
    }
    console.log(a);

    for (j = 0; j < a.length; j++) {
        summa = summa + a[j];
    }
    console.log(summa);

}
console.log(funcNumber(number))