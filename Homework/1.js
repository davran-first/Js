


// 1) что выведет код?  Объясните

var a = 5;                           /// 1
setTimeout(function timeout() {
    console.log(a);
    a = 10;
}, 2000);

var p = new Promise(function(resolve, reject) {
    console.log(a);
    a = 25;                                                         /// 2
    resolve();
});

p.then(function(){
    // some code
});                                                                 //// 3

console.log(a);



