

// 5) Вычислить факториал введенного числа

let number = +prompt('Enter the number: ');

let f = 1;

for(let i = 1; i <= number; i++) {
    f = f * i;
}
console.log(f);