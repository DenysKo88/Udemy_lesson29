'use strict';

let numberOfFilms;

function start (){
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
    while(numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
    }
}
start(); 

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

function rememberMyFilms(){
    for(let i=0; i<2; i++){
        const a = prompt("Один из последних просмотренных фильмов?", "");
        const b = prompt("На сколько оцените его?", "");
        personalMovieDB.movies[a] = b;
    
        if(a!=null && b!=null && a!='' && b!=''&& a.length<50){
            console.log('done');
        }else{
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count<10){
        console.log("Просмотрено довольно мало фильмов");
    }else if(personalMovieDB.count>=10 && personalMovieDB.count<30){
        console.log("Вы классический зритель");
    }else if(personalMovieDB.count>=30){
        console.log("Вы киноман!");
    }else{
        console.log("Произошла ошибка!");
    }
}
detectPersonalLevel();

function showMyDB(){
    if(personalMovieDB.genres !== true){
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYourGenres(){
    
    for(let i=1; i<4; i++){
        const genres = prompt(`Ваш любимый жанр под номером ${i}?`, '');
        personalMovieDB.genres[i-1] = genres;

        // personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`, '');//можно и таким способом, без использования переменной
    }
}
writeYourGenres();
console.log(personalMovieDB);