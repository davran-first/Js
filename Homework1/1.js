

let person = {
    height : 166,
    'number 1': 100,
    'number 2': 150,
    showWeight: function(){
        let count = person.height - person['number 1'] - (person.height - person['number 2']) / 2;
        console.log('Нормальный вес равен ' + count + ' кг')
    }
}
person.showWeight()