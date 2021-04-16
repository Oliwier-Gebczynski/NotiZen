const submitBtn = document.querySelector('#submit'); // pobranie przycisku 

submitBtn.addEventListener('click', function (event) { // na przycisk wykonaj anonimowa funkcje 
    event.preventDefault();
    const input = document.querySelector('#input').value; // pobierz zawartosc inputa
    const catalogue = document.querySelector('.catalogue'); // pobierz glowny katalog do ktorego beda dodawane todo

    if(input==''){ // jezeli input jest pusty pokaz alert
        alert("Wpisz dane w pole tekstowe!");
    }
    else{// jezeli ma zawartosc wykonaj 
        const data = {
            text: `${input}`
        };

        const listEl = document.createElement('div'); // stworzenie elementu
        listEl.classList.add("catalogue__element"); // dodanie klasy do elementu

        const content = document.createElement('h3');// stworzenie elementu
        content.classList.add("catalogue__element-content");// dodanie klasy do elementu
        content.innerText = `${input}`; // dodanie zawartosci inputa

        const doneBtn =  document.createElement('button');// stworzenie elementu
        doneBtn.classList.add("catalogue__element-done");// dodanie klasy do elementu
        doneBtn.innerText = '✔️'; // przycisk bedzie miał taki ptaszek 

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add("catalogue__element-delete");// dodanie klasy do elementu
        deleteBtn.innerText = `x`; // przycisk bedzie miał taki znak

        //dodawanie elementow do jednego toDo
        listEl.appendChild(content); 
        listEl.appendChild(doneBtn);
        listEl.appendChild(deleteBtn);
        

        deleteBtn.addEventListener('click', function () { // na przycisk "usun" usun notatke
            listEl.remove();
        });

        doneBtn.addEventListener('click', function(){ // na przycisk "ukończone" zmień kolor tekstu i border, przenies notatke na koniec listy i usun przycisk ukoncz zadanie 
            listEl.style.borderColor = 'rgb(4, 126, 0)';
            content.style.color = 'rgb(4, 126, 0)';
            catalogue.append(listEl);
            this.remove();
        })
    
        const inputReset = document.querySelector('#input').value = ''; // po stworzeniu notatki wyczysc input
        catalogue.appendChild(listEl); //dodaj todo do kontenera
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", data);
        xhttp.send();
    }
});