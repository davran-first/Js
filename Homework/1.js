
// Task 1
// Создайте set s1.Добавьте в него три элемента 'h', 'b', 'o', 'h'.Добавление делайте через add.Выведите в консоль получившийся набор(set) s1.

const s1 =new Set()
s1.add('h')
s1.add('b')
s1.add('o')
s1.add('h')
console.log(s1)

const s1Arr = Array.from(s1)   // в форме массива
console.log(s1Arr)