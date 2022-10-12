

let cv = {
    firstName: 'Artur',
    lastName: 'Durov',
    birthday: new Date(1995, 11, 8),
    degree: 'bachelor',
    field: 'Compuer science',
    'soft skills': ['communication', 'flexible', 'enthusiastic'],
    'hard skills': ['typing', 'coding', 'programming', 'software developer'],
    married: false,
    background: {
        google: 'Software Engineer',
        facebook: 'Web Designer',
        telegram: 'QA'
    },
    gitHub : 'arturdeveloper',
    'socila medias'{
        goodle: 'artur@gmail.com',
        twitter: '@artur',
        instagram: '@arturinsta'
    }
    showBirthday: function(){
        return `${cv.birthday.getDate()}.${cv.birthday.getMonth()}.${cv.birthday.getFullYear()}`
    }
}



let info = cv.showBirthday()
console.log(info)