
// 28) Составьте программу, которая принимает с клавиатуры целое число, соответствующее определенному часу суток,
// и выводит на экран сообщение о его принадлежности к определённому периоду суток 
// (утро: 6-9 часов, день: 10-17 часов, вечер: 18-22 часов, ночь: 23-5 часов). В случае, если введенное значение 
// ошибочно, следует вывести на экран соответствующее текстовое сообщение.
// ввод: 7 ⇒ вывод: утро; ввод: 33 ⇒ вывод: ошибка)


 let hour = +prompt('Enter the time: ');
 if (6 <= hour && hour <= 9) {
     console.log('Утро');
 }else if (10 <= hour && hour <= 17) {
     console.log('День');
 }else if (18 <= hour && hour <= 22) {
     console.log('Вечер');
 }else if (23 <= hour && hour <= 24 || 1 <= hour && hour <= 5) {
     console.log('Ночь');
 }else if (hour == null || !hour) {
     console.log('Ошибка');
 }else {
     console.log('Ошибка');
 }