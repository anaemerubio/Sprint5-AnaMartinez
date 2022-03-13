// DOM button
const $JOKE_BUTTON = document.querySelector("#jokeButton");
const $PRINT_JOKE = document.querySelector("#printJoke");

// url API jokes
const API_URL = "https://icanhazdadjoke.com";

// Que cuando hagan click se llame a la API
$JOKE_BUTTON.addEventListener("click", () => getJoke(API_URL));

async function getJoke(API_URL) {
    let joke = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json"
        }
    });

    let jokeJson = await joke.json();

    // Enseñar en consola
    console.log(jokeJson.joke);
    // Enseñar en html
    $PRINT_JOKE.innerHTML = jokeJson.joke;
}
