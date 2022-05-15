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

    let board = ["","","","","","","","",""]
    console.log(board)
    // define players

    let playerOne = createPlayer("playerOne", "x", [])
    let playerTwo = createPlayer("playerTwo", "o", [])

    // win conditions

    const winCondition = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    console.log(winCondition[0[0]])  
    // display squares for each array item

    let squares = document.querySelector(".squares")

    for (let i = 0; i<board.length; i++) {
        let square = document.createElement("button")
        square.classList.add("square")
        square.setAttribute("id", i + 1)
        squares.appendChild(square) 
    }
    
    // add event listener to each square
    let currentPlayer = playerOne
    Array.from(squares.children).forEach((item, index) => {
        item.addEventListener("click", () => {
            if (currentPlayer == playerTwo && item.textContent == "" ) {
                item.textContent = playerTwo.marker
                board.splice(index, 1, playerTwo.marker)
                console.log(board)
                currentPlayer = playerOne

            } else if (currentPlayer == playerOne && item.textContent == "") {
                item.textContent = playerOne.marker
                board.splice(index, 1, playerOne.marker)
                console.log(board)
                currentPlayer = playerTwo
            }
        })
    })

    // winning condition

    function winCheck() {
        winCondition.forEach((item,index) => {
            
        })
    }
    // return 
    return {
        board,
    }
})()



const displayController = (() => {
    
    
    
})()






