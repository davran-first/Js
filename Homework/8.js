// Task 8
//  выполняете функцию f8.Функция должна перебрать набор s8 и добавить в массив ar8 только числа больше 5. Выведите массив в консоль.

function f8(...i) {
    let ar8 = []
    let arr = Array.from(i)
    const mySet = new Set(arr)
    mySet.forEach(function (value, set) {
        if(value > 5) ar8.push(value)
        else return value
    })
  
    return ar8;
}

let f = f8(5, 6, 2, 6, 10, 12, 5, 5, 12)
console.log(f)