// 29) Составьте программу, которая принимает с клавиатуры три числа и проверяет, являются ли эти числа углами одного и того же треугольника. 
// По результатам проверки следует вывести на экран соответствующее текстовое сообщение.
//  ввод: 90, 30, 60 ⇒ вывод: это треугольник; ввод: 90, 0, 90 ⇒ вывод: это не треугольник)

//  let numberFirst = +prompt('Enter the first number: ');
        
//  if(numberFirst === 90){
//      let numberSecond = +prompt('Enter the second number: ');
//      if(numberSecond === 30){
//          let numberThird = +prompt('Enter the third number: ');
//          if(numberThird === 60) {
//              console.log('это треугольник')
//          }else {
//              console.log('это не треугольник') 
//          }
//      }else {
//          console.log('это не треугольник')
//      }
//  }else if (numberFirst == null || !numberFirst) {
//      console.log('это не треугольник')
//  }else {
//      console.log('это не треугольник')
//  }


 let num, triangle = 0, degree = true;

 for (let i = 0; i <= 2; i++) {
     num = +prompt('Enter the number: ');

     // if (num <= 0) degree = false;  // это не важно
     triangle += num;
 }
 if (triangle == 180 && degree) {
     alert('это треугольник')
 }
 else alert('это не треугольник')