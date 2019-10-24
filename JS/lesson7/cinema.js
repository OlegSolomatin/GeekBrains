const categories  = ["Комедия","Драмма","Ужасы","Фантастика","Сериалы"];
const countries = ["USA","Russia","United Kingdom","France","Canada","Spain","Germany","Europe"];
const nameauthor = ["Zeus","Poseidon","Afrodita","Venera","Gera","Ares","Afina","Hephaestus","Demetra","Apollo","Artemida","Gastia","Hermes","Hades","Persephone"];
const films = [];
const baserate = 5.0;
class film {
    constructor ( name, cat, date, country, director){
        this.name = name;
        this.rate = baserate;
        this.category = categories [ cat ];
        this.date = date;
        this.country = countries [ country ];
        this.director = director;
        this.comments = []
    }
    addComent (text, authorname, rate) {
        this.comments.push( new comm(text, authorname, rate) );
    }
}
class comm {
    constructor ( text, authorname, rate) {
        this.text = text;
        this.author = nameauthor[ authorname ];
        this.rate = rate;
    }
}
//Выбор случайного имени коментатора
function nameaut () {
    x = Math.floor(Math.random() * nameauthor.length);
    return(x);
}
//Выбор случайной оценки
function rateran () {
    x = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    return(x);
}
films.push( new film("Интерстеллар", 3, "2014", 0, "Кристофер Нолан"));
films.push( new film("1+1",1,"2011",3,"Оливье Накаш"));
films.push( new film("Карты, деньги, два ствола", 0,"1998", 2, "Гай Ричи"));
films.push( new film("Сонная Лощина", 2, "1999", 0, "Тим Бёртон"));
films.push( new film("Шерлок", 4, "2010", 2, "Пол МакГиган"));
films[0].addComent("Обязательно к просмотру каждому уважающему себя современному человеку", nameaut(), rateran());
films[1].addComent("Каждый, кто посмотрел «1+1», находит в нем что-то свое, но в любом случае, позитивное и оптимистичное, чего порой не хватает в нашей жизни.", nameaut(), rateran());
films[2].addComent("«Карты, деньги, два ствола» — просто бесподобный, очень интересный, увлекательный, крутой криминальный боевик, который можно бесспорно вносить в коллекцию избранных фильмов.", nameaut(), rateran());
films[3].addComent("Любителям готических историй и страшных сказок, а также поклонникам Тима Бертона и Джонни Деппа рекомендую к обязательному просмотру.", nameaut(), rateran());
films[4].addComent("«Шерлок» — лучший в своем жанре, интересный, захватывающий сериал, в отличным подбором актеров, сюжетом и с долей юмора. С нетерпением жду последующих частей!", nameaut(), rateran());
for (let i = 0; i < films.length; i++) {
    console.log("Name: " +  films[i].comments[0].author + ". Stars: " + films[i].comments[0].rate );
    console.log("Comment: " + films[i].comments[0].text );
    console.log("");
}