

// 20)В одномерном массиве найти минимальный и максимальный элементы. Вычислить их разность.
// Например, дан массив [3, 5,20 9, 4, 2, 6]. Максимальным числом является 9, минимальным является 2. Разность составляет 9-2=7.


let numbers = [3, 5, 2, 1, 9, 4, 2, 6];
let max_num = 0;
let min_num = numbers[0];
let s = max_num - min_num;
for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] > max_num) {
        max_num = numbers[i];
    } else if (numbers[i] < min_num) {
        min_num = numbers[i];
    }
}

console.log('Максимальный элемент ' + max_num);
console.log('Минимальный элемент ' + min_num);
console.log(s);