// URL API bromas
const API_DAD_JOKES = "https://icanhazdadjoke.com";
// API meteo
const API_METEO = "https://api.openweathermap.org/data/2.5/weather?q=barcelona,es&lang=en&units=metric&appid=b3da016d9d44d0dbc6cae5783b7e3f8a";
// API Chuck Norris
const API_CHUCK_NORRIS = "https://api.chucknorris.io/jokes/random";
// link p HTML para mostrar por pantalla
const $SHOW_METEO = document.querySelector("#showMeteo");
// Pulsar boton
const $JOKE_BUTTON = document.querySelector("#jokeButton");
// Enseñar por pantalla
const $PRINT_JOKE = document.querySelector("#printJoke");
// Array puntuacion usuario
let reportJoke = [];
// Cuando hagan click muestra la broma de la API (Ahora random)
/* $JOKE_BUTTON.addEventListener("click", () => getJoke(API_DAD_JOKES)); */
/* $JOKE_BUTTON.addEventListener("click", () => getChuckNorrisJoke(API_CHUCK_NORRIS)); */
$JOKE_BUTTON.addEventListener("click", () => showRandomJoke());


// Cuando se cargue la página llama a la API meteorologica
window.addEventListener("load", () => {getMeteo(API_METEO); });

// Llamada de API dadjokes (Ej 1 y 2) https://stackoverflow.com/questions/36975619/how-to-call-a-rest-web-service-api-from-javascript
async function getJoke(API_DAD_JOKES) {
  let joke = await fetch(API_DAD_JOKES, {
      headers: {
        Accept: "application/json"
      }
  });
  let jokeJson = await joke.json();
  console.log(jokeJson.joke);
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

// Llamar API meteo (Ej4) https://openweathermap.org/current#geo | https://www.youtube.com/watch?v=GXrDEA3SIOQ&ab_channel=ShanjaiRaj
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
  let weather = `The weather in ${place} is: ${currrentTemp} ºC with ${weatherDescription}.`;
  console.log(weather);
  $SHOW_METEO.innerHTML = weather;
}

// Llamar API Chuck Norris (Ej 5 Parte 1)
async function getChuckNorrisJoke(API_CHUCK_NORRIS) {
  let jokeChuck = await fetch(API_CHUCK_NORRIS);
  let jokeChuckJSON = await jokeChuck.json();
  console.log(jokeChuckJSON.value);
  $PRINT_JOKE.innerHTML = `${jokeChuckJSON.value}`;
}

// Randomizador de broma (Ej 5 Parte 2)
function showRandomJoke() {
  let counter = Math.floor(Math.random()*(2 + 1));
  if (counter == 0) {
      getJoke(API_DAD_JOKES);
  } else {
      getChuckNorrisJoke(API_CHUCK_NORRIS);
  }
}