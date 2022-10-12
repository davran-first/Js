
function StudentInfo(name, surname, scolarship, skills){
    this.name = name;
    this.surname = surname;
    this.scolarship = scolarship;
    this.skills = skills;

    this.showFullName=function(){
        return `${this.name} ${this.surname}`
    }

    this.countScolarship=function(){
        if( 1 < this.scolarship && this.scolarship <= 50){
            return `${this.showFullName()} should pay 3000$`
        }else if(50 < this.scolarship && this.scolarship <= 70){
            return `${this.showFullName()} should pay 1500$`
        }else if(70 < this.scolarship && this.scolarship <= 100){
            return `${this.showFullName()} should not pay cash`
        }
    }

    this.programmingGroup=function() {
        for(let i=0; i < this.skills.length; i++ ){
            if(skills[i] == 'html' || skills[i] == 'css'){
                return 'frontend group'
            }else if(skills[i] == 'kotlin' || skills[i] == 'android'){
                return 'android group'
            }else if(skills[i] == 'swift'){
                return 'ios group'
            }else if(skills[i] == 'django' || skills[i] == 'nodejs'){
                return 'backend group'
            }
        }
    }

}

let student = new StudentInfo('Bill', 'Gates', 61, ['html', 'css', 'js'])

console.log(student.countScolarship())
console.log(student.programmingGroup())