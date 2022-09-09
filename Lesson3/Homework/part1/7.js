// 7) Найти максимальный элемент массива и его индекс (max_num   и   max_index).





let max_num = 0,
    max_index,
    numbers = [10, 2, 60, 15, 4];

for (let i = 0; i < numbers.length; i ++) {
    if (numbers[i] > max_num) {
        max_num = numbers[i];
        max_index = i;
    }
}    
console.log('Максимальный элемент ' + max_num);
console.log('Максимальный индекс ' + max_index);
