

// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.


let arr = [2, 4, 6, 8, 10, 9];


function showChet(number) {

    for(let i = 0; i <= number.length; i ++) {
        if (number[i] % 2 == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}

// showChet(arr);
console.log(showChet(arr));