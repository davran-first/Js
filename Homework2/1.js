

function Iphone(version, type, color, storage, price){
    this.version=version;
    this.type=type;
    this.color=color;
    this.storage=storage;
    this.price=price;

    this.showInfo=function(){
        return `Версия: ${this.version} ${this.type} \nЦвет: ${this.color} \nПамять: ${this.storage} Гб \nЦена: ${this.price} $`
    }
}

let phone=new Iphone('13 Pro', 'max', 'чёрный', 250, 1350);

console.log(phone.showInfo())