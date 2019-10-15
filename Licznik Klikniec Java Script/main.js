// POBIERAMY POTRZEBNE ZMIENNE
let counter=0;



// POBIERAMY POTRZEBNE ELEMENTY STRONY

let spanCounter = document.querySelector("span.counter");
let btnAdd =document.querySelector("button.add");
let btnMinus = document.querySelector("button.minus");


btnAdd.addEventListener("click", function( ) { counter=counter +1;
    spanCounter.textContent=counter;
}
);

btnMinus.addEventListener("click", function(){ counter=counter -1;
spanCounter.textContent=counter;})



