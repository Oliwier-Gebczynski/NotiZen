const containerDiv = document.querySelector("*");
const switchBtn = document.querySelector("#switchBtn");

switchBtn.addEventListener("click", function(){
    containerDiv.classList.toggle("dark-theme");
})