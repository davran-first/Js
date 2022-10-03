
let countries = [
    {
        name: 'Каракалпакстан',
        languages: 'каракалпакский',
        capital : {
            name: 'Нукус',
            population: 2000000,
        },
        currency: 'сум',
        domen: 'uz',
        'dialing code': '+998',
        showPopulation: function() {
            return this.capital.population
        }
    },
    {
        name: 'Россия',
        languages: ['русский', 'татарский'],
        capital : {
            name: 'Россия',
            population: 150000000,
        },
        currency: 'рубль',
        domen: 'ru',
        'dialing code': '+7'
    },
    {
        name: 'США',
        languages: ['английский', 'испанский'],
        capital : {
            name: 'Вашингтон',
            population: 330000000,
        },
        currency: 'доллар',
        domen: 'com',
        'dialing code': '+1'
    }
    
]

console.log(countries[0].showPopulation());

for(let keys in countries){
    console.log(countries[keys])
}