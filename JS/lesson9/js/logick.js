const openFilm = {};
document.addEventListener("DOMContentLoaded", function () {
    for (let category of categories) {
        const newEl = document.createElement("a");
        newEl.classList.add("nav-item");
        newEl.classList.add("nav-link");
        newEl.href = '#';
        newEl.innerText = category;

        newEl.addEventListener("click", function (){
            CategoryUp(category);
        });

        document.querySelector(".nav_cat").appendChild(newEl);
    }
});

function CategoryUp(categoryname) {
    document.querySelector(".films_cont").innerHTML = "";
    const films = getFilmsByCategory(categoryname);
    for (let film of films) {
        renderFilm(film);
    }
}

function renderFilm(film) {
    const newEl = document.createElement("div");//создаен новый элемент
    newEl.classList.add("films_list");//константе в которой эелемент даем класс
    newEl.innerHTML = '<figure class="films_block"> ' +
        '<img class="canvas_block_list"> ' +
        '<p class="caption_films" href="#">'+film.name+'</p> ' +
        '<div class="rating_films">'+globalrate+'</div> </figure>';

    newEl.addEventListener("click", function () {
        onFilmClick(film, newEl);
        /*$(".films_cont").children(":not(#id_n)").remove();*/
    });
    document.querySelector(".films_cont").appendChild(newEl);//определяем место где создастья новый блок
}

function onFilmClick(film, newEl) {
    if (openFilm.hasOwnProperty( film.name ) && openFilm[film.name] === true) {
        newEl.innerHTML = '<figure class="films_block">' +
            ' <img class="canvas_block_list">' +
            ' <p class="caption_films">'+film.name+'</p> ' +
            '<div class="rating_films">'+globalrate+'</div>' +
            ' </figure>';
        openFilm[film.name] = false;
    } else {
        openFilmBloc(film, newEl);
        openFilm[film.name] = true
    }
}

function openFilmBloc(film, newEl) {
    const comments = getFilmComments(film.name);
    let tex  = "";
    comments.forEach( c => {
        tex += '<div class="bot_review"><div class="author">' +
            '<div class="author_label"></div> ' +
            '<footer class="profile_name"> '+ c.author +' </footer> ' +
            '<div class="rate_author"> '+ c.rate +' </div> ' +
            '</div><div class="comment"> '+ c.text +' </div></div>';
    });
    newEl.innerHTML = '<figure class="films_block"> ' +
        '<img class="canvas_block"> ' +
        '<figcaption class="film_description"> ' +
        '<h2>'+film.name+'</h2> ' +
        '<ul class="type">' +
        '<li><div class="description_elem">режиссер</div> <span class="get_const">'+film.director+'</span></li> ' +
        '<li><div class="description_elem">год</div> <span class="get_const">'+film.date+'</span></li> ' +
        '<li><div class="description_elem">страна</div> <span class="get_const">'+film.country+'</span></li> ' +
        '<li><div class="description_elem">жанр</div> <span class="get_const">'+film.category+'</span></li>' +
        '</ul> </figcaption> </figure> ' +
        '<div class="response"> '+tex+'</div>';
    const addCommentButton = document.createElement("button");
    addCommentButton.innerText = "Добавить рецензию";
    addCommentButton.classList.add("btn");
    addCommentButton.classList.add("btn-outline-dark");
    addCommentButton.classList.add("but_reviews");
    addCommentButton.addEventListener("click", function (event) {
        event.stopPropagation();
        const commentForm = renderCommentForm(film);
        newEl.appendChild(commentForm);
        newEl.removeChild(addCommentButton);
    });
    newEl.appendChild(addCommentButton);
}

function renderCommentForm (film){
    const content = '<h3 class="review_user"> Добавить свою рецензию на фильм: '+film.name+'</h3> ' +
                    '<form class="form_body">' +
                        '<input class="name_user" placeholder="you name" id="author'+film.name+'">' +   /*По данному принципу можно генерировать и удалять элементы с страницы*/
                        '<input class="comment_user" placeholder="you review" id="comment'+film.name+'">' +
                        '<button class="btn btn-outline-dark send_comment" onclick="onAddCommentClick(\''+film.name+'\')">Добавить</button>' +
                    '</form>';
    const form = document.createElement("section");
    form.classList.add("new_comment_user");

    form.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    form.innerHTML = content;
    return form;
}

function getFilmBuyname(filmName) {
    return films.filter( f => f.name === filmName ) [0];//возвращает true если равенство верное
}

function getFilmComments(filmName) {
    const film = getFilmBuyname(filmName);
    return film.comments;
}

function onAddCommentClick(name) {
    const authorValue = document.getElementsByClassName("name_user").value;
    const commentValue = document.getElementsByClassName("comment_user").value;
    const film = getFilmBuyname(name);
    film.addComments(commentValue, authorValue);
    CategoryUp(film.category);
}









