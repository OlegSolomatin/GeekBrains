const categories  = ["Комедия","Драмма","Ужасы","Фантастика","Сериалы"];
const countries = ["USSR","USA","Russia","United Kingdom","France","Canada","Spain","Germany","Europe"];
const nameauthor = ["Zeus","Poseidon","Afrodita","Venera","Gera","Ares","Afina","Hephaestus","Demetra","Apollo","Artemida","Gastia","Hermes","Hades","Persephone"];
const base_comm = {
    bad_comm :
        ["Чушь и муть. Жалко потраченного времени на это недокино.",
        "Абсолютный провал. Игра актеров никакая. Многие зрители вставали и уходили с половины фильма.",
        "Фильм провааал, просто понимаете, там нету логичных сюжетов, фильм сделали из многих стыренных идей других фильмов, зря потраченные деньги будут, если пойдёте....",
        "Вчера посмотрели всей семьей эту муру , и пишу чтобы другие не тратили своё время и деньги, зря . Фильм муть полная, кроме музыки ",
        "Теперь я поняла,почему зал был пуст, кроме нас 2-х никого... Одно утешает, билет не дорогой!...",
        "Шок. г... редкостное! Позор!...",
        "Есть фильмы где нет сюжета, но есть игра актеров, или красивый видеоряд, музыка. Здесь нет ничего.",
        "Худший фильм из тех что я видел в этой жизни."
        ],
    average_comm :
        ["Скучный фильм. Эмоциональный уровень актеров как у зубочистки. Их игра неестествена. ",
        "Резюмируя, это дешевый продукт в привлекательной упаковке. За упаковку ставлю заслуженные.",
        "Стоит ли смотреть данный фильм и есть ли в нем смысл? Однозначно да, но не возлагайте на него никаких надежд. И если вдруг во время просмотра у вас возникнет желание его выключить и начать смотреть что-то более полезное и интеллектуальное, то так и сделайте.",
        "К сожалению, картина ориентирована на слишком широкую аудиторию. ",
        "Атмосферный фильм, не более того.",
        "Не впечатлил, много слов, сюжет да фигня....",
        "Неоднозначный, но мне понравился. Пейзаж, музыка, атмосфера.",
        "Фильм который стоит посмотреть только из за актерского состава."
        ],
    great_comm :
        ["Фильм-мотивация, фильм-вдохновение, занимательная история с прекрасным актерским составом и, кстати, заслуживающим внимания саундтреком.",
        "Это великолепное кино способно сделать мир вокруг лучше, светлее, а зрителя — чуточку счастливее. Смахнуть слёзы и понять, что надежда — есть, и никогда нельзя отчаиваться.",
        "Отличный фильм, то, что происходит в фильме близко каждому зрителю. Фильм затрагивает все струны души зрителя. Бесконечно признательна режиссеру.",
        "Отличная картина. Фильм наводит на размышления,абсолютно не похож ни что другое....",
        "Фильм оч понравился! Рекомендую к просмотру!...",
        "Классный фильм захватывает с первых минут просмотра советую посмотреть....",
        "Отличный фильм. Полностью погружаешься в действие, хотя оно и неспешное.",
        "Лучшая лента из существущих, актерски состава, сама игра актеров....... это просто божественно. Фильм который должны смотреть все и вся."
        ]
};
const films = [];
let x = sumrate = globalrate = 0;
class film {
    constructor ( name, cat, date, country, director, id){
        this.name = name;
        //this.rate = globalrate;
        this.category = categories [ cat ];
        this.date = date;
        this.country = countries [ country ];
        this.director = director;
        this.comments = [];
        this.idkino = id;
    }
    addComments ( authorname, rate, text) {
        this.comments.push( new comm(authorname, rate, text) );
    }
    getAverageRate() {
        let sumRate = 0;
        this.comments.forEach(comments => sumRate += comments.rate);
        return (this.comments.length > 0 ) ? (sumRate / this.comments.length).toFixed(1) : 0;
        //альтернатива
        //return this.comments.length > 0 ? this.comments.reduce((sum, arr) => sum + arr.stars, 0) / this.comments.length : 0;
    }
}
class comm {
    constructor ( authorname, rate, text ) {
        this.text = text;
        this.author = nameauthor[ authorname ];
        this.rate = rate;
    }
}
//Выбор случайного имени коментатора
function nameaut () {
    z = Math.floor(Math.random() * nameauthor.length);
    return(z);
}
//Выбор случайной оценки
function rateran () {
    x = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    return(x);
}
//Выбор коментария от оценки фильма
function commran () {
    if ( x >= 0 && x <= 3 ) {
        y = Math.floor(Math.random() * base_comm.bad_comm.length);
        com_ran = base_comm.bad_comm[y];
    }
    else if ( x >= 4 && x <= 6 ) {
        y = Math.floor(Math.random() * base_comm.average_comm.length);
        com_ran = base_comm.average_comm[y];
    }
    else {
        y = Math.floor(Math.random() * base_comm.great_comm.length);
        com_ran = base_comm.great_comm[y];
    }
    return(com_ran);
}
//Подсчет глобального рейтинга фильма
/*function getAverageRate (n) {
    globalrate = 0;
    sumrate = 0;
    for (let i = 0; i < films[n].comments.length; i++) {
        sumrate += films[n].comments[i].rate;
    }
    globalrate = (sumrate / films[n].comments.length) ;
    return(globalrate);
}*/
films.push( new film("Интерстеллар",3,"2014",0,"Кристофер Нолан",258687));
films.push( new film("Иван Васильевич меняет профессию",0,"1976",0,"Леонид Гайдай",42664));
films.push( new film("1+1",1,"2011",3,"Оливье Накаш",535341));
films.push( new film("Побег из Шоушенка",1,"1994",1,"Фрэнк Дарабонт", 326));
films.push( new film("Молчание ягнят",2,"1990",1,"Джонатан Демме", 345));
films.push( new film("Начало",3,"2010",1,"Кристофер Нолан",447301));
films.push( new film("Чернобыль (мини-сериал)",4,"2019",1,"Йохан Ренк", 1227803));
films.push( new film("Карты, деньги, два ствола",0,"1998",2,"Гай Ричи", 522));
films.push( new film("Сонная Лощина",2,"1999",0,"Тим Бёртон",5622));
films.push( new film("Шерлок",4,"2010",2,"Пол МакГиган",502838));
//Все имена авторов, выставленный ими рейтинг, и коментарии выбираются случайным образом.
films[0].addComments(nameaut(), rateran(), commran());
films[0].addComments(nameaut(), rateran(), commran());
films[0].addComments(nameaut(), rateran(), commran());
films[0].addComments(nameaut(), rateran(), commran());
films[1].addComments(nameaut(), rateran(), commran());
films[1].addComments(nameaut(), rateran(), commran());
films[2].addComments(nameaut(), rateran(), commran());
films[2].addComments(nameaut(), rateran(), commran());
films[3].addComments(nameaut(), rateran(), commran());
films[3].addComments(nameaut(), rateran(), commran());
films[4].addComments(nameaut(), rateran(), commran());
films[4].addComments(nameaut(), rateran(), commran());
films[5].addComments(nameaut(), rateran(), commran());
films[5].addComments(nameaut(), rateran(), commran());
films[6].addComments(nameaut(), rateran(), commran());
films[6].addComments(nameaut(), rateran(), commran());
films[7].addComments(nameaut(), rateran(), commran());
films[7].addComments(nameaut(), rateran(), commran());
films[8].addComments(nameaut(), rateran(), commran());
films[8].addComments(nameaut(), rateran(), commran());
films[9].addComments(nameaut(), rateran(), commran());
films[9].addComments(nameaut(), rateran(), commran());

