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



while (chek(royal_nest) !== true) {                                     //проверка на живых
    h = Math.floor(Math.random() * royal_nest.length);              //случайный выбор одной из птиц
    s = Math.floor(Math.random() * royal_nest.length);              //случайный выбор одной из птиц
    if (h !== s) {                                                      //проверка на рандом двух одинаковых птиц
        abs = new Array(h, s);
        absFinal = getRandom(abs);
        /*console.log(abs, "Сформированный массив");
        co+nsole.log(absFinal, "Случайно выбранный элемент");*/
        if (royal_nest[absFinal].wasEasten == false) {
            royal_nest[absFinal].wasEasten = true;
            /*console.log("Bird for name " + royal_nest[absFinal].name + " is died");
            console.log("Her points = " + royal_nest[absFinal].poi);
            console.log(royal_nest[absFinal]);*/
            absFinal = deletArr(abs);
            if (royal_nest[absFinal].wasEasten == false) {
                royal_nest[absFinal].pointsbird();
                /*console.log("Bird for name " + royal_nest[absFinal].name + " won is battle");
                console.log("Her points + " + royal_nest[absFinal].poi);
                console.log(royal_nest[absFinal]);*/
                if (royal_nest[absFinal].poi > point) {
                    name = royal_nest[absFinal].name;
                    point = royal_nest[absFinal].poi;
                }
            }
        }
        else if (royal_nest[absFinal = deletArr(abs)].wasEasten == false) {
            y++
            if (y > 10) {

            }
        }
        console.log("NEXT BATTLE......................................................");
    }
    else {
        console.log("Сгенерировано совпадение    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    }
}
console.log(royal_nest);
console.log("Победила в Royal Battle " + name + ": набрано очков = " + point);



function getRandom(abs) {
    return abs[Math.floor(Math.random()*(abs.length))];
}
function chek(royal_nest) {
    if((royal_nest[0].wasEasten == false) || (royal_nest[1].wasEasten == false) || (royal_nest[2].wasEasten == false) || (royal_nest[3].wasEasten == false) || (royal_nest[4].wasEasten == false) || (royal_nest[5].wasEasten == false) || (royal_nest[6].wasEasten == false) || (royal_nest[7].wasEasten == false) || (royal_nest[8].wasEasten == false) || (royal_nest[9].wasEasten == false)) {
        x = false;
    }
    else if ((royal_nest[0].wasEasten == true) && (royal_nest[1].wasEasten == true) && (royal_nest[2].wasEasten == true) && (royal_nest[3].wasEasten == true) && (royal_nest[4].wasEasten == true) && (royal_nest[5].wasEasten == true) && (royal_nest[6].wasEasten == true) && (royal_nest[7].wasEasten == true) && (royal_nest[8].wasEasten == true) && (royal_nest[9].wasEasten == true)) {
        x = true;
    }
    return(x);
}
function deletArr(abs) {
    return abs.pop(abs.splice(abs.indexOf(absFinal), 1));
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
let x,point,y,h,s,absFinal = 0;                                          //Dannie bird#1  Dannie bird#2
let name = "";
let abs = [];
while (chek(royal_nest) !== true) {                                     //проверка на живых
    h = Math.floor(Math.random() * royal_nest.length);              //случайный выбор одной из птиц
    s = Math.floor(Math.random() * royal_nest.length);              //случайный выбор одной из птиц
    if (h !== s) {                                                      //проверка на рандом двух одинаковых птиц
        abs = new Array(h, s);
        absFinal = getRandom(abs);
        if (royal_nest[absFinal].wasEasten == false) {
            royal_nest[absFinal].wasEasten = true;
            absFinal = deletArr(abs);
            if (royal_nest[absFinal].wasEasten == false) {
                royal_nest[absFinal].pointsbird();
                if (royal_nest[absFinal].poi > point) {
                    name = royal_nest[absFinal].name;
                    point = royal_nest[absFinal].poi;
                }
            }
        }
    }
}
console.log(royal_nest);
console.lg("Победила в Royal Battle " + name + ": набрано очков = " + point);


(royal_nest[absFinal = deletArr(abs)].wasEasten == false)


/*1. Создайте класс Bird.
2. Добавьте птичке свойства name, points, wasEaten.
3. Создайте 10 птичек с именами Bird 1, Bird 2, .....Bird 3.
4. Запустите цикл: до тех пор, пока не останется только одна живая птичка.
    Цикл должен выбирать случайным образом одну из живых птиц и скармливать ей любую другую
(та, которая съедена, становится wasEaten = true, а та, которую покормили, —point++)*/

function getRandom(abs) {
    return abs[Math.floor(Math.random()*(abs.length))];
}
function chek() {
    let i = 0;
    while ( i < royal_nest.length){
        if (royal_nest[i].wasEasten === false ) {
            w++;
        }
        i++;
    }
    return(w);
}
function chek2() {
    let i = 0;
    while ( i <= 9){
        if (royal_nest[i].poi === point) {
            w++;
        }
        i++;
    }
    return (w);
}
function deletArr(abs) {
    return abs.pop(abs.splice(abs.indexOf(absFinal), 1));
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
/*const royal_nest = [
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
];*/
let playerNames = ['Rabbit Helpless', 'Warm Dreaded Foal', 'Desire Kit', 'Angel Dusty', 'Sweety Frozen', 'Silver Heavy Wombat', 'Lost Puma', 'Vital Panda', 'Rolling Sun', 'Steel Runny', 'Young Fox', 'Needless Ruthless Volunteer', 'Chipmunk Cult', 'Indigo Puppy'];
let royal_nest = [];
for (i = 0;i<=10;i++) {

    var namerand = Math.floor(Math.random() * playerNames.length);
    console.log(namerand);
    royal_nest[i] = new Bird(playerNames[namerand], 0, false);
}
let x = y = h = s = w = point = r = 0;                                          //Dannie bird#1  Dannie bird#2
let name = "";
while (chek() !== 1) {                                                  //проверяем колличество выживших
    h = Math.floor(Math.random() * royal_nest.length);              //случайный выбор одной из птиц
    s = Math.floor(Math.random() * royal_nest.length);              //случайный выбор одной из птиц
    if (h !== s) {                                                      //проверка на рандом двух одинаковых птиц
        abs = [h, s];                                                    //создаем массив из двух птиц
        absFinal = getRandom(abs);                                      //выбираем та которая умрет первой
        if (royal_nest[h].wasEasten === false && royal_nest[s].wasEasten === false) {     //проверяем не умерла ли она ранее
            console.log("Round " + r++ + ".....................................");
            royal_nest[absFinal].wasEasten = true;                      //убиваем бедную птичку
            console.log("Bird for name " + royal_nest[absFinal].name + " is died");
            console.log("Her points = " + royal_nest[absFinal].poi);
            absFinal = deletArr(abs);                                   //удаляем птицу которая умерла
            royal_nest[absFinal].pointsbird();                          //если наш убийца жив даем ему очки
            console.log("Bird for name " + royal_nest[absFinal].name + " won is battle");
            console.log("Her points = " + royal_nest[absFinal].poi);
            if (royal_nest[absFinal].poi > point) {                     //определение кто больше всех убил
                name = royal_nest[absFinal].name;                       //имя главного убийцы
                point = royal_nest[absFinal].poi;                       //очки убийцы
            }
        }
    }
    w = 0;
}
console.log(royal_nest);
if (chek2() == 2) {
    console.log("Победила в Royal Battle " + name + ": набрано очков = " + point);
}
else if (chek2() > 2) {
    console.log("Массовая ничья, несколько птиц закончили в одинаковым количеством очков = " + point);
}

/*1. Создайте класс Bird.
2. Добавьте птичке свойства name, points, wasEaten.
3. Создайте 10 птичек с именами Bird 1, Bird 2, .....Bird 3.
4. Запустите цикл: до тех пор, пока не останется только одна живая птичка.
    Цикл должен выбирать случайным образом одну из живых птиц и скармливать ей любую другую
(та, которая съедена, становится wasEaten = true, а та, которую покормили, —point++)
Создал генеротор с именами птиц. Нужное количество птиц укажите в переменной ниже Максимальное количество имён для генерации 52шт*/
const kolbird = 9;                                          //  9 = 10элементов в массиве

function getRandom(abs) {
    return abs[Math.floor(Math.random()*(abs.length))];                 //функция случайного выбора той которая умрет
}
function chek() {                                                         //функция проверки на количество выживших
    let i = 0;
    while ( i < royal_nest.length){
        if (royal_nest[i].wasEasten === false ) {
            w++;
        }
        i++;
    }
    return(w);
}
function chek2() {                                                          //функция проверки на одинаковое кол-во очков
    let i = 0;
    while ( i < royal_nest.length){
        if (royal_nest[i].poi === point) {
            w++;
        }
        i++;
    }
    return (w);
}
function deletArr(abs) {
    return abs.pop(abs.splice(abs.indexOf(absFinal), 1));                      //удаление элемента из массива с двумя птицами
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
const playerNames = ['Андромеда', 'Близнецы', 'Большая Медведица', 'Большой Пес', 'Весы', 'Водолей', 'Возничий', 'Волк', 'Волопас', 'Ворон', 'Геркулес', 'Гидра', 'Голубь', 'Гончие Псы', 'Дева', 'Дельфин', 'Дракон', 'Единорог', 'Жираф', 'Журавль', 'Заяц', 'Золотая рыба', 'Индеец', 'Кассиопея', 'Козерог', 'Компас', 'Лебедь', 'Лира', 'Лисичка', 'Малая Медведица', 'Малый Конь', 'Малый Лев', 'Малый Пёс', 'Овен', 'Октан', 'Орёл', 'Орион', 'Пегас', 'Персей', 'Рак', 'Рыбы', 'Скорпион', 'Стрелец', 'Телец', 'Феникс', 'Центавр', 'Часы', 'Цефей', 'Эридан', 'Южная Гидра', 'Южная Корона', 'Южная Рыба'];
let royal_nest = [];
let x = y = h = s = w = point = 0;
let r = 1;
let name = "";
for (i = 0;i<=kolbird;i++) {                                                                 //генерация птиц
    var namerand = Math.floor(Math.random() * playerNames.length);
    royal_nest[i] = new Bird(playerNames[namerand], 0, false);              //добавление значений по умолчанию
}
while (chek() !== 1) {                                                  //проверяем колличество выживших
    h = Math.floor(Math.random() * royal_nest.length);              //случайный выбор одной из птиц
    s = Math.floor(Math.random() * royal_nest.length);              //случайный выбор одной из птиц
    if (h !== s) {                                                      //проверка на рандом двух одинаковых птиц
        abs = [h, s];                                                    //создаем массив из двух птиц
        absFinal = getRandom(abs);                                      //отправка данных в функцию случайного выбора
        if (royal_nest[h].wasEasten === false && royal_nest[s].wasEasten === false) {    //проверка на wasEasten обеих
            console.log("Round " + r++ + ".....................................");          //вывод раунда
            royal_nest[absFinal].wasEasten = true;                         //убиваем бедную птичку
            console.log("Bird for name " + royal_nest[absFinal].name + " is died. " + "Her points = " + royal_nest[absFinal].poi);     //вывод данныых умершей птицы
            absFinal = deletArr(abs);                                   //удаляем птицу которая умерла
            royal_nest[absFinal].pointsbird();                          //ему очки выжившей
            console.log("Bird for name " + royal_nest[absFinal].name + " won is battle. " + "Her points = " + royal_nest[absFinal].poi);        //вывод данных победившей птицы
            console.log();                                              //пустая строка для удобочитаемости в консоли
            if (royal_nest[absFinal].poi > point) {                     //определение кто больше всех убил
                name = royal_nest[absFinal].name;                       //имя убийцы
                point = royal_nest[absFinal].poi;                       //очки убийцы
            }
        }
    }
    w = 0;                                                              //обнуление счетчика
}
console.log(royal_nest);                                                //вывод общей таблицы зачета
if (chek2() == 2) {
    console.log("Победила в Royal Battle " + name + ": набрано очков = " + point);
}
else if (chek2() > 2) {
    console.log("Массовая ничья, несколько птиц закончили в одинаковым количеством очков = " + point);
}
const rabbit = {                                                                            //Object
    "name": "Oleg",
    "speed": 50,
    "color": "grey",
    "getDis2": function (interval) { return interval * this.speed;}                       //Metod "this" обращается к перемоенной в объекте
};

function getDis(interval) {                                                                 //Function
    return interval * rabbit.speed;
}

console.log(rabbit.getDis2(30));

class bird {
    constructor(speed) {
        this.dist = 0;
        this.speed = speed;
    }
    fly () {
        this.dist +=100;
    }
}

const eagle = new bird(50);
eagle.fly();

const own = new bird(100);
own.fly();

console.log(Object.keys(own));


function Bird(speed) {
    this.dist = 0;
    this.speed = speed;
    this.fly = function () {
        this.dist += speed;
    }
}
//analog sozdaniya classov

const eagle = new Bird(100);
eagle.fly();
eagle.fly();
//kolvo obrashenii k funcii FLY daet inoi rezult
const own = new Bird(40);
own.fly();

console.log(eagle.dist);
console.log(own.dist);




const bird = { "fly": true};

function Eagle(firstname, secondname) {
    this.name = firstname;
    this.secondname = secondname;
    this.speed = 100;
}

Eagle.prototype = bird;

const eagle1 = new Eagle("Alexandr","Orlov");

console.log(eagle1);
console.log(eagle1.fly)






