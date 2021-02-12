const notesBtn = document.querySelector("#notes");
const toDoBtn = document.querySelector("#toDo");
const toDoSection = document.querySelector("#listSection");
const note = document.querySelector(".note");

notesBtn.addEventListener("click", function () {
    toDoSection.style.display = "none";
    note.style.display = "flex";
});

toDoBtn.addEventListener("click", function () {
    toDoSection.style.display = "flex";
    note.style.display = "none";

});