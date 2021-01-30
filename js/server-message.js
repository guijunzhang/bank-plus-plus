function displayGreeting(greeting) {
  let api_endpoint = "http://localhost:8080/greeting"

  fetch(api_endpoint)
    .then(response => response.text())
    .then(response_text => greeting.textContent = response_text)
}


window.addEventListener("DOMContentLoaded", (event) => {
  const greeting = document.querySelector("#greeting")
  displayGreeting(greeting)
})
