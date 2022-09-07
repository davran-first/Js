// 3) Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].



// let numbers = [1, 2, 3]

// for (let i = numbers.length - 1; i >= 0; i -- ){
//     console.log(numbers[i])
// }

let numbers =  [1, 2, 3];
numbers.reduceRight((_, item) => console.log(item), null);