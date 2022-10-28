


// Task 12
//  выполняете функцию f12.Функция должна преобразовать строку str12 в массив, так, что каждая буква - отдельный элемент массива.Потом создать набор на основе массива и возвратить его.

function f12(){
    let str12 = 'Coding coding'
    let arr = Array.from(str12)
    let mySet = new Set(arr)
    return mySet;
}
console.log(f12())