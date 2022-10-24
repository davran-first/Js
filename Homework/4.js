
let CompanyMix = {
    getBudget() { return 0},
    getDownload() { return 0 }
}


class Company {
    constructor(name, field, budget, country, downloaded){
        this.name = name;
        this.field = field;
        this.budget = budget;
        this.country = country;
        this.downloaded = downloaded;
    }

    showInfo(){
        return `${this.name} has ${this.budget.toLocaleString('en-US', { style: 'currency', currency: 'USD'})} which is loacted in ${this.country.toUpperCase()}`
    }

}

class Facebook extends Company{
    constructor(name, field, budget, country, downloaded){
        super(name, field, budget, country, downloaded)
    }
}

let facebook = new Facebook('Facebook', 'social media', 10_000_000, 'usa', 5_000_000);

console.log(facebook.showInfo())

Object.assign(Facebook.prototype, CompanyMix);
Facebook.prototype.getBudget = function() { return this.budget; }

class Telegram extends Company {
    constructor(name, field, budget, country, downloaded){
        super(name, field, budget, country, downloaded);
    }
   
}
let telegram = new Telegram('Telegram', 'social media', 5_000_000, 'dubai', 1_000_000);

console.log(telegram.showInfo())

Object.assign(Telegram.prototype, CompanyMix);
Telegram.prototype.getBudget = function() { return this.budget; }

class Google extends Company {
    constructor(name, field, budget, country, downloaded){
        super(name, field, budget, country, downloaded);
    }
}
let google = new Google('Google', 'IT company', 1_000_000_000, 'usa', 10_000_000);
console.log(google.showInfo())

Object.assign(Google.prototype, CompanyMix);
Google.prototype.getBudget = function() { return this.budget; }

arr = []

arr.push(new Facebook('Facebook', 'social media', 10_000_000, 'usa', 5_000_000))
arr.push(new Telegram('Telegram', 'social media', 5_000_000, 'dubai', 1_000_000))
arr.push(new Google('Google', 'IT company', 1_000_000_000, 'usa', 10_000_000))

arr.sort((a,b) => b.getBudget() - a.getBudget());

for(let key of arr){
    console.log(key.name + ' ' + key.getBudget())
}