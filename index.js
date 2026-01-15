// Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта:
//  "Кава", "Чай" або "Сік". Використайте switch

const userAnswer =prompt("оберіть Кава, Чай або Сік");
let userAnswer2 ;
switch (userAnswer){
case "Сік":
   alert("Сік");
    break
    case "Кава":
     alert("Кава");
    break
    case "Чай":
    alert("Чай");
    break
    default:
    alert("такого варіанту немає,спробуйте ще раз");
}
// Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день
//  — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.
const dayToday = prompt("напишіть який сьогодні день тижня");
// if(dayToday=== "понеділок" || dayToday === "вівторок" || dayToday === "середа" || dayToday === "четвер"||dayToday === "п'ятниця" ){
//     alert("сьогодні робочий день")
// }else if(dayToday=== "субота" || dayToday === "неділя"){
//     alert("сьогодні вихідний")
// }else{
//     alert("ви ввели неправильно")
// }
switch (dayToday){
case "понеділок":
case "вівторок":
case "середа":
case "четвер": 
case "п'ятниця": 
alert("сьогодні робочий день")
break
case "субота": 
case "неділя": 
alert("сьогодні вихідний")
break
default:
alert("такого варіанту немає,спробуйте ще раз");
} 
// Створіть змінну для зберігання номера місяця.
//  За номером місяця визначайте пору року і виводьте відповідне повідомлення.

// if(monthToday=== 1 || monthToday=== 2 ||  monthToday=== 12 ){
//     alert("Зима")
// }else if(monthToday=== 3 ||monthToday=== 4 ||monthToday=== 5 ) {
//     alert("Весна")
// }else if(monthToday=== 6||monthToday=== 7 ||monthToday=== 8 ) {
//     alert("Літо")
// }else if(monthToday=== 9 ||monthToday=== 10 ||monthToday=== 11 ) {
//     alert("Осінь")
// }else{
//     alert("ви ввели не вірне число")
// }
const monthToday = Number(prompt("Напишіть номер місяця"));
switch (monthToday) {
case 12:
case 1:
case 2:
alert("Зима");
break;
case 3:
case 4:
case 5:
alert("Весна");
break;
case 6:
case 7:
case 8:
alert("Літо");
break;
case 9:
case 10:
case 11:
alert("Осінь");
break;
default:
alert("Такого варіанту немає, спробуйте ще раз");
}


// Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору:
//  якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".
const color =prompt("оберіть червоний ,зелений чи жовтий");
// if(color=== "червоний" ){
//     alert("стоп")
// }else if(color=== "зелений" ) {
//     alert("йти")
// }else if(color=== "жовтий" ) {
//     alert("чекати")
// }else{
//     alert("такого варіанту немає")
// }
switch (color){
case "червоний":
alert("стоп")
break
case "зелений": 
alert("йти")
break
case "жовтий":
alert("чекати")
break
default:
alert("такого варіанту немає,спробуйте ще раз");
} 
// Створіть змінні для зберігання двох чисел та оператора (як у списку select).
//  Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.
const num1 = "2";
const num2 = "0";
let operator = "/";
// if(operator ==="+"){
//  alert("result = " + (Number(num1) + Number(num2)));
// }else if(operator ==="-"){
//  alert("result = " + (Number(num1) - Number(num2)));
// }else if(operator ==="*"){
//  alert("result = " + (Number(num1) * Number(num2)));
// }else if(num2 === 0 && operator === "/"){
//  alert("ERROR!Ділення на нуль!");
// }else if(operator ==="/"){
//  alert("result = " + (Number(num1) / Number(num2)));
// }
switch (operator){
case "+":
alert("result = " + (Number(num1) + Number(num2)));
break
case "-": 
alert("result = " + (Number(num1) - Number(num2)));
break
case "*":
alert("result = " + (Number(num1) * Number(num2)));
break
case "/":
alert("result = " + (Number(num1) / Number(num2)));
break
} 