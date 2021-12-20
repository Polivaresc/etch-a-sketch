const container = document.querySelector("#container")

const newGridBtn = document.querySelector("#newGridBtn")
newGridBtn.addEventListener("click", newGrid)

function newGrid() {
    container.innerHTML = ""
    const num = parseInt(prompt("Enter a number between 0 and 100: "))
    
    if (isNaN(num) || num > 100 || num < 0) {
        alert("The input needs to be a number between 0 and 100")
        return newGrid()
    }

    container.style["grid-template-columns"] = `repeat(${num}, auto)`
    for (i=0; i<num*num; i++) {
        const squareDiv = document.createElement("div")
        squareDiv.classList = "cell"
        container.appendChild(squareDiv)
    }
}



