const container = document.querySelector("#container")


for (i=0; i<16*16; i++) {
    const squareDiv = document.createElement("div")
    squareDiv.classList = "cell"
    container.appendChild(squareDiv)
}