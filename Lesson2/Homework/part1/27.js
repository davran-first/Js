

// 27)  ввод: 10 ⇒ вывод: это осень; ввод: 15 ⇒ вывод: ошибка)


let number;

do {
    number = +prompt('Enter the number: ');
    if (number == 10) {
        console.log('осень')
        break;
    } else if (number == 15) {
        console.log('ошибка')
        break;
    }
    else if (number == null || !number) {
        console.log('число не введено')
    }
    else {
        console.log('введите 10')
    }
}
while (number != 10 || number != 15)