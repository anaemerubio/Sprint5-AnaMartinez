const API_DAD_JOKES = "https://icanhazdadjoke.com";
const API_METEO = "https://api.openweathermap.org/data/2.5/weather?q=barcelona,es&lang=en&units=metric&appid=b3da016d9d44d0dbc6cae5783b7e3f8a";
const API_CHUCK_NORRIS = "https://api.chucknorris.io/jokes/random";

const $SHOW_METEO = document.querySelector("#showMeteo");
const $JOKE_BUTTON = document.querySelector("#jokeButton");
const $PRINT_JOKE = document.querySelector("#printJoke");

let reportJoke = [];

$JOKE_BUTTON.addEventListener("click", () => showRandomJoke());
window.addEventListener("load", () => {getMeteo(API_METEO); });

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

function scoreJoke(score) {
  let userPuntuation = {};
  userPuntuation.joke = document.getElementById("printJoke").innerHTML;
  userPuntuation.score = score;
  userPuntuation.date = new Date();
  reportJoke.push(userPuntuation);
  console.log(reportJoke);
}

async function getMeteo() {
  const meteo = await fetch(API_METEO, {
    method: "GET",
    headers: {}
  });

  const meteoJSON = await meteo.json();
  let place = meteoJSON.name;
  let weatherDescription = meteoJSON.weather[0].description;
  let currrentTemp = meteoJSON.main.temp;
  let weather = `The weather in ${place} is: ${currrentTemp} ºC with ${weatherDescription}.`;

  console.log(weather);
  $SHOW_METEO.innerHTML = weather;
}

async function getChuckNorrisJoke(API_CHUCK_NORRIS) {
  let jokeChuck = await fetch(API_CHUCK_NORRIS);
  let jokeChuckJSON = await jokeChuck.json();
  console.log(jokeChuckJSON.value);
  $PRINT_JOKE.innerHTML = `${jokeChuckJSON.value}`;
}

function showRandomJoke() {
  let counter = Math.floor(Math.random()*(2 + 1));
  if (counter == 0) {
      getJoke(API_DAD_JOKES);
  } else {
      getChuckNorrisJoke(API_CHUCK_NORRIS);
  }
}