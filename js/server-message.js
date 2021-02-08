"use strict"

function displayGreeting(greeting) {
  let api_endpoint = "http://localhost:8080/greeting"

  fetch(api_endpoint, { credentials: "include" })
    .then((response) => response.text())
    .then((response_text) => (greeting.textContent = response_text))
}

window.addEventListener("DOMContentLoaded", () => {
  const greeting = document.querySelector("#greeting")
  displayGreeting(greeting)
})
