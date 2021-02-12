const addBtn = document.querySelector("#add_note");
const container = document.querySelector("#content_note");

addBtn.addEventListener("click", function(){
    const note = document.createElement('div');
    note.classList.add("element");

    const header = document.createElement('input');
    header.classList.add("element__header");
    header.setAttribute("type", "text");
    header.setAttribute("placeholder", "Tytuł");

    const content = document.createElement('textarea');
    content.classList.add("element__content");
    content.setAttribute("type", "text");
    content.setAttribute("placeholder", "Zawartość notatki");

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add("element__btn");
    deleteBtn.innerText = `x`;
    
    note.appendChild(header);
    note.appendChild(content);
    note.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function () {
        note.remove();
    });

    container.insertBefore(note, addBtn);
})