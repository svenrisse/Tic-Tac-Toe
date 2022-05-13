// player factory function
    const createPlayer = (name, marker) => {
        return {name, marker}
    }

// module for gameboard

const gameBoard = (() => {
    
    // generate board array

    let board = ["x","x","o","x","o","x","x","o","o"]
        
    // display squares for each array item

    let squares = document.querySelector(".squares")

    board.forEach(() => {
        let square = document.createElement("button")
        square.classList.add("square")
        squares.appendChild(square)
    })
    
    // add event listener to each square
    let turn = 1

    document.querySelectorAll(".square").forEach(item => {
        item.addEventListener("click", event => {
            if (turn % 2 == 0 && item.textContent == "" ) {
                item.textContent = "o"
                turn++

            } else if (item.textContent == "") {
                item.textContent = "x"
                turn++
            }
        })
    })
    
    // return 
    return {
        board
    }
})()



const game = (() => {
    
    // define players


})()





