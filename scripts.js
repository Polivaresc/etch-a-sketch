const container = document.querySelector("#container")

const newGridBtn = document.querySelector("#newGridBtn")
newGridBtn.addEventListener("click", newGrid)

function newGrid() {
    let brightness = 1
    container.innerHTML = ""
    const num = parseInt(prompt("Enter a number between 0 and 100: "))
    
    if (isNaN(num) || num > 100 || num < 0) {
        alert("The input needs to be a number between 0 and 100")
        return newGrid()
    }

    container.style["grid-template-columns"] = `repeat(${num}, auto)`

    const randomColor = Math.floor(Math.random()*16777215).toString(16)

    for (i=0; i<num*num; i++) {
        const squareDiv = document.createElement("div")
        squareDiv.style["background-color"] = "gainsboro"

        squareDiv.addEventListener("mouseover", () => {
            squareDiv.style["background-color"] = "#" + randomColor
            squareDiv.style.filter = `brightness(${brightness})`
            brightness = Math.max(brightness - 0.1, 0)
        })
        container.appendChild(squareDiv)
    }
}

