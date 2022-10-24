
class Building {
    constructor(name, area, made, heihgt, floor){
        this.name = name;
        this.area = area;
        this.made = made;
        this.heihgt = heihgt;
        this.floor = floor;
        this.elevator = true;
        this.elevatorCapacity = 15;
        
    }

    elevatorInfo(){
        if(this.elevator == true ) console.log(`${this.name} has the one of the fastest elevator in the world!`);
        return false;
    }
    get elevatorCapacity(){
        return this.elevatorCapacity;
    }

    set elevatorCapacity(value){
        if ( value < 14) console.log('Its a normal capacity')
        else console.log(`Dangerous situation`) 
    }
}

let building =new Building('Burj Khalifa', '309,473m', 'steel', '828', '163')
building.elevatorInfo()

class Office extends Building {
    #keyDoor;
    constructor(name, area, made, heihgt, floor, keyDoor){
        super(name, area, made, heihgt, floor);
        this.#keyDoor = keyDoor;
    }
    get keyDoor(){
        return this.#keyDoor;
    }
    set keyDoor(value){
        if(value == 2565656) console.log('Accepnted');
        else return this.#keyDoor=value;
    }
}

let office =new Office('IT office', '15000', 'steal', '2', '1', null)

office.keyDoor = 2565656;

class House extends Building {
    constructor(name, area, made, heihgt, floor, price, airСonditioner, ...rooms){
        super(name, area, made, heihgt, floor);
        this.price = price;
        this.airСonditioner = airСonditioner;
        this.rooms = rooms;
        
    }
    get calcArea(){
        return this.calcArea();
    }

    calcArea() {
        return this.area * this.heihgt;
    }

    priceInfo() {
        if(this.price <= 20000) console.log('Standart');
        else if(this.price > 20000 && this.price <= 50000) console.log('Econom')
        else console.log('Lux')
    }

    roomsInfo() {
        for(let key in this.rooms){
            console.log(...this.rooms[key])
        }
    }
    get airСonditionerChange(){
        return this.airСonditioner;
    }

    set airСonditionerChange(value){
        if(value == false) console.log('The temperature is lower');
        else return this.airСonditioner=value;
    }
}
let arr = ['kitchen', 'hall', 'bedroom', 'bathroom', 'living room']
let house =new House('Housing', 700, 'break', 3, 1, 52000, true, arr)

house.calcArea()
house.priceInfo()
house.roomsInfo()

console.log(house.airСonditionerChange) 

class Bank extends Building {
    #login;
    #password;
    constructor(name, area, made, heihgt, floor, login, password){
        super(name, area, made, heihgt, floor);
        this.#login = login;
        this.#password = password;
    }

   
    get loginPass(){
        return `Login: ${this.#login} Password: ${this.#password}`;
    }

    set loginPass(value){
        if(value < 1000) throw new Error('You should create more difficult pass')
        else console.log(`Setted this pass ${this.#password = value}`);
    }
    checkingLogPass(){
        if(this.#login != 'Admin' && this.#password != '8795') console.log('Error')
        else console.log('Correct')
    }

}

let bank =new Bank('Mini bank', 500, 'steel', 5, 1, 'Admin', 8795)
console.log(bank.loginPass)
console.log(bank instanceof Building)
bank.loginPass = 10022;
bank.checkingLogPass()