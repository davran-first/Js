


class Figure{
    constructor(width, heihgt){
        this.width = width.toString(16);
        this.heihgt = heihgt.toString(2);
    }
    static staticShow(){
        return `${this.width} ${this.heihgt}`
    }
    showHexadecimal() {
        return `Шестнадцатеричная система счисления: ${this.width}`
    }
    showBinary() {
        return `Двоичная система счисления: ${this.heihgt}`
    }
}
let figure = new Figure(2552, 135)

console.log(Figure.staticShow())
console.log(figure.showHexadecimal())
console.log(figure.showBinary())



class Rectangle extends Figure {
    constructor(width, heihgt){
        super(width, heihgt);
        this.width = parseFloat(width);
        this.heihgt = parseFloat(heihgt);
    }

    getSquare() {
        let countSquare = this.width * this.heihgt;
        return `Площадь прямоугольника равен ${countSquare}`
    }

    getPerimeter() {
        let countPer = 2 * (this.width + this.heihgt);
        return `Периметр прямоугольника равен ${countPer}`
    }

    getDiagonal() {
        let countDiag = Math.round(Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.heihgt, 2)))
        return `Диагональ прямоугольника равен ${countDiag}`
    }
}

let rectangle = new Rectangle('5m', '4m');
console.log(rectangle.getSquare())
console.log(rectangle.getPerimeter())
console.log(rectangle.getDiagonal())


class Quadrate extends Figure {

    constructor(width, heihgt){
        super(width, heihgt);
        this.width = parseFloat(width);
        this.heihgt = parseFloat(heihgt);
        this.width = this.heihgt;
    }

    getSquare (){
        let countSquare = Math.pow(this.width, 2);
        return `Площадь квадрата равен ${countSquare}`
    }

    getPerimeter(){
        let countPer = 4 * this.width;
        return `Периметр квадрата равен ${countPer}`
    }

    getDiagonal() {
        let countDiag = Math.round(this.width * Math.sqrt(2))
        return `Диагональ квадрата равен ${countDiag}`
    }
}

let quadrate = new Quadrate('10sm', '10sm')
console.log(quadrate.getSquare())
console.log(quadrate.getPerimeter())
console.log(quadrate.getDiagonal())


class Circle extends Figure{
    constructor(width, heihgt){
        super(width, heihgt);
    }
    getRadius() {
        let p = 3.14;
        let countRadius = Math.sqrt(this.width / p).toFixed(2);
        return `${countRadius}`
    }
}

let circle = new Circle(5, 5);

console.log(circle.getRadius())