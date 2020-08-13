const grid = document.querySelector('.grid');
const squaresArray = [];

const width = 13;

/*
 0 - empty
 1 - Rot Korb
 2 - Rot Startfeld
 3 - Rot Ziel
 4 - Blau Korb
 5 - Blau Startfeld
 6 - Blau Ziel
 7 - Grün Korb
 8 - Grün Startfeld
 9 - Grün Ziel
 10 - Gelb Korb
 11 - Gelb Startfeld
 12 - Gelb Ziel
 13 - Leeres Feld
*/

const layout = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 0, 0, 13, 13, 5, 0, 0, 4, 4, 0,
    0, 1, 1, 0, 0, 13, 6, 13, 0, 0, 4, 4, 0,
    0, 0, 0, 0, 0, 13, 6, 13, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 13, 6, 13, 0, 0, 0, 0, 0,
    0, 2, 13, 13, 13, 13, 6, 13, 13, 13, 13, 13, 0,
    0, 13, 3, 3, 3, 3, 0, 9, 9, 9, 9, 13, 0,
    0, 13, 13, 13, 13, 13, 12, 13, 13, 13, 13, 8, 0,
    0, 0, 0, 0, 0, 13, 12, 13, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 13, 12, 13, 0, 0, 0, 0, 0,
    0, 10, 10, 0, 0, 13, 12, 13, 0, 0, 7, 7, 0,
    0, 10, 10, 0, 0, 11, 13, 13, 0, 0, 7, 7, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];



function createBoard() {
    for (let i = 0; i < layout.length; i++) {
        
        const field = document.createElement('div');
        grid.appendChild(field);
        squaresArray.push(field);

        if (layout[i] === 0) {
            squaresArray[i].classList.add('empty');
        } else if (layout[i] === 1) {
            squaresArray[i].classList.add('red-basket');
        } else if (layout[i] === 2) {
            squaresArray[i].classList.add('red-startField');
        } else if (layout[i] === 3) {
            squaresArray[i].classList.add('red-goal');
        } else if (layout[i] === 4) {
            squaresArray[i].classList.add('blue-basket');
        } else if (layout[i] === 5) {
            squaresArray[i].classList.add('blue-startField');
        } else if (layout[i] === 6) {
            squaresArray[i].classList.add('blue-goal');
        } else if (layout[i] === 7) {
            squaresArray[i].classList.add('green-basket');
        } else if (layout[i] === 8) {
            squaresArray[i].classList.add('green-startField');
        } else if (layout[i] === 9) {
            squaresArray[i].classList.add('green-goal');
        } else if (layout[i] === 10) {
            squaresArray[i].classList.add('yellow-basket');
        } else if (layout[i] === 11) {
            squaresArray[i].classList.add('yellow-startField');
        } else if (layout[i] === 12) {
            squaresArray[i].classList.add('yellow-goal');
        } else if (layout[i] === 13) {
            squaresArray[i].classList.add('empty-field');
        } 
    }

}

createBoard();