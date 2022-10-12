

let person = {
    firstName: 'Ivan',
    lastName: 'Sergeev',
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        let fullInfo = value.split(' ');
        this.firstName = fullInfo[0];
        this.lastName = fullInfo[1];
    }
}

person.fullName = 'Egor Krid';
console.log(person.fullName);