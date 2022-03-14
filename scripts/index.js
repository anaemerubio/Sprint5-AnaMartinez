/* CONSTANTES */

// URL API bromas
const API_URL = "https://icanhazdadjoke.com";
// Pulsar boton
const $JOKE_BUTTON = document.querySelector("#jokeButton");
// Enseñar por pantalla
const $PRINT_JOKE = document.querySelector("#printJoke");

/* VARIABLES */

// Array puntuacion usuario
let reportJoke = [];

// Que cuando hagan click se llame a la API
$JOKE_BUTTON.addEventListener("click", () => getJoke(API_URL));

// Llamar API y mostrar por consola y pantalla (Ej1 y 2)
async function getJoke(API_URL) {
  let joke = await fetch("https://icanhazdadjoke.com/", {
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