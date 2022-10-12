function Account(login, password) {
    this.login = login;
    this.password = password;
    this.checkLogin = function () {
        if (this.login.length < 5) return 'Add more symbols';
        else return this.login
    }
    this.checkPassword = function () {
        for (let key in this.password) {
            if ((typeof this.password == 'string') && (typeof this.password == 'number')) return 'Completed';
            else return 'You should add'
        }

    }
}

let info = new Account('Vera', dadas23242)
console.log(info.checkLogin())
console.log(info.checkPassword())