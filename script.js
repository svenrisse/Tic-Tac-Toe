// player factory function
    const createPlayer = (name, marker, played = []) => {
        return {
            name,
            marker,
            played
        }
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
        item.addEventListener("click", () => {
            if (turn % 2 == 0 && item.textContent == "" ) {
                item.textContent = "o"
                playerOne.
                turn++

            } else if (item.textContent == "") {
                item.textContent = "x"
                turn++
            }
        })
    })
    
    // return 
    return {
        board,
        turn
    }
})()



const game = (() => {
    
    // define players

    const playerOne = createPlayer("playerOne", "x", [""])
    const playerTwo = createPlayer("playerTwo", "o", [""])
    
    // win conditions

    const winCondition = [
        "1, 2, 3",
        "4, 5, 6",
        "7, 8, 9",
        "1, 4, 7",
        "2, 5, 8",
        "3, 6, 9",
        "1, 5, 9",
        "3, 5, 7"
    ]
    // add clicked square to array of player 
    

    
    
    
    // check if last move was a winning move



    // return 
    return {
        playerOne,
        playerTwo
    }
})()





