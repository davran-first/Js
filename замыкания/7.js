

function mobileCompanies(name){

    return function(code, number){
        return `${name} ${code} ${number}`
    }
}

const companyBeeline = mobileCompanies('Beeline')
console.log(companyBeeline(90, 7004646))
console.log(companyBeeline(91, 6464646))

const companyUcell = mobileCompanies('Ucell')
console.log(companyUcell(93, 5065656))
console.log(companyUcell(94, 5067070))