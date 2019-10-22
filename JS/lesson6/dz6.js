/*1. Создайте класс Bird.
2. Добавьте птичке свойства name, points, wasEaten.
3. Создайте 10 птичек с именами Bird 1, Bird 2, .....Bird 3.
4. Запустите цикл: до тех пор, пока не останется только одна живая птичка.
    Цикл должен выбирать случайным образом одну из живых птиц и скармливать ей любую другую
(та, которая съедена, становится wasEaten = true, а та, которую покормили, —point++)*/

function getRandom2(abs) {
    return abs[Math.floor(Math.random()*(abs.length))];
}
function chekFalse(royal_nest) {
    if((royal_nest[0].wasEasten == false) || (royal_nest[1].wasEasten == false) || (royal_nest[2].wasEasten == false)|| (royal_nest[3].wasEasten == false) || (royal_nest[4].wasEasten == false) || (royal_nest[5].wasEasten == false) || (royal_nest[6].wasEasten == false) || (royal_nest[7].wasEasten == false) || (royal_nest[8].wasEasten == false) || (royal_nest[9].wasEasten == false)) {
       x = false;
    }
    return(x);
}
class Bird {
    constructor (name,points,wasEasten) {
        this.name = name;
        this.poi = points;
        this.wasEasten = wasEasten;
    }
    pointsbird(){
        this.poi++;
    }
}

const royal_nest = [
    new Bird("Alex",0,false),
    new Bird("Venera",0,false),
    new Bird ("Nikolay",0,false),
    new Bird ("Margarita", 0, false),
    new Bird ("Anna", 0, false),
    new Bird ("Elza",  0,  false),
    new Bird ("Vera",  0,  false),
    new Bird ("Afrodita", 0, false),
    new Bird ("Gerakl", 0, false),
    new Bird ( "Persei", 0, false)
];

let h,s = {}; //Dannie bird#1  Dannie bird#2
let x = 0; //chetchik
//vibor sluchainoi bird is gnezda
while (chekFalse(royal_nest) == false) {
    h = Math.floor(Math.random() * royal_nest.length);
    s = Math.floor(Math.random() * royal_nest.length);
    if (h !== s) {
        abs = new Array(h, s);
        absFinal = getRandom2(abs);
        console.log(abs, "Сформированный массив");
        console.log(absFinal, "Случайно выбранный элемент");
        if (royal_nest[absFinal].wasEasten == false) {
            royal_nest[absFinal].wasEasten = true;
            //console.log("Bird for name " + royal_nest[absFinal].name + " is died");
            //console.log("Her points = " + royal_nest[absFinal].poi);
            console.log(royal_nest[absFinal]);
        }
        absFinal = abs.pop(abs.splice(abs.indexOf(absFinal), 1));
        if (royal_nest[absFinal].wasEasten == false) {
                console.log(absFinal);
                console.log(abs);
                console.log(absFinal);
                royal_nest[absFinal].pointsbird();
                //console.log("Bird for name " + royal_nest[absFinal].name + " won is battle");
                //console.log("Her points + " + royal_nest[absFinal].poi);
                console.log(royal_nest[absFinal]);
            }
        console.log("NEXT BATTLE......................................................");
    }
    else {
        console.log("Сгенерировано совпадение    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    }
}
console.log(royal_nest);

