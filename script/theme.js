// pobranie elementów z html
const containerDiv = document.querySelector("*");
const switchBtn = document.querySelector("#switchBtn");


switchBtn.addEventListener("click", function(){ // na klikniecei przycisku dodaj klase z ciemnymi kolorami 
    containerDiv.classList.toggle("dark-theme");
})