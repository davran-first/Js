// 2) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.


let letters = [
    'a',
    'b',
    'c'
]

let numbers = [1, 2, 3]
letters.push.apply(letters, numbers);  // apply для объединение массива
console.log(letters)