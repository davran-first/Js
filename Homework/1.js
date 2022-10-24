class Car {
    constructor(model, color, price, fuel, engine) {
        this.model = model;
        this.color = color;
        this.price = price;
        this.fuel = fuel;
        this.engine = engine;
    }
    drive(){
        console.log(`Водить машину!`)
    }
    stop(){
        console.log(`Остановить!`)
    }
}

class SportCar extends Car {

    constructor(model, color, price, fuel, engine, type, speed) {
        super(model, color, price, fuel, engine);
        this.type = type;
        this.speed = speed;
    }

    set speed(value){
        if (value < 50) console.log('Медленный скорость');
        else if (value > 50 && value <= 100) console.log('Средний скорость');
        else if (value > 100) console.log('Высокий скорость');
    }
}

let sportCar=new SportCar('Bugatti', 'черный', '1 млн $', 'бензин', 2, 'спортивный')

sportCar.drive()
sportCar.speed=120


class ElectroCar extends Car {
    static type = 'TESLA'
    #gps;
    constructor(model, color, price, fuel, engine, gps) {
        super(model, color, price, fuel, engine);
        this.#gps=gps;
    }
    navigation(){
        if(this.#gps == true) console.log('GPS систем активирован!')
        else console.log('GPS систем не активирован!')
    }

    get priceChange(){
        return this.price * 2 + ` $`
    }
    set priceChange(value){
        return this.price=value
    }
}

let electroCar =new ElectroCar('Tesla', 'белый', 10000, 'электрический', 1.5, false)
electroCar.navigation()
console.log(ElectroCar.type)
electroCar.priceChange=25000
console.log(electroCar.priceChange)


class Van extends Car {
    constructor(model, color, price, fuel, engine, number, ...location){
        super(model, color, price, fuel, engine);
        this.number = number;
        this.location = location;
    }
    locations() {
        for(let key in this.location){
            console.log(`Маршрут ${this.number} локации по ${this.location[key]}`)
        }
    }
}
let arr = ['базар', 'вокзал', 'центральный площадь', 'южный вокзал']
let van =new Van('Damas', 'белый', 7000, 'метан', 1.2, 10, arr)
van.locations()


class Bus extends Car {
    constructor(model, color, price, fuel, engine){
        super(model, color, price, fuel, engine);
        this.date=new Date('2015-02-12');
    }
    start(){
        return `${this.date.toDateString()}`
    }
    static info(){
        console.log(`Модель Isuzu для 30 пассажиров`)
    }
}
let bus =new Bus('Isuzu', 'зеленый', 15000, 'пропан', 1.2)
console.log(bus.start())
Bus.info()
