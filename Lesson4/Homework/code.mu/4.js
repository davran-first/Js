// Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.

let number = +prompt('Enter the number: ');

function showNumber(num) {
    if ( num >= 0) {
        console.log('+++')
    }else {
        console.log('---')
    }
}

showNumber(number);