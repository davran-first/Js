

function UserInfo(name, surname, age, phoneNumber, married, gender, address){
    this.name=name;
    this.surname=surname;
    this.age=age;
    this.phoneNumber=phoneNumber;
    this.married=married;
    this.gender=gender;
    this.address=address;

    this.showUserInfo=function(){
        let info = `Name: ${this.name} \nSurname: ${this.surname} \nAge: ${this.age} \nPhone Number: ${this.phoneNumber} \nMarried: ${this.married} \nGender: ${this.gender} \nAddress: ${this.address}`
        return info;
    }
}

let info =new UserInfo('Bill', 'Gates', 50, 5003636, true, 'male', 'USA')
console.log(info.showUserInfo())