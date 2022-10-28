

// Task 5
//  выполняете функцию f5.Функция должна вывести в out - 5 количество элементов в наборе s5.

function f5(){
    let arr = [1, 2, 2, 3, 3, 4, 5, 5]
    let s5 = new Set(arr)
    console.log(s5.size)
}

f5()