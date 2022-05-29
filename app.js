//+ una griglia di gioco quadrata
const gridContainer = document.querySelector(".grid-container");

//+ celle 
function createGrid(xCells, yCells) {
    //calcolo quantità celle
    const cellsNumber = xCells * yCells;
    console.log(cellsNumber);

    //metto lo style con il calcolo delle celle fuori dal ciclo for altrimenti si ripete ad ogni cella
    gridContainer.style.width = `calc(50px * ${xCells})`; 

    //+ le singole celle
    for(let i = 0; i < cellsNumber; i++) {
        const numbers = (1);
        //+ div che rappresenta la singola cella
        const cell = document.createElement("div");
        //+ cella
        cell.classList.add("cell");
        cell.innerHTML = `<div>${numbers}</div>`
        //+ celle al grid container
        gridContainer.append(cell);
    }

}   

createGrid(10, 10);