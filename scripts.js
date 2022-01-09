const container = document.querySelector("#container")

const newGridBtn = document.querySelector("#newGridBtn")
newGridBtn.addEventListener("click", newGrid)

function newGrid() {
    let arBrightness = []
    

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
        squareDiv.setAttribute('class', 'cell')
        squareDiv.setAttribute('id', i)

        const br = {id: i, value: 1}
        arBrightness.push(br)
        
        squareDiv.style["background-color"] = "gainsboro"

        
        container.appendChild(squareDiv)
    }
    
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener("mouseover", () => {
            const id = parseInt(cell.getAttribute('id'))
            const brightness = arBrightness.find(br => br.id === id)
    
            cell.style["background-color"] = "#" + randomColor
            cell.style.filter = `brightness(${brightness.value})`
    
            brightness.value = Math.max(brightness.value - 0.2, 0)
        })
    })

}