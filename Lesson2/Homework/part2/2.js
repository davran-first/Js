
// 2. Имеется фрагмент программы в виде оператора цикла с параметром, обеспечивающий вывод на экран «столбиком» всех целых чисел от 100 до 80. Оформить этот фрагмент в виде:
// а) оператора цикла с предусловием;
// б) оператора цикла с постусловием.


i = 100;

while (i >= 80) {
    console.log(i)
    i --;
}

console.log('///////////////////////')

i = 100;

do {
    console.log(i)
    i --;
}
while (i >= 80);