function getFilmsByCategory(cat) {
    const newFilms = [];
    for (let film of films) {
        if (film.category === cat) {
            newFilms.push(film);
        }
    }
    return newFilms;
}

console.log(getFilmsByCategory("Драмма"));

//проверка вывода через Film мтода getAverageRate
console.log(films[0].getAverageRate());
/*console.log(films[0].comments[0].rate);
console.log(films[0].comments[1].rate);
console.log(films[0].comments[2].rate);
console.log(films[0].comments[3].rate);*/

//самодельный вариант вывода и подсчета средней оценки фильма при отключении функции и использование
//Метода из класса не работает. При одиночной проверке выше все отрабатывает на 100%
//Для проверки, закоментировать вывод ниже + функцию, после раскоментировать метод в классе и вывод выше.
/*for (let n = 0; n < films.length; n++) {
    for (let i = 0; i < films[n].comments.length; i++) {
        console.log(films[n].name + " Global rate: " + getAverageRate(n));
        console.log("Name: " + films[n].comments[i].author + ". Stars: " + films[n].comments[i].rate);
        console.log("Comment: " + films[n].comments[i].text);
        console.log("");
    }
}*/
/*for (let n = 0; n < films.length; n++) {
    for (let i = 0; i < films[n].comments.length; i++) {
        console.log(films[n].comments);
    }
}
console.log(films);*/

console.log











/*var xhr = new XMLHttpRequest();
const idkinopoisk = 342;
xhr.open('GET', 'https://rating.kinopoisk.ru/' + idkinopoisk +'.xml', false);
xhr.send();
if (xhr.status != 200) {
    console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
    console.log( xhr.responseText );
}
/*for (let n = 0; n < films.length; n++) {
// описание функции
    function get_rating( $id = null ) {
        $rating = [];
        if ( ! empty( $id ) ) {
            $xml   = simplexml_load_file( 'https://rating.kinopoisk.ru/' + $id +'.xml' );
            https://rating.kinopoisk.ru/678552.xml
            $names = ['kp_rating', 'imdb_rating'];
            forEach ( $names as $name ) {
                $new_name = str_replace( '_rating', '', $name );
                $rating[ $new_name ] = dom_import_simplexml( $xml->$name )->nodeValue;
            }
        }

        return $rating;
    }

// вызов функции
    $rating = get_rating(347);

// выводим рейтинг КиноПоиск
    console.log($rating['kp']);
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    11
    12
    13
    14
    15
    16
    17
    18
    19
    20*/
