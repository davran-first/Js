// let max_num = 0,
//     max_index,


let  numbers = [10, 2, 60, 15, 4];

function showNumbers(numb) {
    let max_num = numb[0];
    let max_index;
    for (let i = 0; i < numb.length; i++) {
        if (numb[i] > max_num) {
            max_num = numb[i];
            max_index = i;
        }
    }
    return 'число: ' + max_num + ' индекс: ' +  max_index;
}
console.log(showNumbers(numbers));
