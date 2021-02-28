const addBtn = document.querySelector("#add_note"); // pobranie przycisku do wykonania funkcji
const container = document.querySelector("#content_note"); // kontener do którego będą dodawane notatki

addBtn.addEventListener("click", function(){ // funkcja nasłuchująca kliknięcia przycisku i wykonanie funkcji anonimowej 
    const note = document.createElement('div'); // stworzenie notatki 
    note.classList.add("element"); // dodanie notatce klasy "element"

    const header = document.createElement('input'); // stworzenie tytułu notatki
    header.classList.add("element__header"); // dodanie klasy
    header.setAttribute("type", "text"); // nadanie atrybutów dla input 'type="text"
    header.setAttribute("placeholder", "Tytuł"); // dodanie podpowiedzi 'placeholder="Tytuł"

    const content = document.createElement('textarea'); // stworzenie miejsca na notatke
    content.classList.add("element__content"); // dodanie klasy
    content.setAttribute("type", "text"); // dodanie atrybutu text
    content.setAttribute("placeholder", "Zawartość notatki"); // dodanie podpowiedzi 

    const deleteBtn = document.createElement('button'); // stworznei przycisku "usuń"
    deleteBtn.classList.add("element__btn"); // dodanie klasy 
    deleteBtn.innerText = `x`; // wpisanie "X" jako znak przyciksu 
    
    note.appendChild(header); // dodanie tytułu do notatki
    note.appendChild(content); // dodanie miejsca na tekst do notatki
    note.appendChild(deleteBtn); // dodanie przyciku do notatki 

    deleteBtn.addEventListener('click', function () { // na przycisniecie przycisku "usun" wykonaj funkcje anonimowa
        note.remove(); // usun notatke
    });

    container.insertBefore(note, addBtn); //dodaj notatke na koniec kontenera
})