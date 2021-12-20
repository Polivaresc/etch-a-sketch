const container = document.querySelector("#container")

const newGridBtn = document.querySelector("#newGridBtn")
newGridBtn.addEventListener("click", newGrid)

let num

function newGrid(num) {
    num = prompt("Enter a number smaller than 100: ")
    for (i=0; i<num*num; i++) {
        const squareDiv = document.createElement("div")
        squareDiv.classList = "cell"
        container.appendChild(squareDiv)
    }
}



