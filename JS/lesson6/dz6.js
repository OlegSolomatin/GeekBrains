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