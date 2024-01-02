//prerequsites
//An eventlistener for the button
//fetch advice from the restFul API

//Fetching the dat from the API
let card = document.querySelector(".card-content");
let wrap = document.querySelector(".card");
function fetchAdvice() {
  document.querySelector(".btn").addEventListener("click", (event) => {
    event.preventDefault();
    fetch("https://api.adviceslip.com/advice")
      .then((Response) => Response.json())
      .then((data) => {
        let span = document.querySelector(".advice-id");
        let p = document.querySelector(".advice");
        span.textContent = `Advice # ${data.slip.id}`;
        p.textContent = `"${data.slip.advice}"`
        card.append(span,p);
      });
  });
}
fetchAdvice();
//Toggling from dark mode to light mode and vice versa
function darkMode(){
    const dark = document.querySelector(".night") 
    dark.addEventListener('click',(event) =>{
        event.preventDefault()
        let body= document.body
        body.classList.toggle("dark-mode")
        wrap.classList.toggle("card-mode")
    })
}
darkMode()

