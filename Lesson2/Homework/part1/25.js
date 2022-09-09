// 25) Составьте программу, которая принимает с клавиатуры целое число и, если оно соответствует оценке ученика, выводит
// на экран соответствующую «текстовую форму оценки» 
// (1 или 2 – «неудовлетворительно», 3 – «удовлетворительно», 4 – «хорошо», 5 – «отлично»). В случае, 
// если число не является оценкой, следует вывести на экран соответствующее текстовое сообщение.
// ввод: 5 ⇒ вывод: отлично; ввод: 6 ⇒ вывод: это не оценка)


// let number;
// while (true) {
//     number = +prompt('Enter the number: ');
//     if (number == 1 || number == 2) {
//         console.log('неудовлетворительно')
//         break;

//     } else if (number == 3) {
//         console.log('удовлетворительно')
//         break;

//     } else if (number == 4) {
//         console.log('хорошо')
//         break;

//     } else if (number == 5) {
//         console.log('отлично')
//         break;

//     } else if (number == null || !number) {
//         console.log('оценка не введено')
//     } else {
//         console.log('это не оценка')
//     }

// }

let number = +prompt('Enter the number: ');

switch (number) {
    case 1:
    case 2:
        console.log('неудовлетворительно');
        break;
    case 3:
        console.log('удовлетворительно')
        break;
    case 4:
        console.log('хорошо')
        break;
    case 5:
        console.log('отлично')
        break;
    default:
        console.log('это не оценка')
}