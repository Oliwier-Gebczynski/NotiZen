const notesBtn = document.querySelector("#notes");
const toDoBtn = document.querySelector("#toDo");
const toDoSection = document.querySelector("#listSection");

notesBtn.addEventListener("click", function () {
    toDoSection.style.display = "none";
});

toDoBtn.addEventListener("click", function () {
    toDoSection.style.display = "flex";
});