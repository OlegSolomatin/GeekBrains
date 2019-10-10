const a = 5;    // #1 zad
let s = "a";    // #2 zad
s = s + a;      // #3 zad
//s = s.replace(s, a); // # 3 zad (по разному понял как это задание сделать оставил на всякий)
console.log(s);
let b = 10;     // #4 zad
b++;            // #5 zad
console.log(b);
b = (b-10) + b;      // #5 zad
console.log(b);
b = (b ** 2) % 131; // #5 zad
console.log(b);
const li = [1,2,3,4,5,6,7,8];       // #6 zad
li.splice(3,3, 10, 5e9); // #7-8 zad
// альтернативное решение данной задачи
//li.splice(3,3);       // #7 zad
//li.push(10,5e9);      // #8 zad
console.log(li);
let ob = { number: ""};     // #9 zad
ob.number = li.join(";");   // #10 zad
console.log(ob);
ob.newNumbers = li.join(";") + ";" +  li[4] + ";" + li[4]; // #11 zad
console.log(ob);