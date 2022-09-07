

// 30) Составьте программу, которая вводит с клавиатуры целые положительные двузначные числа до тех пор, 
// пока не будет введено число, сумма цифр которого равна 7 (в этом случае выводится сообщение - "завершено").
//  ввод: 32, 54, 26, 83, 52) ⇒ вывод: завершено

let number;

do {
    number = +prompt('Enter the number: ');
    if (number == 34) {
        console.log('завершено')
        break;
    } else if (number == 43) {
        console.log('завершено')
        break;
    } else if (number == 25) {
        console.log('завершено')
        break;
    } else if (number == 52) {
        console.log('завершено')
        break;
    } else if (number == 16) {
        console.log('завершено')
        break;
    } else if (number == 61) {
        console.log('завершено')
        break;
    } else if (number == null || !number) {
        console.log('число не введено')
    } else {
        console.log('введите двузначные числа')
    }
}
while (number != 34 || number != 43 || number != 25 || number != 52 || number != 16 || number != 61)