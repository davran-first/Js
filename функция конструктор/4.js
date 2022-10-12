function UserAccount(money) {
    this.money = money;
   

    this.buyAccount = function(){
        if(this.money == 25 ) return 'bronze';
        if(this.money == 50 ) return 'silver';
        if(this.money == 75 ) return 'gold';
        if(this.money == 100 ) return 'vip';
        else return 'You shoul pay more or less';
    }
    this.showAccount = function () {
        if (this.buyAccount() == 'bronze') return '25% discount';
        if (this.buyAccount() == 'silver') return '50% discount';
        if (this.buyAccount() == 'gold') return '75% discount';
        if (this.buyAccount() == 'vip') return '100% discount';
        else return 'You shoul pay more or less';
    }
}

let info = new UserAccount(25)
console.log(info.buyAccount())
console.log(info.showAccount())
