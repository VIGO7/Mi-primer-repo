const Temas= [
    "Joker",
    "Skull",
    "Phanter",
    "Mona",
    "Fox",
    "Queen",
    "Oracle",
    "Noir",
    "Crow"
 ];

let temaActual = 0;

function personajes() {
    //const parrafos = document.querySelectorAll('p');
    const elParrafo = document.querySelector('.un-p');
    temaActual = (temaActual + 1) % Temas.length;
    elParrafo.innerHTML = Temas[temaActual];
}