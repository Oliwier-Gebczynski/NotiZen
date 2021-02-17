const notesBtn = document.querySelector("#notes");
const toDoBtn = document.querySelector("#toDo");
const toDoSection = document.querySelector("#listSection");
const home = document.querySelector("#home");
const note = document.querySelector(".note");
const footer = document.querySelector("#footer");
const homeBtn = document.querySelector("#homeBtn");

notesBtn.addEventListener("click", function () {
    toDoSection.style.display = "none";
    note.style.display = "flex";
    home.style.display = "none";
    footer.style.display = "none";
});

toDoBtn.addEventListener("click", function () {
    toDoSection.style.display = "flex";
    note.style.display = "none";
    home.style.display = "none"
    footer.style.display = "none";
});

homeBtn.addEventListener("click", function(){
    toDoSection.style.display = "none";
    note.style.display = "none";
    home.style.display = "flex";
    footer.style.display = "block";
})