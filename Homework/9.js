// Task 9
//  выполняете функцию f9.Функция должна принимать набор set в качестве параметра, преобразовывать его в массив и возвращать в виде строки.При преобразовании массива в строку между элементами должен быть пробел.


let arr = [1 , 2, 2, 3, 4, 5, 5, 7, 10, 10]
let mySet = new Set(arr)

function f9(set){
    let arrSet = Array.from(set)
    let str = arrSet.join(' ')
    console.log(str)
}
f9(mySet)