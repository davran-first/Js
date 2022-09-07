

// 4) Найти сумму и произведение цифр, введенного натурального числа. Например, если введено число 325,
// то сумма его цифр равна 10 (3+2+5), а произведение 30 (3*2*5).



 let number = +prompt('Enter the number: ')
 summa = 0;
 proiz = 1;

 while (number > 0) {
     c = number % 10;
     number = (number - c) / 10;
     summa = summa + c;
     proiz = proiz * c;
     
 }
 console.log(summa)
 console.log(proiz)