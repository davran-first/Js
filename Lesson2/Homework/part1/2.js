


// Вывести на экран ряд натуральных чисел от минимума до максимума с шагом. Например, если минимум 10,
// максимум 35, шаг 5, то вывод должен быть таким: 10 15 20 25 30 35. Минимум, максимум и шаг указываются пользователем 
// (считываются с клавиатуры).


 let minNumber = +prompt('Enter the min number: ');
 let maxNumber = +prompt('Enter the max number: ');

 while (minNumber <= maxNumber) {
     console.log(minNumber);
     minNumber = minNumber + 5;
 }


//  for ( i = minNumber; minNumber <= maxNumber; minNumber = minNumber + 5) {
//     console.log(minNumber)
// }