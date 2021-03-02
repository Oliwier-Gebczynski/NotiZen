const startBtn = document.querySelector('#startBtn');
const timerDisplay = document.querySelector('#timer');
const timerDiv = document.querySelector('.timer');
const coinDisplay = document.querySelector('#coinDisplay'); //pobranie elementów
let countdown;
let coin = 0;

startBtn.addEventListener("click", function(){
    let hoursWeb = parseInt(document.querySelector('#hours').value);
    let minutesWeb = parseInt(document.querySelector('#minutes').value);
    let secondsWeb = parseInt(document.querySelector('#seconds').value);//pobranie zawartosci inputa
    const stopPomodoro = document.querySelector('#stopPomodoro');
    const pomodoroForm = document.querySelector('#pomodoroForm');// pobranie elementów
    
    pomodoroForm.style.display = "none"; //zmiana widocznosci
    timerDiv.style.display = "flex";

    if(isNaN(hoursWeb)){ // jezeli uzytkownik nie wpisał wartości do inputa automatycznie dostaje wartość 0
        hoursWeb = 0;
    }
    if(isNaN(minutesWeb)){
        minutesWeb = 0;
    }
    if(isNaN(secondsWeb)){
        secondsWeb = 0;
    }

    let time = hoursWeb*3600 + minutesWeb*60 + secondsWeb + 1 ; // policzenie sekund
    const now = Date.now();  // pobranie aktualnego czasu w ms
    const then = now + time *1000 ; // oblicznie do kiedy ma pracować kod ( *1000 zeby było w ms)

    countdown = setInterval(() => { // setInterval to funkcja która wykonuje sie co określony czas poki jej nie zatrzymamy 
        const secondsToEnd = Math.round((then - Date.now()) / 1000); // obliczenie ilości sekund 

        if(secondsToEnd < 0){ // jezeli skonczy sie czas to dodaj coin, zmien widocznosc elementów, przerwij funkcje setInterval
            coin = Math.floor(coin+time / 60);
            coinDisplay.textContent = `|${coin}`;
            pomodoroForm.style.display = "flex";
            timerDiv.style.display = "none";
            clearInterval(countdown);
            return coin;
        }

        stopPomodoro.addEventListener("click", function(){ // na przycisk zmienia widocznosc elementów, przerwanie funkcji setInterval
            clearInterval(countdown);
            pomodoroForm.style.display = "flex";
            timerDiv.style.display = "none";
            return;
        })

        displayTimer(secondsToEnd); // wykonanie funkcji wyswietlajacej timer
    }, 1000); // 1000ms = 1s funkcja wykonuje sie co sekunde 

});

function displayTimer(seconds){  // funkcja do ktorej trzeba wprowadzic ilosc sekund
    const hours = Math.floor(seconds / 3600); // 3600s = 1h  floor zwraca najblizsza najwieksza liczbe calkowita
    
    const minutesLeft = seconds%3600; // jesli godziny sa wyznaczone to trzeba wyciagnac reszte czasu %zwraca reszte z dzielenia 
    const minutes = Math.floor(minutesLeft / 60); // z tej reszty wydzielam minuty 
    
    const secondsLeft = seconds % 60; // z ostatnich sekund za pomoca % wyciagam pozostale sekundy 
    
    const display = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`; // jezeli jest mniej niz 10 to niech ten element pokazuje 0, a jesli jest wiekszy to nic nie zmienia
    timerDisplay.textContent = display; // wpisanie tekstu do timera
}

