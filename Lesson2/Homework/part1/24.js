
// 24) Составьте программу, которая принимает с клавиатуры количество очков, полученых в соревнованиях 
// по стрельбе каждым из 10 учеников класса, и выводит на экран лучший результат.


let value = [];
let number;
let max_value = 0;
for (let i = 0; i <= 9; i++) {
    number = +prompt('Enter the number: ');
    value.push(number);
}
console.log(value);
for (let j = 0; j <= value.length; j++) {
    if (value[j] > max_value) {
        max_value = value[j];
    }
}
console.log('Лучший результат: ' + max_value + ' очков');