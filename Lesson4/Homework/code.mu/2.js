
// Сделайте функцию, выводящую в консоль сумму чисел от 1 до 100.

function showSum() {
    let sum = 0;
    for( let i = 1; i <= 100; i ++ ) {
        sum = sum + i;
    }
    console.log(sum)
}
showSum();