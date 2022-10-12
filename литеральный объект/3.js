


let person = {
    name: 'John',
    surname: 'Michel',
    family: {
        married: true,
        haveChildren: 5
    },
    'dialing code': {
        '+998': 'Узбекистан',
        '+7': 'Россия',
        '+1': 'США'
    },

    showFullName: function(){
        return `${person.name} ${person.surname}`
    },

    showFamily: function(){
        if(person.family.married == true){
            return `${person.showFullName()}! You will receive cash`
        }else{
            return `${person.showFullName()}!You should not receive anything`
        }
    },
    countCash: function(){
        if(person.family.haveChildren <= 5){
            return 'You may get discount from 25% to 50%'
        }else if(person.family.haveChildren > 5){
            return 'You may get discount above 50%'
        }
    },

    showCode: function(){
        for(let key in person['dialing code']){
           console.log(key)
        }
    }

}

let info = person.showFamily()
console.log(info)

let childer = person.countCash()
console.log(childer)

person.showCode()

