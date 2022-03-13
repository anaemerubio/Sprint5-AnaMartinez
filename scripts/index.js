// DOM button
const $JOKE_BUTTON = document.querySelector("#jokeButton");

// url API jokes
const API_URL = "https://icanhazdadjoke.com";

// Que cuando hagan click se llame a la API
$JOKE_BUTTON.addEventListener("click", () => getJoke(API_URL));

// async await 
async function getJoke(API_URL) {
    let joke = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json"
        }
      });

    let jokeJson = await joke.json();

    console.log(jokeJson.joke);
}