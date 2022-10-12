let count = 0;

function countItems(item){
    
    return function(){
        count ++;
        return `${count} ${item}`
    };
   
}

let countItem = countItems('laptop')
console.log(countItem())
let countItem2 = countItems('pc')
console.log(countItem2())
let countItem3 = countItems('battery')
console.log(countItem3())

