// URL API bromas
const API_URL = "https://icanhazdadjoke.com";

// API meteo
const API_METEO = 'https://api.openweathermap.org/data/2.5/weather?q=barcelona,es&lang=es&units=metric&appid=a0e6ac9e92dc18ce3cd493de048052d5';

// link p HTML para mostrar por pantalla
const $SHOW_METEO = document.querySelector("#showMeteo");

// Pulsar boton
const $JOKE_BUTTON = document.querySelector("#jokeButton");
// Enseñar por pantalla
const $PRINT_JOKE = document.querySelector("#printJoke");
// Array puntuacion usuario
let reportJoke = [];

// Que cuando hagan click se llame a la API
$JOKE_BUTTON.addEventListener("click", () => getJoke(API_URL));

window.addEventListener("load", () => {getMeteo(API_METEO); });

// Llamar API y mostrar por consola y pantalla (Ej1 y 2)
async function getJoke(API_URL) {
  let joke = await fetch(API_URL, {
      headers: {
        Accept: "application/json"
      }
  });

  let jokeJson = await joke.json(); //https://stackoverflow.com/questions/36975619/how-to-call-a-rest-web-service-api-from-javascript

  // Enseñar en consola
  console.log(jokeJson.joke);
  // Enseñar usuario
  $PRINT_JOKE.innerHTML = jokeJson.joke;
}

// Puntuar broma (Ej 3)
function scoreJoke(score) {
  let userPuntuation = {};
  userPuntuation.joke = document.getElementById("printJoke").innerHTML;
  userPuntuation.score = score;
  userPuntuation.date = new Date();

  reportJoke.push(userPuntuation);

  console.log(reportJoke);
}

// pillar API meteo (Ej4) https://openweathermap.org/current#geo
async function getMeteo() {
  const meteo = await fetch(API_METEO, {
    method: "GET",
    headers: {}
  });

  const meteoJSON = await meteo.json();
  // lo que saco del JSON de la API
  let place = meteoJSON.name;
  let weatherDescription = meteoJSON.weather[0].description;
  let currrentTemp = meteoJSON.main.temp;
  let weather = `Hoy en ${place}: ${currrentTemp} ºC y ${weatherDescription}.`;

  // Enseñar por consola y al usuario
  console.log(weather);
  $SHOW_METEO.innerHTML = weather;
}